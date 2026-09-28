"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Users, Zap, Clock } from "lucide-react";

export default function AdvertisersSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    workEmail: "",
    phoneWhatsApp: "",
    telegramSkype: "",
    appLink: "",
    vertical: "Gaming",
    targetGeos: "",
    monthlyBudget: "$10,000 - $25,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const benefits = [
    { title: "Access to Vetted Publishers", desc: "Curated direct in-app publisher inventory and verified traffic networks." },
    { title: "Pay-For-Performance Models", desc: "Cost tied directly to verified actions: CPI, CPA, CPL, CPS, and target ROAS." },
    { title: "Fast Campaign Launch", desc: "Swift onboarding and technical campaign setup with quick approval cycles." },
    { title: "Transparent Tracking & Reporting", desc: "Server-to-server postback visibility and real-time MMP event attribution." },
    { title: "Dedicated Account Manager", desc: "Personal campaign strategist monitoring and tuning bids and sources daily." },
    { title: "Fraud & Quality Controls", desc: "Rigorous pre-bid heuristics filtering out bots, click injection, and invalid traffic." },
  ];

  const idealFor = [
    "App developers",
    "Global brands",
    "Performance agencies",
    "User acquisition teams",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="advertisers" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            FOR ADVERTISERS
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Get quality users, not just traffic.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            VIIVIADS connects advertisers with high-quality mobile audiences through smart in-app campaigns, built for performance across every app vertical.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            <span className="text-[13px] font-semibold text-[#6a6a6a] self-center mr-1">Ideal for:</span>
            {idealFor.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-[#f5f0e0] border border-[#ebe6d6] text-[12px] font-medium text-[#0a0a0a]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column: Benefits on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Benefits Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-4">
              Advertiser Growth Benefits
            </h3>

            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-5 rounded-[16px] bg-[#faf5e8] border border-[#e5e5e5] flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#0a0a0a]">
                    {b.title}
                  </h4>
                  <p className="text-[13px] text-[#6a6a6a] mt-0.5 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] bg-[#faf5e8] border border-[#e5e5e5] p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#0a0a0a]">
                    Campaign Inquiry Received
                  </h3>
                  <p className="text-[15px] text-[#3a3a3a] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0a0a0a]">{formData.name}</span>. A dedicated VIIVIADS campaign manager will review your app specs and respond to <span className="font-semibold text-[#ff4d8b]">{formData.workEmail}</span> with a custom performance proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="clay-button-secondary !h-[40px] text-xs mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#e5e5e5] pb-4 mb-4">
                    <h3 className="clay-title-lg text-[#0a0a0a]">
                      Start a Campaign
                    </h3>
                    <p className="text-[13px] text-[#6a6a6a] mt-1">
                      Share your target parameters to receive a custom performance plan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company / Agency"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneWhatsApp}
                        onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                        placeholder="+91 90676 77624"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Telegram / Skype (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.telegramSkype}
                        onChange={(e) => setFormData({ ...formData, telegramSkype: e.target.value })}
                        placeholder="@username"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        App Store / Website Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.appLink}
                        onChange={(e) => setFormData({ ...formData, appLink: e.target.value })}
                        placeholder="https://apps.apple.com/..."
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Vertical
                      </label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full h-[44px] px-3 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      >
                        <option value="Gaming">Gaming &amp; Casual</option>
                        <option value="Fintech">Fintech &amp; Payments</option>
                        <option value="Ecommerce">E-Commerce &amp; Shopping</option>
                        <option value="Utilities">Utilities &amp; Tools</option>
                        <option value="Entertainment">Entertainment &amp; Streaming</option>
                        <option value="Social">Social &amp; Community</option>
                        <option value="Education">Education &amp; E-Learning</option>
                        <option value="Health">Health &amp; Fitness</option>
                        <option value="Travel">Travel &amp; Lifestyle</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Target GEOs *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.targetGeos}
                        onChange={(e) => setFormData({ ...formData, targetGeos: e.target.value })}
                        placeholder="US, IN, UK, SEA"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Monthly Budget
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full h-[44px] px-3 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      >
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                      Campaign Goals &amp; Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your primary KPI target (e.g. CPI under $1.50, KYC completion CPA, or target ROAS)..."
                      className="w-full p-3 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="clay-button-primary w-full justify-center gap-2"
                  >
                    <span>{loading ? "Submitting Inquiry..." : "Start a Campaign"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
