"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export default function TallyEmbed({ formId, title }: { formId: string; title: string }) {
  // The script may already be on the page (client-side navigation), so ask Tally to scan again.
  useEffect(() => {
    window.Tally?.loadEmbeds();
  }, []);

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
      {/* White card: the forms use Tally's default (dark text) theme, which is unreadable on the navy page. */}
      <div className="rounded-[var(--radius-card)] bg-white p-4 sm:p-6">
        <iframe
          data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&dynamicHeight=1&formEventsForwarding=1`}
          width="100%"
          height="400"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title={title}
        />
      </div>
    </>
  );
}
