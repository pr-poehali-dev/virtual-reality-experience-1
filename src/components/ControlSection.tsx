import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const modules = [
  { key: "monitoring", icon: "Activity", color: "from-indigo-500 to-blue-500", href: "#monitoring" },
  { key: "cleanup", icon: "Trash2", color: "from-red-500 to-orange-500", href: "#cleanup" },
  { key: "gaming", icon: "Gamepad2", color: "from-green-500 to-emerald-500", href: "#gaming" },
  { key: "utilities", icon: "Wrench", color: "from-purple-500 to-pink-500", href: "#" },
  { key: "themes", icon: "Palette", color: "from-cyan-500 to-teal-500", href: "#" },
  { key: "security", icon: "Shield", color: "from-amber-500 to-yellow-500", href: "#" },
];

export function ControlSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            {t("control.title")}
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            {t("control.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {modules.map((m, i) => (
            <motion.a
              key={m.key}
              href={m.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-panel rounded-3xl p-6 flex flex-col items-center gap-4 hover:bg-white/[0.04] transition-all group cursor-pointer"
            >
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300`}>
                <Icon name={m.icon} size={24} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {t(`control.items.${m.key}`)}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#download">
            <Button className="btn-gradient text-white font-semibold rounded-2xl px-10 h-13 text-base border-0">
              <Icon name="Download" size={20} className="mr-2" />
              {t("control.downloadBtn")}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ControlSection;
