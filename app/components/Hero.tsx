import Image from "next/image";
import Link from "next/link";
import BrushX from "./BrushX";
import Flap from "./Flap";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Base dark fill */}
        <div className="absolute inset-0" style={{ background: "var(--brand-bg-deep)" }} />

        {/* Retro synthwave grid: perspective floor */}
        <div className="absolute inset-x-0 bottom-0" style={{ height: "65%", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(153,51,204,0.55) 1px, transparent 1px),
                linear-gradient(90deg, rgba(232,25,122,0.35) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              transform: "perspective(600px) rotateX(55deg)",
              transformOrigin: "50% 0%",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Horizon glow line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "50%",
            height: "2px",
            background: "linear-gradient(90deg, transparent 0%, rgba(232,25,122,0.8) 20%, rgba(232,25,122,1) 50%, rgba(232,25,122,0.8) 80%, transparent 100%)",
            
          }}
        />

        {/* Dark overlay: keeps text readable without killing the grid */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,8,32,0.3) 0%, rgba(13,8,32,0.0) 40%, rgba(13,8,32,0.0) 60%, rgba(13,8,32,0.3) 100%)" }}
        />

      </div>


{/* ── Exe mascot ── */}
      <div className="relative z-10 -mb-3 sm:-mb-5">
        <Image
          src="/images/exe-mascot.png"
          alt="Exe the mascot"
          width={660}
          height={660}
          className="w-[120px] sm:w-[150px] h-auto"
          priority
        />
      </div>

      {/* ── Poster block: brush X behind logo and tagline ── */}
      <div className="relative w-full max-w-[380px] aspect-square flex flex-col items-center justify-center px-5 -my-6 sm:-my-8">
        <BrushX className="-rotate-2" />
        <h1 className="relative px-2">
          <Image
            src="/images/logo-white.png"
            alt="Game Con Junction"
            width={960}
            height={305}
            className="w-full max-w-[440px] mx-auto h-auto"
            priority
          />
        </h1>
        <div className="relative mt-4">
          <Image
            src="/images/tagline-white.png"
            alt="Louisville's Ultimate Gaming Weekend"
            width={800}
            height={223}
            className="w-[220px] sm:w-[300px] mx-auto h-auto"
          />
        </div>
      </div>

      {/* ── Thank you + what's next ── */}
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--brand-text-dim)]">Thank you for an amazing weekend</p>
      <div className="mt-4">
        <Flap text="GCJ 2027" size="lg" label="Game Con Junction 2027" />
      </div>
      <p className="mt-4 mb-8 text-base sm:text-lg text-[var(--brand-text)]">Dates coming soon.</p>

      <Link
        href="/#newsletter"
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-btn)] text-white font-bold transition-all hover:brightness-110"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.8rem",
          fontWeight: 900,
          letterSpacing: "0.08em",
          background: "var(--brand-primary)",
        }}
      >
        SIGN UP FOR UPDATES
      </Link>
    </section>
  );
}
