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
  Zap,
  Activity,
  Terminal,
  ChevronRight
} from "lucide-react"

// Types
interface ServiceItem {
  id: string
  title: string
  image: string
  desc: string
  href?: string
  badge: string
}

interface ValueProp {
  title: string
  desc: string
  icon: React.ElementType
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "CCTV Systems",
    image: "/services/cctv.png",
    desc: "Enterprise-grade surveillance infrastructures featuring high-definition IP cameras, AI-powered analytics, secure network video recording (NVR), and encrypted remote monitoring capabilities.",
    href: "/services/cctv",
    badge: "Surveillance",
  },
  {
    id: "02",
    title: "FDAS Systems",
    image: "/services/fdas.png",
    desc: "Code-compliant Fire Detection and Alarm Systems designed for early detection, rapid localized warnings, and intelligent integration with emergency building systems.",
    href: "/services/fdas",
    badge: "Life Safety",
  },
  {
    id: "03",
    title: "PABX Systems",
    image: "/services/PABX.jpg",
    desc: "Unified business communication infrastructure utilizing modern IP-PABX and VoIP technologies to streamline call management, reduce overhead, and scale across offices.",
    href: "/services/pabx",
    badge: "Telecom",
  },
  {
    id: "04",
    title: "Structured Cabling",
    image: "/services/structured_cabling.jpg",
    desc: "End-to-end network architectural layouts optimized for high-bandwidth data transmission, seamless horizontal distributions, and long-term organizational scalability.",
    href: "/services/structured-cabling",
    badge: "Infrastructure",
  },
  {
    id: "05",
    title: "Fiber Optic Networks",
    image: "/services/fiber_optic.jpg",
    desc: "High-speed backbone installations requiring precision fusion splicing, low-attenuation long-distance routing, and rigid OTDR performance certification standards.",
    href: "/services/fiber-optics",
    badge: "Infrastructure",
  },
  {
    id: "06",
    title: "Public Address (PA) Systems",
    image: "/services/pa.jpg",
    desc: "Public Address and Voice Alarm (PAVA) architectures engineered for crystal-clear commercial paging, automated alerts, and background soundscapes.",
    href: "/services/public-address",
    badge: "Audio/Visual",
  },
  {
    id: "07",
    title: "IPTV & CATV Distribution",
    image: "/services/catv.jpg",
    desc: "High-fidelity video distribution networks leveraging localized headend management and balanced RF or IP delivery to ensure broadcast continuity.",
    href: "/services/iptv-catv",
    badge: "Broadcasting",
  },
  {
    id: "08",
    title: "Access Control Systems",
    image: "/services/door_access.jpg",
    desc: "Zero-trust perimeter security implementations leveraging biometrics, multi-factor smart locks, and real-time physical access audit logging.",
    href: "/services/access-control",
    badge: "Security",
  },
  {
    id: "09",
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
    <main className="min-h-screen bg-white font-sans text-slate-950 antialiased selection:bg-blue-600 selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden border-b-4 border-blue-600 bg-slate-950 px-6 py-28 text-white sm:px-10 lg:px-[7%]">
      
        {/* Video Layer */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="/services/servicehero-poster.jpg"
        >
          <source src="/services/servicehero.webm" type="video/webm" />
          <source src="/services/servicehero.mp4" type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl text-center">

          <h1 className="mt-8 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl lg:text-8xl leading-[0.95]">
            Seamless Integration <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]">
              & Smarter Operations
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-300 sm:text-xl lg:text-2xl">
            We design, implement, and maintain high-performance building technology systems that enhance operational efficiency, security, and resilience.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 border-2 border-blue-600 bg-blue-600 px-8 py-4 text-base font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] active:scale-95"
            >
              <span>Deploy Solutions</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#services-grid"
              className="inline-flex items-center gap-2 border-2 border-slate-700 bg-slate-900/80 px-8 py-4 text-base font-black uppercase tracking-wider text-slate-200 transition-all hover:border-blue-500 hover:text-blue-400 active:scale-95"
            >
              <span>Explore Capabilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW / WHY US SECTION */}
      <section className="bg-white px-6 py-28 sm:px-10 lg:px-[7%]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-block border-l-4 border-blue-600 pl-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                  Architectural Foundation
                </span>
                <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-5xl leading-[1.05]">
                  Zero Barriers. <br />
                  <span className="text-blue-600">Total Control.</span>
                </h2>
              </div>
              
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-700">
                Fragmented systems breed operational blindspots. We replace disjointed hardware with unified, high-throughput network backbones engineered for instant diagnostics and zero latency.
              </p>

              <div className="mt-8 border-t-2 border-slate-100 pt-6">
                <div className="flex items-center gap-4 text-slate-950 font-extrabold text-sm uppercase tracking-wider">
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white">
                    100%
                  </div>
                  <span>Full Turnkey Planning & Deployment</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {valueProps.map((item) => {
                const Icon = item.icon
                return (
                  <div 
                    key={item.title} 
                    className="group border-2 border-slate-900 bg-white p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-blue-600 hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-blue-600 text-white transition-colors group-hover:bg-slate-950">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl font-black uppercase text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
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
      <section id="services-grid" className="border-t-4 border-slate-950 bg-slate-100 px-6 py-28 sm:px-10 lg:px-[7%]">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b-2 border-slate-300 pb-12">
            <div>
              <span className="bg-blue-600 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
                Core Catalog
              </span>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-slate-950 sm:text-6xl">
                Infrastructure <span className="text-blue-600">Matrix</span>
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold text-slate-600 leading-relaxed">
              Industrial-grade hardware execution for mission-critical deployments, command environments, and high-density enterprise physical networks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col border-2 border-slate-900 bg-white transition-all duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:border-blue-600 hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)]"
              >
                {/* Image & Badge Container */}
                <div className="relative aspect-[16/10] border-b-2 border-slate-900 overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  
                  {/* Top Overlay Badges */}
                  <div className="absolute left-0 top-0 flex w-full justify-between items-start p-4 pointer-events-none">
                    <span className="border border-blue-600 bg-blue-600 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  
                  <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t-2 border-slate-100 pt-6">
                    <div className="flex h-9 w-9 items-center justify-center border-2 border-slate-900 bg-slate-100 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
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