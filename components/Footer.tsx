import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-slate-light">
            © 2026 {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-light mt-1">
            Veteran-Owned Business · Boone, NC
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-light hover:text-warm-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={BUSINESS.nexalyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-light hover:text-warm-white transition-colors"
        >
          Website by Nexaly Digital
        </a>
      </div>
    </footer>
  );
}
