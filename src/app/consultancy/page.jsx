import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Check,
  ArrowRight,
  Calendar,
  Users,
  Target,
  ShieldCheck,
  Zap,
  ArrowLeft,
  CheckCircle2,
  Star,
  Clock,
  Mail,
  Globe,
} from "lucide-react";

/* ── SEO / AEO / GEO Metadata ───────────────────────────────────────────────── */
export const metadata = {
  title: "Free Digital Marketing Consultancy | BrandRyo",
  description:
    "Book your free 15-minute digital marketing consultancy with a BrandRyo senior growth consultant. Full funnel audit + 3 custom strategies. No obligation. No hard sell.",
  keywords:
    "free digital marketing consultancy, free growth consultancy, free marketing audit, digital marketing consultant free call, book digital marketing consultant, growth strategy call, free paid ads audit, free lead generation audit",
  alternates: { canonical: "https://brandryo.com/consultancy" },
  openGraph: {
    title: "Free Digital Marketing Consultancy | 15-Min Growth Call | BrandRyo",
    description:
      "Book your free 15-minute digital marketing consultancy. Senior growth consultant, full funnel audit, 3 custom strategies. Zero obligation.",
    url: "https://brandryo.com/consultancy",
    images: [
      {
        url: "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg",
        width: 1200,
        height: 630,
        alt: "BrandRyo free digital marketing consultancy — 15-minute growth strategy call",
      },
    ],
  },
  twitter: {
    title: "Free Digital Marketing Consultancy | BrandRyo",
    description:
      "Free 15-min growth call with a senior BrandRyo consultant. Full funnel audit + 3 custom strategies. Book now.",
  },
};

const consultancySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Free 15-Minute Digital Marketing Consultancy",
      description:
        "A free 15-minute one-to-one strategy call with a BrandRyo senior growth consultant — includes a full funnel audit, identification of your biggest revenue leaks, and 3 custom growth strategies you can act on immediately.",
      provider: {
        "@type": "Organization",
        name: "BrandRyo",
        url: "https://brandryo.com",
        "@id": "https://brandryo.com/#organization",
      },
      url: "https://brandryo.com/consultancy",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        name: "Free Growth Consultancy Call",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in BrandRyo's free digital marketing consultancy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The free 15-minute consultancy includes: (1) a full audit of your current marketing funnel and traffic sources, (2) identification of your biggest revenue leaks and growth bottlenecks, and (3) 3 tailored, actionable strategies you can implement immediately to hit your next revenue milestone. There is no sales pitch and no obligation.",
          },
        },
        {
          "@type": "Question",
          name: "Is BrandRyo's growth consultancy really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, completely free. The 15-minute growth consultancy is BrandRyo's way of delivering genuine value upfront before any client relationship begins. There is no credit card required, no obligation to engage further, and no hard sell on the call.",
          },
        },
        {
          "@type": "Question",
          name: "Who will I speak to on the consultancy call?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You will speak directly with a senior BrandRyo growth consultant — not a junior sales rep. Every consultancy call is led by an experienced strategist who has worked with 250+ brands across DTC, SaaS, B2B, and e-commerce.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book the free digital marketing consultancy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete the 2-step booking form at brandryo.com/consultancy: Step 1 — tell us about your business and your biggest growth challenge. Step 2 — pick your preferred date and time from the available slots. You will receive a calendar invite and strategist prep-pack within 10 minutes of booking.",
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
          name: "Free Digital Marketing Consultancy",
          item: "https://brandryo.com/consultancy",
        },
      ],
    },
  ],
};

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const FORMSPREE = "https://formspree.io/f/xpqoygob";

// Bug #6 fix — generate slots dynamically from today, skipping weekends
function getUpcomingWeekdays(count = 5) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const slots = {};
  const date = new Date();
  // start from tomorrow
  date.setDate(date.getDate() + 1);
  while (Object.keys(slots).length < count) {
    const dow = date.getDay();
    if (dow !== 0 && dow !== 6) {
      const label = `${days[dow]}, ${date.getDate()} ${months[date.getMonth()]}`;
      const times =
        Object.keys(slots).length % 2 === 0
          ? ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"]
          : ["10:00 AM", "01:00 PM", "03:00 PM"];
      slots[label] = times;
    }
    date.setDate(date.getDate() + 1);
  }
  return slots;
}

const TIME_SLOTS = getUpcomingWeekdays(5);

const ConsultancyPage = () => {
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState({ day: "", time: "" });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    revenue: "",
    challenge: "",
    goal: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormError("");
  };

  const handleStep1 = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormError("Please fill in your name and email to continue.");
      return;
    }
    setStep(2);
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = async () => {
    if (!selectedSlot.day || !selectedSlot.time) {
      setFormError("Please select a preferred time slot to continue.");
      return;
    }
    setIsLoading(true);
    setFormError("");
    try {
      const payload = {
        ...formData,
        preferred_day: selectedSlot.day,
        preferred_time: selectedSlot.time,
        source: "Free Consultancy Booking Page",
        _subject: `New Growth Consultancy Request from ${formData.name}`,
      };
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined")
          window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setFormError(
          "Submission failed. Please email us at growth@brandryo.com.",
        );
      }
    } catch {
      setFormError(
        "Network error. Please try again or email growth@brandryo.com.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    // Bug #5 fix — add 'relative' so the absolute-positioned nav renders inside this container
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE] flex flex-col items-center px-6 pt-28 pb-20 text-center">
        <div className="absolute top-0 left-0 right-0">
          <SiteNav />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full"
        >
          <div className="w-24 h-24 bg-[#EFF6FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle2 className="text-[#1565C0]" size={44} />
          </div>
          <h1 className="text-4xl font-black text-[#0F172A] mb-4">
            You're Booked, {formData.name.split(" ")[0]}! 🎉
          </h1>
          <p className="text-[#475569] text-lg leading-relaxed mb-4">
            Your Free 15-Minute Growth Strategy Call is confirmed for{" "}
            <strong className="text-[#1565C0]">{selectedSlot.day}</strong> at{" "}
            <strong className="text-[#1565C0]">{selectedSlot.time}</strong>.
          </p>
          <p className="text-[#475569] text-sm leading-relaxed mb-10">
            Check your inbox at <strong>{formData.email}</strong> — your
            calendar invite and strategist prep-pack are on their way within 10
            minutes.
          </p>
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 mb-8 text-left space-y-3">
            <h3 className="font-black text-[#0F172A] mb-3">
              What to expect on your call:
            </h3>
            {[
              "A deep-dive audit of your current funnel & traffic",
              "3 tailored strategies to hit your next revenue milestone",
              "A clear, prioritized roadmap you can act on immediately",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check
                  size={16}
                  className="text-[#1565C0] mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-[#475569] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-bold rounded-full hover:opacity-90 transition-all"
          >
            Back to BrandRyo <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultancySchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FFFE]">
        {/* Nav */}
        <SiteNav />

        <main className="max-w-6xl mx-auto px-6 pt-16 pb-32">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1565C0] text-xs font-bold uppercase tracking-widest mb-5">
              <Zap size={12} className="text-[#F7941D]" />
              Step {step} of 2 —{" "}
              {step === 1 ? "Your Growth Audit" : "Pick Your Strategy Session"}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-4">
              Claim Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565C0] to-[#29ABE2]">
                Free 15-Minute
              </span>{" "}
              Growth Strategy Call
            </h1>
            <p className="text-[#475569] text-lg max-w-xl mx-auto leading-relaxed">
              Pure strategy. No sales pitch. Leave with a clear roadmap to your
              next revenue milestone.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center gap-2 text-sm font-bold ${step >= 1 ? "text-[#1565C0]" : "text-[#94A3B8]"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 ${step >= 1 ? "bg-[#1565C0] border-[#1565C0] text-white" : "border-[#E2E8F0] text-[#94A3B8]"}`}
                >
                  {step > 1 ? <Check size={14} /> : "1"}
                </div>
                Business Audit
              </div>
              <div className="flex-1 h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-[#1565C0] to-[#29ABE2] transition-all duration-500 ${step >= 2 ? "w-full" : "w-0"}`}
                />
              </div>
              <div
                className={`flex items-center gap-2 text-sm font-bold ${step >= 2 ? "text-[#1565C0]" : "text-[#94A3B8]"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 ${step >= 2 ? "bg-[#1565C0] border-[#1565C0] text-white" : "border-[#E2E8F0] text-[#94A3B8]"}`}
                >
                  {step > 2 ? <Check size={14} /> : "2"}
                </div>
                Book Session
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Main Form Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[32px] border border-[#E2E8F0] shadow-xl shadow-[#1565C0]/5 p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={handleStep1}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-black text-[#0F172A] mb-1">
                          Tell us about your business
                        </h2>
                        <p className="text-[#475569] text-sm">
                          This helps us prepare a personalised strategy before
                          your call.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Alex Mercer"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all placeholder:text-[#CBD5E1] text-[#0F172A]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all placeholder:text-[#CBD5E1] text-[#0F172A]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all placeholder:text-[#CBD5E1] text-[#0F172A]"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Website / Brand URL
                          </label>
                          <input
                            type="text"
                            name="website"
                            placeholder="company.com"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all placeholder:text-[#CBD5E1] text-[#0F172A]"
                          />
                        </div>
                        <div className="space-y-1.5 md:col-span-2">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Current Monthly Revenue
                          </label>
                          <select
                            name="revenue"
                            value={formData.revenue}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all text-[#0F172A]"
                          >
                            <option value="" disabled>
                              Select your revenue range
                            </option>
                            <option value="0-10k">$0 – $10,000 / mo</option>
                            <option value="10k-50k">
                              $10,000 – $50,000 / mo
                            </option>
                            <option value="50k-250k">
                              $50,000 – $250,000 / mo
                            </option>
                            <option value="250k-1m">$250,000 – $1M / mo</option>
                            <option value="1m+">$1M+ / mo</option>
                          </select>
                        </div>
                        <div className="space-y-1.5 md:col-span-2">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Biggest Growth Challenge
                          </label>
                          <select
                            name="challenge"
                            value={formData.challenge}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all text-[#0F172A]"
                          >
                            <option value="" disabled>
                              Select your primary challenge
                            </option>
                            <option value="leads">
                              Not generating enough quality leads
                            </option>
                            <option value="cac">
                              Customer acquisition cost is too high
                            </option>
                            <option value="roas">
                              Paid ads not delivering ROI
                            </option>
                            <option value="retention">
                              Struggling with customer retention / LTV
                            </option>
                            <option value="brand">
                              Brand awareness is weak
                            </option>
                            <option value="other">
                              Other / Need full audit
                            </option>
                          </select>
                        </div>
                        <div className="space-y-1.5 md:col-span-2">
                          <label className="text-xs font-bold text-[#475569] uppercase tracking-widest">
                            Your 6-Month Revenue Goal
                          </label>
                          <textarea
                            name="goal"
                            placeholder="e.g. Grow from $50k/mo to $200k/mo in 6 months by scaling paid acquisition and improving funnel conversion..."
                            value={formData.goal}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-sm focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/10 outline-none transition-all placeholder:text-[#CBD5E1] text-[#0F172A] resize-none"
                          />
                        </div>
                      </div>

                      {formError && (
                        <p className="text-red-500 text-sm font-medium">
                          {formError}
                        </p>
                      )}

                      <button
                        type="submit"
                        className="w-full py-5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-black text-base rounded-2xl hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#1565C0]/25"
                      >
                        Analyse My Growth Potential <ArrowRight size={20} />
                      </button>
                      <p className="text-center text-[#94A3B8] text-xs font-medium flex items-center justify-center gap-2">
                        <ShieldCheck size={13} className="text-[#1565C0]" />{" "}
                        Strictly confidential. We never share your data.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-2xl font-black text-[#0F172A] mb-1">
                          Pick your strategy session slot
                        </h2>
                        <p className="text-[#475569] text-sm">
                          Choose a time that works for you. Your strategist will
                          review your site <em>before</em> the call.
                        </p>
                      </div>

                      {/* Slot Picker */}
                      <div className="overflow-x-auto pb-2">
                        <div className="flex gap-4 min-w-max">
                          {Object.entries(TIME_SLOTS).map(([day, slots]) => (
                            <div key={day} className="flex-shrink-0 w-36">
                              <div
                                className={`text-xs font-black uppercase tracking-widest mb-3 text-center ${selectedSlot.day === day ? "text-[#1565C0]" : "text-[#94A3B8]"}`}
                              >
                                {day}
                              </div>
                              <div className="space-y-2">
                                {slots.map((time) => {
                                  const isSelected =
                                    selectedSlot.day === day &&
                                    selectedSlot.time === time;
                                  return (
                                    <button
                                      key={time}
                                      onClick={() => {
                                        setSelectedSlot({ day, time });
                                        setFormError("");
                                      }}
                                      className={`w-full py-3 px-2 rounded-xl text-xs font-bold border transition-all ${
                                        isSelected
                                          ? "border-[#1565C0] bg-[#EFF6FF] text-[#1565C0] shadow-md shadow-[#1565C0]/15 scale-105"
                                          : "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:border-[#1565C0] hover:bg-[#EFF6FF] hover:text-[#1565C0]"
                                      }`}
                                    >
                                      {isSelected ? (
                                        <Check size={12} className="mx-auto" />
                                      ) : (
                                        time
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selectedSlot.day && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl"
                        >
                          <Calendar
                            size={18}
                            className="text-[#1565C0] flex-shrink-0"
                          />
                          <p className="text-sm font-bold text-[#1565C0]">
                            Selected: {selectedSlot.day} at {selectedSlot.time}{" "}
                            (15 min · Google Meet)
                          </p>
                        </motion.div>
                      )}

                      <div className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-sm text-[#475569]">
                        <p className="font-bold text-[#0F172A] mb-2">
                          Booking confirmation for: {formData.name}
                        </p>
                        <p className="mb-1">
                          📧 Confirmation sent to:{" "}
                          <strong>{formData.email}</strong>
                        </p>
                        {formData.phone && (
                          <p>
                            📱 We may WhatsApp you at:{" "}
                            <strong>{formData.phone}</strong>
                          </p>
                        )}
                      </div>

                      {formError && (
                        <p className="text-red-500 text-sm font-medium">
                          {formError}
                        </p>
                      )}

                      <div className="flex gap-4">
                        <button
                          onClick={() => setStep(1)}
                          className="px-6 py-4 text-[#475569] font-bold rounded-xl border border-[#E2E8F0] hover:border-[#1565C0] hover:text-[#1565C0] transition-all flex items-center gap-2"
                        >
                          <ArrowLeft size={16} /> Edit Details
                        </button>
                        <button
                          onClick={handleFinalSubmit}
                          disabled={isLoading}
                          className="flex-1 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white font-black rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#1565C0]/25"
                        >
                          {isLoading ? (
                            <span>Confirming booking...</span>
                          ) : (
                            <>
                              <span>Confirm My Growth Call</span>{" "}
                              <Check size={20} />
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-center text-[#94A3B8] text-xs flex items-center justify-center gap-2">
                        <ShieldCheck size={13} className="text-[#1565C0]" /> No
                        credit card. No obligation. 100% free.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* What you get */}
              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-7 shadow-md">
                <h3 className="font-black text-[#0F172A] text-base mb-5">
                  What you'll receive:
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Target size={18} className="text-[#1565C0]" />,
                      text: "Full audit of your current funnel & traffic",
                    },
                    {
                      icon: <Zap size={18} className="text-[#F7941D]" />,
                      text: "3 custom strategies to hit your next milestone",
                    },
                    {
                      icon: (
                        <CheckCircle2 size={18} className="text-[#1565C0]" />
                      ),
                      text: "Clear, prioritised action plan you can use today",
                    },
                    {
                      icon: <Users size={18} className="text-[#F7941D]" />,
                      text: "Direct access to a senior growth strategist",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-sm text-[#475569] font-medium pt-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Details */}
              <div className="bg-gradient-to-br from-[#1565C0] to-[#29ABE2] rounded-3xl p-7 text-white shadow-lg">
                <h3 className="font-black text-base mb-5 flex items-center gap-2">
                  <Calendar size={18} /> Session Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
                    <Clock size={16} className="flex-shrink-0" />
                    <span>15 minutes (focused & efficient)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
                    <Globe size={16} className="flex-shrink-0" />
                    <span>Google Meet (link sent via email)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
                    <Mail size={16} className="flex-shrink-0" />
                    <span>growth@brandryo.com</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-3xl border border-[#E2E8F0] p-7 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#F7941D"
                      className="text-[#F7941D]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#475569] italic leading-relaxed mb-5">
                  "The free call gave us more clarity than 6 months with our
                  previous agency. By month 3 we were at 4.6x ROAS."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
                    alt="Priya Sharma"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-black text-[#0F172A]">
                      Priya Sharma
                    </p>
                    <p className="text-xs text-[#94A3B8]">
                      CMO, Stride Apparel
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantee badge */}
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-3xl p-6 text-center">
                <ShieldCheck
                  className="mx-auto text-green-600 mb-2"
                  size={28}
                />
                <p className="text-sm font-black text-[#0F172A] mb-1">
                  100% Free. Zero Obligation.
                </p>
                <p className="text-xs text-[#475569]">
                  We're here to deliver value first. Always.
                </p>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
};

export default ConsultancyPage;
