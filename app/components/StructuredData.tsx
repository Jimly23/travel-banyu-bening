export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",

    name: "BANYU BENING TRANS",

    image: "https://daffatravel.com/logo.png",

    url: "https://daffatravel.com",

    telephone: "+6282225172339",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Raya Sirampog, Mandala, Mendala",
      addressLocality: "Brebes",
      addressRegion: "Jawa Tengah",
      postalCode: "52272",
      addressCountry: "ID",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "",
      longitude: "",
    },

    openingHours: "Mo-Su 06:00-19:00",

    priceRange: "$$",

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "8",
    },

    sameAs: [
      "https://facebook.com/",
      "https://instagram.com/",
      "https://tiktok.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}