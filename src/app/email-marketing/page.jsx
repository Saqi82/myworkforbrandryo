import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Email Marketing Agency | Small Business | BrandRyo",
  description:
    "BrandRyo is a specialist email marketing agency for small businesses — building automated flows, campaigns and sequences that deliver $42 ROI per $1 spent. Free email audit.",
  keywords:
    "email marketing agency, email marketing for small business, email marketing consultant, automated email marketing, email marketing strategy, email sequences for business, email marketing service, how to do email marketing, email revenue growth",
  alternates: { canonical: "https://brandryo.com/email-marketing" },
  openGraph: {
    title: "Email Marketing Agency | Small Business | BrandRyo",
    description:
      "Email marketing that delivers $42 ROI for every $1 spent. BrandRyo builds automated email sequences and campaigns for small businesses. Free audit.",
    url: "https://brandryo.com/email-marketing",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo email marketing agency — automated email sequence strategy",
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
      name: "Email Marketing for Small Business",
      url: "https://brandryo.com/email-marketing",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
      },
      description:
        "BrandRyo designs and deploys email marketing systems for small businesses — including automated welcome flows, abandoned cart sequences, post-purchase journeys, and reactivation campaigns.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free Email Marketing Audit",
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
          name: "Email Marketing",
          item: "https://brandryo.com/email-marketing",
        },
      ],
    },
  ],
};

const stats = [
  {
    value: "$42",
    label: "Return per $1 spent on email",
    sub: "Highest ROI of any digital channel",
  },
  {
    value: "25-40%",
    label: "Revenue from email for e-commerce",
    sub: "With BrandRyo's flow architecture",
  },
  {
    value: "47%",
    label: "Avg. open rate on our campaigns",
    sub: "vs. industry avg. of 21.5%",
  },
  {
    value: "35%",
    label: "Avg. LTV increase in 90 days",
    sub: "Through retention email programmes",
  },
];

const flows = [
  {
    icon: "👋",
    name: "Welcome Series",
    kw: "welcome email sequence",
    desc: "Convert new subscribers into first-time buyers. 5-email automated series that introduces your brand, builds trust, and drives the first purchase with a compelling offer.",
    stat: "Up to 320% higher revenue/email than broadcast",
  },
  {
    icon: "🛒",
    name: "Abandoned Cart Recovery",
    kw: "abandoned cart email",
    desc: "Recover 15–25% of abandoned carts with a smart 3-email recovery sequence — reminder, urgency, and final offer — personalised to each shopper's cart contents.",
    stat: "Avg. 18% cart recovery rate",
  },
  {
    icon: "📦",
    name: "Post-Purchase Journey",
    kw: "post-purchase email sequence",
    desc: "Turn one-time buyers into repeat customers. Order confirmation, unboxing, review request, cross-sell, and loyalty incentive — all automated.",
    stat: "+28% repeat purchase rate",
  },
  {
    icon: "🔄",
    name: "Win-Back Campaigns",
    kw: "customer reactivation email",
    desc: "Reactivate lapsed customers with targeted win-back sequences. Personalised offers, re-engagement content, and sunset protocols to protect list deliverability.",
    stat: "12-22% lapsed customer reactivation",
  },
  {
    icon: "📊",
    name: "Broadcast & Promotional",
    kw: "email broadcast campaigns",
    desc: "Regular promotional emails for product launches, sales events, content, and seasonal campaigns — written by our copy team and segmented for maximum relevance.",
    stat: "47% avg. open rate",
  },
  {
    icon: "🏆",
    name: "VIP & Loyalty Flows",
    kw: "loyalty email programme",
    desc: "Identify your highest-value customers and put them on a bespoke VIP journey — exclusive access, early launches, loyalty rewards, and personalised offers.",
    stat: "+41% VIP customer LTV",
  },
];

const faqs = [
  {
    q: "How effective is email marketing for small businesses?",
    a: "Email marketing consistently delivers the highest ROI of any digital channel — $42 back for every $1 spent according to the DMA. For small businesses, it's particularly powerful because it builds direct relationships with customers without relying on paid platform algorithms.",
  },
  {
    q: "What email marketing platform does BrandRyo use?",
    a: "We work across Klaviyo, Mailchimp, ActiveCampaign, and HubSpot — choosing the right platform based on your business model, e-commerce platform, and growth goals. We handle the setup, migration, and integration.",
  },
  {
    q: "How quickly will email marketing increase my revenue?",
    a: "Automated flows (welcome, abandoned cart, post-purchase) can be generating revenue within 2–3 weeks of setup. Broadcast campaigns and list-growth strategies build over 2–3 months. Most clients see email contributing 15–35% of total revenue within 90 days.",
  },
  {
    q: "How do I grow my email list?",
    a: "We build email list growth systems using pop-ups, lead magnets, paid traffic, checkout opt-ins, and referral incentives. List quality always outweighs size — we focus on capturing buyers, not just browsers.",
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      <SiteNav activePage="services" />

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
              <span className="text-[#475569]">Email Marketing</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              Email Marketing Consultant
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              Email Marketing That Generates{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                $42 for Every $1 Spent.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              We design and deploy{" "}
              <strong className="text-[#0F172A]">
                automated email marketing systems
              </strong>{" "}
              for small businesses — from welcome flows to win-back campaigns —
              that generate 25–40% of total revenue on autopilot.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { v: "$42", l: "ROI per $1 spent" },
                { v: "47%", l: "Avg. open rate" },
                { v: "25-40%", l: "Revenue from email" },
                { v: "90 days", l: "To full system ROI" },
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#1565C0]/25"
            >
              Get My Free Email Marketing Audit →
            </a>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
                alt="Email marketing strategy for small business"
                className="w-full h-[420px] object-cover"
                width={800}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/30 to-transparent rounded-[32px]" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-[#29ABE2] mb-1">
                {s.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{s.label}</div>
              <div className="text-xs text-[#94A3B8]">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FLOWS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">
              6 Email Flows That Run Your Revenue on Autopilot
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              We build and activate all six simultaneously — creating a complete
              automated revenue engine for your brand.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {flows.map((f, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-xl hover:border-[#1565C0]/30 hover:bg-white transition-all"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-black text-[#0F172A] mb-1">{f.name}</h3>
                <p className="text-xs text-[#1565C0] font-bold uppercase tracking-wider mb-3">
                  {f.kw}
                </p>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {f.desc}
                </p>
                <div className="bg-[#EFF6FF] px-3 py-1.5 rounded-full inline-block">
                  <span className="text-xs font-black text-[#1565C0]">
                    {f.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#0F172A] mb-8 text-center">
            Email Marketing FAQs for Small Businesses
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
            Ready to activate your email revenue engine?
          </h2>
          <p className="text-blue-100 mb-8">
            Book a free 15-min email marketing audit. We'll assess your current
            setup and identify your biggest revenue opportunities.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1565C0] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Get My Free Email Audit →
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
