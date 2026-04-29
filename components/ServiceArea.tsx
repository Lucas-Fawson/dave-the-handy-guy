import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-rust uppercase tracking-widest text-sm font-semibold">
              Service Area
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif font-normal text-charcoal text-[1.75rem] sm:text-4xl lg:text-[2.25rem] leading-tight">
              Where I Work
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-slate">
              I'm based out of Boone and I cover most of the High Country.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {SERVICE_AREAS.map((area) =>
              area.primary ? (
                <span
                  key={area.name}
                  className="inline-flex items-center gap-2 bg-rust text-warm-white px-6 py-3 rounded-full font-semibold shadow-[0_8px_20px_-10px_rgba(184,92,56,0.6)]"
                >
                  <MapPin size={16} />
                  {area.name}
                </span>
              ) : (
                <span
                  key={area.name}
                  className="inline-flex items-center gap-2 bg-warm-white text-charcoal border border-border px-5 py-3 rounded-full"
                >
                  <MapPin size={16} className="text-rust" />
                  {area.name}
                </span>
              ),
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-8 text-center text-slate">
            Not sure if I come out your way? Just give me a call and we'll work it out.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
