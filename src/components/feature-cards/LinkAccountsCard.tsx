import { Cpu, ArrowUpRight, Thermometer } from "lucide-react"

const metrics = [
  { label: "CPU загрузка", value: "34%", bar: 34, color: "bg-violet-500" },
  { label: "RAM использование", value: "6.2 / 16 ГБ", bar: 39, color: "bg-blue-500" },
  { label: "GPU температура", value: "61°C", bar: 61, color: "bg-emerald-500" },
  { label: "Диск C:", value: "120 / 500 ГБ", bar: 24, color: "bg-amber-500" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Cpu className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Мониторинг в реальном времени</h3>
      <p className="mb-4 text-sm text-gray-400">CPU, RAM, GPU, диски и температуры — все показатели обновляются каждые 2 секунды</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Thermometer className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-400">{metric.label}</span>
              </div>
              <span className="text-xs font-medium text-white">{metric.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#0f0f0f]">
              <div
                className={`h-full rounded-full ${metric.color}`}
                style={{ width: `${metric.bar}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
