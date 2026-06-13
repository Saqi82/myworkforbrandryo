import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Revenue Growth Consultant | LTV & Retention | BrandRyo",
  description:
    "BrandRyo's revenue growth consultants maximise customer LTV, improve retention, and increase repeat purchase rates. Avg. +35% LTV uplift in 90 days. Free revenue audit.",
  keywords:
    "revenue growth consultant, customer lifetime value consultant, customer retention consultant, LTV optimisation, repeat purchase rate, email retention marketing, revenue maximisation agency, churn reduction consultant, customer revenue growth",
  alternates: { canonical: "https://brandryo.com/services/revenue-growth" },
  openGraph: {
    title: "Revenue Growth Consultant | LTV & Retention | BrandRyo",
    description:
      "Stop leaving revenue on the table. Revenue growth consultants who build retention systems that turn one-time buyers into lifetime brand advocates.",
    url: "https://brandryo.com/services/revenue-growth",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo revenue growth consultant — customer LTV and retention strategy dashboard",
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
      name: "Revenue Growth & Retention Consultancy",
      description:
        "LTV optimisation and retention systems that transform one-time buyers into lifetime brand advocates, compounding revenue without increasing ad spend.",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      serviceType: "Revenue Growth Consultancy",
      areaServed: "Worldwide",
      url: "https://brandryo.com/services/revenue-growth",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Revenue Growth Audit",
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
          name: "Revenue Growth",
          item: "https://brandryo.com/services/revenue-growth",
        },
      ],
    },
  ],
};

const tactics = [
  {
    icon: "✉️",
    title: "Email & SMS Lifecycle Programmes",
    desc: "Post-purchase flows, win-back campaigns, loyalty sequences, and cart recovery automation — all designed to drive repeat revenue on autopilot.",
  },
  {
    icon: "💎",
    title: "Loyalty & VIP Programme Design",
    desc: "Custom loyalty architectures that reward your best customers, increase purchase frequency, and create emotional brand attachment that competitors can't copy.",
  },
  {
    icon: "📊",
    title: "LTV Modelling & Segmentation",
    desc: "We model your customer lifetime value by cohort, identify your highest-value segments, and re-orient your entire growth strategy around them.",
  },
  {
    icon: "🔄",
    title: "Subscription & Recurring Revenue",
    desc: "For brands with subscription potential, we design and optimise the subscription offer, pricing, and churn reduction systems.",
  },
  {
    icon: "🛒",
    title: "Upsell & Cross-Sell Systems",
    desc: "Post-purchase upsell sequences and cross-sell recommendations that increase average order value without increasing ad spend.",
  },
  {
    icon: "🔍",
    title: "Churn Analysis & Win-Back",
    desc: "We identify exactly why customers stop buying and build targeted win-back campaigns that re-activate lapsed customers profitably.",
  },
];

const results = [
  {
    metric: "+35%",
    label: "Avg. LTV Uplift",
    sub: "within 90 days of engagement",
  },
  {
    metric: "+28%",
    label: "Repeat Purchase Rate",
    sub: "increase across client base",
  },
  {
    metric: "4.6x",
    label: "Email Revenue ROAS",
    sub: "from lifecycle programmes",
  },
  {
    metric: "68%",
    label: "Avg. Churn Reduction",
    sub: "in subscription client cohorts",
  },
];

const faqs = [
  {
    q: "What does a revenue growth consultant actually do?",
    a: "A revenue growth consultant analyses your existing customer base, identifies revenue leaks, and builds systems — email, SMS, loyalty, upsell — that extract more value from every customer you've already acquired. At BrandRyo, we focus on the full post-acquisition journey to maximise LTV and margin.",
  },
  {
    q: "How can I increase my customer lifetime value?",
    a: "The most effective LTV drivers are: (1) increasing purchase frequency through smart email/SMS automation, (2) increasing average order value through upsell and cross-sell, and (3) reducing churn through loyalty programmes and win-back campaigns. We build all three as an integrated system.",
  },
  {
    q: "Is retention marketing relevant for small businesses?",
    a: "Absolutely — and it's often the highest-ROI activity for smaller brands because it costs 5–7x less to retain a customer than acquire a new one. Even basic post-purchase sequences can deliver a 15–30% uplift in repeat purchase rate within weeks.",
  },
  {
    q: "How do you measure the success of revenue growth initiatives?",
    a: "We track LTV by cohort, repeat purchase rate, average order value, and email/SMS revenue attribution. You'll receive a clear dashboard and weekly report showing exactly how retention and upsell programmes are compounding your revenue.",
  },
];

const steps = [
  {
    num: "01",
    title: "Revenue Audit",
    desc: "We map your current customer journey, LTV curve, churn rate, and email/SMS performance to identify the biggest gaps.",
  },
  {
    num: "02",
    title: "Segmentation & LTV Modelling",
    desc: "We model your customers by LTV cohort to understand who your most valuable buyers are and how to get more of them.",
  },
  {
    num: "03",
    title: "System Build",
    desc: "We design and deploy the email flows, loyalty programme, upsell sequences, and churn prevention campaigns.",
  },
  {
    num: "04",
    title: "Optimise & Compound",
    desc: "Weekly testing and optimisation of every flow, offer, and message. Revenue compounds month after month.",
  },
];

export default function RevenueGrowthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* NAV */}
      <SiteNav activePage="services" />

      {/* HERO */}
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-[#F5F3FF] via-white to-[#EFF6FF] overflow-hidden">
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
              <span className="text-[#475569]">Revenue Growth</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#2D1B69] text-xs font-bold uppercase tracking-widest mb-5">
              Revenue Growth & Retention
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Revenue Growth Consultant —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D1B69] to-[#1565C0]">
                Maximise Customer LTV and Compound Your Revenue.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Customer acquisition is expensive. We build the retention, email,
              loyalty, and LTV optimisation systems that turn one-time buyers
              into{" "}
              <strong className="text-[#0F172A]">
                lifetime brand advocates
              </strong>{" "}
              — growing your revenue without growing your ad spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D1B69] to-[#1565C0] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg"
              >
                Get a Free Revenue Audit →
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#2D1B69]/15">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                alt="Revenue growth and customer retention strategy by BrandRyo"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/30 to-transparent rounded-[32px]" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#2D1B69]">+35%</div>
              <div className="text-xs text-[#475569] font-semibold">
                LTV Uplift (avg.)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6 bg-[#2D1B69]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((r, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-[#29ABE2] mb-1">
                {r.metric}
              </div>
              <div className="text-sm font-bold text-white mb-1">{r.label}</div>
              <div className="text-xs text-purple-300">{r.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">
              How We Grow Your Revenue Without Increasing Ad Spend
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Six retention and revenue maximisation tactics — deployed as an
              integrated system, not isolated tactics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {tactics.map((t, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-7 hover:shadow-xl hover:border-[#2D1B69]/30 hover:bg-white transition-all"
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

      {/* PROCESS */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              Our 4-Step Revenue Growth System
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D1B69] to-[#1565C0] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-black text-sm">{s.num}</span>
                </div>
                <h3 className="font-black text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#F7941D]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-black text-[#0F172A] leading-relaxed mb-6 italic">
            "BrandRyo's retention programme increased our repeat purchase rate
            by 34% in 3 months and added $240k in incremental revenue — without
            touching our ad budget."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
              alt="Priya Sharma"
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div className="text-left">
              <p className="font-black text-[#0F172A] text-sm">Priya Sharma</p>
              <p className="text-xs text-[#475569]">CMO, Stride Apparel</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Revenue Growth Consultant FAQ
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6"
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
            Stop leaving revenue on the table.
          </h2>
          <p className="text-purple-200 mb-8">
            Book your free 15-minute growth consultancy. We'll identify exactly
            where your LTV is leaking and give you a clear plan to fix it.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2D1B69] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Revenue Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
