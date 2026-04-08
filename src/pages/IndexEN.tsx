import { useEffect } from "react";
import { MarqueeBannerEN } from "@/components/en/MarqueeBannerEN";
import { HeroSectionEN } from "@/components/en/HeroSectionEN";
import { ShowcaseSectionEN } from "@/components/en/ShowcaseSectionEN";
import { OccasionsSectionEN } from "@/components/en/OccasionsSectionEN";
import { HowItWorksSectionEN } from "@/components/en/HowItWorksSectionEN";
import { TargetAudienceSectionEN } from "@/components/en/TargetAudienceSectionEN";
import { BenefitsSectionEN } from "@/components/en/BenefitsSectionEN";
import { TestimonialsSectionEN } from "@/components/en/TestimonialsSectionEN";
import { BonusSectionEN } from "@/components/en/BonusSectionEN";
import { PricingSectionEN } from "@/components/en/PricingSectionEN";
import { FAQSectionEN } from "@/components/en/FAQSectionEN";
import { TwoPathsSectionEN } from "@/components/en/TwoPathsSectionEN";
import { EmailHelpSectionEN } from "@/components/en/EmailHelpSectionEN";
import { FooterSectionEN } from "@/components/en/FooterSectionEN";
import { FloatingPopupEN, useFloatingPopupEN } from "@/components/en/FloatingPopupEN";
import { SocialProofNotificationsEN } from "@/components/en/SocialProofNotificationsEN";
import { MobileBottomBarEN } from "@/components/en/MobileBottomBarEN";
import { ThemeCarouselSectionEN } from "@/components/en/ThemeCarouselSectionEN";
import { ConeShowcaseSectionEN } from "@/components/en/ConeShowcaseSectionEN";
import { AuthorSectionEN } from "@/components/en/AuthorSectionEN";
import { IncomeCalculatorSectionEN } from "@/components/en/IncomeCalculatorSectionEN";
import { CustomerCreationsSectionEN } from "@/components/en/CustomerCreationsSectionEN";
import { FloatingWhatsAppButtonEN } from "@/components/en/FloatingWhatsAppButtonEN";

const IndexEN = () => {
  const { isOpen, openPopup, closePopup } = useFloatingPopupEN();

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
      <MarqueeBannerEN />
      <HeroSectionEN />
      <CustomerCreationsSectionEN />
      <ShowcaseSectionEN />
      <OccasionsSectionEN />
      <HowItWorksSectionEN />
      <TargetAudienceSectionEN />

      {/* Infinite loop before BenefitsSection */}
      <div className="py-6 bg-white overflow-hidden">
        <ThemeCarouselSectionEN variant={4} />
      </div>

      <ConeShowcaseSectionEN />
      <BenefitsSectionEN />
      <TestimonialsSectionEN />
      <BonusSectionEN />
      <IncomeCalculatorSectionEN />
      <PricingSectionEN onBasicClick={openPopup} />
      <FAQSectionEN />
      <AuthorSectionEN />
      <TwoPathsSectionEN />
      <EmailHelpSectionEN />
      <FooterSectionEN />
      <FloatingPopupEN isOpen={isOpen} onClose={closePopup} />
      <SocialProofNotificationsEN />
      <FloatingWhatsAppButtonEN />
      <MobileBottomBarEN />
    </div>
  );
};

export default IndexEN;
