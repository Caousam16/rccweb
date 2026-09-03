import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import ApproachSection from "@/components/ApproachSection"

import {
  Building2,
  CheckCircle2,
  Factory,
  Hospital,
  School,
  ShoppingBag,
  Cog,
  Radio,
  ShieldCheck,
  Volume2,
  ArrowRight,
  Zap,
} from "lucide-react"

export default function PublicAddressingPage() {

  const benefits = [
    {
      title: "Instant Communication",
      description: "Deliver crystal-clear announcements across multiple zones in real time without latency.",
      icon: Volume2,
    },
    {
      title: "Emergency Preparedness",
      description: "Broadcast immediate alert sequences and voice evacuation instructions automatically.",
      icon: ShieldCheck,
    },
    {
      title: "Centralized Management",
      description: "Manage global multi-building zones from a single high-availability digital dashboard.",
      icon: Radio,
    },
    {
      title: "Scalable Infrastructure",
      description: "Expand speaker endpoints effortlessly across your IP network as facility footprints grow.",
      icon: Building2,
    },
  ]

  const industries = [
    {
      title: "Commercial Buildings",
      icon: Building2,
      description: "High-clarity paging, ambient background music, and mass notification for modern office towers.",
    },
    {
      title: "Manufacturing Plants",
      icon: Factory,
      description: "High-decibel, noise-penetrating audio distribution engineered for demanding shop floors.",
    },
    {
      title: "Healthcare Facilities",
      icon: Hospital,
      description: "Critical code alerts, quiet-zone staff announcements, and campus-wide paging networks.",
    },
    {
      title: "Educational Campuses",
      icon: School,
      description: "Synchronized bell schedules, automated safety lockdowns, and district-wide public addressing.",
    },
    {
      title: "Retail & Malls",
      icon: ShoppingBag,
      description: "Multi-zone promotional audio targeting, customer messaging, and emergency evacuation.",
    },
  ]

  const technologies = [
    "Network Audio Systems",
    "Digital Signal Processing (DSP)",
    "PoE+ High-Power Speakers",
    "Multi-Zone Audio Routing",
    "SIP & VoIP Telephony Integration",
    "EN 54 Voice Evacuation Systems",
  ]

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-center py-12 overflow-hidden bg-slate-950 border-b-4 border-blue-600">
          {/* Background Image Layer with Reduced Overlay Opacity */}
          <div className="absolute inset-0 z-0">
            <img
              src="/services/pa-hero.jpg"
              alt="Public Addressing Background"
              className="w-full h-full object-cover contrast-100"
            />
            {/* Lightened gradient overlay for better background visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
          </div>

          {/* Softened Dark Overlay (decreased opacity so image shines through) */}
          <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply" />

          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border-2 border-white bg-slate-950 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#ffffff]">
                <Zap className="h-4 w-4 text-blue-400 fill-blue-400" />
                Enterprise Audio Systems
              </div>

              {/* Heading - Explicitly set to text-white */}
              <h1 className="mt-8 text-5xl font-black uppercase tracking-tight text-white md:text-7xl lg:text-8xl leading-none drop-shadow-lg">
                Public <span className="text-blue-400 underline decoration-white decoration-8 underline-offset-8">Address</span> Systems
              </h1>

              {/* Subtitle - Brightened text color */}
              <p className="mt-8 max-w-2xl text-xl font-bold leading-relaxed text-slate-100 md:text-2xl drop-shadow">
                High-decibel, ultra-reliable voice communication and emergency alert networks engineered for mission-critical enterprise environments.
              </p>

              {/* CTA Button - Updated contrasting shadow for dark backgrounds */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-3 border-4 border-white bg-white px-8 py-4 text-lg font-black uppercase tracking-wider text-slate-950 shadow-[6px_6px_0px_0px_#2563eb] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#2563eb] active:translate-x-0 active:translate-y-0"
                >
                  Explore System
                  <ArrowRight className="h-6 w-6 stroke-[3]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview" className="py-24 bg-white border-b-4 border-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-stretch">
              
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-block w-fit border-2 border-slate-900 bg-blue-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-900 mb-4">
                  High Performance Paging
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl leading-none">
                  System Overview
                </h2>
                
                <div className="mt-8 space-y-6 text-lg font-medium text-slate-700 leading-relaxed">
                  <p className="border-l-4 border-blue-600 pl-4 text-xl font-bold text-slate-900">
                    A modern Public Address (PA) System delivers instantly intelligible audio across wide-area physical spaces without delay or dead zones.
                  </p>
                  <p>
                    Our Next-Gen PA architecture integrates native IP network endpoints, offering full multi-zone routing, automated schedule triggers, and seamless emergency override functions. Built on open standards, it bridges enterprise IT infrastructures with heavy-duty acoustic hardware.
                  </p>
                </div>
              </div>

              {/* Sharp Blueprint Card */}
              <div className="lg:col-span-5 border-4 border-slate-950 bg-blue-50 p-8 shadow-[12px_12px_0px_0px_#020617]">
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 border-b-4 border-slate-950 pb-4">
                  Core Capabilities
                </h3>

                <div className="mt-8 grid gap-4 sm:grid-cols-1">
                  {[
                    "Multi-zone target paging",
                    "Life-safety emergency broadcasting",
                    "Automated bell & message scheduling",
                    "Multi-source background audio",
                    "Direct SIP & VoIP PBX integration",
                    "Health monitoring & endpoint diagnostics",
                  ].map((item) => (
                    <div 
                      key={item} 
                      className="flex items-center gap-4 border-2 border-slate-950 bg-white p-4 shadow-[4px_4px_0px_0px_#020617]"
                    >
                      <div className="bg-blue-600 p-1 border border-slate-950">
                        <CheckCircle2 className="h-5 w-5 text-white stroke-[3]" />
                      </div>
                      <span className="font-black text-slate-950 uppercase text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="bg-blue-50 py-24 border-b-4 border-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <span className="border-2 border-slate-900 bg-blue-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                Impact & Value
              </span>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-6xl">
                Strategic Benefits
              </h2>
              <p className="mt-4 text-xl font-bold text-slate-700">
                A robust PA infrastructure eliminates communication silos and enforces site-wide safety protocols.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="flex flex-col justify-between border-4 border-slate-950 bg-white p-8 shadow-[8px_8px_0px_0px_#2563eb] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#020617]"
                  >
                    <div>
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border-4 border-slate-950 bg-blue-600 text-white shadow-[4px_4px_0px_0px_#020617]">
                        <Icon className="h-8 w-8 stroke-[2.5]" />
                      </div>

                      <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950">
                        {benefit.title}
                      </h3>

                      <p className="mt-4 font-semibold text-slate-600 leading-snug">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t-2 border-slate-100 flex items-center justify-end">
                      <div className="h-3 w-3 bg-blue-600 border border-slate-950"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="py-24 bg-white border-b-4 border-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="border-2 border-slate-900 bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                Target Sectors
              </span>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
                Industries We Serve
              </h2>
              <p className="mt-4 text-lg font-bold text-slate-600">
                Customized audio profiles engineered for the acoustic demands of your specific facility.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <div
                    key={industry.title}
                    className="border-4 border-slate-950 bg-white p-8 shadow-[8px_8px_0px_0px_#020617] transition-all hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-4 border-b-4 border-slate-950 pb-6">
                      <div className="border-2 border-slate-950 bg-blue-600 p-3 text-white shadow-[3px_3px_0px_0px_#020617]">
                        <Icon className="h-7 w-7 stroke-[2.5]" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950">
                        {industry.title}
                      </h3>
                    </div>

                    <p className="mt-6 font-semibold text-slate-700 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section className="bg-slate-950 py-24 text-white border-b-8 border-blue-600">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-5">
                <span className="border-2 border-blue-400 bg-blue-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                  Hardware & Standards
                </span>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl text-white leading-none">
                  Enterprise Technologies
                </h2>
                <p className="mt-6 text-lg font-semibold text-blue-100 leading-relaxed">
                  We deploy heavy-duty audio components engineered to interface directly with enterprise IT switches, offering power over ethernet (PoE), automated system checks, and continuous uptime.
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex items-center gap-4 border-4 border-white bg-blue-600 p-6 shadow-[6px_6px_0px_0px_#2563eb]"
                  >
                    <div className="border-2 border-slate-950 bg-slate-950 p-2 text-white">
                      <Cog className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <span className="text-lg font-black uppercase tracking-wide text-white">{technology}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* APPROACH SECTION & CTA */}
        <div className="bg-white">
          <ApproachSection />
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  )
}