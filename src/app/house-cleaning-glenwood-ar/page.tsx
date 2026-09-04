import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "glenwood-ar");

export const metadata: Metadata = {
  title: "House Cleaning in Glenwood, AR",
  description:
    "Local house cleaning in Glenwood, AR for homes, cabins, rentals, and busy households. Recurring, deep, Airbnb turnover, move-out, and office cleaning.",
  alternates: {
    canonical: "/house-cleaning-glenwood-ar",
  },
};

export default function GlenwoodCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}