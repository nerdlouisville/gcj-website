// TODO: replace placeholder copy with real event description

const stats = [
  { value: "3", label: "Days of Gaming" },
  { value: "Nov 6–8", label: "2026" },
  { value: "20+", label: "Vendors & Artists" },
  { value: "Louisville", label: "Marriott East" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <div>
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              About the Con
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-6 leading-tight">
              {/* TODO: finalize tagline */}
              Louisville's Home for Tabletop Gaming
            </h2>
            <div className="space-y-4 text-[var(--brand-muted)] leading-relaxed">
              <p>
                {/* TODO: replace with real "About GCJ" copy */}
                Game Con Junction is Louisville's dedicated tabletop gaming convention,
                brought to you by Nerd Louisville and Dukes of Highland. Whether you're
                a seasoned dungeon master, a competitive card player, or just curious
                about the hobby — there's a seat at the table for you.
              </p>
              <p>
                Three days of RPGs, board games, CCG tournaments, a packed vendor hall,
                and a community that genuinely loves playing games together.
              </p>
            </div>

            {/* Hotel block */}
            <div className="mt-8 p-4 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)]">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-1">
                Hotel Block Available
              </p>
              <p className="text-[var(--brand-text)] font-medium">
                Louisville Marriott East — $129/night
              </p>
              <p className="text-[var(--brand-muted)] text-sm mb-3">
                Rate available Nov 5–9 · Book by October 16, 2026
              </p>
              <a
                href="https://app.marriott.com/reslink?id=1768408077017&key=GRP&app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--brand-primary)] hover:underline"
              >
                Book the group rate →
              </a>
            </div>
          </div>

          {/* Stats grid */}
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
      </div>
    </section>
  );
}
