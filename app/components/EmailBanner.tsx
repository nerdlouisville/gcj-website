"use client";

import { useEffect, useState } from "react";

export default function EmailBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const script = document.createElement("script");
    script.src = "https://cdn.sender.net/accounts_resources/universal.js";
    script.async = true;
    script.onload = () => {
      requestAnimationFrame(() => {
        const w = window as any;
        if (typeof w.sender === "function") {
          w.sender("f14efec0093187");
        }
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full border-b border-[var(--brand-border)] bg-[var(--brand-surface)] py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[var(--brand-primary)] text-xs font-semibold uppercase tracking-widest mb-1">
          Stay in the Loop
        </p>
        <p className="text-sm text-[var(--brand-muted)] mb-4">
          Get GCJ 2026 updates, schedules, announcements, and more delivered to your inbox.
        </p>
        {mounted && (
          <div className="sender-form-field" data-sender-form-id="egJoMG" />
        )}
      </div>
    </div>
  );
}
