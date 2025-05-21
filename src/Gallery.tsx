import { useState } from "react";
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
    <main
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-background text-foreground px-4 py-4"
    >
      <Navbar />
      <div className="relative mt-4 mb-4 px-4">
        <h1 className="text-4xl font-avant text-foreground text-center">
          Gallery
        </h1>
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

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
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
              alt={`Photo ${i + 1}`}
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
  );
}
