import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "arkadelphia-ar");

export const metadata: Metadata = {
  title: "House Cleaning in Arkadelphia, AR",
  description:
    "Local house cleaning in Arkadelphia, AR for homes, apartments, rentals, and busy households. Recurring, deep, move-out, turnover, and office cleaning available.",
  alternates: {
    canonical: "/house-cleaning-arkadelphia-ar",
  },
};

export default function ArkadelphiaCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}