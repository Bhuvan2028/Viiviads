"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gamepad2,
  Landmark,
  ShoppingBag,
  Wrench,
  Film,
  MessageCircleHeart,
  GraduationCap,
  HeartPulse,
  Compass,
  ShieldAlert,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function VerticalsSection() {
  const [selectedVertical, setSelectedVertical] = useState("Gaming and Casual Games");

  const verticals = [
    {
      name: "Gaming and Casual Games",
      desc: "Interactive playables, rewarded video units, and mid-core campaigns optimized for Day 30 retention and in-app purchases.",
      icon: Gamepad2,
      tag: "Playables & Video",
      cpi: "$0.80 - $2.40",
      targetKpi: "D30 Retention & IAP",
      bestFormat: "Playable Demo + Rewarded Video",
    },
    {
      name: "Fintech and Payments",
      desc: "Neobanks, wallets, and financial services scaling verified KYC completions, account openings, and first-time deposits.",
      icon: Landmark,
      tag: "CPA / KYC Focused",
      cpi: "$2.50 - $6.50",
      targetKpi: "KYC Account Activation",
      bestFormat: "Contextual Native + In-Feed",
    },
    {
      name: "E-Commerce and Shopping",
      desc: "D2C shopping apps, marketplaces, and quick-commerce platforms driving first orders, app reinstalls, and repeat purchases.",
      icon: ShoppingBag,
      tag: "ROAS & CPS",
      cpi: "$1.20 - $3.10",
      targetKpi: "First Order & Cart Size",
      bestFormat: "Dynamic Catalog & Interstitials",
    },
    {
      name: "Utilities and Productivity Apps",
      desc: "Cleaners, VPNs, scanner tools, and keyboard apps scaling massive international user acquisition at lean, predictable CPIs.",
      icon: Wrench,
      tag: "High Volume CPI",
      cpi: "$0.40 - $1.20",
      targetKpi: "Low CAC & Volume Scale",
      bestFormat: "High-Frequency Interstitials",
    },
    {
      name: "Entertainment and Streaming",
      desc: "OTT video services, audio streaming, and comic apps acquiring engaged free-trial subscribers and long-term active listeners.",
      icon: Film,
      tag: "Subscription Scale",
      cpi: "$1.10 - $2.80",
      targetKpi: "Free Trial to Paid Sub",
      bestFormat: "Rich Media Video Trailers",
    },
    {
      name: "Social and Community",
      desc: "Social networks, live audio spaces, and community platforms scaling genuine human interactions and daily active usage.",
      icon: MessageCircleHeart,
      tag: "Active Engagements",
      cpi: "$0.70 - $1.90",
      targetKpi: "Profile Setup & 7D Retention",
      bestFormat: "Native Feed & Social Story Ads",
    },
    {
      name: "Education and E-Learning",
      desc: "Language learning, test preparation, and skill-building applications converting student sign-ups into paid course enrollment.",
      icon: GraduationCap,
      tag: "Lead & Enrollment",
      cpi: "$1.50 - $4.00",
      targetKpi: "Trial Lesson Completion",
      bestFormat: "Micro-Lesson Interactive Units",
    },
    {
      name: "Health and Fitness",
      desc: "Workout companions, meditation guides, and nutrition trackers growing active recurring monthly subscribers across tier-1 GEOs.",
      icon: HeartPulse,
      tag: "Subscription Lift",
      cpi: "$1.40 - $3.60",
      targetKpi: "Annual Subscription Trial",
      bestFormat: "Motivation Video & Carousel",
    },
    {
      name: "Travel and Lifestyle",
      desc: "Flight aggregators, hotel booking apps, and local mobility platforms driving in-app reservations and seasonal booking peaks.",
      icon: Compass,
      tag: "Booking CPA",
      cpi: "$1.80 - $4.50",
      targetKpi: "Confirmed Reservation",
      bestFormat: "Destination Native Interstitial",
    },
  ];

  const current = verticals.find((v) => v.name === selectedVertical) || verticals[0];
  const CurrentIcon = current.icon;

  return (
    <section id="verticals" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            APP VERTICALS
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Verticals we work with.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            Every category has unique acquisition economics, conversion curves, and user lifecycles. Click any category below to preview performance metrics.
          </p>
        </div>

        {/* Interactive Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((v) => {
            const VIcon = v.icon;
            const isSelected = selectedVertical === v.name;
            return (
              <button
                type="button"
                key={v.name}
                onClick={() => setSelectedVertical(v.name)}
                className={`p-6 rounded-[20px] text-left transition-all relative ${
                  isSelected
                    ? "bg-[#0a0a0a] text-white shadow-md -translate-y-1 ring-2 ring-[#ff4d8b]"
                    : "bg-[#faf5e8] border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#b0b0b5]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? "bg-white/10 text-white" : "bg-white border border-[#e5e5e5] text-[#0a0a0a]"
                    }`}
                  >
                    <VIcon className={`w-5 h-5 ${isSelected ? "text-[#ff4d8b]" : "text-[#ff4d8b]"}`} />
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                      isSelected
                        ? "bg-white/10 border-white/20 text-[#a4d4c5]"
                        : "bg-white border-[#e5e5e5] text-[#6a6a6a]"
                    }`}
                  >
                    {v.tag}
                  </span>
                </div>

                <div>
                  <h3 className={`text-[16px] font-semibold mb-1 ${isSelected ? "text-white" : "text-[#0a0a0a]"}`}>
                    {v.name}
                  </h3>
                  <p className={`text-[13px] leading-relaxed line-clamp-2 ${isSelected ? "text-white/80" : "text-[#6a6a6a]"}`}>
                    {v.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Playbook Inspector Card */}
        <div className="rounded-[24px] bg-[#faf5e8] border border-[#e5e5e5] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[16px] bg-white border border-[#e5e5e5] flex items-center justify-center shrink-0 mt-0.5">
              <CurrentIcon className="w-6 h-6 text-[#ff4d8b]" />
            </div>
            <div className="space-y-1">
              <div className="text-[12px] font-mono font-bold text-[#ff4d8b] uppercase">
                Active Vertical Playbook
              </div>
              <h4 className="text-[20px] font-semibold text-[#0a0a0a]">
                {current.name}
              </h4>
              <p className="text-[14px] text-[#3a3a3a] max-w-xl leading-relaxed">
                {current.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-[#ebe6d6] w-full md:w-auto">
            <div className="p-3 rounded-xl bg-white border border-[#e5e5e5]">
              <div className="text-[10px] font-mono text-[#6a6a6a]">BENCHMARK CPI</div>
              <div className="text-[14px] font-bold text-[#0a0a0a]">{current.cpi}</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#e5e5e5]">
              <div className="text-[10px] font-mono text-[#6a6a6a]">PRIMARY KPI</div>
              <div className="text-[14px] font-bold text-[#22c55e]">{current.targetKpi}</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-[#e5e5e5]">
              <div className="text-[10px] font-mono text-[#6a6a6a]">RECOMMENDED FORMAT</div>
              <div className="text-[12px] font-semibold text-[#0a0a0a] leading-tight mt-0.5">{current.bestFormat}</div>
            </div>
          </div>
        </div>

        {/* Regulatory & Compliance Notice per brief */}
        <div className="rounded-[20px] bg-[#faf5e8] border border-[#e5e5e5] p-6 flex items-start gap-4">
          <div className="p-2 rounded-xl bg-white text-[#ff4d8b] shrink-0 border border-[#e5e5e5]">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-[14px] font-semibold text-[#0a0a0a]">
              Compliance &amp; Regional Policy Note
            </h4>
            <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
              VIIVIADS operates strictly where legally permitted, adhering to regional advertising guidelines, licensing standards, and platform policies. Restricted or regulated categories are run exclusively in jurisdictions where authorized by applicable laws and verified platform credentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
