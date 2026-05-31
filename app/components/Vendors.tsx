import Image from "next/image";

const UTM = "?utm_source=gcj-website&utm_medium=sponsor&utm_campaign=gcj2026";

const platinumSponsor = {
  name: "Golden Keep Game Co.",
  logo: "/images/sponsors/golden-keep.png",
  url: `https://goldenkeepgameco.com/${UTM}`,
  blurb: "Golden Keep Game Co. is Louisville's premier tabletop gaming destination, dedicated to providing an accessible, safe, and fun environment for players of all ages and experience levels. As a community-focused business, GKGC strives to build connections through shared gaming experiences, mutual respect, and friendly competition. The store's knowledgeable and passionate staff create a welcoming atmosphere that helps foster a vibrant local gaming community. GKGC offers an extensive selection of tabletop gaming products, including popular trading card games such as Magic: The Gathering and Pokémon, roleplaying games like Dungeons & Dragons and Pathfinder, miniature wargames including Warhammer 40,000, and a wide variety of board games.",
};

const silverSponsors = [
  {
    name: "Archania's Workshop",
    logo: "/images/sponsors/archania-workshop.jpg",
    url: `https://archaniaworkshop.com/${UTM}`,
  },
  {
    name: "Lurking Fears",
    logo: "/images/sponsors/lurking-fears.png",
    url: `https://lurkingfears.com/${UTM}`,
  },
  {
    name: "Nightfall",
    logo: "/images/sponsors/nightfall.png",
    url: `https://nightfallmusic.live/${UTM}`,
  },
];

type SupportingSponsor = { name: string; url: string | null };

const supportingSponsors: SupportingSponsor[] = [
  { name: "Amanda Penix",   url: "https://www.facebook.com/share/1E86jVgFs2/" },
  { name: "Anthony Lakas",  url: "https://www.derbycomicsandgames.com" },
  { name: "Benji Simmons",  url: null },
  { name: "Chris Beals",    url: "https://www.katbatmedia.com" },
  { name: "Justin Ishmael", url: "https://www.stellarcardboard.com" },
  { name: "Lyn Redder",     url: "https://www.artstation.com/lyneartt" },
];

type Tier = "primo" | "artist" | undefined;

type Vendor = {
  name: string;
  logo?: string;
  url?: string;
  description?: string;
  tier?: Tier;
};

const VENDOR_UTM     = "?utm_source=gcj-website&utm_medium=vendor-hall&utm_campaign=gcj2026";
const VENDOR_FORM_URL = `https://tally.so/r/lblxBV${VENDOR_UTM}`;
const SPONSOR_EMAIL   = "devin@gameconjunction.com";

const u = (url: string) => `${url}${VENDOR_UTM}`;

// Logo card vendors — split by tier
const primoLogoVendors: Vendor[] = [
  { name: "Archania's Workshop", logo: "/images/vendors/archania-workshop.png", url: u("https://archaniaworkshop.com"),           description: "Precision-built custom gaming tables, cabinets, and tabletop RPG accessories." },
  { name: "Creature Curation",   logo: "/images/vendors/creature-curation.png", url: u("https://creaturecuration.com"),            description: "Creature Curation makes all the weird stuff we would have wanted as kids." },
  { name: "Gnarled Barnacle",    logo: "/images/vendors/gnarled-barnacle.png",  url: u("https://gnarledbarnacle.com"),             description: "Eclectic electric art crafted from upcycled and sustainable materials." },
  { name: "Mischief Loot",       logo: "/images/vendors/mischief-loot.jpeg",    url: u("https://www.mischiefloot.com"),            description: "Handmade dice bags, candles, and soaps." },
  { name: "ninety6proof",        logo: "/images/vendors/ninety6proof.png",       url: u("https://www.instagram.com/ninety6proof/"), description: "Custom hand-painted miniatures, terrain, and tabletop accessories — one-of-a-kind commissions." },
];

const regularLogoVendors: Vendor[] = [
  { name: "9th Level Games",        logo: "/images/vendors/9th-level-games.png",        url: u("https://9thlevel.com"),                        description: "Fun and easy Tabletop RPGs with fast simple rules — great for new players and veterans alike." },
  { name: "Fairy Special Creations", logo: "/images/vendors/fairy-special-creations.png", url: u("https://www.facebook.com/fairyspecialcreations"), description: "Hand-painted, lasercut goods for tabletop gaming — for 'fairy' special people." },
  { name: "Wet Ink Games",          logo: "/images/vendors/wet-ink-games.png",          url: u("https://www.wetinkgames.com"),                 description: "" },
];

const artistLogoVendors: Vendor[] = [
  { name: "Lyneartt", logo: "/images/vendors/lyneartt.png", url: u("https://www.artstation.com/lyneartt"), description: "Bold lines and comic-style character art for indie tabletop game creators." },
];

// Name chip vendors — split by tier
const primoChipVendors:   { name: string; url?: string }[] = [
  { name: "Bloat Games" },
  { name: "Death By Dice",              url: u("https://www.facebook.com/deathbydice666") },
  { name: "Derby Comics & Games",       url: u("https://www.derbycomicsandgames.com") },
  { name: "Dirty Woods",                url: u("https://dirtywoods.net") },
  { name: "Golden Keep Game Co.",       url: u("https://www.goldenkeepgameco.com") },
  { name: "Grey Loft Crafting Company" },
  { name: "KatBat Media",               url: u("https://www.katbatmedia.com") },
  { name: "Lurker's Loot" },
  { name: "Minx Manx Monks" },
  { name: "Stellar Cardboard",          url: u("https://www.stellarcardboard.com") },
];

const regularChipVendors: { name: string; url?: string }[] = [
  { name: "A Critical Hit",      url: u("https://acriticalhit.net") },
  { name: "DMing the World Press" },
  { name: "Eagle Gryphon Games", url: u("https://www.eagle-gryphon.com") },
  { name: "Level Up Sabers" },
  { name: "The Art of Jessy" },
  { name: "Wobbly Stitches",     url: u("https://wobblystitches.etsy.com") },
];

const artistChipVendors:  { name: string; url?: string }[] = [
  { name: "Infinite Horizon", url: u("https://infinitehorizonart.com") },
];


function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <a href={vendor.url} target="_blank" rel="noopener noreferrer"
      className="flex flex-col rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] overflow-hidden hover:border-[var(--brand-primary)] transition-colors">
      <div className="bg-white flex items-center justify-center p-4 h-32">
        <Image src={vendor.logo!} alt={vendor.name} width={160} height={96} className="max-h-24 w-auto object-contain" />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <p className="text-sm font-semibold text-[var(--brand-heading)] mb-1">{vendor.name}</p>
        {vendor.description && <p className="text-xs text-[var(--brand-muted)] leading-relaxed">{vendor.description}</p>}
      </div>
    </a>
  );
}

function VendorChip({ vendor }: { vendor: { name: string; url?: string } }) {
  const cls = "inline-flex items-center px-3 py-1.5 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-sm text-[var(--brand-text)]";
  return vendor.url ? (
    <a href={vendor.url} target="_blank" rel="noopener noreferrer"
      className={cls + " hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors"}>
      {vendor.name}
    </a>
  ) : (
    <span className={cls}>{vendor.name}</span>
  );
}

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

          {/* Platinum — full width featured */}
          <div className="mb-10">
            <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider text-center mb-4">Platinum Sponsor</p>
            <a
              href={platinumSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-3xl mx-auto p-8 rounded-[var(--radius-card)] border-2 border-[var(--brand-secondary)] bg-[var(--brand-bg)] hover:border-[var(--brand-primary)] transition-colors"
              style={{ boxShadow: "0 0 32px rgba(153,51,204,0.12)" }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="bg-white rounded-[var(--radius-card)] p-4 shrink-0">
                  <Image
                    src={platinumSponsor.logo}
                    alt={platinumSponsor.name}
                    width={160}
                    height={160}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--brand-heading)] mb-2">{platinumSponsor.name}</h3>
                  <p className="text-sm text-[var(--brand-muted)] leading-relaxed">{platinumSponsor.blurb}</p>
                </div>
              </div>
            </a>
          </div>

          {/* Silver — logo cards in a row */}
          <div className="mb-10">
            <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider text-center mb-4">Silver Sponsors</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {silverSponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] hover:border-[var(--brand-secondary)] transition-colors"
                >
                  <div className="bg-white rounded-[var(--radius-card)] p-3 w-full flex items-center justify-center h-20">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={160}
                      height={64}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-[var(--brand-heading)] text-center">{s.name}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Supporting sponsors */}
          <div className="mb-10 text-center">
            <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Supporting Sponsors</p>
            <div className="flex flex-wrap justify-center gap-2">
              {supportingSponsors.map((s) =>
                s.url ? (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full border border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-muted)] text-xs hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors">
                    {s.name}
                  </a>
                ) : (
                  <span key={s.name}
                    className="px-4 py-1.5 rounded-full border border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-muted)] text-xs">
                    {s.name}
                  </span>
                )
              )}
            </div>
          </div>

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

          {/* Primo Vendors */}
          <div className="mb-10">
            <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Primo Vendors</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
              {primoLogoVendors.map((vendor) => <VendorCard key={vendor.name} vendor={vendor} />)}
            </div>
            <div className="flex flex-wrap gap-2">
              {primoChipVendors.map((v) => <VendorChip key={v.name} vendor={v} />)}
            </div>
          </div>

          {/* Vendors */}
          <div className="mb-10">
            <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Vendors</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
              {regularLogoVendors.map((vendor) => <VendorCard key={vendor.name} vendor={vendor} />)}
            </div>
            <div className="flex flex-wrap gap-2">
              {regularChipVendors.map((v) => <VendorChip key={v.name} vendor={v} />)}
            </div>
          </div>

          {/* Artist Alley */}
          <div className="mb-10">
            <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">Artist Alley</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
              {artistLogoVendors.map((vendor) => <VendorCard key={vendor.name} vendor={vendor} />)}
            </div>
            <div className="flex flex-wrap gap-2">
              {artistChipVendors.map((v) => <VendorChip key={v.name} vendor={v} />)}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-md mx-auto p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-bg)] text-center">
            <h3 className="font-semibold text-[var(--brand-heading)] mb-2">Want a table?</h3>
            <p className="text-sm text-[var(--brand-muted)] mb-4">
              Artist Alley spots are still open. Vendor tables are sold out but you can join the waitlist.
            </p>
            <a href={VENDOR_FORM_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-[var(--radius-btn)] border border-[var(--brand-border)] text-[var(--brand-text)] text-sm font-medium hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors">
              Apply for Vendor / Artist Alley
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
