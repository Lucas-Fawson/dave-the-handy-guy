"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Star,
  CircleCheck,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { FacebookIcon, YoutubeIcon } from "./BrandIcons";
import { BUSINESS, SERVICE_OPTIONS } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please call (828) 616-0050 instead.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-charcoal placeholder:text-slate-light focus:ring-2 focus:ring-rust focus:border-rust outline-none transition";

  return (
    <section id="contact" className="bg-warm-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-rust uppercase tracking-widest text-sm font-semibold">
                Get In Touch
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-serif font-normal text-charcoal text-[1.75rem] sm:text-4xl lg:text-[2.25rem] leading-tight">
                Let's Get Your Project on the Books
              </h2>
            </ScrollReveal>

            {submitted ? (
              <ScrollReveal delay={0.1}>
                <div className="mt-8 bg-cream border border-border rounded-xl p-8 flex items-start gap-4">
                  <CircleCheck size={28} className="text-rust shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-xl text-charcoal">
                      Thanks! Dave will be in touch shortly.
                    </p>
                    <p className="text-sm text-slate mt-2">
                      Most requests get a response within a few hours during business hours.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal delay={0.2}>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-charcoal mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      opacity: 0,
                      overflow: "hidden",
                    }}
                  />

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-charcoal mb-1"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(828) 555-0000"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-charcoal mb-1"
                    >
                      Email{" "}
                      <span className="font-normal text-slate-light">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="email@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-charcoal mb-1"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-charcoal mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-rust hover:bg-rust-hover text-warm-white rounded-lg py-4 font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Get My Free Estimate"}
                  </button>

                  {error && (
                    <p className="text-sm text-rust text-center" role="alert">
                      {error}
                    </p>
                  )}

                  <p className="text-xs text-slate-light text-center">
                    Most requests get a response from me within a few hours.
                  </p>
                </form>
              </ScrollReveal>
            )}
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="lg:sticky lg:top-32 bg-cream rounded-xl p-8 border border-border">
                <h3 className="text-xl font-serif text-charcoal">
                  Rather Just Call?
                </h3>
                <a
                  href={BUSINESS.phoneLink}
                  className="mt-4 inline-flex items-center gap-3 text-2xl font-serif font-semibold text-charcoal hover:text-rust transition-colors"
                >
                  <Phone size={22} className="text-rust" />
                  {BUSINESS.phone}
                </a>

                <div className="border-t border-border my-6" />

                <h3 className="text-lg font-serif text-charcoal flex items-center gap-2">
                  <Clock size={18} className="text-rust" />
                  Hours
                </h3>
                <ul className="mt-2 text-sm text-slate space-y-1">
                  <li>{BUSINESS.hours.weekdays}</li>
                  <li>{BUSINESS.hours.saturday}</li>
                  <li>{BUSINESS.hours.sunday}</li>
                </ul>

                <div className="border-t border-border my-6" />

                <h3 className="text-lg font-serif text-charcoal flex items-center gap-2">
                  <MapPin size={18} className="text-rust" />
                  Service Area
                </h3>
                <p className="mt-2 text-sm text-slate">
                  Watauga County and Surrounding Areas
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href={BUSINESS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-slate-light hover:text-rust transition-colors"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <a
                    href={BUSINESS.youtubeChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-slate-light hover:text-rust transition-colors"
                  >
                    <YoutubeIcon size={20} />
                  </a>
                  <a
                    href={BUSINESS.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Yelp"
                    className="text-slate-light hover:text-rust transition-colors"
                  >
                    <Star size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
