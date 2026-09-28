"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function RoiEstimator() {
  const [budget, setBudget] = useState(25000);
  const [vertical, setVertical] = useState("gaming");

  const verticalData = {
    gaming: {
      avgCpi: 1.35,
      roasMultiplier: 4.2,
      actionRate: "18.4%",
      name: "Mobile Gaming & Casual",
      color: "bg-[#ff4d8b]",
      badge: "Playables & Rewarded Video",
    },
    fintech: {
      avgCpi: 3.80,
      roasMultiplier: 4.6,
      actionRate: "28.2%",
      name: "FinTech & Banking",
      color: "bg-[#1a3a3a]",
      badge: "KYC Registration CPA",
    },
    ecommerce: {
      avgCpi: 1.95,
      roasMultiplier: 4.4,
      actionRate: "22.5%",
      name: "E-Commerce & Quick-Commerce",
      color: "bg-[#ff6b5a]",
      badge: "First Order & Basket ROAS",
    },
    utilities: {
      avgCpi: 0.85,
      roasMultiplier: 3.2,
      actionRate: "12.8%",
      name: "Utilities & Tools",
      color: "bg-[#b8a4ed]",
      badge: "High Volume Scale",
    },
    entertainment: {
      avgCpi: 1.60,
      roasMultiplier: 3.8,
      actionRate: "16.5%",
      name: "Entertainment & Streaming",
      color: "bg-[#e8b94a]",
      badge: "Trial to Paid Subscriber",
    },
  };

  const selected = verticalData[vertical];
  const projectedInstalls = Math.round(budget / selected.avgCpi);
  const estimatedRevenue = Math.round(budget * selected.roasMultiplier);

  return (
    <section id="estimator" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            INTERACTIVE GROWTH FORECASTER
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Simulate your in-app campaign returns.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            Adjust your monthly acquisition budget and app vertical to preview real-time conversion models and projected ROAS multiples based on our live bidding benchmarks.
          </p>
        </div>

        {/* Interactive Estimator Container on surface-soft (#faf5e8) */}
        <div className="rounded-[24px] bg-[#faf5e8] border border-[#e5e5e5] p-6 sm:p-10 max-w-5xl shadow-sm">
          {/* Step 1: Vertical Selector */}
          <div className="mb-8">
            <label className="block text-[13px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-3">
              1. Select App Category
            </label>
            <div className="flex flex-wrap gap-2.5">
              {Object.entries(verticalData).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setVertical(key)}
                  className={`px-4 py-2.5 rounded-[12px] text-[14px] font-medium transition-all ${
                    vertical === key
                      ? "bg-[#0a0a0a] text-white shadow-xs"
                      : "bg-[#ffffff] text-[#0a0a0a] border border-[#e5e5e5] hover:border-[#b0b0b5]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Ad Spend Range Slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <label className="text-[13px] font-semibold text-[#0a0a0a] uppercase tracking-wider">
                2. Monthly Ad Spend
              </label>
              <span className="text-[32px] font-bold text-[#0a0a0a] font-mono">
                ${budget.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="5000"
              max="100000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2.5 bg-[#ebe6d6] rounded-lg appearance-none cursor-pointer accent-[#ff4d8b]"
              aria-label="Monthly Ad Spend Range"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#6a6a6a] mt-2">
              <span>$5,000 / mo</span>
              <span>$50,000 / mo</span>
              <span>$100,000 / mo</span>
            </div>
          </div>

          {/* Step 3: Real-Time Results Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#ebe6d6]">
            {/* Projected Installs Card */}
            <div className="p-6 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="text-[12px] font-mono text-[#6a6a6a] uppercase">
                Projected Installs
              </div>
              <div className="text-[32px] font-bold text-[#0a0a0a] font-mono">
                {projectedInstalls.toLocaleString()}
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                Based on benchmark ${selected.avgCpi.toFixed(2)} CPI
              </div>
            </div>

            {/* Projected Return */}
            <div className="p-6 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="text-[12px] font-mono text-[#6a6a6a] uppercase">
                Estimated In-App Return
              </div>
              <div className="text-[32px] font-bold text-[#22c55e] font-mono">
                ${estimatedRevenue.toLocaleString()}
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                Projected at {selected.roasMultiplier}x ROAS target
              </div>
            </div>

            {/* Conversion Quality */}
            <div className="p-6 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="text-[12px] font-mono text-[#6a6a6a] uppercase">
                Primary Down-Funnel KPI
              </div>
              <div className="text-[20px] font-bold text-[#0a0a0a] pt-1">
                {selected.actionRate} Action Rate
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                {selected.badge}
              </div>
            </div>
          </div>

          {/* Interactive CTA Footnote */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[16px] bg-[#f5f0e0] border border-[#ebe6d6]">
            <div className="flex items-center gap-2 text-[13px] text-[#3a3a3a]">
              <Sparkles className="w-4 h-4 text-[#ff4d8b]" />
              <span>Ready to validate these targets with our programmatic team?</span>
            </div>

            <Link
              href="#advertisers"
              className="clay-button-primary !h-[38px] text-[13px] gap-2 whitespace-nowrap"
            >
              <span>Apply This Budget to Campaign</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
