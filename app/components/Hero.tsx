import Image from "next/image";

const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a";
const EARLY_BIRD_DATE = "October 5, 2026";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Retro grid image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.85,
          }}
        />
        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,8,32,0.45) 0%, rgba(13,8,32,0.2) 40%, rgba(13,8,32,0.55) 100%)" }}
        />
        {/* Pink glow behind content */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(232,25,122,0.15) 0%, transparent 70%)" }}
        />
      </div>


{/* ── Exe mascot ── */}
      <div className="mb-2">
        <Image
          src="/images/exe-mascot.png"
          alt="Exe the mascot"
          width={220}
          height={220}
          className="w-[140px] sm:w-[180px] md:w-[220px] h-auto drop-shadow-[0_0_20px_rgba(232,25,122,0.6)]"
          priority
        />
      </div>

      {/* ── Logo ── */}
      <div className="mb-6 px-8">
        <Image
          src="/images/logo-white.png"
          alt="Game Con Junction"
          width={480}
          height={160}
          className="w-[220px] sm:w-[320px] md:w-[440px] h-auto"
          priority
        />
      </div>

      {/* ── Tagline ── */}
      <div className="mb-8">
        <Image
          src="/images/tagline-white.png"
          alt="Louisville's Ultimate Gaming Weekend"
          width={400}
          height={60}
          className="w-[240px] sm:w-[300px] md:w-[380px] h-auto opacity-90"
        />
      </div>

      {/* ── Dates + venue ── */}
      <p
        className="text-lg sm:text-xl md:text-2xl font-bold mb-1"
        style={{ fontFamily: "var(--font-display)", color: "var(--brand-heading)" }}
      >
        FRIDAY NOV. 6 // SUNDAY NOV. 8
      </p>
      <p
        className="text-4xl sm:text-5xl font-bold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--brand-primary)" }}
      >
        2026
      </p>
      <p className="text-sm sm:text-base text-[var(--brand-muted)] mb-10">
        Louisville Marriott East · Louisville, KY
      </p>

      {/* ── CTAs ── */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-btn)] text-white text-base font-bold transition-all shadow-lg hover:scale-105"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.8rem",
            fontWeight: 900,
            letterSpacing: "0.08em",
            background: "var(--brand-primary)",
            boxShadow: "0 0 32px rgba(232,25,122,0.65)",
          }}
        >
          GET YOUR TICKETS
        </a>
        <a
          href="#about"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-btn)] border text-base transition-colors"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.8rem",
            fontWeight: 900,
            letterSpacing: "0.08em",
            borderColor: "var(--brand-secondary)",
            color: "var(--brand-text)",
          }}
        >
          LEARN MORE
        </a>
      </div>

      {/* ── Early bird callout ── */}
      <p className="mt-8 text-sm text-[var(--brand-muted)]">
        🎟 Early bird pricing through{" "}
        <strong style={{ color: "var(--brand-primary)" }}>{EARLY_BIRD_DATE}</strong>
      </p>

      {/* ── Scroll nudge ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--brand-muted)] animate-bounce">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 10.586L2.707 5.293 1.293 6.707 8 13.414l6.707-6.707-1.414-1.414L8 10.586z" />
        </svg>
      </div>
    </section>
  );
}
