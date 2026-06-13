import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "How to Increase ROAS: 9 Proven Strategies 2025 | BrandRyo",
  description:
    "ROAS not hitting target? 9 data-backed strategies our paid media team uses to increase return on ad spend across Meta, Google and beyond. Free ROAS audit from BrandRyo.",
  keywords:
    "how to increase ROAS, improve return on ad spend, ROAS optimisation, increase Facebook ads ROAS, Google Ads ROAS improvement, paid ads ROAS tips, how to improve ROAS 2025, ROAS consultant, increase ROAS Meta ads Google",
  alternates: {
    canonical: "https://brandryo.com/insights/how-to-increase-roas",
  },
  openGraph: {
    title: "How to Increase ROAS: 9 Proven Strategies That Work in 2025",
    description:
      "9 data-backed strategies to increase your ROAS on Meta, Google and beyond — from BrandRyo's paid media team. Free ROAS audit.",
    url: "https://brandryo.com/insights/how-to-increase-roas",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "How to increase ROAS — paid ads performance dashboard showing ROAS improvement strategies 2025",
      },
    ],
  },
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const strategies = [
  {
    num: "01",
    title: "Calculate Your True Break-Even ROAS First",
    desc: "Before you try to 'improve' ROAS, you need to know what ROAS you actually need to be profitable. Your break-even ROAS = 1 ÷ your gross margin. If your gross margin is 40%, your break-even ROAS is 2.5x. Everything above that is profit. Most brands optimise for ROAS targets that feel good but aren't anchored in their actual unit economics. Get this number right first.",
    impact: "Foundation: sets your true target",
    icon: "📐",
  },
  {
    num: "02",
    title: "Improve Your Landing Page Conversion Rate",
    desc: "ROAS is a ratio: revenue ÷ ad spend. Most brands try to improve it by reducing spend — when the bigger lever is increasing the revenue side. A landing page that converts at 3% vs 6% doubles your ROAS without touching your ad account. Focus on: clearer headline, stronger social proof, faster load speed, and a single focused CTA. Even 1% CVR improvement can move ROAS by 30–50%.",
    impact: "30–50% ROAS lift from CVR improvement",
    icon: "🎯",
  },
  {
    num: "03",
    title: "Eliminate Wasted Spend With Audience Exclusions",
    desc: "One of the fastest ROAS wins: systematically exclude audiences that don't convert. On Meta: exclude recent purchasers from acquisition campaigns. Exclude audiences with low-intent behaviour signals. On Google: add negative keywords every week to cut irrelevant search traffic. Brands that do this rigorously typically see a 15–25% CAC reduction within 30 days.",
    impact: "15–25% CAC reduction in 30 days",
    icon: "✂️",
  },
  {
    num: "04",
    title: "Test More Creatives — Faster",
    desc: "Creative is the #1 variable in paid performance. A single winning creative can 2–3x your ROAS overnight. Most brands test too slowly — 1–2 new creatives per month. High-performing paid teams ship 8–15 new creative variations per month and quickly kill what doesn't work. Test different hooks, formats (video vs static vs carousel), and value propositions — not just different images.",
    impact: "2–3x ROAS from a single winning creative",
    icon: "🎨",
  },
  {
    num: "05",
    title: "Use First-Party Data for Smarter Audience Targeting",
    desc: "Third-party cookie data is increasingly unreliable. Brands that build and leverage first-party data — customer email lists, purchase history, CRM segments — for Custom Audiences and Lookalikes consistently outperform those relying on platform interest targeting alone. Upload your highest-LTV customer segment as a seed audience for lookalike scaling. This alone often improves ROAS by 20–40%.",
    impact: "20–40% ROAS improvement",
    icon: "💾",
  },
  {
    num: "06",
    title: "Restructure Your Campaign Funnel",
    desc: "Running only bottom-funnel conversion campaigns is a common ROAS killer. Without warming audiences first, your CPC is higher and your CVR is lower. Build a proper three-stage funnel: (1) Awareness content for cold audiences, (2) Consideration retargeting for engaged viewers, (3) Conversion campaigns for warm traffic. This lowers overall CPM and CAC — improving blended ROAS significantly.",
    impact: "Avg. 35% blended ROAS improvement",
    icon: "🏗️",
  },
  {
    num: "07",
    title: "Increase Average Order Value With Post-Purchase Upsells",
    desc: "ROAS = revenue ÷ spend. Increasing your average order value (AOV) through upsells, order bumps, and bundle offers directly increases ROAS without changing a single campaign setting. A post-purchase upsell that converts at 15–20% can add $20–50 to every order. If your average order value goes from $80 to $100, your ROAS goes from 3x to 3.75x — from the same ad spend.",
    impact: "15–25% AOV lift = direct ROAS improvement",
    icon: "📦",
  },
  {
    num: "08",
    title: "Fix Your Attribution to See What's Actually Working",
    desc: "Misattribution is one of the most common hidden ROAS killers. If your tracking is broken, you're optimising in the dark — scaling what appears to work while cutting campaigns that are actually driving revenue. Implement a clean UTM structure, use platform-native attribution alongside server-side tracking (Conversions API for Meta, Enhanced Conversions for Google), and cross-reference with GA4 and your backend revenue data.",
    impact: "Reveals true performance vs reported ROAS",
    icon: "🔍",
  },
  {
    num: "09",
    title: "Include Post-Purchase LTV in Your ROAS Calculation",
    desc: "If you only measure ROAS on the first purchase, you're systematically undervaluing your best customers. A customer who buys once for $60 looks identical in ROAS reporting to a customer who buys 8 times — until month 6. Build a 90-day LTV model and use it to inform which audiences and creatives are actually delivering the best customers — not just the cheapest first conversions.",
    impact: "Often reveals 40–60% undervalued customer cohorts",
    icon: "📈",
  },
];

export default function ArticleIncreaseROAS() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Increase ROAS: 9 Proven Strategies That Work in 2025",
            description:
              "9 data-backed strategies to increase your ROAS on Meta, Google and beyond.",
            image:
              "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
            datePublished: "2025-05-28",
            dateModified: "2025-05-28",
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
              "@id": "https://brandryo.com/insights/how-to-increase-roas",
            },
          }),
        }}
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
                name: "How to Increase ROAS",
                item: "https://brandryo.com/insights/how-to-increase-roas",
              },
            ],
          }),
        }}
      />

      {/* NAV */}
      <SiteNav activePage="insights" />

      {/* HERO */}
      <section className="pt-14 pb-0 bg-gradient-to-br from-[#F5F3FF] via-white to-white">
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
            <span className="text-[#475569]">How to Increase ROAS</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-[#FFF7ED] text-[#F7941D] text-xs font-bold rounded-full uppercase tracking-widest mb-5">
            Paid Ads
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight mb-5">
            How to Increase ROAS: 9 Proven Strategies That Actually Work in 2025
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#94A3B8] font-medium mb-8">
            <span>By BrandRyo Paid Media Team</span>
            <span>·</span>
            <span>28 May 2025</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[24px] overflow-hidden shadow-xl shadow-[#1565C0]/10">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
              alt="How to increase ROAS — paid ads dashboard"
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
          <div className="bg-[#FFF7ED] border-l-4 border-[#F7941D] rounded-xl p-6 mb-10">
            <p className="text-[#92400E] font-bold text-base leading-relaxed">
              <strong>The truth about ROAS:</strong> Most brands try to improve
              ROAS by tweaking bids or switching audiences. The real leverage is
              in your landing page, your creative, your offer, and your LTV —
              not your ad settings. Here are 9 strategies that move the needle.
            </p>
          </div>

          {/* Strategies */}
          <div className="space-y-12">
            {strategies.map((s, i) => (
              <div key={i}>
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F7941D] to-[#1565C0] flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-black text-xs">
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-[#0F172A] leading-tight">
                      {s.title}
                    </h2>
                    <span className="inline-block mt-1 text-xs font-black text-[#F7941D] bg-[#FFF7ED] px-3 py-1 rounded-full">
                      {s.impact}
                    </span>
                  </div>
                </div>
                <p className="text-[#475569] leading-relaxed pl-0 md:pl-[76px]">
                  {s.desc}
                </p>
                {i < strategies.length - 1 && (
                  <hr className="mt-10 border-[#F1F5F9]" />
                )}
              </div>
            ))}
          </div>

          {/* Summary box */}
          <div className="mt-14 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8">
            <h3 className="font-black text-[#0F172A] text-xl mb-5">
              Quick ROAS Improvement Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Calculate your true break-even ROAS",
                "Optimise landing page CVR first",
                "Add audience exclusions weekly",
                "Ship 8–15 new creatives per month",
                "Build lookalikes from your top-LTV customers",
                "Build a 3-stage awareness → conversion funnel",
                "Add post-purchase upsells to increase AOV",
                "Fix attribution with CAPI + Enhanced Conversions",
                "Build a 90-day LTV model by cohort",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#475569]"
                >
                  <span className="text-[#1565C0] font-black flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl overflow-hidden bg-gradient-to-r from-[#F7941D] to-[#1565C0] p-8 text-white text-center">
            <h3 className="text-2xl font-black mb-3">
              Want us to audit your ad accounts for free?
            </h3>
            <p className="text-orange-100 mb-6">
              Book a free 15-minute paid ads audit. We'll identify your biggest
              ROAS leaks and give you a prioritised action plan — before the
              call ends.
            </p>
            <a
              href="/consultancy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1565C0] font-black rounded-full hover:scale-105 transition-all shadow-xl"
            >
              Get My Free ROAS Audit →
            </a>
          </div>

          {/* Author */}
          <div className="flex items-start gap-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mt-10">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
              alt="Alicia Torres"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              width={56}
              height={56}
            />
            <div>
              <p className="font-black text-[#0F172A] mb-1">Alicia Torres</p>
              <p className="text-xs text-[#475569] font-medium mb-2">
                Head of Paid Media, BrandRyo
              </p>
              <p className="text-xs text-[#475569] leading-relaxed">
                Former performance lead at a top-10 global agency. Has managed
                $40M+ in ad spend across Meta, Google, and LinkedIn —
                specialising in ROAS optimisation for DTC and SaaS brands.
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
                  href: "/insights/how-to-generate-leads-for-small-business",
                  title: "7 Proven Lead Generation Methods for Small Business",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
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
