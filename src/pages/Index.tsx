import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Download, Check, Star, Shield, Zap, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Базовый",
    price: "Бесплатно",
    desc: "Для домашнего использования",
    features: ["Мониторинг CPU / RAM / GPU", "Базовая очистка системы", "Список процессов", "Тест клавиатуры и мыши"],
    cta: "Скачать бесплатно",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "299 ₽ / мес",
    desc: "Для энтузиастов и геймеров",
    features: ["Всё из Базового", "Игровой центр + оптимизация", "Очистка реестра", "Управление яркостью", "Сообщество и профиль", "Приоритетная поддержка"],
    cta: "Попробовать 7 дней",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "2 490 ₽",
    desc: "Один раз — навсегда",
    features: ["Всё из Pro", "Все будущие обновления", "Лицензия на 3 ПК", "Ранний доступ к функциям"],
    cta: "Купить лицензию",
    highlighted: false,
  },
]

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />

      <section id="features" className="px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Всё, что нужно вашему ПК</h2>
          <p className="text-gray-400 text-sm">Пять мощных модулей в одном приложении</p>
        </div>
      </section>

      <FeaturesSection />

      {/* Pricing */}
      <section id="pricing" className="px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Простые тарифы</h2>
            <p className="text-gray-400 text-sm">Начните бесплатно, обновитесь когда будете готовы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col border ${
                  plan.highlighted
                    ? "bg-violet-600/10 border-violet-500/50 relative"
                    : "bg-[#141414] border-[#262626]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-medium text-white">
                      <Star className="h-3 w-3 fill-white" /> Популярный
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">{plan.name}</p>
                  <p className="text-2xl font-bold text-white">{plan.price}</p>
                  <p className="text-xs text-gray-500 mt-1">{plan.desc}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-violet-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full ${
                    plan.highlighted
                      ? "bg-violet-600 hover:bg-violet-700 text-white"
                      : "bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white border border-[#333]"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="px-4 md:px-8 py-12">
        <div className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-violet-600/20 to-violet-900/20 border border-violet-500/20 p-8 text-center">
          <div className="flex justify-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Shield className="h-5 w-5 text-violet-400" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Zap className="h-5 w-5 text-violet-400" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Download className="h-5 w-5 text-violet-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Скачать SystemPilotX</h2>
          <p className="text-gray-400 text-sm mb-6">Windows 10 / 11 · 64-bit · ~80 МБ · Без рекламы и встроенных покупок в базовой версии</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white px-8">
              <Download className="mr-2 h-4 w-4" /> Скачать .exe (80 МБ)
            </Button>
            <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white">
              <Github className="mr-2 h-4 w-4" /> GitHub Releases
            </Button>
          </div>

          <p className="mt-4 text-xs text-gray-600">Версия 1.0.0 · Обновлено 18 марта 2026</p>
        </div>
      </section>

      <footer id="about" className="py-8 text-center text-sm text-gray-600 border-t border-[#1a1a1a]">
        <p className="mb-1">
          <span className="font-medium text-gray-400">SystemPilotX™</span> — мониторинг, очистка и оптимизация ПК
        </p>
        <p>© 2026 SystemPilotX · Все права защищены</p>
      </footer>
    </main>
  )
}
