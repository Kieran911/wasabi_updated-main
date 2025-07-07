import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dg0svo4wa/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
