import Providers from "./providers";

const SITE_URL = "https://brandryo.com";
const LOGO_URL =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Marketing Consultant Agency | BrandRyo",
    template: "%s | BrandRyo",
  },
  description:
    "BrandRyo is a specialist digital marketing consultant agency helping brands generate leads, acquire customers, and maximise revenue. Book your free 15-min growth consultancy today.",
  keywords:
    "digital marketing consultant agency, lead generation consultant, customer acquisition consultant, growth marketing agency, paid ads management, ROAS optimisation, revenue growth consultant, Google Ads management, email marketing agency, digital marketing services UK",
  authors: [{ name: "BrandRyo Agency", url: SITE_URL }],
  creator: "BrandRyo",
  publisher: "BrandRyo",
  category: "Digital Marketing",
  classification: "Business",
  openGraph: {
    title: "Digital Marketing Consultant Agency | BrandRyo",
    description:
      "Specialist digital marketing consultant agency — lead generation, customer acquisition, paid ads & revenue growth systems. 250+ brands scaled. $120M+ revenue generated.",
    url: SITE_URL,
    siteName: "BrandRyo",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "BrandRyo digital marketing consultant agency logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Consultant Agency | BrandRyo",
    description:
      "Lead gen, paid ads, customer acquisition & revenue growth. 250+ brands scaled. Book a free 15-min strategy call.",
    images: [LOGO_URL],
    creator: "@brandryo",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "en-US": SITE_URL, "en-GB": SITE_URL },
  },
  verification: {
    google: "brandryo-google-site-verification",
  },
  other: {
    "theme-color": "#1565C0",
    "msapplication-TileColor": "#1565C0",
    "geo.region": "GB",
    "geo.placename": "London",
    "og:updated_time": new Date().toISOString(),
  },
};

/* ─── Global Structured Data (Schema.org) ──────────────────────────────────── */
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    /* 1. Organization / ProfessionalService --------------------------------- */
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "BrandRyo",
      alternateName: ["BrandRyo Agency", "BrandRyo Digital Marketing"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        width: 512,
        height: 512,
        caption: "BrandRyo — Digital Marketing Consultant Agency",
      },
      image: LOGO_URL,
      description:
        "BrandRyo is a specialist digital marketing consultant agency founded in 2016. We help brands generate consistent leads, acquire loyal customers, and maximise revenue through data-driven growth systems. Services include lead generation, customer acquisition, Google Ads management, social media marketing, email marketing, and revenue growth consultancy.",
      slogan: "Scale Beyond Your Revenue Ceiling",
      foundingDate: "2016",
      foundingLocation: { "@type": "Place", name: "London, United Kingdom" },
      numberOfEmployees: { "@type": "QuantitativeValue", value: "20" },
      areaServed: { "@type": "Place", name: "Worldwide" },
      serviceType: [
        "Lead Generation Consultancy",
        "Customer Acquisition Consultancy",
        "Paid Media Management",
        "Google Ads Management",
        "Social Media Marketing",
        "Email Marketing",
        "Revenue Growth Consultancy",
        "Digital Marketing Consulting",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "BrandRyo Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Free 15-Minute Growth Consultancy",
              description:
                "A free 15-minute strategy call with a senior BrandRyo growth consultant — includes funnel audit, 3 custom strategies, and a clear revenue roadmap.",
            },
            price: "0",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lead Generation Consultant",
              url: `${SITE_URL}/services/lead-generation`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Customer Acquisition & Paid Media",
              url: `${SITE_URL}/services/customer-acquisition`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Revenue Growth & Retention",
              url: `${SITE_URL}/services/revenue-growth`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads Management",
              url: `${SITE_URL}/google-ads-management`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
              url: `${SITE_URL}/social-media-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Email Marketing",
              url: `${SITE_URL}/email-marketing`,
            },
          },
        ],
      },
      knowsAbout: [
        "Digital Marketing",
        "Lead Generation",
        "Customer Acquisition",
        "Paid Advertising",
        "Google Ads",
        "Meta Ads",
        "Email Marketing",
        "Revenue Growth",
        "Conversion Rate Optimisation",
        "Return on Ad Spend",
        "Customer Lifetime Value",
        "Marketing Funnel Strategy",
        "B2B Lead Generation",
        "DTC Marketing",
        "SaaS Marketing",
        "Small Business Marketing",
        "Startup Growth Marketing",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "247",
        bestRating: "5",
        worstRating: "1",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "growth@brandryo.com",
          contactType: "Customer Service",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "Sales",
          url: `${SITE_URL}/consultancy`,
          availableLanguage: "English",
        },
      ],
      sameAs: [
        "https://linkedin.com/company/brandryo",
        "https://twitter.com/brandryo",
      ],
    },

    /* 2. WebSite with SearchAction (SiteLinksSearchBox) --------------------- */
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "BrandRyo",
      alternateName: "BrandRyo Digital Marketing Consultant Agency",
      url: SITE_URL,
      description:
        "BrandRyo: a digital marketing consultant agency specialising in lead generation, paid ads, customer acquisition, and revenue growth for ambitious brands.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        {
          "@type": "ReadAction",
          target: [`${SITE_URL}/consultancy`],
        },
      ],
    },

    /* 3. BreadcrumbList for homepage ---------------------------------------- */
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "BrandRyo — Digital Marketing Consultant Agency",
          item: SITE_URL,
        },
      ],
    },

    /* 4. FAQPage — global quick-answer block for AEO ------------------------- */
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#global-faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a digital marketing consultant agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A digital marketing consultant agency is a specialist firm that combines strategic consultancy with hands-on execution across digital channels — including paid ads, lead generation, SEO, email marketing, and conversion optimisation. Unlike traditional agencies that sell packages, a consultant agency like BrandRyo builds bespoke growth systems tailored to each client's revenue goals and unit economics.",
          },
        },
        {
          "@type": "Question",
          name: "What does BrandRyo do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BrandRyo is a digital marketing consultant agency founded in 2016 that helps brands generate consistent leads, acquire loyal customers, and maximise revenue. Core services include lead generation consultancy, customer acquisition via paid media (Meta, Google, LinkedIn), email marketing, Google Ads management, social media marketing, and revenue growth consultancy. BrandRyo has generated $120M+ in client revenue across 250+ brands globally.",
          },
        },
        {
          "@type": "Question",
          name: "How is BrandRyo different from a regular digital marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BrandRyo operates as a hybrid between a senior digital marketing consultant and a full-service agency. Unlike traditional agencies that assign junior account managers to multiple clients, BrandRyo embeds senior growth consultants directly into each client's business — studying their customer data, unit economics, and competitive landscape before building a bespoke growth strategy. Every engagement includes transparent weekly reporting and full-funnel ownership from lead to lifetime value.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a digital marketing consultant agency cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BrandRyo offers a completely free 15-minute growth consultancy as the starting point. Ongoing engagement pricing is bespoke and based on scope, channel mix, and revenue goals — not generic monthly retainer packages. To get a specific recommendation, book your free consultancy call at brandryo.com/consultancy.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can a digital marketing consultant agency improve results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With paid channels (Google Ads, Meta Ads), measurable improvements in ROAS and lead volume typically emerge within 30 days. Significant revenue compounding from combined paid, email, and retention systems usually begins from month 2–3. BrandRyo's average client sees a 4.8x ROAS across managed campaigns.",
          },
        },
      ],
    },

    /* 5. Speakable — for GEO voice and AI assistants ------------------------ */
    {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={LOGO_URL} type="image/jpeg" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#1565C0" />
        <meta name="format-detection" content="telephone=no" />
        {/* Global structured data — SEO, AEO & GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="bg-white text-[#0F172A] antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
