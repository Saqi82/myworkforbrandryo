import React, { useState } from "react";
import { motion } from "motion/react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Mail,
  Star,
  ChevronRight,
  Target,
  Award,
  Globe,
} from "lucide-react";

/* ── Page SEO / AEO / GEO Metadata ───────────────────────────────────────── */
export const metadata = {
  title: "Digital Marketing Consultant Agency | BrandRyo",
  description:
    "BrandRyo is a specialist digital marketing consultant agency helping brands generate leads, acquire customers, and maximise revenue. 250+ brands scaled. $120M+ revenue. Free 15-min consultancy.",
  keywords:
    "digital marketing consultant agency, lead generation consultant, customer acquisition agency, growth marketing consultant, paid ads management, ROAS optimisation, revenue growth consultant, Google Ads management",
  alternates: { canonical: "https://brandryo.com" },
  openGraph: {
    title: "Digital Marketing Consultant Agency | BrandRyo",
    description:
      "Specialist digital marketing consultant agency — lead generation, customer acquisition, paid ads & revenue growth. 250+ brands. $120M+ revenue. Free strategy call.",
    url: "https://brandryo.com",
    images: [
      {
        url: "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg",
        width: 1200,
        height: 630,
        alt: "BrandRyo digital marketing consultant agency",
      },
    ],
  },
};

// ─── Colour Tokens (derived from BrandRyo logo) ───────────────────────────────
// Deep Blue:   #1565C0  │  Sky Blue:  #29ABE2  │  Purple: #2D1B69
// Orange:      #F7941D  │  BG White:  #FFFFFF  │  Surface: #EFF6FF
// Text Dark:   #0F172A  │  Text Mid:  #475569  │  Text Light: #94A3B8
// ─────────────────────────────────────────────────────────────────────────────

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE]">
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#29ABE2]/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F7941D]/8 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
      {/* Left Column */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-6"
        >
          <Zap size={12} className="text-[#F7941D]" />
          Digital Marketing Consultant Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#0F172A] mb-6"
        >
          The Digital Marketing Consultant Agency That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
            Scales Brands Beyond Their Revenue Ceiling.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#475569] mb-10 leading-relaxed max-w-lg"
        >
          As a specialist digital marketing consultant agency, we engineer
          growth systems that capture high-intent leads, acquire loyal
          customers, and maximise every dollar of your revenue — with strategies
          tailored to{" "}
          <strong className="text-[#0F172A]">your brand's DNA.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="/consultancy"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white text-base font-bold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#1565C0]/30 group"
          >
            Claim Free 15-Min Strategy Call
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6 mt-8"
        >
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="client"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#F7941D"
                  className="text-[#F7941D]"
                />
              ))}
            </div>
            <p className="text-xs text-[#475569] font-semibold">
              Trusted by <strong className="text-[#0F172A]">250+</strong> brands
              worldwide
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Column – Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-[#1565C0]/15">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="BrandRyo digital marketing consultant agency team strategizing brand revenue growth"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1565C0]/30 to-transparent" />
        </div>
        {/* Floating metric card */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
            <TrendingUp className="text-[#1565C0]" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-[#0F172A]">4.8x</div>
            <div className="text-xs text-[#475569] font-semibold">
              Average ROAS
            </div>
          </div>
        </div>
        {/* Floating leads card */}
        <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-[#E2E8F0] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center">
            <Users className="text-[#F7941D]" size={24} />
          </div>
          <div>
            <div className="text-2xl font-black text-[#0F172A]">$120M+</div>
            <div className="text-xs text-[#475569] font-semibold">
              Client Revenue
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustBar = () => (
  <section id="results" className="py-14 bg-white border-y border-[#E2E8F0]">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-[#94A3B8] text-xs font-bold uppercase tracking-[0.25em] mb-10">
        Fast-scaling brands we've partnered with
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-700">
        {["ALPHA", "NEXUS", "STRIDE", "LUMINA", "KINETIC", "ORACLE"].map(
          (b) => (
            <span
              key={b}
              className="text-2xl font-black tracking-widest text-[#0F172A]"
            >
              {b}
            </span>
          ),
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
        {[
          { label: "Avg. ROAS", value: "4.8x", color: "text-[#1565C0]" },
          { label: "Leads Generated", value: "250k+", color: "text-[#F7941D]" },
          { label: "Client Revenue", value: "$120M+", color: "text-[#1565C0]" },
          { label: "Satisfaction Rate", value: "98%", color: "text-[#F7941D]" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]"
          >
            <div className={`text-4xl font-black mb-1 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs text-[#475569] font-bold uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <Users className="text-[#1565C0]" size={28} />,
      title: "Lead Capture & Funnel Engineering",
      desc: "Stop leaking traffic. We design high-conversion funnels that turn passive visitors into high-intent, qualified leads ready to buy.",
      metric: "Avg. 12% CVR",
      bg: "bg-[#EFF6FF]",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      icon: <TrendingUp className="text-[#F7941D]" size={28} />,
      title: "Customer Acquisition & Paid Media",
      desc: "Hyper-targeted campaigns across Meta, Google & LinkedIn — built on real data, not guesswork. We find your buyers where they live.",
      metric: "4.2x Avg. ROAS",
      bg: "bg-[#FFF7ED]",
      img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80",
    },
    {
      icon: <BarChart3 className="text-[#2D1B69]" size={28} />,
      title: "Revenue Maximization & Retention",
      desc: "LTV optimization and retention systems that go beyond the first sale. We transform one-time buyers into brand advocates.",
      metric: "+35% LTV Boost",
      bg: "bg-[#F5F3FF]",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    },
  ];

  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#1565C0] font-bold uppercase tracking-widest text-xs mb-4 block">
              Our Growth Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
              Tailored strategies for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                aggressive, measurable growth.
              </span>
            </h2>
          </div>
          <p className="text-[#475569] max-w-sm text-base leading-relaxed">
            We don't do "packages." We build custom growth engines based on your
            unit economics and scale goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#1565C0]/40 hover:shadow-xl hover:shadow-[#1565C0]/8 transition-all group bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>
              <div className="p-8">
                <div
                  className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-5`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                    Primary KPI
                  </span>
                  <span className="text-sm font-black text-[#1565C0]">
                    {s.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#1565C0]/20"
          >
            Get a Custom Strategy <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-28 px-6 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pb-10 md:pb-0"
      >
        <div className="rounded-[32px] overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="BrandRyo team collaborating"
            className="w-full h-[520px] object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 md:-bottom-8 md:-right-8 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xl max-w-[200px]">
          <Award className="text-[#F7941D] mb-3" size={28} />
          <div className="text-3xl font-black text-[#0F172A]">8+</div>
          <div className="text-xs text-[#475569] font-semibold">
            Years engineering brand growth
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
          Who We Are
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-6">
          We're strategists who{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
            obsess over your ROI.
          </span>
        </h2>
        <p className="text-[#475569] leading-relaxed mb-8 text-base">
          BrandRyo isn't a typical agency. We embed ourselves in your business,
          study your customers deeply, and build growth systems that scale
          predictably. No guesswork. No vanity metrics. Just compounding revenue
          growth.
        </p>
        <div className="space-y-4 mb-10">
          {[
            "Data-first strategy across every decision",
            "Dedicated growth team — not a rotating agency",
            "Full-funnel ownership from lead to lifetime value",
            "Transparent ROI reporting every single week",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={14} className="text-[#1565C0]" />
              </div>
              <span className="text-[#0F172A] font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
        <a
          href="/consultancy"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F172A] text-white font-bold rounded-full hover:bg-[#1565C0] transition-all group"
        >
          Meet Your Strategist{" "}
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </motion.div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Deep Audit",
      desc: "We dissect your funnel, audience data, and unit economics to find every growth leak.",
      icon: <Target size={22} className="text-[#1565C0]" />,
      color: "bg-[#EFF6FF]",
    },
    {
      num: "02",
      title: "Custom Strategy",
      desc: "A bespoke growth roadmap built on real revenue data — not templates.",
      icon: <Globe size={22} className="text-[#29ABE2]" />,
      color: "bg-[#E0F7FF]",
    },
    {
      num: "03",
      title: "Execute",
      desc: "We deploy the creative, media, copy, and systems at pace.",
      icon: <Zap size={22} className="text-[#F7941D]" />,
      color: "bg-[#FFF7ED]",
    },
    {
      num: "04",
      title: "Optimize & Scale",
      desc: "Daily feedback loops drive continuous compounding improvements.",
      icon: <BarChart3 size={22} className="text-[#2D1B69]" />,
      color: "bg-[#F5F3FF]",
    },
  ];

  return (
    <section id="process" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#1565C0] font-bold uppercase tracking-widest text-xs mb-4 block">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-5">
            The BrandRyo Velocity Method
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto italic text-lg">
            Efficient. Data-driven. Zero guesswork. Maximum ROI.
          </p>
        </div>

        {/* Bug #5 fix — flex layout with inline connectors instead of absolute line */}
        <div className="flex flex-col md:flex-row items-start">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex-1 flex flex-col items-center text-center px-4"
              >
                <div
                  className={`w-24 h-24 rounded-3xl ${step.color} flex flex-col items-center justify-center mb-6 shadow-md`}
                >
                  {step.icon}
                  <span className="text-xs font-black text-[#0F172A] mt-1">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-lg font-black text-[#0F172A] mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center flex-shrink-0 self-start mt-12">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-20 rounded-3xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="BrandRyo strategy session"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1565C0]/80 to-[#29ABE2]/60 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-2xl font-black mb-4">
                "We treat your budget like it's our own."
              </p>
              <a
                href="/consultancy"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1565C0] font-bold rounded-full hover:scale-105 transition-all"
              >
                Start Your Growth Journey <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      role: "CEO, Lumina Skincare",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      quote:
        "BrandRyo scaled our Meta ads from $12k/mo to $180k/mo in 5 months without sacrificing ROAS. They don't just run ads — they build machines.",
      metric: "15x Revenue Growth",
    },
    {
      name: "James Okonkwo",
      role: "Founder, Nexus SaaS",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote:
        "Our CAC dropped 42% in 90 days. The audit they ran on our funnel revealed issues we'd been blind to for 2 years. Genuinely transformative.",
      metric: "42% CAC Reduction",
    },
    {
      name: "Priya Sharma",
      role: "CMO, Stride Apparel",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      quote:
        "The free consultancy call gave us more clarity than 6 months with our previous agency. By month 3 we were at 4.6x ROAS. Incredible team.",
      metric: "4.6x ROAS Achieved",
    },
  ];

  return (
    <section id="testimonials" className="py-28 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F7941D] font-bold uppercase tracking-widest text-xs mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">
            Real brands. Real numbers.
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto">
            Don't take our word for it — here's what happens when you stop
            guessing and start growing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#1565C0]/8 transition-all"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    fill="#F7941D"
                    className="text-[#F7941D]"
                  />
                ))}
              </div>
              <p className="text-[#0F172A] font-medium leading-relaxed mb-8 italic">
                "{r.quote}"
              </p>
              <div className="pt-6 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-4">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-black text-[#0F172A] text-sm">
                      {r.name}
                    </div>
                    <div className="text-xs text-[#475569] font-medium">
                      {r.role}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-black text-[#1565C0] bg-[#EFF6FF] px-3 py-1 rounded-full">
                      {r.metric}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    submitted: false,
    error: false,
    loading: false,
  });

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, loading: true, error: false }));
    try {
      const res = await fetch("https://formspree.io/f/xpqoygob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          source: "Homepage CTA Quick Form",
        }),
      });
      if (res.ok) {
        setFormState((s) => ({ ...s, submitted: true, loading: false }));
      } else {
        setFormState((s) => ({ ...s, error: true, loading: false }));
      }
    } catch {
      setFormState((s) => ({ ...s, error: true, loading: false }));
    }
  };

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[40px] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80"
            alt="Growth strategy meeting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0]/95 to-[#2D1B69]/90" />

          <div className="relative z-10 p-12 md:p-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                  Stop guessing. <br />
                  <span className="text-[#29ABE2]">Start scaling.</span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Apply for your Free 15-Minute Growth Consultancy. We'll audit
                  your current business and hand you 3 actionable strategies to
                  hit your next revenue milestone.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "No obligation, no hard sell",
                    "Talk to a real strategist",
                    "Leave with a clear action plan",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-blue-100"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#29ABE2] flex-shrink-0"
                      />
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Lead Form */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {formState.submitted ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="text-[#1565C0]" size={32} />
                    </div>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2">
                      You're in!
                    </h3>
                    <p className="text-[#475569] text-sm mb-6">
                      We've received your info. Book your slot to lock in your
                      free strategy call.
                    </p>
                    <a
                      href="/consultancy"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-2xl hover:opacity-90 transition-all"
                    >
                      Book My Growth Call <ArrowRight size={18} />
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-black text-[#0F172A] mb-2">
                      Book Your Free Strategy Call
                    </h3>
                    <p className="text-[#475569] text-sm mb-6">
                      15 minutes. No fluff. Just actionable ROI roadmap.
                    </p>
                    <form onSubmit={handleQuickSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] outline-none transition-all placeholder:text-[#94A3B8] text-[#0F172A]"
                      />
                      <input
                        type="email"
                        placeholder="Work Email Address"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] outline-none transition-all placeholder:text-[#94A3B8] text-[#0F172A]"
                      />
                      <input
                        type="text"
                        placeholder="Company / Brand Name"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            company: e.target.value,
                          }))
                        }
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] outline-none transition-all placeholder:text-[#94A3B8] text-[#0F172A]"
                      />
                      {formState.error && (
                        <p className="text-red-500 text-xs">
                          Something went wrong. Please try again or email us
                          directly.
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={formState.loading}
                        className="w-full py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                      >
                        {formState.loading ? (
                          "Sending..."
                        ) : (
                          <>
                            <span>Claim My Free Strategy Call</span>{" "}
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                      <div className="flex items-center justify-center gap-2 text-[#94A3B8] text-xs">
                        <ShieldCheck size={13} /> Your data is private and never
                        shared.
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── AEO / GEO Block: structured Q&A for AI engines & featured snippets ────── */
const AEOBlock = () => {
  const faqs = [
    {
      q: "What is a digital marketing consultant agency?",
      a: "A digital marketing consultant agency is a specialist firm that combines senior strategic consultancy with hands-on execution across paid ads, lead generation, SEO, email, and CRO. Unlike traditional agencies that sell retainer packages, a consultant agency like BrandRyo builds bespoke growth systems anchored in each client's unit economics and revenue goals.",
    },
    {
      q: "What does BrandRyo do as a digital marketing consultant agency?",
      a: "BrandRyo is a specialist digital marketing consultant agency founded in 2016. We help brands generate consistent leads, acquire loyal customers, and maximise revenue. Services include lead generation consultancy, customer acquisition via paid media (Meta, Google, LinkedIn), Google Ads management, social media marketing, email marketing, and revenue growth consultancy. BrandRyo has generated $120M+ in client revenue across 250+ brands globally.",
    },
    {
      q: "How is BrandRyo different from a regular digital marketing agency?",
      a: "BrandRyo operates as a hybrid between a senior digital marketing consultant and a full-service agency. Unlike traditional agencies that assign junior account managers to multiple clients, BrandRyo embeds senior growth consultants directly into each client's business — studying their customer data, unit economics, and competitive landscape before building a bespoke growth strategy with full-funnel ownership from lead to lifetime value.",
    },
    {
      q: "How quickly can a digital marketing consultant agency improve results?",
      a: "With paid channels (Google Ads, Meta Ads), measurable improvements in ROAS and lead volume typically emerge within 30 days. Significant revenue compounding from combined paid, email, and retention systems usually begins from month 2–3. BrandRyo's average client sees a 4.8x ROAS across managed campaigns.",
    },
    {
      q: "How much does a digital marketing consultant agency cost?",
      a: "BrandRyo offers a completely free 15-minute growth consultancy as the starting point. Ongoing engagement pricing is bespoke and based on scope, channel mix, and revenue goals — not generic monthly retainer packages. Book your free consultancy at brandryo.com/consultancy.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        {/* GEO entity definition box — optimised for AI answer engines */}
        <div className="bg-white border-l-4 border-[#1565C0] rounded-2xl p-8 mb-12 shadow-sm">
          <p className="text-xs font-black text-[#1565C0] uppercase tracking-widest mb-3">
            About BrandRyo
          </p>
          <p className="text-[#0F172A] text-base leading-relaxed font-medium">
            <strong>
              BrandRyo is a specialist digital marketing consultant agency
            </strong>{" "}
            founded in 2016, headquartered in London and serving clients
            worldwide. The agency specialises in lead generation, customer
            acquisition, paid media management, email marketing, Google Ads, and
            revenue growth consultancy. BrandRyo has generated{" "}
            <strong>$120M+ in client revenue</strong> across{" "}
            <strong>250+ brands globally</strong>, achieving an average{" "}
            <strong>4.8x ROAS</strong> across managed campaigns with a{" "}
            <strong>98% client satisfaction rate</strong>.
          </p>
        </div>

        <div className="text-center mb-10">
          <span className="text-[#1565C0] font-bold uppercase tracking-widest text-xs mb-4 block">
            Common Questions Answered
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
            Digital Marketing Consultant Agency — FAQ
          </h2>
          <p className="text-[#475569] mt-3 max-w-xl mx-auto">
            Everything you need to know about how BrandRyo works as a digital
            marketing consultant agency.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:border-[#1565C0]/30 hover:shadow-md transition-all"
            >
              <h3 className="font-black text-[#0F172A] mb-3 text-base">
                {faq.q}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/consultancy"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#1565C0]/20"
          >
            Book My Free Digital Marketing Consultancy →
          </a>
        </div>
      </div>
    </section>
  );
};

export default function BrandRyoLanding() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTASection />
      <AEOBlock />
      <SiteFooter />
    </div>
  );
}
