import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "arkadelphia-ar");

export const metadata: Metadata = {
  title: "House Cleaning Services in Arkadelphia, AR | Lyn & Lili’s",
  description:
    "House cleaning, apartment cleaning, deep cleaning, move-out cleaning, rental turnover cleaning, and office cleaning in Arkadelphia, Arkansas.",
  alternates: {
    canonical: "/house-cleaning-arkadelphia-ar",
  },
};

export default function ArkadelphiaCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}