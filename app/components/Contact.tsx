"use client";

import Script from "next/script";

const INQUIRY_EMAIL = "info@gameconjunction.com";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <Script async src="https://tally.so/widgets/embed.js" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* ── CONTACT INFO + SOCIALS ───────────── */}
          <div>
            <h2 className="section-title mb-6">Questions</h2>
            <p className="text-[var(--brand-text)] mb-6 leading-relaxed max-w-prose">
              Questions about Game Con Junction or anything else? Email or use the form
              and a person will answer.
            </p>

            <a
              href={`mailto:${INQUIRY_EMAIL}`}
              className="inline-flex items-center gap-2 text-[var(--brand-primary-text)] hover:underline font-medium mb-10"
            >
              {INQUIRY_EMAIL}
            </a>
          </div>

          {/* ── TALLY FORM ───────────────────────── */}
          <div>
            <iframe
              data-tally-src="https://tally.so/embed/Xxz1gV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
              loading="lazy"
              width="100%"
              height="300"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Contact form"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
