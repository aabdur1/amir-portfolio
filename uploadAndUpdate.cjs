const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const BUCKET_NAME = "amirabdurrahim-photos";
const REGION = "us-east-2";
const FOLDER = "/Volumes/T7/my-photos";
const DEST_JSON = "./data/photos.json";
const TEMP_META = "./metadata.json";
const PROCESSED_FOLDER = path.join(FOLDER, "processed");

const s3BaseUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/`;

// Ensure processed folder exists
if (!fs.existsSync(PROCESSED_FOLDER)) {
  fs.mkdirSync(PROCESSED_FOLDER);
}

// Step 1: Upload new photos to S3
console.log("⏫ Uploading to S3...");
execSync(
  `aws s3 sync "${FOLDER}" s3://${BUCKET_NAME} --exclude "processed/*" --exclude ".*"`
);

// Step 2: Extract EXIF metadata
console.log("🔍 Extracting metadata...");
execSync(`exiftool -json "${FOLDER}" > ${TEMP_META}`);

// Step 3: Read existing and new metadata
let existing = [];
if (fs.existsSync(DEST_JSON)) {
  existing = JSON.parse(fs.readFileSync(DEST_JSON));
}
const rawMeta = fs.readFileSync(TEMP_META, "utf-8");
let newMeta = [];
try {
  const rawMeta = fs.readFileSync(TEMP_META, "utf-8").trim();
  newMeta = rawMeta ? JSON.parse(rawMeta) : [];
} catch (err) {
  console.warn(
    "⚠️ Warning: Could not parse metadata.json, continuing with empty metadata."
  );
}

// Only include photos in the top-level my-photos folder
const filtered = newMeta.filter(
  (p) => path.dirname(p.SourceFile) === path.resolve(FOLDER)
);
if (filtered.length === 0) {
  console.log(
    "⚠️ No new local images to process, verifying existing metadata only..."
  );
}

const cleaned = filtered.map((photo) => ({
  url: `${s3BaseUrl}${path.basename(photo.SourceFile)}`,
  date: photo.DateTimeOriginal
    ? photo.DateTimeOriginal.split(" ")[0].replace(/:/g, "-")
    : "unknown",
  camera: photo.Model || "unknown",
  lens: photo.LensModel || "unknown",
}));

// Step 4: Merge and deduplicate
const merged = [...existing, ...cleaned];
const unique = Array.from(new Map(merged.map((p) => [p.url, p])).values());

// Step 5: Verify which photos still exist in S3
console.log("🔎 Verifying which photos still exist in S3...");

const s3List = execSync(`aws s3 ls s3://${BUCKET_NAME} --recursive`)
  .toString()
  .split("\n")
  .filter((line) => line.trim() !== "")
  .map((line) => line.trim().split(/\s+/).pop());

const s3Urls = new Set(s3List.map((name) => `${s3BaseUrl}${name}`));
const final = unique.filter((photo) => s3Urls.has(photo.url));

// Step 6: Ensure only valid image files are included
const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
const finalImagesOnly = final.filter((photo) => {
  const ext = path.extname(photo.url).toLowerCase();
  return imageExtensions.includes(ext);
});
const removed = unique.filter((photo) => !finalImagesOnly.includes(photo));
if (removed.length > 0) {
  console.log("🧹 Removed stale or invalid entries:");
  removed.forEach((photo) => console.log("  ❌", photo.url));
}

console.log(`✅ Verified ${final.length} photo(s) still exist on S3.`);
console.log(
  `✅ Confirmed ${finalImagesOnly.length} image(s) are valid image files.`
);

// Step 7: Save updated and verified JSON
fs.writeFileSync(DEST_JSON, JSON.stringify(finalImagesOnly, null, 2));
console.log(`✅ Updated ${DEST_JSON} with verified photo list.`);

// Step 8: Move processed files
console.log("📁 Moving processed files...");
filtered.forEach((photo) => {
  const fileName = path.basename(photo.SourceFile);
  const src = path.join(FOLDER, fileName);
  const dest = path.join(PROCESSED_FOLDER, fileName);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
  }
});

// Step 9: Sync to React app
fs.copyFileSync("./data/photos.json", "./src/photos.json");
console.log("📁 Synced updated photos.json to ./src/");

console.log(`📸 Total valid photos in final JSON: ${finalImagesOnly.length}`);
console.log("✅ Done!");
