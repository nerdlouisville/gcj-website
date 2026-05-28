const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a";
const TERMS_URL = "https://nerdlouisville.org/gcj-policies-releases-and-waiver/";

const tiers = [
  {
    name: "Weekend",
    label: "All 3 Days",
    price: "$55",
    description: "Full access to Game Con Junction — Friday, Saturday, and Sunday.",
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "Friday Only",
    label: "Single Day",
    price: "$35",
    description: "Entry to Game Con Junction on Friday.",
    highlight: false,
    badge: null,
  },
  {
    name: "Saturday Only",
    label: "Single Day",
    price: "$45",
    description: "Entry to Game Con Junction on Saturday.",
    highlight: false,
    badge: null,
  },
  {
    name: "Sunday Only",
    label: "Single Day",
    price: "$35",
    description: "Entry to Game Con Junction on Sunday.",
    highlight: false,
    badge: null,
  },
  {
    name: "Kids Weekend",
    label: "Ages 6–12",
    price: "$15",
    description: "Full 3-day access for kids ages 6–12.",
    highlight: false,
    badge: null,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
            Tickets
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-4">
            Get Your Badge
          </h2>
          <p className="text-[var(--brand-muted)] max-w-xl mx-auto">
            Tickets are sold through AfterGame. Early bird pricing is available
            through <strong className="text-[var(--brand-secondary)]">October 5, 2026</strong> —
            don't wait.
          </p>
        </div>

        {/* Badge cards — Weekend featured top row, day passes + kids below */}
        <div className="space-y-6 max-w-4xl mx-auto mb-10">
          {/* Weekend — full width featured card */}
          {tiers.filter((t) => t.highlight).map((tier) => (
            <div
              key={tier.name}
              className="relative p-6 rounded-[var(--radius-card)] border border-[var(--brand-primary)] bg-[var(--brand-surface)] flex flex-col sm:flex-row sm:items-center gap-6"
              style={{ boxShadow: "0 0 24px rgba(232,25,122,0.15)" }}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-semibold">
                  {tier.badge}
                </span>
              )}
              <div className="flex-1">
                <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-1">{tier.label}</p>
                <h3 className="text-xl font-bold text-[var(--brand-heading)]">{tier.name}</h3>
                <p className="text-sm text-[var(--brand-muted)] mt-1">{tier.description}</p>
              </div>
              <div className="text-4xl font-bold text-[var(--brand-primary)] shrink-0">{tier.price}</div>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 block text-center py-3 px-6 rounded-[var(--radius-btn)] text-sm font-semibold bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white transition-colors"
              >
                Get Badge
              </a>
            </div>
          ))}

          {/* Day passes + Kids — 2-col on sm, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.filter((t) => !t.highlight).map((tier) => (
              <div
                key={tier.name}
                className="relative p-5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)] flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-1">{tier.label}</p>
                  <h3 className="text-base font-semibold text-[var(--brand-heading)]">{tier.name}</h3>
                  <p className="text-xs text-[var(--brand-muted)] mt-1">{tier.description}</p>
                </div>
                <div className="text-2xl font-bold text-[var(--brand-secondary)] my-3">{tier.price}</div>
                <a
                  href={TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-3 rounded-[var(--radius-btn)] text-xs font-semibold border border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
                >
                  Get Badge
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer notes */}
        <div className="text-center space-y-2">
          <p className="text-xs text-[var(--brand-muted)]">
            🎟 Early bird pricing ends{" "}
            <strong className="text-[var(--brand-primary)]">October 5, 2026</strong>
            {" "}— prices increase after that date.
          </p>
          <p className="text-xs text-[var(--brand-muted)]">
            All purchases processed through{" "}
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary)] hover:underline">AfterGame</a>
            . By purchasing you agree to our{" "}
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary)] hover:underline">Terms & Conditions</a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
