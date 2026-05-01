import { FaPhone } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between px-5">
        <a href="/" className="leading-none">
          <div className="font-script text-3xl text-[var(--gray-dark)]">
            Lyn & Lili’s
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gray-mid)]">
            Tidy House Home Services
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-black/70 md:flex">
          <a href="#services" className="hover:text-[var(--pink)]">Services</a>
          <a href="/about" className="hover:text-[var(--pink)]">About</a>
          <a href="#gallery" className="hover:text-[var(--pink)]">Gallery</a>
          <a href="#areas" className="hover:text-[var(--pink)]">Areas</a>
          <a href="#quote" className="btn-primary">Get a Quote</a>
          
        </nav>

        <a href="tel:8702604536" className="btn-primary md:hidden">
          <FaPhone /> Call
        </a>
      </div>
    </header>
  );
}