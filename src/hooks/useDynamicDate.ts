import { useMemo } from "react";

export const useDynamicDate = () => {
  const tomorrow = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    return `${day}/${month}`;
  }, []);

  return tomorrow;
};

export const getFormattedTomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  
  return `${day}/${month}`;
};

export const getNextDatesUrgencyText = (): string => {
  return "Páscoa e Dia das Mães incluídos";
};

// Legacy — kept for /en route compatibility
export const getDaysUntilWomensDay = (): number => {
  const now = new Date();
  const currentYear = now.getFullYear();
  let womensDay = new Date(currentYear, 2, 8);
  if (now > womensDay) {
    womensDay = new Date(currentYear + 1, 2, 8);
  }
  const diffTime = womensDay.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getWomensDayUrgencyText = (): string => {
  return getNextDatesUrgencyText();
};
