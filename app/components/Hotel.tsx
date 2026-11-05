import Image from "next/image";

const HOTEL_URL = "https://app.marriott.com/reslink?id=1768408077017&key=GRP&app=resvlink&utm_source=gcj-website&utm_medium=hotel&utm_campaign=gcj2026";

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
            <h2 className="section-title mb-6">Staying over</h2>
            <p className="text-[var(--brand-text)] leading-relaxed max-w-prose mb-4">
              The con is in the Louisville Marriott East, so a room there puts you a short walk
              from the tables, which matters when Friday and Saturday run until 4 AM.
            </p>
            <p className="text-[var(--brand-muted)] leading-relaxed max-w-prose mb-6">
              The $129 group rate ended October 16. The hotel may still have rooms at regular
              rates, so check with them.
            </p>
            <a
              href={HOTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-12 px-7 rounded-[var(--radius-btn)] border-2 border-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)] text-white font-display text-sm tracking-wider transition-colors"
            >
              CHECK ROOMS
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
