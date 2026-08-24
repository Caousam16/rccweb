"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ApproachSection from "@/components/ApproachSection";
import { CTA } from "@/components/CTA"
import Image from "next/image"

// --- CORE DATA CONFIGURATIONS ---

const coreBenefits = [
  {
    title: "4K Ultra-HD Clarity",
    desc: "Crystal clear resolution allowing for crisp digital zoom and flawless facial, clothing, and license plate identification.",
    image: "/services/cctv/4k-clarity.png",
  },
  {
    title: "24/7 Mobile Remote App",
    desc: "Stream secure live feeds, review multi-channel playback histories, and receive intelligent push notifications on iOS or Android.",
    image: "/services/cctv/mobile-app.png",
  },
  {
    title: "Smart Analytics",
    desc: "Reduce false alarms up to 90% with intelligent line-crossing, intrusion zones, and human or vehicle profile filtering.",
    image: "/services/cctv/smart-analytics.png",
  },
];



const hardwareInventory = [
  {
    type: "The Cameras",
    items: [
      { 
        name: "IP Turret & Dome Cameras", 
        detail: "Vandal-resistant housing with built-in high-fidelity audio arrays. Perfect for wide-angle commercial interiors, corridors, and low-profile setups.",
        img: "/services/cctv/cctv-dome.png" 
      },
      { 
        name: "Long-Range Bullet Cameras", 
        detail: "Heavy-duty, weather-shielded structures with dynamic long-range infrared visibility profiles designed specifically to guard exposed external perimeters.",
        img: "/services/cctv/cctv-bullet.png" 
      },
      { 
        name: "PTZ Speed Domes", 
        detail: "360-degree endless motorized panning and fast-response optical tracking zooms for real-time site surveillance monitoring over huge physical lots.",
        img: "/services/cctv/cctv-ptz.png" 
      }
    ]
  },
  {
    type: "The Recorders & Infrastructure",
    items: [
      { 
        name: "Network Video Recorders (NVR)", 
        detail: "High-throughput server chassis running custom firmware layers to process high-speed incoming digital IP data streams directly via local area arrays.",
        img: "/services/cctv/hardware-nvr.png" 
      },
      { 
        name: "Enterprise Surveillance HDDs", 
        detail: "Specialized enterprise-grade hard drives built with custom cache managers optimized for intense, unbroken 24/7/365 continuous multi-channel read/write arrays.",
        img: "/services/cctv/hardware-hdd.png" 
      },
      { 
        name: "PoE Network Switches", 
        detail: "Gigabit-speed managed hardware switches delivering isolated high-wattage operating power and crisp data throughput entirely over single Ethernet lines.",
        img: "/services/cctv/hardware-switch.png" 
      }
    ]
  }
]

const sectorData = [
  { 
    id: "commercial", 
    label: "Commercial & Retail", 
    headline: "Protect Inventory, Secure Cash Flow, and Mitigate Corporate Liability", 
    bullet1: "Monitor point-of-sale registers continuously to minimize internal shrinkage and inventory errors.", 
    bullet2: "Provide indisputable physical safety proof against fraudulent customer slip-and-fall liability lawsuits.", 
    img: "/services/cctv/sector-commercial.png" 
  },
  { 
    id: "industrial",
    label: "Industrial",
    headline: "Enhance Security and Operational Visibility Across Industrial Facilities",
    bullet1: "Monitor production areas, storage zones, and facility perimeters with intelligent surveillance.",
    bullet2: "Improve workplace safety, support compliance, and maintain visual records for operational reviews and incident investigations.",
    img: "/services/cctv/sector-industrial.png"
  },
  { 
    id: "residential", 
    label: "Residential Estates", 
    headline: "Uncompromised, Sleek Security and Peace of Mind for Private Properties", 
    bullet1: "Intelligent driveway camera logic triggers automated mobile alerts the instant a vehicle approaches.", 
    bullet2: "Sleek, low-profile color-matched exterior camera designs that preserve architectural aesthetics.", 
    img: "/services/cctv/sector-residential.png" 
  }
]

const testimonials = [
  {
    quote: "The team engineered a flawless 32-camera IP network setup for our main distribution warehouse. The resolution is immaculate, and the remote app works smoothly across our management devices.",
    author: "Marcus Vance",
    role: "Director of Operations, Logistics Corp"
  },
  {
    quote: "We needed a clean installation that didn't compromise our retail store design. They routed all cabling invisibly and configured smart notifications that catch perimeter movement after hours.",
    author: "Sarah Lin",
    role: "General Manager, Horizon Luxury Retail"
  }
]


export default function CCTVServicePage() {
  const [activeTab, setActiveTab] = useState("commercial")
  const currentSector = sectorData.find((s) => s.id === activeTab) || sectorData[0]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <Header />

      {/* SECTION 1: HERO CONTAINER */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center md:text-left"
          >
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm block mb-3">Enterprise Security Architecture</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Smart Surveillance Built for Total Control</h1>
            <p className="mt-6 text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              We design, wire, and deploy commercial-grade, high-definition CCTV systems tailored to protect your critical assets with zero blind spots.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-medium rounded-xl shadow-lg shadow-blue-600/20">
                Book Free Site Survey
              </a>
              <a href="#hardware" className="px-6 py-3.5 bg-white/10 hover:bg-white/15 transition-all text-white font-medium rounded-xl border border-white/20">
                View Tech Specs
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.7 }} 
            className="lg:col-span-5 relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image src="/services/cctv/cctv-service.png" alt="CCTV System Infrastructure" fill className="object-cover" sizes="(max-w-1024px) 100vw, 40vw" priority />
          </motion.div>

        </div>
      </section>


      {/* SECTION 2: VALUE PROPOSITION & PAIN POINTS */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-full mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Engineered to Overcome Vulnerabilities
            </h2>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Generic off-the-shelf security kits fail under stress. Our tailored
              commercial hardware networks deliver uncompromised technical reliability.
            </p>
          </div>

          {/* Benefits Grid */}
          {coreBenefits.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-84 w-full overflow-hidden">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {benefit.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed flex-grow">
                      {benefit.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: HARDWARE COMPONENT TECH SPECS (MAXI-CONTAINERS WITH ISOLATED TRACKPAD ACCELERATION) */}
      <section id="hardware" className="py-24 bg-white scroll-mt-12">
        <div className="max-w-full mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm block mb-2">
              Hardware Blueprint
            </span>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Enterprise Infrastructure Components
            </h2>

            <p className="mt-4 text-base md:text-lg text-slate-500">
              Browse through every hardware component. Each scroll reveals either the
              product image or its technical description.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
            {hardwareInventory.map((category) => (
              <div
                key={category.type}
                className="h-[750px] rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-200 bg-slate-50">
                  <h3 className="flex justify-between items-center text-2xl font-bold text-blue-950">
                    <span>{category.type}</span>

                    <span className="text-xs font-normal text-slate-500 border border-slate-200 rounded-full px-3 py-1 bg-white">
                      Scroll
                    </span>
                  </h3>
                </div>

                {/* Slides */}
                <div
                  className="h-[calc(750px-85px)] overflow-y-auto snap-y snap-mandatory scroll-smooth overscroll-contain custom-scrollbar"
                  onWheel={(e) => {
                    const el = e.currentTarget;

                    const atTop = el.scrollTop <= 0;
                    const atBottom =
                      el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

                    if (
                      (e.deltaY > 0 && !atBottom) ||
                      (e.deltaY < 0 && !atTop)
                    ) {
                      e.stopPropagation();
                    }
                  }}
                >
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="snap-start h-full flex flex-col bg-white"
                    >
                      {/* Image */}
                      <div className="relative flex-1 min-h-0">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>

                      {/* Description */}
                      <div className="p-8 border-t border-slate-200 bg-white">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />

                          <h4 className="text-2xl font-bold text-slate-900">
                            {item.name}
                          </h4>
                        </div>

                        <p className="text-slate-600 leading-8 text-lg">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4: TARGET SECTORS & INTERACTIVE CONFIGURATIONS */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-full mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tailored Security Frameworks</h2>
            <p className="text-slate-400 mt-3">Every property layout requires unique lens alignments, specific camera housings, and storage rules.</p>
          </div>

          {/* Dynamic Interactive Navigation Links */}
          <div className="flex justify-center border-b border-white/10 mb-12 max-w-md mx-auto">
            {sectorData.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-3 font-medium text-sm transition-all relative ${activeTab === tab.id ? "text-blue-400" : "text-slate-400 hover:text-slate-200"}`}>
                {tab.label}
                {activeTab === tab.id && <motion.div layoutId="activeBorder" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
              </button>
            ))}
          </div>

          {/* Animated Selection Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white leading-tight">{currentSector.headline}</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3.5">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0 text-xl">✓</span>
                    <span className="text-base md:text-lg leading-relaxed">{currentSector.bullet1}</span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0 text-xl">✓</span>
                    <span className="text-base md:text-lg leading-relaxed">{currentSector.bullet2}</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <Image
                  src={currentSector.img}
                  alt={currentSector.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      
      <ApproachSection />
      <CTA />
      <Footer />
    </main>
  )
}