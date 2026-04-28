"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Phone, Star } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-charcoal text-warm-white flex flex-col">
      <div className="h-20 px-6 flex items-center justify-between border-b border-warm-white/10">
        <Image
          src="/logo.png"
          alt="Dave The Handy Guy"
          width={1906}
          height={825}
          className="h-10 w-auto"
        />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="p-2 -mr-2 text-warm-white"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="px-6 mt-10 flex flex-col">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-3xl font-serif border-b border-warm-white/10 py-5 hover:text-rust transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="px-6 mt-auto pb-12">
        <p className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-rust font-semibold">
          <Star size={11} className="fill-star text-star" strokeWidth={1.5} />
          Veteran Owned
        </p>
        <a
          href={BUSINESS.phoneLink}
          onClick={onClose}
          className="mt-4 inline-flex items-center gap-3 text-2xl font-serif text-warm-white"
        >
          <Phone size={22} className="text-rust" />
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
