import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dave The Handy Guy | Handyman Services in Boone, Blowing Rock & Banner Elk NC",
  description:
    "Veteran-owned handyman service in Boone, NC. Rated 4.8 stars with 100+ reviews. Door repairs, TV mounting, plumbing, deck staining, and more. Call (828) 616-0050 for a free estimate.",
  openGraph: {
    title: "Dave The Handy Guy | Handyman Services in Boone NC",
    description:
      "Veteran-owned handyman. 4.8 stars, 100+ reviews. Boone, Blowing Rock, Banner Elk. Call (828) 616-0050.",
    url: "https://davethehandyguy.com",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Dave The Handy Guy",
  image: "",
  telephone: "(828) 616-0050",
  address: {
    "@type": "PostalAddress",
    streetAddress: "125 Manor Rdg",
    addressLocality: "Boone",
    addressRegion: "NC",
    postalCode: "28607",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "100",
  },
  areaServed: ["Boone, NC", "Blowing Rock, NC", "Banner Elk, NC", "Linville, NC"],
  openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-17:00"],
  url: "https://davethehandyguy.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen pb-16 lg:pb-0">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
