const BROWSE_URL =
  "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a/schedule?utm_source=gcj-website&utm_medium=events&utm_campaign=gcj2026";

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
            Events
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-4">
            Event Submissions Are Closed
          </h2>
          <p className="text-[var(--brand-muted)] max-w-xl mx-auto">
            Event submissions closed on{" "}
            <strong className="text-[var(--brand-heading)]">October 1, 2026</strong>.
            Thank you to everyone who submitted a game! Questions? Use the contact section below.
          </p>
        </div>

        {/* See what's playing */}
        <div className="max-w-5xl mx-auto p-5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-[var(--brand-heading)] mb-1">Want to see what's playing?</h3>
            <p className="text-sm text-[var(--brand-muted)]">
              Browse the full schedule of events at GCJ 2026 on AfterGame.
            </p>
          </div>
          <a
            href={BROWSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Browse the Schedule
          </a>
        </div>

      </div>
    </section>
  );
}
