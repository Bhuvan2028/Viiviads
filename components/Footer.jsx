import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.79V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#faf5e8] text-[#3a3a3a] py-16 px-4 sm:px-8 border-t border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Brand Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e5e5e5]">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/viiviads-logo.svg"
                alt="VIIVIADS"
                width={160}
                height={36}
                className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-[14px] text-[#6a6a6a] max-w-sm leading-relaxed">
              VIIVIADS is a mobile-first ad partner helping brands grow through in-app campaigns, with smart targeting, quality traffic and performance you can measure.
            </p>
            <div className="text-[13px] text-[#0a0a0a] font-medium">
              Founded 2024 · Mobile-First Performance Network
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#6a6a6a]">
              <li>
                <Link href="#about" className="hover:text-[#0a0a0a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#0a0a0a] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#0a0a0a] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#verticals" className="hover:text-[#0a0a0a] transition-colors">
                  Verticals
                </Link>
              </li>
              <li>
                <Link href="#why-viiviads" className="hover:text-[#0a0a0a] transition-colors">
                  Why VIIVIADS
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#0a0a0a] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-4">
              Solutions &amp; Models
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#6a6a6a]">
              <li>
                <Link href="#advertisers" className="hover:text-[#0a0a0a] transition-colors">
                  For Advertisers
                </Link>
              </li>
              <li>
                <Link href="#publishers" className="hover:text-[#0a0a0a] transition-colors">
                  For Publishers
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#0a0a0a] transition-colors">
                  CPI / CPA Campaigns
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#0a0a0a] transition-colors">
                  Programmatic DSP
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#0a0a0a] transition-colors">
                  Anti-Fraud Protection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-[#0a0a0a] uppercase tracking-wider mb-4">
              Contact Details
            </h4>
            <div className="space-y-2 text-[14px] text-[#6a6a6a]">
              <div>
                <a href="mailto:hello@viiviads.com" className="text-[#0a0a0a] font-semibold hover:underline">
                  hello@viiviads.com
                </a>
              </div>
              <div className="text-[13px] pt-1">
                Mumbai, Maharashtra, 401208, India
              </div>
              <div className="pt-2 flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/viiviads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-[#e5e5e5] hover:bg-[#f5f0e0] flex items-center justify-center text-[#0a0a0a] transition-colors"
                  aria-label="VIIVIADS on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#6a6a6a]">
          <div>
            &copy; 2026 VIIVIADS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#0a0a0a] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#0a0a0a] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="hover:text-[#0a0a0a] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
