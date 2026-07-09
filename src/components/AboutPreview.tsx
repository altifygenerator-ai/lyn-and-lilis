"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const images = [
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
    alt: "Clean tub detail after house cleaning",
  },
  {
    src: "/images/shower-clean.jpeg",
    alt: "Clean shower after detailed cleaning",
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
    src: "/images/lazy-susan-clean.jpeg",
    alt: "Clean Lazy Susan cabinet after deep cleaning",
  },
  {
    src: "/images/fridge-open-clean.jpeg",
    alt: "Clean refrigerator interior",
  },
  {
    src: "/images/shiney-clean-bathroom.jpeg",
    alt: "Fresh bathroom after house cleaning",
  },
];

export default function AboutPreview() {
  const [activeImage, setActiveImage] = useState(0);

  const currentImage = images[activeImage];

  function goPrevious() {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function goNext() {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-script text-4xl text-[var(--pink)]">Who we are</p>

          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            A local, family-run cleaning service.
          </h2>

          <p className="mt-4 leading-8 text-black/65">
            Lyn has spent years caring for homes and learning the cleaning
            business firsthand, while Lili brings the same level of care and
            consistency into every home they step into.
          </p>

          <p className="mt-4 leading-8 text-black/65">
            Together, they focus on simple, honest work — showing up, doing the
            job right, and making your home feel taken care of.
          </p>

          <Link
            href="/about"
            className="btn-secondary mt-6 inline-flex items-center gap-2"
          >
            Learn More About Us <FaArrowRight />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--pink-soft)] p-3 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5">
              <p className="max-w-sm text-sm font-medium leading-6 text-white">
                Local cleaning with real care, steady detail, and a personal
                touch.
              </p>
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-sm text-black shadow-sm transition hover:bg-white"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-sm text-black shadow-sm transition hover:bg-white"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    activeImage === index
                      ? "w-8 bg-[var(--pink)]"
                      : "w-2.5 bg-black/20 hover:bg-black/35"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}