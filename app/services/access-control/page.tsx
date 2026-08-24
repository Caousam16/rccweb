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
} from "lucide-react";

export default function AccessControlPage() {
  
  const benefits = [
    {
      title: "Real-Time Audit Trails",
      description:
        "Monitor every entry, exit attempt, and door status through centralized event logging.",
      icon: CheckCircle2,
    },
    {
      title: "Granular Multi-Level Access",
      description:
        "Assign user permissions based on schedules, departments, and secured zones.",
      icon: Lock,
    },
    {
      title: "Seamless System Integration",
      description:
        "Integrate with CCTV, fire alarm systems, HR attendance, and visitor management.",
      icon: Layers,
    },
    {
      title: "Enhanced Facility Security",
      description:
        "Reduce unauthorized access with intelligent authentication and emergency lockdown features.",
      icon: ShieldCheck,
    },
  ];

  const industries = [
    {
      name: "Corporate Offices",
      desc: "Protect executive offices, server rooms, and employee workspaces.",
    },
    {
      name: "Data Centers",
      desc: "Secure mission-critical infrastructure with biometric authentication.",
    },
    {
      name: "Manufacturing & Warehouses",
      desc: "Manage employee access, loading bays, and restricted production areas.",
    },
    {
      name: "Healthcare Facilities",
      desc: "Restrict access to pharmacies, laboratories, and patient care areas.",
    },
    {
      name: "Residential & Condominiums",
      desc: "Provide residents with secure RFID, biometric, and visitor access.",
    },
    {
      name: "Educational Institutions",
      desc: "Control campus entry, dormitories, faculty offices, and laboratories.",
    },
  ];

  const techData = [
    {
      id: "authentication",
      title: "Authentication",
      subtitle: "SECURE ACCESS CONTROL",
      description:
        "Seamless multi-factor and biometric credentials designed to secure entry points without slowing down momentum.",
      items: [
        "Fingerprint & Facial Recognition",
        "RFID & Smart Cards",
        "Bluetooth & NFC Mobile Credentials",
        "PIN Keypads",
      ],
      image:
        "/services/home/access-control.png",
    },
    {
      id: "door-hardware",
      title: "Door Hardware",
      subtitle: "PRECISION ENGINEERING",
      description:
        "Architectural-grade smart locks and strikes engineered for heavy foot traffic, durability, and instantaneous response.",
      items: [
        "Electromagnetic Locks",
        "Electric Strikes & Drop Bolts",
        "Turnstiles & Speed Gates",
        "Emergency Break Glass Devices",
      ],
      image:
        "/services/access-control/magnetic-door.png",
    },
    {
      id: "management-platform",
      title: "Management Platform",
      subtitle: "CENTRALIZED CONTROL",
      description:
        "A single dashboard to monitor activity, manage roles, configure real-time alerts, and scale across multi-site deployments.",
      items: [
        "IP-Based Door Controllers",
        "Centralized Monitoring Software",
        "Time Attendance Integration",
        "Remote Web & Mobile Management",
      ],
      image:
        "/services/access-control/dashboard.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-white text-slate-900 min-h-[85vh] flex items-center relative overflow-hidden border-b border-slate-100">
        <NetworkBackground
          nodeCount={50}
          nodeColorRgb="37, 99, 235"
          pulseColorRgb="29, 78, 216"
        />

        <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8">
              Access Control & Door Security Systems
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Secure your people, facilities, and valuable assets with enterprise-grade
              access control solutions. From single-door biometric systems to fully
              networked multi-site deployments, we design scalable security platforms
              tailored to your business.
            </p>
          </div>
        </div>
      </section>

      
      {/* WHITE-THEMED STICKY TECHNOLOGIES SHOWCASE */}
      <section
        id="technologies"
        className="bg-slate-50 text-slate-900 py-24 px-6 md:px-16 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN (Sticky Text & Controls) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 flex flex-col justify-between min-h-[480px]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                {techData[activeTab].subtitle}
              </span>

              {/* Dynamic Content Switching with Fade */}
              <div className="relative min-h-[220px] mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                      {techData[activeTab].title}
                    </h2>
                    <p className="mt-4 text-slate-600 font-normal leading-relaxed text-base">
                      {techData[activeTab].description}
                    </p>

                    {/* Integrated Feature Items List */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {techData[activeTab].items.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Indicators */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              {techData.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => {
                    setActiveTab(index);
                    document
                      .getElementById(tech.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`w-full flex items-center justify-between py-2 text-left transition-colors duration-200 ${
                    activeTab === index
                      ? "text-blue-600 font-semibold"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <span className="text-sm tracking-wide">{tech.title}</span>
                  <span
                    className={`h-[2px] transition-all duration-300 ${
                      activeTab === index ? "w-8 bg-blue-600" : "w-0 bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (Scrollable Images / Cards) */}
          <div className="lg:col-span-7 space-y-24">
            {techData.map((tech, index) => (
              <motion.div
                key={tech.id}
                id={tech.id}
                onViewportEnter={() => setActiveTab(index)}
                viewport={{ amount: 0.6 }}
                className="relative group rounded-2xl overflow-hidden border border-slate-200/80 bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 px-6 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Choose Electronic Access Control?
            </h2>

            <p className="text-slate-600 max-w-2xl">
              Replace traditional keys with intelligent security solutions that
              improve operational efficiency, accountability, and facility
              protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Industries We Serve
          </h2>

          <p className="text-slate-600 max-w-2xl">
            Our access control solutions are customized to meet the operational
            and security requirements of different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition"
            >
              <Building2 className="w-8 h-8 text-blue-600 mb-4" />

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {industry.name}
              </h3>

              <p className="text-slate-600 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ApproachSection />
      <CTA />
      <Footer />
    </main>
  );
}