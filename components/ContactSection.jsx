"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Copy, Check } from "lucide-react";

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Advertiser",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText("hello@viiviads.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-8 bg-[#fffaf0] border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto">
        {/* Clay cta-band-illustrated on surface-soft (#faf5e8) with 24px radius per DESIGN.md */}
        <div className="rounded-[24px] bg-[#faf5e8] border border-[#e5e5e5] p-8 sm:p-14 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[12px] font-semibold text-[#6a6a6a] uppercase tracking-[1.5px]">
                READY TO SCALE?
              </div>
              <h2 className="clay-display-md text-[#0a0a0a]">
                Talk to our growth team today.
              </h2>
              <p className="text-[16px] text-[#3a3a3a] leading-relaxed">
                Connect directly with a dedicated VIIVIADS campaign strategist. We review your app&apos;s growth goals and provide a customized performance blueprint.
              </p>

              {/* Direct Info Cards with 1-Click Copy Interaction */}
              <div className="space-y-3.5 pt-2">

                <div className="p-4 rounded-[16px] bg-white border border-[#e5e5e5] flex items-center justify-between group">
                  <div>
                    <div className="text-[11px] font-semibold text-[#6a6a6a] uppercase tracking-wider mb-0.5">
                      Official Inquiries Email
                    </div>
                    <a
                      href="mailto:hello@viiviads.com"
                      className="text-[16px] font-semibold text-[#0a0a0a] hover:text-[#ff4d8b] transition-colors"
                    >
                      hello@viiviads.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-[#faf5e8] hover:bg-[#f5f0e0] text-[#0a0a0a] transition-all"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#22c55e]" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#6a6a6a]" />
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-[16px] bg-white border border-[#e5e5e5]">
                  <div className="text-[11px] font-semibold text-[#6a6a6a] uppercase tracking-wider mb-0.5">
                    Headquarters
                  </div>
                  <div className="text-[14px] font-semibold text-[#0a0a0a]">
                    VIIVIADS
                  </div>
                  <div className="text-[13px] text-[#6a6a6a]">
                    Mumbai, Maharashtra, 401208, India
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/viiviads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] bg-white border border-[#e5e5e5] text-[#0a0a0a] text-[13px] font-semibold hover:bg-[#f5f0e0] transition-all"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn Page</span>
                </a>
              </div>
            </div>

            {/* Right Column: Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-[20px] bg-white border border-[#e5e5e5] p-8 sm:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 text-[#22c55e] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-[24px] font-semibold text-[#0a0a0a]">
                      Message Dispatched
                    </h3>
                    <p className="text-[15px] text-[#3a3a3a] max-w-sm mx-auto">
                      Thank you, <span className="font-semibold text-[#0a0a0a]">{formData.name}</span>. A VIIVIADS performance growth strategist will reach out to <span className="text-[#ff4d8b] font-semibold">{formData.email}</span> within 4 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="clay-button-secondary !h-[40px] text-xs mt-3"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="clay-title-lg text-[#0a0a0a] mb-2">
                      Get In Touch
                    </h3>

                    {/* Role Segment */}
                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        I am a... *
                      </label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {["Advertiser", "Publisher", "Other"].map((role) => (
                          <button
                            type="button"
                            key={role}
                            onClick={() => setFormData({ ...formData, role })}
                            className={`px-4 py-2 rounded-[12px] text-[13px] font-semibold transition-all ${
                              formData.role === role
                                ? "bg-[#0a0a0a] text-white shadow-xs"
                                : "bg-[#faf5e8] text-[#0a0a0a] border border-[#e5e5e5] hover:border-[#b0b0b5]"
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Sharma"
                        className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[15px] focus:outline-none focus:border-[#0a0a0a]"
                      />
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
                          placeholder="alex@company.com"
                          className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[15px] focus:outline-none focus:border-[#0a0a0a]"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-[44px] px-4 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[15px] focus:outline-none focus:border-[#0a0a0a]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#0a0a0a] mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your campaign goals, target markets, or inventory volume..."
                        className="w-full p-3.5 rounded-[12px] bg-[#fffaf0] border border-[#e5e5e5] text-[#0a0a0a] text-[15px] focus:outline-none focus:border-[#0a0a0a]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="clay-button-primary w-full justify-center gap-2"
                    >
                      <span>{loading ? "Sending Message..." : "Contact Us"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
