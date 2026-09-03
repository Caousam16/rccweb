import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import {ServicesOverview} from "@/components/home/services-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { PartnersSection } from "@/components/home/partners-section"
import { CTA } from "@/components/CTA"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <PartnersSection />
      <CTA />
      <Footer />
    </main>
  )
}
