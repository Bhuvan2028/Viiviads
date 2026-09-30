import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | VIIVIADS",
  description: "Privacy policy for VIIVIADS, detailing how we collect, process, and safeguard information across our in-app advertising platform.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0a0a0a] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-[#faf5e8] text-[#0a0a0a] border border-[#e5e5e5]">
              <Shield className="w-5 h-5 text-[#ff4d8b]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#6a6a6a]">
              Legal Compliance
            </span>
          </div>

          <h1 className="clay-display-lg text-[#0a0a0a]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6a6a6a] mt-2">
            Last Updated: January 2026 · VIIVIADS Advertising Services, Mumbai, India
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-[#3a3a3a] space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">1. Overview</h2>
            <p>
              VIIVIADS (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a mobile-first performance advertising partner and programmatic technology provider. We respect the privacy of our website visitors, advertising clients, and mobile end-users. This Privacy Policy outlines our standards for data collection, usage, and protection.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">2. Information We Collect</h2>
            <p>
              <strong>Direct Inquiries:</strong> When you complete an advertiser or publisher application on viiviads.com, we collect contact information including your name, company name, work email address, telephone/WhatsApp number, messenger handle, and campaign requirements.
            </p>
            <p>
              <strong>Programmatic Ad Telemetry:</strong> In the course of serving in-app ad requests, our platform processes pseudonymous technical signals including mobile device advertising identifiers (IDFA/GAID where consented), operating system version, device model, coarse IP-derived geographic location, and app category context. We do not collect direct personal identity information (such as personal names, physical addresses, or financial account numbers) from ad-serving streams.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">3. How We Use Collected Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To evaluate and launch performance advertising campaigns (CPI, CPA, CPL, CPS).</li>
              <li>To attribute conversions, installs, and down-funnel milestones via Mobile Measurement Partners (MMPs).</li>
              <li>To detect and filter fraudulent, invalid, or bot traffic.</li>
              <li>To communicate campaign progress and provide customer support to partners.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">4. Data Sharing &amp; Third Parties</h2>
            <p>
              We do not sell personal information to third parties. We share performance telemetry strictly with certified measurement partners (such as AppsFlyer, Adjust, Branch, Kochava, and Singular) for verified attribution and audit purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">5. Data Security &amp; Retention</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect collected data against unauthorized access, loss, or alteration. Data is retained only as long as necessary to fulfill contractual agreements and regulatory obligations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#120e24]">6. Contact Us</h2>
            <p>
              If you have any questions or data access requests regarding this Privacy Policy, please contact our Data Officer at:
            </p>
            <div className="p-4 rounded-xl bg-[#f4f2f9] border border-[#e6e2f0] text-xs font-mono space-y-1">
              <div>VIIVIADS Privacy Desk</div>
              <div>Email: hello@viiviads.com</div>
              <div>Address: Mumbai, Maharashtra, 401208, India</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
