// Scroll suave y confiable hacia la sección de oferta
// Usa scrollTo con offset calculado para evitar que el scroll se detenga a mitad de camino
export const scrollToOferta = () => {
  const el = document.getElementById('oferta');
  if (!el) return;
  
  const offset = 16; // margen superior en px
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({ top, behavior: 'smooth' });
};
