import Image from "next/image";

type Sponsor = { name: string; url: string | null };

const sponsors: { platinum: Sponsor[]; silver: Sponsor[]; supporting: Sponsor[] } = {
  platinum: [
    // { name: "Golden Keep Game Co.", url: "https://www.goldenkeepgameco.com" }, // TODO: pending confirmation
  ],
  silver: [
    { name: "Benji Simmons", url: null },
  ],
  supporting: [
    { name: "Amanda Penix", url: "https://www.facebook.com/share/1E86jVgFs2/" },
    { name: "Anthony Lakas", url: "https://www.derbycomicsandgames.com" },
    { name: "Justin Ishmael", url: "https://www.stellarcardboard.com" },
    { name: "Lyn Redder", url: "https://www.artstation.com/lyneartt" },
    { name: "Chris Beals", url: "https://www.katbatmedia.com" },
  ],
};

type Tier = "primo" | "artist" | undefined;

type Vendor = {
  name: string;
  logo?: string;
  url?: string;
  description?: string;
  tier?: Tier;
};

// Vendors with logos — shown as cards
const vendorsWithLogos: Vendor[] = [
  {
    name: "9th Level Games",
    logo: "/images/vendors/9th-level-games.png",
    url: "https://9thlevel.com",
    description: "Fun and easy Tabletop RPGs with fast simple rules — great for new players and veterans alike.",
  },
  {
    name: "Archania's Workshop",
    logo: "/images/vendors/archania-workshop.png",
    url: "https://archaniaworkshop.com",
    description: "Precision-built custom gaming tables, cabinets, and tabletop RPG accessories.",
    tier: "primo",
  },
  {
    name: "Creature Curation",
    logo: "/images/vendors/creature-curation.png",
    url: "https://creaturecuration.com",
    description: "Creature Curation makes all the weird stuff we would have wanted as kids.",
    tier: "primo",
  },
  {
    name: "Fairy Special Creations",
    logo: "/images/vendors/fairy-special-creations.png",
    url: "https://www.facebook.com/fairyspecialcreations",
    description: "Hand-painted, lasercut goods for tabletop gaming — for 'fairy' special people.",
  },
  {
    name: "Gnarled Barnacle",
    logo: "/images/vendors/gnarled-barnacle.png",
    url: "https://gnarledbarnacle.com",
    description: "Eclectic electric art crafted from upcycled and sustainable materials.",
    tier: "primo",
  },
  {
    name: "Lyneartt",
    logo: "/images/vendors/lyneartt.png",
    url: "https://www.artstation.com/lyneartt",
    description: "Bold lines and comic-style character art for indie tabletop game creators.",
    tier: "artist",
  },
  {
    name: "Mischief Loot",
    logo: "/images/vendors/mischief-loot.jpeg",
    url: "https://www.mischiefloot.com",
    description: "Handmade dice bags, candles, and soaps.",
    tier: "primo",
  },
  {
    name: "ninety6proof",
    logo: "/images/vendors/ninety6proof.png",
    url: "https://www.instagram.com/ninety6proof/",
    description: "Custom hand-painted miniatures, terrain, and tabletop accessories — one-of-a-kind commissions.",
    tier: "primo",
  },
  {
    name: "Wet Ink Games",
    logo: "/images/vendors/wet-ink-games.png",
    url: "https://www.wetinkgames.com",
    description: "",
  },
];

// Remaining vendors — shown as name chips
const vendorNames: { name: string; url?: string; tier?: Tier }[] = [
  { name: "A Critical Hit",             url: "https://acriticalhit.net" },
  { name: "Bloat Games",                tier: "primo" },
  { name: "Death By Dice",              url: "https://www.facebook.com/deathbydice666", tier: "primo" },
  { name: "Derby Comics & Games",       url: "https://www.derbycomicsandgames.com",     tier: "primo" },
  { name: "Dirty Woods",                url: "https://dirtywoods.net",                  tier: "primo" },
  { name: "DMing the World Press" },
  { name: "Eagle Gryphon Games",        url: "https://www.eagle-gryphon.com" },
  { name: "Golden Keep Game Co.",       url: "https://www.goldenkeepgameco.com",        tier: "primo" },
  { name: "Grey Loft Crafting Company",                                                 tier: "primo" },
  { name: "Infinite Horizon",           url: "https://infinitehorizonart.com",          tier: "artist" },
  { name: "KatBat Media",               url: "https://www.katbatmedia.com",             tier: "primo" },
  { name: "Level Up Sabers" },
  { name: "Lurker's Loot",                                                              tier: "primo" },
  { name: "Minx Manx Monks",                                                            tier: "primo" },
  { name: "Stellar Cardboard",          url: "https://www.stellarcardboard.com",        tier: "primo" },
  { name: "The Art of Jessy" },
  { name: "Wobbly Stitches",            url: "https://wobblystitches.etsy.com" },
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

          {/* Logo cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {vendorsWithLogos.map((vendor) => (
              <a
                key={vendor.name}
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] overflow-hidden hover:border-[var(--brand-primary)] transition-colors"
              >
                {/* Tier badge */}
                {vendor.tier && (
                  <span className={`absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-xs font-semibold ${
                    vendor.tier === "artist"
                      ? "bg-[var(--brand-primary)] text-white"
                      : "bg-[var(--brand-secondary)] text-white"
                  }`}>
                    {vendor.tier === "artist" ? "Artist Alley" : "Primo"}
                  </span>
                )}
                {/* Logo area — white bg so logos read cleanly */}
                <div className="bg-white flex items-center justify-center p-4 h-32">
                  <Image
                    src={vendor.logo!}
                    alt={vendor.name}
                    width={160}
                    height={96}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-[var(--brand-heading)] mb-1">{vendor.name}</p>
                  {vendor.description && (
                    <p className="text-xs text-[var(--brand-muted)] leading-relaxed">{vendor.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Name chips for remaining vendors */}
          <div className="flex flex-wrap gap-2 mb-10">
            {vendorNames.map((vendor) => {
              const badge = vendor.tier === "artist"
                ? <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-semibold">Artist</span>
                : vendor.tier === "primo"
                ? <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-[var(--brand-secondary)] text-white text-xs font-semibold">Primo</span>
                : null;

              const className = "inline-flex items-center px-3 py-1.5 rounded-[var(--radius-card)] border bg-[var(--brand-bg)] text-sm " +
                (vendor.url ? "border-[var(--brand-border)] text-[var(--brand-text)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors" : "border-[var(--brand-border)] text-[var(--brand-text)]");

              return vendor.url ? (
                <a key={vendor.name} href={vendor.url} target="_blank" rel="noopener noreferrer" className={className}>
                  {vendor.name}{badge}
                </a>
              ) : (
                <span key={vendor.name} className={className}>
                  {vendor.name}{badge}
                </span>
              );
            })}
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
