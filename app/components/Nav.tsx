"use client";

import { useState, useEffect } from "react";

// TODO: replace href values with real ticket / vendor submission URLs
const TICKET_URL = "https://aftergame.app/events/2455a998-bf33-4e6f-8b51-72ca1fb6ab5a";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Tickets",  href: "#tickets"  },
  { label: "Vendors",  href: "#vendors"  },
  { label: "Contact",  href: "#contact"  },
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
        {/* Logo / wordmark */}
        <a href="#hero" className="flex items-center gap-2 group">
          {/* TODO: replace this div with <Image> once logo file is dropped in */}
          <div className="w-8 h-8 rounded-md bg-[var(--brand-primary)] flex items-center justify-center text-white font-bold text-sm">
            GCJ
          </div>
          <span className="font-semibold text-[var(--brand-heading)] text-sm tracking-wide hidden sm:block">
            Game Con Junction
          </span>
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
