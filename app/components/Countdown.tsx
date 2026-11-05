"use client";

import { useSyncExternalStore } from "react";
import Flap from "./Flap";

// Pinned to Eastern so it is right for visitors anywhere. Nov. 6 is after the
// clocks fell back, so Louisville is on EST (UTC-5).
const START_MIN = Date.parse("2026-11-06T17:00:00-05:00") / 60000;
const END_MIN = Date.parse("2026-11-08T18:00:00-05:00") / 60000;

// One tick per minute is all the countdown shows, so subscribers only
// re-render when the minute changes. The server snapshot is null so the
// page renders the same HTML on server and client, then fills in.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 10_000);
  return () => clearInterval(id);
}
const getMinute = () => Math.floor(Date.now() / 60000);
const getServerMinute = () => null;

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);

  // Reserve the space so the page doesn't jump when the time fills in.
  if (minute === null) return <div className="min-h-[7.5rem]" aria-hidden="true" />;

  if (minute >= END_MIN) {
    return (
      <div>
        <Flap text="THANK YOU" size="md" />
        <p className="mt-3 text-sm text-[var(--brand-text-dim)]">Thanks for spending the weekend with us.</p>
      </div>
    );
  }

  if (minute >= START_MIN) {
    return (
      <div>
        <Flap text="OPEN NOW" size="md" />
        <p className="mt-3 text-sm text-[var(--brand-text-dim)]">Game Con Junction is happening right now.</p>
      </div>
    );
  }

  const remaining = START_MIN - minute;
  const days = Math.floor(remaining / 1440);
  const hours = Math.floor((remaining % 1440) / 60);
  const mins = remaining % 60;

  const units = [
    { text: pad(days), label: "Days" },
    { text: pad(hours), label: "Hours" },
    { text: pad(mins), label: "Minutes" },
  ];

  return (
    <div>
      <p className="mb-3 text-sm uppercase tracking-widest text-[var(--brand-text-dim)]">Events begin in</p>
      <div
        className="flex gap-5 sm:gap-7"
        role="timer"
        aria-label={`${days} days, ${hours} hours, ${mins} minutes until events begin Friday at 5 PM`}
      >
        {units.map((u) => (
          <div key={u.label}>
            <Flap text={u.text} size="lg" label={`${u.text} ${u.label.toLowerCase()}`} />
            <p className="mt-2 text-xs uppercase tracking-widest text-[var(--brand-text-dim)]">{u.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
