import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { FaArrowLeft, FaLocationDot, FaArrowRight } from "react-icons/fa6";

type Props = {
  params: Promise<{ slug: string }>;
};

type SectionKey = "unique" | "services" | "details" | "links" | "faq";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) return {};

  return {
    title: `${location.city}, ${location.state} House Cleaning Services | Lyn & Lili’s`,
    description: `House cleaning, deep cleaning, move-out cleaning, Airbnb cleaning, rental cleaning, and office cleaning in ${location.city}, ${location.state}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) notFound();
const locationSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: `Lyn & Lili’s Tidy House Home Services - ${location.city}`,
  url: `https://www.lynandlilistidyhouse.com/locations/${slug}`,
  telephone: "8702604536",

  areaServed: {
    "@type": "City",
    name: `${location.city}, ${location.state}`,
  },

  serviceType: [
    "House Cleaning",
    "Deep Cleaning",
    "Move-In Cleaning",
    "Move-Out Cleaning",
    "Airbnb Turnover Cleaning",
    "Professional Building Cleaning",
  ],

  description: location.intro,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity:
    location.faq?.map((item) => ({
      "@type": "Question",
      name: item.q,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })) || [],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.lynandlilistidyhouse.com/",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: "https://www.lynandlilistidyhouse.com/#areas",
    },

    {
      "@type": "ListItem",
      position: 3,
      name: `${location.city}, ${location.state}`,
      item: `https://www.lynandlilistidyhouse.com/locations/${slug}`,
    },
  ],
};
  const priorityServices = services.filter((service) =>
    location.priorityServiceSlugs?.includes(service.slug)
  );

  const otherServices = services.filter(
    (service) => !location.priorityServiceSlugs?.includes(service.slug)
  );

  const orderedServices = [...priorityServices, ...otherServices];

  const sectionMap: Record<SectionKey, React.ReactNode> = {
    
    unique: (
      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="max-w-4xl">
            <p className="font-script text-4xl text-[var(--pink)]">
              Around {location.city}
            </p>

            <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
              {location.uniqueSectionTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              {location.uniqueSectionBody}
            </p>

            {location.nearbyAreas?.length ? (
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                  Nearby areas we can help with
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {location.nearbyAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-[var(--seafoam-soft)] px-4 py-2 text-sm font-bold text-black/70"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    ),

    services: (
      <section className="section-padding bg-[var(--seafoam-soft)]">
        <div className="container-custom px-5">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Cleaning services in {location.city}, {location.state}
            </h2>

            <p className="mt-4 leading-8 text-black/65">
              These are the main cleaning services available in {location.city}.
              The order changes based on what people usually need most in this area.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {orderedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="soft-card block bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--pink)]"
              >
                <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                  {service.title} in {location.city}
                </h3>

                <p className="mt-2 text-sm font-bold text-[var(--seafoam)]">
                  {service.price}
                </p>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    ),

    details: (
      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="soft-card max-w-4xl bg-white p-8">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              What people usually need cleaned in {location.city}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-black/70">
              {location.details?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),

    links: (
      <section className="bg-[var(--pink-soft)] py-16">
        <div className="container-custom px-5">
          <h2 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
            Popular cleaning searches for {location.city}
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {location.internalLinks?.map((link) => (
              <Link
                key={link.href + link.text}
                href={link.href}
                className="rounded-2xl bg-white px-5 py-4 font-bold text-[var(--gray-dark)] shadow-sm transition hover:-translate-y-1 hover:text-[var(--pink)]"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {location.localKeywords?.length ? (
            <p className="mt-6 max-w-3xl text-sm leading-6 text-black/55">
              People in this area often look for help with{" "}
              {location.localKeywords.join(", ")}.
            </p>
          ) : null}
        </div>
      </section>
    ),

    faq: (
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl px-5">
          <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
            Cleaning questions in {location.city}
          </h2>

          <div className="mt-8 space-y-6">
            {location.faq?.map((item) => (
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

  const layoutOrder = (location.layoutOrder ?? [
    "unique",
    "services",
    "details",
    "links",
    "faq",
  ]) as SectionKey[];

  return (
    <>
      <Header />

      <main className="pt-20">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      locationSchema,
      faqSchema,
      breadcrumbSchema,
    ]),
  }}
/>
        <section className="bg-[var(--seafoam-soft)] px-5 py-24">
          <div className="container-custom">
            <Link
              href="/#areas"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-[var(--gray-dark)]"
            >
              <FaArrowLeft />
              Back to Service Areas
            </Link>

            <div className="max-w-3xl">
              <FaLocationDot className="mb-5 text-4xl text-[var(--pink)]" />

              <p className="font-script text-4xl text-[var(--pink)]">
                Local cleaning
              </p>

              <h1 className="font-heading mt-3 text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
                {location.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                {location.intro}
              </p>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-black/60">
                Focused on {location.pageFocus}.
              </p>
            </div>
          </div>
        </section>

        {layoutOrder.map((section) => (
          <div key={section}>{sectionMap[section]}</div>
        ))}

        <section className="bg-white py-20">
          <div className="container-custom px-5">
            <div className="soft-card bg-[var(--pink-soft)] p-8 md:p-12">
              <p className="font-script text-4xl text-[var(--pink)]">
                Get started
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                Need cleaning in {location.city}, {location.state}?
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-black/65">
                Send over a few details about the space and we’ll get back with
                a clear quote.
              </p>

              <Link href="/#quote" className="btn-primary mt-6">
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