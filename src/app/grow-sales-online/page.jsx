import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Grow Sales Online | Revenue Growth Agency | BrandRyo",
  description:
    "BrandRyo helps brands grow sales online through conversion optimisation, paid acquisition, email automation, and LTV maximisation. Avg. +218% revenue growth. Free audit.",
  keywords:
    "grow sales online, how to grow sales online, increase online sales, how to grow revenue online, online sales growth strategies, how to increase ecommerce sales, digital sales growth consultant, scale online business revenue",
  alternates: { canonical: "https://brandryo.com/grow-sales-online" },
  openGraph: {
    title: "Grow Sales Online | Revenue Growth Agency | BrandRyo",
    description:
      "BrandRyo builds compounding revenue growth systems to grow your online sales predictably and profitably. +218% avg. revenue growth. Free consultancy.",
    url: "https://brandryo.com/grow-sales-online",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo revenue growth agency — grow sales online strategy dashboard",
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
      name: "Online Revenue Growth Consultancy",
      url: "https://brandryo.com/grow-sales-online",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo designs and deploys online revenue growth systems combining paid acquisition, conversion optimisation, email marketing, and LTV maximisation to grow sales profitably.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Revenue Growth Audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I grow my sales online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Growing online sales requires three interconnected levers: (1) more qualified traffic, (2) higher conversion rates, and (3) higher customer lifetime value. BrandRyo addresses all three simultaneously — which is why our clients see compounding revenue growth rather than sporadic spikes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I increase e-commerce sales quickly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fastest way to increase e-commerce sales is to fix conversion rate leaks on your existing traffic (CRO), then layer in retargeting campaigns for abandoned visitors, and reactivation email sequences for lapsed buyers. These three tactics alone often deliver 20–40% revenue uplift within 60 days.",
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
          name: "Grow Sales Online",
          item: "https://brandryo.com/grow-sales-online",
        },
      ],
    },
  ],
};

const levers = [
  {
    title: "More Qualified Traffic",
    icon: "🚦",
    color: "bg-[#EFF6FF]",
    textColor: "text-[#1565C0]",
    items: [
      "Paid search & social campaigns",
      "SEO content strategy",
      "Influencer & affiliate channels",
      "Referral programme engineering",
    ],
    metric: "3.4x avg. traffic growth",
  },
  {
    title: "Higher Conversion Rates",
    icon: "⚡",
    color: "bg-[#FFF7ED]",
    textColor: "text-[#F7941D]",
    items: [
      "Landing page & checkout CRO",
      "A/B testing programme",
      "UX & copywriting optimisation",
      "Pricing & offer testing",
    ],
    metric: "3.1x avg. CVR improvement",
  },
  {
    title: "Maximum Customer LTV",
    icon: "💰",
    color: "bg-[#F5F3FF]",
    textColor: "text-[#2D1B69]",
    items: [
      "Email & SMS retention flows",
      "Loyalty & VIP programme",
      "Upsell & cross-sell automation",
      "Win-back campaigns",
    ],
    metric: "+35% avg. LTV uplift",
  },
];

const growthData = [
  { label: "Month 1", value: 40, sales: "$28k" },
  { label: "Month 2", value: 55, sales: "$38k" },
  { label: "Month 3", value: 65, sales: "$48k" },
  { label: "Month 4", value: 75, sales: "$62k" },
  { label: "Month 5", value: 88, sales: "$89k" },
  { label: "Month 6", value: 100, sales: "$134k" },
];

const tactics = [
  {
    icon: "🔧",
    title: "Revenue Audit",
    desc: "We map every step of your revenue journey — from first touch to repeat purchase — and score it for leaks, bottlenecks, and untapped opportunities.",
  },
  {
    icon: "📊",
    title: "Funnel Optimisation",
    desc: "Every page, CTA, and checkout step is tested and refined. Small improvements compound across thousands of visitors.",
  },
  {
    icon: "✉️",
    title: "Email Revenue Engine",
    desc: "Automated email flows (welcome, abandoned cart, post-purchase, winback) that generate 25–40% of total revenue for most brands.",
  },
  {
    icon: "📣",
    title: "Paid Media Scaling",
    desc: "Profitable paid campaigns that scale alongside your revenue — not ones that eat your margin as you grow.",
  },
  {
    icon: "📱",
    title: "SMS & Push Campaigns",
    desc: "Direct-to-device campaigns with 98% open rates that drive impulse purchases and reactivation.",
  },
  {
    icon: "🤝",
    title: "Loyalty & Retention",
    desc: "Loyalty programmes and VIP tiers that turn one-time buyers into repeat customers and brand advocates.",
  },
];

const caseStudies = [
  {
    brand: "Stride Apparel",
    before: "$42k/mo",
    after: "$134k/mo",
    time: "6 months",
    kpi: "Revenue +218%",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  },
  {
    brand: "Lumina Skincare",
    before: "1.8x ROAS",
    after: "4.9x ROAS",
    time: "90 days",
    kpi: "ROAS +172%",
    img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80",
  },
  {
    brand: "Nexus SaaS",
    before: "$12k MRR",
    after: "$89k MRR",
    time: "8 months",
    kpi: "MRR +641%",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
];

const faqs = [
  {
    q: "How do I grow my sales online fast?",
    a: "The fastest wins come from fixing conversion rate leaks (most sites convert at 1–2%, we target 4–8%), then layering in retargeting for warm audiences and reactivation email flows. These alone can deliver 20–40% revenue uplift within 60 days.",
  },
  {
    q: "How do I increase e-commerce revenue?",
    a: "Focus on three levers: average order value (bundles, upsells), purchase frequency (email automation, loyalty), and conversion rate (CRO, faster checkout). Improving each by 20% compounds to a 73% revenue increase — without spending more on ads.",
  },
  {
    q: "How much does revenue growth consultancy cost?",
    a: "We start with a completely free 15-minute consultancy. Ongoing engagement pricing is always bespoke to your revenue goals and scope — we don't sell generic packages.",
  },
  {
    q: "What's a realistic timeline to grow online sales?",
    a: "Most BrandRyo clients see 20–40% revenue improvement in the first 60–90 days from conversion optimisation and email automation. Significant revenue compounding typically begins from month 3 onwards as paid media data matures.",
  },
];

export default function GrowSalesOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="solutions" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#F5F3FF] via-white to-[#EFF6FF] overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2D1B69]/8 blur-[120px] rounded-full pointer-events-none" />
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
              <span className="text-[#475569]">Grow Sales Online</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#2D1B69] text-xs font-bold uppercase tracking-widest mb-5">
              Revenue Growth Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              How to Grow Sales Online —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D1B69] to-[#1565C0]">
                With a System That Compounds.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              We help brands break through revenue ceilings by fixing conversion
              leaks, scaling profitable paid channels, and building{" "}
              <strong className="text-[#0F172A]">
                retention systems that compound LTV month over month
              </strong>
              .
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: "+218%", l: "Avg. Revenue Growth" },
                { v: "6mo", l: "Typical ROI Timeline" },
                { v: "$120M+", l: "Client Revenue Built" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-4 text-center shadow-sm"
                >
                  <div className="text-xl font-black text-[#2D1B69]">{s.v}</div>
                  <div className="text-xs text-[#475569] font-semibold mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/consultancy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D1B69] to-[#1565C0] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#2D1B69]/25"
            >
              Get My Free Revenue Growth Audit →
            </a>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#2D1B69]/15">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                alt="Revenue growth chart and digital sales strategy"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/30 to-transparent rounded-[32px]" />
            </div>
            {/* Mini growth chart */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <p className="text-xs font-bold text-[#94A3B8] mb-2">
                STRIDE APPAREL — 6-MONTH GROWTH
              </p>
              <div className="flex items-end gap-1.5 h-12">
                {growthData.map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-5 rounded-sm bg-gradient-to-t from-[#2D1B69] to-[#1565C0]"
                      style={{ height: `${d.value * 0.46}px` }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs font-black text-[#2D1B69] mt-2">
                $28k → $134k / month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 LEVERS */}
      <section className="py-24 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#29ABE2] font-bold uppercase tracking-widest text-xs mb-4 block">
              The Revenue Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Three Levers That Compound Your Revenue
            </h2>
            <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
              Improving each lever by just 20% multiplies your total revenue by
              173%. We engineer all three simultaneously.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {levers.map((l, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
              >
                <div
                  className={`w-14 h-14 ${l.color} rounded-2xl flex items-center justify-center text-2xl mb-5`}
                >
                  {l.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {l.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {l.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-[#94A3B8]"
                    >
                      <span className={`font-black ${l.textColor}`}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`text-lg font-black ${l.textColor}`}>
                  {l.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TACTICS GRID */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              Our Revenue Growth Toolkit
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Six interconnected tactics that together create a compounding,
              self-reinforcing revenue growth engine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tactics.map((t, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-xl hover:border-[#1565C0]/30 hover:bg-white transition-all"
              >
                <span className="text-3xl mb-4 block">{t.icon}</span>
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

      {/* CASE STUDIES */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A]">
              Revenue Growth in the Wild
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.img}
                    alt={`Revenue growth case study – ${c.brand}`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#2D1B69] text-white text-xs font-black px-3 py-1.5 rounded-full">
                    {c.kpi}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-black text-[#0F172A] mb-4">{c.brand}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#94A3B8] font-medium line-through">
                      {c.before}
                    </span>
                    <span className="text-[#2D1B69] font-black text-lg">
                      → {c.after}
                    </span>
                  </div>
                  <p className="text-xs text-[#29ABE2] font-bold mt-2">
                    Achieved in {c.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Questions About Growing Sales Online
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#2D1B69] to-[#1565C0]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-5">
            Ready to grow your online sales — sustainably?
          </h2>
          <p className="text-blue-100 mb-8">
            Book a free 15-min revenue audit. We'll find your biggest growth
            leaks and map out a clear plan to hit your next revenue milestone.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2D1B69] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Revenue Growth Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
