"use client";

import Image from "next/image";
import { useState } from "react";

const VENUE_URL =
  "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a/venue?utm_source=gcj-website&utm_medium=maps&utm_campaign=gcj2026";

const maps = [
  {
    id: "ballroom",
    tab: "Commonwealth Ballroom",
    floor: "1st floor",
    src: "/images/maps/commonwealth-ballroom.png",
    width: 1828,
    height: 961,
    alt: "Floor plan of the Commonwealth Ballroom showing vendors, Hot Games, Minis Paint & Take, open gaming, tabletop event tables, Tri-State Trail Tourney, Play to Win, and the Board Game Library.",
    caption:
      "Vendors, the board game library, Play to Win, Hot Games, open gaming, tabletop events, the Tri-State Tourney, and Minis Paint & Take. More vendors line the hallway around it.",
  },
  {
    id: "prefunction",
    tab: "Registration and meeting rooms",
    floor: "1st floor",
    src: "/images/maps/prefunction-rooms.png",
    width: 1077,
    height: 783,
    alt: "Floor plan of the first floor prefunction area showing the main entrance, elevators, registration, merch, the Thoroughbred and Steamboat rooms, and the stairs to the second floor.",
    caption:
      "The main entrance, registration, merch, the Ravenloft Auction table, and the Thoroughbred and Steamboat rooms. Stairs and elevators go up to the 2nd floor.",
  },
  {
    id: "second",
    tab: "2nd floor",
    floor: "Upstairs",
    src: "/images/maps/second-floor.png",
    width: 1771,
    height: 630,
    alt: "Floor plan of the second floor showing the Bluegrass Ballrooms with megagames and CCGs and TCGs, Artists Alley, the Golden Keep Game Suite for RPGs, the Lurking Fears Game Room, and the Cardinal Room for social deduction.",
    caption:
      "RPGs in the Golden Keep Game Suite, Artists Alley, CCGs and TCGs, megagames, the Lurking Fears Game Room, the Cardinal Room for social deduction, and the charity raffle display.",
  },
] as const;

export default function Maps() {
  const [active, setActive] = useState<(typeof maps)[number]["id"]>("ballroom");
  const current = maps.find((m) => m.id === active) ?? maps[0];

  return (
    <section id="maps" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-8">Maps</h2>

        <div role="group" aria-label="Choose a floor plan" className="flex flex-wrap gap-2 mb-6">
          {maps.map((m) => {
            const on = m.id === active;
            return (
              <button
                key={m.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(m.id)}
                className={`min-h-11 px-4 rounded-[var(--radius-btn)] border text-sm font-semibold text-left transition-colors ${
                  on
                    ? "bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white"
                    : "border-[var(--brand-border-ui,#b967ff)] text-[var(--brand-text)] hover:border-[var(--brand-primary)]"
                }`}
              >
                {m.tab}
                <span className={`ml-2 text-xs font-normal ${on ? "text-white/80" : "text-[var(--brand-text-dim)]"}`}>
                  {m.floor}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mb-5 max-w-3xl text-[var(--brand-text)] leading-relaxed">{current.caption}</p>

        {/* Plans are small print on a phone: let the plan scroll sideways instead of shrinking */}
        <div className="overflow-x-auto rounded-[var(--radius-card)] bg-white">
          <div className="min-w-[720px]">
            <Image
              key={current.id}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="(min-width: 1152px) 1100px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-sm text-[var(--brand-muted)]">
          <a
            href={current.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-primary-text)] underline underline-offset-2"
          >
            Open this plan full size
          </a>
          {" · "}
          <a
            href={VENUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-primary-text)] underline underline-offset-2"
          >
            Interactive map on AfterGame
          </a>
        </p>
      </div>
    </section>
  );
}
