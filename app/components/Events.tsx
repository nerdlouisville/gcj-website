const AFTERGAME_URL =
  "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a?utm_source=gcj-website&utm_medium=events&utm_campaign=gcj2026";

const casualSteps = [
  "Go to the GCJ 2026 AfterGame page (button below).",
  "Sign in or create a new account.",
  "Click Get Tickets and purchase any badge.",
  "Return to the main GCJ 2026 page.",
  "Click +New… → Submit an 'Official' Game.",
  "Search for your game in the list.",
  "Add a description (optional), preferred start time, duration, and player limit.",
  "Click Submit Game. Your submission will be pending approval.",
];

const gmSteps = [
  "Go to the GCJ 2026 AfterGame page (button below).",
  "Sign in or create a new account.",
  "Click Get Tickets.",
  "Click Enter Code and enter: EventSubmissions",
  "Add Badge: Pending GM to your cart and click Reserve Tickets.",
  "Return to the main GCJ 2026 page.",
  "Click +New… → Submit an 'Official' Game.",
  "Search for your game, add details, and click Submit Game. Repeat for each event.",
];

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
            Run a Game
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-4">
            Submit Your Events
          </h2>
          <p className="text-[var(--brand-muted)] max-w-xl mx-auto">
            Want to run a game at GCJ 2026? Event submissions are open now through{" "}
            <strong className="text-[var(--brand-heading)]">October 1, 2026</strong>.
            Games are submitted through our AfterGame event page.
          </p>
        </div>

        {/* Two paths */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">

          {/* Casual — standard badge */}
          <div className="p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] flex flex-col">
            <div className="mb-5">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-1">Running less than 12 hours</p>
              <h3 className="text-lg font-bold text-[var(--brand-heading)]">Standard Submission</h3>
              <p className="text-sm text-[var(--brand-muted)] mt-1">
                Purchase any badge first, then submit your events.
              </p>
            </div>
            <ol className="flex-1 space-y-3">
              {casualSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--brand-text)]">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--brand-secondary)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">
                    {step.includes("EventSubmissions") ? (
                      <>
                        {step.split("EventSubmissions")[0]}
                        <code className="px-1.5 py-0.5 rounded bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-primary)] font-mono text-xs">EventSubmissions</code>
                        {step.split("EventSubmissions")[1]}
                      </>
                    ) : step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* GM — free badge */}
          <div
            className="p-6 rounded-[var(--radius-card)] border border-[var(--brand-primary)] bg-[var(--brand-bg)] flex flex-col"
            style={{ boxShadow: "0 0 24px rgba(232,25,122,0.10)" }}
          >
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest">Running 12+ hours</p>
                <span className="px-2 py-0.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-semibold">
                  Free Badge
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--brand-heading)]">GM Submission</h3>
              <p className="text-sm text-[var(--brand-muted)] mt-1">
                Planning to run 12 or more hours of <strong className="text-[var(--brand-heading)]">approved</strong> games? You earn a complimentary GM badge — no purchase needed. The free badge is granted once your submitted events have been reviewed and approved by GCJ organizers.
              </p>
            </div>
            <ol className="flex-1 space-y-3">
              {gmSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--brand-text)]">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--brand-primary)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">
                    {step.includes("EventSubmissions") ? (
                      <>
                        {step.split("EventSubmissions")[0]}
                        <code className="px-1.5 py-0.5 rounded bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-primary)] font-mono text-xs">EventSubmissions</code>
                        {step.split("EventSubmissions")[1]}
                      </>
                    ) : step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* Notes + CTA */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="p-4 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-sm text-[var(--brand-muted)]">
            <strong className="text-[var(--brand-heading)]">After submitting:</strong> Your game will be pending approval. If it's denied, check the response from GCJ organizers — we may ask for more detail or suggest a different time slot. Questions? Use the contact section below.
          </div>
          <div className="text-center pt-2">
            <a
              href={AFTERGAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-[var(--radius-btn)] text-white text-sm font-bold transition-all hover:scale-105"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                background: "var(--brand-primary)",
                boxShadow: "0 0 28px rgba(232,25,122,0.5)",
              }}
            >
              GO TO AFTERGAME →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
