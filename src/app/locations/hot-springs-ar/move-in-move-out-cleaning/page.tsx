import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  getLocation,
  getService,
  serviceSchema,
} from "@/lib/seo";

const location = getLocation("hot-springs-ar");
const service = getService("move-in-move-out-cleaning");

const canonicalPath = "/locations/hot-springs-ar/move-in-move-out-cleaning";

const faqs = [
  {
    q: "Do you offer move-out cleaning in Hot Springs, AR?",
    a: "Yes. We offer move-out cleaning for renters, landlords, sellers, homeowners, and property owners in Hot Springs and nearby areas.",
  },
  {
    q: "Do you clean empty homes before someone moves in?",
    a: "Yes. Move-in cleaning is available for new homeowners and renters who want the space cleaned before bringing in furniture and belongings.",
  },
  {
    q: "Is move-out cleaning more detailed than standard cleaning?",
    a: "Usually, yes. Move-out cleaning often includes more detailed work because cabinets, appliances, floors, bathrooms, and hidden areas are easier to access once the home is empty.",
  },
  {
    q: "Do you clean rentals between tenants?",
    a: "Yes. We clean rental homes, apartments, and empty spaces between tenants, buyers, owners, or guests.",
  },
];

export const metadata: Metadata = {
  title: "Move-Out Cleaning in Hot Springs, AR | Move-In Cleaning",
  description:
    "Move-in and move-out cleaning in Hot Springs, Arkansas for renters, landlords, sellers, homeowners, rental properties, and empty homes.",
  alternates: {
    canonical: canonicalPath,
  },
};

export default function HotSpringsMoveOutCleaningPage() {
  if (!location || !service) notFound();

  const schemas = [
    breadcrumbSchema([
      {
        name: "Home",
        url: absoluteUrl("/"),
      },
      {
        name: "Hot Springs Cleaning Services",
        url: absoluteUrl(location.href),
      },
      {
        name: "Move-Out Cleaning in Hot Springs",
        url: absoluteUrl(canonicalPath),
      },
    ]),
    serviceSchema(service, location),
    faqSchema(faqs),
  ].filter(Boolean);

  const Icon = service.icon;

  return (
    <>
      <Script
        id="hot-springs-move-out-cleaning-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <Header />

      <main className="pt-20">
        <section className="section">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="eyebrow">
                  Move-Out Cleaning · Hot Springs, Arkansas
                </p>

                <h1 className="section-title">
                  Move-Out Cleaning in Hot Springs, AR
                </h1>

                <p className="section-lead">
                  Move-in and move-out cleaning for Hot Springs renters,
                  landlords, sellers, homeowners, and property owners who need
                  an empty home cleaned before the next person walks in.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/#quote" className="btn btn-primary">
                    Request a Quote
                  </Link>

                  <Link
                    href="/house-cleaning-hot-springs-ar"
                    className="btn btn-secondary"
                  >
                    View Hot Springs Services
                  </Link>
                </div>
              </div>

              <div className="soft-card">
                {Icon ? <Icon className="mb-5 text-4xl" /> : null}

                <p className="eyebrow">Empty Home Cleaning</p>

                <h2 className="text-3xl font-semibold">
                  Cleaning for move-outs, move-ins, and rental turnovers.
                </h2>

                <p className="mt-4 text-base leading-7">
                  Move-out cleaning is different from regular cleaning because
                  the home is usually empty or mostly empty. Cabinets,
                  appliances, bathrooms, floors, baseboards, and hidden areas
                  are easier to reach.
                </p>

                <p className="mt-5 font-semibold">
                  Starting around $250–$450 depending on size and condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Hot Springs Move-Out Cleaning</p>

                <h2 className="section-title">
                  Empty-home cleaning before the next tenant, buyer, or owner.
                </h2>
              </div>

              <div>
                <p className="section-text">
                  Move-out cleaning helps get a space ready for what comes next.
                  Whether someone is leaving a rental, preparing a home to sell,
                  moving into a new place, or resetting a property between
                  occupants, this service focuses on the areas that matter most
                  once the furniture and belongings are out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What It Can Include</p>

              <h2 className="section-title">
                Cleaning built around an empty or mostly empty home.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Cabinets",
                "Appliances",
                "Bathrooms",
                "Floors",
                "Empty-room cleaning",
                "Kitchen reset",
                "Trash removal",
                "Surfaces and high-touch areas",
              ].map((item) => (
                <div key={item} className="card">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why It Matters</p>

              <h2 className="section-title">
                Move-outs show the spots regular cleaning misses.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Move-out cleaning is useful for Hot Springs renters who want to leave a space clean before turning in keys.",
                "Landlords and property owners can use move-out cleaning to help reset a rental before the next tenant or guest arrives.",
                "Move-in cleaning helps new homeowners and renters feel better about bringing their belongings into a cleaner space.",
                "This service can include empty-room cleaning, bathrooms, kitchens, cabinets, appliances, floors, trash removal, and the areas that show once furniture is gone.",
              ].map((item) => (
                <div key={item} className="soft-card">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Good Fit For</p>

              <h2 className="section-title">
                Common reasons people book move-out cleaning.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Renters moving out",
                "Landlords between tenants",
                "Homes being listed for sale",
                "New homeowners moving in",
                "Rental turnovers",
                "Empty homes that need a reset",
                "Apartments and rental houses",
                "Property owners preparing a space",
              ].map((item) => (
                <div key={item} className="card">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Questions</p>

              <h2 className="section-title">
                Questions about move-out cleaning in Hot Springs.
              </h2>
            </div>

            <div className="grid gap-4">
              {faqs.map((item) => (
                <div key={item.q} className="card">
                  <h3 className="text-xl font-semibold">{item.q}</h3>
                  <p className="mt-3">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="soft-card">
              <p className="eyebrow">Get a Quote</p>

              <h2 className="section-title">
                Need move-out cleaning in Hot Springs?
              </h2>

              <p className="section-text">
                Reach out with the property size, whether it is empty or mostly
                empty, the condition of the space, and the timing. We can talk
                through the job and give a clear quote before getting started.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#quote" className="btn btn-primary">
                  Request a Quote
                </Link>

                <Link
                  href="/house-cleaning-hot-springs-ar"
                  className="btn btn-secondary"
                >
                  Back to Hot Springs Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}