"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PublishersSection() {
  const [formData, setFormData] = useState({
    name: "",
    companyChannel: "",
    email: "",
    phoneWhatsApp: "",
    messengerHandle: "",
    trafficSources: "Direct In-App SDK",
    mainGeos: "",
    volume: "50,000 - 200,000 daily",
    link: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const benefits = [
    { title: "Wide Range of Direct Offers", desc: "Monetise across high-converting gaming, fintech, e-commerce, and utility campaigns." },
    { title: "Competitive Payouts", desc: "Top-tier market eCPMs, CPIs, and rev-share rates calibrated for maximum publisher yield." },
    { title: "Real-Time Stats & Tracking", desc: "Instant postback verification and granular sub-ID reporting inside your partner portal." },
    { title: "Dedicated Publisher Manager", desc: "Direct strategist helping you match high-converting offers with your unique traffic." },
    { title: "Reliable, On-Time Payments", desc: "Dependable, scheduled payouts per agreed terms with flexible international rails." },
    { title: "Support with Optimisation", desc: "Actionable traffic analysis, placement reviews, and creative suggestions to raise yields." },
  ];

  const idealFor = [
    "App owners & studios",
    "Performance media buyers",
    "Content & creator networks",
    "Specialized ad networks",
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
    <section id="publishers" className="py-20 md:py-28 px-4 sm:px-8 bg-[#faf5e8] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px] mb-2">
            FOR PUBLISHERS
          </div>
          <h2 className="clay-display-lg text-[#0a0a0a] mb-4">
            Monetise your traffic with offers that convert.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
            Turn your mobile app impressions and traffic into sustainable, high-yield revenue streams with direct advertisers and verified attribution.
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

        {/* 2-Column: Benefits on Left, Application Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Benefits Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-4">
              Publisher Revenue Advantages
            </h3>

            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-5 rounded-[16px] bg-white border border-[#e5e5e5] flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#1a3a3a]/15 text-[#1a3a3a] flex items-center justify-center shrink-0 mt-0.5">
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

          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] bg-white border border-[#e5e5e5] p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#0a0a0a]">
                    Publisher Application Received
                  </h3>
                  <p className="text-[15px] text-[#3a3a3a] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0a0a0a]">{formData.name}</span>. Our publisher onboarding team is reviewing your inventory profile and will reach out to <span className="font-semibold text-[#ff4d8b]">{formData.email}</span> with approval and access instructions.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="clay-button-secondary !h-[40px] text-xs mt-2"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#e5e5e5] pb-4 mb-4">
                    <h3 className="clay-title-lg text-[#0a0a0a]">
                      Join as Publisher
                    </h3>
                    <p className="text-[13px] text-[#6a6a6a] mt-1">
                      Complete the application below to monetize your traffic with VIIVIADS.
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
                        placeholder="John Doe"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Company / Channel Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyChannel}
                        onChange={(e) => setFormData({ ...formData, companyChannel: e.target.value })}
                        placeholder="Media Studio Ltd."
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="partner@studio.com"
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
                        Telegram / Skype / Teams
                      </label>
                      <input
                        type="text"
                        value={formData.messengerHandle}
                        onChange={(e) => setFormData({ ...formData, messengerHandle: e.target.value })}
                        placeholder="@username"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Traffic Sources *
                      </label>
                      <select
                        value={formData.trafficSources}
                        onChange={(e) => setFormData({ ...formData, trafficSources: e.target.value })}
                        className="w-full h-[44px] px-3 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      >
                        <option value="Direct In-App SDK">Direct In-App SDK</option>
                        <option value="Media Buying">Performance Media Buying</option>
                        <option value="Social & Influencer">Social &amp; Creator Network</option>
                        <option value="OEM & Pre-loads">OEM &amp; Pre-Loads</option>
                        <option value="Native & Content">Native Content Network</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Main GEOs *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.mainGeos}
                        onChange={(e) => setFormData({ ...formData, mainGeos: e.target.value })}
                        placeholder="US, IN, BR, SEA"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Daily Volume
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full h-[44px] px-3 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      >
                        <option value="10k - 50k daily">10,000 - 50,000 / day</option>
                        <option value="50k - 200k daily">50,000 - 200,000 / day</option>
                        <option value="200k - 1M daily">200,000 - 1,000,000 / day</option>
                        <option value="1M+ daily">1,000,000+ / day</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        App / Site Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        placeholder="https://..."
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                      Traffic Overview &amp; Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your ad formats, audience demographics, or payment preferences..."
                      className="w-full p-3 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[14px] focus:outline-none focus:border-[#0a0a0a]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="clay-button-primary w-full justify-center gap-2"
                  >
                    <span>{loading ? "Submitting Application..." : "Join as Publisher"}</span>
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
