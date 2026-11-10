import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: "Thank you | Game Con Junction",
  description:
    "Thank you to everyone who supported the Game Con Junction charity raffle and the Castle Ravenloft silent auction, which benefited UP for Women and Children.",
  alternates: { canonical: "https://gameconjunction.com/raffle" },
  openGraph: {
    title: "Thank you | Game Con Junction",
    description: "Thank you to everyone who supported the charity raffle and the Castle Ravenloft silent auction.",
    url: "https://gameconjunction.com/raffle",
    siteName: "Game Con Junction",
    type: "website",
  },
};

export default function RafflePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section id="hero" className="px-4 pt-36 pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-20 items-center">
            <div>
              <h1 className="section-title mb-8">Thank you</h1>
              <div className="space-y-4 text-[var(--brand-text)] text-lg leading-relaxed max-w-prose">
                <p>
                  Thank you to everyone who bought a raffle ticket, donated a prize, bid on Castle Ravenloft, or helped
                  run it all.
                </p>
                <p>
                  The raffle and the silent auction both benefited UP for Women and Children, a drop-in day center in
                  Louisville for women and children experiencing homelessness.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.uplouisville.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-12 px-7 rounded-[var(--radius-btn)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-white font-display text-sm tracking-wider transition-colors"
                >
                  VISIT UP FOR WOMEN AND CHILDREN
                </a>
                <Link
                  href="/#newsletter"
                  className="inline-flex items-center justify-center min-h-12 px-7 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-display text-sm tracking-wider transition-colors"
                >
                  GET 2027 UPDATES
                </Link>
              </div>
            </div>

            <a
              href="https://www.uplouisville.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="UP for Women and Children website"
              className="block p-6 rounded-[var(--radius-card)] bg-white max-w-sm"
            >
              <Image
                src="/images/raffle/up-logo.jpg"
                alt="UP for Women and Children logo"
                width={640}
                height={538}
                className="w-full h-auto"
              />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
