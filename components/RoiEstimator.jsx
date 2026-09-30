"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, Sparkles, MousePointerClick, Percent, Target } from "lucide-react";

export default function RoiEstimator() {
  const [budget, setBudget] = useState(25000);
  const [vertical, setVertical] = useState("gaming");

  const verticalData = {
    gaming: {
      name: "Mobile Gaming & Casual",
      cpcMin: 0.08,
      cpcMax: 0.16,
      cvrMin: 12.0,
      cvrMax: 19.5,
      cvrType: "Click-to-Install / Playable",
      benchmarkNote: "Casual, hyper-casual & mid-core games",
    },
    fintech: {
      name: "FinTech & Banking",
      cpcMin: 0.22,
      cpcMax: 0.42,
      cvrMin: 8.5,
      cvrMax: 15.0,
      cvrType: "Click-to-Registration / KYC",
      benchmarkNote: "Neobanks, trading & digital wallets",
    },
    ecommerce: {
      name: "E-Commerce & Quick-Commerce",
      cpcMin: 0.11,
      cpcMax: 0.24,
      cvrMin: 7.5,
      cvrMax: 14.0,
      cvrType: "Click-to-Cart / Install",
      benchmarkNote: "D2C shopping, delivery & marketplace apps",
    },
    utilities: {
      name: "Utilities & Tools",
      cpcMin: 0.06,
      cpcMax: 0.13,
      cvrMin: 11.0,
      cvrMax: 18.0,
      cvrType: "Click-to-Activation",
      benchmarkNote: "Productivity, VPN, cleaner & system tools",
    },
    entertainment: {
      name: "Entertainment & Streaming",
      cpcMin: 0.10,
      cpcMax: 0.20,
      cvrMin: 9.0,
      cvrMax: 16.5,
      cvrType: "Click-to-Trial / Subscribe",
      benchmarkNote: "OTT streaming, music & social entertainment",
    },
  };

  const selected = verticalData[vertical];
  const clicksMin = Math.round(budget / selected.cpcMax);
  const clicksMax = Math.round(budget / selected.cpcMin);
  const convMin = Math.round(clicksMin * (selected.cvrMin / 100));
  const convMax = Math.round(clicksMax * (selected.cvrMax / 100));

  return (
    <section id="estimator" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f0e0] border border-[#ebe6d6] text-[12px] font-semibold text-[#0a0a0a] uppercase tracking-[1.5px] mb-3">
            <span>Indicative Traffic &amp; CVR Forecaster</span>
            <span className="text-[#6a6a6a] font-normal">· Non-Guaranteed Estimates</span>
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Estimate your clicks, CPC, and conversion potential.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            Enter your planned monthly media spend to forecast approximate per-click delivery costs (CPC), estimated click volume, and expected conversion rates. All numbers are indicative benchmarks based on historical in-app inventory data.
          </p>
        </div>

        {/* Interactive Estimator Container on surface-soft (#faf5e8) */}
        <div className="rounded-[24px] bg-[#faf5e8] border border-[#e5e5e5] p-6 sm:p-10 max-w-5xl shadow-sm space-y-8">
          {/* Step 1: Vertical Selector */}
          <div>
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

          {/* Step 2: Ad Spend Range Slider + Quick Presets */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <label className="text-[13px] font-semibold text-[#0a0a0a] uppercase tracking-wider">
                  2. Planned Monthly Ad Spend
                </label>
                <div className="text-[12px] text-[#6a6a6a]">Adjust the slider or pick a preset budget</div>
              </div>
              <span className="text-[32px] font-bold text-[#0a0a0a] font-mono">
                ${budget.toLocaleString("en-US")}
              </span>
            </div>

            {/* Quick Budget Presets */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[5000, 10000, 25000, 50000, 100000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setBudget(preset)}
                  className={`px-3 py-1 rounded-full text-[12px] font-mono font-medium transition-colors ${
                    budget === preset
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-white text-[#3a3a3a] border border-[#e5e5e5] hover:bg-[#f5f0e0]"
                  }`}
                >
                  ${preset.toLocaleString("en-US")}
                </button>
              ))}
            </div>

            <input
              type="range"
              min="5000"
              max="100000"
              step="2500"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#ebe6d6]">
            {/* 1. Indicative CPC */}
            <div className="p-5 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="flex items-center justify-between text-[12px] font-mono text-[#6a6a6a] uppercase">
                <span>Est. Per-Click Cost</span>
                <MousePointerClick className="w-3.5 h-3.5 text-[#ff4d8b]" />
              </div>
              <div className="text-[26px] font-bold text-[#0a0a0a] font-mono">
                ${selected.cpcMin.toFixed(2)} – ${selected.cpcMax.toFixed(2)}
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                Indicative CPC range for {selected.name}
              </div>
            </div>

            {/* 2. Estimated Clicks Delivered */}
            <div className="p-5 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="flex items-center justify-between text-[12px] font-mono text-[#6a6a6a] uppercase">
                <span>Estimated Clicks</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#f5f0e0] text-[#0a0a0a]">APPROX</span>
              </div>
              <div className="text-[26px] font-bold text-[#0a0a0a] font-mono">
                ~{clicksMin.toLocaleString("en-US")} – {clicksMax.toLocaleString("en-US")}
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                Projected traffic at ${budget.toLocaleString("en-US")}
              </div>
            </div>

            {/* 3. Expected Conversion Rate (CVR) */}
            <div className="p-5 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="flex items-center justify-between text-[12px] font-mono text-[#6a6a6a] uppercase">
                <span>Expected CVR</span>
                <Percent className="w-3.5 h-3.5 text-[#22c55e]" />
              </div>
              <div className="text-[26px] font-bold text-[#22c55e] font-mono">
                {selected.cvrMin.toFixed(1)}% – {selected.cvrMax.toFixed(1)}%
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                {selected.cvrType}
              </div>
            </div>

            {/* 4. Estimated Conversions / Actions */}
            <div className="p-5 rounded-[20px] bg-white border border-[#e5e5e5] space-y-1">
              <div className="flex items-center justify-between text-[12px] font-mono text-[#6a6a6a] uppercase">
                <span>Est. Conversions</span>
                <Target className="w-3.5 h-3.5 text-[#0a0a0a]" />
              </div>
              <div className="text-[26px] font-bold text-[#0a0a0a] font-mono">
                ~{convMin.toLocaleString("en-US")} – {convMax.toLocaleString("en-US")}
              </div>
              <div className="text-[12px] text-[#6a6a6a]">
                {selected.benchmarkNote}
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Box */}
          <div className="p-4 sm:p-5 rounded-[16px] bg-[#fffaf0] border border-[#e5e5e5] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[13px] text-[#0a0a0a]">
              <AlertCircle className="w-4 h-4 text-[#e8b94a] flex-shrink-0" />
              <span>Advisory Notice: Approximate &amp; Non-Guaranteed Benchmarks</span>
            </div>
            <p className="text-[12.5px] text-[#555] leading-relaxed">
              All figures, cost-per-click (CPC) rates, click volumes, and conversion rates displayed above are <strong>approximate historical industry benchmarks</strong> provided solely for media planning. <strong>VIIVIADS does not guarantee fixed clicks, conversion rates, or return metrics.</strong> Actual performance depends directly on the advertiser&apos;s product appeal, app quality, user experience, creative formats, app store conversion rate (ASO), pricing, target geographies, and prevailing auction dynamics.
            </p>
          </div>

          {/* Interactive CTA Footnote */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[16px] bg-[#f5f0e0] border border-[#ebe6d6]">
            <div className="flex items-center gap-2 text-[13px] text-[#3a3a3a]">
              <Sparkles className="w-4 h-4 text-[#ff4d8b] flex-shrink-0" />
              <span>Want a custom media plan and verified bid range for your specific product?</span>
            </div>

            <Link
              href="#advertisers"
              className="clay-button-primary !h-[38px] text-[13px] gap-2 whitespace-nowrap"
            >
              <span>Request Custom Media Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
