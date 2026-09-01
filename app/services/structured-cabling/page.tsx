"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import ApproachSection from "@/components/ApproachSection"
import { NetworkBackground } from "@/components/NetworkBackground"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"

import { CheckCircle2, Network, Cable, Server, ShieldCheck, ArrowRight } from "lucide-react"

const services = [
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

const slides = [
  "/services/structured-cabling/sc-1.png",
  "/services/structured-cabling/sc-2.png",
  "/services/structured-cabling/sc-3.png",
  "/services/structured-cabling/sc-4.png",
  "/services/structured-cabling/sc-5.png",
  "/services/structured-cabling/sc-6.png",
  "/services/structured-cabling/sc-7.png",
  "/services/structured-cabling/sc-8.png",
]

const features = [
  {
    icon: <Network className="h-10 w-10" />,
    title: "SCALABLE INFRASTRUCTURE",
    description:
      "Future-ready structured cabling systems designed to support rapid business growth and evolving technology shifts.",
  },
  {
    icon: <Cable className="h-10 w-10" />,
    title: "STRICT STANDARDS",
    description:
      "Precision installations following ANSI/TIA and industry best practices. Built for absolute operational reliability.",
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "ENTERPRISE POWER",
    description:
      "High-performance copper and fiber infrastructure engineered for vast campuses, warehouses, and data centers.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "CERTIFIED TESTING",
    description:
      "Every connection is thoroughly tested, fully documented, and certified to guarantee peak network performance.",
  },
]

const sharpFadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, ease: "easeOut" }
}

export default function StructuredCablingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-blue-600 selection:text-white font-sans">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION - Vibrant Blue, Sharp & Loud */}
        <section className="relative min-h-[85vh] flex items-center bg-blue-900 overflow-hidden border-b-[12px] border-blue-600">
          <div className="absolute inset-0 z-0">
            <NetworkBackground
              nodeCount={65}
              nodeColorRgb="255, 255, 255"
              pulseColorRgb="37, 99, 235"
            />
          </div>
          
          {/* Geometric Grid Gridlines */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
          
          {/* Diagonal Slice Accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 transform origin-bottom-right -skew-x-12 translate-x-16 z-0 opacity-40 pointer-events-none" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-block border-l-4 border-blue-400 pl-4 mb-6">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-blue-200">
                  Enterprise Network Infrastructure
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.92] tracking-tighter mb-8">
                Structured <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
                  Cabling
                </span>
                <br /> Services
              </h1>

              <p className="text-lg sm:text-2xl font-semibold text-blue-50 max-w-2xl leading-snug mb-10 border-l-4 border-white pl-5">
                High-capacity, fault-tolerant network cabling designed for modern high-bandwidth environments. Certified fiber and copper deployments.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-white text-blue-950 px-8 py-4 font-black uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white border-2 border-white shadow-[6px_6px_0_rgba(37,99,235,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-transparent text-white px-8 py-4 font-black uppercase tracking-widest transition-all border-2 border-white hover:bg-white hover:text-blue-900"
                >
                  <span className="relative z-10">Schedule Site Survey</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FULL-COLOR SWIPER CAROUSEL SECTION */}
        <section className="bg-blue-950 py-16 relative overflow-hidden border-b-8 border-blue-600">
          <div className="absolute top-0 left-0 w-full h-4 bg-white" />
          
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
            className="w-full max-w-screen-2xl mx-auto py-6"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="group relative aspect-square bg-white border-8 border-white shadow-[10px_10px_0_rgba(37,99,235,1)] transition-all duration-300 hover:shadow-[14px_14px_0_rgba(255,255,255,1)] hover:-translate-y-2 hover:-translate-x-1">
                  {/* Full color image with vibrant hover scale */}
                  <img
                    src={src}
                    alt={`Structured Cabling Work ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Vibrant badge */}
                  <div className="absolute top-0 left-0 bg-blue-600 text-white font-black text-lg px-4 py-2 border-b-2 border-r-2 border-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* BOLD FEATURES SECTION */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
          <motion.div className="mb-16" {...sharpFadeUp}>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-blue-950 tracking-tighter border-l-8 border-blue-600 pl-6 leading-none">
              Why Choose Our <br />
              <span className="text-blue-600">Infrastructure</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="group border-4 border-blue-950 p-8 bg-white transition-all duration-300 hover:bg-blue-950 hover:text-white hover:-translate-y-2 hover:shadow-[12px_12px_0_rgba(37,99,235,1)]"
                {...sharpFadeUp}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-blue-600 group-hover:text-white transition-colors mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="font-semibold text-gray-700 group-hover:text-blue-100 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HIGH-CONTRAST SERVICES MATRIX */}
        <section className="bg-blue-50 py-28 border-y-4 border-blue-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 transform rotate-45 translate-x-32 -translate-y-32 opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950 transform rotate-45 -translate-x-48 translate-y-48 opacity-10 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-3xl mx-auto mb-16" {...sharpFadeUp}>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-blue-950 tracking-tighter leading-none">
                Core <span className="text-blue-600">Capabilities</span>
              </h2>
              <div className="mt-4 w-24 h-2 bg-blue-600 mx-auto" />
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="flex items-center gap-4 bg-white border-l-4 border-blue-600 p-4 shadow-sm hover:shadow-md hover:border-l-8 transition-all duration-200 group"
                  {...sharpFadeUp}
                  transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
                >
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-blue-950 font-bold uppercase text-sm tracking-wide">
                    {service}
                  </span>
                </motion.div>
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