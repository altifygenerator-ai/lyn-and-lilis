import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaArrowLeft,
  FaHeart,
  FaHouseCircleCheck,
  FaClock,
  FaHandsHoldingCircle,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Lyn & Lili’s | Tidy House Home Services",
  description:
    "Learn about Lyn & Lili’s Tidy House Home Services, a local family-run cleaning service serving Amity, Glenwood, Arkadelphia, Hot Springs, and surrounding Arkansas areas.",
};

const values = [
  {
    title: "Respect for your home",
    text: "We treat every home like it matters, because it does.",
    icon: FaHouseCircleCheck,
  },
  {
    title: "Reliable service",
    text: "Simple communication, honest scheduling, and no runaround.",
    icon: FaClock,
  },
  {
    title: "Family-run care",
    text: "This is personal work done by real local people, not a big company.",
    icon: FaHeart,
  },
  {
    title: "Done the right way",
    text: "We care about the details and don’t believe in rushing through a job.",
    icon: FaHandsHoldingCircle,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="relative overflow-hidden bg-[var(--pink-soft)] px-5 py-24">
          <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[var(--seafoam)]/30" />
          <div className="absolute bottom-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-white/60" />

          <div className="container-custom relative z-10">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-[var(--gray-dark)]"
            >
              <FaArrowLeft />
              Back to Home
            </Link>

            <div className="max-w-3xl">
              <p className="font-script text-4xl text-[var(--pink)]">
                Our story
              </p>

              <h1 className="font-heading mt-3 text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
                About Lyn & Lili’s Tidy House Home Services
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                A local, family-run cleaning service built on years of home
                care, trust, and doing things the right way.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="soft-card h-fit bg-white p-8">
              <p className="font-script text-4xl text-[var(--pink)]">
                Family owned
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                Cleaning with care, experience, and pride.
              </h2>

              <p className="mt-5 leading-8 text-black/65">
                Lyn & Lili’s Tidy House Home Services is built around something
                simple — taking care of homes the way they should be taken care
                of.
              </p>
            </div>

            <div className="space-y-5 text-lg leading-8 text-black/70">
              <p>
                Lyn has spent the last 18 years as a stay-at-home mom and
                grandmother, keeping her own home running day in and day out.
                Cleaning is not something new to her — it is something she has
                done every day for years.
              </p>

              <p>
                She also grew up around the cleaning business. Her mother ran
                her own home cleaning service in Wisconsin for years, and Lyn
                was right there with her, helping on jobs and learning what it
                takes to do things right.
              </p>

              <p>
                Lili is a young mother and a hard worker who has been learning
                alongside Lyn, bringing that same care, attention, and
                consistency into every home they step into.
              </p>

              <p>
                Together, they focus on simple, honest work — showing up,
                communicating clearly, doing the job right, and leaving your
                home feeling clean, comfortable, and taken care of.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-custom px-5">
            <div className="mb-10 max-w-2xl">
              <p className="font-script text-4xl text-[var(--pink)]">
                What matters to us
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                The little things matter when someone is in your home.
              </h2>

              <p className="mt-4 text-black/65">
                We know trust matters. That is why we keep things simple,
                respectful, and easy from the first message to the final clean.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.title} className="soft-card p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--seafoam-soft)] text-xl text-[var(--gray-dark)]">
                      <Icon />
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--seafoam-soft)]">
          <div className="container-custom px-5">
            <div className="soft-card bg-white p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-script text-4xl text-[var(--pink)]">
                    Need help around the house?
                  </p>

                  <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                    We would love to make things easier for you.
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-black/65">
                    Whether you need a one-time clean, recurring home cleaning,
                    move-in or move-out cleaning, Airbnb turnover service, or
                    help keeping a professional building tidy, Lyn & Lili’s is
                    here to help.
                  </p>

                  <p className="mt-4 text-sm font-bold text-black/55">
                    Serving Amity, Glenwood, Arkadelphia, Hot Springs, and
                    surrounding Arkansas areas.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/#quote" className="btn-primary">
                    Request a Quote
                  </Link>

                  <Link href="/#services" className="btn-secondary">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}