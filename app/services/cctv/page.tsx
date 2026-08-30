"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ApproachSection from "@/components/ApproachSection"
import { CTA } from "@/components/CTA"
import Image from "next/image"

// --- CORE DATA CONFIGURATIONS ---

const coreBenefits = [
  {
    title: "4K ULTRA-HD CLARITY",
    desc: "Crystal clear resolution enabling pinpoint digital zoom, facial tagging, license plate identification, and complete forensic trace recovery.",
    image: "/services/cctv/4k-clarity.png",
    code: "RES-4K-01",
  },
  {
    title: "24/7 MOBILE MONITORING",
    desc: "Stream secure low-latency live feeds, trigger remote siren protocols, and review multi-channel playback instantly via iOS & Android.",
    image: "/services/cctv/mobile-app.png",
    code: "APP-RT-02",
  },
  {
    title: "AI EDGE ANALYTICS",
    desc: "Slash false alarms by 90% with integrated neural network filtering that isolates human profiles, vehicle threats, and custom tripwires.",
    image: "/services/cctv/smart-analytics.png",
    code: "ANL-AI-03",
  },
]

const hardwareInventory = [
  {
    type: "SURVEILLANCE CAMERAS",
    items: [
      {
        name: "IP TURRET & DOME CAMERAS",
        detail: "IK10 vandal-proof, heavy-grade housings paired with omnidirectional micro-array microphones. Optimized for indoor corridors and tight retail spaces.",
        img: "/services/cctv/cctv-dome.png",
        specs: ["IK10 Vandal-Proof", "Audio Pickup", "Wide FOV"],
      },
      {
        name: "LONG-RANGE BULLET CAMERAS",
        detail: "IP67 weather-shielded chassis built for harsh conditions, equipped with extreme long-range matrix infrared emitters for outer perimeters.",
        img: "/services/cctv/cctv-bullet.png",
        specs: ["IP67 Outdoor", "Matrix IR 80m", "Smart Light"],
      },
      {
        name: "360° PTZ SPEED DOMES",
        detail: "Continuous high-speed panning paired with fast 45x optical zoom engines to dynamically track moving threats across vast physical yards.",
        img: "/services/cctv/cctv-ptz.png",
        specs: ["45x Optical", "Auto-Tracking", "360° Endless"],
      },
    ],
  },
  {
    type: "RECORDERS & INFRASTRUCTURE",
    items: [
      {
        name: "NETWORK VIDEO RECORDERS (NVR)",
        detail: "Industrial processing nodes running zero-latency dedicated firmware to handle multi-channel 4K video feeds with RAID hardware redundancy.",
        img: "/services/cctv/hardware-nvr.png",
        specs: ["RAID 0/1/5/10", "Zero-Latency", "32+ Channels"],
      },
      {
        name: "ENTERPRISE SURVEILLANCE HDDS",
        detail: "High-end surveillance drives engineered for continuous 24/7/365 write operations, built to withstand continuous vibration and heat.",
        img: "/services/cctv/hardware-hdd.png",
        specs: ["24/7 Continuous", "1M+ Hrs MTBF", "Health Monitor"],
      },
      {
        name: "MANAGED PoE SWITCHES",
        detail: "High-wattage Gigabit network switches delivering uninterrupted Power-over-Ethernet and data throughput through single heavy-duty Cat6 lines.",
        img: "/services/cctv/hardware-switch.png",
        specs: ["Gigabit Power", "PoE+ 30W/Port", "VLAN Isolation"],
      },
    ],
  },
]

const sectorData = [
  {
    id: "commercial",
    label: "COMMERCIAL & RETAIL",
    headline: "PROTECT ASSETS, MONITOR CASH STATIONS, AND MITIGATE LIABILITY",
    bullet1: "Track point-of-sale activities continuously to combat internal theft, miscounts, and employee compliance gaps.",
    bullet2: "Maintain undeniable video evidence to defend your business against fraudulent slip-and-fall claims.",
    img: "/services/cctv/sector-commercial.png",
  },
  {
    id: "industrial",
    label: "INDUSTRIAL & LOGISTICS",
    headline: "FULL OPERATIONAL VISIBILITY ACROSS HEAVY-DUTY INDUSTRIAL ZONES",
    bullet1: "Secure loading bays, assembly floors, and outer boundary lines with auto-tracking PTZ cameras.",
    bullet2: "Enforce site safety policies, optimize workflow bottlenecks, and keep permanent digital logs for safety audits.",
    img: "/services/cctv/sector-industrial.png",
  },
  {
    id: "residential",
    label: "RESIDENTIAL ESTATES",
    headline: "HIGH-IMPACT PERIMETER DEFENSE WITH LOW-PROFILE DESIGN",
    bullet1: "Smart tripwire sensors dispatch immediate push notifications whenever unauthorized access is detected at boundary walls.",
    bullet2: "Low-profile architectural housings blend seamlessly into luxury modern structures without sacrificing protection.",
    img: "/services/cctv/sector-residential.png",
  },
]

export default function CCTVServicePage() {
  const [activeTab, setActiveTab] = useState("commercial")
  const currentSector = sectorData.find((s) => s.id === activeTab) || sectorData[0]

  return (
    <main className="min-h-screen bg-slate-900 text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <Header />

      {/* SECTION 1: HERO CONTAINER */}
      <section className="relative min-h-[90vh] bg-blue-700 text-white flex items-center overflow-hidden border-b-8 border-blue-500">
        {/* Sharp Graphic Pattern Background Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[140px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-blue-900 font-black text-xs tracking-widest uppercase rounded-none border-l-4 border-slate-900 mb-6 shadow-md">
              <span className="w-2 h-2 bg-blue-600 animate-pulse" />
              HARDENED INDUSTRIAL SECURITY
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[0.95] drop-shadow-sm">
              MAXIMUM <span className="text-slate-900 bg-white px-2 py-0.5 inline-block my-1">CLARITY.</span> ZERO BLIND SPOTS.
            </h1>

            <p className="mt-8 text-xl text-blue-50 font-medium leading-relaxed max-w-2xl border-l-2 border-white/40 pl-4">
              We design, wire, and deploy ultra-heavy-duty, high-definition IP camera networks engineered to defend high-value commercial infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-900 hover:bg-black text-white font-black uppercase tracking-wider text-sm rounded-none border-b-4 border-blue-400 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                BOOK SITE SURVEY &rarr;
              </a>
              <a
                href="#hardware"
                className="px-8 py-4 bg-white hover:bg-blue-50 text-blue-950 font-black uppercase tracking-wider text-sm rounded-none border-4 border-slate-900 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                EXPLORE SPECS
              </a>
            </div>
          </motion.div>

          {/* Hero Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-none border-8 border-slate-900 bg-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] overflow-hidden group">
              <Image
                src="/services/cctv/cctv-service.png"
                alt="CCTV System Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white border-2 border-slate-900 text-slate-900">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 block">SYSTEM STATUS</span>
                <span className="text-lg font-black uppercase">24/7 ACTIVE ENCRYPTION</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: VALUE PROPOSITION */}
      <section className="py-24 bg-white border-b-4 border-slate-200">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16">
            <span className="text-blue-700 font-black uppercase tracking-widest text-xs bg-blue-100 px-3 py-1 inline-block border-l-4 border-blue-700 mb-3">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              ENGINEERED FOR HIGH-RISK ENVIRONMENTS
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-semibold leading-relaxed">
              Consumer retail hardware fails under pressure. Our enterprise systems combine heavy-gauge physical housing with real-time AI processing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group relative flex flex-col bg-slate-50 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[14px_14px_0px_0px_rgba(29,78,216,1)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-200 border-b-4 border-slate-900 overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 bg-slate-900 text-white font-mono font-bold text-xs px-2 py-1">
                    {benefit.code}
                  </span>
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed flex-grow text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: HARDWARE BLUEPRINT */}
      <section id="hardware" className="py-24 bg-blue-900 text-white scroll-mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="max-w-3xl mb-16">
            <span className="text-blue-950 font-black uppercase tracking-widest text-xs bg-blue-400 px-3 py-1 inline-block mb-3">
              HARDWARE INVENTORY
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              COMMERCIAL GRADE COMPONENTS
            </h2>
            <p className="mt-4 text-lg text-blue-200 font-medium">
              Inspect our high-performance component catalog built specifically for high-throughput enterprise deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {hardwareInventory.map((category) => (
              <div
                key={category.type}
                className="border-4 border-white bg-slate-950 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] overflow-hidden"
              >
                <div className="px-6 py-4 bg-blue-600 border-b-4 border-white flex justify-between items-center">
                  <h3 className="text-xl font-black uppercase tracking-wider text-white">
                    {category.type}
                  </h3>
                  <span className="text-xs font-mono font-black uppercase bg-slate-950 text-white px-2 py-1 border border-white">
                    SCROLL SPECS
                  </span>
                </div>

                <div
                  className="h-[550px] overflow-y-auto snap-y snap-mandatory custom-scrollbar"
                  onWheel={(e) => {
                    const el = e.currentTarget
                    const atTop = el.scrollTop <= 0
                    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
                    if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
                      e.stopPropagation()
                    }
                  }}
                >
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="snap-start h-full flex flex-col bg-slate-950 border-b-4 border-slate-800 last:border-none p-6"
                    >
                      <div className="relative flex-1 min-h-[220px] bg-slate-900 border-2 border-slate-700 overflow-hidden mb-6">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-3 h-3 bg-blue-500 inline-block" />
                          <h4 className="text-2xl font-black uppercase tracking-tight text-white">
                            {item.name}
                          </h4>
                        </div>

                        <p className="text-slate-300 text-sm font-medium leading-relaxed mb-4">
                          {item.detail}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.specs.map((spec) => (
                            <span
                              key={spec}
                              className="text-xs font-mono font-bold bg-blue-950 text-blue-300 border border-blue-700 px-2 py-1"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: SECTOR ARCHITECTURE */}
      <section className="py-24 bg-white text-slate-900 border-b-4 border-slate-900">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-700 font-black uppercase tracking-widest text-xs bg-blue-100 px-3 py-1 inline-block border-l-4 border-blue-700 mb-3">
              DEPLOYMENT SCENARIOS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              TAILORED INFRASTRUCTURE
            </h2>
            <p className="text-slate-600 font-semibold mt-3 text-lg">
              Select your sector to view custom network topologies and optimized camera configs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {sectorData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-black text-sm uppercase tracking-wider border-4 transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                    : "bg-slate-100 text-slate-700 border-slate-300 hover:border-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 border-4 border-slate-900 p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(29,78,216,1)]"
            >
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold text-blue-700 block mb-2">[ SECTOR PROTOCOL ]</span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-tight">
                  {currentSector.headline}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white border-2 border-slate-900">
                    <span className="bg-blue-600 text-white font-black text-lg px-2 py-0.5">01</span>
                    <p className="text-slate-700 font-semibold text-base leading-relaxed">{currentSector.bullet1}</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white border-2 border-slate-900">
                    <span className="bg-blue-600 text-white font-black text-lg px-2 py-0.5">02</span>
                    <p className="text-slate-700 font-semibold text-base leading-relaxed">{currentSector.bullet2}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full border-4 border-slate-900 bg-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden">
                  <Image
                    src={currentSector.img}
                    alt={currentSector.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
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