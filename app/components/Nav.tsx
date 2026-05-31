"use client";

import { useState, useEffect } from "react";

const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a?utm_source=gcj-website&utm_medium=tickets&utm_campaign=gcj2026";

const navLinks = [
  { label: "About",   href: "#about"   },
  { label: "Tickets", href: "#tickets" },
  { label: "Events",  href: "#events"  },
  { label: "Vendors", href: "#vendors" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-bg)]/95 backdrop-blur-sm border-b border-[var(--brand-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* GCJ26 wordmark as home anchor */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-widest text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          GCJ26
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--brand-muted)] hover:text-[var(--brand-heading)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white text-sm font-medium transition-colors"
          >
            Get Tickets
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--brand-muted)] hover:text-[var(--brand-heading)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--brand-surface)] border-b border-[var(--brand-border)] px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[var(--brand-text)] hover:text-[var(--brand-heading)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--brand-primary)] text-white text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Get Tickets
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
