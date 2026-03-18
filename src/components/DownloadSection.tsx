import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/use-scroll-animation";

export function DownloadSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="download" ref={ref} className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-indigo-600/20" />
          <div className="absolute inset-0 glass-panel" />
          <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.06]" />

          <div className="relative px-8 md:px-12 py-12 md:py-16 text-center">
            <div className="flex justify-center gap-3 mb-6">
              {["Shield", "Zap", "Download"].map((icon) => (
                <div
                  key={icon}
                  className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/[0.06] flex items-center justify-center"
                >
                  <Icon name={icon} size={22} className="text-indigo-400" />
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t("nav.download")} ProjectSystemX
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              {t("hero.windows")} · 64-bit · ~80 MB · {t("hero.free")} · {t("hero.noAds")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button className="btn-gradient text-white font-semibold rounded-2xl px-8 h-13 text-base border-0">
                <Icon name="Download" size={20} className="mr-2" />
                {t("hero.downloadBtn")} (.exe)
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl px-6 h-13 text-base border-white/[0.08] bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] hover:text-white"
              >
                <Icon name="Github" size={18} className="mr-2" />
                GitHub Releases
              </Button>
            </div>

            <p className="text-xs text-gray-600">
              {t("hero.version")} · {t("hero.updated")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DownloadSection;
