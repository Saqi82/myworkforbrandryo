import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Social Media Marketing Agency | BrandRyo",
  description:
    "BrandRyo is a specialist social media marketing agency running data-driven Facebook, Instagram and TikTok campaigns that generate real customers. Avg. 4.2x ROAS. Free audit.",
  keywords:
    "social media marketing agency, social media marketing for small business, Facebook ads for small business, Instagram ads consultant, TikTok ads management, paid social media marketing, Facebook ads management service, social media advertising agency",
  alternates: { canonical: "https://brandryo.com/social-media-marketing" },
  openGraph: {
    title: "Social Media Marketing Agency | Facebook & Instagram | BrandRyo",
    description:
      "Facebook, Instagram and TikTok ads that generate real customers — not just followers. Expert social media marketing agency. Free audit.",
    url: "https://brandryo.com/social-media-marketing",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo social media marketing agency — Facebook and Instagram ad campaign management",
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
      name: "Social Media Marketing for Small Business",
      url: "https://brandryo.com/social-media-marketing",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo runs data-driven social media advertising campaigns across Facebook, Instagram, and TikTok for small businesses and growth-stage brands.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Social Media Ads Audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is social media marketing worth it for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — social media advertising (especially Meta ads) is one of the most powerful customer acquisition tools for small businesses because of its unmatched audience targeting capabilities. With the right creative, audience, and funnel, even small budgets can deliver a strong positive ROAS.",
          },
        },
        {
          "@type": "Question",
          name: "How much should a small business spend on social media ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend starting with £500–£1,000/month to gather data and find winning creative-audience combinations. Once profitable campaigns are identified, budget can be scaled systematically. Our free audit will recommend a specific budget based on your industry and goals.",
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
          name: "Social Media Marketing",
          item: "https://brandryo.com/social-media-marketing",
        },
      ],
    },
  ],
};

const platforms = [
  {
    name: "Meta Ads (Facebook & Instagram)",
    icon: "📘",
    reach: "3.2B monthly users",
    best: "DTC, e-commerce, local businesses",
    desc: "The #1 paid social platform for customer acquisition. Unrivalled audience targeting, lookalike modelling, and retargeting capabilities.",
    color: "from-[#1565C0] to-[#29ABE2]",
  },
  {
    name: "TikTok Ads",
    icon: "🎵",
    reach: "1.5B monthly users",
    best: "Youth brands, product launches",
    desc: "The fastest-growing ad platform. Huge reach at low CPMs for brands targeting 18–35 buyers with video creative.",
    color: "from-[#2D1B69] to-[#1565C0]",
  },
  {
    name: "LinkedIn Ads",
    icon: "💼",
    reach: "1B professional users",
    best: "B2B, SaaS, professional services",
    desc: "The most powerful B2B social platform. Precision targeting by job title, company size, industry and seniority.",
    color: "from-[#0F172A] to-[#2D1B69]",
  },
  {
    name: "Pinterest Ads",
    icon: "📌",
    reach: "450M monthly users",
    best: "Home, lifestyle, wedding, food",
    desc: "High buyer-intent platform for lifestyle brands. Users actively seek product inspiration — conversion intent is significantly above average.",
    color: "from-[#F7941D] to-[#1565C0]",
  },
];

const services = [
  {
    icon: "🎯",
    title: "Audience Research & Targeting",
    desc: "Deep audience profiling — custom audiences, lookalikes, retargeting segments and interest-based targeting built around your ideal buyer's profile.",
  },
  {
    icon: "🎨",
    title: "Creative Strategy & Production",
    desc: "We develop ad creative (images, carousels, video scripts, UGC briefs) that stops the scroll and drives action — not just impressions.",
  },
  {
    icon: "🔄",
    title: "A/B Testing & Iteration",
    desc: "Systematic creative testing — we run 3–5 ad variants per audience and kill losers fast. Only the strongest performers get budget.",
  },
  {
    icon: "🔁",
    title: "Retargeting Funnels",
    desc: "Multi-stage retargeting sequences for cart abandoners, video viewers, and page visitors — turning warm prospects into paying customers.",
  },
  {
    icon: "📊",
    title: "Pixel & Analytics Setup",
    desc: "Proper conversion tracking, pixel installation, and server-side event tracking so you always know exactly which ads are generating revenue.",
  },
  {
    icon: "📈",
    title: "Monthly Scaling Strategy",
    desc: "As campaigns find profitability, we scale budget systematically — increasing spend without sacrificing ROAS through horizontal and vertical scaling.",
  },
];

const faqs = [
  {
    q: "Should small businesses use Facebook or Instagram ads?",
    a: "Both run through Meta Ads Manager and are managed simultaneously. Facebook tends to perform better for older demographics and B2B lead generation. Instagram excels for visual products, lifestyle brands and younger audiences. We'll recommend the right split based on your target customer profile.",
  },
  {
    q: "How long before social media ads are profitable?",
    a: "Typically 4–8 weeks. The first 2–4 weeks are for data gathering — finding winning audience-creative combinations. By week 6–8, most BrandRyo clients are seeing consistent positive ROAS. Scaling begins once campaigns are proven profitable.",
  },
  {
    q: "What makes a good Facebook ad for a small business?",
    a: "The best Facebook ads for small businesses combine: (1) a thumb-stopping opening 2 seconds, (2) a clear, specific value proposition, (3) strong social proof, (4) an irresistible offer, and (5) a single, clear CTA. Our creative team has a tested framework that consistently outperforms generic ads.",
  },
  {
    q: "Do I need a big budget for social media advertising?",
    a: "No. We've generated strong results for clients with as little as £500/month. What matters more than budget size is how intelligently it's allocated. Our free audit will tell you the minimum viable budget for your specific goals.",
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="solutions" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] overflow-hidden">
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
              <span className="text-[#475569]">Social Media Marketing</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              Paid Social Media Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Social Media Marketing Agency
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              We run{" "}
              <strong className="text-[#0F172A]">
                data-driven Facebook, Instagram and TikTok ad campaigns
              </strong>{" "}
              for small businesses and growth brands — built on real audience
              data, creative testing, and conversion-focused funnels.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: "4.2x", l: "Avg. ROAS" },
                { v: "3.2B", l: "Meta Reach" },
                { v: "98%", l: "Client Retention" },
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
              Get My Free Social Ads Audit →
            </a>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#1565C0]/15">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
                alt="Social media marketing for small business - Facebook and Instagram ads"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/30 to-transparent rounded-[32px]" />
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">
              We Manage Ads Across Every Major Social Platform
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((p, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{p.icon}</span>
                  <div>
                    <h3 className="font-black text-white text-lg mb-1">
                      {p.name}
                    </h3>
                    <div className="flex gap-3 mb-3">
                      <span className="text-xs text-[#29ABE2] font-bold">
                        {p.reach}
                      </span>
                      <span className="text-xs text-[#94A3B8]">|</span>
                      <span className="text-xs text-[#94A3B8] font-medium">
                        Best for: {p.best}
                      </span>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              What's Included in Our Social Media Management
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-xl hover:border-[#1565C0]/30 hover:bg-white transition-all"
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

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Social Media Advertising FAQs
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-5">
            Ready to turn social media into a customer acquisition machine?
          </h2>
          <p className="text-blue-100 mb-8">
            Book a free 15-min social ads audit. We'll review your current
            campaigns and tell you exactly what to fix.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Social Ads Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
