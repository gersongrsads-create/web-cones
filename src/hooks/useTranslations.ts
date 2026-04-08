import { useLocation } from 'react-router-dom';
import en from '@/i18n/en.json';
import es from '@/i18n/es.json';
import pt from '@/i18n/pt.json';

type Language = 'en' | 'es' | 'pt';

const translations = {
  en,
  es,
  pt,
};

export const useLanguage = (): Language => {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/es')) return 'es';
  return 'pt';
};

export const useTranslations = () => {
  const lang = useLanguage();
  return translations[lang] as typeof en;
};
