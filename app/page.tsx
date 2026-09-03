"use client"

import { useState } from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesOverview } from "@/components/home/services-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { PartnersSection } from "@/components/home/partners-section"
import { CTA } from "@/components/CTA"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)

  const handleVideoEnd = () => {
    setShowIntro(false)
  }

  return (
    <main className="min-h-screen">

      {/* INTRO VIDEO */}
      {showIntro && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="/intro-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* SKIP BUTTON */}
          <button
            onClick={handleVideoEnd}
            className="absolute bottom-8 right-8 rounded-full border border-white/40 bg-black/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            Skip Intro
          </button>
        </div>
      )}

      {/* WEBSITE */}
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

