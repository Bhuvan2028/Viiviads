export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.viiviads.com/#organization",
        "name": "VIIVIADS",
        "legalName": "VIIVIADS",
        "url": "https://www.viiviads.com",
        "logo": "https://www.viiviads.com/viiviads-logo.svg",
        "description":
          "VIIVIADS is a mobile-first ad partner helping brands grow through in-app campaigns, with smart targeting, quality traffic and performance you can measure.",
        "foundingDate": "2024",
        "email": "hello@viiviads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mumbai Headquarters",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "401208",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/company/viiviads"
        ],
        "knowsAbout": [
          "Mobile In-App Advertising",
          "Performance Marketing",
          "Cost Per Install (CPI) Campaigns",
          "Cost Per Action (CPA) Campaigns",
          "Cost Per Lead (CPL) Campaigns",
          "Cost Per Sale (CPS) Campaigns",
          "Native Advertising",
          "Programmatic Advertising & DSP",
          "Publisher Traffic Monetization",
          "Ad Fraud Prevention & Brand Safety"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.viiviads.com/#service",
        "name": "VIIVIADS Advertising Services",
        "parentOrganization": {
          "@id": "https://www.viiviads.com/#organization"
        },
        "email": "hello@viiviads.com",
        "areaServed": "Worldwide",
        "priceRange": "$$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.viiviads.com/#website",
        "url": "https://www.viiviads.com",
        "name": "VIIVIADS | Mobile-First Ad Partner",
        "publisher": {
          "@id": "https://www.viiviads.com/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
