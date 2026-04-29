import {
  Phone,
  DoorOpen,
  Monitor,
  Fan,
  Armchair,
  Droplets,
  Paintbrush,
  Wrench,
  Zap,
  LayoutGrid,
  Palette,
  SlidersHorizontal,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Photo from "./Photo";
import { SERVICES, BUSINESS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  DoorOpen,
  Monitor,
  Fan,
  Armchair,
  Droplets,
  Paintbrush,
  Wrench,
  Zap,
  LayoutGrid,
  Palette,
  SlidersHorizontal,
  Hammer,
};

export default function Services() {
  return (
    <section id="services" className="bg-warm-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-rust uppercase tracking-widest text-sm font-semibold">
              What I Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif font-normal text-charcoal text-[1.75rem] sm:text-4xl lg:text-[2.25rem] leading-tight">
              Here's What I Can Help With
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-slate">
              I don't do major remodels or new construction. But if something in your house needs fixing, installing, or maintaining, there's a pretty good chance I'm your guy.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Wrench;
            return (
              <ScrollReveal key={service.name} delay={(i % 3) * 0.1}>
                <div className="bg-cream rounded-xl p-6 border border-border shadow-[0_4px_24px_-8px_rgba(26,31,37,0.1)] h-full transition-shadow duration-300 hover:shadow-[0_12px_32px_-12px_rgba(26,31,37,0.18)]">
                  <Icon size={28} strokeWidth={1.5} className="text-rust" />
                  <h3 className="mt-3 text-xl font-semibold font-serif text-charcoal">
                    {service.name}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollReveal>
            <Photo
              src="/dave-fan-install.webp"
              alt="Dave on a ladder installing a ceiling fan in a cabin"
              aspectRatio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Photo
              src="/dave-ladder.webp"
              alt="Dave on a ladder installing a ceiling light fixture"
              aspectRatio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-slate">
              Don't see what you need on here? Call me anyway, I'll try to help you out!
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="mt-4 inline-flex items-center gap-2 bg-rust hover:bg-rust-hover text-warm-white rounded-lg px-8 py-4 font-semibold transition-colors"
            >
              <Phone size={18} />
              Call Dave
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
