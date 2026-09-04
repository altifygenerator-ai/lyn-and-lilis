import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "amity-ar");

export const metadata: Metadata = {
  title: "House Cleaning in Amity, AR",
  description:
    "Local house cleaning in Amity, AR for homes and rural properties. Recurring cleaning, deep cleaning, move-out cleaning, rental turnovers, and small office cleaning.",
  alternates: {
    canonical: "/house-cleaning-amity-ar",
  },
};

export default function AmityCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}