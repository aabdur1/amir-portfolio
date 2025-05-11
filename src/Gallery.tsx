import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
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

  return (
    <main
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-black text-white px-4 py-4"
    >
      <Navbar />
      <h1 className="text-4xl font-avenir text-orange-200 text-center mb-8 mt-4">
        Gallery
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <div key={i} className="break-inside-avoid mb-4">
            <img
              src={photo.url}
              alt={`Photo ${i + 1}`}
              loading="lazy"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="w-full rounded-lg shadow object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
            />
            <div className="mt-1 font-avenir text-xs text-gray-400">
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
        slides={photos.map((photo) => ({ src: photo.url }))}
      />
    </main>
  );
}
