import Image from "next/image";

const photos = {
  exterior: {
    src: "/images/raffle/ravenloft-exterior.jpg",
    w: 1275,
    h: 1700,
    alt: "The 3D-printed Castle Ravenloft standing in a room, a gatehouse and tall towers that rise higher than the people standing around it.",
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

export default function RavenloftGallery() {
  return (
    <section id="ravenloft" className="py-20 sm:py-24 px-4 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-6">Castle Ravenloft</h2>
        <p className="max-w-2xl text-[var(--brand-text)] leading-relaxed mb-10">
          A giant 3D-printed Castle Ravenloft, built from modular pieces: a gatehouse, tall towers, and an interior of
          halls and rooms that open up for play. It is taller than most of the people standing next to it, and you can
          see it in person at the Ravenloft table near registration.
        </p>

        <div className="grid gap-4 lg:grid-cols-[5fr_7fr]">
          <Photo p={photos.exterior} sizes="(min-width: 1024px) 480px, 100vw" className="lg:row-span-2 aspect-[3/4] lg:aspect-auto" />
          <Photo p={photos.interior} sizes="(min-width: 1024px) 700px, 100vw" className="aspect-[4/3] lg:aspect-[16/9]" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo p={photos.table} sizes="(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
            <Photo p={photos.minis} sizes="(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
