import Image from "next/image";

const HOTEL_URL = "https://app.marriott.com/reslink?id=1768408077017&key=GRP&app=resvlink";

export default function Hotel() {
  return (
    <section id="hotel" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Room photo */}
          <div className="rounded-[var(--radius-card)] overflow-hidden">
            <Image
              src="/images/marriott-room.jpg"
              alt="Louisville Marriott East guest room"
              width={640}
              height={427}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text block */}
          <div>
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              Where to Stay
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-4 leading-tight">
              Louisville Marriott East
            </h2>
            <p className="text-[var(--brand-muted)] leading-relaxed mb-6">
              The official hotel of Game Con Junction is right where the action is.
              Stay on-site and roll out of bed straight into the gaming hall.
            </p>

            {/* Rate callout */}
            <div
              className="p-5 rounded-[var(--radius-card)] border border-[var(--brand-secondary)] bg-[var(--brand-surface)] mb-6"
              style={{ boxShadow: "0 0 20px rgba(153,51,204,0.12)" }}
            >
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-widest mb-1">Group Rate</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[var(--brand-secondary)]">$129</span>
                <span className="text-[var(--brand-muted)] text-sm">/ night</span>
              </div>
              <p className="text-sm text-[var(--brand-muted)] mt-2">
                Available Nov 5–9 · Book by{" "}
                <strong className="text-[var(--brand-heading)]">October 16, 2026</strong>{" "}
                to lock in the group rate.
              </p>
            </div>

            <a
              href={HOTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-[var(--radius-btn)] text-sm font-semibold bg-[var(--brand-secondary)] hover:opacity-90 text-white transition-opacity"
            >
              Book Your Room →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
