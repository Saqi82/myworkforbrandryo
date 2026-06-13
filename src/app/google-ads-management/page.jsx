import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Google Ads Management Agency | BrandRyo Paid Search",
  description:
    "Expert Google Ads management for small business and growth brands. BrandRyo's paid search consultants maximise ROAS, reduce wasted spend, and deliver customers profitably. Free audit.",
  keywords:
    "Google Ads management agency, Google Ads management for small business, Google ads consultant, Google Ads management service, paid search management, Google PPC agency, how to run Google ads, Google ads expert, ROAS optimisation Google",
  alternates: { canonical: "https://brandryo.com/google-ads-management" },
  openGraph: {
    title: "Google Ads Management Agency | BrandRyo Paid Search",
    description:
      "Expert Google Ads management — maximise ROAS, eliminate wasted spend, and acquire customers profitably. Free Google Ads audit available.",
    url: "https://brandryo.com/google-ads-management",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo Google Ads management agency — paid search optimisation dashboard",
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
      name: "Google Ads Management for Small Business",
      url: "https://brandryo.com/google-ads-management",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo provides expert Google Ads management for small businesses and growth-stage brands — maximising ROAS, reducing CPA, and building profitable paid search campaigns.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Google Ads Audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Google Ads worth it for small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — when managed properly, Google Ads is one of the highest-ROI channels for small businesses because it captures purchase-intent traffic (people actively searching for what you sell). The key is smart keyword targeting, strong ad copy, and conversion-optimised landing pages. Our free audit will tell you if Google Ads makes financial sense for your specific business.",
          },
        },
        {
          "@type": "Question",
          name: "How much should a small business spend on Google Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There's no universal answer — the right budget depends on your average order value, target CPA, and competitive landscape. As a starting point, we recommend testing with £500–£1,500/month to gather meaningful data, then scaling spend once profitable keywords are identified. BrandRyo's audit will recommend a specific starting budget for your business.",
          },
        },
        {
          "@type": "Question",
          name: "What is Google Ads management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Ads management is the ongoing process of setting up, optimising, and scaling paid search campaigns on Google. A good management service handles keyword research, ad copywriting, bid strategy, audience targeting, Quality Score optimisation, and conversion tracking — all with the goal of maximising ROAS and minimising wasted spend.",
          },
        },
      ],
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
          name: "Google Ads Management",
          item: "https://brandryo.com/google-ads-management",
        },
      ],
    },
  ],
};

const adTypes = [
  {
    icon: "🔍",
    type: "Search Ads",
    kd: "highest intent traffic",
    desc: "Capture buyers actively searching for what you sell. Precision keyword targeting with conversion-optimised ad copy.",
  },
  {
    icon: "🛍️",
    type: "Shopping & PMax",
    kd: "e-commerce growth",
    desc: "Product Shopping campaigns and Performance Max for e-commerce brands looking to dominate Google's product listings.",
  },
  {
    icon: "🎯",
    type: "Display & Retargeting",
    kd: "brand awareness & re-engagement",
    desc: "Keep your brand in front of warm prospects across Google's 2M+ partner sites. Turn browsers into buyers.",
  },
  {
    icon: "📹",
    type: "YouTube Ads",
    kd: "video customer acquisition",
    desc: "Reach your ideal customers on YouTube with skippable, non-skippable and bumper ad formats. Huge reach at low CPM.",
  },
];

const whatWeAudit = [
  "Wasted spend on irrelevant keywords",
  "Poor Quality Scores dragging up CPCs",
  "Missing negative keyword lists",
  "Underperforming ad copy and extensions",
  "Landing pages with low conversion rates",
  "Bid strategies not aligned with business goals",
  "Campaign structure and account architecture",
  "Conversion tracking gaps and attribution errors",
];

const process = [
  {
    num: "01",
    title: "Account Audit",
    desc: "We audit your existing Google Ads account (or build from scratch) — finding every pound of wasted spend and every missed opportunity.",
  },
  {
    num: "02",
    title: "Strategy & Structure",
    desc: "Rebuild campaign structure, keyword architecture, ad groups and match types for maximum relevance and Quality Score.",
  },
  {
    num: "03",
    title: "Creative & Copy",
    desc: "Write high-CTR search ads using your customer's exact language, tested across multiple ad variants.",
  },
  {
    num: "04",
    title: "Bid & Budget Management",
    desc: "Daily bid optimisation using automated rules and manual oversight — pulling budget from losing campaigns into winners.",
  },
  {
    num: "05",
    title: "Landing Page CRO",
    desc: "Ensure every ad click lands on a page built to convert — no wasted clicks on generic homepage traffic.",
  },
  {
    num: "06",
    title: "Weekly Reporting",
    desc: "Every Monday you receive a plain-English performance report: spend, revenue, ROAS, CPA, and this week's optimisation priorities.",
  },
];

const faqs = [
  {
    q: "Is Google Ads worth it for small businesses?",
    a: "Yes — when managed professionally, Google Ads is one of the highest-ROI channels for small businesses because it captures high-intent buyers. The key is smart keyword selection, strong ad copy, and landing pages built to convert. Our free audit will tell you if Google Ads makes sense for your specific business model.",
  },
  {
    q: "How long before I see results from Google Ads?",
    a: "With paid search, you can start generating qualified traffic within 24–48 hours of launch. However, meaningful data for optimisation typically takes 4–8 weeks of spend. Most BrandRyo clients see profitable ROAS within the first 4–6 weeks.",
  },
  {
    q: "What makes BrandRyo's Google Ads management different?",
    a: "We don't use generic templates. Every campaign is built around your specific customer search queries, competitive landscape, and unit economics. You get a dedicated senior media buyer who owns your account — not a junior exec with 30 other clients.",
  },
  {
    q: "Do I need a minimum ad spend to work with BrandRyo?",
    a: "We work with ad budgets from £500/month upwards. We'll recommend a specific starting budget based on your industry and competitive landscape during the free consultancy call.",
  },
];

export default function GoogleAdsManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="solutions" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] overflow-hidden">
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
              <span className="text-[#475569]">Google Ads Management</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              Google Ads Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Google Ads Management That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                Maximises Every Penny.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              We manage Google Ads campaigns for small businesses and
              growth-stage brands —{" "}
              <strong className="text-[#0F172A]">
                eliminating wasted spend, boosting Quality Scores, and
                delivering customers at a profitable CPA.
              </strong>
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: "4.8x", l: "Avg. ROAS" },
                { v: "54%", l: "Avg. CPC Reduction" },
                { v: "30 days", l: "Time to First Results" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-4 text-center shadow-sm"
                >
                  <div className="text-xl font-black text-[#1565C0]">{s.v}</div>
                  <div className="text-xs text-[#475569] font-semibold mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/consultancy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#1565C0]/25"
            >
              Get My Free Google Ads Audit →
            </a>
            <p className="text-xs text-[#94A3B8] mt-3">
              We'll find your wasted spend before the call ends.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#1565C0]/15">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                alt="Google Ads management for small business by BrandRyo"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/30 to-transparent rounded-[32px]" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <p className="text-xs font-bold text-[#94A3B8] mb-1">
                ROAS IMPROVEMENT
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#94A3B8] line-through">
                  1.8x
                </span>
                <span className="text-xl font-black text-[#1565C0]">
                  → 4.9x
                </span>
              </div>
              <p className="text-xs text-[#475569]">in 90 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* AD TYPES */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">
              Google Ad Formats We Manage
            </h2>
            <p className="text-[#94A3B8]">
              Every format has its role. We match the right format to your goal
              and audience.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {adTypes.map((a, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <span className="text-3xl mb-4 block">{a.icon}</span>
                <h3 className="font-black text-white mb-2">{a.type}</h3>
                <p className="text-xs text-[#29ABE2] font-bold uppercase tracking-wider mb-3">
                  {a.kd}
                </p>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
              What We Find In Every Account
            </span>
            <h2 className="text-3xl font-black text-[#0F172A] mb-6">
              The 8 Wasted-Spend Culprits We Fix First
            </h2>
            <p className="text-[#475569] mb-6">
              Most Google Ads accounts we audit are wasting 30–60% of their
              budget on these 8 issues. We fix them in week one.
            </p>
            <ul className="space-y-3">
              {whatWeAudit.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#475569]"
                >
                  <span className="text-[#1565C0] font-black flex-shrink-0">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/consultancy"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm"
            >
              Fix My Google Ads Account →
            </a>
          </div>
          <div className="relative rounded-[28px] overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
              alt="Google Ads audit and wasted spend analysis"
              className="w-full h-80 object-cover"
              width={600}
              height={320}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/40 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="bg-white text-[#1565C0] font-black text-sm px-4 py-2 rounded-full shadow">
                Avg. 43% budget recovered in week 1
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A]">
              Our Google Ads Management Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-lg hover:border-[#1565C0]/30 transition-all"
              >
                <span className="text-3xl font-black text-[#E2E8F0]">
                  {p.num}
                </span>
                <h3 className="font-black text-[#0F172A] mt-3 mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Google Ads Questions Answered
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-5">
            Stop paying for clicks that don't convert.
          </h2>
          <p className="text-blue-100 mb-8">
            Book a free Google Ads audit. We'll find your wasted spend and tell
            you exactly how to fix it — in 15 minutes.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Google Ads Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
