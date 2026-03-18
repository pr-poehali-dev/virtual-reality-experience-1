import { Gamepad2, ArrowUpRight, Zap, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

const games = [
  { name: "Cyberpunk 2077", platform: "Steam", size: "70 ГБ", active: true },
  { name: "The Witcher 3", platform: "GOG", size: "50 ГБ", active: false },
  { name: "Elden Ring", platform: "Steam", size: "45 ГБ", active: false },
]

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Gamepad2 className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Игровой центр</h3>
      <p className="mb-4 text-sm text-gray-400">Сканируйте Steam, Epic и GOG — запускайте игры с оптимизацией системы в один клик</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {games.map((game) => (
          <div key={game.name} className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${game.active ? "bg-violet-500/10 border-violet-500/30" : "bg-[#0f0f0f] border-[#262626]"}`}>
            <div className="flex items-center gap-3">
              <Gamepad2 className={`h-4 w-4 ${game.active ? "text-violet-400" : "text-gray-500"}`} />
              <div>
                <p className="text-sm font-medium text-white">{game.name}</p>
                <p className="text-xs text-gray-500">{game.platform} · {game.size}</p>
              </div>
            </div>
            {game.active ? (
              <Button size="sm" className="h-7 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs px-3">
                <Zap className="mr-1 h-3 w-3" /> Играть
              </Button>
            ) : (
              <X className="h-4 w-4 text-gray-600" />
            )}
          </div>
        ))}

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-gray-400">Игровой режим</span>
          <Switch className="data-[state=checked]:bg-violet-600" defaultChecked />
        </div>
      </div>
    </div>
  )
}
