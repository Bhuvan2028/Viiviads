"use client";

import { useState } from "react";
import { ArrowRight, Sliders, Play, RefreshCw, TrendingUp, UserCheck, ShieldCheck, Zap, DollarSign, Check, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("advertisers");
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const advertiserSteps = [
    {
      num: "01",
      title: "Share your goal",
      desc: "Tell us your app or offer, target GEOs, target KPI (CPI, CPA, CPL, CPS) and budget.",
      icon: Sliders,
      deliverable: "Custom Target Matrix & Forecast",
      turnaround: "< 4 Hours",
    },
    {
      num: "02",
      title: "Strategy & setup",
      desc: "We plan targeting, sources and creatives, and set up tracking with your MMP.",
      icon: ShieldCheck,
      deliverable: "MMP S2S Postback Integration & Whitelist",
      turnaround: "24 Hours",
    },
    {
      num: "03",
      title: "Launch campaign",
      desc: "Campaigns go live through our matched publishers and vetted mobile traffic sources.",
      icon: Play,
      deliverable: "Live RTB Bidding & Direct SDK Delivery",
      turnaround: "Instant Activation",
    },
    {
      num: "04",
      title: "Optimise daily",
      desc: "We monitor performance daily, cutting weak sources and scaling top converting placements.",
      icon: RefreshCw,
      deliverable: "Hourly Heuristic Review & Fraud Filtering",
      turnaround: "Continuous",
    },
    {
      num: "05",
      title: "Report & scale",
      desc: "You get transparent reports with verified metrics, and we scale winning segments.",
      icon: TrendingUp,
      deliverable: "Transparent Telemetry & Volume Multiplier",
      turnaround: "Weekly / Monthly",
    },
  ];

  const publisherSteps = [
    {
      num: "01",
      title: "Apply",
      desc: "Sign up and tell us about your traffic (type, primary GEOs, user volume).",
      icon: UserCheck,
      deliverable: "Publisher Application Intake",
      turnaround: "< 2 Hours",
    },
    {
      num: "02",
      title: "Get approved",
      desc: "We review traffic quality, anti-fraud compliance, and vertical fit.",
      icon: ShieldCheck,
      deliverable: "Quality Audit & Verification",
      turnaround: "Same Day",
    },
    {
      num: "03",
      title: "Get matched",
      desc: "Get instant access to relevant high-converting advertiser offers and top payouts.",
      icon: Zap,
      deliverable: "Direct Campaigns & Custom eCPMs",
      turnaround: "Immediate",
    },
    {
      num: "04",
      title: "Run & track",
      desc: "Send traffic through tracking links and observe performance stats in real time.",
      icon: TrendingUp,
      deliverable: "Real-Time Publisher Portal Stats",
      turnaround: "Live Stream",
    },
    {
      num: "05",
      title: "Get paid",
      desc: "Dependable, on-time payouts per agreed payment terms with full transparency.",
      icon: DollarSign,
      deliverable: "Automated Financial Settlement",
      turnaround: "Scheduled Rails",
    },
  ];

  const steps = activeTab === "advertisers" ? advertiserSteps : publisherSteps;
  const currentStep = steps[activeStepIndex] || steps[0];
  const StepIcon = currentStep.icon;

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-4 sm:px-8 bg-[#faf5e8] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            HOW IT WORKS
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Plan. Target. Launch. Optimise. Scale.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            VIIVIADS sits directly at the center of the mobile ecosystem, connecting advertisers who need high-LTV growth with publishers that own engaged audiences.
          </p>

          {/* Clay Category Pill Tabs per DESIGN.md */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-[#f5f0e0] border border-[#e5e5e5]">
            <button
              onClick={() => {
                setActiveTab("advertisers");
                setActiveStepIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all ${
                activeTab === "advertisers"
                  ? "bg-[#0a0a0a] text-white shadow-sm"
                  : "text-[#6a6a6a] hover:text-[#0a0a0a]"
              }`}
            >
              For Advertisers
            </button>
            <button
              onClick={() => {
                setActiveTab("publishers");
                setActiveStepIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all ${
                activeTab === "publishers"
                  ? "bg-[#0a0a0a] text-white shadow-sm"
                  : "text-[#6a6a6a] hover:text-[#0a0a0a]"
              }`}
            >
              For Publishers
            </button>
          </div>
        </div>

        {/* 3-Part Connectivity Visual Diagram: Advertisers ⇄ VIIVIADS ⇄ Publishers */}
        <div className="rounded-[24px] bg-[#fffaf0] border border-[#e5e5e5] p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#6a6a6a]">
              The VIIVIADS Triad
            </span>
            <h3 className="text-[22px] font-semibold text-[#0a0a0a] mt-1">
              Advertisers ⇄ VIIVIADS ⇄ Publishers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Left Node */}
            <div className="rounded-[20px] bg-[#faf5e8] border border-[#e5e5e5] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#ff4d8b] font-semibold uppercase tracking-wider">
                  Origin Node
                </span>
                <h4 className="text-[18px] font-semibold text-[#0a0a0a] mt-1 mb-2">
                  Advertisers &amp; Brands
                </h4>
                <p className="text-[13px] text-[#3a3a3a] leading-relaxed mb-4">
                  Define target GEOs, campaign KPIs (CPI, CPA, CPL, CPS), audience profiles, and budget caps.
                </p>
              </div>
              <div className="text-[12px] font-mono bg-white p-2.5 rounded-xl border border-[#e5e5e5] text-[#0a0a0a]">
                Outcome: Real High-LTV Users
              </div>
            </div>

            {/* Center Node (VIIVIADS Engine) */}
            <div className="rounded-[20px] bg-[#0a0a0a] text-white p-6 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[11px] font-mono text-[#ff4d8b] font-semibold uppercase tracking-wider">
                  Central Hub
                </span>
                <h4 className="text-[20px] font-semibold text-white mt-1 mb-2">
                  VIIVIADS Platform
                </h4>
                <ul className="text-[13px] text-white/90 space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Real-Time Matching &amp; DSP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Multi-Layer Anti-Fraud Shield</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>MMP Tracking &amp; Clean Postbacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Daily Algorithmic Optimisation</span>
                  </li>
                </ul>
              </div>
              <div className="text-[12px] font-mono bg-white/10 p-2.5 rounded-xl border border-white/20 text-[#a4d4c5]">
                Core: Quality &amp; Precision
              </div>
            </div>

            {/* Right Node */}
            <div className="rounded-[20px] bg-[#faf5e8] border border-[#e5e5e5] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#1a3a3a] font-semibold uppercase tracking-wider">
                  Supply Node
                </span>
                <h4 className="text-[18px] font-semibold text-[#0a0a0a] mt-1 mb-2">
                  Publishers &amp; Studios
                </h4>
                <p className="text-[13px] text-[#3a3a3a] leading-relaxed mb-4">
                  Deliver quality in-app impressions and placements, earning competitive payouts with transparent reporting.
                </p>
              </div>
              <div className="text-[12px] font-mono bg-white p-2.5 rounded-xl border border-[#e5e5e5] text-[#0a0a0a]">
                Outcome: Maximum Yield
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Interactive Selector & Deep-Dive Preview */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-[12px] font-mono font-semibold uppercase text-[#6a6a6a]">
              Click any step below to explore operational details:
            </span>
          </div>

          {/* Interactive Steps Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {steps.map((s, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-[16px] text-left transition-all ${
                    isSelected
                      ? "bg-[#0a0a0a] text-white shadow-md -translate-y-1"
                      : "bg-white border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#b0b0b5]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isSelected ? "text-[#ff4d8b]" : "text-[#6a6a6a]"
                      }`}
                    >
                      Step {s.num}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isSelected ? "text-[#ff4d8b]" : "text-[#b0b0b5]"
                      }`}
                    />
                  </div>
                  <div className="text-[14px] font-semibold leading-tight line-clamp-1">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="rounded-[20px] bg-white border border-[#e5e5e5] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#faf5e8] border border-[#e5e5e5] text-[#0a0a0a] flex items-center justify-center shrink-0 mt-1">
                <StepIcon className="w-6 h-6 text-[#ff4d8b]" />
              </div>
              <div className="space-y-1">
                <div className="text-[12px] font-mono font-bold text-[#ff4d8b] uppercase">
                  Step {currentStep.num} Execution
                </div>
                <h4 className="text-[20px] font-semibold text-[#0a0a0a]">
                  {currentStep.title}
                </h4>
                <p className="text-[14px] text-[#3a3a3a] max-w-2xl leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f0f0f0] w-full sm:w-auto justify-between">
              <div className="text-left sm:text-right">
                <div className="text-[11px] font-mono text-[#6a6a6a]">DELIVERABLE</div>
                <div className="text-[13px] font-semibold text-[#0a0a0a]">
                  {currentStep.deliverable}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-[11px] font-mono text-[#6a6a6a]">SPEED</div>
                <div className="text-[13px] font-semibold text-[#22c55e]">
                  {currentStep.turnaround}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
