const stats = [
  { value: "800+", label: "Projected attendees" },
  { value: "95%",  label: "Satisfaction rate" },
  { value: "94%",  label: "Planning to return" },
  { value: "40%",  label: "Out-of-state visitors" },
];

const highlights = [
  "Tabletop RPGs for new and experienced players",
  "Board game library with hundreds of titles",
  "Megagames — unforgettable large-group play",
  "Play-to-win board games",
  "CCG / TCG tournaments",
  "Hot Games demos featuring new & trending titles",
  "Blood on the Clocktower running non-stop",
  "Vendor & arts hall packed with games and merch",
  "Youth-friendly programming for new gamers",
];

const hours = [
  { day: "Friday, Nov. 6",   time: "5:00 PM – 4:00 AM" },
  { day: "Saturday, Nov. 7", time: "8:00 AM – 4:00 AM" },
  { day: "Sunday, Nov. 8",   time: "8:00 AM – 6:00 PM"  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ── Intro + stats ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              About the Con
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-6 leading-tight">
              Louisville's Home for Tabletop Gaming
            </h2>
            <div className="space-y-4 text-[var(--brand-muted)] leading-relaxed">
              <p>
                Game Con Junction is Louisville's dedicated tabletop gaming convention,
                brought to you by Nerd Louisville and Dukes of Highland — two local organizations
                committed to growing inclusive, community-driven gaming experiences.
              </p>
              <p>
                Whether you love immersive roleplaying, competitive tabletop strategy, or just want
                to discover your next favorite game, GCJ has something for you. Your badge does more
                than get you in the door — it helps support free and reduced-cost community gaming
                events throughout the year, right here in Louisville.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[var(--brand-secondary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--brand-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Highlights + Hours ── */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Highlights */}
          <div>
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-4">
              What's at GCJ
            </p>
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--brand-text)]">
                  <span className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "var(--brand-primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-4">
              Convention Hours
            </p>
            <div className="space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between p-4 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)]"
                >
                  <span className="text-sm font-medium text-[var(--brand-heading)]">{h.day}</span>
                  <span className="text-sm text-[var(--brand-secondary)] font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--brand-muted)] mt-3">
              Louisville Marriott East · Louisville, KY
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
