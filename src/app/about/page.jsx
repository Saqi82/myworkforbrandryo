import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Digital Marketing Consultant Agency | About BrandRyo",
  description:
    "Meet BrandRyo — a specialist digital marketing consultant agency founded in 2016. 20+ senior strategists, 250+ brands scaled, $120M+ revenue generated. Book a free 15-min consultancy.",
  keywords:
    "about BrandRyo, digital marketing consultant agency team, digital marketing consultant, brand growth consultant, growth marketing experts, BrandRyo agency, online marketing consultant",
  alternates: {
    canonical: "https://brandryo.com/about",
  },
  openGraph: {
    title: "Digital Marketing Consultant Agency | About BrandRyo",
    description:
      "Meet the senior growth consultants behind BrandRyo — 8+ years, 250+ brands, $120M+ revenue. Book your free 15-min consultancy today.",
    url: "https://brandryo.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BrandRyo digital marketing consultant agency team collaborating on growth strategy",
      },
    ],
  },
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brandryo.com/#org",
      name: "BrandRyo",
      url: "https://brandryo.com",
      logo: LOGO,
      description:
        "BrandRyo is a specialist digital marketing consultant agency helping brands generate more leads, acquire loyal customers, and grow revenue.",
      foundingDate: "2016",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "20" },
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        email: "growth@brandryo.com",
        contactType: "Customer Support",
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
          name: "About",
          item: "https://brandryo.com/about",
        },
      ],
    },
  ],
};

const values = [
  {
    title: "Data First, Always",
    desc: "Every decision we make is anchored in real numbers — not assumptions, not trends, not gut feelings.",
    icon: "📊",
  },
  {
    title: "Radical Transparency",
    desc: "You see everything we do, every dollar we spend, and every metric we move. Zero black boxes.",
    icon: "🔍",
  },
  {
    title: "Client Obsession",
    desc: "We treat your business like our own. Your revenue ceiling is our challenge to break.",
    icon: "🎯",
  },
  {
    title: "Long-Term Growth",
    desc: "We build compounding systems, not one-hit campaigns. Sustainable scale is the goal.",
    icon: "📈",
  },
];

const team = [
  {
    name: "Ryan Osei",
    role: "Founder & Head of Growth Strategy",
    bio: "8+ years engineering growth for DTC, SaaS and e-commerce brands. Managed over $40M in ad spend across Meta, Google and LinkedIn.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Alicia Torres",
    role: "Head of Paid Media",
    bio: "Former performance lead at a top-10 global agency. Specialist in ROAS optimisation and full-funnel paid acquisition.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Chen",
    role: "Lead Funnel Architect",
    bio: "Conversion rate optimisation expert who has rebuilt funnels for 80+ brands — averaging a 3.2x lift in qualified lead flow.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Nair",
    role: "Head of Retention & Email",
    bio: "LTV and lifecycle expert. Her retention programmes have delivered an average 35% uplift in repeat purchase rate across client portfolios.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
];

const milestones = [
  {
    year: "2016",
    event:
      "Founded in London with a single mission: make data-driven growth accessible to ambitious brands.",
  },
  {
    year: "2018",
    event:
      "Crossed $10M in managed ad spend. Expanded to a team of 8 senior strategists.",
  },
  {
    year: "2020",
    event:
      "Launched our proprietary Velocity Growth Method — now used across all client campaigns.",
  },
  {
    year: "2022",
    event:
      "Helped 50+ brands cross their first $1M revenue milestone using our lead-generation systems.",
  },
  {
    year: "2024",
    event:
      "Reached $120M+ in total client revenue generated. Expanded to a team of 20 across 4 countries.",
  },
  {
    year: "2025",
    event:
      "Launched free 15-minute Growth Consultancy programme — making expert strategy accessible to every brand.",
  },
];

const faqs = [
  {
    q: "What makes BrandRyo different from other digital marketing agencies?",
    a: "We don't sell packages or retainers — we build custom growth systems around your unit economics and revenue goals. You get a dedicated senior strategist, transparent weekly reporting, and full-funnel ownership from lead to LTV.",
  },
  {
    q: "Do you work with small businesses or only large brands?",
    a: "We work with brands at every stage — from ambitious startups generating $10k/month to established companies doing $1M+/month. Our strategies scale to your budget and goals.",
  },
  {
    q: "What is the free 15-minute Growth Consultancy?",
    a: "It's a no-pitch strategy call with one of our senior growth consultants. We'll audit your current funnel, identify your biggest revenue leaks, and hand you 3 actionable strategies before the call ends.",
  },
  {
    q: "How quickly can I see results?",
    a: "Most clients see measurable improvements in lead quality and conversion rates within the first 30 days. Significant revenue growth typically compounds from month 2 onwards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* NAV */}
      <SiteNav activePage="about" />

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#29ABE2]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-xs text-[#94A3B8] font-medium"
            >
              <a href="/" className="hover:text-[#1565C0]">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#475569]">About</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
              The Digital Marketing Consultants{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                Obsessed With Your ROI.
              </span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              BrandRyo is a specialist digital marketing consultant agency built
              for brands that want{" "}
              <strong className="text-[#0F172A]">
                real, measurable growth
              </strong>{" "}
              — not vanity metrics. We combine deep data science, creative
              strategy, and channel expertise to engineer systems that generate
              leads, acquire customers, and maximise lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#1565C0]/25"
              >
                Book Free Consultancy →
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#E2E8F0] text-[#0F172A] font-bold rounded-full hover:border-[#1565C0] transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#1565C0]/15">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="BrandRyo digital marketing consultant team collaborating"
                className="w-full h-[440px] object-cover"
                width={800}
                height={440}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/20 to-transparent rounded-[32px]" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#0F172A]">250+</div>
              <div className="text-xs text-[#475569] font-semibold">
                Brands Scaled Globally
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0]">
              <div className="text-2xl font-black text-[#1565C0]">$120M+</div>
              <div className="text-xs text-[#475569] font-semibold">
                Client Revenue Generated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="py-16 px-6 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black text-white leading-relaxed">
            "Our mission is simple:{" "}
            <span className="text-[#29ABE2]">
              help every ambitious brand find the shortest path from where they
              are to where they deserve to be.
            </span>
            "
          </p>
          <p className="text-[#94A3B8] mt-4 font-semibold">
            — Ryan Osei, Founder, BrandRyo
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-6 leading-tight">
              Started by a frustrated strategist who knew there was a better
              way.
            </h2>
            <div className="space-y-5 text-[#475569] text-base leading-relaxed">
              <p>
                BrandRyo was founded in 2016 by Ryan Osei after watching brand
                after brand waste their budget with generic agencies that sold
                packages rather than solutions. The promise was always the same
                — and so were the disappointing results.
              </p>
              <p>
                Ryan built BrandRyo around one core belief:{" "}
                <strong className="text-[#0F172A]">
                  growth is a system, not a campaign.
                </strong>{" "}
                By embedding deeply in each client's business, studying their
                customers, and building data-driven acquisition machines, the
                results spoke for themselves.
              </p>
              <p>
                Today, BrandRyo is a team of 20 specialist growth consultants,
                media buyers, funnel architects, and retention experts — trusted
                by 250+ brands across 4 continents to deliver compounding,
                predictable revenue growth.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1565C0] to-[#29ABE2] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#1565C0]/20">
                    <span className="text-white text-[10px] font-black">
                      {m.year.slice(2)}
                    </span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#1565C0]/30 to-transparent my-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-black text-[#1565C0] uppercase tracking-widest">
                    {m.year}
                  </span>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1565C0] font-bold uppercase tracking-widest text-xs mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#1565C0]/8 transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-black text-[#0F172A] mb-3 text-lg">
                  {v.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
              The People Behind Your Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
              Meet Your Strategists
            </h2>
            <p className="text-[#475569] mt-4 max-w-xl mx-auto">
              Not account managers. Not junior execs. Senior growth specialists
              who've been in the trenches.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-5 shadow-md">
                  <img
                    src={member.img}
                    alt={`${member.name} – ${member.role} at BrandRyo`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-black text-[#0F172A] text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-[#1565C0] text-xs font-bold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1565C0] to-[#2D1B69]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: "250+", label: "Brands Scaled" },
            { value: "8+", label: "Years in Business" },
            { value: "$120M+", label: "Revenue Generated" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-[#29ABE2]">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-blue-100">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#1565C0] font-bold uppercase tracking-widest text-xs mb-4 block">
              Questions Answered
            </span>
            <h2 className="text-3xl font-black text-[#0F172A]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7"
              >
                <h3 className="font-black text-[#0F172A] mb-3 text-base">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-5">
            Ready to work with a growth consultant who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
              actually delivers?
            </span>
          </h2>
          <p className="text-[#475569] text-lg mb-8 max-w-xl mx-auto">
            Book your free 15-minute growth consultancy. No fluff, no hard sell
            — just an actionable roadmap to your next revenue milestone.
          </p>
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-black text-lg rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-[#1565C0]/25"
          >
            Claim My Free Strategy Call →
          </a>
          <p className="text-[#94A3B8] text-xs mt-4">
            No credit card. No obligation. 100% free.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </>
  );
}
