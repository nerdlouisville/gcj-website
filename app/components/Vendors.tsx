// TODO: add logo images for sponsors once collected via the logo submission form

type Sponsor = { name: string; url: string | null };

const sponsors: { platinum: Sponsor[]; silver: Sponsor[]; supporting: Sponsor[] } = {
  platinum: [
    // { name: "Golden Keep Game Co.", url: "https://..." }, // TODO: pending confirmation
  ],
  silver: [
    { name: "Benji Simmons", url: null },
  ],
  supporting: [
    { name: "Amanda Penix", url: null },
    { name: "Anthony Lakas", url: null },
    { name: "Justin Ishmael", url: null },
    { name: "Lyn Redder", url: null },
    { name: "Chris Beals", url: null },
  ],
};

const vendors = [
  "A Critical Hit",
  "Archania's Workshop",
  "KatBat Media",
  "Grey Loft Crafting Company",
  "Derby Comics & Games",
  "Lyneartt",
  "Wobbly Stitches",
  "Stellar Cardboard",
  "Eagle Gryphon Games",
  "Infinite Horizon",
  "Creature Curation",
  "Dirty Woods",
  "Death By Dice",
  "9th Level Games",
  "The Art of Jessy",
  "Wet Ink Games",
  "Bloat Games",
  "Lurker's Loot",
  "Mischief Loot",
  "ninety6proof / Gnarled Barnacle",
];

const VENDOR_FORM_URL = "https://tally.so/r/lblxBV";
const SPONSOR_EMAIL   = "devin@gameconjunction.com";

const sponsorTiers = [
  { name: "Title Sponsor",      price: "$5,000", note: "Exclusive — 1 available",         highlight: true  },
  { name: "Platinum Sponsor",   price: "$2,000", note: "2 available",                     highlight: false },
  { name: "Lanyard Sponsor",    price: "$750",   note: null,                              highlight: false },
  { name: "Gold Sponsor",       price: "$1,000", note: null,                              highlight: false },
  { name: "Game Champion",      price: "$500–$750", note: null,                           highlight: false },
  { name: "Badge Sponsor",      price: "$500",   note: null,                              highlight: false },
  { name: "Wi-Fi Sponsor",      price: "$300",   note: null,                              highlight: false },
  { name: "Community Partner",  price: "$300",   note: "Local businesses — 10 available", highlight: false },
];

export default function Vendors() {
  return (
    <section id="vendors" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto">

        {/* ── SPONSORS ───────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              Thank You
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-3">
              Our Sponsors
            </h2>
            <p className="text-[var(--brand-muted)] max-w-xl mx-auto text-sm">
              GCJ wouldn't happen without the support of these folks.
            </p>
          </div>

          {/* Confirmed sponsors */}
          {sponsors.platinum.length > 0 && (
            <div className="mb-8 text-center">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Platinum</p>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.platinum.map((s) =>
                  s.url ? (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                      className="px-6 py-3 rounded-[var(--radius-card)] border-2 border-[var(--brand-secondary)] bg-[var(--brand-bg)] text-[var(--brand-heading)] font-semibold hover:border-[var(--brand-primary)] transition-colors">
                      {s.name}
                    </a>
                  ) : (
                    <span key={s.name}
                      className="px-6 py-3 rounded-[var(--radius-card)] border-2 border-[var(--brand-secondary)] bg-[var(--brand-bg)] text-[var(--brand-heading)] font-semibold">
                      {s.name}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {sponsors.silver.length > 0 && (
            <div className="mb-8 text-center">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Silver</p>
              <div className="flex flex-wrap justify-center gap-3">
                {sponsors.silver.map((s) => (
                  <span key={s.name}
                    className="px-5 py-2 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-text)] text-sm">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {sponsors.supporting.length > 0 && (
            <div className="mb-10 text-center">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Supporting Sponsors</p>
              <div className="flex flex-wrap justify-center gap-2">
                {sponsors.supporting.map((s) => (
                  <span key={s.name}
                    className="px-4 py-1.5 rounded-full border border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-muted)] text-xs">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Become a sponsor CTA */}
          <div className="max-w-2xl mx-auto p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[var(--brand-heading)] mb-1">Interested in sponsoring?</h3>
                <p className="text-sm text-[var(--brand-muted)]">
                  Multiple tiers available — Title, Platinum, Gold, Community Partner, and more.
                  Reach 800+ passionate tabletop gamers.
                </p>
              </div>
              <a
                href={`mailto:${SPONSOR_EMAIL}`}
                className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Email Devin
              </a>
            </div>
          </div>

          {/* Tier names — no pricing shown publicly */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-3 rounded-[var(--radius-card)] border text-center ${
                  tier.highlight
                    ? "border-[var(--brand-primary)] bg-[var(--brand-primary)]/10"
                    : "border-[var(--brand-border)] bg-[var(--brand-bg)]"
                }`}
              >
                <div className={`text-base font-bold mb-0.5 ${tier.highlight ? "text-[var(--brand-primary)]" : "text-[var(--brand-secondary)]"}`}>
                  {tier.price}
                </div>
                <div className="text-xs font-medium text-[var(--brand-heading)]">{tier.name}</div>
                {tier.note && <div className="text-xs text-[var(--brand-muted)] mt-0.5">{tier.note}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ── VENDORS ────────────────────────────────── */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              Vendor Hall
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-3">
              Meet Our Vendors
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] text-sm font-medium">
              🎉 Vendor Hall is Sold Out
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {vendors.map((vendor) => (
              <div
                key={vendor}
                className="p-3 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-text)] text-sm text-center"
              >
                {vendor}
              </div>
            ))}
          </div>

          {/* Single CTA for vendor + artist alley */}
          <div className="max-w-md mx-auto p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-center">
            <h3 className="font-semibold text-[var(--brand-heading)] mb-2">Want a table?</h3>
            <p className="text-sm text-[var(--brand-muted)] mb-4">
              Artist Alley spots are still open. Vendor tables are sold out but you can join the waitlist.
            </p>
            <a
              href={VENDOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-[var(--radius-btn)] border border-[var(--brand-border)] text-[var(--brand-text)] text-sm font-medium hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
            >
              Apply for Vendor / Artist Alley
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
