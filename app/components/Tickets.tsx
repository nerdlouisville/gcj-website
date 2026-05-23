// TODO: confirm pricing tiers and amounts with the team, then replace placeholders

const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a";

const tiers = [
  {
    name: "Early Bird",
    price: "$XX",
    note: "Through October 5, 2026",
    highlight: true,
    badge: "Best Value",
    perks: [
      "Full 3-day access",
      "All open gaming",
      "CCG tournament entry",
      // TODO: add any early bird extras
    ],
  },
  {
    name: "Regular",
    price: "$XX",
    note: "From October 6, 2026",
    highlight: false,
    badge: null,
    perks: [
      "Full 3-day access",
      "All open gaming",
      "CCG tournament entry",
    ],
  },
  // TODO: add day passes, VIP tier, or any other ticket types as needed
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

        {/* Tier cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-[var(--radius-card)] border flex flex-col ${
                tier.highlight
                  ? "border-[var(--brand-primary)] bg-[var(--brand-surface)]"
                  : "border-[var(--brand-border)] bg-[var(--brand-surface)]"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-semibold">
                  {tier.badge}
                </span>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[var(--brand-heading)]">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-[var(--brand-secondary)] my-1">
                  {tier.price}
                </div>
                <p className="text-xs text-[var(--brand-muted)]">{tier.note}</p>
              </div>
              <ul className="flex-1 space-y-2 mb-6">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-[var(--brand-text)]">
                    <span className="text-[var(--brand-primary)]">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-4 rounded-[var(--radius-btn)] text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white"
                    : "border border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)]"
                }`}
              >
                Buy on AfterGame
              </a>
            </div>
          ))}
        </div>

        {/* Note about platform */}
        <p className="text-center text-xs text-[var(--brand-muted)]">
          Tickets are handled through{" "}
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-primary)] hover:underline"
          >
            AfterGame
          </a>
          . Questions about your order? Use the contact section below.
        </p>
      </div>
    </section>
  );
}
