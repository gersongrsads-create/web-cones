import { useEffect } from "react";
import { MarqueeBannerES } from "@/components/es/MarqueeBannerES";
import { HeroSectionES } from "@/components/es/HeroSectionES";
import { ShowcaseSectionES } from "@/components/es/ShowcaseSectionES";
import { OccasionsSectionES } from "@/components/es/OccasionsSectionES";
import { HowItWorksSectionES } from "@/components/es/HowItWorksSectionES";
import { TargetAudienceSectionES } from "@/components/es/TargetAudienceSectionES";
import { BenefitsSectionES } from "@/components/es/BenefitsSectionES";
import { TestimonialsSectionES } from "@/components/es/TestimonialsSectionES";
import { BonusSectionES } from "@/components/es/BonusSectionES";
import { PricingSectionES } from "@/components/es/PricingSectionES";
import { FAQSectionES } from "@/components/es/FAQSectionES";
import { TwoPathsSectionES } from "@/components/es/TwoPathsSectionES";
import { EmailHelpSectionES } from "@/components/es/EmailHelpSectionES";
import { FooterSectionES } from "@/components/es/FooterSectionES";
import { FloatingPopupES, useFloatingPopupES } from "@/components/es/FloatingPopupES";
import { SocialProofNotificationsES } from "@/components/es/SocialProofNotificationsES";
import { MobileBottomBarES } from "@/components/es/MobileBottomBarES";
import { ThemeCarouselSectionES } from "@/components/es/ThemeCarouselSectionES";
import { ConeShowcaseSectionES } from "@/components/es/ConeShowcaseSectionES";
import { AuthorSectionES } from "@/components/es/AuthorSectionES";
import { IncomeCalculatorSectionES } from "@/components/es/IncomeCalculatorSectionES";
import { CustomerCreationsSectionES } from "@/components/es/CustomerCreationsSectionES";
import { FloatingWhatsAppButtonES } from "@/components/es/FloatingWhatsAppButtonES";

const IndexES = () => {
  const { isOpen, openPopup, closePopup } = useFloatingPopupES();

  // Make entire page clickable to scroll to oferta section
  useEffect(() => {
    const handlePageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [data-utmify-checkout], [role="button"], .fixed, .z-50');
      if (!isInteractive) {
        e.preventDefault();
        document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handlePageClick, true);
    return () => document.removeEventListener('click', handlePageClick, true);
  }, []);

  // Load Hotmart-specific UTMify script and remove the global GGCheckout one
  useEffect(() => {
    // Remove the global UTM script (GGCheckout version)
    const existingScript = document.querySelector(
      'script[src="https://cdn.utmify.com.br/scripts/utms/latest.js"][data-utmify-prevent-xcod-sck]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add Hotmart-specific UTM script
    const hotmartScript = document.createElement("script");
    hotmartScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    hotmartScript.setAttribute("data-utmify-prevent-subids", "");
    hotmartScript.async = true;
    hotmartScript.defer = true;
    document.head.appendChild(hotmartScript);

    return () => {
      // Cleanup: remove Hotmart script and restore the global one
      hotmartScript.remove();
      const restored = document.createElement("script");
      restored.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
      restored.setAttribute("data-utmify-prevent-xcod-sck", "");
      restored.setAttribute("data-utmify-prevent-subids", "");
      restored.async = true;
      restored.defer = true;
      document.head.appendChild(restored);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MarqueeBannerES />
      <HeroSectionES />
      <CustomerCreationsSectionES />
      <ShowcaseSectionES />
      <OccasionsSectionES />
      <HowItWorksSectionES />
      <TargetAudienceSectionES />

      {/* Infinite loop before BenefitsSection */}
      <div className="py-6 bg-white overflow-hidden">
        <ThemeCarouselSectionES variant={4} />
      </div>

      <ConeShowcaseSectionES />
      <BenefitsSectionES />
      <TestimonialsSectionES />
      <BonusSectionES />
      <IncomeCalculatorSectionES />
      <PricingSectionES onBasicClick={openPopup} />
      <FAQSectionES />
      <AuthorSectionES />
      <TwoPathsSectionES />
      <EmailHelpSectionES />
      <FooterSectionES />
      <FloatingPopupES isOpen={isOpen} onClose={closePopup} />
      <SocialProofNotificationsES />
      <FloatingWhatsAppButtonES />
      <MobileBottomBarES />
    </div>
  );
};

export default IndexES;
