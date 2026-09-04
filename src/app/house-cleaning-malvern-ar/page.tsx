import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "malvern-ar");

export const metadata: Metadata = {
  title: "House Cleaning in Malvern, AR",
  description:
    "Local house cleaning in Malvern, AR for homes, rentals, and busy households. Recurring cleaning, deep cleaning, move-in, move-out, and small office cleaning.",
  alternates: {
    canonical: "/house-cleaning-malvern-ar",
  },
};

export default function MalvernCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}