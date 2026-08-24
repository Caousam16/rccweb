"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ApproachSection from "@/components/ApproachSection"
import { CTA } from "@/components/CTA"
import { 
  ArrowRight, 
  Shield, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Server
} from "lucide-react"

// Types
interface ServiceItem {
  title: string
  image: string
  desc: string
  href?: string
  badge?: string
}

interface ValueProp {
  title: string
  desc: string
  icon: React.ElementType
}

const services: ServiceItem[] = [
  {
    title: "CCTV Systems",
    image: "/services/cctv.png",
    desc: "Enterprise-grade surveillance infrastructures featuring high-definition IP cameras, AI-powered analytics, secure network video recording (NVR), and encrypted remote monitoring capabilities.",
    href: "/services/cctv",
    badge: "Surveillance",
  },
  {
    title: "FDAS Systems",
    image: "/services/fdas.png",
    desc: "Code-compliant Fire Detection and Alarm Systems designed for early detection, rapid localized warnings, and intelligent integration with emergency building systems.",
    href: "/services/fdas",
    badge: "Life Safety",
  },
  {
    title: "PABX Systems",
    image: "/services/PABX.jpg",
    desc: "Unified business communication infrastructure utilizing modern IP-PABX and VoIP technologies to streamline call management, reduce overhead, and scale across offices.",
    href: "/services/pabx",
    badge: "Telecom",
  },
  {
    title: "Structured Cabling",
    image: "/services/structured_cabling.jpg",
    desc: "End-to-end network architectural layouts optimized for high-bandwidth data transmission, seamless horizontal distributions, and long-term organizational scalability.",
    href: "/services/structured-cabling",
    badge: "Infrastructure",
  },
  {
    title: "Fiber Optic Networks",
    image: "/services/fiber_optic.jpg",
    desc: "High-speed backbone installations requiring precision fusion splicing, low-attenuation long-distance routing, and rigid OTDR performance certification standards.",
    href: "/services/fiber-optics",
    badge: "Infrastructure",
  },
  {
    title: "Public Address (PA) Systems",
    image: "/services/pa.jpg",
    desc: "Public Address and Voice Alarm (PAVA) architectures engineered for crystal-clear commercial paging, automated alerts, and background soundscapes.",
    href: "/services/public-address",
    badge: "Audio/Visual",
  },
  {
    title: "IPTV & CATV Distribution",
    image: "/services/catv.jpg",
    desc: "High-fidelity video distribution networks leveraging localized headend management and balanced RF or IP delivery to ensure broadcast continuity.",
    href: "/services/iptv-catv",
    badge: "Broadcasting",
  },
  {
    title: "Access Control Systems",
    image: "/services/door_access.jpg",
    desc: "Zero-trust perimeter security implementations leveraging biometrics, multi-factor smart locks, and real-time physical access audit logging.",
    href: "/services/access-control",
    badge: "Security",
  },
  {
    title: "Command Center Video Walls",
    image: "/services/video_wall.png",
    desc: "High-density, seamless display matrices paired with ultra-low-latency processing controllers engineered for mission-critical command centers and control rooms.",
    href: "/services/video-walls",
    badge: "Audio/Visual",
  },
  {
    title: "Enterprise Wireless Networks",
    image: "/services/wap.jpg",
    desc: "High-capacity wireless infrastructure maximizing coverage and roaming handoffs via advanced predictive RF heatmapping and controller-managed architectures.",
    href: "/services/wireless-networks",
    badge: "Infrastructure",
  },
]

const valueProps: ValueProp[] = [
  { 
    title: "Enterprise Resilience", 
    desc: "Built using industrial component standards to ensure flawless continuous operations and minimal component fatigue.", 
    icon: Shield 
  },
  { 
    title: "Seamless Topology", 
    desc: "Systems cross-communicate using standard protocols to ease future hardware modifications and vendor lock-ins.", 
    icon: Layers 
  },
  { 
    title: "Future-Ready Pipes", 
    desc: "Data networks over-engineered with ample bandwidth headroom to natively adapt to next-gen digital tech.", 
    icon: Cpu 
  },
  { 
    title: "Compliant Frameworks", 
    desc: "All design work, path layouts, and components conform strictly to national codes and international standards.", 
    icon: CheckCircle2 
  },
]


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-slate-100 px-6 py-24 sm:px-10 lg:px-[7%]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/services/servicehero.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for light/dark balance */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />

        <div className="relative z-10 max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" /> Our Expertise
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl leading-[1.1]">
            Seamless Integration & <br />
            <span className="text-blue-400">Smarter Operations</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
            We design, implement, and maintain smart building management systems that enhance operational security, streamline workflows, and safeguard physical assets.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.98]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW / WHY US SECTION */}
      <section className="px-6 py-20 sm:px-10 lg:px-[7%]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Unified Infrastructures
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Eliminate system barriers. Centralize facility control.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Modern facilities can’t work well with disconnected systems. We bring together everything, from HD video and life safety alerts to fiber optic networks into one smooth and efficient setup.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {valueProps.map((item) => {
                const Icon = item.icon
                return (
                  <div 
                    key={item.title} 
                    className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED SERVICES GRID SECTION */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-20 sm:px-10 lg:px-[7%]">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Core Competencies
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                End-to-End Solutions
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              Turnkey architectural planning, hardware deployment, and ongoing maintenance for modern commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-300/40"
              >
                {/* Image & Badge Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-4 top-4 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 group-hover:text-blue-600">
                    <span>Explore details</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {item.href && (
                  <Link href={item.href} className="absolute inset-0 z-10" aria-label={`Learn more about ${item.title}`}>
                    <span className="sr-only">View service</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* APPROACH SECTION */}
      <ApproachSection />

      {/* CALL TO ACTION & FOOTER */}
      <CTA />
      <Footer />
    </main>
  )
}