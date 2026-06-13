import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Digital Marketing Services | Lead Gen & Paid Ads | BrandRyo",
  description:
    "BrandRyo's digital marketing services: lead generation, customer acquisition, Google Ads, email marketing, and revenue growth consultancy. Free 15-min strategy audit available.",
  keywords:
    "digital marketing services, lead generation service, customer acquisition agency, paid ads management, Google Ads management service, email marketing agency, revenue growth consultancy, digital marketing consultant services, growth marketing services",
  alternates: { canonical: "https://brandryo.com/services" },
  openGraph: {
    title:
      "Digital Marketing Services | BrandRyo — Lead Gen, Ads & Revenue Growth",
    description:
      "Lead generation, paid ads, customer acquisition and revenue maximisation — BrandRyo's digital marketing services. Free 15-min strategy audit.",
    url: "https://brandryo.com/services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo digital marketing services — lead generation, paid ads, revenue growth consultancy",
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
      ],
    },
    {
      "@type": "ItemList",
      name: "BrandRyo Digital Marketing Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Lead Generation & Funnel Engineering",
            description:
              "High-conversion funnel systems that turn traffic into qualified, high-intent leads ready to buy.",
            url: "https://brandryo.com/services/lead-generation",
            provider: {
              "@type": "Organization",
              name: "BrandRyo",
              url: "https://brandryo.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Customer Acquisition & Paid Media",
            description:
              "Hyper-targeted campaigns across Meta, Google & LinkedIn built on real data to acquire loyal customers.",
            url: "https://brandryo.com/services/customer-acquisition",
            provider: {
              "@type": "Organization",
              name: "BrandRyo",
              url: "https://brandryo.com",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Revenue Growth & Retention",
            description:
              "LTV optimisation and retention systems that transform one-time buyers into lifetime brand advocates.",
            url: "https://brandryo.com/services/revenue-growth",
            provider: {
              "@type": "Organization",
              name: "BrandRyo",
              url: "https://brandryo.com",
            },
          },
        },
      ],
    },
  ],
};

const services = [
  {
    title: "Lead Generation & Funnel Engineering",
    slug: "lead-generation",
    tagline: "Turn cold traffic into warm, qualified leads — at scale.",
    desc: "Stop bleeding traffic. We design and deploy high-conversion funnel systems — landing pages, lead magnets, email sequences, and CRO frameworks — that systematically capture high-intent buyers and feed your sales pipeline.",
    metric: "Avg. 12% CVR on optimised funnels",
    kpis: [
      "Conversion Rate (CVR)",
      "Cost Per Lead (CPL)",
      "Lead Quality Score",
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    color: "from-[#1565C0] to-[#29ABE2]",
    bg: "bg-[#EFF6FF]",
    icon: "🎯",
    keywords: [
      "lead generation consultant",
      "b2b lead generation",
      "lead capture strategy",
    ],
  },
  {
    title: "Customer Acquisition & Paid Media",
    slug: "customer-acquisition",
    tagline: "Find your ideal buyers. Convert them profitably.",
    desc: "We run hyper-targeted paid campaigns across Meta, Google, TikTok and LinkedIn — built on your actual customer data, not guesswork. Every creative, audience, and bid strategy is engineered to acquire loyal customers at a profitable CAC.",
    metric: "4.2x Average ROAS across client portfolio",
    kpis: [
      "Return on Ad Spend (ROAS)",
      "Customer Acquisition Cost (CAC)",
      "Cost Per Acquisition (CPA)",
    ],
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=700&q=80",
    color: "from-[#F7941D] to-[#F7941D]/80",
    bg: "bg-[#FFF7ED]",
    icon: "📣",
    keywords: [
      "customer acquisition agency",
      "paid ads consultant",
      "Facebook ads agency",
    ],
  },
  {
    title: "Revenue Growth & Retention",
    slug: "revenue-growth",
    tagline: "Maximise every customer's lifetime value.",
    desc: "Customer acquisition is expensive. We build the email, SMS, loyalty, and LTV optimisation systems that turn one-time buyers into lifetime advocates — compounding your revenue without increasing your ad spend.",
    metric: "+35% Average LTV uplift in 90 days",
    kpis: [
      "Customer Lifetime Value (LTV)",
      "Repeat Purchase Rate",
      "Revenue Per Customer",
    ],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80",
    color: "from-[#2D1B69] to-[#1565C0]",
    bg: "bg-[#F5F3FF]",
    icon: "📈",
    keywords: [
      "revenue growth consultant",
      "customer retention agency",
      "LTV optimisation",
    ],
  },
];

const addOns = [
  {
    icon: "🔍",
    title: "SEO & Content Strategy",
    desc: "Organic search presence that drives compounding traffic without ongoing ad spend.",
  },
  {
    icon: "✉️",
    title: "Email Marketing & Automation",
    desc: "Revenue-generating email sequences, drip campaigns, and list segmentation.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "Custom dashboards and weekly ROI reports so you always know exactly what's working.",
  },
  {
    icon: "🎨",
    title: "Creative & Copywriting",
    desc: "Ad creatives, landing page copy, and brand messaging that converts browsers into buyers.",
  },
  {
    icon: "🤝",
    title: "CRO & A/B Testing",
    desc: "Systematic conversion optimisation across every page, form, and funnel step.",
  },
  {
    icon: "🌐",
    title: "Social Media Growth",
    desc: "Organic social strategy that builds authority and drives inbound enquiries.",
  },
];

const process = [
  {
    num: "01",
    title: "Free Consultancy",
    desc: "A 15-minute call to understand your goals, diagnose your biggest revenue leaks, and confirm we're the right fit.",
  },
  {
    num: "02",
    title: "Deep Audit",
    desc: "We analyse your funnel, ad accounts, audience data, and unit economics before touching a single campaign.",
  },
  {
    num: "03",
    title: "Custom Strategy",
    desc: "A bespoke growth roadmap — specific to your industry, customer profile, and revenue targets.",
  },
  {
    num: "04",
    title: "Execute & Optimise",
    desc: "We deploy, test, and iterate daily. You get a weekly performance report every Monday morning.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />

      {/* NAV */}
      <SiteNav activePage="services" />

      {/* HERO */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE]">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-xs text-[#94A3B8] font-medium"
          >
            <a href="/" className="hover:text-[#1565C0]">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#475569]">Services</span>
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
            Our Growth Ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-6">
            Digital Marketing Services That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
              Actually Drive Revenue.
            </span>
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed mb-10">
            We don't sell packages. We build{" "}
            <strong className="text-[#0F172A]">custom growth engines</strong>{" "}
            around your business — combining lead generation, paid acquisition,
            and revenue maximisation into one unified strategy.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-black text-lg rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-[#1565C0]/25"
          >
            Get a Free Strategy Audit →
          </a>
          <p className="text-[#94A3B8] text-xs mt-3">
            15 minutes. No obligation. Real insights.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">
              Core Growth Services
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Three interconnected disciplines that together form the complete
              BrandRyo growth system.
            </p>
          </div>
          <div className="space-y-12">
            {services.map((s, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-xl shadow-[#1565C0]/10 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <img
                    src={s.img}
                    alt={`BrandRyo ${s.title} service`}
                    className="w-full h-80 object-cover"
                    width={700}
                    height={320}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${s.color} opacity-30`}
                  />
                  <div className="absolute bottom-5 left-5">
                    <span className="bg-white/90 backdrop-blur-sm text-[#1565C0] text-xs font-black px-4 py-2 rounded-full">
                      {s.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div
                    className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center text-2xl mb-5 shadow-sm`}
                  >
                    {s.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-3">
                    {s.title}
                  </h2>
                  <p className="text-[#1565C0] font-bold text-sm mb-4 italic">
                    {s.tagline}
                  </p>
                  <p className="text-[#475569] leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {s.keywords.map((kw, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-xs font-semibold rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm"
                    >
                      Explore {s.title.split(" &")[0]} →
                    </a>
                    <a
                      href="/consultancy"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#E2E8F0] text-[#475569] font-bold rounded-xl hover:border-[#1565C0] hover:text-[#1565C0] transition-all text-sm"
                    >
                      Get Free Audit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-3">
              Additional Growth Services
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Every service below is available as a standalone or as part of
              your complete growth strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#1565C0]/30 transition-all"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-black text-[#0F172A] mb-2">{a.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#29ABE2] font-bold uppercase tracking-widest text-xs mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              From Free Consultancy to Revenue Growth — in 4 Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#29ABE2] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#1565C0]/30">
                  <span className="text-white font-black text-sm">{p.num}</span>
                </div>
                <h3 className="font-black text-white mb-3">{p.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#EFF6FF] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-5">
            Not sure which service is right for you?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
              We'll tell you in 15 minutes.
            </span>
          </h2>
          <p className="text-[#475569] mb-8 text-lg">
            Book a free strategy call. We'll audit your current setup and
            recommend exactly where to focus first for maximum ROI.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-black text-lg rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-[#1565C0]/25"
          >
            Book My Free Consultancy →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
