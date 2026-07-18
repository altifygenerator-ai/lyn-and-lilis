import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { getServiceImages } from "@/data/routeMaps";
import type { Service } from "@/data/services";

export default function ServicePageContent({ service }: { service: Service }) {
  const Icon = service.icon;
  const images = getServiceImages(service.slug);
  const isTobaccoWallCleaning =
    service.slug === "tobacco-residue-wall-cleaning";
  const isSpecialtyHomeService = [
    "home-organization",
    "senior-home-help",
    "holiday-special-occasion-cleaning",
    "tobacco-residue-wall-cleaning",
  ].includes(service.slug);

  return (
    <>
      <section className="bg-[var(--pink-soft)] px-5 py-24">
        <div className="container-custom">
          <Link
            href="/#services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-[var(--gray-dark)]"
          >
            <FaArrowLeft />
            Back to Services
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-4xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[var(--gray-dark)]">
                <Icon />
              </div>

              <p className="font-script text-4xl text-[var(--pink)]">
                Lyn & Lili’s
              </p>

              <h1 className="font-heading mt-3 text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
                {service.seoHeadline ?? service.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
                {service.heroText}
              </p>

              <Link href="/#quote" className="btn-primary mt-8">
                Request a Quote <FaArrowRight />
              </Link>
            </div>

            <div className="soft-card overflow-hidden bg-white p-3">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="h-[360px] w-full rounded-[1.35rem] bg-neutral-50 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {service.whoItsFor?.length ? (
        <section className="section-padding bg-white">
          <div className="container-custom px-5">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Who this service is best for
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {service.whoItsFor.map((item: string) => (
                <div key={item} className="soft-card bg-white p-6">
                  <div className="flex gap-3 text-black/70">
                    <FaCheck className="mt-1 shrink-0 text-[var(--pink)]" />
                    <p className="font-semibold leading-7">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isTobaccoWallCleaning ? (
        <>
          <section className="section-padding bg-[var(--pink-soft)]">
            <div className="container-custom px-5">
              <div className="max-w-3xl">
                <p className="font-script text-4xl text-[var(--pink)]">
                  Straightforward pricing
                </p>
                <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                  Quoted by the actual condition and amount of wall surface.
                </h2>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  {
                    price: "$250",
                    title: "Smaller areas",
                    text: "The minimum for one room, a limited section, or a smaller wall-washing project.",
                  },
                  {
                    price: "$900–$1,500",
                    title: "Typical 3 bed / 2 bath",
                    text: "A common range for light-to-moderate wall and trim cleaning without major ceiling or cabinet work.",
                  },
                  {
                    price: "Custom quote",
                    title: "Heavy whole-home buildup",
                    text: "Long-term staining, ceilings, cabinets, detailed doors, and repeated passes are priced after photos or a walkthrough.",
                  },
                ].map((item) => (
                  <div key={item.title} className="soft-card bg-white p-6">
                    <p className="text-3xl font-extrabold text-[var(--seafoam)]">
                      {item.price}
                    </p>
                    <h3 className="font-heading mt-2 text-2xl font-bold text-[var(--gray-dark)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-black/65">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-4xl text-sm leading-6 text-black/60">
                Final pricing depends on the number of affected rooms, wall
                height, paint condition, amount of buildup, and whether
                ceilings, cabinets, doors, fixtures, or other detailed surfaces
                are included. Photos or a walkthrough are required for a firm
                quote.
              </p>
            </div>
          </section>

          <section className="bg-[var(--seafoam-soft)] py-20">
            <div className="container-custom px-5">
              <div className="max-w-3xl">
                <p className="font-script text-4xl text-[var(--pink)]">
                  From a real local job
                </p>
                <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                  Visible tobacco film, hands-on cleaning, and the finished surfaces.
                </h2>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    src: "/images/tobacco-wall-cleaning/doorway-before.webp",
                    alt: "Yellow tobacco film above a doorway before cleaning",
                    label: "Before: residue above a doorway",
                  },
                  {
                    src: "/images/tobacco-wall-cleaning/wall-cleaning-in-progress.webp",
                    alt: "Tobacco-stained wall being washed with a visible clean section",
                    label: "During: residue lifting from the wall",
                  },
                  {
                    src: "/images/tobacco-wall-cleaning/doorway-after.webp",
                    alt: "Doorway and wall after tobacco residue washing",
                    label: "After the first wall-washing passes",
                  },
                  {
                    src: "/images/tobacco-wall-cleaning/trim-cleaning-progress.webp",
                    alt: "Baseboard and doorway trim being hand washed",
                    label: "Detail work around trim and corners",
                  },
                  {
                    src: "/images/tobacco-wall-cleaning/wall-wash-progress.webp",
                    alt: "Wall with a clean washed section during tobacco residue removal",
                    label: "Wall washing in progress",
                  },
                  {
                    src: "/images/tobacco-wall-cleaning/finished-room.webp",
                    alt: "Finished room after walls were cleaned by hand",
                    label: "Most of a full home completed in one day",
                  },
                ].map((image) => (
                  <figure
                    key={image.src}
                    className="soft-card overflow-hidden bg-white p-3"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-72 w-full rounded-[1.15rem] bg-neutral-50 object-cover"
                    />
                    <figcaption className="px-2 pb-1 pt-3 text-sm font-bold text-[var(--gray-dark)]">
                      {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="bg-[var(--seafoam-soft)] py-20">
          <div className="container-custom px-5">
            <div className="grid gap-5 md:grid-cols-3">
              {images.map((image) => (
                <div
                  key={image.src}
                  className="soft-card overflow-hidden bg-white p-3"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full rounded-[1.15rem] bg-neutral-50 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.localProblems?.length ? (
        <section className="bg-[var(--seafoam-soft)] py-20">
          <div className="container-custom px-5">
            <div className="max-w-3xl">
              <p className="font-script text-4xl text-[var(--pink)]">
                {isSpecialtyHomeService ? "Local household needs" : "Local cleaning needs"}
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                {isSpecialtyHomeService
                  ? "Common household challenges around Southwest Arkansas"
                  : "Common cleaning problems around Southwest Arkansas"}
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {service.localProblems.map((item: string) => (
                <div key={item} className="rounded-2xl bg-white p-5 font-bold shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                What’s usually included
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Exact details depend on the size, condition, and needs of the
                home, but these are the common areas we talk through before
                quoting the job.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.includes.map((item: string) => (
                <div key={item} className="rounded-2xl bg-[var(--pink-soft)] p-5 font-bold">
                  <FaCheck className="mb-3 text-[var(--pink)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {service.comparison ? (
        <section className="section-padding bg-[var(--pink-soft)]">
          <div className="container-custom px-5">
            <div className="soft-card bg-white p-8">
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                {service.comparison.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/70">
                {service.comparison.body}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {service.details?.length ? (
        <section className="section-padding bg-white">
          <div className="container-custom px-5">
            <div className="max-w-4xl">
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                When this service makes sense
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-black/70">
                {service.details.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.relatedLocationAnchors?.length ? (
        <section className="bg-[var(--pink-soft)] py-16">
          <div className="container-custom px-5">
            <h2 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
              Popular local pages for this service
            </h2>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {service.relatedLocationAnchors.map((link: { text: string; href: string }) => (
                <Link
                  key={link.href + link.text}
                  href={link.href}
                  className="rounded-2xl bg-white px-5 py-4 font-bold text-[var(--gray-dark)] shadow-sm transition hover:-translate-y-1 hover:text-[var(--pink)]"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.faq?.length ? (
        <section className="section-padding bg-[var(--seafoam-soft)]">
          <div className="container-custom max-w-4xl px-5">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Questions people ask before booking
            </h2>

            <div className="mt-8 space-y-6">
              {service.faq.map((item: { q: string; a: string }) => (
                <div key={item.q} className="border-b border-black/10 pb-6">
                  <h3 className="text-lg font-bold text-[var(--gray-dark)]">
                    {item.q}
                  </h3>
                  <p className="mt-2 leading-7 text-black/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-[var(--gray-dark)] text-white">
        <div className="container-custom px-5">
          <div className="max-w-3xl">
            <p className="font-script text-4xl text-[var(--pink)]">
              {isSpecialtyHomeService
                ? "Ready for a little help at home?"
                : "Ready for a cleaner space?"}
            </p>

            <h2 className="font-heading mt-2 text-4xl font-bold">
              Request a quote for {service.title.toLowerCase()}.
            </h2>

            <p className="mt-4 leading-8 text-white/70">
              Serving Amity, Glenwood, Arkadelphia, Hot Springs, Malvern, Lake
              Greeson, Lake Hamilton, and nearby Arkansas areas.
            </p>

            <Link href="/#quote" className="btn-secondary mt-6">
              Request a Quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
