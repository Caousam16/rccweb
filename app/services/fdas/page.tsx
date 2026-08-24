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
} from "lucide-react";

export default function FDASServicePage() {

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      title: "Ultra-Early Fire Detection",
      description:
        "Detect smoke and abnormal heat conditions before flames spread, providing valuable evacuation time and reducing property damage.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
      title: "Code-Compliant Installations",
      description:
        "Engineered in accordance with NFPA standards and local fire safety regulations for inspections, insurance, and long-term compliance.",
    },
    {
      icon: <Server className="w-6 h-6 text-red-600" />,
      title: "24/7 Intelligent Monitoring",
      description:
        "Integrated alarm panels, remote notifications, and BMS connectivity ensure immediate awareness during emergencies.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-red-600" />,
      title: "Reduced False Alarms",
      description:
        "Advanced multi-criteria detection minimizes nuisance alarms caused by dust, humidity, or steam while maintaining reliable protection.",
    },
  ];

  const industries = [
    {
      icon: <Building2 className="w-8 h-8 text-slate-700" />,
      name: "Commercial Buildings",
      desc: "Scalable addressable fire alarm systems for offices, condominiums, and mixed-use developments.",
    },
    {
      icon: <Factory className="w-8 h-8 text-slate-700" />,
      name: "Industrial Facilities",
      desc: "Reliable fire detection for factories, warehouses, and hazardous production environments.",
    },
    {
      icon: <Hospital className="w-8 h-8 text-slate-700" />,
      name: "Healthcare",
      desc: "Critical life-safety systems with phased evacuation and uninterrupted monitoring.",
    },
    {
      icon: <Server className="w-8 h-8 text-slate-700" />,
      name: "Data Centers",
      desc: "High-sensitivity air sampling systems designed to detect fires before equipment is damaged.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-slate-700" />,
      name: "Retail & Hospitality",
      desc: "Discreet and dependable fire alarm solutions for hotels, malls, and public facilities.",
    },
  ];

  const technologies = [
    {
      name: "Addressable Fire Alarm Systems",
      detail:
        "Identify the exact detector or device activated for faster emergency response and easier maintenance.",
    },
    {
      name: "VESDA Air Sampling",
      detail:
        "Continuously monitors air for microscopic smoke particles, providing the earliest possible warning.",
    },
    {
      name: "Multi-Criteria Detectors",
      detail:
        "Combine smoke, heat, and carbon monoxide sensing technologies for greater accuracy.",
    },
    {
      name: "Voice Evacuation Systems",
      detail:
        "Provide clear voice instructions to occupants for safer and more organized evacuations.",
    },
    {
      name: "Beam Smoke Detectors",
      detail:
        "Ideal for warehouses, atriums, and large open spaces where conventional detectors are impractical.",
    },
    {
      name: "Integrated Building Controls",
      detail:
        "Automatically interface with elevators, HVAC systems, access control, and suppression equipment.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-slate-900" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/20 px-4 py-2 text-sm font-medium text-red-300">
              <Flame className="h-4 w-4" />
              Fire Detection & Alarm System Solutions
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Advanced Fire Detection &
              <br />
              Alarm Systems (FDAS)
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              Protect people, property, and business operations with reliable,
              standards-compliant Fire Detection and Alarm Systems engineered
              for commercial, industrial, and mission-critical facilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#process"
                className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
              >
                Our Process
              </a>

              <a
                href="#technologies"
                className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
              >
                Technologies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold">
              Why Choose Our FDAS Solutions?
            </h2>
            <p className="mt-4 text-slate-600">
              Professionally engineered systems that improve safety, reduce
              risks, and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-5 w-fit rounded-lg bg-red-50 p-3">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Industries We Serve</h2>
            <p className="mt-4 text-slate-600">
              Fire protection solutions customized for different operational
              environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border bg-white p-6"
              >
                <div className="mb-4">{item.icon}</div>

                <h3 className="mb-2 text-lg font-bold">{item.name}</h3>

                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section
        id="technologies"
        className="bg-slate-900 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-400">
              Technology
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              Modern Fire Detection Technologies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-700 bg-slate-800 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-red-400" />
                  <h3 className="font-semibold">{item.name}</h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {item.detail}
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