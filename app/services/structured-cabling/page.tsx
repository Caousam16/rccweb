"use client"


import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import  ApproachSection  from "@/components/ApproachSection"
import { NetworkBackground } from "@/components/NetworkBackground";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image"
import { CheckCircle2, Network, Cable, Server, ShieldCheck } from "lucide-react"

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

];

const features = [
  {
    icon: <Network className="h-8 w-8 text-blue-600" />,
    title: "Scalable Infrastructure",
    description:
      "Future-ready structured cabling systems designed to support business growth and evolving technology requirements.",
  },
  {
    icon: <Cable className="h-8 w-8 text-blue-600" />,
    title: "Standards-Compliant",
    description:
      "Professional installations following ANSI/TIA and industry best practices for maximum reliability.",
  },
  {
    icon: <Server className="h-8 w-8 text-blue-600" />,
    title: "Enterprise Performance",
    description:
      "High-performance copper and fiber infrastructure for offices, campuses, warehouses, and data centers.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Certified Testing",
    description:
      "Every installation is tested, documented, and certified to ensure dependable network performance.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 }
}

export default function StructuredCablingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Header />

      <main className="flex-grow">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white min-h-[85vh] flex items-center relative overflow-hidden">
          <NetworkBackground
                    nodeCount={50}
                    nodeColorRgb="37, 99, 235"
                    pulseColorRgb="29, 78, 216"
            />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div
              className="max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-1 text-sm font-semibold text-blue-200 ring-1 ring-blue-300/20">
                Enterprise Network Infrastructure
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Structured Cabling Services
              </h1>

              <p className="mt-6 text-lg leading-8 text-blue-100/90">
                Build a reliable, scalable, and high-performance network
                infrastructure with professionally designed structured cabling
                solutions. We deliver enterprise-grade copper and fiber optic
                installations for offices, commercial buildings, and data centers.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Request a Quote
                </a>

                <a
                  href="/contact"
                  className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Schedule a Site Survey
                </a>
              </div>
            </motion.div>

            
          </div>
        </section>

        {/* Image Carousel Section */}      
        <section className="w-full py-10">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          slidesPerView={3}
          spaceBetween={50} // Space between slides
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 50, // Increase/decrease spacing in coverflow
            depth: 150,
            modifier: .7,
            scale: 1,
            slideShadows: false,
          }}
          className="w-full"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square overflow-hidden rounded-lg bg-white p-4 shadow">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </section>

        {/* Why Choose Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="max-w-3xl" {...fadeInUp}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Structured Cabling Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our structured cabling systems provide the foundation for reliable
              business communications, faster data transmission, simplified
              maintenance, and long-term scalability.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-xl border bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                {...fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-2 w-fit bg-blue-50 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 border-y border-gray-100 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Structured Cabling Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive structured cabling capabilities engineered specifically for modern business environments.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm"
                  {...fadeInUp}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ApproachSection />
        <CTA />

      </main>

      <Footer />
    </div>
  )
}