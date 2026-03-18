import { Cpu, HardDrive, Wifi, Gamepad2, Shield, Monitor, Zap } from "lucide-react"

const stats = [
  { value: "10М+", label: "загрузок", icon: Zap },
  { value: "CPU", label: "мониторинг", icon: Cpu },
  { value: "RAM", label: "оптимизация", icon: Monitor },
  { value: "GPU", label: "температура", icon: Gamepad2 },
  { value: "SSD/HDD", label: "очистка", icon: HardDrive },
  { value: "Сеть", label: "скорость", icon: Wifi },
  { value: "100%", label: "безопасно", icon: Shield },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-2 text-gray-500">
          <stat.icon className="h-4 w-4 text-violet-500" />
          <span className="text-sm font-medium text-gray-400">{stat.value}</span>
          <span className="text-xs text-gray-600">{stat.label}</span>
        </div>
      ))}
    </section>
  )
}