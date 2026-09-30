"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function Hero() {
  const [activeSimulator, setActiveSimulator] = useState("gaming");

  const simulations = {
    gaming: {
      tag: "PLAYABLE & REWARDED DEMO",
      badgeColor: "bg-[#ff4d8b]",
      textColor: "text-[#ff4d8b]",
      adTitle: "Interactive In-Game Demo Unit",
      topBadge: "88.4% Completion",
      metric1Label: "IPM (Installs/1K)",
      metric1Value: "32.4 IPM",
      metric2Label: "CVR (Click-to-Install)",
      metric2Value: "18.6%",
    },
    fintech: {
      tag: "FINTECH & NEOBANKING",
      badgeColor: "bg-[#1a3a3a]",
      textColor: "text-[#1a3a3a]",
      adTitle: "Account Activation Funnel",
      topBadge: "99.4% Fraud-Free",
      metric1Label: "Install-to-KYC",
      metric1Value: "24.8%",
      metric2Label: "Target KYC CPA",
      metric2Value: "$14.20",
    },
    ecommerce: {
      tag: "DYNAMIC IN-APP CATALOG",
      badgeColor: "bg-[#ff6b5a]",
      textColor: "text-[#ff6b5a]",
      adTitle: "Native Interactive Product Showcase",
      topBadge: "2.4x 30D ROAS",
      metric1Label: "Cart Add Rate",
      metric1Value: "21.5%",
      metric2Label: "First-Order CVR",
      metric2Value: "16.2%",
    },
    entertainment: {
      tag: "RICH MEDIA VIDEO TRAILER",
      badgeColor: "bg-[#e8b94a]",
      textColor: "text-[#e8b94a]",
      adTitle: "Full-Screen Immersive Trailer",
      topBadge: "92.1% VTR",
      metric1Label: "Trial Start Rate",
      metric1Value: "18.4%",
      metric2Label: "D30 Retention",
      metric2Value: "36.2%",
    },
  };

  const sim = simulations[activeSimulator];

  return (
    <section className="relative bg-[#fffaf0] py-16 md:py-24 px-4 sm:px-8 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: 7 Cols */}
        <div className="lg:col-span-7 space-y-6">
          {/* Headline: Plain Black 72px Display at weight 500 per DESIGN.md */}
          <h1 className="clay-display-xl max-w-2xl text-[#0a0a0a]">
            Grow your brand with mobile-first advertising.
          </h1>

          {/* Subhead: Body-md (16px, 1.55 line height) per DESIGN.md */}
          <p className="text-[17px] text-[#3a3a3a] max-w-xl leading-relaxed font-normal">
            VIIVIADS connects advertisers with high-quality mobile audiences through smart in-app campaigns, built for performance across every app vertical.
          </p>

          {/* Dual Button CTA Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#advertisers"
              className="clay-button-primary gap-2 group"
            >
              <span>Become an Advertiser</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="#publishers"
              className="clay-button-secondary hover:bg-[#f5f0e0]"
            >
              Become a Publisher
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 border-t border-[#ebe6d6] grid grid-cols-3 gap-4 max-w-xl">
            <div className="p-3.5 rounded-[16px] bg-[#faf5e8] border border-[#e5e5e5] transition-transform hover:-translate-y-0.5">
              <div className="text-[26px] font-semibold text-[#0a0a0a] tracking-tight">50+</div>
              <div className="text-[12px] text-[#6a6a6a]">Global GEOs</div>
            </div>
            <div className="p-3.5 rounded-[16px] bg-[#faf5e8] border border-[#e5e5e5] transition-transform hover:-translate-y-0.5">
              <div className="text-[26px] font-semibold text-[#0a0a0a] tracking-tight">100M+</div>
              <div className="text-[12px] text-[#6a6a6a]">In-App Impressions</div>
            </div>
            <div className="p-3.5 rounded-[16px] bg-[#faf5e8] border border-[#e5e5e5] transition-transform hover:-translate-y-0.5">
              <div className="text-[26px] font-semibold text-[#22c55e] tracking-tight">99.2%</div>
              <div className="text-[12px] text-[#6a6a6a]">Clean Verified Traffic</div>
            </div>
          </div>
        </div>

        {/* Right Column: 5 Cols holding the 3D Clay Hero Artifact with Interactive Telemetry */}
        <div className="lg:col-span-5 relative space-y-3">
          {/* Interactive Simulation Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6a6a6a]">
              Interactive RTB Simulator:
            </span>
            <div className="inline-flex items-center p-1 rounded-full bg-[#f5f0e0] border border-[#ebe6d6] overflow-x-auto max-w-full">
              {Object.keys(simulations).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSimulator(key)}
                  className={`px-3 py-1 rounded-full text-[12px] font-semibold capitalize transition-all ${
                    activeSimulator === key
                      ? "bg-[#0a0a0a] text-white shadow-xs"
                      : "text-[#6a6a6a] hover:text-[#0a0a0a]"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          <div className="relative rounded-[24px] overflow-hidden bg-[#faf5e8] border border-[#e5e5e5] shadow-lg group">
            {/* 3D Clay Hero Visual */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/clay-hero.jpg"
                alt="VIIVIADS 3D Performance Platform Artifact"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                priority
              />

              {/* Dynamic In-App Overlay Widget */}
              <div className="absolute top-4 left-4 right-4 p-3 rounded-[16px] bg-white/95 backdrop-blur-md border border-[#e5e5e5] shadow-sm space-y-1.5 transition-all">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-semibold text-[#0a0a0a] flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${sim.badgeColor}`} />
                    {sim.tag}
                  </span>
                  <span className="text-[#22c55e] font-semibold">{sim.topBadge}</span>
                </div>
                <div className="text-[13px] font-semibold text-[#0a0a0a]">
                  {sim.adTitle}
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#6a6a6a] pt-1 border-t border-[#f0f0f0]">
                  <div>{sim.metric1Label}: <span className="font-bold text-[#0a0a0a]">{sim.metric1Value}</span></div>
                  <div>{sim.metric2Label}: <span className="font-bold text-[#22c55e]">{sim.metric2Value}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
