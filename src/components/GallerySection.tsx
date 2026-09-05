"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/images/latest-work/closet-declutter-after.webp",
    alt: "Organized walk-in closet after decluttering and home organization",
  },
  {
    src: "/images/latest-work/kids-closet-after.webp",
    alt: "Kids closet after toys and dress-up items were organized",
  },
  {
    src: "/images/latest-work/window-sill-after.webp",
    alt: "Clean window sill after detailed house cleaning",
  },
  {
    src: "/images/latest-work/wall-spot-after.webp",
    alt: "Wall and doorway area after spot cleaning",
  },
  {
    src: "/images/latest-work/toilet-lid-after.webp",
    alt: "Clean toilet after bathroom detail cleaning",
  },
  {
    src: "/images/latest-work/toilet-base-after.webp",
    alt: "Clean toilet base and floor edge after detail cleaning",
  },
  {
    src: "/images/latest-work/bathroom-sink-after.webp",
    alt: "Clean bathroom sink and vanity after detailed cleaning",
  },
  {
    src: "/images/latest-work/kitchen-sink-after.webp",
    alt: "Kitchen sink after cleaning",
  },
  {
    src: "/images/after-1.png",
    alt: "Clean kitchen after house cleaning",
  },
  {
    src: "/images/after-2.png",
    alt: "Clean bathroom after house cleaning",
  },
  {
    src: "/images/after-3.png",
    alt: "Clean living room after house cleaning",
  },
  {
    src: "/images/clean-sink.jpeg",
    alt: "Freshly cleaned sink detail",
  },
  {
    src: "/images/clean-tub.jpeg",
    alt: "Clean bathtub detail after cleaning",
  },
  {
    src: "/images/shower-clean.jpeg",
    alt: "Clean shower after detailed cleaning",
  },
  {
    src: "/images/shower-clean2.jpeg",
    alt: "Detailed shower cleaning result",
  },
  {
    src: "/images/stove-clean.jpeg",
    alt: "Clean stove top after kitchen cleaning",
  },
  {
    src: "/images/clean-shiney-dishwasher.jpeg",
    alt: "Shiny dishwasher after kitchen cleaning",
  },
  {
    src: "/images/cupboard-clean.jpeg",
    alt: "Clean cupboard shelf after detail cleaning",
  },
  {
    src: "/images/cupboard-clean2.jpeg",
    alt: "Clean cabinet shelf detail",
  },
  {
    src: "/images/lazy-susan-clean.jpeg",
    alt: "Clean Lazy Susan cabinet after deep cleaning",
  },
  {
    src: "/images/lazy-susan-clean2.jpeg",
    alt: "Clean Lazy Susan cabinet detail",
  },
  {
    src: "/images/fridge-open-clean.jpeg",
    alt: "Clean refrigerator interior",
  },
  {
    src: "/images/fridge-shiney.jpeg",
    alt: "Clean refrigerator exterior shine",
  },
  {
    src: "/images/top-of-fridge-clean.jpeg",
    alt: "Clean top of fridge detail",
  },
  {
    src: "/images/shiney-clean-bathroom.jpeg",
    alt: "Fresh bathroom after cleaning",
  },
  {
    src: "/images/bathroom-2.jpg",
    alt: "Clean bathroom result photo",
  },
  {
    src: "/images/sink-2.jpg",
    alt: "Clean double sink after cleaning",
  },
  {
    src: "/images/livingroom-1.png",
    alt: "Clean living room after routine service",
  },
  {
    src: "/images/livingroom-2.png",
    alt: "Fresh living room after cleaning",
  },
  {
    src: "/images/image2 (1).jpeg",
    alt: "Clean tub area after cleaning",
  },
  {
    src: "/images/image3 (1).jpeg",
    alt: "Clean bathroom sink detail",
  },
  {
    src: "/images/image5 (1).jpeg",
    alt: "Clean bathroom vanity after cleaning",
  },
  {
    src: "/images/image6 (1).jpeg",
    alt: "Clean bathroom vanity result",
  },
  {
    src: "/images/image7 (1).jpeg",
    alt: "Clean bathtub after service",
  },
  {
    src: "/images/image8 (1).jpeg",
    alt: "Clean shower wall detail",
  },
  {
    src: "/images/image9 (1).jpeg",
    alt: "Clean bathroom after house cleaning",
  },
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
            A look at recent finished details, decluttering projects, and cleaned-up spaces from real work, with older results kept in the gallery too.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="px-5"
        >
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--pink-soft)] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
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
              className="block w-full cursor-pointer overflow-hidden rounded-[1.75rem] bg-white"
              aria-label="Click to view next gallery image"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage.src}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-[360px] w-full sm:h-[500px] lg:h-[620px]"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </button>

            <div className="absolute bottom-6 left-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--gray-dark)] shadow-lg backdrop-blur -translate-x-1/2">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-3">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View gallery image ${index + 1}`}
                className={`shrink-0 overflow-hidden rounded-2xl border-4 bg-white transition ${
                  activeIndex === index
                    ? "border-[var(--pink)] opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={144}
                  height={112}
                  sizes="144px"
                  className="h-24 w-28 object-contain sm:h-28 sm:w-36"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
