import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { FaArrowLeft, FaCheck, FaArrowRight } from "react-icons/fa6";

type Props = {
  params: Promise<{ slug: string }>;
};

type SectionKey = "unique" | "includes" | "details" | "bestFor" | "links" | "faq";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  const relatedServices = services.filter((item) =>
    service.relatedServiceSlugs?.includes(item.slug)
  );

  const sectionMap: Record<SectionKey, React.ReactNode> = {
    unique: (
      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="max-w-4xl">
            <p className="font-script text-4xl text-[var(--pink)]">
              What to expect
            </p>

            <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
              {service.uniqueSectionTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              {service.uniqueSectionBody}
            </p>

            <p className="mt-5 text-base font-semibold leading-7 text-black/60">
              Focused on {service.pageFocus}.
            </p>
          </div>
        </div>
      </section>
    ),

    includes: (
      <section className="bg-[var(--seafoam-soft)] py-20">
        <div className="container-custom px-5">
          <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
            Commonly included with {service.title.toLowerCase()}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.includes.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 font-bold shadow-sm"
              >
                <FaCheck className="mb-3 text-[var(--pink)]" />
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-black/55">
            Exact details depend on the size, condition, and needs of the space.
            We keep the quote clear before getting started.
          </p>
        </div>
      </section>
    ),

    details: (
      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="soft-card max-w-4xl bg-white p-8">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              When this service makes sense
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-black/70">
              {service.details?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {service.notUsuallyIncluded?.length ? (
              <div className="mt-8 rounded-2xl bg-[var(--pink-soft)] p-6">
                <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                  Not usually included
                </h3>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.notUsuallyIncluded.map((item) => (
                    <li key={item} className="text-sm font-semibold text-black/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    ),

    bestFor: (
      <section className="section-padding bg-[var(--pink-soft)]">
        <div className="container-custom px-5">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Best for
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.bestFor.map((item) => (
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
    ),

    links: (
      <section className="bg-white py-16">
        <div className="container-custom px-5">
          <h2 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
            Related cleaning services and areas
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {service.relatedLocationAnchors?.map((link) => (
              <Link
                key={link.href + link.text}
                href={link.href}
                className="rounded-2xl bg-[var(--seafoam-soft)] px-5 py-4 font-bold text-[var(--gray-dark)] transition hover:-translate-y-1 hover:text-[var(--pink)]"
              >
                {link.text}
              </Link>
            ))}

            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-2xl bg-[var(--seafoam-soft)] px-5 py-4 font-bold text-[var(--gray-dark)] transition hover:-translate-y-1 hover:text-[var(--pink)]"
              >
                {related.title}
              </Link>
            ))}
          </div>

          {service.localKeywords?.length ? (
            <p className="mt-6 max-w-3xl text-sm leading-6 text-black/55">
              People often search for help with{" "}
              {service.localKeywords.join(", ")}.
            </p>
          ) : null}
        </div>
      </section>
    ),

    faq: (
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl px-5">
          <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
            Questions about {service.title.toLowerCase()}
          </h2>

          <div className="mt-8 space-y-6">
            {service.faq?.map((item) => (
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
    ),
  };

  const layoutOrder = (service.layoutOrder ?? [
    "unique",
    "includes",
    "details",
    "bestFor",
    "links",
    "faq",
  ]) as SectionKey[];

  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="bg-[var(--pink-soft)] px-5 py-24">
          <div className="container-custom">
            <Link
              href="/#services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-[var(--gray-dark)]"
            >
              <FaArrowLeft />
              Back to Services
            </Link>

            <div className="max-w-3xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[var(--gray-dark)]">
                <Icon />
              </div>

              <p className="font-script text-4xl text-[var(--pink)]">
                Lyn & Lili’s
              </p>

              <h1 className="font-heading mt-3 text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
                {service.title}
              </h1>

              <p className="mt-5 text-xl font-bold text-[var(--gray-dark)]">
                {service.price}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                {service.heroText}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
                {service.intro}
              </p>
            </div>
          </div>
        </section>

        {layoutOrder.map((section) => (
          <div key={section}>{sectionMap[section]}</div>
        ))}

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
                Serving Amity, Glenwood, Arkadelphia, Hot Springs, and
                surrounding Arkansas areas.
              </p>

              <Link href="/#quote" className="btn-secondary mt-6">
                Request a Quote <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}