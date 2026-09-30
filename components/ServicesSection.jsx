"use client";

import Link from "next/link";
import { Cpu, Crosshair, ShieldCheck, BarChart3, Palette, ArrowRight, Check } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            SOLUTIONS ARCHITECTURE
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Engineered for high-frequency in-app performance.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            From smart targeting algorithms and programmatic DSP execution to anti-fraud protection and flexible performance models, explore our core technology capabilities.
          </p>
        </div>

        {/* 3-Column Saturated Feature Cards (Peach, Ochre, Cream per DESIGN.md) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 4: Brand Peach (#ffb084) */}
          <div className="rounded-[24px] bg-[#ffb084] text-[#0a0a0a] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-[#0a0a0a] mb-6">
                <Cpu className="w-6 h-6" />
              </div>

              <div className="text-[12px] font-mono uppercase tracking-widest text-[#0a0a0a]/70 mb-2">
                Programmatic &amp; Native
              </div>
              <h3 className="text-[24px] font-semibold tracking-tight text-[#0a0a0a] mb-3">
                Autonomous DSP Scale
              </h3>
              <p className="text-[15px] text-[#0a0a0a]/85 leading-relaxed mb-6">
                Placements that blend into the app experience, plus programmatic buying for rapid scale and hyper-efficient bid targeting across global SSP exchanges.
              </p>

              {/* Data Table Fragment */}
              <div className="rounded-xl bg-white/70 border border-black/10 p-4 text-[13px] text-[#0a0a0a] space-y-1.5 mb-8">
                <div className="flex justify-between">
                  <span>RTB BID EVALUATION:</span>
                  <span className="font-bold">&lt; 10ms</span>
                </div>
                <div className="flex justify-between">
                  <span>USD PER BID:</span>
                  <span className="font-bold">$0.002 – $0.015</span>
                </div>
                <div className="flex justify-between">
                  <span>NATIVE AD INTEGRATION:</span>
                  <span className="font-bold">IAB MRAID 3.0 &amp; VAST</span>
                </div>
              </div>
            </div>

            <Link
              href="#advertisers"
              className="clay-button-primary w-fit gap-2"
            >
              <span>Explore DSP Scale</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 5: Brand Ochre (#e8b94a) */}
          <div className="rounded-[24px] bg-[#e8b94a] text-[#0a0a0a] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-[#0a0a0a] mb-6">
                <Crosshair className="w-6 h-6" />
              </div>

              <div className="text-[12px] font-mono uppercase tracking-widest text-[#0a0a0a]/70 mb-2">
                Precision Segmentation
              </div>
              <h3 className="text-[24px] font-semibold tracking-tight text-[#0a0a0a] mb-3">
                Smart Targeting Engine
              </h3>
              <p className="text-[15px] text-[#0a0a0a]/85 leading-relaxed mb-6">
                Reach the right users by GEO, device, OS, app category, carrier, and time, refined dynamically with continuous live behavioral signals.
              </p>

              {/* Data Table Fragment */}
              <div className="rounded-xl bg-white/70 border border-black/10 p-4 text-[13px] text-[#0a0a0a] space-y-1.5 mb-8">
                <div className="flex justify-between">
                  <span>TARGETING SIGNALS:</span>
                  <span className="font-bold">50+ Parameters</span>
                </div>
                <div className="flex justify-between">
                  <span>CROSS-GEO FILTER:</span>
                  <span className="font-bold">50+ Countries</span>
                </div>
                <div className="flex justify-between">
                  <span>POST-CLICK ENGAGEMENT:</span>
                  <span className="font-bold">+44% Intent Lift</span>
                </div>
              </div>
            </div>

            <Link
              href="#advertisers"
              className="clay-button-primary w-fit gap-2"
            >
              <span>Setup Audience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 6: Surface Card Cream (#f5f0e0) */}
          <div className="rounded-[24px] bg-[#f5f0e0] text-[#0a0a0a] border border-[#ebe6d6] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center text-[#0a0a0a] mb-6">
                <ShieldCheck className="w-6 h-6 text-[#22c55e]" />
              </div>

              <div className="text-[12px] font-mono uppercase tracking-widest text-[#6a6a6a] mb-2">
                Brand Safety &amp; Clean Traffic
              </div>
              <h3 className="text-[24px] font-semibold tracking-tight text-[#0a0a0a] mb-3">
                Anti-Fraud Protection
              </h3>
              <p className="text-[15px] text-[#3a3a3a] leading-relaxed mb-6">
                Continuous testing of creatives, sources and bids. Multi-layer traffic quality checks to filter low-quality, bot farms, and invalid traffic before attribution.
              </p>

              {/* Data Table Fragment */}
              <div className="rounded-xl bg-white border border-[#e5e5e5] p-4 text-[13px] text-[#0a0a0a] space-y-1.5 mb-8">
                <div className="flex justify-between">
                  <span>CLEAN TRAFFIC RATE:</span>
                  <span className="font-bold text-[#22c55e]">99.2% Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>CLICK-INJECTION FILTER:</span>
                  <span className="font-bold">Pre-Bid Heuristics</span>
                </div>
                <div className="flex justify-between">
                  <span>MMP COMPATIBILITY:</span>
                  <span className="font-bold">AppsFlyer · Adjust</span>
                </div>
              </div>
            </div>

            <Link
              href="#advertisers"
              className="clay-button-primary w-fit gap-2"
            >
              <span>Verify Clean Traffic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Secondary Services Row: Tracking & Reporting + Creative Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[24px] bg-white border border-[#e5e5e5] space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#faf5e8] border border-[#e5e5e5] flex items-center justify-center text-[#0a0a0a]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="clay-title-lg text-[#0a0a0a]">Tracking &amp; Transparent Reporting</h3>
            <p className="text-[15px] text-[#3a3a3a] leading-relaxed">
              Clear reporting on impressions, clicks, conversions, cost and ROI. Fully compatible with major MMPs (AppsFlyer, Adjust, Branch, Kochava, Singular) or custom server postbacks.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["AppsFlyer", "Adjust", "Branch", "Kochava", "Singular", "Direct S2S Postbacks"].map((mmp) => (
                <span key={mmp} className="px-3 py-1 rounded-full bg-[#f5f0e0] text-[#0a0a0a] text-[12px] font-medium border border-[#ebe6d6]">
                  {mmp}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-[#e5e5e5] space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#faf5e8] border border-[#e5e5e5] flex items-center justify-center text-[#0a0a0a]">
              <Palette className="w-5 h-5 text-[#ff4d8b]" />
            </div>
            <h3 className="clay-title-lg text-[#0a0a0a]">Creative Support &amp; Consultation</h3>
            <p className="text-[15px] text-[#3a3a3a] leading-relaxed">
              Actionable guidance on high-converting banners, responsive playables, video units, and post-click funnels engineered to convert into active paying users.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Playable Demos", "Rewarded Video", "Native In-Feed", "Multivariate Testing"].map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-[#f5f0e0] text-[#0a0a0a] text-[12px] font-medium border border-[#ebe6d6]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
