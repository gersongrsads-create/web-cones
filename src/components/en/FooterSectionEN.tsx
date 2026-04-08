import { Mail, Instagram } from "lucide-react";

export const FooterSectionEN = () => {
  return (
    <footer className="bg-foreground text-background pb-28 md:pb-0">
      <div className="py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-black mb-2">Super Pack Heart Cone Templates</h3>
              <p className="text-background/70 text-xs mb-2">
                200+ ready-to-print cone templates to craft and profit.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-2">Payment Methods</h4>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="bg-background/10 px-2.5 py-1 rounded text-xs">Credit Card</span>
                <span className="bg-background/10 px-2.5 py-1 rounded text-xs">PayPal</span>
              </div>
              <p className="text-background/50 text-xs mt-2">
                📥 Instant Digital Download via email
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-2">Contact</h4>
              <a href="mailto:support@conesdecoração.com" className="flex items-center gap-1.5 text-background/70 hover:text-background transition-colors text-xs">
                <Mail className="w-3.5 h-3.5" />
                support@conesdecoração.com
              </a>
            </div>
          </div>

          <div className="border-t border-background/10 pt-6">
            <p className="text-background/50 text-[10px] text-center leading-relaxed">
              This site is not affiliated with Facebook or any Facebook entity. We make every effort to clearly indicate and show all product proof and use real results.
            </p>
            <p className="text-background/50 text-[10px] text-center mt-2">
              100% digital product — Instant Digital Download. No shipping required.
            </p>
            <p className="text-background/40 text-[10px] text-center mt-3">
              © 2026 Maia Aguiar - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
