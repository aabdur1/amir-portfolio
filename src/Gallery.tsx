import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

type Photo = {
  url: string;
  date: string;
  camera: string;
  lens: string;
};

type GalleryProps = {
  photos: Photo[];
};

export function Gallery({ photos }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [sortBy, setSortBy] = useState("date");

  const sortedPhotos = [...photos].sort((a, b) => {
    if (sortBy === "date") return (a.date || "").localeCompare(b.date || "");
    if (sortBy === "camera")
      return (a.camera || "").localeCompare(b.camera || "");
    if (sortBy === "lens") return (a.lens || "").localeCompare(b.lens || "");
    return 0;
  });

  return (
    <>
      <Helmet>
        <title>Photography Gallery | Amir Abdur-Rahim</title>
        <meta
          name="description"
          content="Photography portfolio by Amir Abdur-Rahim featuring landscape and portrait work. Professional camera equipment including Sony and Canon systems with various lenses. Chicago-based photographer."
        />
        <meta
          name="keywords"
          content="photography portfolio, landscape photography, portrait photography, Sony camera, Canon camera, photo gallery, Chicago photographer, professional photography"
        />

        <meta
          property="og:title"
          content="Photography Gallery - Amir Abdur-Rahim"
        />
        <meta
          property="og:description"
          content="Professional photography portfolio showcasing landscape and portrait work with detailed camera and lens information."
        />
        <meta property="og:url" content="https://amirabdurrahim.com/gallery" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Photography Gallery - Amir Abdur-Rahim"
        />
        <meta
          name="twitter:description"
          content="Professional photography portfolio with landscape and portrait work"
        />

        <link rel="canonical" href="https://amirabdurrahim.com/gallery" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Amir Abdur-Rahim Photography Gallery",
            description:
              "Photography portfolio featuring landscape and portrait work",
            url: "https://amirabdurrahim.com/gallery",
            author: {
              "@type": "Person",
              name: "Amir Abdur-Rahim",
              url: "https://amirabdurrahim.com",
            },
            genre: ["Landscape Photography", "Portrait Photography"],
            numberOfItems: photos.length,
          })}
        </script>
      </Helmet>

      <Navbar />
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="min-h-screen bg-background text-foreground"
      >
        <main className="px-4 py-8">
          <div className="relative mb-4 px-4">
            <header>
              <h1 className="text-4xl font-avant text-foreground text-center">
                Photography Gallery
              </h1>
            </header>
            <div className="mt-4 flex justify-center sm:justify-end">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background text-foreground border border-foreground rounded-md shadow-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-background text-foreground border border-foreground rounded-md shadow-sm">
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="camera">Camera</SelectItem>
                  <SelectItem value="lens">Lens</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-4">
            {sortedPhotos.map((photo, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={photo.url}
                  alt={`Photography by Amir Abdur-Rahim taken on ${photo.date} with ${photo.camera} and ${photo.lens}`}
                  loading="lazy"
                  className="w-full rounded-lg shadow-floaty object-cover"
                />
                <div className="mt-1 font-avenir text-xs text-foreground">
                  <p>{photo.date}</p>
                  <p>{photo.camera}</p>
                  <p>{photo.lens}</p>
                </div>
              </div>
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={sortedPhotos.map((photo) => ({ src: photo.url }))}
            plugins={[Zoom]}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
