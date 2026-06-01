import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// TODO: swap Geist for brand fonts once finalized
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Con Junction 2026 | Louisville's Tabletop Gaming Convention",
  description:
    "Game Con Junction — November 6–8, 2026 at the Louisville Marriott East. Three days of tabletop gaming, vendors, tournaments, and community.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Game Con Junction 2026",
    description:
      "Louisville's tabletop gaming convention. Nov 6–8, 2026 at the Louisville Marriott East.",
    url: "https://gameconjunction.com",
    siteName: "Game Con Junction",
    images: [
      {
        url: "https://gameconjunction.com/BizCard_Front--splash.jpg",
        width: 1200,
        height: 630,
        alt: "Game Con Junction 2026 — Louisville's Tabletop Gaming Convention",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
