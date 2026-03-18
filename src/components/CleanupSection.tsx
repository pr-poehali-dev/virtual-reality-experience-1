import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { GlassModal, ModalItem } from "./GlassModal";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const categories = [
  { key: "temp", size: "3.8 ГБ", percent: 70, icon: "FileArchive", checked: true },
  { key: "cache", size: "1.2 ГБ", percent: 22, icon: "Globe", checked: true },
  { key: "logs", size: "420 МБ", percent: 8, icon: "FileText", checked: false },
];

export function CleanupSection() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section id="cleanup" ref={ref} className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="glass-panel rounded-3xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-400">{t("cleanup.found")}</span>
                  <span className="text-2xl font-bold text-white">5.4 ГБ</span>
                </div>

                <div className="relative h-3 rounded-full bg-white/[0.06] overflow-hidden mb-6">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: "70%" } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-0 h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                    style={{ left: "70%" }}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: "22%" } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute top-0 h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                    style={{ left: "92%" }}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: "8%" } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>

                <div className="space-y-3 mb-6">
                  {categories.map((cat) => (
                    <div
                      key={cat.key}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-colors ${
                        cat.checked
                          ? "bg-white/[0.04] border border-white/[0.06]"
                          : "bg-white/[0.02] border border-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-5 w-5 rounded-md border flex items-center justify-center ${
                          cat.checked
                            ? "bg-indigo-500 border-indigo-500"
                            : "border-gray-600 bg-transparent"
                        }`}>
                          {cat.checked && <Icon name="Check" size={12} className="text-white" />}
                        </div>
                        <Icon name={cat.icon} size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-200">{t(`cleanup.${cat.key}`)}</span>
                      </div>
                      <span className="text-xs font-medium text-gray-500">{cat.size}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full btn-gradient text-white font-semibold rounded-2xl h-12 border-0">
                  <Icon name="Trash2" size={18} className="mr-2" />
                  {t("cleanup.cleanBtn")}
                </Button>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-400 mb-4">
                <Icon name="Trash2" size={12} />
                Deep Clean
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {t("cleanup.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                {t("cleanup.subtitle")}
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors group"
              >
                {t("cleanup.more")}
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <GlassModal open={modalOpen} onOpenChange={setModalOpen} title={t("cleanup.modal.title")}>
        <ModalItem icon={<Icon name="FileArchive" size={18} className="text-red-400" />} title={t("cleanup.modal.tempFiles")} description={t("cleanup.modal.tempFilesDesc")} />
        <ModalItem icon={<Icon name="Globe" size={18} className="text-orange-400" />} title={t("cleanup.modal.browserCache")} description={t("cleanup.modal.browserCacheDesc")} />
        <ModalItem icon={<Icon name="Trash" size={18} className="text-amber-400" />} title={t("cleanup.modal.recycle")} description={t("cleanup.modal.recycleDesc")} />
        <ModalItem icon={<Icon name="Database" size={18} className="text-purple-400" />} title={t("cleanup.modal.registry")} description={t("cleanup.modal.registryDesc")} />
        <ModalItem icon={<Icon name="Rocket" size={18} className="text-cyan-400" />} title={t("cleanup.modal.startup")} description={t("cleanup.modal.startupDesc")} />
      </GlassModal>
    </>
  );
}

export default CleanupSection;
