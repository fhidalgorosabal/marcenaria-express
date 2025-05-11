export const STYLES_HEADER = {
  header: (isScrolled: boolean, isScrollPage: boolean) => `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      isScrolled || !isScrollPage
        ? "bg-white/60 backdrop-blur-md shadow-lg"
        : "bg-transparent/20"
    }
  `,
  logo: (isScrolled: boolean, isScrollPage: boolean) => `
    text-xl font-bold transition-colors
    ${
      isScrolled || !isScrollPage
        ? "text-gray-700 hover:text-gray-600"
        : "text-gray-400 hover:text-gray-300"
    }
  `,
  navLink: (isActive: boolean, isScrolled: boolean, isScrollPage: boolean) => `
    inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
    ${
      isActive
        ? isScrolled || !isScrollPage
          ? "border-yellow-800 text-gray-900"
          : "border-gray-300 text-white"
        : isScrolled || !isScrollPage
        ? "border-transparent text-gray-700 hover:border-gray-600 hover:text-gray-600"
        : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300"
    }
  `,
  mobileNavLink: (isActive: boolean) => `
    block px-3 py-2 rounded-md text-base font-medium
    ${
      isActive
        ? "bg-yellow-800 text-white"
        : "text-gray-600 hover:text-gray-700 hover:bg-gray-100"
    }
  `,
  menuButton: (isScrolled: boolean, isScrollPage: boolean) => `
    inline-flex items-center justify-center p-2 rounded-md
    ${
      isScrolled || !isScrollPage
        ? "text-gray-700 hover:text-gray-900"
        : "text-gray-400 hover:text-white"
    }
  `,
};
