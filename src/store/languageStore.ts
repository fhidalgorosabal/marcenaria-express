import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "en" | "es" | "pt";

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const languageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: "es",
      setLanguage: (language) => set({ currentLanguage: language }),
    }),
    {
      name: "language-storage",
    }
  )
);
