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
  openGraph: {
    title: "Game Con Junction 2026",
    description:
      "Louisville's tabletop gaming convention. Nov 6–8, 2026 at the Louisville Marriott East.",
    url: "https://gameconjunction.com",
    siteName: "Game Con Junction",
    // TODO: add og:image once brand assets are ready
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
