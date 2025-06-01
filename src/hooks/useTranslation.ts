import { languageStore } from "../store/languageStore";
import translations from "../locales/server-locales.json";

type TranslationKey = keyof typeof translations;
type Language = "en" | "es" | "pt";

export const useTranslation = () => {
  const { currentLanguage } = languageStore();

  const translate = (key: string): string => {
    const translation = translations[key as TranslationKey];
    if (!translation) return key;
    return translation[currentLanguage as Language] || key;
  };

  return { translate };
};
