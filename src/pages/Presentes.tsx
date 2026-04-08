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
import { Gift, Printer, Scissors, Heart, Palette, Infinity } from "lucide-react";

const marqueBadges = [
  { emoji: "💝", text: `${getNextDatesUrgencyText()}!` },
  { emoji: "✅", text: "Acesso Imediato" },
  { emoji: "🎁", text: "Presente Lindo Sem Gastar Muito" },
  { emoji: "💖", text: "+3.500 pessoas já compraram" },
  { emoji: "✂️", text: "+200 Modelos Prontos" },
  { emoji: "🏠", text: "Faça em Casa" },
];

const heroConfig = {
  badgeText: `${getNextDatesUrgencyText()} — Surpreenda sem estourar o orçamento!`,
  titleLine1: "🎀 SUPER PACK",
  titleLine2: "Surpreenda as Mulheres da Sua Vida com o Presente Perfeito (Que Cabe no Seu Bolso)",
  subtitle: "+200 MODELOS DE CONES DE CORAÇÃO PRONTOS PARA IMPRIMIR EM CASA",
  description: "Baixe agora, imprima na sua impressora, monte em minutos e recheie com chocolates. O presente mais lindo e econômico que você já deu!",
  descriptionHighlight: "📲 Receba no WhatsApp e E-mail na hora!",
  benefits: [
    { title: "Presente de Aparência Premium:", desc: "Cones lindos que parecem comprados em loja de grife — mas feitos por você!" },
    { title: "Sem Experiência Necessária:", desc: "Só precisa de tesoura, cola e uma impressora. Qualquer pessoa monta!" },
    { title: "Economize Muito:", desc: "Cada cone custa centavos para fazer. Presenteie sem gastar fortunas!" },
    { title: "Um Presente Único Para Cada Mulher:", desc: "+200 temas diferentes — mãe, esposa, amiga, colega... todas ganham algo especial!" },
  ],
  ctaText: "QUERO SURPREENDER AGORA",
  socialProofText: "+3.500 Pessoas Já Presentearam",
};

const benefitsConfig = {
  badgeText: "Por Que Este Pack?",
  title: "O Presente Mais Lindo",
  titleHighlight: "Que Você Pode Fazer em Casa",
  ctaText: "QUERO FAZER PRESENTES INCRÍVEIS",
  benefits: [
    { icon: Gift, title: "Presente de Aparência Premium", description: "Cones sofisticados que encantam — sem pagar caro" },
    { icon: Printer, title: "Imprima na Sua Impressora", description: "Sem gráfica, sem complicação. Impressora comum resolve!" },
    { icon: Scissors, title: "Monte em Minutos", description: "Tesoura + cola + 5 minutos = presente pronto!" },
    { icon: Heart, title: "Recheie com Carinho", description: "Chocolates, balas, flores... você escolhe o recheio!" },
    { icon: Palette, title: "+200 Temas Diferentes", description: "De florais a personagens — um modelo único para cada pessoa" },
    { icon: Infinity, title: "Use Quantas Vezes Quiser", description: "Pague uma vez, imprima para sempre. Natal, aniversário, qualquer data!" },
  ],
};

const targetProblems = [
  { emoji: "🎁", text: "Quer dar um presente bonito mas não quer gastar uma fortuna..." },
  { emoji: "⏰", text: "A Páscoa e o Dia das Mães estão chegando e você ainda não tem nada preparado..." },
  { emoji: "🤔", text: "Não sabe o que dar para a mãe, esposa, amiga ou colega de trabalho..." },
  { emoji: "💸", text: "Os presentes nas lojas estão caros demais para presentear várias mulheres..." },
  { emoji: "🏠", text: "Quer algo feito com carinho, mas não tem habilidade manual..." },
];

const twoPathsConfig = {
  path1Items: [
    "Gastar uma fortuna em presentes genéricos de loja",
    "Dar o mesmo chocolate de caixa de sempre",
    "Deixar a Páscoa e o Dia das Mães passar sem presentear",
    "Sentir que o presente não tem personalidade",
  ],
  path2Items: [
    "Presentes lindos e personalizados por centavos cada",
    "Surpreender cada mulher com um cone diferente e recheado",
    "Montar tudo em casa em minutos, sem complicação",
    "Receber elogios como: 'Que presente mais lindo!'",
  ],
  path1Result: "Resultado: Presente sem graça ou bolso vazio",
  path2Result: "Resultado: Presentes inesquecíveis que cabem no bolso",
  ctaText: "EU ESCOLHO SURPREENDER ✨",
};

const Presentes = () => {
  const { isOpen, openPopup, closePopup } = useFloatingPopup();

  return (
    <div className="min-h-screen bg-background">
      <MarqueeBannerPersona badges={marqueBadges} />
      <HeroPersona {...heroConfig} />
      <CustomerCreationsSection
        headline="Elas Imprimiram, Montaram e"
        headlineHighlight="Amaram!"
        subtitle="Veja os presentes incríveis que nossos clientes fizeram — e você pode fazer igual hoje!"
        ctaText="QUERO FAZER O MEU TAMBÉM 👆"
      />
      <div className="content-auto">
        <ShowcaseSection />
      </div>
      <OccasionsSection />
      <HowItWorksSection
        step3Title="Monte e Presenteie"
        step3Description="Corte, monte o cone e recheie com chocolates, flores ou o que imaginar. Surpreenda!"
        ctaText="QUERO SURPREENDER AGORA 👆"
      />
      <TargetAudiencePersona
        problems={targetProblems}
        ctaText="QUERO O PRESENTE PERFEITO"
        closingText="Então o Super Pack foi feito sob medida para você surpreender quem ama!"
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
        headlineHighlight="Pessoas Satisfeitas"
        subtitle="Veja o que estão falando sobre os Cones de Coração"
        ctaText="QUERO SURPREENDER TAMBÉM 👆"
      />
      <BonusSection
        bonus3Description="Modelos extras prontos para montar e presentear!"
        ctaText="EU QUERO OS BÔNUS GRÁTIS 🎁"
      />
      <PricingSection onBasicClick={openPopup} />
      <FAQSection />
      <AuthorSection
        description="Maia Aguiar é apaixonada por criar mimos que encantam e emocionam. Há anos ajudando milhares de pessoas a surpreenderem quem amam com presentes feitos à mão, ela desenvolveu o Super Pack de Cones de Coração para facilitar a vida de quem quer presentear com carinho e criatividade. 💖"
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

export default Presentes;
