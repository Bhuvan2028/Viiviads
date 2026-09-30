"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Smartphone,
  Target,
  Cpu,
  ShieldCheck,
  Crosshair,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Track window scroll for elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSolutionsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const solutions = [
    {
      name: "In-App Advertising",
      desc: "Banner, interstitial, rewarded & native formats",
      href: "#services",
      icon: Smartphone,
      color: "text-[#ff4d8b]",
    },
    {
      name: "Performance Marketing",
      desc: "Goal-based CPI, CPA, CPL, CPS campaigns",
      href: "#services",
      icon: Target,
      color: "text-[#1a3a3a]",
    },
    {
      name: "Native & Programmatic DSP",
      desc: "Autonomous RTB bidding at < 10ms latency",
      href: "#services",
      icon: Cpu,
      color: "text-[#b8a4ed]",
    },
    {
      name: "Smart Targeting",
      desc: "GEO, device, OS, vertical & behavioral signals",
      href: "#services",
      icon: Crosshair,
      color: "text-[#ffb084]",
    },
    {
      name: "Anti-Fraud Protection",
      desc: "Pre-bid heuristic validation & clean traffic",
      href: "#services",
      icon: ShieldCheck,
      color: "text-[#22c55e]",
    },
    {
      name: "Tracking & Reporting",
      desc: "Certified MMP integration & transparent stats",
      href: "#services",
      icon: BarChart3,
      color: "text-[#e8b94a]",
    },
    {
      name: "Traffic & CVR Estimator",
      desc: "Simulate budget, CPC costs, clicks & conversion rates",
      href: "#estimator",
      icon: TrendingUp,
      color: "text-[#22c55e]",
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-[#fffaf0]/95 backdrop-blur-md border-b transition-all duration-200 h-[64px] flex items-center px-4 sm:px-8 ${
          scrolled
            ? "border-[#dcd7c7] shadow-[0_4px_24px_rgba(10,10,10,0.05)]"
            : "border-[#e5e5e5]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between gap-4">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="flex items-center group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a] rounded-lg"
          >
            <Image
              src="/viiviads-logo.svg"
              alt="VIIVIADS"
              width={155}
              height={34}
              className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-[#3a3a3a]"
          >
            {/* Solutions Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors ${
                  solutionsDropdownOpen ? "text-[#0a0a0a] bg-[#f5f0e0]" : ""
                }`}
                aria-expanded={solutionsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsDropdownOpen ? "rotate-180 text-[#0a0a0a]" : "text-[#6a6a6a]"
                  }`}
                />
              </button>

              {/* Solutions Flyout Dropdown Card */}
              {solutionsDropdownOpen && (
                <div
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  className="absolute left-0 top-full pt-2 w-[480px] z-50 animate-fade-in"
                >
                  <div className="p-4 rounded-[20px] bg-[#fffaf0] border border-[#e5e5e5] shadow-xl space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#6a6a6a] border-b border-[#ebe6d6] mb-1">
                      Capabilities &amp; Infrastructure
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {solutions.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setSolutionsDropdownOpen(false)}
                            className="p-2.5 rounded-[12px] hover:bg-[#faf5e8] border border-transparent hover:border-[#e5e5e5] transition-all flex items-start gap-2.5 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#f5f0e0] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                              <ItemIcon className={`w-4 h-4 ${item.color}`} />
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-[#0a0a0a] group-hover:text-[#ff4d8b] transition-colors leading-tight">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-[#6a6a6a] leading-snug line-clamp-1 mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#how-it-works"
              className="px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="#advertisers"
              className="px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors"
            >
              For Advertisers
            </Link>

            <Link
              href="#publishers"
              className="px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors"
            >
              For Publishers
            </Link>

            <Link
              href="#verticals"
              className="px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors"
            >
              Verticals
            </Link>

            <Link
              href="#why-viiviads"
              className="px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors"
            >
              Why VIIVIADS
            </Link>

            <Link
              href="#faq"
              className="px-3 py-1.5 rounded-lg hover:text-[#0a0a0a] hover:bg-[#f5f0e0]/70 transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="#advertisers"
              className="clay-button-primary !h-[38px] !px-3.5 !text-[13px] whitespace-nowrap"
            >
              Launch Campaign
            </Link>

            <Link
              href="#publishers"
              className="clay-button-secondary !h-[38px] !px-3.5 !text-[13px] whitespace-nowrap"
            >
              Join as Publisher
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0a0a0a] hover:bg-[#faf5e8] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Modal */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-[#0a0a0a]/30 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Canvas */}
          <div className="fixed inset-x-0 top-[64px] bg-[#fffaf0] border-b border-[#e5e5e5] px-6 py-6 shadow-2xl z-50 max-h-[calc(100vh-64px)] overflow-y-auto animate-fade-in space-y-6">
            {/* Quick Role Gateway Cards */}
            <div className="grid grid-cols-2 gap-3 pb-2">
              <Link
                href="#advertisers"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-[16px] bg-[#f5f0e0] border border-[#ebe6d6] hover:border-[#0a0a0a] transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#ff4d8b]">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0a0a0a]">For Advertisers</div>
                  <div className="text-[11px] text-[#6a6a6a]">Scale app installs &amp; ROAS</div>
                </div>
              </Link>

              <Link
                href="#publishers"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-[16px] bg-[#f5f0e0] border border-[#ebe6d6] hover:border-[#0a0a0a] transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#1a3a3a]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0a0a0a]">For Publishers</div>
                  <div className="text-[11px] text-[#6a6a6a]">Monetise mobile traffic</div>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 border-t border-[#ebe6d6] pt-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6a6a6a] px-3 mb-2">
                Sections &amp; Solutions
              </div>
              {[
                { name: "Services & Solutions", href: "#services" },
                { name: "Traffic & CVR Estimator", href: "#estimator" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "App Verticals", href: "#verticals" },
                { name: "Pricing Models", href: "#pricing" },
                { name: "Why VIIVIADS", href: "#why-viiviads" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-[12px] text-[15px] font-semibold text-[#0a0a0a] hover:bg-[#faf5e8] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#6a6a6a]" />
                </Link>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-[#ebe6d6]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link
                  href="#advertisers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="clay-button-primary w-full text-center text-xs justify-center"
                >
                  Launch Campaign
                </Link>
                <Link
                  href="#publishers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="clay-button-secondary w-full text-center text-xs justify-center"
                >
                  Join as Publisher
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
