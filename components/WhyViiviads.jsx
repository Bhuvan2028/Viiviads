"use client";

import Link from "next/link";
import { Smartphone, Layers, Crosshair, Award, Eye, Headphones, ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyViiviads() {
  const reasons = [
    {
      title: "Mobile-first focus",
      desc: "Everything we do is built around in-app and mobile user behaviour.",
      icon: Smartphone,
    },
    {
      title: "All app verticals",
      desc: "Proven practical execution across gaming, fintech, e-commerce, and utility apps.",
      icon: Layers,
    },
    {
      title: "Smart targeting",
      desc: "Data-led audience selection refined continuously with real-time conversion signals.",
      icon: Crosshair,
    },
    {
      title: "Performance-driven",
      desc: "Pay for results, with verified positive ROI as the overarching campaign goal.",
      icon: Award,
    },
    {
      title: "Transparent reporting",
      desc: "You always know what is happening. Clean telemetry and direct MMP event postbacks.",
      icon: Eye,
    },
    {
      title: "Hands-on support",
      desc: "Real people managing your account with rapid communication and strategic focus.",
      icon: Headphones,
    },
    {
      title: "Quality controls",
      desc: "Traffic rigorously checked for fraud, click injection, and platform compliance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-viiviads" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            THE VIIVIADS ADVANTAGE
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Why choose VIIVIADS?
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            We focus on what drives real, durable growth: authentic users, transparent commercials, and continuous performance tuning.
          </p>
        </div>

        {/* 7 Core Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 6).map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="p-7 rounded-[20px] bg-[#faf5e8] border border-[#e5e5e5] hover:border-[#b0b0b5] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e5e5] text-[#0a0a0a] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#ff4d8b]" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0a0a0a]">
                  {r.title}
                </h3>
                <p className="text-[14px] text-[#6a6a6a] leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 7th Reason Highlight Band: Quality Controls on surface-card #f5f0e0 */}
        <div className="rounded-[24px] bg-[#f5f0e0] border border-[#ebe6d6] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center text-[#22c55e] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#6a6a6a] uppercase tracking-wider mb-1">
                Point 07 · Traffic Quality Assurance
              </div>
              <h3 className="text-[20px] font-semibold text-[#0a0a0a]">
                Multi-Layer Quality &amp; Fraud Controls
              </h3>
              <p className="text-[14px] text-[#3a3a3a] mt-1 max-w-xl">
                Traffic checked in real time for fraud, bot farms, and proxy spoofing to guarantee 99.2%+ clean attribution for every dollar spent.
              </p>
            </div>
          </div>

          <Link
            href="#advertisers"
            className="clay-button-primary shrink-0 gap-2"
          >
            <span>Start a Clean Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
