"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import ApproachSection from "@/components/ApproachSection"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"

import {
  CheckCircle2,
  Network,
  Cable,
  Server,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

// --- CONFIGURATION & DATA ---

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: readonly string[] = [
  "Structured Cabling Installation",
  "Copper Cabling (Cat5e, Cat6, Cat6A, Cat7, Cat8)",
  "Fiber Optic Cabling",
  "Network Backbone Cabling",
  "Horizontal & Vertical Cabling",
  "Patch Panel Installation & Termination",
  "Fiber Splicing & Termination",
  "Network Rack & Cabinet Installation",
  "Cable Tray & Raceway Installation",
  "Cable Management",
  "Network Outlet Installation",
  "Cable Labeling & Documentation",
  "Cable Testing & Fluke Certification",
  "Fiber OTDR Testing",
  "Structured Cabling Maintenance",
  "Structured Cabling Upgrades",
  "Network Infrastructure Expansion",
  "Office Network Cabling",
  "Data Center Cabling",
  "Site Survey & Cabling Design",
]

const CAROUSEL_SLIDES: readonly string[] = Array.from(
  { length: 8 },
  (_, i) => `/services/structured-cabling/sc-${i + 1}.png`
)

const FEATURES: readonly Feature[] = [
  {
    icon: Network,
    title: "Scalable Infrastructure",
    description:
      "Future-ready structured cabling systems designed to support rapid business growth and evolving technology shifts.",
  },
  {
    icon: Cable,
    title: "Strict Standards",
    description:
      "Precision installations following ANSI/TIA and industry best practices. Built for absolute operational reliability.",
  },
  {
    icon: Server,
    title: "Enterprise Power",
    description:
      "High-performance copper and fiber infrastructure engineered for vast campuses, warehouses, and data centers.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Testing",
    description:
      "Every connection is thoroughly tested, fully documented, and certified to guarantee peak network performance.",
  },
]

// --- SUB-COMPONENTS ---

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="group border-4 border-blue-950 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-950 hover:text-white hover:shadow-[12px_12px_0_rgba(37,99,235,1)]">
      <div className="mb-6 text-blue-600 transition-colors group-hover:text-white">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="mb-4 text-2xl font-black uppercase tracking-tight group-hover:text-white">
        {title}
      </h3>
      <p className="font-semibold leading-relaxed text-gray-700 group-hover:text-blue-100">
        {description}
      </p>
    </div>
  )
}

function ServiceItem({ service }: { service: string }) {
  return (
    <div className="group flex items-center gap-4 border-l-4 border-blue-600 bg-white p-4 shadow-sm transition-all duration-200 hover:border-l-8 hover:shadow-md">
      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 transition-transform group-hover:scale-110" />
      <span className="text-sm font-bold uppercase tracking-wide text-blue-950">
        {service}
      </span>
    </div>
  )
}

// --- MAIN PAGE COMPONENT ---

export default function StructuredCablingPage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white font-sans selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center border-b-4 border-blue-600 overflow-hidden bg-slate-900 py-16">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/services/structured-cabling/sc-hero-vid.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 border-l-4 border-blue-400 pl-4">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-200 sm:text-sm">
                  Enterprise Network Infrastructure
                </span>
              </div>

              <h1 className="mb-8 text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white sm:text-7xl lg:text-8xl">
                Structured <br />
                <span className="bg-gradient-to-r from-blue-300 via-white to-blue-200 bg-clip-text text-transparent">
                  Cabling
                </span>
                <br /> Services
              </h1>

              <p className="mb-10 max-w-2xl border-l-4 border-white pl-5 text-lg font-semibold leading-snug text-blue-50 sm:text-2xl">
                High-capacity, fault-tolerant network cabling designed for
                modern high-bandwidth environments. Certified fiber and copper
                deployments.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center border-2 border-white bg-white px-8 py-4 font-black uppercase tracking-widest text-blue-950 shadow-[6px_6px_0_rgba(37,99,235,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-none"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Quote{" "}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center border-2 border-white bg-transparent px-8 py-4 font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-blue-900"
                >
                  <span className="relative z-10">Schedule Site Survey</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SWIPER CAROUSEL SECTION */}
        <section className="relative border-b-8 border-blue-600 bg-blue-950 py-16">
          <div className="absolute left-0 top-0 h-4 w-full bg-white" />

          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides
            loop
            grabCursor
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 36 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 1,
              scale: 0.9,
              slideShadows: false,
            }}
            className="max-w-screen-2xl mx-auto w-full py-6"
          >
            {CAROUSEL_SLIDES.map((src, index) => (
              <SwiperSlide key={src}>
                <div className="group relative aspect-square border-8 border-white bg-white shadow-[10px_10px_0_rgba(37,99,235,1)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[14px_14px_0_rgba(255,255,255,1)]">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={src}
                      alt={`Structured Cabling Project Example ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute left-0 top-0 border-b-2 border-r-2 border-white bg-blue-600 px-4 py-2 text-lg font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* FEATURES SECTION */}
        <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="border-l-8 border-blue-600 pl-6 text-4xl font-black uppercase leading-none tracking-tighter text-blue-950 md:text-6xl">
              Why Choose Our <br />
              <span className="text-blue-600">Infrastructure</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* SERVICES MATRIX */}
        <section className="relative overflow-hidden border-y-4 border-blue-950 bg-blue-50 py-28">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-32 translate-x-32 rotate-45 transform bg-blue-600 opacity-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 -translate-x-48 translate-y-48 rotate-45 transform bg-blue-950 opacity-10" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-blue-950 md:text-6xl">
                Core <span className="text-blue-600">Capabilities</span>
              </h2>
              <div className="mx-auto mt-4 h-2 w-24 bg-blue-600" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {SERVICES.map((service) => (
                <ServiceItem key={service} service={service} />
              ))}
            </div>
          </div>
        </section>

        <ApproachSection />

        <div className="border-t-8 border-blue-900">
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  )
}