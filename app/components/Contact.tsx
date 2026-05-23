// TODO: wire up a real form handler (Netlify Forms is the easiest option here — just add
//       data-netlify="true" to the <form> element once deployed, no backend needed).
//       Alternatively, a Tally embed or mailto fallback works fine for launch.

// TODO: replace with real social links
const socials = [
  { label: "Facebook",  href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "ig" },
  { label: "Twitter/X", href: "#", icon: "x" },
  { label: "Discord",   href: "#", icon: "d" },
];

// TODO: replace with real inquiry email
const INQUIRY_EMAIL = "info@gameconjunction.com";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* ── CONTACT INFO + SOCIALS ───────────── */}
          <div>
            <p className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-heading)] mb-6">
              Questions?
            </h2>
            <p className="text-[var(--brand-muted)] mb-6 leading-relaxed">
              {/* TODO: flesh out contact copy */}
              Have a question about tickets, accessibility, scheduling, or anything else?
              Drop us a line and we'll get back to you.
            </p>

            <a
              href={`mailto:${INQUIRY_EMAIL}`}
              className="inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline font-medium mb-10"
            >
              {INQUIRY_EMAIL}
            </a>

            {/* Socials */}
            <div>
              <p className="text-xs text-[var(--brand-muted)] uppercase tracking-wider mb-4">
                Follow Along
              </p>
              <div className="flex gap-3 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] flex items-center justify-center text-[var(--brand-muted)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-heading)] transition-colors text-xs font-bold uppercase"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              {/* TODO: replace icon letters with real SVG icons (lucide-react or heroicons) */}
            </div>
          </div>

          {/* ── INQUIRY FORM ─────────────────────── */}
          {/* NOTE: add data-netlify="true" and name="contact" to <form> once deployed to Netlify */}
          <form
            name="contact"
            method="POST"
            className="space-y-4"
            /* data-netlify="true" — uncomment after first Netlify deploy */
          >
            {/* Required hidden field for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--brand-text)] mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-[var(--radius-btn)] bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-text)] placeholder:text-[var(--brand-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--brand-text)] mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-[var(--radius-btn)] bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-text)] placeholder:text-[var(--brand-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--brand-text)] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-[var(--radius-btn)] bg-[var(--brand-surface)] border border-[var(--brand-border)] text-[var(--brand-text)] placeholder:text-[var(--brand-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
