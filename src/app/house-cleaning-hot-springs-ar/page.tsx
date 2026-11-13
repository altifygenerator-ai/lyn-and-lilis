import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "hot-springs-ar");

export const metadata: Metadata = {
  title: "House Cleaning & Deep Cleaning in Hot Springs, AR",
  description:
    "House cleaning in Hot Springs, AR for busy homes, lake houses and rentals. Routine, deep, move-out and vacation-rental cleaning. Request a local estimate.",
  alternates: {
    canonical: "/house-cleaning-hot-springs-ar",
  },
  openGraph: {
    title: "House Cleaning & Deep Cleaning in Hot Springs, AR | Lyn & Lili's",
    description: "Local cleaning for Hot Springs homes, lake properties, rentals, and move-outs. See real before-and-after results and request a quote.",
    url: "/house-cleaning-hot-springs-ar",
    images: ["/images/recent-cleaning/stovetop-after.webp"],
  },
};

export default function HotSpringsCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}