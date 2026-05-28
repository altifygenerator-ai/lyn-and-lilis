"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const images = [
  {
    src: "/images/bathroom-1.jpg",
    alt: "Bathroom cleaning before and after example",
  },
  {
    src: "/images/bathroom-2.jpg",
    alt: "Clean bathroom after house cleaning service",
  },
  {
    src: "/images/sink-1.jpg",
    alt: "Sink before cleaning",
  },
  {
    src: "/images/sink-2.jpg",
    alt: "Sink after cleaning",
  },
  {
    src: "/images/shower-dirty.jpeg",
    alt: "Shower before cleaning",
  },
  {
    src: "/images/shower-clean.jpeg",
    alt: "Shower after cleaning",
  },
  {
    src: "/images/shower-clean2.jpeg",
    alt: "Clean shower detail after house cleaning",
  },
  {
    src: "/images/lazy-susan-dirty.jpeg",
    alt: "Lazy Susan cabinet before cleaning",
  },
  {
    src: "/images/lazy-susan-dirty2.jpeg",
    alt: "Lazy Susan cabinet before deep cleaning",
  },
  {
    src: "/images/lazy-susan-clean.jpeg",
    alt: "Lazy Susan cabinet after cleaning",
  },
  {
    src: "/images/lazy-susan-clean2.jpeg",
    alt: "Clean Lazy Susan cabinet detail",
  },
  {
    src: "/images/stove-dirty.jpeg",
    alt: "Stove top before cleaning",
  },
  {
    src: "/images/stove-clean.jpeg",
    alt: "Stove top after cleaning",
  },
 
  {
    src: "/images/image2 (1).jpeg",
    alt: "House cleaning service photo",
  },
  {
    src: "/images/image3 (1).jpeg",
    alt: "Residential cleaning photo",
  },
  {
    src: "/images/image4 (2).jpeg",
    alt: "Home cleaning detail photo",
  },
  {
    src: "/images/image5 (1).jpeg",
    alt: "Clean home interior photo",
  },
  {
    src: "/images/image6 (1).jpeg",
    alt: "House cleaning result photo",
  },
  {
    src: "/images/image7 (1).jpeg",
    alt: "Residential cleaning result photo",
  },
  {
    src: "/images/image8 (1).jpeg",
    alt: "Clean room after house cleaning",
  },
  {
    src: "/images/image9 (1).jpeg",
    alt: "Home cleaning project image",
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
              className="object-cover"
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