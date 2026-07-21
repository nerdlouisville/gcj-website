"use client";

import Script from "next/script";

export default function EmailBanner() {
  return (
    <div className="w-full border-b border-[var(--brand-border)] bg-[var(--brand-surface)] py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[var(--brand-primary)] text-xs font-semibold uppercase tracking-widest mb-1">
          Stay in the Loop
        </p>
        <p className="text-sm text-[var(--brand-muted)] mb-4">
          Get GCJ 2026 updates — schedules, announcements, and more — delivered to your inbox.
        </p>
        <div
          style={{ textAlign: "left" }}
          className="sender-form-field"
          data-sender-form-id="egJoMG"
        />
      </div>
      <Script
        id="sender-js"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (s, e, n, d, er) {
  s['Sender'] = er;
  s[er] = s[er] || function () {
    (s[er].q = s[er].q || []).push(arguments)
  }, s[er].l = 1 * new Date();
  s[er].on = function(event, callback) {
    s[er].listeners = s[er].listeners || {};
    (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
  };
  var a = e.createElement(n),
      m = e.getElementsByTagName(n)[0];
  a.async = 1;
  a.src = 'https://cdn.sender.net/accounts_resources/universal.js';
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
sender('f14efec0093187')`,
        }}
      />
    </div>
  );
}
