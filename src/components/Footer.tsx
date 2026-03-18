import { useTranslation } from "react-i18next";
import Icon from "@/components/ui/icon";

const socials = [
  { icon: "Send", href: "https://t.me/projectsystemx", label: "Telegram" },
  { icon: "MessageCircle", href: "https://discord.gg/projectsystemx", label: "Discord" },
  { icon: "Github", href: "https://github.com/projectsystemx", label: "GitHub" },
  { icon: "Youtube", href: "https://youtube.com/@projectsystemx", label: "YouTube" },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/[0.04] py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <div>
              <span className="text-white font-semibold text-sm">ProjectSystemX</span>
              <span className="text-gray-600 text-xs ml-2">{t("footer.description")}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all hover:scale-105"
                aria-label={s.label}
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>&copy; 2026 ProjectSystemX · {t("footer.rights")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-gray-400 transition-colors">{t("footer.terms")}</a>
            <a href="mailto:support@projectsystemx.com" className="hover:text-gray-400 transition-colors">
              support@projectsystemx.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
