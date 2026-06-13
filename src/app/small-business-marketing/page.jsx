import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Digital Marketing for Small Business | BrandRyo Agency",
  description:
    "BrandRyo provides specialist digital marketing for small business — affordable, high-ROI systems that generate leads, customers, and revenue. 250+ small businesses scaled. Free audit.",
  keywords:
    "digital marketing for small business, small business marketing, marketing consultant for small business, online marketing for small business, affordable digital marketing, small business growth consultant, digital marketing help for small business, small business marketing agency",
  alternates: { canonical: "https://brandryo.com/small-business-marketing" },
  openGraph: {
    title: "Digital Marketing for Small Business | BrandRyo Agency",
    description:
      "Affordable, high-ROI digital marketing built specifically for small businesses. Get a free growth audit from BrandRyo's specialist consultants.",
    url: "https://brandryo.com/small-business-marketing",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo digital marketing for small business — growth strategy session",
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
      name: "Digital Marketing for Small Business",
      url: "https://brandryo.com/small-business-marketing",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo provides specialist digital marketing consultancy for small businesses — building affordable, high-ROI lead generation, paid ads, email, and SEO strategies tailored to smaller budgets and ambitious growth goals.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Small Business Marketing Audit",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What digital marketing should a small business focus on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most small businesses, the highest-ROI starting point is: (1) Google Ads to capture local/search intent, (2) a high-converting landing page and lead capture funnel, and (3) an email welcome and nurture sequence. Once these three are working, we layer in social media advertising and SEO for compounding growth.",
          },
        },
        {
          "@type": "Question",
          name: "How much should a small business spend on digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A general benchmark is 5–10% of revenue. However, the more important metric is your target cost-per-customer versus your customer lifetime value. BrandRyo's free consultancy will calculate your ideal marketing budget based on your specific numbers.",
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
          name: "Small Business Marketing",
          item: "https://brandryo.com/small-business-marketing",
        },
      ],
    },
  ],
};

const challenges = [
  {
    icon: "💰",
    title: "Limited Budget",
    solution:
      "We maximise every pound with data-first channel selection — no wasted spend on channels that don't suit your business model.",
  },
  {
    icon: "⏰",
    title: "No Time to Learn Marketing",
    solution:
      "We handle everything — strategy, execution, and reporting. You focus on running your business.",
  },
  {
    icon: "🤔",
    title: "Don't Know Where to Start",
    solution:
      "Our free audit gives you a clear, prioritised roadmap — starting with the highest-ROI activities for your specific situation.",
  },
  {
    icon: "📊",
    title: "Can't Measure What's Working",
    solution:
      "We set up proper tracking from day one — so every pound you spend is attributed to a real business outcome.",
  },
  {
    icon: "🏃",
    title: "Losing Customers to Bigger Competitors",
    solution:
      "We find the gaps your competitors ignore — niche keywords, underserved audiences, and lower-competition channels where you can dominate.",
  },
  {
    icon: "🔄",
    title: "Inconsistent Lead Flow",
    solution:
      "We build the automated systems that deliver a steady, predictable flow of qualified leads — not feast-or-famine cycles.",
  },
];

const services = [
  {
    icon: "🎯",
    name: "Lead Generation",
    href: "/get-more-leads",
    desc: "Build a consistent pipeline of high-quality leads without relying on referrals.",
  },
  {
    icon: "📣",
    name: "Google & Social Ads",
    href: "/google-ads-management",
    desc: "Profitable paid campaigns that acquire customers at a CAC your margins can sustain.",
  },
  {
    icon: "✉️",
    name: "Email Marketing",
    href: "/email-marketing",
    desc: "Automated email flows that generate revenue while you sleep.",
  },
  {
    icon: "🔍",
    name: "SEO for Small Business",
    href: "/insights",
    desc: "Build organic traffic that compounds over time — without ongoing ad spend.",
  },
  {
    icon: "📱",
    name: "Social Media Marketing",
    href: "/social-media-marketing",
    desc: "Facebook and Instagram ads built for small business budgets and goals.",
  },
  {
    icon: "📊",
    name: "Analytics & Reporting",
    href: "/consultancy",
    desc: "Crystal-clear weekly reports showing exactly what's working and what to do next.",
  },
];

const faqs = [
  {
    q: "Can small businesses compete with big brands online?",
    a: "Absolutely — in fact, small businesses have real advantages online. Speed, authenticity, niche expertise, and personal relationships are things big brands can't easily replicate. With the right strategy, you can dominate your specific niche and outperform brands with 10x your budget.",
  },
  {
    q: "What's the most cost-effective digital marketing for small businesses?",
    a: "Email marketing consistently delivers the highest ROI ($42 per $1 spent). Google Ads captures high-intent buyers efficiently. Content and SEO compound over time. The best approach combines quick-win paid channels with long-term organic strategies.",
  },
  {
    q: "How long before I see results from digital marketing?",
    a: "Paid channels (Google Ads, social ads) can start generating leads within days. Email flows take 2–4 weeks to activate. SEO-driven organic traffic builds over 3–6 months. A comprehensive strategy delivers both quick wins and long-term compounding growth.",
  },
  {
    q: "Do I need a dedicated marketing team as a small business?",
    a: "Not with BrandRyo. Our senior growth consultants act as your outsourced marketing team — delivering senior-level strategy and execution at a fraction of the cost of an in-house hire.",
  },
];

export default function SmallBusinessMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="who" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#FFF7ED] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F7941D]/8 blur-[120px] rounded-full pointer-events-none" />
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
              <span className="text-[#475569]">Small Business Marketing</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FDE68A] text-[#F7941D] text-xs font-bold uppercase tracking-widest mb-5">
              Small Business Growth Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Digital Marketing for Small Business —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#1565C0]">
                That Actually Pays for Itself.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              You don't need a big-agency budget to win online. BrandRyo builds{" "}
              <strong className="text-[#0F172A]">
                affordable, data-driven marketing systems
              </strong>{" "}
              specifically for small businesses — designed to deliver measurable
              ROI from week one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F7941D] to-[#1565C0] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg"
              >
                Get My Free Marketing Audit →
              </a>
            </div>
            <p className="text-xs text-[#94A3B8] mt-3">
              250+ small businesses scaled. No fluff. Real results.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="Digital marketing strategy for small business owner"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-xl font-black text-[#F7941D]">250+</div>
              <div className="text-xs text-[#475569] font-semibold">
                Small Businesses Scaled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              The 6 Small Business Marketing Challenges We Solve
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              We've heard every one of these from our clients. And we have a
              proven system to fix each.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-lg hover:border-[#1565C0]/30 transition-all"
              >
                <span className="text-3xl mb-4 block">{c.icon}</span>
                <h3 className="font-black text-[#0F172A] mb-3">{c.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {c.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              Our Small Business Marketing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-xl hover:border-[#1565C0]/40 transition-all group"
              >
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-black text-[#0F172A] mb-2 group-hover:text-[#1565C0] transition-colors">
                  {s.name} →
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {s.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-6 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
          <p className="text-xl font-black text-white leading-relaxed mb-6">
            "As a small business owner, I felt completely lost with digital
            marketing. BrandRyo broke everything down, built a clear system, and
            within 90 days we had more leads than we could handle. Best
            investment we've made."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
              alt="Emma Clarke testimonial"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div className="text-left">
              <p className="font-black text-white text-sm">Emma Clarke</p>
              <p className="text-xs text-[#94A3B8]">
                Owner, Clarke & Co. Interiors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Small Business Marketing FAQs
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
            Ready to grow your small business online — without wasting budget?
          </h2>
          <p className="text-orange-100 mb-8">
            Book a free 15-min marketing audit. We'll tell you exactly where to
            focus for the fastest ROI.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Marketing Audit →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
