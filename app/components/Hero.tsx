// TODO: replace placeholder copy and image with real brand assets

const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a";
const EARLY_BIRD_DATE = "October 5, 2026";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-24"
    >
      {/* Background gradient — swap for a real hero image once available */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--brand-primary) 20%, transparent), transparent 70%), var(--brand-bg)",
        }}
      />

      {/* Event tag */}
      <p className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--brand-border)] text-[var(--brand-muted)] text-xs sm:text-sm tracking-widest uppercase">
        {/* TODO: swap in year logo/badge once assets ready */}
        Louisville, KY · Year 2
      </p>

      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--brand-heading)] leading-none mb-4">
        Game Con
        <br />
        <span style={{ color: "var(--brand-secondary)" }}>Junction</span>
      </h1>

      {/* Dates + venue */}
      <p className="text-lg sm:text-xl md:text-2xl text-[var(--brand-muted)] mb-3">
        November 6–8, 2026
      </p>
      <p className="text-base sm:text-lg text-[var(--brand-muted)] mb-10">
        Louisville Marriott East · 1903 Embassy Square Blvd, Louisville, KY
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-base font-semibold transition-colors shadow-lg"
        >
          Get Your Tickets
        </a>
        <a
          href="#about"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-btn)] border border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] text-base font-medium transition-colors"
        >
          Learn More
        </a>
      </div>

      {/* Early bird callout */}
      <p className="mt-8 text-sm text-[var(--brand-muted)]">
        🎟 Early bird pricing available through{" "}
        <strong className="text-[var(--brand-secondary)]">{EARLY_BIRD_DATE}</strong>
      </p>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--brand-muted)] animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 10.586L2.707 5.293 1.293 6.707 8 13.414l6.707-6.707-1.414-1.414L8 10.586z" />
        </svg>
      </div>
    </section>
  );
}
