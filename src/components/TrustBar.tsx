import {
  FaHouseCircleCheck,
  FaBuilding,
  FaKey,
  FaGoogle,
  FaStar,
} from "react-icons/fa6";

const items = [
  { text: "Locally owned & operated", icon: FaHouseCircleCheck },
  { text: "Residential + commercial", icon: FaBuilding },
  { text: "Move-in / move-out cleaning", icon: FaKey },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-6">
      <div className="container-custom px-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1fr_1.35fr]">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--pink-soft)] px-5 py-3 text-center text-sm font-bold text-[var(--gray-dark)]"
              >
                <Icon className="shrink-0 text-[var(--pink)]" />
                <span>{item.text}</span>
              </div>
            );
          })}

          <a
            href="https://www.google.com/search?q=Lyn+%26+Lili%27s+Tidy+House+Home+Services"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[var(--pink)] bg-[var(--gray-dark)] px-5 py-3 text-center text-sm font-extrabold text-white shadow-[0_14px_35px_rgba(56,56,56,0.18)] transition hover:-translate-y-1 hover:bg-[#222]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(242,174,190,0.28),rgba(157,215,199,0.18))]" />

            <FaGoogle className="relative z-10 shrink-0 text-lg text-white" />

            <span className="relative z-10 flex items-center gap-1 text-[var(--pink)]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <span className="relative z-10">Multiple 5-star Google reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
}