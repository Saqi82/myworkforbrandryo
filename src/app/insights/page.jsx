import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Digital Marketing Insights | Growth Tips Blog | BrandRyo",
  description:
    "Expert digital marketing insights, lead generation tips, paid ads strategies, and revenue growth tactics from BrandRyo's senior growth consultants. Free resources to grow your brand.",
  keywords:
    "digital marketing insights, digital marketing blog, growth marketing insights, lead generation tips, paid ads strategies, how to grow a brand online, digital marketing consultant tips, revenue growth strategies, digital marketing articles 2025",
  alternates: { canonical: "https://brandryo.com/insights" },
  openGraph: {
    title: "Digital Marketing Insights | Growth Tips Blog | BrandRyo",
    description:
      "Expert growth marketing guides, lead gen tips, and revenue strategies from BrandRyo's senior consultants. Free resources to help your brand grow.",
    url: "https://brandryo.com/insights",
    images: [
      {
        url: "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg",
        width: 1200,
        height: 630,
        alt: "BrandRyo digital marketing insights and growth tips blog",
      },
    ],
  },
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const articles = [
  {
    slug: "what-is-a-digital-marketing-consultant",
    title:
      "What Is a Digital Marketing Consultant? (And Why Every Growing Brand Needs One)",
    desc: "A complete guide to what digital marketing consultants do, how they differ from agencies, and how to find one that will genuinely move the needle for your business.",
    category: "Strategy",
    readTime: "8 min read",
    date: "12 Jun 2025",
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=700&q=80",
    keywords: [
      "digital marketing consultant",
      "growth strategy",
      "brand growth",
    ],
  },
  {
    slug: "how-to-generate-leads-for-small-business",
    title:
      "How to Generate More Leads for Your Small Business in 2025 (7 Proven Methods)",
    desc: "Stop waiting for referrals. Here are 7 proven lead generation strategies that small businesses can implement this week to build a predictable, scalable lead pipeline.",
    category: "Lead Generation",
    readTime: "10 min read",
    date: "5 Jun 2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    keywords: [
      "lead generation for small business",
      "how to get more leads",
      "lead generation tips",
    ],
  },
  {
    slug: "how-to-increase-roas",
    title:
      "How to Increase ROAS: 9 Proven Strategies That Actually Work in 2025",
    desc: "ROAS slipping? Or never hit target? Here are 9 data-backed strategies our paid media team uses to increase return on ad spend for brands across Meta, Google and beyond.",
    category: "Paid Ads",
    readTime: "12 min read",
    date: "28 May 2025",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80",
    keywords: [
      "how to increase ROAS",
      "improve return on ad spend",
      "paid ads optimisation",
    ],
  },
];

const topics = [
  { name: "All Topics", active: true },
  { name: "Strategy" },
  { name: "Lead Generation" },
  { name: "Paid Ads" },
  { name: "Retention & LTV" },
  { name: "Email Marketing" },
];

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
          name: "Insights",
          item: "https://brandryo.com/insights",
        },
      ],
    },
    {
      "@type": "Blog",
      name: "BrandRyo Growth Insights",
      description:
        "Expert digital marketing insights, lead generation tips, and revenue growth strategies from BrandRyo's senior growth consultants.",
      url: "https://brandryo.com/insights",
      publisher: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
    },
  ],
};

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />

      {/* NAV */}
      <SiteNav activePage="insights" />

      {/* HERO */}
      <section className="pt-16 pb-12 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE]">
        <div className="max-w-4xl mx-auto text-center">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 text-xs text-[#94A3B8] font-medium"
          >
            <a href="/" className="hover:text-[#1565C0]">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#475569]">Insights</span>
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
            Growth Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-5 leading-tight">
            Expert Insights to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
              Grow Your Brand Faster.
            </span>
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Practical guides, data-backed strategies, and real-world frameworks
            from BrandRyo's senior growth consultants — written to help you
            generate more leads, acquire more customers, and maximise revenue.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <article
                key={i}
                className="group bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden hover:shadow-xl hover:border-[#1565C0]/30 transition-all"
              >
                <a href={`/insights/${a.slug}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={700}
                      height={208}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white text-[#1565C0] text-xs font-black px-3 py-1 rounded-full">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs text-[#94A3B8] font-medium mb-4">
                      <span>{a.date}</span>
                      <span>·</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h2 className="font-black text-[#0F172A] text-lg leading-snug mb-4 group-hover:text-[#1565C0] transition-colors line-clamp-3">
                      {a.title}
                    </h2>
                    <p className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-5">
                      {a.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {a.keywords.map((kw, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 bg-[#EFF6FF] text-[#1565C0] text-xs font-semibold rounded-full"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#1565C0] text-sm font-bold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read Article →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
            Free Growth Intelligence
          </span>
          <h2 className="text-3xl font-black text-[#0F172A] mb-4">
            Get weekly growth insights — straight to your inbox.
          </h2>
          <p className="text-[#475569] mb-8">
            Actionable lead gen tips, paid ads strategies, and retention tactics
            from our senior consultants. No spam. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-5 py-4 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:border-[#1565C0] outline-none transition-all text-[#0F172A] placeholder:text-[#94A3B8]"
            />
            <a
              href="/consultancy"
              className="px-7 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm whitespace-nowrap"
            >
              Subscribe Free
            </a>
          </div>
          <p className="text-[#94A3B8] text-xs mt-3">
            Or book a free 15-min growth call instead.{" "}
            <a
              href="/consultancy"
              className="text-[#1565C0] font-bold hover:underline"
            >
              Claim it here →
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Ready to put these strategies to work for your brand?
          </h2>
          <p className="text-blue-100 mb-6">
            Book a free 15-minute consultancy with one of our senior growth
            consultants. Walk away with a clear action plan.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1565C0] font-black rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Claim My Free Strategy Call →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
