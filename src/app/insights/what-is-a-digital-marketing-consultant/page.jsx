import React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Digital Marketing Consultant Guide 2025 | BrandRyo",
  description:
    "What is a digital marketing consultant? Complete 2025 guide — what they do, consultant vs agency, 5 signs you need one now, how to choose the right one. Free consultancy.",
  keywords:
    "what is a digital marketing consultant, digital marketing consultant guide 2025, how to hire a digital marketing consultant, digital marketing consultant vs agency, what does a digital marketing consultant do, growth marketing consultant, brand growth consultant",
  alternates: {
    canonical:
      "https://brandryo.com/insights/what-is-a-digital-marketing-consultant",
  },
  openGraph: {
    title: "What Is a Digital Marketing Consultant? Complete Guide 2025",
    description:
      "Everything you need to know about digital marketing consultants — what they do, how to hire one, and whether you need one in 2025.",
    url: "https://brandryo.com/insights/what-is-a-digital-marketing-consultant",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Digital marketing consultant working on brand growth strategy — BrandRyo 2025 guide",
      },
    ],
  },
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Digital Marketing Consultant? Complete Guide 2025",
  description:
    "A complete guide to what digital marketing consultants do, how they differ from agencies, and how to find one that genuinely moves the needle for your business.",
  image:
    "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80",
  datePublished: "2025-06-12",
  dateModified: "2025-06-12",
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
      "https://brandryo.com/insights/what-is-a-digital-marketing-consultant",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a digital marketing consultant do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A digital marketing consultant analyses your business, audience, and marketing performance, then designs and executes strategies to increase leads, customers, and revenue. They may manage paid ads, SEO, email, funnels, analytics, or all of the above — depending on your needs and their specialism.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a digital marketing consultant cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies widely. Freelance consultants typically charge $75–$250/hour or $2,000–$8,000/month for ongoing work. Specialist agencies like BrandRyo build bespoke engagements based on scope and revenue goals. We offer a free 15-minute consultancy to establish what's right for your business.",
      },
    },
    {
      "@type": "Question",
      name: "Digital marketing consultant vs agency — what's the difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A consultant typically works closely with your team, offering strategic guidance and often hands-on execution across one or two disciplines. An agency provides a broader team with specialists across multiple channels. The right choice depends on your budget, team size, and the breadth of support you need.",
      },
    },
  ],
};

const breadcrumbSchema = {
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
      name: "What Is a Digital Marketing Consultant?",
      item: "https://brandryo.com/insights/what-is-a-digital-marketing-consultant",
    },
  ],
};

const sections = [
  {
    heading: "What Does a Digital Marketing Consultant Actually Do?",
    body: `A digital marketing consultant is a specialist hired to analyse, plan, and execute strategies that grow a brand's digital presence, lead volume, customer base, and revenue.

Unlike a generalist marketer, a good consultant brings deep expertise in specific disciplines — whether that's paid media, SEO, funnel engineering, email marketing, or conversion rate optimisation — and applies that expertise to your specific business model and growth goals.

In practice, working with a digital marketing consultant looks like this: they start by deeply auditing your current marketing — what's working, what's leaking, and where your biggest untapped opportunities are. Then they build a custom strategy, execute campaigns, test what works, and iterate until the results compound.`,
  },
  {
    heading: "Digital Marketing Consultant vs Agency: Which Do You Need?",
    body: `This is one of the most common questions we hear — and the honest answer is: it depends.

A **consultant** typically works closely with your internal team, providing senior strategic direction and often hands-on execution. They're ideal if you already have some in-house capability and need expert strategic oversight.

An **agency** brings a full team of specialists — copywriters, media buyers, designers, analysts — and takes ownership of entire channels or campaigns. They're better suited to brands that want to fully outsource a function.

At BrandRyo, we operate as a hybrid: senior consultants who own the strategy *and* execution — so you get the expertise of a senior consultant with the execution power of a specialist agency team.`,
  },
  {
    heading: "5 Signs You Need a Digital Marketing Consultant Right Now",
    body: `Not sure if now's the right time? Here are five clear signals:

**1. Your leads are inconsistent or low quality.** If your sales team is struggling with thin pipelines or unqualified enquiries, your top-of-funnel strategy needs a specialist audit.

**2. Your paid ads aren't delivering ROI.** If you're spending on Meta or Google but can't clearly attribute revenue to spend, a paid media consultant can transform your ROAS quickly.

**3. You've hit a revenue ceiling.** Every business hits a ceiling where what got you here won't get you there. A consultant brings the external perspective and expertise to break through it.

**4. You're scaling but your CAC is rising.** Scaling ad spend without fixing unit economics leads to diminishing returns. A consultant addresses the root causes.

**5. You don't know which channels to prioritise.** If you're spreading budget across multiple channels without clear data on what's working, you need strategic clarity — fast.`,
  },
  {
    heading: "How to Choose the Right Digital Marketing Consultant",
    body: `With so many consultants in the market, here's what actually separates the great ones from the average:

**Specialisation over generalism.** The best consultants go deep in 2–3 disciplines, not shallow across 10. Ask specifically what channels and strategies they specialise in.

**Proven case studies with real numbers.** Avoid consultants who can't show you specific, measurable results — ROAS improvements, CPL reductions, revenue lifted — from brands similar to yours.

**Data-first approach.** Great consultants lead with analytics and make decisions based on your data, not templates or "industry best practices."

**Transparent about what they don't know.** The best consultants are honest about scope — they'll tell you when a challenge falls outside their core expertise rather than overpromising.

**Chemistry and communication.** You'll be sharing sensitive business data. You need someone who feels like a trusted partner, not a vendor.`,
  },
  {
    heading:
      "What Should I Expect From Working With a Digital Marketing Consultant?",
    body: `Here's what a high-quality digital marketing consultancy engagement typically looks like at BrandRyo:

**Week 1-2: Discovery & Audit.** We deep-dive into your analytics, ad accounts, customer data, and competitive landscape. We identify your biggest revenue leaks and opportunities.

**Week 3-4: Strategy & Roadmap.** You receive a bespoke growth strategy with clear priorities, channel recommendations, budget allocation, and 90-day milestones.

**Month 2-3: Execution & Testing.** Campaigns go live. We run systematic A/B tests on creatives, audiences, and landing pages to find the highest-performing combinations.

**Month 4+: Optimise & Scale.** What works gets scaled. What doesn't gets cut. Revenue compounds month after month with weekly reporting so you always know exactly what's working.`,
  },
];

export default function ArticleWhatIsConsultant() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* NAV */}
      <SiteNav activePage="insights" />

      {/* HERO */}
      <section className="relative pt-14 pb-0 bg-gradient-to-br from-[#EFF6FF] via-white to-white">
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
              What Is a Digital Marketing Consultant?
            </span>
          </nav>
          <span className="inline-block px-3 py-1 bg-[#EFF6FF] text-[#1565C0] text-xs font-bold rounded-full uppercase tracking-widest mb-5">
            Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] leading-tight mb-5">
            What Is a Digital Marketing Consultant? (And Why Every Growing Brand
            Needs One)
          </h1>
          <div className="flex items-center gap-4 text-xs text-[#94A3B8] font-medium mb-8">
            <span>By BrandRyo Team</span>
            <span>·</span>
            <span>12 Jun 2025</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-0">
          <div className="rounded-[24px] overflow-hidden shadow-xl shadow-[#1565C0]/10">
            <img
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80"
              alt="Digital marketing consultant working on brand growth strategy"
              className="w-full h-72 md:h-96 object-cover"
              width={1200}
              height={384}
            />
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="bg-[#EFF6FF] border-l-4 border-[#1565C0] rounded-xl p-6 mb-10">
            <p className="text-[#1565C0] font-bold text-base leading-relaxed">
              <strong>In this guide:</strong> We cover exactly what a digital
              marketing consultant does, how they differ from a traditional
              agency, 5 signs you need one right now, how to choose the right
              one, and what to expect from a great engagement.
            </p>
          </div>

          {/* Sections */}
          {sections.map((s, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-black text-[#0F172A] mb-5">
                {s.heading}
              </h2>
              <div className="prose prose-slate max-w-none">
                {s.body.split("\n\n").map((para, j) => {
                  if (para.startsWith("**") && para.includes(".**")) {
                    const parts = para.split(".**");
                    const bold = parts[0].replace(/\*\*/g, "");
                    const rest = parts.slice(1).join(".**");
                    return (
                      <p
                        key={j}
                        className="text-[#475569] leading-relaxed mb-4"
                      >
                        <strong className="text-[#0F172A]">{bold}.</strong>
                        {rest}
                      </p>
                    );
                  }
                  return (
                    <p key={j} className="text-[#475569] leading-relaxed mb-4">
                      {para.replace(/\*\*/g, "")}
                    </p>
                  );
                })}
              </div>
              {i === 1 && (
                <div className="my-8 grid md:grid-cols-3 gap-5">
                  {[
                    {
                      label: "Consultant",
                      desc: "Strategic + hands-on. Works closely with your team. Deep expertise in 2–3 channels.",
                      icon: "🎯",
                    },
                    {
                      label: "Hybrid (BrandRyo)",
                      desc: "Senior strategy AND full execution team. Best of both worlds.",
                      icon: "⚡",
                      highlight: true,
                    },
                    {
                      label: "Agency",
                      desc: "Full team, broad channel coverage. More suited to larger brands with bigger budgets.",
                      icon: "🏢",
                    },
                  ].map((item, j) => (
                    <div
                      key={j}
                      className={`rounded-2xl p-6 border text-center ${item.highlight ? "bg-gradient-to-br from-[#1565C0] to-[#29ABE2] text-white border-[#1565C0]" : "bg-[#F8FAFC] border-[#E2E8F0]"}`}
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div
                        className={`font-black text-lg mb-2 ${item.highlight ? "text-white" : "text-[#0F172A]"}`}
                      >
                        {item.label}
                      </div>
                      <p
                        className={`text-xs leading-relaxed ${item.highlight ? "text-blue-100" : "text-[#475569]"}`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* In-article CTA */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#1565C0] to-[#2D1B69] p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-black mb-3">
              Speak to a BrandRyo digital marketing consultant — for free.
            </h3>
            <p className="text-blue-100 mb-6">
              15 minutes. No obligation. Walk away with a clear, personalised
              growth roadmap.
            </p>
            <a
              href="/consultancy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1565C0] font-black rounded-full hover:scale-105 transition-all shadow-xl"
            >
              Book My Free Consultancy →
            </a>
          </div>

          {/* Author */}
          <div className="flex items-start gap-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
              alt="Ryan Osei – BrandRyo Founder"
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
                8+ years as a digital marketing consultant. Has helped 250+
                brands across DTC, SaaS and B2B generate $120M+ in revenue.
              </p>
            </div>
          </div>

          {/* Related */}
          <div>
            <h3 className="font-black text-[#0F172A] text-xl mb-5">
              Continue Reading
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  href: "/insights/how-to-generate-leads-for-small-business",
                  title:
                    "How to Generate More Leads for Your Small Business in 2025",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
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
