import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { GlassModal, ModalItem } from "./GlassModal";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const games = [
  {
    name: "Cyberpunk 2077",
    platform: "Steam",
    size: "70 ГБ",
    color: "from-yellow-500/20 to-red-500/20",
    border: "border-yellow-500/20",
    active: true,
  },
  {
    name: "The Witcher 3",
    platform: "GOG",
    size: "50 ГБ",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    active: false,
  },
  {
    name: "Elden Ring",
    platform: "Steam",
    size: "45 ГБ",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    active: false,
  },
];

export function GamingSection() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section id="gaming" ref={ref} className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-400 mb-4">
                <Icon name="Gamepad2" size={12} />
                Game Hub
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {t("gaming.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                {t("gaming.subtitle")}
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors group"
              >
                {t("gaming.more")}
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="glass-panel rounded-3xl p-6 space-y-3">
                {games.map((game) => (
                  <div
                    key={game.name}
                    className={`flex items-center justify-between rounded-2xl p-4 border transition-all hover:scale-[1.01] ${
                      game.active
                        ? `bg-gradient-to-r ${game.color} ${game.border}`
                        : "bg-white/[0.02] border-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${game.color} border ${game.border} flex items-center justify-center`}>
                        <Icon name="Gamepad2" size={18} className={game.active ? "text-white" : "text-gray-500"} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{game.name}</p>
                        <p className="text-xs text-gray-500">{game.platform} · {game.size}</p>
                      </div>
                    </div>
                    {game.active ? (
                      <Button size="sm" className="btn-gradient text-white text-xs font-medium rounded-xl h-8 px-4 border-0">
                        <Icon name="Play" size={12} className="mr-1" />
                        {t("gaming.play")}
                      </Button>
                    ) : (
                      <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                        <Icon name="ChevronRight" size={14} className="text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/[0.06]">
                  <div>
                    <p className="text-sm font-medium text-white">{t("gaming.gameMode")}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t("gaming.gameModeDesc")}</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GlassModal open={modalOpen} onOpenChange={setModalOpen} title={t("gaming.modal.title")}>
        <ModalItem icon={<Icon name="Search" size={18} className="text-green-400" />} title={t("gaming.modal.scan")} description={t("gaming.modal.scanDesc")} />
        <ModalItem icon={<Icon name="Zap" size={18} className="text-yellow-400" />} title={t("gaming.modal.optimize")} description={t("gaming.modal.optimizeDesc")} />
        <ModalItem icon={<Icon name="Layers" size={18} className="text-blue-400" />} title={t("gaming.modal.overlay")} description={t("gaming.modal.overlayDesc")} />
        <ModalItem icon={<Icon name="Video" size={18} className="text-pink-400" />} title={t("gaming.modal.capture")} description={t("gaming.modal.captureDesc")} />
      </GlassModal>
    </>
  );
}

export default GamingSection;
