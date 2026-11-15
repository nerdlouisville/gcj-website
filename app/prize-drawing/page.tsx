import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import TallyEmbed from "../components/TallyEmbed";

// Not linked from anywhere on the site. noindex keeps it out of search results.
export const metadata: Metadata = {
  title: "Prize drawing and volunteer interest | Game Con Junction",
  description: "Enter the Game Con Junction 2026 prize drawing and tell us if you'd like to volunteer next year.",
  robots: { index: false, follow: false },
};

export default function PrizeDrawingPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="px-4 pt-36 pb-24 sm:pb-32">
          <div className="max-w-2xl mx-auto">
            <h1 className="section-title mb-8">Prize drawing and volunteer interest</h1>
            <p className="text-[var(--brand-text)] text-lg leading-relaxed max-w-prose mb-10">
              Enter the prize drawing, and let us know if you&apos;d like to help out next year.
            </p>
            <TallyEmbed formId="4aJJad" title="Prize drawing and volunteer interest form" />
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
