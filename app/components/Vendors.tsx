// TODO: add sponsor logos/links once collected; update vendor list as needed

type Sponsor = { name: string; url: string | null };

// SPONSORS — tiered. Add/remove tiers as sponsorship structure evolves.
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
    // TODO: add remaining confirmed sponsors
  ],
};

// VENDORS — confirmed registrations
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
  "Lurker's Lore",
  "Mischief Loot",
  "ninety6proof / Gnarled Barnacle",
  // TODO: verify final vendor list before launch
];

// VENDOR SUBMISSION URLS — TODO: confirm these with the team
const VENDOR_FORM_URL   = "#"; // TODO: replace with Tally vendor form URL
const ARTIST_FORM_URL   = "#"; // TODO: replace with Artist Alley form URL

export default function Vendors() {
  return (
    <section id="vendors" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto">

        {/* ── SPONSORS ───────────────────────────────── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              Thank You
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)]">
              Our Sponsors
            </h2>
          </div>

          {/* Platinum */}
          {sponsors.platinum.length > 0 && (
            <div className="mb-8 text-center">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-4">Platinum</p>
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

          {/* Silver */}
          {sponsors.silver.length > 0 && (
            <div className="mb-8 text-center">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-4">Silver</p>
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

          {/* Supporting */}
          {sponsors.supporting.length > 0 && (
            <div className="text-center">
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-4">Supporting Sponsors</p>
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
            {/* Social proof — vendor hall is sold out, use it */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] text-sm font-medium">
              🎉 Vendor Hall is Sold Out
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {vendors.map((vendor) => (
              <div
                key={vendor}
                className="p-3 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-text)] text-sm text-center"
              >
                {vendor}
              </div>
            ))}
          </div>
        </div>

        {/* ── GET INVOLVED ───────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-center">
            <h3 className="font-semibold text-[var(--brand-heading)] mb-2">Artist Alley</h3>
            <p className="text-sm text-[var(--brand-muted)] mb-4">
              Artist Alley spots are still available. Apply now to secure your table.
            </p>
            <a
              href={ARTIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-[var(--radius-btn)] border border-[var(--brand-border)] text-[var(--brand-text)] text-sm hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
            >
              Apply for Artist Alley
            </a>
          </div>

          <div className="p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-center">
            <h3 className="font-semibold text-[var(--brand-heading)] mb-2">Vendor Waitlist</h3>
            <p className="text-sm text-[var(--brand-muted)] mb-4">
              Vendor tables are sold out, but you can join the waitlist.
            </p>
            <a
              href={VENDOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-[var(--radius-btn)] border border-[var(--brand-border)] text-[var(--brand-text)] text-sm hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"
            >
              Join Vendor Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
