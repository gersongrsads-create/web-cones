// Parámetros UTM estándar + tracking de plataformas
const trackingKeys = [
  'utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term',
  'sck', 'src', 'xcod', 'ref', 'fbclid', 'gclid', 'ttclid', 'kwai_click_id',
];

// Cache de parámetros capturados al cargar el módulo (instantáneo)
let cachedParams: Record<string, string> | null = null;

const parseParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  trackingKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) params[key] = value;
  });
  return params;
};

// Captura inmediata al importar el módulo
cachedParams = parseParams();

// Captura todos los parámetros de tracking (usa cache para velocidad)
export const getTrackingParams = (): Record<string, string> => {
  if (!cachedParams) cachedParams = parseParams();
  return cachedParams;
};

// Genera query string con todos los parámetros de tracking
export const getUtmParams = (): string => {
  const params = getTrackingParams();
  const searchParams = new URLSearchParams(params);
  const str = searchParams.toString();
  return str ? `?${str}` : '';
};

// Añade parámetros de tracking a una URL de checkout
export const addUtmsToUrl = (baseUrl: string): string => {
  const params = getTrackingParams();
  if (Object.keys(params).length === 0) return baseUrl;
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
};

// Genera la URL con UTMs — usa cache para clics rápidos
export const buildCheckoutUrl = (baseUrl: string): string => {
  return addUtmsToUrl(baseUrl);
};
