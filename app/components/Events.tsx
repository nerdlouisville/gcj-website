const BROWSE_URL =
  "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a/schedule?utm_source=gcj-website&utm_medium=events&utm_campaign=gcj2026";

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-20 items-center">
        <h2 className="section-title">The schedule is live</h2>
        <div>
          <p className="text-[var(--brand-text)] leading-relaxed max-w-prose mb-6">
            Every game, tournament, and demo is on AfterGame. Look it up before Friday and
            you can plan your weekend around it. Event submissions are closed.
          </p>
          <a
            href={BROWSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-12 px-7 rounded-[var(--radius-btn)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-white font-display text-sm tracking-wider transition-colors"
          >
            OPEN THE SCHEDULE
          </a>
        </div>
      </div>
    </section>
  );
}
