import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type GalleryProps = {
  photos: string[];
};

export function Gallery({ photos }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <main
      onContextMenu={(e) => e.preventDefault()}
      className="min-h-screen bg-black text-white px-4 py-12"
    >
      <Button
        asChild
        variant="outline"
        className="absolute top-4 right-4 font-avenir border-stone-300 rounded-xl hover:bg-orange-200 hover:text-black transition-colors"
      >
        <Link to="/">Home</Link>
      </Button>
      <h1 className="text-4xl font-avenir text-orange-200 text-center mb-8">
        Gallery
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Photo ${i + 1}`}
            loading="lazy"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="w-full mb-4 rounded-lg shadow object-cover break-inside-avoid cursor-pointer transition-transform duration-200 hover:scale-105"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((url) => ({ src: url }))}
      />
    </main>
  );
}
