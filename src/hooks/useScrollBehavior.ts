import { useEffect, useState } from "react";

export const useScrollBehavior = (
  isScrollPage: boolean,
  isMenuOpen: boolean
) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isScrollPage || isMenuOpen) {
      setIsScrolled(true);
      return;
    }

    if (isScrollPage && !isMenuOpen) {
      setIsScrolled(window.scrollY > 0);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollPage, isMenuOpen]);

  return isScrolled;
};
