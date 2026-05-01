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
    title: `${location.city}, ${location.state} Cleaning Services | Lyn & Lili’s`,
    description: `Lyn & Lili’s offers home cleaning, deep cleaning, move-out cleaning, Airbnb turnover cleaning, and professional building cleaning in ${location.city}, ${location.state}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) notFound();

  return (
    <>
      <Header />

      <main className="pt-20">
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
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="soft-card bg-white p-8">
              <p className="font-script text-4xl text-[var(--pink)]">
                Around {location.city}
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                Cleaning help that feels local and easy.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                {location.localAngle}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                Services available in {location.city}
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="soft-card block bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--pink)]"
                  >
                    <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                      {service.title}
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
          </div>
        </section>

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
                Send over a few details about your home, rental, office, or
                building and we’ll get back with a clear quote.
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