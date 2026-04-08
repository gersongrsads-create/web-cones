import { MarqueeBanner } from "@/components/MarqueeBanner";
import { HeroSection } from "@/components/HeroSection";
import { CustomerCreationsSection } from "@/components/CustomerCreationsSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";

import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { TwoPathsSection } from "@/components/TwoPathsSection";
import { WhatsAppHelpSection } from "@/components/WhatsAppHelpSection";
import { FooterSection } from "@/components/FooterSection";
import { FloatingPopup, useFloatingPopup } from "@/components/FloatingPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ThemeCarouselSection } from "@/components/ThemeCarouselSection";
import { ConeShowcaseSection } from "@/components/ConeShowcaseSection";
import { AuthorSection } from "@/components/AuthorSection";
import { OccasionsSection } from "@/components/OccasionsSection";
import { IncomeCalculatorSection } from "@/components/IncomeCalculatorSection";

const Index = () => {
  const { isOpen, openPopup, closePopup } = useFloatingPopup();

  return (
    <div className="min-h-screen bg-background">
      <MarqueeBanner />
      <HeroSection />
      <CustomerCreationsSection />
      <div className="content-auto">
        <ShowcaseSection />
      </div>
      <OccasionsSection />
      <HowItWorksSection />
      <TargetAudienceSection />
      
      <div className="py-6 bg-white overflow-hidden content-auto">
        <ThemeCarouselSection variant={4} />
      </div>
      
      <div className="content-auto">
        <ConeShowcaseSection />
      </div>
      <BenefitsSection />
      <TestimonialsSection />
      <BonusSection />
      <IncomeCalculatorSection />
      <PricingSection onBasicClick={openPopup} />
      <FAQSection />
      <AuthorSection />
      <TwoPathsSection />
      <WhatsAppHelpSection />
      <FooterSection />
      <FloatingPopup isOpen={isOpen} onClose={closePopup} />
      <WhatsAppButton />
      <SocialProofNotifications />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
