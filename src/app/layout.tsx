import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://www.lynandlilistidyhouse.com"),

  title: {
    default:
      "Lyn & Lili’s Tidy House Home Services | Cleaning Services in Southwest Arkansas",
    template: "%s | Lyn & Lili’s Cleaning Services",
  },

  description:
    "House cleaning, home organization, senior household help, holiday cleaning, post-party cleanup, Airbnb turnovers, and small office cleaning in Hot Springs and nearby Southwest Arkansas areas.",

  keywords: [
    "home cleaning Amity AR",
    "house cleaning Amity AR",
    "residential cleaning Amity AR",
    "maid service Amity AR",
    "cleaning service Amity AR",

    "house cleaning Glenwood AR",
    "home cleaning Glenwood AR",
    "residential cleaning Glenwood AR",
    "maid service Glenwood AR",
    "cleaning service Glenwood AR",

    "cleaning services Arkadelphia AR",
    "house cleaning Arkadelphia AR",
    "home cleaning Arkadelphia AR",
    "residential cleaning Arkadelphia AR",
    "maid service Arkadelphia AR",

    "cleaning services Hot Springs AR",
    "house cleaning Hot Springs AR",
    "home cleaning Hot Springs AR",
    "residential cleaning Hot Springs AR",
    "maid service Hot Springs AR",

    "cleaning services Caddo Valley AR",
    "house cleaning Caddo Valley AR",
    "cleaning services Bismarck AR",
    "house cleaning Bismarck AR",
    "cleaning services Mount Ida AR",
    "house cleaning Mount Ida AR",
    "cleaning services Murfreesboro AR",
    "house cleaning Murfreesboro AR",
    "cleaning services Pike County AR",
    "cleaning services Clark County AR",
    "cleaning services Garland County AR",

    "deep cleaning Arkansas",
    "deep cleaning service Arkansas",
    "move out cleaning Arkansas",
    "move in cleaning Arkansas",
    "rental cleaning Arkansas",
    "Airbnb cleaning Arkansas",
    "vacation rental cleaning Arkansas",
    "short term rental cleaning Arkansas",
    "post construction cleaning Arkansas",
    "one time cleaning Arkansas",
    "recurring house cleaning Arkansas",
    "weekly house cleaning Arkansas",
    "biweekly house cleaning Arkansas",
    "monthly house cleaning Arkansas",
    "spring cleaning Arkansas",
    "home organization Hot Springs AR",
    "closet organization Hot Springs AR",
    "pantry organization Hot Springs AR",
    "decluttering help Hot Springs Arkansas",
    "senior house cleaning Hot Springs AR",
    "household help for seniors Hot Springs",
    "holiday cleaning Hot Springs AR",
    "post party cleaning Hot Springs AR",
    "after party cleanup Hot Springs Arkansas",

    "house cleaners near me",
    "cleaning company near me",
    "maid service near me",
    "local cleaning service Arkansas",
    "affordable house cleaning Arkansas",
    "trusted house cleaners Arkansas",
    "reliable cleaning service Arkansas",
    "small town cleaning service Arkansas",
    "local house cleaning company",
    "professional cleaning service Arkansas",

    "home cleaning service Arkansas",
    "housekeeping service Arkansas",
    "residential cleaners Arkansas",
    "cleaning ladies Arkansas",
    "local maid service Arkansas",
  ],

  authors: [{ name: "Lyn & Lili’s Tidy House Home Services" }],
  creator: "Lyn & Lili’s",
  publisher: "Lyn & Lili’s",

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title:
      "Lyn & Lili’s Tidy House Home Services | Cleaning Services in Southwest Arkansas",
    description:
      "Local cleaning, home organization, senior household help, holiday cleanup, rental turnovers, and small business cleaning in Hot Springs and nearby Southwest Arkansas areas.",
    url: "https://www.lynandlilistidyhouse.com",
    siteName: "Lyn & Lili’s Tidy House Home Services",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lyn & Lili’s Cleaning Services",
    description:
      "Home cleaning, organization, senior household help, holiday cleanup, Airbnb turnovers, and rental cleaning in Hot Springs and nearby Arkansas areas.",
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
    canonical: "https://www.lynandlilistidyhouse.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#D86F8B",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}