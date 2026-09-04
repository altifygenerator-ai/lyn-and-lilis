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
    default: "House Cleaning in Southwest Arkansas | Lyn & Lili’s Tidy House",
    template: "%s | Lyn & Lili’s",
  },

  description:
    "House cleaning, home organization, senior household help, holiday cleaning, post-party cleanup, Airbnb turnovers, and small office cleaning in Hot Springs and nearby Southwest Arkansas areas.",

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