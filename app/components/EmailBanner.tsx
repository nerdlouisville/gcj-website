"use client";

import { useEffect, useState } from "react";

export default function EmailBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const w = window as any;

    // Mirror Sender's official embed exactly
    w["Sender"] = "sender";
    if (!w.sender) {
      w.sender = function () {
        // eslint-disable-next-line prefer-rest-params
        (w.sender.q = w.sender.q || []).push(arguments);
      };
      w.sender.l = 1 * +new Date();
      w.sender.on = function (event: string, cb: () => void) {
        w.sender.listeners = w.sender.listeners || {};
        (w.sender.listeners[event] = w.sender.listeners[event] || []).push(cb);
      };
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.sender.net/accounts_resources/universal.js";
    const first = document.getElementsByTagName("script")[0];
    first.parentNode!.insertBefore(script, first);

    // Queue account ID: SDK replays this on load
    w.sender("f14efec0093187");
  }, []);

  return (
    <section id="newsletter" className="px-4 py-16 sm:py-20 bg-[var(--brand-surface)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-20 items-center">
        <div>
          <h2 className="section-title mb-5">Stay in the loop</h2>
          <p className="text-[var(--brand-text)] leading-relaxed max-w-prose">
            Schedule changes and announcements go out by email.
          </p>
        </div>
        {/* The Sender form is a white iframe we can't style from here, so it is
            inverted to sit on the dark page. Better long-term fix: set the
            form's colors in Sender's dashboard, then delete the filter. */}
        <div className="newsletter-frame min-h-[480px]">
          {mounted && <div className="sender-form-field" data-sender-form-id="egJoMG" />}
        </div>
      </div>
    </section>
  );
}
