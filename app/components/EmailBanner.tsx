"use client";

import { useEffect } from "react";

export default function EmailBanner() {
  useEffect(() => {
    const w = window as any;
    const er = "sender";

    // Set up the queue pattern so calls before SDK loads are captured
    w["Sender"] = er;
    w[er] = w[er] || function (...args: any[]) {
      (w[er].q = w[er].q || []).push(args);
    };
    w[er].l = 1 * (new Date() as any);
    w[er].on = function (event: string, callback: () => void) {
      w[er].listeners = w[er].listeners || {};
      (w[er].listeners[event] = w[er].listeners[event] || []).push(callback);
    };

    // Initialize with account ID
    w[er]("f14efec0093187");

    // Load the Sender SDK
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.sender.net/accounts_resources/universal.js";
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      const existing = document.querySelector(
        `script[src="https://cdn.sender.net/accounts_resources/universal.js"]`
      );
      if (existing) existing.remove();
    };
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
        <div
          style={{ textAlign: "left" }}
          className="sender-form-field"
          data-sender-form-id="egJoMG"
        />
      </div>
    </div>
  );
}
