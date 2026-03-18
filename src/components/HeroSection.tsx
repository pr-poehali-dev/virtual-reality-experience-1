import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { LiquidBackground } from "./LiquidBackground";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/212acdb7-9806-4952-b36b-5e775173069b/files/a4567f9a-ac69-4188-be21-c17c063e0b40.jpg";

const statsIcons = [
  { key: "cpu", icon: "Cpu" },
  { key: "ram", icon: "MemoryStick" },
  { key: "gpu", icon: "Thermometer" },
  { key: "disk", icon: "HardDrive" },
  { key: "network", icon: "Wifi" },
  { key: "security", icon: "ShieldCheck" },
];

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <LiquidBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08080f] pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-gray-400 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              {t("hero.version")} · {t("hero.windows")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#download">
                <Button className="btn-gradient text-white font-semibold rounded-2xl px-8 h-13 text-base border-0 w-full sm:w-auto">
                  <Icon name="Download" size={20} className="mr-2" />
                  {t("hero.downloadBtn")}
                </Button>
              </a>
              <Button
                variant="outline"
                className="rounded-2xl px-6 h-13 text-base border-white/[0.08] bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] hover:text-white transition-all"
              >
                <Icon name="Play" size={18} className="mr-2" />
                {t("hero.demoBtn")}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Icon name="Monitor" size={14} className="text-gray-600" />
                {t("hero.windows")}
              </span>
              <span className="text-gray-700">·</span>
              <span className="flex items-center gap-1.5">
                <Icon name="Sparkles" size={14} className="text-gray-600" />
                {t("hero.free")}
              </span>
              <span className="text-gray-700">·</span>
              <span className="flex items-center gap-1.5">
                <Icon name="Ban" size={14} className="text-gray-600" />
                {t("hero.noAds")}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 rounded-[3rem] blur-3xl" />
            <div className="relative glass-panel rounded-3xl p-2 animate-float">
              <img
                src={HERO_IMAGE}
                alt="ProjectSystemX Interface"
                className="rounded-2xl w-full"
                loading="eager"
              />
              <div className="absolute -bottom-4 -right-4 glass-panel rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">10M+ {t("hero.downloads")}</p>
                  <p className="text-[10px] text-gray-500">{t("hero.safe")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {statsIcons.map(({ key, icon }) => (
              <div
                key={key}
                className="glass-panel-light rounded-2xl px-4 py-3.5 text-center hover:bg-white/[0.06] transition-all group cursor-default"
              >
                <Icon
                  name={icon}
                  size={20}
                  className="mx-auto mb-2 text-gray-500 group-hover:text-indigo-400 transition-colors"
                />
                <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  {t(`stats.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
