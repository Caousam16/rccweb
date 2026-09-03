import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ApproachSection from "@/components/ApproachSection";
import { CTA } from "@/components/CTA";

import {
  ShieldAlert,
  Clock,
  Building2,
  CheckCircle2,
  Cpu,
  Flame,
  Factory,
  Hospital,
  ShoppingBag,
  Server,
  ArrowRight,
  Zap,
  Activity,
  Radio,
} from "lucide-react";

export default function FDASServicePage() {

  const benefits = [
    {
      id: "01",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "ULTRA-EARLY DETECTION",
      description:
        "Detect smoke and abnormal thermal shifts before combustion occurs, maximizing evacuation windows and protecting physical assets.",
    },
    {
      id: "02",
      icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
      title: "CODE COMPLIANT",
      description:
        "Engineered precisely to NFPA standards and strict local fire codes to ensure seamless regulatory approval and lower insurance risk.",
    },
    {
      id: "03",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "24/7 ACTIVE MONITORING",
      description:
        "Real-time panel telemetry, instant remote mobile notifications, and continuous BMS connectivity for zero operational blind spots.",
    },
    {
      id: "04",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: "ZERO-FALSE-ALARM TECH",
      description:
        "Advanced multi-criteria sensor algorithms ignore ambient dust, steam, and humidity to eliminate costly nuisance disruptions.",
    },
  ];

  const industries = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      name: "COMMERCIAL REAL ESTATE",
      desc: "Addressable fire alarm networks tailored for multi-story corporate headquarters and residential towers.",
    },
    {
      icon: <Factory className="w-10 h-10 text-blue-600" />,
      name: "HEAVY INDUSTRIAL",
      desc: "Industrial-grade detection hardware built for high-dust, high-heat, and hazardous chemical environments.",
    },
    {
      icon: <Hospital className="w-10 h-10 text-blue-600" />,
      name: "HEALTHCARE & LIFE SAFETY",
      desc: "Phased evacuation protocols, silent alert modes, and non-disruptive continuous life-safety monitoring.",
    },
    {
      icon: <Server className="w-10 h-10 text-blue-600" />,
      name: "CRITICAL DATA CENTERS",
      desc: "Hypersensitive air-sampling VESDA networks to stop electrical fire threats prior to equipment destruction.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
      name: "RETAIL & HOSPITALITY",
      desc: "High-capacity, aesthetic integration designed to shield guests and maintain uncompromised venue aesthetics.",
    },
  ];

  const technologies = [
    {
      code: "TECH_01",
      name: "Addressable Fire Systems",
      detail:
        "Pinpoint exact sensor locations instantaneously for accelerated physical response times and rapid diagnostic telemetry.",
    },
    {
      code: "TECH_02",
      name: "VESDA Air Sampling",
      detail:
        "Continuous active air suction through microscopic laser channels for hyper-early particulate detection.",
    },
    {
      code: "TECH_03",
      name: "Multi-Criteria Sensors",
      detail:
        "Simultaneous thermal, optical smoke, and carbon monoxide evaluation to filter real threats from environmental noise.",
    },
    {
      code: "TECH_04",
      name: "Voice Evacuation (EVACS)",
      detail:
        "Clear, high-decibel directional voice directives replacing confusing sirens for organized building evacuations.",
    },
    {
      code: "TECH_05",
      name: "Optical Beam Detectors",
      detail:
        "Long-range infrared light paths across vast open areas like aircraft hangars, warehouses, and glass atriums.",
    },
    {
      code: "TECH_06",
      name: "BMS / HVAC Interfacing",
      detail:
        "Automated mechanical shutdowns, elevator recalls, pressurization fan triggers, and automated door releases.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-blue-950 font-sans selection:bg-blue-600 selection:text-white">

      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden border-b-4 border-slate-900 bg-slate-950 text-white">
        {/* Background Image Layer with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/services/fdas/fdas-hero.jpg"
            alt="Industrial telemetry and safety systems background"
            className="h-full w-full object-cover object-center grayscale opacity-90 contrast-125"
          />
          {/* Dark Vignette & Gradient for High Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
          {/* Subtle Blueprint Grid Accent */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(#3b82f6 1.5px, transparent 1.5px), linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: `24px 24px, 48px 48px, 48px 48px`,
            }}
          />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 my-auto mx-auto max-w-7xl px-4 pt-20 pb-12 w-full sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block mb-8 border-2 border-white bg-blue-950 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#ffffff]">
              Fire Detection & Alarm Systems (FDAS)
            </span>

            {/* Massive Loud Typography */}
            <h1 className="mb-8 text-5xl font-black uppercase tracking-tight text-white leading-none sm:text-6xl md:text-7xl">
              ENGINEERED FOR <br />
              <span className="mt-2 inline-block bg-blue-600 px-3 py-1 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                ZERO FAILURE
              </span> <br />
              LIFE SAFETY.
            </h1>

            <p className="mb-10 border-l-4 border-blue-500 pl-4 text-xl font-bold leading-relaxed text-slate-300 max-w-2xl">
              High-velocity early detection, full NFPA code compliance, and integrated industrial telemetry built to protect high-density facilities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#process"
                className="group flex items-center gap-3 border-2 border-blue-400 bg-blue-600 px-8 py-4 font-black uppercase tracking-wider text-white transition-all hover:bg-blue-500 hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,0.4)]"
              >
                <span>DEPLOY PROCESS</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Tactical Status Ribbon */}
        <div className="relative z-10 border-y-2 border-blue-900/50 bg-slate-900/90 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs font-bold uppercase text-blue-300 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>RESPONSE SPEED: IMMEDIATE</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-blue-400" />
              <span>PROTOCOL: ADDRESSABLE / MULTI-LOOP</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-blue-400" />
              <span>STANDARDS: NFPA 72 COMPLIANT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50/50 py-24 border-b-2 border-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-b-4 border-blue-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-sm font-black text-blue-600 uppercase tracking-widest">// SYSTEM ADVANTAGES</span>
              <h2 className="text-4xl font-black uppercase text-blue-950 tracking-tight mt-1">
                WHY CHOOSE OUR FDAS?
              </h2>
            </div>
            <p className="text-sm font-bold text-blue-900 max-w-md">
              DESIGNED TO ELIMINATE SYSTEM DOWNTIME AND ACCELERATE INCIDENT DISPATCH.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="relative border-2 border-blue-950 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,85,255,1)]"
              >
                <div className="absolute top-4 right-4 text-2xl font-black text-blue-200">
                  {item.id}
                </div>

                <div className="mb-6 inline-block border-2 border-blue-950 bg-blue-100 p-3 shadow-[3px_3px_0px_0px_rgba(2,6,23,1)]">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-black uppercase text-blue-950 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-blue-900/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-24 border-b-2 border-blue-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 border-b-4 border-blue-950 pb-6">
            <span className="text-sm font-black text-blue-600 uppercase tracking-widest">// DEPLOYMENT TARGETS</span>
            <h2 className="text-4xl font-black uppercase text-blue-950 tracking-tight mt-1">
              INDUSTRIES PROTECTED
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((item) => (
              <div
                key={item.name}
                className="group border-2 border-blue-950 bg-white p-6 transition-all hover:bg-blue-600 hover:text-white"
              >
                <div className="mb-6 inline-block border-2 border-blue-950 bg-blue-50 p-3 text-blue-600 group-hover:border-white group-hover:bg-white group-hover:text-blue-950">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-black uppercase tracking-tight text-blue-950 group-hover:text-white">
                  {item.name}
                </h3>

                <p className="text-xs font-semibold leading-relaxed text-blue-900/80 group-hover:text-blue-50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />

      <CTA />

      <Footer />

    </main>
  );
}