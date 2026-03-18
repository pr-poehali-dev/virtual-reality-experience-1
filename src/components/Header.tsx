import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const navItems = [
    { label: t("nav.monitoring"), href: "#monitoring" },
    { label: t("nav.cleanup"), href: "#cleanup" },
    { label: t("nav.gaming"), href: "#gaming" },
    { label: t("nav.compare"), href: "#compare" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
            Project<span className="gradient-text">SystemX</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="h-8 px-2.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all border border-white/[0.06] flex items-center gap-1.5"
          >
            <Icon name="Globe" size={14} />
            {i18n.language === "ru" ? "EN" : "RU"}
          </button>

          <a href="#download">
            <Button className="btn-gradient text-white text-sm font-medium rounded-xl px-5 h-9 border-0 hidden sm:flex">
              <Icon name="Download" size={15} className="mr-1.5" />
              {t("nav.download")}
            </Button>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-9 w-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-panel border-t border-white/[0.04] px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="block mt-2"
          >
            <Button className="btn-gradient text-white text-sm font-medium rounded-xl w-full h-10 border-0">
              <Icon name="Download" size={15} className="mr-1.5" />
              {t("nav.download")}
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
