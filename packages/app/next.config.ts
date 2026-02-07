import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
  cacheComponents: true,
  experimental: {
    optimizePackageImports: [
      "react",
      "react-dom",
      "three",
      "postprocessing",
      "@react-three/fiber",
      "@react-three/postprocessing",
    ],
  },
  headers: () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ],
    },
    {
      source: "/(.*)\\.(js|css|woff2|woff|ttf|ico|png|jpg|jpeg|svg|webp|avif)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/((?!api|_next/static|_next/image|favicon\\.ico).*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=86400, stale-while-revalidate=43200",
        },
      ],
    },
  ],
};

export default nextConfig;
