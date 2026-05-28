const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a";
const TERMS_URL = "https://nerdlouisville.org/gcj-policies-releases-and-waiver/";


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

        {/* Badge cards */}
        <div className="space-y-6 max-w-4xl mx-auto mb-10">

          {/* Weekend — full width featured card */}
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
                <span className="px-2 py-0.5 rounded-full border border-[var(--brand-secondary)] text-[var(--brand-secondary)] text-xs font-medium">Early Bird</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--brand-heading)]">Weekend</h3>
              <p className="text-sm text-[var(--brand-muted)] mt-1">Full access to Game Con Junction — Friday, Saturday, and Sunday.</p>
            </div>
            <div className="text-4xl font-bold text-[var(--brand-primary)] shrink-0">$55</div>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 block text-center py-3 px-6 rounded-[var(--radius-btn)] text-sm font-semibold bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white transition-colors"
            >
              Get Badge
            </a>
          </div>

          {/* Single-day passes — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Friday Only", price: "$35", description: "Entry to Game Con Junction on Friday." },
              { name: "Saturday Only", price: "$45", description: "Entry to Game Con Junction on Saturday." },
              { name: "Sunday Only", price: "$35", description: "Entry to Game Con Junction on Sunday." },
            ].map((tier) => (
              <div
                key={tier.name}
                className="relative p-5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)] flex flex-col"
              >
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">Single Day</p>
                  <span className="px-2 py-0.5 rounded-full border border-[var(--brand-secondary)] text-[var(--brand-secondary)] text-xs font-medium">Early Bird</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--brand-heading)]">{tier.name}</h3>
                <p className="text-xs text-[var(--brand-muted)] mt-1 flex-1">{tier.description}</p>
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

          {/* Kids — its own row, centered */}
          <div className="flex justify-center">
            <div className="relative p-5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)] flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:max-w-md">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">Ages 6–12</p>
                  <span className="px-2 py-0.5 rounded-full border border-[var(--brand-secondary)] text-[var(--brand-secondary)] text-xs font-medium">Early Bird</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--brand-heading)]">Kids Weekend</h3>
                <p className="text-xs text-[var(--brand-muted)] mt-1">Full 3-day access for kids ages 6–12.</p>
              </div>
              <div className="text-2xl font-bold text-[var(--brand-secondary)] shrink-0">$15</div>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 block text-center py-2 px-4 rounded-[var(--radius-btn)] text-xs font-semibold border border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
              >
                Get Badge
              </a>
            </div>
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
