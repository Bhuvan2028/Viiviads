import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import AdvertisersSection from "@/components/AdvertisersSection";
import PublishersSection from "@/components/PublishersSection";
import RoiEstimator from "@/components/RoiEstimator";
import VerticalsSection from "@/components/VerticalsSection";
import WhyViiviads from "@/components/WhyViiviads";
import PricingModels from "@/components/PricingModels";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fffaf0] text-[#0a0a0a] flex flex-col antialiased">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Band (7-5 Split Grid, CTAs, Interactive RTB Simulator) */}
        <Hero />

        {/* 3. Intro Block & About Us (3 Core Cards, Mission, Vision, Values) */}
        <AboutSection />

        {/* 4. Comprehensive Services & Solutions (7 Modules) */}
        <ServicesSection />

        {/* 5. How It Works (Advertisers ⇄ VIIVIADS ⇄ Publishers Diagram & Interactive Step Breakdown) */}
        <HowItWorks />

        {/* 6. For Advertisers (Benefits & Dedicated Campaign RFP Form) */}
        <AdvertisersSection />

        {/* 7. For Publishers (Benefits & Dedicated Publisher Application Form) */}
        <PublishersSection />

        {/* 8. Interactive Growth & ROAS Estimator (Live budget slider & benchmarks) */}
        <RoiEstimator />

        {/* 9. Verticals We Work With (Interactive Vertical Inspector & Compliance Notice) */}
        <VerticalsSection />

        {/* 10. Why VIIVIADS (7 Core Advantage Points) */}
        <WhyViiviads />

        {/* 11. Commercial Pricing & Engagement Models (CPI, CPA, CPL, CPS, CPM/CPC) */}
        <PricingModels />

        {/* 12. Frequently Asked Questions (9 Verified FAQs) */}
        <FaqSection />

        {/* 13. Contact & Scale Inquiries (1-Click Copy & Role-Based Lead Dispatch) */}
        <ContactSection />
      </main>

      {/* 14. Comprehensive Brand Warm Cream Footer */}
      <Footer />
    </div>
  );
}
