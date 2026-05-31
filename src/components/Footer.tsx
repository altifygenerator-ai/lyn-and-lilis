import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container-custom px-5">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.6fr]">
          {/* Brand */}
          <div>
            <div className="font-script text-3xl text-[var(--gray-dark)]">
              Lyn & Lili’s
            </div>

            <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-[var(--gray-mid)]">
              Tidy House Home Services
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-black/55">
              Serving Amity, Glenwood, Arkadelphia, Hot Springs and surrounding
              Arkansas areas.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Contact */}
            <div className="space-y-3 text-sm text-black/55">
              <p className="font-bold text-[var(--gray-dark)]">Contact</p>

              <p className="flex items-center gap-2">
                <FaPhone /> (870) 260-4536
              </p>

              <p className="flex items-center gap-2 break-all">
                <FaEnvelope /> lynandlilistidyhouse@gmail.com
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 text-sm text-black/55">
              <p className="font-bold text-[var(--gray-dark)]">Quick Links</p>

              <Link href="/" className="block hover:text-[var(--pink)]">
                Home
              </Link>

              <Link href="/about" className="block hover:text-[var(--pink)]">
                About
              </Link>

              <Link href="/faq" className="block hover:text-[var(--pink)]">
                FAQ
              </Link>

              <Link href="/#services" className="block hover:text-[var(--pink)]">
                Services
              </Link>

              <Link href="/#quote" className="block hover:text-[var(--pink)]">
                Get a Quote
              </Link>
            </div>

            {/* SEO Links */}
            <div className="space-y-3 text-sm text-black/55">
              <p className="font-bold text-[var(--gray-dark)]">
                Services & Areas
              </p>

              <Link
                href="/services/standard-cleaning"
                className="block hover:text-[var(--pink)]"
              >
                Standard Cleaning
              </Link>

              <Link
                href="/services/deep-cleaning"
                className="block hover:text-[var(--pink)]"
              >
                Deep Cleaning
              </Link>

              <Link
                href="/services/move-in-move-out-cleaning"
                className="block hover:text-[var(--pink)]"
              >
                Move-Out Cleaning
              </Link>

              <Link
                href="/services/airbnb-cleaning"
                className="block hover:text-[var(--pink)]"
              >
                Airbnb Cleaning
              </Link>

              <Link
                href="/services/professional-building-cleaning"
                className="block hover:text-[var(--pink)]"
              >
                Building Cleaning
              </Link>

              <div className="pt-2">
                <Link
                  href="/house-cleaning-amity-ar"
                  className="block hover:text-[var(--pink)]"
                >
                  Amity Cleaning
                </Link>

                <Link
                  href="/house-cleaning-glenwood-ar"
                  className="block hover:text-[var(--pink)]"
                >
                  Glenwood Cleaning
                </Link>

                <Link
                  href="/house-cleaning-arkadelphia-ar"
                  className="block hover:text-[var(--pink)]"
                >
                  Arkadelphia Cleaning
                </Link>

                <Link
                  href="/house-cleaning-hot-springs-ar"
                  className="block hover:text-[var(--pink)]"
                >
                  Hot Springs Cleaning
                </Link>
              </div>

              <div className="pt-3">
                <p className="mb-2 font-bold text-[var(--gray-dark)]">
                  Hot Springs Services
                </p>

                <Link
                  href="/locations/hot-springs-ar/airbnb-cleaning"
                  className="block hover:text-[var(--pink)]"
                >
                  Airbnb Cleaning in Hot Springs
                </Link>

                <Link
                  href="/locations/hot-springs-ar/deep-cleaning"
                  className="block hover:text-[var(--pink)]"
                >
                  Deep Cleaning in Hot Springs
                </Link>

                <Link
                  href="/locations/hot-springs-ar/move-in-move-out-cleaning"
                  className="block hover:text-[var(--pink)]"
                >
                  Move-Out Cleaning in Hot Springs
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-sm text-black/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Lyn & Lili’s Tidy House Home Services.
          </span>

          <a
            href="https://hometownwebservicesar.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--pink)]"
          >
            Website by Hometown Web
          </a>
        </div>
      </div>
    </footer>
  );
}