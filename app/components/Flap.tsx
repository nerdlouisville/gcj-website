type Size = "sm" | "md" | "lg" | "xl";

/**
 * Split-flap tiles, borrowed from the JUNCTION logo: black tile, white
 * letter, a hairline across the middle. Spaces become gaps.
 */
export default function Flap({
  text,
  size = "md",
  label,
  className = "",
}: {
  text: string;
  size?: Size;
  label?: string;
  className?: string;
}) {
  return (
    <span role="img" aria-label={label ?? text} className={`flap flap--${size} ${className}`}>
      {[...text].map((ch, i) =>
        ch === " " ? (
          <span key={i} className="flap-gap" aria-hidden="true" />
        ) : (
          <span key={i} className={`flap-tile${/[-–.,:$]/.test(ch) ? " flap-tile--narrow" : ""}`} aria-hidden="true">
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
