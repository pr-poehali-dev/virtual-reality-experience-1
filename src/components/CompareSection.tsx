import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import useScrollAnimation from "@/hooks/use-scroll-animation";

type CellType = "full" | "yes" | "no" | "partial" | "paid" | "basic" | "limited";

interface CompareRow {
  key: string;
  psx: CellType;
  aida: CellType;
  ccleaner: CellType;
  booster: CellType;
}

const rows: CompareRow[] = [
  { key: "monitoring", psx: "full", aida: "full", ccleaner: "no", booster: "basic" },
  { key: "cleanup", psx: "full", aida: "no", ccleaner: "full", booster: "partial" },
  { key: "gaming", psx: "full", aida: "no", ccleaner: "no", booster: "partial" },
  { key: "overlay", psx: "yes", aida: "no", ccleaner: "no", booster: "no" },
  { key: "registry", psx: "yes", aida: "no", ccleaner: "yes", booster: "paid" },
  { key: "free", psx: "yes", aida: "no", ccleaner: "limited", booster: "limited" },
  { key: "noAds", psx: "yes", aida: "yes", ccleaner: "no", booster: "no" },
  { key: "modern", psx: "yes", aida: "no", ccleaner: "partial", booster: "partial" },
];

const cellConfig: Record<CellType, { icon: string; color: string; bg: string }> = {
  full: { icon: "CheckCircle2", color: "text-green-400", bg: "bg-green-500/10" },
  yes: { icon: "Check", color: "text-green-400", bg: "bg-green-500/10" },
  no: { icon: "X", color: "text-red-400", bg: "bg-red-500/10" },
  partial: { icon: "Minus", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  paid: { icon: "DollarSign", color: "text-orange-400", bg: "bg-orange-500/10" },
  basic: { icon: "Minus", color: "text-gray-400", bg: "bg-gray-500/10" },
  limited: { icon: "AlertTriangle", color: "text-amber-400", bg: "bg-amber-500/10" },
};

function CellBadge({ type, label }: { type: CellType; label: string }) {
  const config = cellConfig[type];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${config.color} ${config.bg}`}>
      <Icon name={config.icon} size={12} />
      {label}
    </span>
  );
}

export function CompareSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const getCellLabel = (type: CellType) => t(`compare.${type}`);

  return (
    <section id="compare" ref={ref} className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            {t("compare.title")}
          </h2>
          <p className="text-gray-400 text-lg">{t("compare.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto scrollbar-hidden">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">{t("compare.feature")}</th>
                  <th className="px-4 py-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold">P</span>
                      </div>
                      <span className="text-sm font-semibold gradient-text">PSX</span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-gray-500">AIDA64</th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-gray-500">CCleaner</th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-gray-500">BoosterX</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.key} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-3.5 text-sm text-gray-300">{t(`compare.features.${row.key}`)}</td>
                    <td className="px-4 py-3.5 text-center">
                      <CellBadge type={row.psx} label={getCellLabel(row.psx)} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <CellBadge type={row.aida} label={getCellLabel(row.aida)} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <CellBadge type={row.ccleaner} label={getCellLabel(row.ccleaner)} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <CellBadge type={row.booster} label={getCellLabel(row.booster)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompareSection;
