"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { bundles, type RaffleItem } from "../raffle/raffleData";

const KIND_ORDER = ["Board / card game", "Party game", "TTRPG", "Accessory", "Starter set", "Special item"];

type Filters = { q: string; kind: string; company: string; series: string };
const EMPTY: Filters = { q: "", kind: "", company: "", series: "" };
type Facet = keyof Filters | null;

function matches(item: RaffleItem, bundleName: string, f: Filters, skip: Facet = null): boolean {
  const term = f.q.trim().toLowerCase();
  const haystack = [item.title, bundleName, item.company, ...item.series, ...item.kinds].join(" ").toLowerCase();
  return (
    (!term || haystack.includes(term)) &&
    (skip === "kind" || !f.kind || item.kinds.includes(f.kind)) &&
    (skip === "company" || !f.company || item.company === f.company) &&
    (skip === "series" || !f.series || item.series.includes(f.series))
  );
}

function Hex({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative flex h-[46px] w-10 shrink-0 items-center justify-center text-sm font-bold text-[var(--brand-secondary-text)]">
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

function Card({ item }: { item: RaffleItem }) {
  const ratio = item.img ? Math.max(0.72, Math.min(item.w / item.h, 1.5)) : 0.8;
  return (
    <li className="flex flex-col gap-3 p-3 rounded-[var(--radius-card)] border border-[var(--brand-border)] bg-[var(--brand-surface)]">
      <div
        className="relative overflow-hidden rounded-[var(--radius-card)] bg-white"
        style={{ aspectRatio: String(ratio) }}
      >
        {item.img ? (
          <Image
            src={item.img}
            alt={`${item.title} cover`}
            fill
            sizes="(min-width: 1280px) 220px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-[var(--brand-bg-deep)]">
            <p className="font-display text-sm text-[var(--brand-text)] leading-snug">Photo coming soon</p>
          </div>
        )}
      </div>
      <p className="font-semibold text-[var(--brand-heading)] leading-snug">{item.title}</p>
      <div className="mt-auto flex flex-wrap gap-1">
        {item.kinds.map((k) => (
          <span key={k} className="px-2 py-1 rounded-full text-xs font-semibold border border-[var(--brand-secondary-text)] text-[var(--brand-text-dim)]">
            {k}
          </span>
        ))}
        {item.company && (
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[var(--brand-primary)] text-white">{item.company}</span>
        )}
        {item.series.map((s) => (
          <span key={s} className="px-2 py-1 rounded-full text-xs font-semibold border border-[var(--brand-secondary)] text-[var(--brand-secondary-text)]">
            {s}
          </span>
        ))}
      </div>
    </li>
  );
}

export default function RaffleBundles() {
  const [f, setF] = useState<Filters>(EMPTY);
  const all = useMemo(() => bundles.flatMap((b) => b.items.map((item) => ({ item, bundle: b.name }))), []);
  const total = all.length;
  const filtered = !!(f.q.trim() || f.kind || f.company || f.series);

  const companies = useMemo(() => Array.from(new Set(all.map((a) => a.item.company).filter(Boolean))).sort((a, b) => a.localeCompare(b)), [all]);
  const series = useMemo(() => Array.from(new Set(all.flatMap((a) => a.item.series))).sort((a, b) => a.localeCompare(b)), [all]);
  const count = (skip: Facet, test: (i: RaffleItem) => boolean) =>
    all.filter((a) => matches(a.item, a.bundle, f, skip) && test(a.item)).length;

  const shown = all.filter((a) => matches(a.item, a.bundle, f)).length;
  const groups = Array.from(new Set(bundles.map((b) => b.group)));
  const visibleCount = (id: string) => {
    const b = bundles.find((x) => x.id === id);
    return b ? b.items.filter((i) => matches(i, b.name, f)).length : 0;
  };

  const set = (patch: Partial<Filters>) => setF((prev) => ({ ...prev, ...patch }));
  const chipClass = "shrink-0 min-h-11 px-4 rounded-[var(--radius-btn)] border text-sm font-semibold transition-colors disabled:opacity-45 disabled:cursor-default";

  return (
    <>
      {/* ── Bundle index ── */}
      <section id="bundles" className="py-16 px-4 bg-[var(--brand-surface)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl text-[var(--brand-heading)] mb-8">All bundles</h2>
          {groups.map((g) => (
            <div key={g} className="mb-8 last:mb-0">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-[var(--brand-heading)]">{g}</h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {bundles.filter((b) => b.group === g).map((b) => {
                  const n = visibleCount(b.id);
                  const lead = b.items.length === 1 ? b.items[0].title : `${b.items[0].title} + ${b.items.length - 1} more`;
                  return (
                    <li key={b.id}>
                      <a
                        href={`#bundle-${b.id}`}
                        aria-disabled={n === 0}
                        tabIndex={n === 0 ? -1 : undefined}
                        onClick={(e) => { if (n === 0) e.preventDefault(); }}
                        className={`flex items-center gap-3 min-h-14 py-2 pl-3 pr-4 rounded-[var(--radius-card)] border bg-[var(--brand-bg)] text-[var(--brand-text)] hover:text-[var(--brand-heading)] transition-colors ${
                          n === 0 ? "border-dashed border-[var(--brand-border)] text-[var(--brand-text-dim)]" : "border-[var(--brand-border)] hover:border-[var(--brand-primary-text)]"
                        }`}
                      >
                        <Hex>{b.n}</Hex>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold leading-snug">{b.name}</span>
                          <span className="block text-xs text-[var(--brand-text-dim)] truncate">{lead}</span>
                        </span>
                        <span className="text-sm text-[var(--brand-muted)]">{b.items.length}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filters ── */}
      <div id="browse" className="scroll-mt-16">
        <div className="px-4 py-4 bg-[var(--brand-surface)] border-t border-[var(--brand-grid)]">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-3 gap-y-2">
            <select
              value={f.company}
              onChange={(e) => set({ company: e.target.value })}
              aria-label="Filter by company"
              className="min-h-11 px-3 max-w-56 rounded-[var(--radius-btn)] border border-[var(--brand-secondary-text)] bg-[var(--brand-surface)] text-sm text-[var(--brand-text)]"
            >
              <option value="">All companies</option>
              {companies.map((c) => {
                const n = count("company", (i) => i.company === c);
                return <option key={c} value={c} disabled={n === 0 && f.company !== c}>{`${c} (${n})`}</option>;
              })}
            </select>
            <select
              value={f.series}
              onChange={(e) => set({ series: e.target.value })}
              aria-label="Filter by series or system"
              className="min-h-11 px-3 max-w-56 rounded-[var(--radius-btn)] border border-[var(--brand-secondary-text)] bg-[var(--brand-surface)] text-sm text-[var(--brand-text)]"
            >
              <option value="">All series and systems</option>
              {series.map((s) => {
                const n = count("series", (i) => i.series.includes(s));
                return <option key={s} value={s} disabled={n === 0 && f.series !== s}>{`${s} (${n})`}</option>;
              })}
            </select>
            <p className="text-sm text-[var(--brand-muted)]" aria-live="polite">
              {!filtered ? `${total} items` : shown === 0 ? "No matches" : `Showing ${shown} of ${total} items`}
              {filtered && (
                <button type="button" onClick={() => setF(EMPTY)} className="ml-3 min-h-11 underline text-[var(--brand-primary-text)] hover:text-[var(--brand-heading)]">
                  Clear filters
                </button>
              )}
            </p>
          </div>
        </div>
        <div className="sticky top-16 z-30 bg-[var(--brand-bg)]/95 backdrop-blur-sm border-y border-[var(--brand-border)]" role="search">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <input
              type="search"
              value={f.q}
              onChange={(e) => set({ q: e.target.value })}
              placeholder="Search games, companies, series"
              aria-label="Search products"
              className="w-full sm:w-80 min-h-11 px-3 rounded-[var(--radius-btn)] border border-[var(--brand-secondary-text)] bg-[var(--brand-surface)] text-sm text-[var(--brand-text)] placeholder:text-[var(--brand-text-dim)]"
            />
            <div role="group" aria-label="Filter by type" className="w-full flex gap-2 overflow-x-auto sm:flex-wrap pb-1">
              {KIND_ORDER.map((k) => {
                const pressed = f.kind === k;
                const n = count("kind", (i) => i.kinds.includes(k));
                return (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={pressed}
                    disabled={n === 0 && !pressed}
                    onClick={() => set({ kind: pressed ? "" : k })}
                    className={`${chipClass} ${
                      pressed
                        ? "bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white"
                        : "border-[var(--brand-secondary-text)] text-[var(--brand-text)] hover:border-[var(--brand-primary-text)] hover:text-[var(--brand-heading)]"
                    }`}
                  >
                    {k}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Bundles ── */}
        <div className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            {bundles.map((b) => {
              const items = b.items.filter((i) => matches(i, b.name, f));
              if (items.length === 0) return null;
              return (
                <section key={b.id} id={`bundle-${b.id}`} aria-labelledby={`h-${b.id}`} className="pt-14 scroll-mt-40">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                      <Hex>{b.n}</Hex>
                      <h2 id={`h-${b.id}`} className="font-display text-lg sm:text-xl text-[var(--brand-heading)] leading-snug">{b.name}</h2>
                    </div>
                    <p className="shrink-0 text-sm text-[var(--brand-muted)]">
                      {filtered ? `${items.length} of ${b.items.length}` : b.items.length} item{b.items.length === 1 ? "" : "s"}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {items.map((item) => (
                      <Card key={item.title} item={item} />
                    ))}
                  </ul>
                </section>
              );
            })}
            {shown === 0 && (
              <div className="mt-14 p-10 text-center rounded-[var(--radius-card)] border border-dashed border-[var(--brand-secondary-text)] text-[var(--brand-text)]">
                <p className="mb-4">No products match those filters.</p>
                <button type="button" onClick={() => setF(EMPTY)} className="min-h-11 px-5 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-sm font-semibold transition-colors">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
