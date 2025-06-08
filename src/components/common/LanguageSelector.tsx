import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { languageStore } from "../../store/languageStore";
import "flag-icon-css/css/flag-icons.min.css";

const LanguageSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage } = languageStore();

  const handleLanguageChange = (lang: "en" | "es" | "pt") => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const getLanguageFlag = (lang: string) => {
    switch (lang) {
      case "es":
        return <span className="flag-icon flag-icon-es" title="Español"></span>;
      case "en":
        return <span className="flag-icon flag-icon-gb" title="English"></span>;
      case "pt":
        return (
          <span className="flag-icon flag-icon-pt" title="Português"></span>
        );
      default:
        return (
          <span className="flag-icon flag-icon-un" title="Language"></span>
        );
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100/20 focus:outline-none"
      >
        <span className="text-xl">{getLanguageFlag(currentLanguage)}</span>
        <FiChevronDown
          className={`h-4 w-4 transition-transform ${
            isMenuOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => handleLanguageChange("es")}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <span className="text-xl mr-2">{getLanguageFlag("es")}</span>
              Español
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <span className="text-xl mr-2">{getLanguageFlag("en")}</span>
              English
            </button>
            <button
              onClick={() => handleLanguageChange("pt")}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <span className="text-xl mr-2">{getLanguageFlag("pt")}</span>
              Português
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
