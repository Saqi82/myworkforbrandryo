"use client";
import React from "react";
import { Mail, Globe, ArrowRight } from "lucide-react";

const LOGO =
  "https://dtvoeevhaseb5.cloudfront.net/user-uploads/40e84918-95a6-41a8-9d9f-4272e6a4fde8.jpg";

const footerLinks = {
  Solutions: [
    { label: "How to Get More Leads", href: "/get-more-leads" },
    { label: "How to Get More Customers", href: "/get-more-customers" },
    { label: "Grow Sales Online", href: "/grow-sales-online" },
    { label: "Google Ads Management", href: "/google-ads-management" },
    { label: "Social Media Marketing", href: "/social-media-marketing" },
    { label: "Email Marketing", href: "/email-marketing" },
    { label: "Small Business Marketing", href: "/small-business-marketing" },
    { label: "Marketing for Startups", href: "/marketing-for-startups" },
  ],
  Services: [
    { label: "Lead Generation", href: "/services/lead-generation" },
    { label: "Customer Acquisition", href: "/services/customer-acquisition" },
    { label: "Revenue Growth & Retention", href: "/services/revenue-growth" },
    { label: "All Services", href: "/services" },
  ],
  Company: [
    { label: "About BrandRyo", href: "/about" },
    { label: "Insights & Blog", href: "/insights" },
    { label: "Free Consultancy", href: "/consultancy" },
  ],
};

const stats = [
  { value: "250+", label: "Brands Scaled" },
  { value: "$120M+", label: "Revenue Generated" },
  { value: "4.8x", label: "Avg. ROAS" },
  { value: "98%", label: "Satisfaction" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Top stat bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-black text-[#29ABE2] mb-1">
                {s.value}
              </div>
              <div className="text-xs text-[#94A3B8] font-semibold uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <a href="/" className="flex items-center gap-3 mb-5">
              <img
                src={LOGO}
                alt="BrandRyo – Digital Marketing Consultant Agency"
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-2xl font-black">
                Brand<span className="text-[#29ABE2]">Ryo</span>
              </span>
            </a>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 max-w-xs">
              We help ambitious brands generate consistent leads, acquire loyal
              customers, and maximise revenue — through data-driven digital
              marketing systems.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:growth@brandryo.com"
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#29ABE2] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-[#29ABE2]" />
                </div>
                growth@brandryo.com
              </a>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Globe size={15} className="text-[#29ABE2]" />
                </div>
                brandryo.com
              </div>
            </div>

            {/* CTA */}
            <a
              href="/consultancy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1565C0] to-[#29ABE2] text-white text-sm font-bold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#1565C0]/25"
            >
              Book Free Consultancy <ArrowRight size={15} />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="md:col-span-2">
              <h5 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-5">
                {group}
              </h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors leading-snug block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / CTA column */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-5">
              Free Growth Audit
            </h5>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
              15-minute strategy call with a senior growth consultant. Walk away
              with a clear action plan — completely free.
            </p>
            <a
              href="/consultancy"
              className="block w-full py-3 text-center text-sm font-bold bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
            >
              Claim Free Call →
            </a>

            {/* Trust badges */}
            <div className="mt-6 space-y-2">
              {[
                "No obligation",
                "No hard sell",
                "Real strategist, not a bot",
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-[#94A3B8]"
                >
                  <div className="w-4 h-4 rounded-full bg-[#1565C0]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} BrandRyo Agency Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#475569]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a
              href="/sitemap.xml"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
