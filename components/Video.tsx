import ScrollReveal from "./ScrollReveal";
import { BUSINESS } from "@/lib/constants";

export default function Video() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-rust uppercase tracking-widest text-sm font-semibold">
            See For Yourself
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-serif font-normal text-charcoal text-[1.75rem] sm:text-4xl lg:text-[2.25rem] leading-tight">
            See What You're Getting
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-[0_12px_40px_-12px_rgba(26,31,37,0.25)] border border-border bg-charcoal">
            <iframe
              src={BUSINESS.youtubeEmbed}
              title="A word from Dave"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="mt-4 text-sm text-slate-light">
            This is a quick rundown of me and what I do.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
