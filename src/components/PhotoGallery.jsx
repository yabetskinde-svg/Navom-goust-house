import { useState, useCallback, useEffect, useRef } from "react";
import { Expand } from "lucide-react";
import Reveal from "./Reveal";
import Modal from "./Modal";

import exterior from "../assets/exterior.jpg";
import hallway from "../assets/hallway.jpg";
import room1 from "../assets/room-1.jpg";
import room2 from "../assets/room-2.jpg";
import room3 from "../assets/room-3.jpg";
import room4 from "../assets/room-4.jpg";
import room5 from "../assets/room-5.jpg";

const PHOTOS = [
  { src: exterior, alt: "Navom Guest House building exterior", tag: "Exterior", tall: true },
  { src: room2, alt: "Deluxe Mirror Room interior", tag: "Rooms" },
  { src: hallway, alt: "A bright, polished hallway inside Navom Guest House", tag: "Hallway", tall: true },
  { src: room4, alt: "Classic Wood Room interior", tag: "Rooms" },
  { src: room1, alt: "Garden View Room interior", tag: "Rooms", tall: true },
  { src: room5, alt: "Twin Comfort Room interior", tag: "Rooms" },
  { src: room3, alt: "Executive Comfort Room interior", tag: "Rooms" },
];

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative bg-[#f7f2ea] py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#6b1f2a]">
            <span className="h-px w-8 plate-rule" />
            Gallery
          </span>
          <h2
            id="gallery-heading"
            className="font-display text-4xl sm:text-5xl text-[#211a16] mt-4 max-w-xl leading-[1.1]"
          >
            A closer look
            <br />
            <span className="italic text-[#6b1f2a]">around the property.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-3 sm:gap-4 mt-12">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 60}
              className={photo.tall ? "row-span-2" : "row-span-1"}
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="group relative w-full h-full rounded-xl overflow-hidden focus-visible:ring-2 focus-visible:ring-[#ac8a4e]"
                aria-label={`Open photo: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-[#170f0c]/0 group-hover:bg-[#170f0c]/25 transition-colors duration-300" />
                <span className="absolute top-2.5 left-2.5 text-[10px] tracking-[0.2em] uppercase text-[#f7f2ea] bg-[#170f0c]/60 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.tag}
                </span>
                <Expand
                  size={16}
                  className="absolute bottom-2.5 right-2.5 text-[#f7f2ea] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        photo={activeIndex !== null ? PHOTOS[activeIndex] : null}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}

function Lightbox({ open, photo, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onPrev, onNext]);

  if (!photo) return null;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) onPrev();
    else if (delta < -50) onNext();
    touchStartX.current = null;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="lightbox-caption"
      panelClassName="max-w-4xl"
    >
      <div
        className="flex flex-col items-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[75vh] w-auto rounded-lg object-contain"
        />
        <p
          id="lightbox-caption"
          className="text-[#f7f2ea] text-sm mt-4 text-center"
        >
          {photo.alt}
        </p>

        <div className="flex items-center gap-4 mt-5">
          <button
            onClick={onPrev}
            className="rounded-full border border-[#f7f2ea]/30 hover:border-[#ac8a4e] text-[#f7f2ea] px-5 py-2.5 text-sm transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            className="rounded-full border border-[#f7f2ea]/30 hover:border-[#ac8a4e] text-[#f7f2ea] px-5 py-2.5 text-sm transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </Modal>
  );
}
