import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/locations/amity-ar",
        destination: "/house-cleaning-amity-ar",
        permanent: true,
      },
      {
        source: "/locations/glenwood-ar",
        destination: "/house-cleaning-glenwood-ar",
        permanent: true,
      },
      {
        source: "/locations/arkadelphia-ar",
        destination: "/house-cleaning-arkadelphia-ar",
        permanent: true,
      },
      {
        source: "/locations/hot-springs-ar",
        destination: "/house-cleaning-hot-springs-ar",
        permanent: true,
      },
      {
        source: "/locations/malvern-ar",
        destination: "/house-cleaning-malvern-ar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
