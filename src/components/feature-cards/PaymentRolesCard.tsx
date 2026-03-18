import { Trash2, ArrowUpRight, CheckCircle2, FolderOpen, Globe, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Временные файлы", size: "3.8 ГБ", icon: FolderOpen, checked: true },
  { name: "Кэш браузеров", size: "1.2 ГБ", icon: Globe, checked: true },
  { name: "Системные логи", size: "420 МБ", icon: Layers, checked: false },
]

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Trash2 className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Глубокая очистка системы</h3>
      <p className="mb-4 text-sm text-gray-400">Удаляйте гигабайты мусора — временные файлы, кэш браузеров, логи и корзина</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-400">Найдено мусора</span>
          <span className="text-sm font-bold text-white">5.4 ГБ</span>
        </div>

        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <div className="flex items-center gap-3">
              <cat.icon className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-white">{cat.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{cat.size}</span>
              {cat.checked && <CheckCircle2 className="h-4 w-4 text-violet-500" />}
            </div>
          </div>
        ))}

        <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white mt-2">
          <Trash2 className="mr-2 h-4 w-4" /> Очистить сейчас
        </Button>
      </div>
    </div>
  )
}
