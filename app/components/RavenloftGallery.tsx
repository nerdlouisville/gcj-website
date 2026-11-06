import Image from "next/image";

const photos = {
  exterior: {
    src: "/images/raffle/ravenloft-exterior.jpg",
    w: 1275,
    h: 1700,
    alt: "The 3D-printed Castle Ravenloft standing in a room, a gatehouse and tall towers, with people standing beside it for scale.",
  },
  interior: {
    src: "/images/raffle/ravenloft-interior.jpg",
    w: 1700,
    h: 1275,
    alt: "Looking down into the opened castle, with stone-textured halls, arched doorways, and floors laid out for play.",
  },
  table: {
    src: "/images/raffle/ravenloft-at-the-table.jpg",
    w: 1700,
    h: 1275,
    alt: "Players around a table leaning over the castle's interior, where miniatures stand in a large hall.",
  },
  minis: {
    src: "/images/raffle/ravenloft-minis.jpg",
    w: 1700,
    h: 1275,
    alt: "A close view from above of painted miniatures standing in a stone hall inside the castle.",
  },
};

function Photo({ p, sizes, className = "" }: { p: (typeof photos)[keyof typeof photos]; sizes: string; className?: string }) {
  return (
    <a
      href={p.src}
      target="_blank"
      rel="noopener noreferrer"
      className={`block overflow-hidden rounded-[var(--radius-card)] bg-[var(--brand-bg-deep)] ${className}`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes={sizes}
        className="w-full h-full object-cover"
      />
      <span className="sr-only"> (opens the full-size photo in a new tab)</span>
    </a>
  );
}

const facts = [
  "The layout is Strahd's castle from Curse of Strahd.",
  "Sized for standard 28mm miniatures.",
  "It comes apart so players can reach each level.",
  "A professional 3D print was quoted at $5,000, and it holds about $1,000 in resin alone.",
  "Packs into eight storage tubs, plus two towers.",
  "This charity auction is authorized by the rights-holder.",
];

const terms = [
  { head: "Bids", body: "Starting bid is $100. Each new bid must be at least $50 higher than the last. Find the bid sheet at the Ravenloft table near registration, and raise your bid any time before bidding closes at 2:00 PM on Sunday." },
  { head: "The winner", body: "Bidding closes at 2:00 PM on Sunday, and we contact the winning bidder by text and email then. If they don't respond in time or decline, the next-highest bidder wins at their own bid amount." },
  { head: "Taking it home", body: "The winner needs to carry away all eight tubs and both towers on Sunday, and multiple trips are fine. We'll help take it apart and load your vehicle. It must be out of the hotel by 6:00 PM." },
];

export default function RavenloftGallery() {
  return (
    <section id="ravenloft" className="py-20 sm:py-24 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-6">Castle Ravenloft silent auction</h2>
        <p className="max-w-2xl text-[var(--brand-text)] leading-relaxed mb-10">
          A giant 3D-printed Castle of the Vampire Lord, the castle from Curse of Strahd, with a gatehouse, tall towers,
          and halls inside that open up for play. It is up for silent auction, benefiting UP for Women and Children.
        </p>

        <div className="grid gap-4 lg:grid-cols-[5fr_7fr]">
          <Photo p={photos.exterior} sizes="(min-width: 1024px) 480px, 100vw" className="lg:row-span-2 aspect-[3/4] lg:aspect-auto" />
          <Photo p={photos.interior} sizes="(min-width: 1024px) 700px, 100vw" className="aspect-[4/3] lg:aspect-[16/9]" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo p={photos.table} sizes="(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
            <Photo p={photos.minis} sizes="(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-[var(--brand-muted)]">About the castle</h3>
            <ul className="border-t border-[var(--brand-border)]">
              {facts.map((f) => (
                <li key={f} className="py-3 border-b border-[var(--brand-border)] text-[var(--brand-text)] leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-[var(--brand-muted)]">How the auction works</h3>
            <dl className="border-t border-[var(--brand-border)]">
              {terms.map((t) => (
                <div key={t.head} className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-[var(--brand-border)]">
                  <dt className="font-display text-sm text-[var(--brand-primary-text)]">{t.head}</dt>
                  <dd className="text-[var(--brand-text)] leading-relaxed">{t.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
