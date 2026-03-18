import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { GlassModal, ModalItem } from "./GlassModal";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const metrics = [
  { key: "cpuLoad", value: "34%", percent: 34, color: "from-indigo-500 to-blue-500", icon: "Cpu" },
  { key: "ramUsage", value: "6.2 / 16 ГБ", percent: 39, color: "from-purple-500 to-pink-500", icon: "MemoryStick" },
  { key: "gpuTemp", value: "61°C", percent: 61, color: "from-emerald-500 to-teal-500", icon: "Thermometer" },
  { key: "diskC", value: "120 / 500 ГБ", percent: 24, color: "from-amber-500 to-orange-500", icon: "HardDrive" },
];

export function MonitoringSection() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section id="monitoring" ref={ref} className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400 mb-4">
                <Icon name="Activity" size={12} />
                Real-time
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {t("monitoring.title")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                {t("monitoring.subtitle")}
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors group"
              >
                {t("monitoring.more")}
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="glass-panel rounded-3xl p-6 space-y-5">
                {metrics.map((m) => (
                  <div key={m.key}>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center opacity-80`}>
                          <Icon name={m.icon} size={15} className="text-white" />
                        </div>
                        <span className="text-sm text-gray-300 font-medium">{t(`monitoring.${m.key}`)}</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{m.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${m.percent}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-2 flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                  <span>2s refresh</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GlassModal open={modalOpen} onOpenChange={setModalOpen} title={t("monitoring.modal.title")}>
        <ModalItem icon={<Icon name="Cpu" size={18} className="text-indigo-400" />} title={t("monitoring.modal.cpu")} description={t("monitoring.modal.cpuDesc")} />
        <ModalItem icon={<Icon name="MemoryStick" size={18} className="text-purple-400" />} title={t("monitoring.modal.ram")} description={t("monitoring.modal.ramDesc")} />
        <ModalItem icon={<Icon name="Monitor" size={18} className="text-emerald-400" />} title={t("monitoring.modal.gpu")} description={t("monitoring.modal.gpuDesc")} />
        <ModalItem icon={<Icon name="HardDrive" size={18} className="text-amber-400" />} title={t("monitoring.modal.disk")} description={t("monitoring.modal.diskDesc")} />
        <ModalItem icon={<Icon name="Wifi" size={18} className="text-cyan-400" />} title={t("monitoring.modal.net")} description={t("monitoring.modal.netDesc")} />
        <ModalItem icon={<Icon name="BatteryCharging" size={18} className="text-green-400" />} title={t("monitoring.modal.battery")} description={t("monitoring.modal.batteryDesc")} />
      </GlassModal>
    </>
  );
}

export default MonitoringSection;
