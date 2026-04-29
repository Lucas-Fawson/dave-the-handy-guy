import ScrollReveal from "./ScrollReveal";
import Photo from "./Photo";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32 space-y-6">
              <ScrollReveal>
                <Photo
                  src="/dave-pressure-washing.webp"
                  alt="Dave pressure washing a wooden deck"
                  aspectRatio="aspect-square"
                  imageClass="object-top"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Photo
                  src="/dave-cabin-work.webp"
                  alt="Dave working at a customer's log cabin in the High Country"
                  aspectRatio="aspect-[3/2]"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Photo
                  src="/award.jpg"
                  alt="Watauga Democrat Best of the Best Handyman 2025 award certificate"
                  aspectRatio="aspect-[4/3]"
                  bgClass="bg-warm-white"
                  imageClass="object-contain"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-rust uppercase tracking-widest text-sm font-semibold">
                Meet Your Handyman
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-serif font-normal text-charcoal text-[1.75rem] sm:text-4xl lg:text-[2.25rem] leading-tight">
                You Call Dave, You Get Dave.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-6 space-y-4 text-slate">
                {ABOUT_PARAGRAPHS.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-3xl text-charcoal">
                      {stat.num}
                    </div>
                    <div className="text-sm text-slate-light mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
