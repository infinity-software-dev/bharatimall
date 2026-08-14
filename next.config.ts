import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images loaded from localhost, your local network IP (192.168.1.46), and standard media CDNs
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "192.168.1.46",
      },
      {
        protocol: "https",
        hostname: "192.168.1.46",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.placeholder.com",
      },
    ],
  },

  // Cross-Origin Resource Sharing (CORS) headers for API routes
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://192.168.1.46:3000" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ],
      },
    ];
  },

  // Proxy rewrites to forward requests to your backend server with API key in URL
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api"}/:path*?apiKey=${process.env.API_KEY || "my-secret-api-key"}`,
      },
    ];
  },
};

export default nextConfig;

