Lyn & Lili's favicon/app icon pack

Put these files in your Next.js /public folder:
- favicon.ico
- favicon.svg
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- icon-192.png
- icon-512.png
- site.webmanifest

Then add/update metadata in src/app/layout.tsx:

icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  other: [{ rel: "manifest", url: "/site.webmanifest" }],
},

themeColor: "#D86F8B",
