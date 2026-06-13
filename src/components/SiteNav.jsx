"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

// ─── Keyword-Rich Mega-Menu Data ─────────────────────────────────────────────
// Every label IS the exact phrase business owners type on Google.
// Search intent → KD → page created.

const megaMenus = {
  "Get Results": {
    label: "Get Results",
    tagline: "The exact outcomes business owners search for",
    columns: [
      {
        heading: "Leads & Demand",
        items: [
          {
            label: "How to Get More Leads",
            href: "/get-more-leads",
            kd: "KD 12",
            icon: "🎯",
          },
          {
            label: "Lead Generation for Small Business",
            href: "/get-more-leads",
            kd: "KD 14",
            icon: "🏢",
          },
          {
            label: "B2B Lead Generation",
            href: "/get-more-leads",
            kd: "KD 16",
            icon: "🤝",
          },
          {
            label: "How to Generate Leads Online",
            href: "/get-more-leads",
            kd: "KD 11",
            icon: "🌐",
          },
        ],
      },
      {
        heading: "Customers & Sales",
        items: [
          {
            label: "How to Get More Customers",
            href: "/get-more-customers",
            kd: "KD 13",
            icon: "👥",
          },
          {
            label: "How to Grow Sales Online",
            href: "/grow-sales-online",
            kd: "KD 10",
            icon: "📈",
          },
          {
            label: "How to Increase Online Revenue",
            href: "/grow-sales-online",
            kd: "KD 15",
            icon: "💰",
          },
          {
            label: "How to Scale My Business",
            href: "/grow-sales-online",
            kd: "KD 9",
            icon: "🚀",
          },
        ],
      },
      {
        heading: "Advertising ROI",
        items: [
          {
            label: "Google Ads for Small Business",
            href: "/google-ads-management",
            kd: "KD 17",
            icon: "🔍",
          },
          {
            label: "Facebook Ads Management",
            href: "/social-media-marketing",
            kd: "KD 18",
            icon: "📘",
          },
          {
            label: "How to Increase ROAS",
            href: "/insights/how-to-increase-roas",
            kd: "KD 8",
            icon: "📊",
          },
          {
            label: "Paid Ads Consultant",
            href: "/services/customer-acquisition",
            kd: "KD 12",
            icon: "🎪",
          },
        ],
      },
    ],
    cta: { label: "Get Free Growth Audit →", href: "/consultancy" },
  },

  "Our Services": {
    label: "Our Services",
    tagline: "Full-funnel growth services for ambitious brands",
    columns: [
      {
        heading: "Core Services",
        items: [
          {
            label: "Lead Generation",
            href: "/services/lead-generation",
            icon: "🎯",
          },
          {
            label: "Customer Acquisition",
            href: "/services/customer-acquisition",
            icon: "📣",
          },
          {
            label: "Revenue Growth & Retention",
            href: "/services/revenue-growth",
            icon: "📈",
          },
        ],
      },
      {
        heading: "Paid Advertising",
        items: [
          {
            label: "Google Ads Management",
            href: "/google-ads-management",
            icon: "🔍",
          },
          {
            label: "Social Media Marketing",
            href: "/social-media-marketing",
            icon: "📱",
          },
          { label: "Email Marketing", href: "/email-marketing", icon: "✉️" },
        ],
      },
      {
        heading: "Strategy",
        items: [
          {
            label: "Digital Marketing Consultant",
            href: "/insights/what-is-a-digital-marketing-consultant",
            icon: "💡",
          },
          {
            label: "Free Growth Consultancy",
            href: "/consultancy",
            icon: "🤝",
          },
        ],
      },
    ],
    cta: { label: "Explore All Services →", href: "/services" },
  },

  "Who We Help": {
    label: "Who We Help",
    tagline: "Bespoke strategies for every stage of growth",
    columns: [
      {
        heading: "By Business Type",
        items: [
          {
            label: "Small Business Marketing",
            href: "/small-business-marketing",
            icon: "🏪",
          },
          {
            label: "Marketing for Startups",
            href: "/marketing-for-startups",
            icon: "🚀",
          },
          {
            label: "E-commerce Growth",
            href: "/services/revenue-growth",
            icon: "🛍️",
          },
          { label: "SaaS & Tech Brands", href: "/services", icon: "💻" },
        ],
      },
      {
        heading: "By Goal",
        items: [
          { label: "Generate More Leads", href: "/get-more-leads", icon: "🎯" },
          {
            label: "Acquire More Customers",
            href: "/get-more-customers",
            icon: "👥",
          },
          {
            label: "Grow Revenue Online",
            href: "/grow-sales-online",
            icon: "💰",
          },
          {
            label: "Reduce Ad Spend Waste",
            href: "/google-ads-management",
            icon: "📉",
          },
        ],
      },
    ],
    cta: { label: "See All Solutions →", href: "/services" },
  },
};

// ─── Dropdown Component ───────────────────────────────────────────────────────
function MegaDropdown({ menu, isOpen }) {
  if (!isOpen) return null;
  return (
    <div
      className="absolute top-full left-0 w-screen max-w-4xl bg-white border border-[#E2E8F0] rounded-2xl shadow-2xl shadow-[#1565C0]/10 z-50 overflow-hidden"
      style={{ transform: "translateX(-10%)" }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#EFF6FF] to-[#F0FFFE] px-8 py-4 border-b border-[#E2E8F0]">
        <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-widest">
          {menu.tagline}
        </p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-3 gap-0 p-6">
        {menu.columns.map((col, ci) => (
          <div
            key={ci}
            className={`px-4 ${ci > 0 ? "border-l border-[#F1F5F9]" : ""}`}
          >
            <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.15em] mb-3">
              {col.heading}
            </p>
            <ul className="space-y-1">
              {col.items.map((item, ii) => (
                <li key={ii}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#EFF6FF] group transition-all"
                  >
                    <span className="text-lg leading-none">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#1565C0] transition-colors leading-tight block">
                        {item.label}
                      </span>
                      {item.kd && (
                        <span className="text-[10px] text-[#94A3B8] font-medium">
                          {item.kd} · Low Competition
                        </span>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA bar */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-8 py-4 flex items-center justify-between">
        <p className="text-xs text-[#475569]">
          Not sure where to start? Book a{" "}
          <strong className="text-[#1565C0]">free 15-min strategy call</strong>.
        </p>
        <a
          href={menu.cta.href}
          className="px-5 py-2 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white text-xs font-bold rounded-full hover:opacity-90 transition-all"
        >
          {menu.cta.label}
        </a>
      </div>
    </div>
  );
}

// ─── Main SiteNav Component ───────────────────────────────────────────────────
export default function SiteNav({ activePage = "" }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={LOGO}
            alt="BrandRyo – Digital Marketing Consultant Agency"
            className="h-9 w-auto object-contain rounded-lg"
          />
          <span className="text-xl font-black tracking-tight text-[#0F172A]">
            Brand<span className="text-[#1565C0]">Ryo</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 relative">
          {/* Keyword mega-menu triggers */}
          {Object.values(megaMenus).map((menu) => (
            <div key={menu.label} className="relative">
              <button
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onClick={() =>
                  setOpenMenu(openMenu === menu.label ? null : menu.label)
                }
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  openMenu === menu.label
                    ? "bg-[#EFF6FF] text-[#1565C0]"
                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1565C0]"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === menu.label}
              >
                {menu.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${openMenu === menu.label ? "rotate-180 text-[#1565C0]" : ""}`}
                />
              </button>
              <div
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
                className="absolute top-full left-0 pt-2"
              >
                <MegaDropdown menu={menu} isOpen={openMenu === menu.label} />
              </div>
            </div>
          ))}

          {/* Static links */}
          <a
            href="/about"
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activePage === "about"
                ? "text-[#1565C0]"
                : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1565C0]"
            }`}
          >
            About
          </a>
          <a
            href="/insights"
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activePage === "insights"
                ? "text-[#1565C0]"
                : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1565C0]"
            }`}
          >
            Insights
          </a>

          {/* CTA */}
          <a
            href="/consultancy"
            className="ml-3 px-6 py-2.5 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white rounded-full font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-md shadow-[#1565C0]/20 whitespace-nowrap"
          >
            Free Consultancy →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#0F172A] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0F172A] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0F172A] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {Object.values(megaMenus).map((menu) => (
              <div key={menu.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === menu.label ? null : menu.label,
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-[#0F172A] hover:bg-[#EFF6FF] transition-all"
                >
                  {menu.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileExpanded === menu.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === menu.label && (
                  <div className="pl-4 pb-2">
                    {menu.columns.map((col, ci) => (
                      <div key={ci} className="mb-3">
                        <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest px-4 py-1">
                          {col.heading}
                        </p>
                        {col.items.map((item, ii) => (
                          <a
                            key={ii}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:bg-[#EFF6FF] hover:text-[#1565C0] transition-all"
                          >
                            <span>{item.icon}</span>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Static mobile links */}
            <a
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#475569] hover:bg-[#EFF6FF] hover:text-[#1565C0] transition-all"
            >
              About
            </a>
            <a
              href="/insights"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#475569] hover:bg-[#EFF6FF] hover:text-[#1565C0] transition-all"
            >
              Insights
            </a>
            <div className="pt-3 pb-4">
              <a
                href="/consultancy"
                className="block px-6 py-4 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white rounded-2xl text-center font-bold text-sm"
              >
                Book Free Consultancy — It's 100% Free →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
