import Flap from "./Flap";

const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a?utm_source=gcj-website&utm_medium=tickets&utm_campaign=gcj2026";
const TERMS_URL = "https://nerdlouisville.org/gcj-policies-releases-and-waiver/?utm_source=gcj-website&utm_medium=tickets&utm_campaign=gcj2026";

const badges = [
  { name: "Weekend", price: "$65", note: "Friday, Saturday, and Sunday.", featured: true },
  { name: "Friday", price: "$40", note: "Events begin at 5 PM." },
  { name: "Saturday", price: "$50", note: "8 AM to 4 AM." },
  { name: "Sunday", price: "$40", note: "Through 6 PM, raffle drawing at 4." },
  { name: "Kids Weekend", price: "$20", note: "Ages 6–12, all three days." },
];

const vip = [
  "3-day admission",
  "Up to 2 kids weekend passes",
  "Coffee, donuts, and a chill-out space",
  "GCJ T-shirt",
  "Early access to event tickets",
  "Swag bag: dice, stickers, games, and more",
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-start">

        <div>
          <h2 className="section-title mb-6">Badges</h2>
          <p className="text-[var(--brand-text)] leading-relaxed max-w-prose mb-8">
            Badges are sold through AfterGame.
          </p>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-12 px-7 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-display text-sm tracking-wider transition-colors"
          >
            BUY A BADGE
          </a>
          <p className="mt-6 text-sm text-[var(--brand-muted)] max-w-prose">
            Purchases go through AfterGame. By buying you agree to the{" "}
            <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary-text)] underline underline-offset-2">
              terms and conditions
            </a>
            .
          </p>
        </div>

        <div className="space-y-8">
          {/* Price list */}
          <ul className="border-t border-[var(--brand-border)]">
            {badges.map((b) => (
              <li
                key={b.name}
                className={`grid grid-cols-[1fr_auto] items-baseline gap-x-4 py-4 border-b border-[var(--brand-border)] ${
                  b.featured ? "bg-[var(--brand-surface)] -mx-4 px-4 border border-[var(--brand-primary)]" : ""
                }`}
              >
                <div>
                  <p className="text-lg font-semibold text-[var(--brand-heading)]">{b.name}</p>
                  <p className="text-sm text-[var(--brand-muted)]">{b.note}</p>
                </div>
                <Flap text={b.price} size="lg" />
              </li>
            ))}
          </ul>

          {/* VIP */}
          <div className="badge-card badge-card--hot p-6">
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <h3 className="text-lg font-semibold text-[var(--brand-heading)]">VIP Badge</h3>
              <Flap text="$145" size="lg" />
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-[var(--brand-text)]">
              {vip.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
