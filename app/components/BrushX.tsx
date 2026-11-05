/**
 * The pink brush-stroke X from the GCJ poster and business card. Two
 * chunky strokes with a displacement filter for the dry-brush edge.
 * Decorative, so hidden from assistive tech.
 */
export default function BrushX({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="brush-rough" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.028 0.09" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter="url(#brush-rough)" fill="var(--gcj-logo-pink, #ec1d7f)">
        <path d="M34 70 L108 38 L372 322 L296 366 Z" />
        <path d="M352 52 L388 112 L92 352 L40 300 Z" />
      </g>
    </svg>
  );
}
