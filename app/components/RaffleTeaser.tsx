import Image from "next/image";
import FlapStat from "./FlapStat";

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
          <h2 className="section-title mb-6">Charity raffle</h2>
          <div className="space-y-4 text-[var(--brand-text)] leading-relaxed max-w-prose">
            <p>
              23 bundles of donated board games and tabletop RPGs. Tickets are $2 each, and every $10 you spend earns a bonus ticket: buy 5,
              get 6. Spend $30 and you have 18. Buy them at the merch table.
            </p>
            <p>
              Drawing is Sunday, Nov. 8 at 4 PM. Everything raised goes to UP for Women and
              Children, a day center in Louisville for women and kids experiencing homelessness.
              Give us your phone number at check-in so we can reach you if you win.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
            <FlapStat text="$2" label="Per ticket" size="md" />
            <FlapStat text="23" label="Bundles" size="md" />
            <FlapStat text="SUN 4 PM" label="Drawing" size="md" />
          </div>
          <a
            href="/raffle"
            className="mt-8 inline-flex items-center min-h-12 px-7 rounded-[var(--radius-btn)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-white font-display text-sm tracking-wider transition-colors"
          >
            SEE THE BUNDLES
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
