import Image from "next/image";

const covers = [
  { src: "/images/raffle/09-frosthaven.jpg", alt: "Frosthaven", w: 600, h: 600 },
  { src: "/images/raffle/13-daggerheart-core-set.jpg", alt: "Daggerheart Core Set", w: 600, h: 600 },
  { src: "/images/raffle/01-hells-kitchen.jpg", alt: "Unmatched: Hell's Kitchen", w: 466, h: 600 },
  { src: "/images/raffle/05-codenames-pictures.jpg", alt: "Codenames: Pictures", w: 600, h: 600 },
  { src: "/images/raffle/15-one-ring-starter-set.jpg", alt: "The One Ring Starter Set", w: 600, h: 600 },
  { src: "/images/raffle/05-flip-7.jpg", alt: "Flip 7", w: 600, h: 600 },
];

export default function RaffleTeaser() {
  return (
    <section id="raffle" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[var(--brand-primary-text)] text-sm font-semibold uppercase tracking-widest mb-3">
            Charity Raffle
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-[var(--brand-heading)] mb-6 leading-tight">
            Win a Bundle, Help UP for Women and Children
          </h2>
          <div className="space-y-4 text-[var(--brand-text)] leading-relaxed">
            <p>
              23 bundles of donated board games and tabletop RPGs, plus a giant 3D-printed Castle Ravenloft. Tickets are
              $2 each, and every $10 you spend earns a free one. The drawing is Sunday, Nov. 8 at 4 PM.
            </p>
            <p>All raffle proceeds go to UP for Women and Children, a day center for women and children experiencing homelessness in Louisville.</p>
          </div>
          <a
            href="/raffle"
            className="mt-8 inline-flex items-center min-h-11 px-6 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-sm font-semibold transition-colors"
          >
            See the bundles
          </a>
        </div>

        <ul className="grid grid-cols-3 gap-3" aria-label="A few of the prizes">
          {covers.map((c) => (
            <li key={c.src} className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] bg-white">
              <Image src={c.src} alt={c.alt} fill sizes="(min-width: 1024px) 180px, 30vw" className="object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
