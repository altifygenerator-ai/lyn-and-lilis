import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { getServiceImages } from "@/data/routeMaps";
import type { Service } from "@/data/services";

export default function ServicePageContent({ service }: { service: Service }) {
  const Icon = service.icon;
  const images = getServiceImages(service.slug);

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

      <section className="bg-[var(--seafoam-soft)] py-20">
        <div className="container-custom px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {images.map((image) => (
              <div key={image.src} className="soft-card overflow-hidden bg-white p-3">
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

      {service.localProblems?.length ? (
        <section className="bg-[var(--seafoam-soft)] py-20">
          <div className="container-custom px-5">
            <div className="max-w-3xl">
              <p className="font-script text-4xl text-[var(--pink)]">
                Local cleaning needs
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                Common cleaning problems around Southwest Arkansas
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
              Ready for a cleaner space?
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
