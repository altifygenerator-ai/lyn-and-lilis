import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "amity-ar");

export const metadata: Metadata = {
  title: "House Cleaning Services in Amity, AR | Lyn & Lili’s",
  description:
    "House cleaning, deep cleaning, move-out cleaning, Airbnb turnover cleaning, and small building cleaning in Amity, Arkansas and nearby areas.",
  alternates: {
    canonical: "/house-cleaning-amity-ar",
  },
};

export default function AmityCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}