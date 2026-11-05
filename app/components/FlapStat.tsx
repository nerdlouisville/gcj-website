import Flap from "./Flap";

/** A flip-tile value with a plain-text label under it. */
export default function FlapStat({
  text,
  label,
  size = "md",
  note,
}: {
  text: string;
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  note?: string;
}) {
  return (
    <div>
      <Flap text={text} size={size} />
      <p className="mt-3 text-sm uppercase tracking-widest text-[var(--brand-text-dim)]">{label}</p>
      {note && <p className="mt-1 text-sm text-[var(--brand-muted)]">{note}</p>}
    </div>
  );
}
