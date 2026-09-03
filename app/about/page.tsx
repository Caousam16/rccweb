import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Building2, 
  Lightbulb, 
  Briefcase, 
  ShieldCheck, 
  HardHat, 
  CheckCircle2, 
  Network,
  Cpu,
  Radio,
  Layers,
  Zap,
  ArrowRight
} from "lucide-react"
import Image from 'next/image'

const values = [
  {
    icon: Award,
    title: "UNCOMPROMISING QUALITY",
    description: "Rigorous physical-layer standards on every build—from precise cable management and detailed OTDR testing to clean rack architecture.",
  },
  {
    icon: Users,
    title: "TRANSPARENT INTEGRITY",
    description: "Client trust built on upfront timelines, crystal-clear project scopes, and zero hidden costs across all deployments.",
  },
  {
    icon: Lightbulb,
    title: "FORWARD-THINKING INNOVATION",
    description: "Deploying next-gen fiber backbones, high-density enterprise switching, and smart integrated building controls.",
  },
  {
    icon: HardHat,
    title: "ABSOLUTE SITE SAFETY",
    description: "OSH-compliant site execution. Continuous safety protocol enforcement across high-voltage and elevated field environments.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white font-sans">
      <Header />
      
      {/* HERO SECTION - Electric White & Vivid Blue */}
      <section className="relative min-h-screen flex items-center justify-center border-b-4 border-blue-600 overflow-hidden bg-slate-900 py-16">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/about-hero.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load or load fails on low-power mode */}
          <Image
            src="/it.png"
            alt="Background cover"
            fill
            className="object-cover"
          />
        </video>

        {/* Dark Overlay for High-Contrast Text Readability */}
        <div className="absolute inset-0 bg-slate-950/75 z-0" />

        {/* Bold Blue Glow Accent */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                Powering networks with <br />
                <span className="text-blue-400 underline decoration-blue-500 decoration-8 underline-offset-8">
                  unshakeable
                </span>{" "}
                speed.
              </h1>

              <div className="space-y-4 text-slate-200 leading-relaxed text-base sm:text-xl font-medium pt-2">
                <p>
                  <strong className="text-blue-400 font-extrabold uppercase">
                    RCC Cabling and Network Solutions Corporation
                  </strong>{" "}
                  is a premier systems integration partner delivering turnkey IT,
                  telecommunications, and building auxiliary solutions tailored
                  for Philippine enterprises.
                </p>
                <p className="text-slate-300 text-base">
                  Whether engineered for high-density structured cabling,
                  enterprise-grade CCTV networks, or long-distance fiber optic
                  backbones, we turn complex technical designs into dependable
                  operational realities.
                </p>
              </div>

              {/* Vendor List */}
              <div className="p-4 bg-slate-900/90 border-2 border-blue-500 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-wider text-blue-400">
                  Certified Distribution & Integration Partner:
                </p>
                <p className="text-sm font-bold text-white mt-1">
                  LS • Alantek • Fluke Networks • Hikvision • Cisco • Bosch •
                  Panasonic
                </p>
              </div>

              {/* Badges Grid */}
              <div className="pt-2 flex flex-wrap gap-2">
                {[
                  "Fiber Optics",
                  "Structured Cabling",
                  "CCTV & Security",
                  "PABX",
                  "FDAS",
                  "NOC Migration",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase bg-slate-900 text-white border-2 border-slate-700 shadow-[2px_2px_0px_0px_rgba(37,99,235,1)]"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Box */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t-2 border-slate-700 mt-8">
                <div className="p-4 bg-slate-900/90 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] backdrop-blur-sm">
                  <p className="text-4xl font-black text-blue-400 tracking-tight">
                    15
                  </p>
                  <p className="text-xs font-black uppercase text-slate-200 mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="p-4 bg-slate-900/90 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] backdrop-blur-sm">
                  <p className="text-4xl font-black text-blue-400 tracking-tight">
                    500+
                  </p>
                  <p className="text-xs font-black uppercase text-slate-200 mt-1">
                    Projects Built
                  </p>
                </div>
                <div className="p-4 bg-blue-600 text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <p className="text-4xl font-black tracking-tight">99.7%</p>
                  <p className="text-xs font-black uppercase text-blue-100 mt-1">
                    Uptime Target
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-blue-600 p-3 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
                {/* Floating Credential Badge */}
                <div className="absolute -top-5 -right-5 bg-white text-slate-900 border-2 border-slate-900 px-4 py-2 font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center gap-2 z-20">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  SEC REGISTERED
                </div>

                <div className="relative aspect-square w-full bg-white flex items-center justify-center p-8 border-2 border-slate-900">
                  <Image
                    src="/services/RCC-Logo.png"
                    alt="RCC Cabling Logo"
                    width={320}
                    height={320}
                    priority
                    className="object-contain filter drop-shadow-xl"
                  />
                </div>

                <div className="mt-3 p-3 bg-slate-900 text-white flex items-center justify-between text-xs font-black tracking-wider uppercase border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="h-2.5 w-2.5 bg-blue-400 animate-ping rounded-full" />
                    Field Teams Active
                  </div>
                  <span className="text-slate-300">ISO Standard Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - High Contrast Blue Blocks */}
      <section className="py-20 lg:py-28 bg-slate-100 border-b-4 border-slate-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                    <Target className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-blue-600">Primary Objective</span>
                    <h3 className="text-3xl font-black uppercase text-slate-900 tracking-tight">Our Mission</h3>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
                  To empower organizations with dependable, high-capacity system integration services—covering robust data networks, surveillance systems, telecom assets, and intelligent building controls—backed by expert execution and genuine service excellence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-blue-600 text-white p-8 sm:p-10 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-white text-blue-600 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                    <Eye className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-blue-200">Long-Term Goal</span>
                    <h3 className="text-3xl font-black uppercase text-white tracking-tight">Our Vision</h3>
                  </div>
                </div>
                <p className="text-blue-50 leading-relaxed text-base sm:text-lg font-medium">
                  To stand as the premier and most trusted systems integrator in the Philippines, setting benchmark standards for modern enterprise infrastructure and seamless digital connectivity across the nation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES - Loud Cards */}
      <section className="py-20 lg:py-28 bg-white border-b-4 border-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest bg-blue-600 text-white px-3 py-1 border border-slate-900">
              Guiding Directives
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 mt-4">
              Core Operational Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div 
                key={v.title} 
                className="bg-white border-3 border-slate-900 p-6 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 border-2 border-slate-900 mb-6">
                    <v.icon className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">{v.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL STRUCTURE */}
      <section className="py-20 lg:py-28 bg-blue-50 border-b-4 border-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Company Blueprint</span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 mt-1">
              Leadership & Field Operations
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Executive */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-blue-600 text-white border-4 border-slate-900 p-6 text-center shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                <Briefcase className="h-8 w-8 mx-auto mb-2 text-white" />
                <h3 className="text-lg font-black tracking-wider uppercase">CHAIRMAN & CHIEF EXECUTIVE OFFICER</h3>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mt-1">Strategic Vision & Governance</p>
              </div>
            </div>

            <div className="w-1 bg-slate-900 h-8 mx-auto" />

            {/* Department Management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Sr. IT Infrastructure & Solutions", sub: "NOC Operations & Engineering", icon: Building2 },
                { title: "Business Development & Accounts", sub: "Enterprise Client Partnerships", icon: Users },
                { title: "Finance & Administration", sub: "Corporate Governance & Regulatory", icon: Award }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-3 border-slate-900 p-5 text-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  <item.icon className="h-7 w-7 mx-auto text-blue-600 mb-2" />
                  <h4 className="font-black text-slate-900 text-sm uppercase">{item.title}</h4>
                  <p className="text-xs text-slate-600 font-bold mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="w-1 bg-slate-900 h-8 mx-auto" />

            {/* Technical Divisions */}
            <div className="bg-white border-4 border-slate-900 p-6 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]">
              <p className="text-xs font-black uppercase tracking-widest text-blue-600 text-center mb-6">
                Specialized Field Divisions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Network Engineering", sub: "Routing, Switching & NOC", icon: Cpu },
                  { title: "Cabling & Fiber Teams", sub: "Fusion Splicing & Testing", icon: Layers },
                  { title: "Auxiliary Systems", sub: "CCTV, Access Control & FDAS", icon: Radio },
                  { title: "Field Support Units", sub: "On-Call Emergency SLA", icon: HardHat }
                ].map((div, idx) => (
                  <div key={idx} className="bg-blue-50 border-2 border-slate-900 p-4 text-center">
                    <div.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <h5 className="font-black text-slate-900 text-xs uppercase">{div.title}</h5>
                    <p className="text-[11px] font-semibold text-slate-600 mt-1">{div.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY & QUALITY - Big Blue Callout */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-blue-600 text-white border-4 border-slate-900 p-8 sm:p-14 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-blue-600 border border-slate-900 text-xs font-black uppercase tracking-widest">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Quality Assurance Standard</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  High Performance. Zero Compliance Shortcuts.
                </h2>

                <p className="text-blue-100 text-base sm:text-lg font-medium leading-relaxed">
                  Every installation is backed by comprehensive OTDR trace verification, Fluke copper certifications, and structured cable labeling. Our field personnel strictly abide by workplace safety mandates to protect personnel and secure high-altitude and critical infrastructure environments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Fluke Copper Certification",
                    "Comprehensive OTDR Documentation",
                    "Certified High-Altitude PPE Clearance",
                    "Zero-Downtime NOC Cutover Strategies"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-blue-700/60 p-3 border border-blue-400/30 text-white font-bold text-sm">
                      <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white text-slate-900 border-4 border-slate-900 p-8 text-center shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4">
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center mx-auto border-2 border-slate-900">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase">Zero Incident Standard</h3>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    Prioritizing technician safety with strict harness guidelines and line clearances on all commercial and enterprise deployments.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}