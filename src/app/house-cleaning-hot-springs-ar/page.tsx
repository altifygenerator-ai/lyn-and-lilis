import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "hot-springs-ar");

export const metadata: Metadata = {
  title: "House Cleaning in Hot Springs, AR",
  description:
    "Local house cleaning in Hot Springs, AR for homes, lake properties, rentals, and busy households. One-time, deep, recurring, Airbnb, and move-out cleaning.",
  alternates: {
    canonical: "/house-cleaning-hot-springs-ar",
  },
};

export default function HotSpringsCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}