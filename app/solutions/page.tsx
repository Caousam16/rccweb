"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Briefcase, 
  TrendingUp, 
  Lock,
  Building2, 
  Factory, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  Users
} from "lucide-react"

// Solutions keep the full-width cover images
const solutions = [
  {
    id: "commercial",
    title: "Commercial Buildings",
    description: "Comprehensive infrastructure solutions for office buildings, business centers, and corporate facilities.",
    image: "/solutions/commercial.jpg",
  },
  {
    id: "industrial",
    title: "Industrial Facilities",
    description: "Robust and reliable systems designed for manufacturing plants, warehouses, and industrial complexes.",
    image: "/solutions/industrial.jpg",
  },
  {
    id: "residential",
    title: "Residential Complexes",
    description: "Modern infrastructure for condominiums, residential towers, and gated communities.",
    image: "/solutions/residential.png",
  },
  {
    id: "educational",
    title: "Educational Institutions",
    description: "Innovative solutions for schools, universities, and educational facilities.",
    image: "/solutions/school.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare Institutions",
    description: "Mission-critical infrastructure for hospitals and clinics prioritizing safety and reliability.",
    image: "/solutions/hospital.jpg",
  },
  {
    id: "retail",
    title: "Retail & Malls",
    description: "Customer-focused solutions for shopping centers, retail stores, and commercial establishments.",
    image: "/solutions/mall.jpg",
  },
]

const trustBadges = [
  { label: "Trusted by Leading Organizations", icon: Briefcase },
  { label: "Safety-First Mindset", icon: Lock },
  { label: "Scalable & Flexible", icon: Layers },
  { label: "Results That Matter", icon: TrendingUp },
]

// Industries restored to clean Lucide icons
const industries = [
  { name: "Corporate Offices", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing & Industrial", icon: Factory },
  { name: "Retail", icon: ShoppingBag },
  { name: "Residential", icon: Users },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-900 selection:text-white">
      <Header/>
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-20 bg-[#091d34] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l " />

        <div className="absolute inset-0 w-full h-full opacity-10 lg:opacity-70">
          <Image
            src="/solutions/solutionshero.png"
            alt="Operations Collaboration"
            fill
            priority
            className="object-cover object-left lg:object-center"
          />
        </div>

        <div className="relative mx-auto max-w-full px-6 lg:px-8 z-20 flex justify-end">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-3">
              Solutions That Work Together
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Integrated Solutions.<br />
              Operational <span className="text-sky-400">Impact.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We integrate people, processes, and technology to deliver auxiliary
              solutions that optimize operations, enhance experiences, and drive
              long-term value.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium rounded px-6"
                asChild
              >
                <Link href="#solutions">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Value Badges Row */}
        <div className="relative mx-auto max-w-full px-6 lg:px-8 z-20">
          <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => {
              const BadgeIcon = badge.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-slate-300 font-light"
                >
                  <div className="p-2 rounded-full bg-white/5 border border-white/10">
                    <BadgeIcon className="h-4 w-4 text-sky-400" />
                  </div>
                  <span>{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS CARDS SECTION --- */}
      <section id="solutions" className="py-24 bg-white">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">Our Solutions</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f294a] sm:text-4xl">
              Comprehensive. Integrated. Reliable.
            </h2>
            <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
              From daily operations to long-term strategy, our solutions are designed to keep your facility running smoothly and your people supported.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              return (
                <div
                  key={solution.id}
                  className="flex flex-col overflow-hidden bg-white border border-slate-100 shadow-sm rounded-md hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-56 w-full bg-slate-100">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1 text-center p-8">
                    <h3 className="text-lg font-bold tracking-tight text-[#0f294a]">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500 font-light">
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
      <section className="py-24 bg-slate-50/50 border-t border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">Why Partner With Us</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f294a] sm:text-4xl">
                One Partner.<br />Many Advantages.
              </h2>
              <div className="h-1 w-12 bg-blue-600 my-6" />
              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed mb-8">
                We become an extension of your team—seamlessly integrated, highly responsive, and focused on what matters most: your success.
              </p>

              <div className="space-y-3.5">
                {[
                  "One partner for multiple essential services",
                  "Scalable solutions that grow with your business",
                  "Experienced teams with a safety-first mindset",
                  "Data-driven insights for better decision-making",
                  "Commitment to sustainability and community"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium text-xs uppercase tracking-wider px-6 py-5" asChild>
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
              </Button>
            </div>

            {/* Right Image & Metrics Card Column */}
            <div className="lg:col-span-7 relative pt-10 lg:pt-0">
              <div className="relative h-[450px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/solutions/maintenance.png" 
                  alt="Modern HQ Infrastructure Asset"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Floating Data Banner */}
              <div className="absolute -bottom-6 left-6 right-6 md:-left-6 bg-[#091d34] text-white rounded-md p-6 shadow-xl grid grid-cols-3 text-center divide-x divide-white/10 z-20">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-sky-400">24/7</p>
                  <p className="text-[10px] md:text-xs font-light text-slate-300 mt-1 uppercase tracking-wider">Technical Support</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-sky-400">End-to-End</p>
                  <p className="text-[10px] md:text-xs font-light text-slate-300 mt-1 uppercase tracking-wider">System Integration</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-sky-400">Maintain</p>
                  <p className="text-[10px] md:text-xs font-light text-slate-300 mt-1 uppercase tracking-wider">Long-Term Support</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE SECTION --- */}
      <section className="py-24 bg-white border-t border-b border-slate-100">
        <div className="mx-auto max-w-full px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">Industries We Serve</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0f294a] sm:text-4xl mb-4">
            Solutions Tailored to Your Industry
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-light text-sm mb-16">
            We partner with organizations across a wide range of industries, delivering solutions that meet the unique demands of each environment.
          </p>

          {/* Rendered as clean vector icons using Lucide components */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-r border-slate-100 divide-x divide-y md:divide-y-0 divide-slate-100">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon
              return (
                <div key={i} className="flex flex-col items-center p-8 bg-white hover:bg-slate-50/50 transition-colors">
                  <IndIcon className="h-10 w-10 text-[#1b4d83] stroke-[1.25] mb-4" />
                  <p className="text-xs sm:text-sm font-bold text-[#0f294a] leading-tight">{ind.name}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      <Footer/>

    </main>
  )
}