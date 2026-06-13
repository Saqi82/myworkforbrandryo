import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Lead Generation Consultant | Funnel Engineering | BrandRyo",
  description:
    "BrandRyo's lead generation consultants engineer high-conversion funnels delivering qualified leads. Avg. 12% CVR, 68% CPL reduction. Free lead gen audit — no obligation.",
  keywords:
    "lead generation consultant, lead generation consultant for small business, b2b lead generation agency, lead capture strategy, funnel engineering consultant, how to generate quality leads, online lead generation service, CPL reduction consultant",
  alternates: { canonical: "https://brandryo.com/services/lead-generation" },
  openGraph: {
    title: "Lead Generation Consultant | Funnel Engineering | BrandRyo",
    description:
      "Stop losing traffic. Our lead generation consultants engineer high-conversion funnels delivering qualified, purchase-ready leads. Free audit.",
    url: "https://brandryo.com/services/lead-generation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo lead generation consultant building high-conversion funnel strategy",
      },
    ],
  },
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const schemaLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Lead Generation & Funnel Engineering",
      description:
        "BrandRyo's lead generation consultancy service designs and deploys high-conversion funnel systems that systematically capture high-intent leads for brands and businesses.",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      serviceType: "Lead Generation Consultancy",
      areaServed: "Worldwide",
      url: "https://brandryo.com/services/lead-generation",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Lead Generation Audit",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://brandryo.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://brandryo.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lead Generation",
          item: "https://brandryo.com/services/lead-generation",
        },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a lead generation consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lead generation consultant is a specialist who designs and optimises the systems, funnels, and campaigns that attract and capture potential customers (leads) for your business. At BrandRyo, our lead generation consultants combine funnel architecture, conversion rate optimisation, and data analysis to systematically increase the quantity and quality of leads you receive.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a lead generation consultant improve my results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most BrandRyo clients see measurable improvement in lead volume and quality within the first 30 days. Conversion rates and cost-per-lead metrics typically improve significantly by the end of month 2.",
      },
    },
    {
      "@type": "Question",
      name: "How much does lead generation consultancy cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a completely free 15-minute growth consultancy to start. After that, pricing depends on the scope and scale of your growth goals. We build bespoke engagements — not packages — so you only pay for what you need.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you work with for lead generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BrandRyo works with brands across DTC e-commerce, SaaS, professional services, B2B, health & wellness, fintech, and more. Our lead generation systems are built around your specific customer profile — not generic templates.",
      },
    },
  ],
};

const tactics = [
  {
    icon: "🔧",
    title: "Funnel Architecture",
    desc: "We design end-to-end lead funnels — from awareness ad to email nurture — built specifically around your customer's buying journey and objections.",
  },
  {
    icon: "🎯",
    title: "High-Intent Landing Pages",
    desc: "Conversion-optimised landing pages with compelling copy, social proof, and friction-free forms that convert traffic into qualified leads.",
  },
  {
    icon: "🧲",
    title: "Lead Magnet Strategy",
    desc: "Irresistible lead magnets (guides, audits, calculators, webinars) that deliver upfront value and pre-qualify your leads before the first call.",
  },
  {
    icon: "📧",
    title: "Email Nurture Sequences",
    desc: "Automated email journeys that warm leads, address objections, and move prospects from 'interested' to 'ready to buy' without manual effort.",
  },
  {
    icon: "📊",
    title: "CRO & A/B Testing",
    desc: "Systematic conversion rate optimisation across every step of your funnel — headlines, CTAs, forms, page layout — until CVR is maximised.",
  },
  {
    icon: "📡",
    title: "Multi-Channel Lead Capture",
    desc: "Capturing leads from paid ads, SEO, social, referral, and partnerships — all flowing into one clean, trackable pipeline.",
  },
];

const results = [
  {
    metric: "12%",
    label: "Avg. Funnel Conversion Rate",
    sub: "across optimised client funnels",
  },
  {
    metric: "68%",
    label: "Avg. CPL Reduction",
    sub: "within 90 days of engagement",
  },
  {
    metric: "3.4x",
    label: "Lead Volume Increase",
    sub: "average across new clients in month 1",
  },
  { metric: "250+", label: "Brands Scaled", sub: "with BrandRyo lead systems" },
];

const caseStudy = {
  brand: "Lumina Skincare",
  result: "From 120 leads/month to 1,800 leads/month in 4 months",
  quote:
    "BrandRyo rebuilt our entire lead funnel from scratch. Within 60 days, our CPL had dropped by 54% and we were getting leads from qualified buyers rather than tyre-kickers. The quality difference was night and day.",
  author: "Sarah Mitchell, CEO",
  img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
};

const faqs = [
  {
    q: "What is a lead generation consultant?",
    a: "A lead generation consultant designs and optimises the systems, funnels, and campaigns that attract and capture potential customers. At BrandRyo, we combine funnel architecture, CRO, and data analysis to deliver more qualified leads at a lower cost-per-lead.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable improvement in lead volume and quality within 30 days. CVR and CPL metrics typically improve significantly by the end of month 2.",
  },
  {
    q: "How much does lead generation consultancy cost?",
    a: "We start with a completely free 15-minute consultancy. After that, pricing is built around your growth goals — not generic packages. Every engagement is bespoke.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across DTC e-commerce, SaaS, B2B, professional services, health & wellness, fintech, and more. Our systems are built around your specific customer profile.",
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* NAV */}
      <SiteNav activePage="services" />

      {/* HERO */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1565C0]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-5 text-xs text-[#94A3B8] font-medium"
            >
              <a href="/" className="hover:text-[#1565C0]">
                Home
              </a>
              <span className="mx-2">/</span>
              <a href="/services" className="hover:text-[#1565C0]">
                Services
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#475569]">Lead Generation</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              Lead Generation Consultancy
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Lead Generation Consultant —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                Stop Losing Traffic, Start Capturing High-Quality Leads.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Our lead generation consultants engineer conversion funnels that
              systematically turn cold traffic into{" "}
              <strong className="text-[#0F172A]">
                warm, qualified, purchase-ready leads
              </strong>{" "}
              — at a cost-per-lead that makes your business model work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#1565C0]/25"
              >
                Get a Free Lead Gen Audit →
              </a>
            </div>
            <p className="text-xs text-[#94A3B8] mt-3">
              Free 15-min strategy call. No obligation.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#1565C0]/15">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Lead generation funnel strategy by BrandRyo consultants"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/30 to-transparent rounded-[32px]" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#1565C0]">12%</div>
              <div className="text-xs text-[#475569] font-semibold">
                Avg. Funnel CVR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section className="py-16 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((r, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-[#29ABE2] mb-1">
                {r.metric}
              </div>
              <div className="text-sm font-bold text-white mb-1">{r.label}</div>
              <div className="text-xs text-[#94A3B8]">{r.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">
              How Our Lead Generation Consultants Work
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Six interconnected tactics that together build an unstoppable lead
              machine for your brand.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {tactics.map((t, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-7 hover:shadow-xl hover:border-[#1565C0]/30 hover:bg-white transition-all"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-black text-[#0F172A] text-lg mb-3">
                  {t.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-3 block">
              Real Results
            </span>
            <h2 className="text-3xl font-black text-[#0F172A]">
              Lead Generation in Action
            </h2>
          </div>
          <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-xl grid md:grid-cols-2">
            <div className="relative">
              <img
                src={caseStudy.img}
                alt={`Lead generation case study – ${caseStudy.brand}`}
                className="w-full h-full min-h-[300px] object-cover"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1565C0]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white text-[#1565C0] font-black text-sm px-4 py-2 rounded-full shadow">
                  {caseStudy.result}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <p className="text-[#0F172A] font-black text-sm uppercase tracking-widest mb-4">
                {caseStudy.brand}
              </p>
              <p className="text-[#475569] text-base leading-relaxed italic mb-6">
                "{caseStudy.quote}"
              </p>
              <p className="text-xs font-bold text-[#94A3B8]">
                — {caseStudy.author}
              </p>
              <a
                href="/consultancy"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm"
              >
                Get Similar Results →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Common Questions About Lead Generation Consultancy
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6"
              >
                <h3 className="font-black text-[#0F172A] mb-3">{faq.q}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1565C0] to-[#2D1B69]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-5">
            Ready to fill your pipeline with qualified leads?
          </h2>
          <p className="text-blue-100 mb-8">
            Book your free 15-minute lead generation audit. We'll identify your
            biggest lead leaks and give you a clear plan to fix them — before
            the call ends.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Lead Gen Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
