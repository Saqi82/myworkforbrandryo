import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Customer Acquisition Agency | Get More Customers | BrandRyo",
  description:
    "BrandRyo is a specialist customer acquisition agency helping brands get more customers online. Avg. 4.2x ROAS, 42% CAC reduction. Free customer acquisition audit today.",
  keywords:
    "customer acquisition agency, how to get more customers, how to get more customers online, how to attract more customers, customer acquisition consultant, get more customers for my business, online customer acquisition, find customers online",
  alternates: { canonical: "https://brandryo.com/get-more-customers" },
  openGraph: {
    title: "Customer Acquisition Agency | Get More Customers | BrandRyo",
    description:
      "BrandRyo's customer acquisition agency builds data-driven systems that attract, convert and retain your ideal customers. Free audit available.",
    url: "https://brandryo.com/get-more-customers",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo customer acquisition agency — data-driven paid media strategy",
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
      name: "Customer Acquisition Consultancy",
      url: "https://brandryo.com/get-more-customers",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo builds data-driven customer acquisition systems — combining paid media, funnel strategy and audience targeting to find, attract and convert ideal buyers at a profitable CAC.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Customer Acquisition Audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I get more customers for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most effective way to get more customers is to clearly define who your ideal customer is, target them with relevant messaging across the channels they use, and offer a seamless path from interest to purchase. BrandRyo's customer acquisition consultants will audit your current funnel and build the system that delivers profitable customers at scale.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get more customers online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The top strategies for getting more customers online include paid social (Meta, TikTok), paid search (Google), SEO, email marketing, conversion rate optimisation, and referral programmes. The right mix depends on your industry, budget, and customer profile — which is exactly what our free consultancy covers.",
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
          name: "Get More Customers",
          item: "https://brandryo.com/get-more-customers",
        },
      ],
    },
  ],
};

const strategies = [
  {
    icon: "🎯",
    title: "Ideal Customer Profiling",
    kw: "ideal customer profile for ads",
    desc: "We build deep audience profiles using your existing customer data — demographics, behaviours, psychographics — so every campaign speaks directly to the buyers most likely to convert.",
    proof: "2.8x higher CTR from audience-matched campaigns",
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80",
  },
  {
    icon: "📣",
    title: "Paid Acquisition Campaigns",
    kw: "paid ads customer acquisition",
    desc: "We run and optimise campaigns across Meta, Google, LinkedIn and TikTok — creative testing, bid strategies, and audience segmentation built to acquire loyal customers at a profitable CAC.",
    proof: "4.2x average ROAS across client portfolio",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    icon: "🔄",
    title: "Retargeting & Reactivation",
    kw: "retargeting campaigns for more customers",
    desc: "80% of buyers don't convert on the first visit. We run dynamic retargeting campaigns that re-engage warm prospects and reactivate lapsed customers — turning missed opportunities into revenue.",
    proof: "+38% conversion rate vs. cold audiences",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    icon: "💬",
    title: "Conversion Rate Optimisation",
    kw: "CRO for more customers",
    desc: "More traffic doesn't help if your site doesn't convert. We systematically A/B test every step of your acquisition funnel — from ad creative to checkout flow — until CVR is maximised.",
    proof: "Avg. 3.1x lift in CVR after full CRO audit",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

const channels = [
  {
    name: "Meta Ads (Facebook & Instagram)",
    icon: "📘",
    desc: "1B+ daily active users. Unmatched audience targeting for DTC and B2C brands.",
  },
  {
    name: "Google Search & Shopping",
    icon: "🔍",
    desc: "Capture high-intent buyers at the moment they search for what you sell.",
  },
  {
    name: "LinkedIn Ads",
    icon: "💼",
    desc: "The #1 channel for B2B customer acquisition. Decision-maker targeting at scale.",
  },
  {
    name: "TikTok & Short Video",
    icon: "🎵",
    desc: "Viral-reach potential for product brands targeting under-35 buyers.",
  },
  {
    name: "SEO & Content",
    icon: "🌐",
    desc: "Compounding organic traffic that acquires customers at near-zero marginal cost.",
  },
  {
    name: "Email Acquisition",
    icon: "✉️",
    desc: "The highest ROI channel in digital marketing. $42 back for every $1 spent.",
  },
];

const faqs = [
  {
    q: "How do I get more customers for my small business?",
    a: "Start by defining your ideal customer precisely, then pick the 1–2 acquisition channels where they spend the most time. Most small businesses see the fastest results from Google Ads (to capture search intent) and Meta Ads (to build awareness). Book our free audit and we'll tell you exactly which channels make sense for your business.",
  },
  {
    q: "How much does it cost to acquire a new customer?",
    a: "Your target Customer Acquisition Cost (CAC) should always be significantly lower than your Customer Lifetime Value (LTV). As a rough benchmark, a CAC:LTV ratio below 1:3 is considered healthy. Our consultants will help you calculate your target CAC and build campaigns that hit it.",
  },
  {
    q: "How long does it take to get more customers?",
    a: "With paid advertising, you can start seeing new customers within days of launching. With SEO and content strategies, meaningful organic traffic builds over 3–6 months. The fastest approach combines quick-win paid channels with long-term organic growth.",
  },
  {
    q: "What's the single best channel to get more customers online?",
    a: "There's no universal answer — it depends on your product, price point, and customer profile. Google Ads works brilliantly for high-intent product searches. Meta Ads is powerful for building brand awareness and retargeting. LinkedIn dominates B2B. Our free audit will identify the right mix for you.",
  },
];

export default function GetMoreCustomersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="solutions" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7941D]/8 blur-[120px] rounded-full pointer-events-none" />
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
              <span className="text-[#475569]">How to Get More Customers</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FDE68A] text-[#F7941D] text-xs font-bold uppercase tracking-widest mb-5">
              Customer Acquisition Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              How to Get More Customers Online —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#1565C0]">
                Predictably and Profitably.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              We build{" "}
              <strong className="text-[#0F172A]">
                data-driven customer acquisition systems
              </strong>{" "}
              that find your ideal buyers, convert them with precision, and keep
              them coming back — at a CAC your unit economics can sustain.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: "4.2x", l: "Avg. ROAS" },
                { v: "250+", l: "Brands Scaled" },
                { v: "42%", l: "Avg. CAC Reduction" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-black text-[#F7941D]">
                    {s.v}
                  </div>
                  <div className="text-xs text-[#475569] font-semibold mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/consultancy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F7941D] to-[#1565C0] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#F7941D]/25"
            >
              Get My Free Customer Acquisition Audit →
            </a>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#F7941D]/15">
              <img
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
                alt="BrandRyo customer acquisition strategy and paid media"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F7941D]/20 to-transparent rounded-[32px]" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#F7941D]">4.2x</div>
              <div className="text-xs text-[#475569] font-semibold">
                Avg. Return on Ad Spend
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1565C0] font-bold uppercase tracking-widest text-xs mb-3 block">
              How We Do It
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
              4 Proven Ways to Get More Customers Online
            </h2>
          </div>
          <div className="space-y-14">
            {strategies.map((s, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-60 object-cover"
                      width={600}
                      height={240}
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">
                      {s.kw}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full border border-[#FDE68A]">
                    <span className="text-[#F7941D] font-black text-sm">
                      {s.proof}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              We Acquire Customers Across Every Major Channel
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              We're channel-agnostic and data-first — we go where your customers
              are, not where it's easiest.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:border-[#1565C0]/30 transition-all"
              >
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="font-black text-[#0F172A] mb-2">{c.name}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {c.desc}
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
            Questions About Getting More Customers
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#F7941D] to-[#1565C0]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-5">
            Let's build your customer acquisition machine together.
          </h2>
          <p className="text-orange-100 mb-8">
            Book a free 15-min audit. We'll map out exactly how to get more
            customers for your specific business — before the call ends.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Book My Free Customer Acquisition Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
