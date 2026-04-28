import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StarRating from "./StarRating";
import { REVIEWS, BUSINESS } from "@/lib/constants";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-warm-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-rust uppercase tracking-widest text-sm font-semibold">
              What Homeowners Say
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif font-normal text-charcoal text-[1.75rem] sm:text-4xl lg:text-[2.25rem] leading-tight">
              What Folks Are Saying
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={32} className="fill-star text-star" strokeWidth={1.5} />
                ))}
              </div>
              <span className="font-serif text-2xl text-charcoal">4.8</span>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={i} delay={(i % 2) * 0.1}>
              <div className="bg-cream rounded-xl p-8 border border-border h-full">
                <StarRating count={review.stars} size={20} />
                <blockquote className="mt-4 italic text-slate leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <a
              href={BUSINESS.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:text-rust-hover underline underline-offset-4 font-semibold"
            >
              Read more reviews on Google →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
