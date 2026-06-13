import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Lead Generation Agency | Get More Leads | BrandRyo",
  description:
    "BrandRyo is a specialist lead generation agency helping businesses build consistent, high-quality lead pipelines. Avg. 12% CVR, 68% CPL reduction, 3.4x lead volume. Free audit.",
  keywords:
    "lead generation agency, how to get more leads, lead generation for small business, how to generate leads online, b2b lead generation, get more leads for my business, lead generation consultant, online lead generation service, lead pipeline",
  alternates: { canonical: "https://brandryo.com/get-more-leads" },
  openGraph: {
    title: "Lead Generation Agency | Get More Leads | BrandRyo",
    description:
      "BrandRyo's lead generation agency builds proven systems that deliver consistent, qualified leads. Avg. 12% CVR. Free lead gen audit.",
    url: "https://brandryo.com/get-more-leads",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo lead generation agency building pipeline strategy",
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
      name: "Lead Generation for Small Business",
      url: "https://brandryo.com/get-more-leads",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo designs and deploys high-conversion lead generation systems for small businesses and brands looking to build a consistent, scalable pipeline of qualified leads.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Lead Generation Audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How to get more leads for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fastest way to get more leads is to combine a high-converting lead capture funnel (landing page + lead magnet), targeted traffic from paid ads or SEO, and an email nurture sequence that qualifies prospects before they speak to your sales team. BrandRyo offers a free audit to identify exactly where your lead generation is underperforming.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate more leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With paid traffic, you can start generating leads within days. With SEO-driven strategies, meaningful volume typically grows over 3–6 months. BrandRyo's hybrid approach typically shows measurable improvement within the first 30 days.",
          },
        },
        {
          "@type": "Question",
          name: "What is lead generation for small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lead generation for small business is the process of attracting and capturing potential customers who are interested in your product or service. It includes strategies like content marketing, paid ads, landing pages, lead magnets, email marketing, and SEO — all designed to bring in a steady flow of potential buyers.",
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
          name: "Get More Leads",
          item: "https://brandryo.com/get-more-leads",
        },
      ],
    },
  ],
};

const problems = [
  { icon: "😤", text: "Traffic is coming but nobody's converting" },
  { icon: "💸", text: "Ad spend going up but lead quality going down" },
  { icon: "🔁", text: "Relying on referrals and word-of-mouth alone" },
  { icon: "❓", text: "No idea which channels are actually working" },
  { icon: "📉", text: "Sales team complaining about unqualified leads" },
  { icon: "🤷", text: "Tried everything but nothing sticks long-term" },
];

const methods = [
  {
    num: "01",
    title: "Funnel Architecture",
    kw: "lead generation funnel strategy",
    desc: "We design a step-by-step journey from first click to qualified lead. Every page, form and CTA is optimised to push prospects forward — not away.",
    stat: "12% avg. CVR",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    num: "02",
    title: "High-Intent Landing Pages",
    kw: "lead capture page optimisation",
    desc: "Conversion-optimised pages built around your buyer's language and objections. We test headlines, social proof, CTAs and form fields until CVR is maximised.",
    stat: "68% avg. CPL reduction",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    num: "03",
    title: "Lead Magnet Strategy",
    kw: "lead magnets for small business",
    desc: "We create irresistible free offers (guides, audits, calculators, webinars) that pre-qualify prospects before the first sales conversation.",
    stat: "3.4x more leads",
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80",
  },
  {
    num: "04",
    title: "Email Nurture Automation",
    kw: "email nurture sequence for leads",
    desc: "Automated sequences that warm cold leads, answer objections, and move prospects from 'interested' to 'ready to buy' — without lifting a finger.",
    stat: "+45% lead close rate",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
  },
];

const results = [
  {
    brand: "Lumina Skincare",
    result: "120 → 1,800 leads/month",
    time: "4 months",
  },
  {
    brand: "Nexus SaaS",
    result: "CPL dropped from $94 to $31",
    time: "60 days",
  },
  {
    brand: "Stride B2B",
    result: "Pipeline grew 380% in one quarter",
    time: "90 days",
  },
];

const faqs = [
  {
    q: "How do I get more leads for my small business?",
    a: "The fastest wins come from fixing your conversion funnel first (landing page + lead magnet), then driving targeted traffic through paid ads or SEO. If you're not capturing at least 8–12% of your traffic as leads, your funnel is leaking. Our free audit will identify exactly where.",
  },
  {
    q: "What's the difference between a lead and a qualified lead?",
    a: "A lead is anyone who shows interest. A qualified lead has been pre-screened — they match your ideal customer profile, have genuine need, and have the intent and budget to act. We build systems that generate qualified leads, not just volume.",
  },
  {
    q: "How much should I spend on lead generation?",
    a: "It depends on your target CPL (cost per lead) and close rate. A healthy rule of thumb: if a customer is worth £5,000 to you and you close 20% of qualified leads, you can justify spending up to £1,000 to acquire each lead. Our consultancy call will help you work out your exact numbers.",
  },
  {
    q: "Can you help with B2B lead generation?",
    a: "Absolutely. We specialise in both B2C and B2B lead generation. For B2B, we use LinkedIn targeting, long-form content, webinar strategies, and account-based marketing to generate high-value enterprise leads.",
  },
];

export default function GetMoreLeadsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="solutions" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] overflow-hidden">
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
              <span className="text-[#475569]">How to Get More Leads</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              Lead Generation Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Stop Wondering How to Get More Leads.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                Start Filling Your Pipeline.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              BrandRyo's lead generation consultants engineer the systems that
              deliver{" "}
              <strong className="text-[#0F172A]">
                consistent, high-quality, qualified leads
              </strong>{" "}
              — so your sales team spends time closing, not chasing.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: "12%", l: "Avg. Funnel CVR" },
                { v: "68%", l: "Avg. CPL Reduction" },
                { v: "3.4x", l: "Lead Volume Uplift" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-black text-[#1565C0]">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#1565C0]/25"
            >
              Get My Free Lead Gen Audit →
            </a>
            <p className="text-xs text-[#94A3B8] mt-3">
              15 minutes. No obligation. Walk away with a clear plan.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#1565C0]/15">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="BrandRyo lead generation consultant building funnel strategy"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/30 to-transparent rounded-[32px]" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM RECOGNITION */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">
              Sound familiar?
            </h2>
            <p className="text-[#94A3B8]">
              These are the most common lead generation problems we fix within
              30 days.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4"
              >
                <span className="text-2xl">{p.icon}</span>
                <p className="text-sm text-[#94A3B8] font-medium">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/consultancy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all"
            >
              Fix My Lead Generation →
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
              Our Lead Generation System
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
              4 Steps to a Predictable Lead Machine
            </h2>
            <p className="text-[#475569] mt-4 max-w-xl mx-auto">
              Every step is data-driven, tested, and engineered around your
              buyer — not generic templates.
            </p>
          </div>
          <div className="space-y-16">
            {methods.map((m, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-64 object-cover"
                      width={600}
                      height={256}
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-[#E2E8F0]">
                      {m.num}
                    </span>
                    <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">
                      {m.kw}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4">
                    {m.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed mb-6">
                    {m.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-full">
                    <span className="text-[#1565C0] font-black text-sm">
                      {m.stat}
                    </span>
                    <span className="text-xs text-[#475569]">
                      avg. across client portfolio
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-3 block">
              Proof It Works
            </span>
            <h2 className="text-3xl font-black text-[#0F172A]">
              Lead Generation Results We've Delivered
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-[#1565C0]/30 transition-all"
              >
                <p className="text-sm font-black text-[#94A3B8] uppercase tracking-wider mb-4">
                  {r.brand}
                </p>
                <p className="text-xl font-black text-[#0F172A] mb-3">
                  {r.result}
                </p>
                <p className="text-xs text-[#29ABE2] font-bold">In {r.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Common Questions About Getting More Leads
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
          <h2 className="text-3xl md:text-4xl font-black mb-5">
            Ready to build a lead generation system that actually works?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute audit. We'll analyse your current funnel,
            identify your biggest lead leaks, and hand you a clear plan — before
            the call ends.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Claim My Free Lead Gen Audit →
          </a>
          <p className="text-blue-200 text-xs mt-4">
            No credit card. No obligation. 100% free.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
