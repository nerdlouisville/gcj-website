import Image from "next/image";

/**
 * The pink brush-stroke X from the GCJ poster and business card.
 * Decorative, so the alt text is empty. Keeps its square proportions
 * inside its parent, which must be position: relative.
 */
export default function BrushX({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/brush-x.png"
      alt=""
      fill
      sizes="(min-width: 640px) 480px, 100vw"
      priority
      className={`object-contain pointer-events-none select-none ${className}`}
    />
  );
}
