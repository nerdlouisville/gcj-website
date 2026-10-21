import Image from "next/image";

const steps = [
  {
    title: "Get your tickets",
    body: "Tickets are $2 each. Buy them at the merch table or at the UP for Women and Children table next to the raffle display upstairs.",
  },
  {
    title: "Pick your bundles",
    body: "Look over the bundles on display, then drop tickets in the pot for the ones you want. Write your badge number on the back of each ticket so we can find you.",
  },
  {
    title: "Come to the drawing",
    body: "Sunday at 4 PM.",
  },
  {
    title: "Collect your prize",
    body: "If your ticket is drawn, we look you up by badge number and contact you once. If we can't reach you, another ticket is drawn. Prizes are picked up at the convention. We can't ship.",
  },
];

const prices = [
  { spend: "$10", get: "6 tickets" },
  { spend: "$20", get: "12 tickets" },
  { spend: "$50", get: "30 tickets" },
];

function Hex({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative flex h-[46px] w-10 shrink-0 items-center justify-center font-display text-sm text-[var(--brand-primary-text)]">
      <svg width="40" height="46" viewBox="0 0 120 138" className="absolute inset-0" aria-hidden="true">
        <path
          d="M60 3 L115 34.5 V103.5 L60 135 L5 103.5 V34.5 Z"
          style={{ fill: "var(--brand-bg)", stroke: "var(--brand-secondary)" }}
          strokeWidth="3"
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

export default function RaffleInfo() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl text-[var(--brand-heading)] mb-10">How the raffle works</h2>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <ol className="border-b border-[var(--brand-border)]">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-t border-[var(--brand-border)]">
                <Hex>{i + 1}</Hex>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--brand-heading)] mb-1">{s.title}</h3>
                  <p className="text-[var(--brand-text)] leading-relaxed max-w-lg">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside
            aria-labelledby="ticket-prices"
            className="p-6 rounded-[var(--radius-card)] border border-[var(--brand-primary)] bg-[var(--brand-surface)]"
            style={{ boxShadow: "0 0 24px rgba(232, 25, 122, 0.15)" }}
          >
            <h3 id="ticket-prices" className="text-xl font-semibold text-[var(--brand-heading)]">Ticket prices</h3>
            <p className="font-display text-4xl text-[var(--brand-primary-text)] mt-1 mb-5">
              $2 <span className="text-base text-[var(--brand-text)]">per ticket</span>
            </p>
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs uppercase tracking-widest text-[var(--brand-text-dim)]">
                  <th scope="col" className="pb-3 font-normal">You spend</th>
                  <th scope="col" className="pb-3 font-normal text-right">You get</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((p) => (
                  <tr key={p.spend} className="border-t border-[var(--brand-border)]">
                    <td className="py-3 text-[var(--brand-text)]">{p.spend}</td>
                    <td className="py-3 text-right font-bold text-[var(--brand-heading)]">{p.get}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 pt-4 border-t border-[var(--brand-border)] text-sm text-[var(--brand-text)]">
              Every $10 you spend earns one free ticket.
            </p>
          </aside>
        </div>

        {/* Beneficiary */}
        <div className="mt-16 grid md:grid-cols-[15rem_1fr] gap-8 items-center p-6 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <a
            href="https://www.uplouisville.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="UP for Women and Children website"
            className="block p-3 rounded-[var(--radius-card)] bg-white max-w-[15rem]"
          >
            <Image
              src="/images/raffle/up-logo.jpg"
              alt="UP for Women and Children logo"
              width={640}
              height={538}
              className="w-full h-auto"
            />
          </a>
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-[var(--brand-heading)] mb-3 leading-snug">
              Your tickets help UP for Women and Children
            </h3>
            <p className="text-[var(--brand-text)] leading-relaxed max-w-2xl mb-4">
              Uniting Partners for Women and Children runs a drop-in day center in downtown Louisville for women and
              children experiencing homelessness. Guests get a safe space, showers, a phone, a mailing address, help
              replacing IDs and other vital documents, and a case manager who connects them with housing and community
              resources. All raffle proceeds go to UP.
            </p>
            <a
              href="https://www.uplouisville.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-11 px-5 rounded-[var(--radius-btn)] border border-[var(--brand-secondary-text)] text-[var(--brand-text)] hover:border-[var(--brand-primary-text)] hover:text-[var(--brand-heading)] text-sm font-semibold transition-colors"
            >
              Visit uplouisville.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
