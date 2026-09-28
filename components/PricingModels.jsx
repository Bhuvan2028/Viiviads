"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PricingModels() {
  const models = [
    {
      acronym: "CPI",
      name: "Cost Per Install",
      desc: "Pure volume user acquisition. You pay strictly when an authentic, validated app installation occurs on iOS or Android devices.",
      ideal: "Gaming, Utilities, Social & Lifestyle Apps",
      badge: "App Installs",
    },
    {
      acronym: "CPA",
      name: "Cost Per Action",
      desc: "Tied directly to validated post-install milestones: completed registrations, KYC verifications, first deposits, or subscription starts.",
      ideal: "Fintech, Banking, Trading & iGaming",
      badge: "Deep Funnel",
    },
    {
      acronym: "CPL",
      name: "Cost Per Lead",
      desc: "Pay only when prospective customers complete a verified lead inquiry, questionnaire, or sign-up form.",
      ideal: "Education, Real Estate & Financial Services",
      badge: "Qualified Leads",
    },
    {
      acronym: "CPS",
      name: "Cost Per Sale",
      desc: "Performance model linked directly to completed in-app transactions, basket orders, or target revenue thresholds.",
      ideal: "E-Commerce, Quick-Commerce & Marketplaces",
      badge: "Direct Sales",
    },
    {
      acronym: "CPM / CPC",
      name: "Impression & Click Models",
      desc: "Fixed cost models available for select programmatic brand awareness campaigns and high-impact native video placements.",
      ideal: "Brand Awareness, App Launches & High-Impact Formats",
      badge: "Viewable Scale",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            FLEXIBLE COMMERCIAL MODELS
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Pay-for-results campaign structures.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            We adapt commercial models to match your app&apos;s specific unit economics and growth targets.
          </p>
        </div>

        {/* 5 Models Grid + 1 Featured Custom Blueprint Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <div
              key={m.acronym}
              className="p-8 rounded-[20px] bg-[#faf5e8] border border-[#e5e5e5] flex flex-col justify-between hover:border-[#b0b0b5] transition-colors space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[22px] font-bold text-[#0a0a0a]">
                    {m.acronym}
                  </span>
                  <span className="text-[11px] font-semibold text-[#0a0a0a] bg-white px-2.5 py-1 rounded-full border border-[#e5e5e5]">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold text-[#0a0a0a] mb-2">
                  {m.name}
                </h3>

                <p className="text-[14px] text-[#6a6a6a] leading-relaxed mb-4">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ebe6d6] text-[12px] text-[#6a6a6a]">
                <strong className="text-[#0a0a0a]">Best for:</strong> {m.ideal}
              </div>
            </div>
          ))}

          {/* Featured Custom Blueprint Card in Brand Teal (#1a3a3a) per DESIGN.md */}
          <div className="p-8 rounded-[20px] bg-[#1a3a3a] text-white flex flex-col justify-between shadow-md space-y-4">
            <div>
              <div className="text-[11px] font-mono text-[#a4d4c5] uppercase tracking-wider mb-2">
                Custom Blueprint
              </div>
              <h3 className="text-[20px] font-semibold text-white mb-2">
                Tailored Performance Plan
              </h3>
              <p className="text-[14px] text-white/90 leading-relaxed">
                Pricing depends on your vertical, GEO and campaign goals. Connect directly with our strategy desk for a tailored performance plan.
              </p>
            </div>

            <Link
              href="#contact"
              className="clay-button-on-color w-fit gap-2"
            >
              <span>Request Custom Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Note verbatim from brief */}
        <div className="text-center text-[13px] text-[#6a6a6a]">
          * Note: &quot;Pricing depends on vertical, GEO and goal.{" "}
          <Link href="#contact" className="text-[#0a0a0a] font-semibold underline">
            Contact us for a custom plan
          </Link>
          .&quot;
        </div>
      </div>
    </section>
  );
}
