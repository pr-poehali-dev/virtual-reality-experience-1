import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MonitoringSection } from "@/components/MonitoringSection";
import { CleanupSection } from "@/components/CleanupSection";
import { GamingSection } from "@/components/GamingSection";
import { ControlSection } from "@/components/ControlSection";
import { CompareSection } from "@/components/CompareSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-[#08080f]">
      <Header />
      <HeroSection />
      <MonitoringSection />
      <CleanupSection />
      <GamingSection />
      <ControlSection />
      <CompareSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
