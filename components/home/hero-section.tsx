"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const CAROUSEL_IMAGES = [
  { src: "/cctv_hero.jpg", alt: "CCTV system installation" },
  { src: "/data_center.jpg", alt: "Fiber optic cabling" },
  { src: "/building_hero.jpg", alt: "Structured cabling infrastructure" },
  { src: "/windsolar_hero.png", alt: "Wind and solar energy systems" },
  { src: "/kidapawan.jpg", alt: "Kidapawan project" },
  { src: "/windhero.JPG", alt: "Wind energy project" },
]

const AUTOPLAY_INTERVAL = 3500

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index)
    },
    []
  )

  const next = useCallback(() => {
    goTo((current + 1) % CAROUSEL_IMAGES.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-slate-900 border-b-8 border-blue-600">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-10 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-all duration-1000 ease-in-out transform"
            style={{ 
              opacity: i === current ? 1 : 0,
              scale: i === current ? "1" : "1.05"
            }}
            aria-hidden={i !== current}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              quality={90}
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Sharp Overlays: Solid white fade for left text area, fully sharp image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:w-2/3" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 skew-x-12 transform origin-top-right" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36 w-full">
        <div className="max-w-3xl">
          
          {/* Sharp Badge */}
        

          {/* Loud Bold Heading */}
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.05] uppercase">
            Building The <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
              Infrastructure
            </span> <br />
            Of Tomorrow.
          </h1>

          {/* Crisp Text Box */}
          <p className="mt-8 text-xl font-semibold leading-relaxed text-slate-800 border-l-4 border-blue-600 pl-6 bg-white py-3 shadow-sm rounded-none">
            RCC Cabling and Network Solutions Corp. delivers high-impact system integration services including <strong className="text-blue-600">CCTV</strong>, <strong className="text-blue-600">fiber optics</strong>, <strong className="text-blue-600">structured cabling</strong>, and fire detection systems.
          </p>

          {/* Key Stat Highlight */}
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-900 uppercase tracking-wide">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Trusted by <span className="text-blue-600 underline decoration-2 underline-offset-4">150+ Industry Clients</span> Across The Philippines
          </div>

          {/* Sharp CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-base h-14 px-8 rounded-none shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-200 border-2 border-blue-500" 
              asChild
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 stroke-[3]" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-blue-50 text-blue-700 font-extrabold uppercase tracking-wider text-base h-14 px-8 rounded-none border-2 border-blue-600 shadow-md hover:-translate-y-0.5 transition-all duration-200"
              asChild
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>

        </div>
      </div>

      {/* Sharp Arrow Controls */}
      <div className="absolute right-8 bottom-12 z-20 hidden md:flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="p-3 rounded-none bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="p-3 rounded-none bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>
      </div>

      {/* Sharp Indicator Bars Container */}
      <div
        className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center gap-2 bg-white p-2 border-2 border-blue-600 shadow-lg rounded-none"
        role="tablist"
        aria-label="Carousel slides"
      >
        {CAROUSEL_IMAGES.map((img, i) => (
          <button
            key={img.src}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}: ${img.alt}`}
            onClick={() => goTo(i)}
            className={[
              "h-3 rounded-none transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600",
              i === current
                ? "w-10 bg-blue-600"
                : "w-3 bg-blue-200 hover:bg-blue-400",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  )
}