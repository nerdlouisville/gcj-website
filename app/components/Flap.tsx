"use client";

import { useEffect, useRef, useState } from "react";

type Size = "sm" | "md" | "lg" | "xl";

const DIGITS = "0123456789";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const TICK_MS = 120; // one flip per tick: top half falls, then bottom half lands

function poolFor(ch: string): string | null {
  if (/[0-9]/.test(ch)) return DIGITS;
  if (/[A-Z]/.test(ch)) return LETTERS;
  return null; // $ - and other symbols stay put
}

type Frame = { tick: number; prev: string[]; cur: string[] };

/** Akira's I is a bare stem and looks thin in a full-width tile, so draw a slab-serif I. */
function Glyph({ ch }: { ch: string }) {
  if (ch === "I") {
    return (
      <svg className="flap-i" viewBox="0 0 70 72" aria-hidden="true" focusable="false">
        <path d="M0 0H70V15H48V57H70V72H0V57H22V15H0Z" />
      </svg>
    );
  }
  return <>{ch}</>;
}

/**
 * Split-flap tiles, borrowed from the JUNCTION logo: black tile, white
 * letter, a hairline across the middle. Spaces become gaps.
 *
 * The real text is always rendered. When the tiles scroll into view they
 * flip once through random characters and land on the real value. Skipped
 * entirely for prefers-reduced-motion. aria-label carries the real value.
 */
export default function Flap({
  text,
  size = "md",
  label,
  className = "",
  animate = true,
}: {
  text: string;
  size?: Size;
  label?: string;
  className?: string;
  animate?: boolean;
}) {
  const finals = [...text];
  const ref = useRef<HTMLSpanElement>(null);
  const [frame, setFrame] = useState<Frame | null>(null);
  const lastText = useRef<string | null>(null);

  useEffect(() => {
    const last = lastText.current;
    lastText.current = text;
    if (!animate) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    // The value changed after first paint (a countdown ticking): flip only the
    // tiles that changed, once, straight from the old character to the new one.
    if (last !== null && last !== text) {
      const from = [...last];
      const to = [...text];
      if (from.length !== to.length) return;
      setFrame({ tick: -1, prev: from, cur: to });
      const done = setTimeout(() => setFrame(null), TICK_MS);
      return () => clearTimeout(done);
    }

    const chars = [...text];
    // Each tile flips a few random characters, staggered left to right.
    const start = chars.map((_, i) => i * 2);
    const steps = chars.map((ch, i) => (poolFor(ch) ? 4 + (i % 3) : 0));
    const total = Math.max(...chars.map((_, i) => (steps[i] ? start[i] + steps[i] + 1 : 0)));

    let timer: ReturnType<typeof setInterval> | undefined;
    let prev = chars.slice();

    const run = () => {
      let tick = 0;
      timer = setInterval(() => {
        tick += 1;
        if (tick > total) {
          clearInterval(timer);
          setFrame(null);
          return;
        }
        const cur = chars.map((final, i) => {
          const pool = poolFor(final);
          const local = tick - start[i];
          if (!pool || local < 1 || local > steps[i]) return final;
          let next = final;
          while (next === prev[i] || next === final) next = pool[Math.floor(Math.random() * pool.length)];
          return next;
        });
        setFrame({ tick, prev, cur });
        prev = cur;
      }, TICK_MS);
    };

    let started = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          io.disconnect();
          run();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [text, animate]);

  return (
    <span ref={ref} role="img" aria-label={label ?? text} className={`flap flap--${size} ${className}`}>
      {finals.map((final, i) => {
        if (final === " ") return <span key={i} className="flap-gap" aria-hidden="true" />;

        const tileClass = `flap-tile${/[.,:]/.test(final) ? " flap-tile--narrow" : ""}${
          size !== "xl" && /[0-9$]/.test(final) ? " flap-tile--num" : ""
        }`;
        const prev = frame?.prev[i];
        const cur = frame?.cur[i];

        if (frame && prev !== undefined && cur !== undefined && prev !== cur) {
          return (
            <span key={`${i}-${frame.tick}`} className={`${tileClass} flap-tile--anim`} aria-hidden="true">
              <span className="ft-size"><Glyph ch={final} /></span>
              <span className="ft-layer ft-top"><Glyph ch={cur} /></span>
              <span className="ft-layer ft-bottom"><Glyph ch={prev} /></span>
              <span className="ft-layer ft-flip-bottom"><Glyph ch={cur} /></span>
              <span className="ft-layer ft-flip-top"><Glyph ch={prev} /></span>
            </span>
          );
        }

        return (
          <span key={`${i}-s`} className={tileClass} aria-hidden="true">
            <Glyph ch={cur ?? final} />
          </span>
        );
      })}
    </span>
  );
}
