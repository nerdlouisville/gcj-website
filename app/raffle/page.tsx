import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import RaffleInfo from "../components/RaffleInfo";
import RaffleBundles from "../components/RaffleBundles";
import { bundles } from "./raffleData";

export const metadata: Metadata = {
  title: "Charity Raffle Bundles | Game Con Junction 2026",
  description:
    "Win a bundle of donated board games and tabletop RPGs at Game Con Junction 2026. Tickets are $2 and every ticket supports UP for Women and Children.",
  alternates: { canonical: "https://gameconjunction.com/raffle" },
  openGraph: {
    title: "Charity Raffle Bundles | Game Con Junction 2026",
    description:
      "Donated board games and tabletop RPGs, with every ticket supporting UP for Women and Children. Drawing Sunday, Nov. 8 at 4 PM.",
    url: "https://gameconjunction.com/raffle",
    siteName: "Game Con Junction",
    type: "website",
  },
};

export default function RafflePage() {
  const itemCount = bundles.reduce((n, b) => n + b.items.length, 0);
  const bundleCount = bundles.filter((b) => b.id !== "special").length;

  return (
    <>
      <Nav />
      <main id="main">
        <section
          id="hero"
          className="relative px-4 pt-32 pb-16 text-center overflow-hidden"
          style={{
            backgroundColor: "var(--brand-bg-deep)",
            backgroundImage:
              "linear-gradient(rgba(153,51,204,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,25,122,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[var(--brand-primary-text)] text-sm font-semibold uppercase tracking-widest mb-3">
              Game Con Junction 2026
            </p>
            <h1 className="font-display text-3xl sm:text-5xl text-[var(--brand-heading)] uppercase leading-tight mb-4">
              Charity Raffle Bundles
            </h1>
            <p className="font-display text-base text-[var(--brand-primary-text)] mb-1">FRIDAY NOV. 6 // SUNDAY NOV. 8</p>
            <p className="text-[var(--brand-text)] mb-5">Louisville Marriott East · Louisville, KY</p>
            <p className="text-[var(--brand-text)] leading-relaxed max-w-xl mx-auto">
              {bundleCount} bundles of donated board games and tabletop RPGs, plus a giant 3D-printed Castle Ravenloft,
              {" "}{itemCount} items in all. Every ticket supports UP for Women and Children.
            </p>
          </div>
          <div
            className="absolute left-0 right-0 bottom-0 h-0.5"
            aria-hidden="true"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(232,25,122,.8) 20%, rgba(232,25,122,1) 50%, rgba(232,25,122,.8) 80%, transparent 100%)",
              boxShadow: "0 0 20px 4px rgba(232,25,122,0.5), 0 0 60px 10px rgba(153,51,204,0.3)",
            }}
          />
        </section>
        <RaffleInfo />
        <RaffleBundles />
        <section className="px-4 pb-20 text-center">
          <p className="max-w-xl mx-auto text-sm text-[var(--brand-muted)]">
            Product images are publisher and retailer cover art, shown to identify the raffle prizes.
          </p>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
