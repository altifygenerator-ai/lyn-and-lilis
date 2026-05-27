import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "glenwood-ar");

export const metadata: Metadata = {
  title: "House Cleaning Services in Glenwood, AR | Lyn & Lili’s",
  description:
    "House cleaning, deep cleaning, rental cleaning, Airbnb turnover cleaning, and small business cleaning in Glenwood, Arkansas and surrounding areas.",
  alternates: {
    canonical: "/house-cleaning-glenwood-ar",
  },
};

export default function GlenwoodCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}