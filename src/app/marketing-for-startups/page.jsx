import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Growth Marketing for Startups | Startup Agency | BrandRyo",
  description:
    "BrandRyo is a specialist growth marketing agency for startups — helping early-stage brands build their first scalable customer acquisition system. 50+ startups scaled. Free audit.",
  keywords:
    "growth marketing for startups, marketing for startups, startup marketing consultant, startup growth consultant, marketing agency for startups, digital marketing for startups, how to market a startup, go-to-market strategy startup",
  alternates: { canonical: "https://brandryo.com/marketing-for-startups" },
  openGraph: {
    title: "Growth Marketing for Startups | Startup Agency | BrandRyo",
    description:
      "BrandRyo helps startups build their first scalable customer acquisition system. From zero to predictable growth. Free startup growth audit.",
    url: "https://brandryo.com/marketing-for-startups",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo startup marketing agency team working on growth strategy",
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
      name: "Growth Marketing for Startups",
      url: "https://brandryo.com/marketing-for-startups",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo provides specialist growth marketing for startups — building the first scalable customer acquisition systems for early-stage and growth-stage brands.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Startup Growth Audit",
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
          name: "Marketing for Startups",
          item: "https://brandryo.com/marketing-for-startups",
        },
      ],
    },
  ],
};

const stages = [
  {
    stage: "Pre-Launch",
    icon: "🚀",
    color: "bg-[#EFF6FF] border-[#BFDBFE]",
    text: "text-[#1565C0]",
    desc: "Validate your market, build your waitlist, and generate buzz before your first day — so launch day is already sold out.",
    tactics: [
      "Customer discovery & ICP definition",
      "Waitlist funnel with referral loop",
      "Early PR & influencer outreach",
      "Pre-launch email nurture sequence",
    ],
  },
  {
    stage: "Early Growth (0→$10k MRR)",
    icon: "📈",
    color: "bg-[#FFF7ED] border-[#FDE68A]",
    text: "text-[#F7941D]",
    desc: "Find your first paying customers, validate your acquisition channels, and build the systems that make CAC predictable.",
    tactics: [
      "First-customer acquisition sprints",
      "Channel testing & rapid experimentation",
      "Early retention & churn reduction",
      "Founder-led growth system",
    ],
  },
  {
    stage: "Scale (£10k→£100k MRR)",
    icon: "⚡",
    color: "bg-[#F5F3FF] border-[#DDD6FE]",
    text: "text-[#2D1B69]",
    desc: "Double down on what's working, automate what can be automated, and scale paid channels without sacrificing unit economics.",
    tactics: [
      "Paid acquisition scaling strategy",
      "Marketing automation & lifecycle",
      "CAC optimisation & LTV maximisation",
      "Performance team & process build",
    ],
  },
];

const startupServices = [
  {
    icon: "🎯",
    title: "Go-To-Market Strategy",
    desc: "A clear, channel-specific plan for acquiring your first 100, 1,000 and 10,000 customers — with unit economics built in from the start.",
  },
  {
    icon: "🧪",
    title: "Growth Experimentation",
    desc: "Rapid testing across channels, messaging, and offers. We find what works fast so you don't burn runway on slow campaigns.",
  },
  {
    icon: "📊",
    title: "Analytics & North Star Metrics",
    desc: "We set up your measurement stack and define the key metrics that matter — so every decision is grounded in real data.",
  },
  {
    icon: "💰",
    title: "Runway-Efficient Paid Ads",
    desc: "Paid campaigns designed to be runway-positive — generating revenue faster than they consume budget.",
  },
  {
    icon: "🤝",
    title: "Fractional CMO",
    desc: "Senior marketing leadership on a fractional basis — strategy, hiring, and execution ownership without the full-time cost.",
  },
  {
    icon: "🏗️",
    title: "Funnel Architecture",
    desc: "Build your customer acquisition funnel from first touch to conversion — optimised for each stage of your buyer's journey.",
  },
];

const faqs = [
  {
    q: "When should a startup invest in marketing?",
    a: "Earlier than most founders think. Waiting for product perfection is a common mistake. The earlier you start testing acquisition channels and gathering customer data, the faster you'll find product-market fit and build the systems that scale. We help startups validate marketing channels even before product launch.",
  },
  {
    q: "How much should a startup spend on marketing?",
    a: "A common benchmark is 15–25% of revenue for growth-stage startups and a higher percentage pre-revenue when runway allows. More importantly, every pound should be going into validated, measurable channels. Our free audit will help you allocate your budget intelligently.",
  },
  {
    q: "What's the best marketing channel for a startup?",
    a: "It depends on your customer profile, price point, and sales cycle. B2B SaaS startups often find the most traction with LinkedIn + content. DTC startups typically start with Meta + Google. Service startups often lead with SEO and direct outreach. We run rapid channel tests to find your specific winning mix.",
  },
  {
    q: "Should I do startup marketing in-house or outsource?",
    a: "A hybrid approach works best. BrandRyo acts as your outsourced senior growth team — setting strategy, executing campaigns, and building the systems — while you hire internally for content and community as you scale. This gives you senior expertise without the full-time cost.",
  },
];

export default function MarketingForStartupsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="who" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#F5F3FF] via-white to-[#EFF6FF] overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1565C0]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-5 text-xs text-[#94A3B8] font-medium"
            >
              <a href="/" className="hover:text-[#1565C0]">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#475569]">Marketing for Startups</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#2D1B69] text-xs font-bold uppercase tracking-widest mb-5">
              Startup Growth Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Growth Marketing for Startups That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D1B69] to-[#29ABE2]">
                Don't Waste Runway.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              We help early-stage and growth-stage startups{" "}
              <strong className="text-[#0F172A]">
                build their first scalable customer acquisition system
              </strong>{" "}
              — from validating channels to building the growth machine that
              takes you from £0 to £1M+ ARR.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: "50+", l: "Startups scaled to £1M+" },
                { v: "6mo", l: "Avg. ROI timeline" },
                { v: "Free", l: "Growth consultancy call" },
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2D1B69] to-[#1565C0] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#2D1B69]/25"
            >
              Get My Free Startup Growth Audit →
            </a>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Startup marketing consultant team working on growth strategy"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH STAGES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              We Meet You Where You Are
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              Our startup marketing strategy shifts as you scale. Different
              stage, different focus, same obsession with ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <div key={i} className={`rounded-3xl border-2 p-8 ${s.color}`}>
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className={`font-black text-xl mb-3 ${s.text}`}>
                  {s.stage}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.tactics.map((t, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-[#475569]"
                    >
                      <span className={`font-black ${s.text}`}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A]">
              Startup Marketing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {startupServices.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-xl hover:border-[#2D1B69]/30 transition-all"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-black text-[#0F172A] mb-3">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-16 px-6 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-black text-white mb-5 leading-relaxed">
            "The difference between startups that reach £1M ARR and those that
            don't is rarely the product. It's almost always{" "}
            <span className="text-[#29ABE2]">
              who they trust to build their growth engine first.
            </span>
            "
          </p>
          <p className="text-[#94A3B8] font-semibold">
            — Ryan Osei, Founder, BrandRyo
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Startup Marketing FAQs
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
            Ready to build your growth engine without burning runway?
          </h2>
          <p className="text-blue-100 mb-8">
            Book a free 15-min startup growth audit. Walk away with a clear,
            channel-specific plan for your first 90 days of growth.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2D1B69] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Startup Growth Audit →
          </a>
        </div>
      </section>

      <footer className="bg-[#0F172A] text-white py-10 px-6 text-center">
        <a href="/" className="flex items-center gap-3 justify-center mb-4">
          <img src={LOGO} alt="BrandRyo" className="h-8 w-auto rounded-lg" />
          <span className="text-xl font-black">
            Brand<span className="text-[#29ABE2]">Ryo</span>
          </span>
        </a>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#94A3B8] mb-4">
          {[
            ["Home", "/"],
            ["Small Business Marketing", "/small-business-marketing"],
            ["Get More Leads", "/get-more-leads"],
            ["Services", "/services"],
            ["Free Consultancy", "/consultancy"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs text-[#475569]">
          © {new Date().getFullYear()} BrandRyo Agency. All rights reserved.
        </p>
      </footer>
    </>
  );
}
