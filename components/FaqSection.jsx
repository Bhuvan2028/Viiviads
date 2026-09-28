"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is VIIVIADS?",
      a: "A mobile-first advertising company that helps brands grow through in-app campaigns and helps publishers monetise their traffic.",
    },
    {
      q: "Who can work with you?",
      a: "App developers, brands, agencies, media buyers and publishers.",
    },
    {
      q: "What pricing models do you offer?",
      a: "Performance-based models such as CPI, CPA, CPL and CPS, depending on the campaign.",
    },
    {
      q: "Which countries do you cover?",
      a: "We support global campaigns across 50+ countries, spanning Tier-1 markets (US, UK, Western Europe) as well as fast-growing emerging app economies (India, Southeast Asia, LATAM, MENA).",
    },
    {
      q: "How do you make sure traffic is good quality?",
      a: "We vet publishers, monitor traffic in real time and filter out invalid or fraudulent activity.",
    },
    {
      q: "How fast can a campaign go live?",
      a: "Usually within 1 to 2 business days after setup, tracking validation, and creative approval.",
    },
    {
      q: "How and when do publishers get paid?",
      a: "Publishers receive dependable, scheduled payouts (such as NET-30 or custom cycles for high-volume partners) via wire transfer or preferred international payment methods with full statement transparency.",
    },
    {
      q: "How do I track results?",
      a: "Through real-time tracking dashboards and regular reports with MMP integrations (AppsFlyer, Adjust, Kochava, Singular).",
    },
    {
      q: "How do I get started?",
      a: "Fill in the advertiser or publisher form, or contact us directly via email or phone.",
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[840px] mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px]">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a]">
            Everything you need to know.
          </h2>
          <p className="text-[16px] text-[#3a3a3a]">
            Common inquiries from advertisers and publishers working with VIIVIADS.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-[16px] border border-[#e5e5e5] overflow-hidden bg-[#faf5e8]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#f5f0e0] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold text-[#0a0a0a]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center shrink-0 text-[#0a0a0a] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#0a0a0a] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[14px] text-[#3a3a3a] leading-relaxed border-t border-[#e5e5e5]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
