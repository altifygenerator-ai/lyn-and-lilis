import { FaHouseCircleCheck, FaBuilding, FaKey, FaClock } from "react-icons/fa6";

const items = [
  { text: "Locally owned & operated", icon: FaHouseCircleCheck },
  { text: "Residential + commercial", icon: FaBuilding },
  { text: "Move-in / move-out cleaning", icon: FaKey },
  { text: "Quick quote response", icon: FaClock },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-6">
      <div className="container-custom grid gap-3 px-5 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--pink-soft)] px-5 py-3 text-center text-sm font-bold text-[var(--gray-dark)]"
            >
              <Icon className="text-[var(--pink)]" />
              {item.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}