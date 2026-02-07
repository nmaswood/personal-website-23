"use cache";

import "./globals.css";
import type { Metadata, Viewport } from "next";
import { cacheLife } from "next/cache";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nasr Maswood - Software Engineer & AI Founder",
  description:
    "Software Engineer based in NYC and Founder of a Saudi AI Company",
  keywords: [
    "software engineer",
    "AI",
    "artificial intelligence",
    "NYC",
    "Saudi Arabia",
    "startup",
  ],
  authors: [{ name: "Nasr Maswood" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// eslint-disable-next-line @typescript-eslint/require-await -- Next.js "use cache" requires async
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  cacheLife("max");

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
