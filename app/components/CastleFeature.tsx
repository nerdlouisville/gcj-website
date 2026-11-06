import Image from "next/image";
import FlapStat from "./FlapStat";

/** Homepage highlight for the Castle Ravenloft silent auction. Full terms live on /raffle#ravenloft. */
export default function CastleFeature() {
  return (
    <section id="castle" className="py-20 sm:py-28 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-center">

        {/* Photos: one tall, one wide */}
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          <div className="col-span-2 relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--brand-bg-deep)] min-h-[16rem]">
            <Image
              src="/images/raffle/ravenloft-exterior.jpg"
              alt="The 3D-printed Castle Ravenloft standing in a room, a gatehouse and tall towers, with people standing beside it for scale."
              fill
              sizes="(min-width: 1024px) 220px, 40vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-3 grid gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--brand-bg-deep)] aspect-[4/3]">
              <Image
                src="/images/raffle/ravenloft-interior.jpg"
                alt="Looking down into the opened castle, with stone-textured halls, arched doorways, and floors laid out for play."
                fill
                sizes="(min-width: 1024px) 340px, 60vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--brand-bg-deep)] aspect-[16/9]">
              <Image
                src="/images/raffle/ravenloft-minis.jpg"
                alt="A close view from above of painted miniatures standing in a stone hall inside the castle."
                fill
                sizes="(min-width: 1024px) 340px, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <h2 className="section-title mb-6">Castle Ravenloft silent auction</h2>
          <div className="space-y-4 text-[var(--brand-text)] leading-relaxed max-w-prose">
            <p>
              A giant 3D-printed Castle of the Vampire Lord, the castle from Curse of Strahd. It comes apart so you can
              play on every level, and a professional print of it was quoted at $5,000.
            </p>
            <p>
              Bid at the Ravenloft table near registration. The auction benefits UP for Women and Children.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
            <FlapStat text="$100" label="Starting bid" size="md" />
            <FlapStat text="SUN 2 PM" label="Bidding closes" size="md" />
          </div>
          <a
            href="/raffle#ravenloft"
            className="mt-8 inline-flex items-center min-h-12 px-7 rounded-[var(--radius-btn)] border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] text-white font-display text-sm tracking-wider transition-colors"
          >
            SEE THE CASTLE
          </a>
        </div>

      </div>
    </section>
  );
}
