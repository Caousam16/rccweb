"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  Lock,
  Layers,
  Building2, 
  Factory, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  Users,
  ShieldCheck,
  Zap,
  Clock,
  ExternalLink
} from "lucide-react"

const solutions = [
  {
    id: "commercial",
    title: "Commercial Buildings",
    description: "Comprehensive infrastructure solutions for office buildings, business centers, and corporate facilities.",
    image: "/solutions/commercial.jpg",
    badge: "Enterprise",
  },
  {
    id: "industrial",
    title: "Industrial Facilities",
    description: "Robust and reliable systems designed for manufacturing plants, warehouses, and industrial complexes.",
    image: "/solutions/industrial.jpg",
    badge: "Mission-Critical",
  },
  {
    id: "residential",
    title: "Residential Complex",
    description: "Modern infrastructure for condominiums, residential towers, and gated communities.",
    image: "/solutions/residential.png",
    badge: "Smart-Living",
  },
  {
    id: "educational",
    title: "Educational Institutions",
    description: "Innovative solutions for schools, universities, and educational facilities.",
    image: "/solutions/school.jpg",
    badge: "Scalable",
  },
  {
    id: "healthcare",
    title: "Healthcare Institutions",
    description: "Mission-critical infrastructure for hospitals and clinics prioritizing safety and reliability.",
    image: "/solutions/hospital.jpg",
    badge: "High-Precision",
  },
  {
    id: "retail",
    title: "Retail & Malls",
    description: "Customer-focused solutions for shopping centers, retail stores, and commercial establishments.",
    image: "/solutions/mall.jpg",
    badge: "High-Traffic",
  },
]

const trustBadges = [
  { label: "Trusted Industry Leadership", icon: Briefcase },
  { label: "Zero-Trust Security Standard", icon: Lock },
  { label: "Ultra-Scalable Architecture", icon: Layers },
  { label: "Measurable Impact & ROI", icon: TrendingUp },
]

const industries = [
  { name: "Corporate Offices", icon: Building2, desc: "Modern Enterprise Hubs" },
  { name: "Healthcare Institutions", icon: HeartPulse, desc: "Critical Care Centers" },
  { name: "Education & Research", icon: GraduationCap, desc: "Smart Campuses" },
  { name: "Manufacturing & Industry", icon: Factory, desc: "Automated Facilities" },
  { name: "Retail & Commercial Malls", icon: ShoppingBag, desc: "High-Density Spaces" },
  { name: "Residential Complexes", icon: Users, desc: "Smart Communities" },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white font-sans">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-28 lg:pt-44 lg:pb-32 bg-slate-950 text-white overflow-hidden border-b-4 border-blue-600">
        {/* Loud Geometric Blue Accents */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#091d34_60%,#1e40af_100%)] opacity-95" />
        

        {/* Video Layer */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="/solutions/maintenance.jpg"
        >
          <source src="/solutions/solutions-hero-vid.mp4" type="video/mp4" />
        </video>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="max-w-3xl">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
              INTEGRATED <br />
              <span className="text-blue-500 bg-white px-2 py-0.5 inline-block text-slate-950 my-1">
                SOLUTIONS.
              </span><br />
              OPERATIONAL IMPACT.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl border-l-4 border-blue-500 pl-4">
              Empowering your organization with infrastructure you can depend on. Our expert team seamlessly integrates networking, security, telecommunications, and building automation to ensure your operations run smarter, safer, and faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-black rounded-none px-8 py-7 text-base border-2 border-blue-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                asChild
              >
                <Link href="#solutions" className="flex items-center gap-3">
                  SCHEDULE CONSULTATION
                  <ArrowRight className="h-5 w-5 stroke-[3]" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent hover:bg-white hover:text-slate-950 text-white font-black rounded-none px-8 py-7 text-base transition-all"
                asChild
              >
                <Link href="#industries">EXPLORE INDUSTRIES</Link>
              </Button>
            </div>
          </div>

          {/* Sharp Trust Badges Row */}
          <div className="mt-20 pt-8 border-t-2 border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge, idx) => {
              const BadgeIcon = badge.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-slate-900/90 border-2 border-slate-700 rounded-none shadow-md"
                >
                  <div className="p-2.5 bg-blue-600 text-white rounded-none">
                    <BadgeIcon className="h-5 w-5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wide text-slate-200">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS CARDS SECTION --- */}
      <section id="solutions" className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b-2 border-slate-200 pb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-white bg-blue-600 px-3 py-1 rounded-none inline-block mb-3">
                End-To-End Capabilities
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase">
                COMPREHENSIVE. INTEGRATED. <span className="text-blue-600">RELIABLE.</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              From daily operations to long-term strategy, our solutions are designed to keep your facility running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              return (
                <div
                  key={solution.id}
                  className="group rounded-none bg-white border-2 border-slate-950 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  {/* Card Image */}
                  <div className="relative h-60 w-full bg-slate-100 border-b-2 border-slate-950">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover rounded-none"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950 text-white font-black text-xs uppercase px-3 py-1 border border-white rounded-none">
                      {solution.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="text-2xl font-black text-slate-950 uppercase group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>

                    <p className="mt-4 text-slate-600 font-normal leading-relaxed text-sm flex-1">
                      {solution.description}
                    </p>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- WHY PARTNER WITH US SECTION --- */}
      <section className="py-24 bg-blue-600 text-white relative border-y-4 border-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 bg-white px-3 py-1 rounded-none inline-block mb-4">
                Why Partner With Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                ONE PARTNER.<br />
                <span className="text-slate-950 bg-sky-300 px-2 py-0.5 inline-block my-1">
                  MANY ADVANTAGES.
                </span>
              </h2>
              
              <p className="mt-6 text-blue-50 font-medium text-base sm:text-lg leading-relaxed">
                We become an extension of your team—seamlessly integrated, highly responsive, and focused on what matters most: your success.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "One partner for multiple essential services",
                  "Scalable solutions that grow with your business",
                  "Experienced teams with a safety-first mindset",
                  "Data-driven insights for better decision-making",
                  "Commitment to sustainability and community"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-blue-700/80 border-2 border-blue-400 rounded-none">
                    <ShieldCheck className="h-5 w-5 text-sky-300 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-sm font-bold text-white">{text}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="mt-10 bg-slate-950 text-white hover:bg-slate-900 font-black rounded-none px-8 py-6 text-xs uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" 
                asChild
              >
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right Image & Floating Metrics Grid */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[480px] w-full border-4 border-slate-950 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] bg-slate-900">
                <Image 
                  src="/solutions/maintenance.png" 
                  alt="Modern HQ Infrastructure Asset"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sharp Banner Card */}
              <div className="absolute -bottom-6 left-4 right-4 bg-slate-950 text-white rounded-none p-6 border-2 border-white grid grid-cols-3 gap-2 text-center shadow-2xl">
                <div className="p-2 border-r border-slate-800">
                  <Clock className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-2xl sm:text-3xl font-black text-sky-400">24/7</p>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Support</p>
                </div>
                <div className="p-2 border-r border-slate-800">
                  <Zap className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-2xl sm:text-3xl font-black text-sky-400">100%</p>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Integrated</p>
                </div>
                <div className="p-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-2xl sm:text-3xl font-black text-sky-400">ZERO</p>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Downtime</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- CTA BANNER SECTION --- */}
      <section className="py-20 bg-white border-t-2 border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-none bg-slate-950 border-4 border-blue-600 p-10 sm:p-16 text-white overflow-hidden shadow-[12px_12px_0px_0px_rgba(37,99,235,1)]">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-tight">
                READY TO OPTIMIZE YOUR FACILITY?
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg font-medium">
                Talk to our technical teams today for an integrated operations evaluation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-500 text-white font-black rounded-none px-8 py-6 text-sm uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                  asChild
                >
                  <Link href="/contact">Get Started Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}