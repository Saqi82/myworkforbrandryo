import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Lead Generation for Small Business 2025 | BrandRyo",
  description:
    "7 proven lead generation strategies for small businesses in 2025. Build a predictable, scalable lead pipeline — each method tested across 250+ brand campaigns. Free audit.",
  keywords:
    "lead generation for small business, how to generate leads for small business, how to get more leads, b2b lead generation tips, online lead generation for small business, generate quality leads, lead generation strategy 2025, small business leads online",
  alternates: {
    canonical:
      "https://brandryo.com/insights/how-to-generate-leads-for-small-business",
  },
  openGraph: {
    title:
      "Lead Generation for Small Business 2025 — 7 Proven Methods | BrandRyo",
    description:
      "7 proven lead generation methods for small businesses — tested across 250+ brand campaigns. Free lead gen audit from BrandRyo.",
    url: "https://brandryo.com/insights/how-to-generate-leads-for-small-business",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lead generation strategy for small business — BrandRyo growth insights",
      },
    ],
  },
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Generate More Leads for Your Small Business in 2025 (7 Proven Methods)",
  description:
    "7 proven lead generation strategies for small businesses — each tested across 250+ brand campaigns.",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  datePublished: "2025-06-05",
  dateModified: "2025-06-05",
  author: {
    "@type": "Organization",
    name: "BrandRyo",
    url: "https://brandryo.com",
  },
  publisher: {
    "@type": "Organization",
    name: "BrandRyo",
    logo: { "@type": "ImageObject", url: LOGO },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://brandryo.com/insights/how-to-generate-leads-for-small-business",
  },
};

const methods = [
  {
    num: "01",
    title: "Build a Lead Magnet That Actually Converts",
    desc: "Most small businesses have a contact form and call it a lead generation strategy. That's not enough. A high-converting lead magnet — a free guide, audit, calculator, or mini-course — gives your ideal customer genuine value upfront in exchange for their details. The key: make it hyper-specific to your customer's #1 pain point. A generic 'free eBook' converts at 1–2%. A 'Free 7-Point Funnel Audit for E-commerce Brands' converts at 8–15%.",
    impact: "Avg. 8–15% opt-in rate",
    icon: "🧲",
  },
  {
    num: "02",
    title: "Optimise Your Landing Pages for Conversion",
    desc: "If you're sending paid or organic traffic to your homepage, you're losing leads. Create dedicated landing pages for each traffic source and audience segment — with a single, clear CTA, compelling social proof, and a form with no more than 3 fields. Even a basic landing page optimisation exercise can lift conversion rates by 20–40% overnight.",
    impact: "20–40% CVR uplift",
    icon: "🎯",
  },
  {
    num: "03",
    title: "Run Targeted Paid Ads to Your Best-Fit Audience",
    desc: "Meta and Google Ads are still the fastest way to generate qualified leads at scale — but only if you target the right audience with the right message. Start with a small test budget ($500–$1,000) focused on your highest-converting customer profile. Don't broad-match. Don't guess. Use your best existing customers as a template for lookalike audiences.",
    impact: "Avg. 3.2x lead volume increase",
    icon: "📣",
  },
  {
    num: "04",
    title: "Use Email to Nurture Leads You Already Have",
    desc: "Most small businesses sit on a goldmine of unconverted leads in their email list or CRM. A well-structured 5–7 email nurture sequence — sent to leads who enquired but didn't convert — can re-activate 10–25% of that list. Address their objections, share case studies, offer a low-friction next step (like a free call), and you'll convert prospects that were already halfway there.",
    impact: "10–25% re-activation rate",
    icon: "✉️",
  },
  {
    num: "05",
    title: "Create SEO Content That Attracts High-Intent Visitors",
    desc: "A single well-optimised blog post targeting a low-competition, high-intent keyword can generate qualified leads for years — for free. Focus on questions your ideal customers are already Googling. Use long-tail keywords (3–5 words) with clear commercial intent. For example: 'best [your service] for [niche]' or 'how to [problem you solve]'. Done right, SEO compounds over time into your most reliable lead channel.",
    impact: "Compounding leads over 12–24 months",
    icon: "🔍",
  },
  {
    num: "06",
    title: "Leverage Referral & Partnership Programmes",
    desc: "Referred leads convert at 3–5x the rate of cold leads — and cost you almost nothing to acquire. Build a simple referral programme that rewards existing clients for introductions. A 10% service credit or a gift card is often enough. On the partnership side: find businesses serving the same audience as you (but not competing) and build reciprocal referral relationships.",
    impact: "3–5x higher conversion rate",
    icon: "🤝",
  },
  {
    num: "07",
    title: "Offer a Free Consultation or Audit",
    desc: "The single highest-converting lead generation tactic for service businesses is a free, low-friction consultation offer. It removes the 'what am I getting?' objection completely. The free call is the lead magnet. At BrandRyo, our free 15-minute growth consultancy converts at over 20% to a paid engagement — because the value is clear and the risk is zero. Make it easy to say yes.",
    impact: "20%+ conversion to paid",
    icon: "📅",
  },
];

export default function ArticleLeadGeneration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
              {
                "@type": "ListItem",
                position: 3,
                name: "How to Generate Leads for Small Business",
                item: "https://brandryo.com/insights/how-to-generate-leads-for-small-business",
              },
            ],
          }),
        }}
      />

      {/* NAV */}
      <SiteNav activePage="insights" />

      {/* HERO */}
      <section className="pt-14 pb-0 bg-gradient-to-br from-[#EFF6FF] via-white to-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 text-xs text-[#94A3B8] font-medium"
          >
            <a href="/" className="hover:text-[#1565C0]">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/insights" className="hover:text-[#1565C0]">
              Insights
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#475569]">
              Lead Generation for Small Business
            </span>
          </nav>
          <span className="inline-block px-3 py-1 bg-[#EFF6FF] text-[#1565C0] text-xs font-bold rounded-full uppercase tracking-widest mb-5">
            Lead Generation
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight mb-5">
            How to Generate More Leads for Your Small Business in 2025 (7 Proven
            Methods)
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#94A3B8] font-medium mb-8">
            <span>By BrandRyo Team</span>
            <span>·</span>
            <span>5 Jun 2025</span>
            <span>·</span>
            <span>10 min read</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[24px] overflow-hidden shadow-xl shadow-[#1565C0]/10">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Lead generation strategy for small business"
              className="w-full h-72 md:h-96 object-cover"
              width={1200}
              height={384}
            />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#EFF6FF] border-l-4 border-[#1565C0] rounded-xl p-6 mb-10">
            <p className="text-[#1565C0] font-bold text-base leading-relaxed">
              Most small businesses rely almost entirely on referrals and
              word-of-mouth. That's not a lead generation strategy — it's hope.
              Here are 7 methods that actually build a predictable, scalable
              pipeline.
            </p>
          </div>

          {/* Methods */}
          <div className="space-y-12">
            {methods.map((m, i) => (
              <div key={i}>
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1565C0] to-[#29ABE2] flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-[#1565C0]/20">
                    <span className="text-white font-black text-xs">
                      {m.num}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0F172A] leading-tight">
                      {m.title}
                    </h2>
                    <span className="inline-block mt-1 text-xs font-black text-[#1565C0] bg-[#EFF6FF] px-3 py-1 rounded-full">
                      {m.impact}
                    </span>
                  </div>
                </div>
                <p className="text-[#475569] leading-relaxed pl-0 md:pl-[76px]">
                  {m.desc}
                </p>
                {i < methods.length - 1 && (
                  <hr className="mt-10 border-[#F1F5F9]" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl overflow-hidden bg-gradient-to-r from-[#1565C0] to-[#29ABE2] p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-3">
              Not sure which method to start with?
            </h3>
            <p className="text-blue-100 mb-6">
              Book a free 15-minute lead generation audit with one of our senior
              consultants. We'll tell you exactly which of these 7 methods will
              deliver the fastest ROI for your specific business — before the
              call ends.
            </p>
            <a
              href="/consultancy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1565C0] font-black rounded-full hover:scale-105 transition-all shadow-xl"
            >
              Get My Free Lead Gen Audit →
            </a>
          </div>

          {/* Author */}
          <div className="flex items-start gap-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mt-10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              alt="Ryan Osei"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              width={56}
              height={56}
            />
            <div>
              <p className="font-black text-[#0F172A] mb-1">Ryan Osei</p>
              <p className="text-xs text-[#475569] font-medium mb-2">
                Founder & Head of Growth Strategy, BrandRyo
              </p>
              <p className="text-xs text-[#475569] leading-relaxed">
                8+ years helping brands build scalable lead generation systems.
                Has generated 250k+ leads across 250+ brand campaigns.
              </p>
            </div>
          </div>

          {/* Related */}
          <div className="mt-10">
            <h3 className="font-black text-[#0F172A] text-xl mb-5">
              Continue Reading
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  href: "/insights/what-is-a-digital-marketing-consultant",
                  title: "What Is a Digital Marketing Consultant?",
                  img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&q=80",
                },
                {
                  href: "/insights/how-to-increase-roas",
                  title: "How to Increase ROAS: 9 Proven Strategies for 2025",
                  img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
                },
              ].map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  className="group flex items-start gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 hover:border-[#1565C0]/40 hover:shadow-md transition-all"
                >
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    width={64}
                    height={64}
                  />
                  <p className="font-bold text-[#0F172A] text-sm leading-snug group-hover:text-[#1565C0] transition-colors">
                    {r.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
