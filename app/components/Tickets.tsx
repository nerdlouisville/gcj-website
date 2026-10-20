const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a?utm_source=gcj-website&utm_medium=tickets&utm_campaign=gcj2026";
const TERMS_URL = "https://nerdlouisville.org/gcj-policies-releases-and-waiver/?utm_source=gcj-website&utm_medium=tickets&utm_campaign=gcj2026";


export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[var(--brand-primary-text)] text-sm font-semibold uppercase tracking-widest mb-3">
            Tickets
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-[var(--brand-heading)] mb-4">
            Get Your Badge
          </h2>
          <p className="text-[var(--brand-muted)] max-w-xl mx-auto">
            Buttons open AfterGame in a new tab. Early bird sales closed on{" "}
            <strong className="text-[var(--brand-secondary-text)]">October 5, 2026</strong>.
          </p>
        </div>

        {/* Badge cards */}
        <div className="space-y-6 max-w-4xl mx-auto mb-10">

          {/* VIP: top featured card */}
          <div
            className="relative p-6 rounded-[var(--radius-card)] border-2 border-[var(--brand-secondary)] bg-[var(--brand-surface)] flex flex-col sm:flex-row sm:items-start gap-6"
            style={{ boxShadow: "0 0 32px rgba(153,51,204,0.2)" }}
          >
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[var(--brand-secondary)] text-white text-xs font-semibold">
              VIP
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">All 3 Days · Premium</p>
              </div>
              <h3 className="text-xl font-bold text-[var(--brand-heading)] mb-3">VIP Badge</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {[
                  "3-day admission",
                  "Up to 2 kids weekend passes",
                  "Coffee, donuts & chill-out space access",
                  "Exclusive GCJ T-shirt",
                  "Early access to event tickets",
                  "Swag bag: dice, stickers, games & more",
                  "Our unending thanks ♥",
                ].map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-[var(--brand-text)]">
                    <span className="mt-0.5 shrink-0 text-[var(--brand-secondary-text)]">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-end gap-3 shrink-0">
              <div className="font-display text-3xl text-[var(--brand-secondary-text)]">$145</div>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-6 rounded-[var(--radius-btn)] text-sm font-semibold bg-[var(--brand-secondary)] hover:opacity-90 text-white transition-opacity"
              >
                Get VIP Badge
              </a>
            </div>
          </div>

          {/* Weekend: full width featured card */}
          <div
            className="relative p-6 rounded-[var(--radius-card)] border border-[var(--brand-primary)] bg-[var(--brand-surface)] flex flex-col sm:flex-row sm:items-center gap-6"
            style={{ boxShadow: "0 0 24px rgba(232,25,122,0.15)" }}
          >
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-semibold">
              Best Value
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">All 3 Days</p>
              </div>
              <h3 className="text-xl font-bold text-[var(--brand-heading)]">Weekend</h3>
              <p className="text-sm text-[var(--brand-muted)] mt-1">Full access to Game Con Junction: Friday, Saturday, and Sunday.</p>
            </div>
            <div className="font-display text-3xl text-[var(--brand-primary-text)] shrink-0">$65</div>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 block text-center py-3 px-6 rounded-[var(--radius-btn)] text-sm font-semibold bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white transition-colors"
            >
              Get Weekend Badge
            </a>
          </div>

          {/* Single-day passes: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Friday Only", price: "$40", description: "Entry to Game Con Junction on Friday." },
              { name: "Saturday Only", price: "$50", description: "Entry to Game Con Junction on Saturday." },
              { name: "Sunday Only", price: "$40", description: "Entry to Game Con Junction on Sunday." },
            ].map((tier) => (
              <div
                key={tier.name}
                className="relative p-5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)] flex flex-col"
              >
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">Single Day</p>
                </div>
                <h3 className="text-base font-semibold text-[var(--brand-heading)]">{tier.name}</h3>
                <p className="text-sm text-[var(--brand-muted)] mt-1 flex-1">{tier.description}</p>
                <div className="font-display text-xl text-[var(--brand-secondary-text)] my-3">{tier.price}</div>
                <a
                  href={TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-3 rounded-[var(--radius-btn)] text-sm font-semibold border border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
                >
                  Get {tier.name.replace(" Only", "")} Badge
                </a>
              </div>
            ))}
          </div>

          {/* Kids: its own row, centered */}
          <div className="flex justify-center">
            <div className="relative p-5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)] flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:max-w-md">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">Ages 6–12</p>
                </div>
                <h3 className="text-base font-semibold text-[var(--brand-heading)]">Kids Weekend</h3>
                <p className="text-sm text-[var(--brand-muted)] mt-1">Full 3-day access for kids ages 6–12.</p>
              </div>
              <div className="font-display text-xl text-[var(--brand-secondary-text)] shrink-0">$20</div>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 block text-center py-3 px-4 rounded-[var(--radius-btn)] text-sm font-semibold border border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
              >
                Get Kids Badge
              </a>
            </div>
          </div>

        </div>

        {/* Footer notes */}
        <div className="text-center space-y-2">
          <p className="text-sm text-[var(--brand-muted)]">
            All purchases processed through{" "}
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary-text)] hover:underline">AfterGame</a>
            . By purchasing you agree to our{" "}
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary-text)] hover:underline">Terms & Conditions</a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
