import type { Metadata } from "next";
import { Inter, Dancing_Script, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lynandlilistidyhouse.com"), // update if different

  title: {
    default: "Lyn & Lili’s Tidy House Home Services",
    template: "%s | Lyn & Lili’s Cleaning Services",
  },

  description:
    "Local home cleaning, deep cleaning, move-out cleaning, Airbnb turnover, and small business cleaning services in Amity, Glenwood, Arkadelphia, Hot Springs, and surrounding Arkansas areas.",

  keywords: [
    "home cleaning Amity AR",
    "house cleaning Glenwood AR",
    "cleaning services Arkadelphia AR",
    "cleaning services Hot Springs AR",
    "deep cleaning Arkansas",
    "move out cleaning Arkansas",
    "Airbnb cleaning Arkansas",
    "house cleaners near me",
    "local cleaning service Arkansas",
  ],

  authors: [{ name: "Lyn & Lili’s Tidy House Home Services" }],
  creator: "Lyn & Lili’s",
  publisher: "Lyn & Lili’s",

  openGraph: {
    title: "Lyn & Lili’s Tidy House Home Services",
    description:
      "Reliable local cleaning services for homes, rentals, and businesses in southwest Arkansas.",
    url: "https://lynandlilistidyhouse.com",
    siteName: "Lyn & Lili’s",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lyn & Lili’s Cleaning Services",
    description:
      "Home cleaning, deep cleaning, and rental cleaning in Amity, Glenwood, Arkadelphia, and Hot Springs.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://lynandlilistidyhouse.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancing.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
      <Analytics />
    </html>
  );
}