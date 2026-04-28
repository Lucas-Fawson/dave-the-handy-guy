"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-16 bg-warm-white/85 backdrop-blur-md border-b border-border"
            : "h-20 bg-warm-white border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#top" className="flex items-center" aria-label="Dave The Handy Guy — home">
            <Image
              src="/logo.png"
              alt="Dave The Handy Guy"
              width={1906}
              height={825}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal hover:text-rust transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 bg-rust hover:bg-rust-hover text-warm-white rounded-lg px-5 py-2.5 font-semibold transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden text-charcoal p-2 -mr-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
