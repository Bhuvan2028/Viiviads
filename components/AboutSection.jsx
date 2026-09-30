"use client";

import Link from "next/link";
import { Smartphone, Target, Share2, ArrowRight, Award, Eye, Sparkles, Users, ShieldAlert, Cpu } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      title: "Performance first",
      desc: "We're judged by results, not impressions.",
      icon: Award,
    },
    {
      title: "Transparency",
      desc: "Clear reporting, honest communication.",
      icon: Eye,
    },
    {
      title: "Quality over volume",
      desc: "Better users beat bigger numbers.",
      icon: Sparkles,
    },
    {
      title: "Partnership",
      desc: "We grow when our partners grow.",
      icon: Users,
    },
    {
      title: "Compliance",
      desc: "We follow platform, regional and advertiser rules.",
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-20">
        {/* Intro Block (Verbatim from Content Brief) */}
        <div className="max-w-3xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            MOBILE-FIRST AD PARTNER
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Smart in-app campaigns that drive real performance.
          </h2>
          <p className="text-[17px] text-[#3a3a3a] leading-relaxed">
            VIIVIADS is a mobile-first ad partner. We help brands grow through in-app campaigns by combining smart targeting with a strategy-led approach. Whether you want installs, leads or sales, we focus on quality users and outcomes you can track.
          </p>
        </div>

        {/* What We Do: Saturated Feature Cards (Pink, Teal, Lavender per DESIGN.md) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Brand Pink (#ff4d8b) */}
          <div className="rounded-[24px] bg-[#ff4d8b] text-white p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6">
                <Smartphone className="w-6 h-6" />
              </div>

              <div className="text-[12px] font-mono uppercase tracking-widest text-white/80 mb-2">
                Core Capability 01
              </div>
              <h3 className="text-[24px] font-semibold tracking-tight text-white mb-3">
                In-App Advertising
              </h3>
              <p className="text-[15px] text-white/90 leading-relaxed mb-6">
                Reach users where they spend most of their time, inside the apps they use every day. Deliver native, interstitial, banner and rewarded formats that captivate attention.
              </p>

              {/* Product UI Fragment inside the pink card */}
              <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 text-[12px] font-mono text-white/95 space-y-1.5 mb-8">
                <div className="flex justify-between border-b border-white/15 pb-1">
                  <span>FORMAT: REWARDED / NATIVE</span>
                  <span>CTR: 4.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>ENGAGEMENT:</span>
                  <span className="font-bold">High Intent</span>
                </div>
                <div className="flex justify-between">
                  <span>ATTRIBUTION:</span>
                  <span className="font-bold">MMP Verified</span>
                </div>
              </div>
            </div>

            <Link
              href="#services"
              className="clay-button-on-color w-fit gap-2"
            >
              <span>Explore Formats</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Brand Teal (#1a3a3a) */}
          <div className="rounded-[24px] bg-[#1a3a3a] text-white p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>

              <div className="text-[12px] font-mono uppercase tracking-widest text-white/80 mb-2">
                Core Capability 02
              </div>
              <h3 className="text-[24px] font-semibold tracking-tight text-white mb-3">
                Performance Marketing
              </h3>
              <p className="text-[15px] text-white/90 leading-relaxed mb-6">
                Pay-for-results campaigns built around your precise goals. We align budgets directly to down-funnel milestones: CPI, CPA, CPL, and CPS with verified ROAS.
              </p>

              {/* Product UI Fragment inside teal card */}
              <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-4 text-[12px] font-mono text-white/90 space-y-1.5 mb-8">
                <div className="flex justify-between border-b border-white/15 pb-1">
                  <span>MODEL: CPI / CPA / CPL</span>
                  <span>ROI DRIVEN</span>
                </div>
                <div className="flex justify-between">
                  <span>TARGET ACQUISITION:</span>
                  <span className="font-bold text-[#a4d4c5]">Optimised</span>
                </div>
                <div className="flex justify-between">
                  <span>FRAUD INTERCEPTION:</span>
                  <span className="font-bold text-[#22c55e]">99.2% Clean</span>
                </div>
              </div>
            </div>

            <Link
              href="#advertisers"
              className="clay-button-on-color w-fit gap-2"
            >
              <span>Launch Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Brand Lavender (#b8a4ed) */}
          <div className="rounded-[24px] bg-[#b8a4ed] text-[#0a0a0a] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-[#0a0a0a] mb-6">
                <Share2 className="w-6 h-6" />
              </div>

              <div className="text-[12px] font-mono uppercase tracking-widest text-[#0a0a0a]/70 mb-2">
                Core Capability 03
              </div>
              <h3 className="text-[24px] font-semibold tracking-tight text-[#0a0a0a] mb-3">
                Publisher Network
              </h3>
              <p className="text-[15px] text-[#0a0a0a]/85 leading-relaxed mb-6">
                A curated network of app publishers and traffic sources delivering quality, compliant traffic with maximum fill rates and dependable, on-time payments.
              </p>

              {/* Product UI Fragment inside lavender card */}
              <div className="rounded-xl bg-white/70 border border-black/10 p-4 text-[12px] font-mono text-[#0a0a0a] space-y-1.5 mb-8">
                <div className="flex justify-between border-b border-black/10 pb-1">
                  <span>GLOBAL INVENTORY</span>
                  <span>50+ GEOS</span>
                </div>
                <div className="flex justify-between">
                  <span>PAYOUT SCHEDULE:</span>
                  <span className="font-bold">On-Time Always</span>
                </div>
                <div className="flex justify-between">
                  <span>DIRECT OFFERS:</span>
                  <span className="font-bold">Tier 1 &amp; Growth</span>
                </div>
              </div>
            </div>

            <Link
              href="#publishers"
              className="clay-button-primary w-fit gap-2"
            >
              <span>Join as Publisher</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* About Us Deep Dive: Who We Are, Mission, Vision, and Values */}
        <div className="rounded-[24px] bg-[#faf5e8] border border-[#e5e5e5] p-8 sm:p-12 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px]">
                ABOUT US
              </div>
              <h3 className="clay-display-md text-[#0a0a0a]">
                Who We Are
              </h3>
              <p className="text-sm font-semibold text-[#0a0a0a]">
                Founded 2024 · Global Reach
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-[16px] text-[#3a3a3a] leading-relaxed">
              <p>
                VIIVIADS is an advertising services company focused on mobile. Founded in 2024, we work as the link between brands that want growth and publishers that own quality audiences. Our team blends technology and strategy to deliver campaigns that perform across all app verticals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-[16px] bg-white border border-[#e5e5e5] space-y-1">
                  <div className="text-[12px] font-bold text-[#ff4d8b] uppercase tracking-wider">
                    Our Mission
                  </div>
                  <div className="text-[14px] text-[#0a0a0a] font-medium leading-relaxed">
                    To make mobile advertising simple, transparent and results-driven for brands and publishers alike.
                  </div>
                </div>

                <div className="p-5 rounded-[16px] bg-white border border-[#e5e5e5] space-y-1">
                  <div className="text-[12px] font-bold text-[#1a3a3a] uppercase tracking-wider">
                    Our Vision
                  </div>
                  <div className="text-[14px] text-[#0a0a0a] font-medium leading-relaxed">
                    To become a trusted growth partner for performance-driven advertisers and publishers worldwide.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values (5 Short Cards on surface-card #f5f0e0) */}
          <div className="pt-8 border-t border-[#ebe6d6]">
            <div className="mb-6">
              <h4 className="text-[18px] font-semibold text-[#0a0a0a]">Our Values</h4>
              <p className="text-[13px] text-[#6a6a6a]">The principles that define how VIIVIADS operates.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((v) => {
                const VIcon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-5 rounded-[16px] bg-[#f5f0e0] border border-[#ebe6d6] space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white text-[#0a0a0a] flex items-center justify-center">
                      <VIcon className="w-4 h-4" />
                    </div>
                    <div className="text-[14px] font-semibold text-[#0a0a0a]">
                      {v.title}
                    </div>
                    <div className="text-[12px] text-[#6a6a6a] leading-relaxed">
                      {v.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
