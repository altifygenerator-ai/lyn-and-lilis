import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "malvern-ar");

export const metadata: Metadata = {
  title: "House Cleaning Services in Malvern, AR | Lyn & Lili’s",
  description:
    "House cleaning, deep cleaning, move-in and move-out cleaning, rental cleaning, and small business cleaning in Malvern, Arkansas and nearby areas.",
  alternates: {
    canonical: "/house-cleaning-malvern-ar",
  },
};

export default function MalvernCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}