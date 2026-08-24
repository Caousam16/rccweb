"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const CAROUSEL_IMAGES = [
  { src: "/cctv_hero.jpg", alt: "CCTV system installation" },
  { src: "/data_center.jpg", alt: "Fiber optic cabling" },
  { src: "/building_hero.jpg", alt: "Structured cabling infrastructure" },
  { src: "/windsolar_hero.png", alt: "Wind and solar energy systems" },
  { src: "/kidapawan.jpg", alt: "Kidapawan project" }, 
  { src: "/windhero.JPG", alt: "Wind energy project" },

]

const AUTOPLAY_INTERVAL = 3500 // ms

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setIsTransitioning(false)
      }, 600)
    },
    [current, isTransitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % CAROUSEL_IMAGES.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        ))}

        {/* Overlays — same as original video treatment */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-primary-foreground/60 uppercase mb-6">
            System Integration Experts
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Building the Infrastructure of Tomorrow
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 max-w-2xl">
            RCC Cabling and Network Solutions Corp. delivers comprehensive system integration
            services including CCTV, fiber optics, structured cabling, and fire detection systems.
            Trusted by 150+ clients across the Philippines.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2"
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
              "h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground",
              i === current
                ? "w-8 bg-primary-foreground"
                : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  )
}