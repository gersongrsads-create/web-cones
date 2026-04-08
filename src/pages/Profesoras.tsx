import { getNextDatesUrgencyText } from "@/hooks/useDynamicDate";
import { MarqueeBannerPersona } from "@/components/personas/MarqueeBannerPersona";
import { HeroPersona } from "@/components/personas/HeroPersona";
import { CustomerCreationsSection } from "@/components/CustomerCreationsSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { OccasionsSection } from "@/components/OccasionsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TargetAudiencePersona } from "@/components/personas/TargetAudiencePersona";
import { ThemeCarouselSection } from "@/components/ThemeCarouselSection";
import { ConeShowcaseSection } from "@/components/ConeShowcaseSection";
import { BenefitsPersona } from "@/components/personas/BenefitsPersona";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { AuthorSection } from "@/components/AuthorSection";
import { TwoPathsPersona } from "@/components/personas/TwoPathsPersona";
import { WhatsAppHelpSection } from "@/components/WhatsAppHelpSection";
import { FooterSection } from "@/components/FooterSection";
import { FloatingPopup, useFloatingPopup } from "@/components/FloatingPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { FileText, Printer, Scissors, Heart, Palette, Infinity } from "lucide-react";

const marqueBadges = [
  { emoji: "🎒", text: `${getNextDatesUrgencyText()}!` },
  { emoji: "✅", text: "Acesso Imediato" },
  { emoji: "🔥", text: "Atividade Pronta Para a Sala de Aula" },
  { emoji: "💖", text: "+3.500 professoras satisfeitas" },
  { emoji: "🎁", text: "4 Bônus Grátis" },
  { emoji: "✂️", text: "+200 Modelos" },
];

const heroConfig = {
  badgeText: `${getNextDatesUrgencyText()} — A atividade perfeita para a sala de aula!`,
  titleLine1: "🎀 SUPER PACK",
  titleLine2: "A Manualidade Mais Fácil e Linda Para a Páscoa e o Dia das Mães",
  subtitle: "VOCÊ SÓ IMPRIME — OS ALUNOS RECORTAM, MONTAM E PRESENTEIAM!",
  description: "+200 moldes prontos para imprimir. Sem EVA, sem cola quente, sem materiais caros. Os próprios alunos montam o cone que vai emocionar as mamães!",
  descriptionHighlight: "📲 Receba no WhatsApp e E-mail na hora!",
  benefits: [
    { title: "Só Imprimir:", desc: "Sem comprar EVA, feltro ou materiais caros!" },
    { title: "Alunos Montam Sozinhos:", desc: "Recortar e colar — atividade lúdica perfeita!" },
    { title: "Economize Tempo:", desc: "Zero planejamento. Imprima e distribua!" },
    { title: "Emoção Garantida:", desc: "Presente lindo que faz as mães chorarem de alegria!" },
  ],
  ctaText: "QUERO A ATIVIDADE PERFEITA",
  socialProofText: "+3.500 Professoras Satisfeitas",
};

const benefitsConfig = {
  badgeText: "Por Que Este Pack?",
  title: "A Atividade Mais Fácil e",
  titleHighlight: "Emocionante Para a Páscoa e Dia das Mães",
  ctaText: "QUERO FACILITAR MINHA VIDA",
  benefits: [
    { icon: FileText, title: "Sem Materiais Caros", description: "Chega de EVA, feltro e cola quente. Só precisa de papel e impressora!" },
    { icon: Scissors, title: "Alunos Montam Sozinhos", description: "Recortar e colar o cone = atividade lúdica educativa!" },
    { icon: Printer, title: "Zero Planejamento", description: "Moldes prontos. Imprima, distribua e pronto!" },
    { icon: Palette, title: "+200 Temas Fofos", description: "De unicórnios a personagens favoritos das crianças" },
    { icon: Heart, title: "Presente Que Emociona", description: "As mães vão chorar de alegria com o carinho dos filhos" },
    { icon: Infinity, title: "Imprima Para Toda Escola", description: "Pague uma vez, imprima para todas as turmas!" },
  ],
};

const targetProblems = [
  { emoji: "📚", text: "Precisa de uma atividade para a Páscoa ou Dia das Mães e não tem tempo para planejar..." },
  { emoji: "💸", text: "Não quer gastar do próprio bolso com EVA e materiais caros..." },
  { emoji: "✂️", text: "Precisa de algo que os alunos consigam montar sozinhos..." },
  { emoji: "🤯", text: "As datas estão chegando e você não preparou nada ainda..." },
  { emoji: "🎁", text: "Quer um presente que emocione as mães sem complicação..." },
];

const twoPathsConfig = {
  path1Items: [
    "Gastar do próprio bolso com EVA e materiais",
    "Perder noites planejando atividades do zero",
    "Atividades complicadas que os alunos não conseguem fazer",
    "Páscoa e Dia das Mães sem presente especial para as mães",
  ],
  path2Items: [
    "+200 moldes prontos no WhatsApp em segundos",
    "Sem gastar com materiais — só papel e impressora",
    "Alunos recortam e montam sozinhos com alegria",
    "Presente emocionante que as mães vão guardar para sempre",
  ],
  path1Result: "Resultado: Estresse, gasto e pouca emoção",
  path2Result: "Resultado: Atividade fácil que emociona todas as mães",
  ctaText: "EU ESCOLHO A ATIVIDADE PERFEITA ✨",
};

const Profesoras = () => {
  const { isOpen, openPopup, closePopup } = useFloatingPopup();

  return (
    <div className="min-h-screen bg-background">
      <MarqueeBannerPersona badges={marqueBadges} />
      <HeroPersona {...heroConfig} />
      <CustomerCreationsSection
        headline="Elas Imprimiram, Montaram e"
        headlineHighlight="Emocionaram!"
        subtitle="Veja as atividades incríveis que professoras fizeram com o Super Pack!"
        ctaText="QUERO FAZER A MINHA TAMBÉM 👆"
      />
      <div className="content-auto">
        <ShowcaseSection />
      </div>
      <OccasionsSection />
      <HowItWorksSection
        step3Title="Monte com os Alunos"
        step3Description="Os alunos recortam, montam o cone e recheiam com doces. Atividade lúdica completa!"
        ctaText="QUERO A ATIVIDADE PRONTA 👆"
      />
      <TargetAudiencePersona
        problems={targetProblems}
        ctaText="QUERO FACILITAR MINHA VIDA AGORA"
        closingText="Então o Super Pack foi feito sob medida para professoras como você!"
      />

      <div className="py-6 bg-white overflow-hidden content-auto">
        <ThemeCarouselSection variant={4} />
      </div>

      <div className="content-auto">
        <ConeShowcaseSection />
      </div>
      <BenefitsPersona {...benefitsConfig} />
      <TestimonialsSection
        headline="+3.500"
        headlineHighlight="Professoras Satisfeitas"
        subtitle="Veja o que estão falando sobre os Cones de Coração"
        ctaText="QUERO FACILITAR MINHA VIDA 👆"
      />
      <BonusSection
        bonus3Description="Modelos extras para atividades especiais!"
        ctaText="EU QUERO OS BÔNUS GRÁTIS 🎁"
      />
      <PricingSection onBasicClick={openPopup} />
      <FAQSection />
      <AuthorSection
        description="Maia Aguiar é apaixonada por criar materiais criativos que facilitam a vida de quem educa. Há anos ajudando milhares de professoras com atividades práticas e bonitas, ela desenvolveu o Super Pack de Cones de Coração para tornar as datas comemorativas mais fáceis e emocionantes na sala de aula. 💖"
      />
      <TwoPathsPersona {...twoPathsConfig} />
      <WhatsAppHelpSection />
      <FooterSection />
      <FloatingPopup isOpen={isOpen} onClose={closePopup} />
      <WhatsAppButton />
      <SocialProofNotifications />
      <MobileBottomBar />
    </div>
  );
};

export default Profesoras;
