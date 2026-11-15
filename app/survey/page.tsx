import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import TallyEmbed from "../components/TallyEmbed";

// Not linked from anywhere on the site. noindex keeps it out of search results.
export const metadata: Metadata = {
  title: "How did we do? | Game Con Junction",
  description: "Tell us how Game Con Junction 2026 went.",
  robots: { index: false, follow: false },
};

export default function SurveyPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="px-4 pt-36 pb-24 sm:pb-32">
          <div className="max-w-2xl mx-auto">
            <h1 className="section-title mb-8">How did we do?</h1>
            <p className="text-[var(--brand-text)] text-lg leading-relaxed max-w-prose mb-10">
              Thanks for spending the weekend with us. Tell us what worked and what didn&apos;t, and we&apos;ll use it
              to plan 2027. It takes a few minutes, and it closes December 1.
            </p>
            <TallyEmbed formId="rDaaDp" title="Game Con Junction 2026 feedback survey" />
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
