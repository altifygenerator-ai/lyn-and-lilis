"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/shower-clean.jpeg",
  "/images/shower-dirty.jpeg",
  "/images/shower-clean2.jpeg",

  "/images/lazy-susan-clean.jpeg",
  "/images/lazy-susan-clean2.jpeg",
  "/images/lazy-susan-dirty.jpeg",
  "/images/lazy-susan-dirty2.jpeg",

  "/images/stove-clean.jpeg",
  "/images/stove-dirty.jpeg",

  "/images/bathroom-2.jpg",
  "/images/sink-2.jpg",
  "/images/livingroom-1.png",
  "/images/livingroom-2.png",
];
export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex];

  const goNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl px-5"
        >
          <p className="font-script text-4xl text-[var(--pink)]">
            Fresh spaces
          </p>

          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            A cleaner home, without the stress.
          </h2>

          <p className="mt-4 text-black/65">
            These are just example photos for now — as we start working with
            local homes, we’ll be updating this with real cleanings so you can
            see our actual results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="px-5"
        >
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--pink-soft)] shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous gallery image"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-[var(--gray-dark)] shadow-lg transition hover:bg-white"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next gallery image"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-[var(--gray-dark)] shadow-lg transition hover:bg-white"
            >
              ›
            </button>

            <button
              type="button"
              onClick={goNext}
              className="block w-full cursor-pointer"
              aria-label="Click to view next gallery image"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt="Clean home service example"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="h-[360px] w-full object-cover sm:h-[500px] lg:h-[620px]"
                />
              </AnimatePresence>
            </button>

            <div className="absolute bottom-4 left-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--gray-dark)] shadow-lg backdrop-blur -translate-x-1/2">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-3">
            {images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View gallery image ${index + 1}`}
                className={`shrink-0 overflow-hidden rounded-2xl border-4 transition ${
                  activeIndex === index
                    ? "border-[var(--pink)] opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt="Clean home service thumbnail"
                  className="h-24 w-28 object-cover sm:h-28 sm:w-36"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}