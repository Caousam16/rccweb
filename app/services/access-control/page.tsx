"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ApproachSection from "@/components/ApproachSection";
import { CTA } from "@/components/CTA";
import { NetworkBackground } from "@/components/NetworkBackground";

import { motion, AnimatePresence } from "framer-motion";

import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Lock,
  Layers,
  ArrowRight,
  ChevronRight,
  Zap,
  Activity,
  Cpu,
} from "lucide-react";

export default function AccessControlPage() {
  
  const benefits = [
    {
      code: "01",
      title: "Real-Time Audit Trails",
      description:
        "Instant event logging tracks every entry, exit, and physical door violation with precise millisecond timestamps.",
      icon: CheckCircle2,
    },
    {
      code: "02",
      title: "Granular Multi-Level Access",
      description:
        "Define time-based matrix schedules, clear roles, and zone boundaries for maximum spatial restriction.",
      icon: Lock,
    },
    {
      code: "03",
      title: "Seamless Ecosystem Integration",
      description:
        "Direct API integration with CCTV feeds, active fire alarm suppression systems, and HR management systems.",
      icon: Layers,
    },
    {
      code: "04",
      title: "Active Perimeter Threat Defense",
      description:
        "Deploy single-click lockdown protocols, anti-passback rules, and multi-factor biometric checks.",
      icon: ShieldCheck,
    },
  ];

  const industries = [
    {
      tag: "FINANCIAL & TECH",
      name: "Corporate Offices",
      desc: "Protect executive floors, server corridors, and sensitive data networks.",
    },
    {
      tag: "CRITICAL INFRASTRUCTURE",
      name: "Data Centers",
      desc: "Zero-trust physical barriers featuring dual-custody biometric locks.",
    },
    {
      tag: "LOGISTICS & PRODUCTION",
      name: "Manufacturing & Warehouses",
      desc: "Manage high-volume shift turnstiles, loading docks, and hazard zones.",
    },
    {
      tag: "COMPLIANCE & CARE",
      name: "Healthcare Facilities",
      desc: "Restrict pharmaceutical vaults, ICUs, and restricted operational rooms.",
    },
    {
      tag: "HIGH-RISE RESIDENTIAL",
      name: "Residential & Condominiums",
      desc: "Smart NFC access, resident RFID barriers, and cloud visitor logging.",
    },
    {
      tag: "PUBLIC SECTOR",
      name: "Educational Institutions",
      desc: "Campus-wide emergency lockdowns, dorm access, and lab security.",
    },
  ];

  const techData = [
    {
      id: "authentication",
      title: "Biometric & Digital Authentication",
      subtitle: "IDENTITY VERIFICATION",
      description:
        "Multi-factor, low-latency verification hardware designed to process enterprise foot traffic without bottlenecks.",
      items: [
        "Facial & Fingerprint Biometrics",
        "RFID & Smart IC Cards",
        "Bluetooth & NFC Mobile Pass",
        "Encrypted PIN Keypads",
      ],
      image: "/services/home/access-control.png",
    },
    {
      id: "door-hardware",
      title: "Architectural Door Hardware",
      subtitle: "PHYSICAL RETENTION",
      description:
        "Heavy-duty electronic strikes, magnetic shear locks, and physical speed gates built to withstand intense operational stress.",
      items: [
        "Electromagnetic Shear Locks",
        "High-Speed Turnstiles",
        "Break-Glass Panic Systems",
      ],
      image: "/services/access-control/magnetic-door.png",
    },
    {
      id: "management-platform",
      title: "Unified Command Platform",
      subtitle: "REAL-TIME MONITORING",
      description:
        "A centralized web interface delivering full visibility across physical sites, user privileges, and event triggers.",
      items: [
        "IP Controller Hubs",
        "Central Event Console",
        "HR & Payroll Attendance Sync",
        "Remote Cloud Dashboard",
      ],
      image: "/services/access-control/dashboard.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-white text-slate-950 font-sans selection:bg-blue-600 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-slate-900 border-b-4 border-slate-900 overflow-hidden">
        
        {/* Full-bleed Background Image with Dark Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/services/access-control/access-control.jfif"
            alt="Access Control Background"
            className="w-full h-full object-cover contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 z-20" />

        {/* Main Content Container */}
        <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            

            {/* Headline Block */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-[0.95]">
                Access Control
              </h1>
              <div className="mt-3 inline-block bg-white border-4 border-slate-900 px-4 py-2 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]">
                <span className="text-blue-600 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                  & Door Security
                </span>
              </div>
            </div>

            {/* Solid White Content Card for High Readability */}
            <div className="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] mb-8">
              <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed border-l-4 border-blue-600 pl-4">
                Lock down physical vulnerabilities and streamline multi-zone access. We build hyper-scalable biometric, RFID, and cloud-managed security infrastructure tailored to high-density environments.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#technologies"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-blue-700 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                Explore Platform <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#benefits"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-sm uppercase tracking-wider border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:bg-slate-100 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                System Capabilities
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SHOWCASE */}
      <section
        id="technologies"
        className="bg-white text-slate-950 py-28 px-6 md:px-16 border-b-4 border-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 border-b-2 border-slate-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-950 mt-2">
                Core Technologies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 flex flex-col justify-between">
              <div className="bg-slate-50 border-2 border-slate-950 p-8 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]">
                <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 mb-4">
                  {techData[activeTab].subtitle}
                </span>

                <div className="relative min-h-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-3xl font-black uppercase text-slate-950 tracking-tight">
                        {techData[activeTab].title}
                      </h3>
                      <p className="mt-4 text-slate-700 font-medium leading-relaxed text-base">
                        {techData[activeTab].description}
                      </p>

                      <div className="mt-6 space-y-2">
                        {techData[activeTab].items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-sm font-bold text-slate-900 bg-white border border-slate-950 p-2.5 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-600 stroke-[3]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="space-y-2">
                {techData.map((tech, index) => (
                  <button
                    key={tech.id}
                    onClick={() => {
                      setActiveTab(index);
                      document
                        .getElementById(tech.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`w-full flex items-center justify-between p-4 text-left font-bold text-sm tracking-wider uppercase transition-all border-2 border-slate-950 ${
                      activeTab === index
                        ? "bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] translate-x-1"
                        : "bg-white text-slate-950 hover:bg-slate-100"
                    }`}
                  >
                    <span>{tech.title}</span>
                    <span className=" text-xs">0{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7 space-y-16">
              {techData.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  id={tech.id}
                  onViewportEnter={() => setActiveTab(index)}
                  viewport={{ amount: 0.6, margin: "-10% 0px -40% 0px" }}
                  className="relative group border-4 border-slate-950 bg-slate-950 p-2 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] scroll-mt-28"
                >
                  <div className="relative aspect-video w-full overflow-hidden border-2 border-slate-950 bg-slate-900">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950 text-white text-xs px-3 py-1 font-bold border border-blue-500">
                      SYS // {tech.id.toUpperCase()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-28 px-6 bg-blue-600 text-white border-b-4 border-slate-950 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b-2 border-white/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 bg-white px-2 py-0.5">
                02 // KEY ADVANTAGES
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mt-4">
                Why Upgrade System Security?
              </h2>
            </div>
            <p className="text-white/80 font-medium max-w-md text-sm leading-relaxed">
              Eliminate vulnerable physical keying systems with modern, auditable biometric and digital access controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white text-slate-950 border-2 border-slate-950 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-blue-600 text-white border-2 border-slate-950 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <span className=" text-2xl font-black text-slate-300">
                        {item.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-950 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-16 border-b-2 border-slate-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              03 // TARGET DEPLOYMENTS
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-950 mt-2">
              Industries Protected
            </h2>
          </div>
          <p className="text-slate-600 font-medium max-w-md text-sm">
            Custom engineered security architectures designed to meet industry-specific compliance and access speeds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-slate-50 border-2 border-slate-950 p-8 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-6">
                <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white stroke-[2.5]" />
                <span className=" text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-slate-200 group-hover:bg-white group-hover:text-slate-950 text-slate-800">
                  {industry.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                {industry.name}
              </h3>

              <p className="text-slate-700 group-hover:text-white/90 text-sm font-medium leading-relaxed">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Impact Tech Banner */}
      <section className="bg-slate-950 text-white py-16 border-y-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-600 text-white border-2 border-white hidden sm:block">
              <Cpu className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Need a custom access control architecture?
              </h3>
              <p className="text-slate-400 font-medium text-sm mt-1">
                We perform site surveys and engineer custom integrations with your existing hardware.
              </p>
            </div>
          </div>
          <a
            href="#cta"
            className="w-full lg:w-auto text-center px-8 py-4 bg-blue-600 text-white font-bold text-sm tracking-wider uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Request Site Audit
          </a>
        </div>
      </section>

      <ApproachSection />
      <div id="cta">
        <CTA />
      </div>
      <Footer />
    </main>
  );
}