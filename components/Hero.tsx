import { Phone, Star, Trophy, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="bg-warm-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-rust uppercase tracking-widest text-sm font-semibold mb-4">
                Veteran-Owned · Boone, NC
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-serif font-normal text-charcoal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight">
                On Time. Done Right. And I Actually Return Phone Calls.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-slate text-[1.0625rem] sm:text-lg max-w-xl leading-relaxed">
                I'm Dave, a one-man handyman service here in the High Country. You call me, I show up, I fix it. I've been doing this for years and I still get excited about checking things off someone's to-do list. If I tell you I'll be there Tuesday at 10, I'll be there Tuesday at 10.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-rust hover:bg-rust-hover text-warm-white rounded-lg px-8 py-4 font-semibold transition-colors"
                >
                  Get a Free Estimate
                </a>
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white rounded-lg px-8 py-4 font-semibold transition-colors"
                >
                  <Phone size={18} />
                  Call {BUSINESS.phone}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate">
                <span className="inline-flex items-center gap-2">
                  <Star size={16} className="fill-star text-star" strokeWidth={1.5} />
                  4.8 Stars · 100+ Google Reviews
                </span>
                <span className="inline-flex items-center gap-2">
                  <Trophy size={16} className="text-rust" />
                  Voted Best Handyman - Watauga Democrat
                </span>
                <span className="inline-flex items-center gap-2">
                  <Shield size={16} className="text-rust" />
                  Veteran Owned &amp; Operated
                </span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(26,31,37,0.25)]">
              <img
                src="/dave-portrait.webp"
                alt="Dave, owner of Dave The Handy Guy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
