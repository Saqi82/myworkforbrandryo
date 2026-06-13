import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Customer Acquisition Consultant | Paid Ads | BrandRyo",
  description:
    "BrandRyo's customer acquisition consultants run high-ROAS campaigns on Meta, Google and LinkedIn. Avg. 4.2x ROAS, 42% CAC reduction. Free paid ads audit — no obligation.",
  keywords:
    "customer acquisition consultant, paid ads consultant, Facebook ads agency, Google ads management, customer acquisition strategy, reduce customer acquisition cost, paid media agency, ROAS optimisation consultant, Meta ads agency, LinkedIn ads consultant",
  alternates: {
    canonical: "https://brandryo.com/services/customer-acquisition",
  },
  openGraph: {
    title: "Customer Acquisition Consultant | Paid Ads Agency | BrandRyo",
    description:
      "Data-driven paid campaigns across Meta, Google & LinkedIn. Customer acquisition consultants that profitably convert cold audiences into loyal customers.",
    url: "https://brandryo.com/services/customer-acquisition",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo customer acquisition consultant managing paid ads campaigns across Meta and Google",
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
      name: "Customer Acquisition & Paid Media",
      description:
        "Hyper-targeted paid campaigns across Meta, Google and LinkedIn, engineered to acquire loyal customers at a profitable CAC.",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      serviceType: "Customer Acquisition Consultancy",
      areaServed: "Worldwide",
      url: "https://brandryo.com/services/customer-acquisition",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Paid Ads Audit",
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
          name: "Customer Acquisition",
          item: "https://brandryo.com/services/customer-acquisition",
        },
      ],
    },
  ],
};

const channels = [
  {
    name: "Meta Ads (Facebook & Instagram)",
    icon: "📘",
    desc: "Hyper-targeted campaigns leveraging Meta's full-funnel ad ecosystem — from awareness video through to dynamic product retargeting and lookalike scaling.",
    metric: "Avg. 4.2x ROAS",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
  },
  {
    name: "Google Ads (Search & Shopping)",
    icon: "🔍",
    desc: "High-intent search campaigns and Google Shopping that capture buyers at the exact moment they're ready to purchase — with zero wasted spend on irrelevant clicks.",
    metric: "Avg. 38% lower CPC",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&q=80",
  },
  {
    name: "LinkedIn Ads",
    icon: "💼",
    desc: "B2B-focused LinkedIn campaigns that put your offer in front of decision-makers and senior buyers by title, company size, and industry.",
    metric: "Avg. 3.1x pipeline growth",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80",
  },
  {
    name: "TikTok Ads",
    icon: "🎵",
    desc: "Creative-first TikTok campaigns that reach high-spend demographics with authentic content that converts — especially for DTC and lifestyle brands.",
    metric: "2.8x avg. ROAS for DTC",
    img: "https://images.unsplash.com/photo-1591096311471-7f4e7f8f9bb0?w=500&q=80",
  },
];

const deliverables = [
  {
    icon: "📊",
    title: "Full Account Audit",
    desc: "Deep-dive analysis of every current campaign, audience, creative, and spend allocation.",
  },
  {
    icon: "🎯",
    title: "Custom Audience Build",
    desc: "First-party data audiences, lookalikes, and interest stacks built from your real customer profile.",
  },
  {
    icon: "🎨",
    title: "Creative Strategy & Production",
    desc: "Ad creatives — video, static, carousel — written and designed to convert, not just impress.",
  },
  {
    icon: "⚙️",
    title: "Campaign Architecture",
    desc: "Full funnel campaign structure from cold awareness through to retargeting and upsell.",
  },
  {
    icon: "🔬",
    title: "Ongoing A/B Testing",
    desc: "Systematic creative and audience testing to find the combinations that drive the lowest CAC.",
  },
  {
    icon: "📈",
    title: "Weekly Performance Reporting",
    desc: "Clear, honest reporting on ROAS, CAC, CPA, and revenue — every Monday morning.",
  },
];

const results = [
  { metric: "4.2x", label: "Avg. ROAS", sub: "across managed ad accounts" },
  {
    metric: "42%",
    label: "Avg. CAC Reduction",
    sub: "within 90 days of onboarding",
  },
  {
    metric: "$40M+",
    label: "Ad Spend Managed",
    sub: "across Meta, Google & LinkedIn",
  },
  {
    metric: "98%",
    label: "Client Retention Rate",
    sub: "across all paid media clients",
  },
];

const faqs = [
  {
    q: "What is a customer acquisition consultant?",
    a: "A customer acquisition consultant is a paid media specialist who builds and manages campaigns across platforms like Meta and Google, with the specific goal of acquiring new customers at a profitable cost. At BrandRyo, we manage the full picture — creative, targeting, bidding, and attribution — so you know exactly what's working.",
  },
  {
    q: "What's a good ROAS and how do you improve it?",
    a: "A 'good' ROAS depends on your margins and business model. Our process starts by calculating your break-even ROAS, then engineering campaigns to exceed it. We improve ROAS through creative testing, audience refinement, bid optimisation, and landing page CRO.",
  },
  {
    q: "Do you require a minimum ad budget?",
    a: "We work with clients from $5,000/month ad spend upwards. That said, our free consultancy call will give you a clear recommendation on what budget is right for your goals — before you commit to anything.",
  },
  {
    q: "How long does it take to see results from paid ads?",
    a: "We typically see initial data within the first 2 weeks. Meaningful ROAS improvements and trend data usually emerge by the end of month 1. By month 2–3, campaigns are fully optimised and compounding.",
  },
];

export default function CustomerAcquisitionPage() {
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
      <section className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-[#FFF7ED] via-white to-[#EFF6FF] overflow-hidden">
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
              <span className="text-[#475569]">Customer Acquisition</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FDE68A] text-[#F7941D] text-xs font-bold uppercase tracking-widest mb-5">
              Customer Acquisition & Paid Media
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Customer Acquisition Consultant —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] to-[#1565C0]">
                Find Your Ideal Customers and Convert Them Profitably.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Our customer acquisition consultants build and manage campaigns
              across Meta, Google, LinkedIn and TikTok — using{" "}
              <strong className="text-[#0F172A]">
                your real customer data
              </strong>{" "}
              to find and convert high-value buyers at a CAC that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F7941D] to-[#1565C0] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg"
              >
                Get a Free Paid Ads Audit →
              </a>
            </div>
            <p className="text-xs text-[#94A3B8] mt-3">
              We'll review your current ad accounts for free.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#F7941D]/15">
              <img
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
                alt="Paid ads customer acquisition strategy by BrandRyo"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#F7941D]">4.2x</div>
              <div className="text-xs text-[#475569] font-semibold">
                Average ROAS
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#1565C0]">–42%</div>
              <div className="text-xs text-[#475569] font-semibold">
                CAC Reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {results.map((r, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-[#F7941D] mb-1">
                {r.metric}
              </div>
              <div className="text-sm font-bold text-white mb-1">{r.label}</div>
              <div className="text-xs text-[#94A3B8]">{r.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">
              Channels We Dominate For You
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              We don't spread your budget thin. We focus on the channels where
              your ideal customers actually live — and we go deep.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((c, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl hover:border-[#F7941D]/30 transition-all bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <h3 className="font-black text-white text-lg">{c.name}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-[#475569] text-sm leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <span className="text-xs font-black text-[#F7941D] bg-[#FFF7ED] px-3 py-1.5 rounded-full">
                    {c.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              What's Included in Every Engagement
            </h2>
            <p className="text-[#475569] max-w-lg mx-auto">
              No hidden costs. No junior account managers. Just senior
              strategists doing the work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-black text-[#0F172A] mb-2">{d.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {d.desc}
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
            "Our CAC dropped 42% in 90 days. The audit they ran on our funnel
            revealed issues we'd been blind to for 2 years. Genuinely
            transformative."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              alt="James Okonkwo"
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div className="text-left">
              <p className="font-black text-[#0F172A] text-sm">James Okonkwo</p>
              <p className="text-xs text-[#475569]">Founder, Nexus SaaS</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Customer Acquisition Consultant FAQ
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#F7941D]/90 to-[#1565C0]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-5">
            Let's cut your CAC and scale your acquisition.
          </h2>
          <p className="text-orange-100 mb-8">
            Book your free paid ads audit. We'll review your accounts, identify
            waste, and show you exactly how to improve ROAS in 15 minutes.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Ads Audit →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
