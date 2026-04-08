import { MessageCircle, Instagram } from "lucide-react";

export const FooterSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511985653574&text=Olá!%20Tenho%20interesse%20no%20Super%20Pack%20de%20Cones%20de%20Coração";

  return (
    <footer className="bg-foreground text-background pb-28 md:pb-0">
      <div className="py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-black mb-2">Super Pack Cones de Coração</h3>
              <p className="text-background/70 text-xs mb-2">
                +200 modelos de cones prontos para imprimir e lucrar.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-2">Formas de Pagamento</h4>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="bg-background/10 px-2.5 py-1 rounded text-xs">Pix</span>
                <span className="bg-background/10 px-2.5 py-1 rounded text-xs">Cartão</span>
                <span className="bg-background/10 px-2.5 py-1 rounded text-xs">Boleto</span>
              </div>
              <p className="text-background/50 text-xs mt-2">
                📲 Receba no WhatsApp instantaneamente
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-2">Contato</h4>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-background/70 hover:text-background transition-colors text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                (11) 9 8565-3574
              </a>
            </div>
          </div>

          <div className="border-t border-background/10 pt-6">
            <p className="text-background/50 text-[10px] text-center leading-relaxed">
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
            </p>
            <p className="text-background/50 text-[10px] text-center mt-2">
              Produto 100% digital. Acesso enviado via WhatsApp após pagamento. Sem frete.
            </p>
            <p className="text-background/40 text-[10px] text-center mt-3">
              © 2026 Maia Aguiar - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
