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
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid gap-10 px-5 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="font-script text-4xl text-[var(--pink)]">
                What to expect
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                A clear service with no runaround.
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/70">
                {service.intro}
              </p>

              <p className="mt-5 text-lg leading-8 text-black/70">
                Every home and building is a little different, so final pricing
                depends on size, condition, location, and any add-ons requested.
                We keep quotes simple and clear before getting started.
              </p>
            </div>

            <div className="soft-card bg-white p-7">
              <h3 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
                Best for
              </h3>

              <ul className="mt-5 space-y-3">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex gap-3 text-black/65">
                    <FaCheck className="mt-1 text-[var(--pink)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-custom px-5">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Commonly included
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.includes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[var(--seafoam-soft)] p-5 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

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