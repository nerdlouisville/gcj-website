// TODO: add real T&C page/content, confirm orgs and links

const currentYear = new Date().getFullYear();

const footerLinks = [
  // TODO: add real URL for T&C page or modal
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy",     href: "/privacy" },
  // TODO: add code of conduct once written
  { label: "Code of Conduct",    href: "/conduct" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--brand-border)] bg-[var(--brand-surface)] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--brand-muted)]">

        {/* Org credit */}
        <div className="text-center sm:text-left">
          <p className="font-medium text-[var(--brand-text)]">Game Con Junction {currentYear}</p>
          <p>
            Produced by{" "}
            <a
              href="https://nerdlouisville.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-heading)] transition-colors"
            >
              Nerd Louisville
            </a>
            {" "}+{" "}
            <a
              href="https://www.dukesofhighland.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-heading)] transition-colors"
            >
              Dukes of Highland
            </a>
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-[var(--brand-heading)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
