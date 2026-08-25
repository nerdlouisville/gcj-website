import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
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
      "Louisville's ultimate gaming weekend returns Nov 6–8, 2026 to the Louisville Marriott East.",
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
      <body className="min-h-screen flex flex-col antialiased">
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2362531947486503');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2362531947486503&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
