"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/CTA"

const slideshowImages = [
  {
    url: "/projects/cctvprojects.png",
    title: "Enterprise CCTV & Surveillance Networks",
    category: "Surveillance",
    description: "High-definition perimeter monitoring, analytics pipelines, and secure control center layouts.",
  },
  {
    url: "/projects/fdasproject.png",
    title: "Fire Detection & Alarm Systems (FDAS)",
    category: "Safety Systems",
    description: "Intelligent automated alert systems, smart circuitry integration, and facility safety conformance.",
  },
  {
    url: "/projects/pabxproject.png",
    title: "Private Automatic Branch Exchange (PABX)",
    category: "Telephony",
    description: "Unified business communication infrastructure utilizing modern IP-PABX and VoIP technologies.",
  },
  {
    url: "/projects/structuredprojects.png",
    title: "Structured Cabling Systems",
    category: "Cabling",
    description: "Robust physical network backbones, high-density patch panels, and scalable data center cabling architectures.",
  },
  {
    url: "/projects/ispproject.png",
    title: "Fiber Optic Network Deployments",
    category: "Fiber & ISP",
    description: "High-speed backbone installations requiring precision fusion splicing and rigid OTDR performance certification standards.",
  },
  {
    url: "/projects/paproject.png",
    title: "Public Address (PA) Systems",
    category: "Acoustics",
    description: "Public Address and Voice Alarm (PAVA) architectures engineered for crystal-clear commercial paging.",
  },
  {
    url: "/projects/accessproject.png",
    title: "Access Control Systems",
    category: "Perimeter Security",
    description: "Zero-trust perimeter security implementations leveraging biometrics and real-time access audit logging.",
  },
  {
    url: "/projects/wapprojects.png",
    title: "Wireless Access Points",
    category: "Wireless",
    description: "High-capacity wireless infrastructure maximizing coverage via predictive RF heatmapping.",
  },
];

const featuredServices = [
  {
    code: "SEC-01",
    title: "CCTV & Command Centers",
    description: "Deploying high-throughput IP cameras with edge analytics, thermal sensors, and central monitoring stations.",
  },
  {
    code: "CAB-02",
    title: "Cat6A / Cat7 & Fiber Backbones",
    description: "Precision-engineered physical cabling networks with structured patch bays, labeling, and OTDR testing.",
  },
  {
    code: "ACC-03",
    title: "Biometric & Turnstile Gateways",
    description: "Multi-factor authentication locks, license plate recognition (LPR), and RFID entry control infrastructure.",
  },
  {
    code: "SAF-04",
    title: "Addressable FDAS & PA Systems",
    description: "Life-safety certified addressable smoke detection, integrated alarm networks, and zone-specific audio paging.",
  },
];

export default function ProjectsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = ["All", "Cabling", "Surveillance", "Fiber & ISP", "Safety Systems", "Wireless"];

  const filteredProjects = activeCategory === "All"
    ? slideshowImages
    : slideshowImages.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Header />

      {/* ================= SECTION 1: LOUD SHARP HERO ================= */}
      <section className="relative bg-blue-600 text-white border-b-8 border-slate-900 overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Geometric Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-block bg-slate-900 text-white font-mono text-xs font-black uppercase tracking-widest px-4 py-2 mb-6 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            // Mission Critical Infrastructure
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Engineered <br />
            <span className="bg-white text-blue-600 px-3 py-1 inline-block mt-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              Dominance.
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl font-bold text-blue-100 leading-snug border-l-4 border-white pl-4 mb-12">
            Enterprise CCTV, mission-critical fiber optic backbones, structured cabling, and smart auxiliary security architectures deployed nationwide.
          </p>

          {/* Industrial Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-white text-slate-900 p-6 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              <div className="text-5xl font-black tracking-tight text-blue-600">500+</div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mt-2">
                Deployments Finished
              </div>
            </div>
            <div className="bg-white text-slate-900 p-6 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              <div className="text-5xl font-black tracking-tight text-blue-600">9.7</div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mt-2">
                Clients Satisfied (Avg. Rating)
              </div>
            </div>
            <div className="bg-white text-slate-900 p-6 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              <div className="text-5xl font-black tracking-tight text-blue-600">15+</div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mt-2">
                Years Field Expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: PURE IMAGE SLIDESHOW ================= */}
      <section className="py-20 bg-slate-100 border-b-8 border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-blue-600 font-mono font-bold uppercase text-sm tracking-widest">// System Showcase</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Active Deployments</h2>
            </div>
            <div className="bg-blue-600 text-white font-mono font-bold px-4 py-2 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              SLIDE {currentImageIndex + 1} / {slideshowImages.length}
            </div>
          </div>

          {/* Clean Image Container */}
          <div className="border-4 border-slate-900 bg-white p-4 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
            <div className="relative aspect-[16/9] w-full bg-slate-200 border-2 border-slate-900 overflow-hidden">
              {slideshowImages.map((slide, index) => (
                <div
                  key={slide.url}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${slide.url})` }}
                />
              ))}
            </div>

            {/* Sharp Dot Controls */}
            <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t-2 border-slate-900">
              {slideshowImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-4 border-2 border-slate-900 transition-all ${
                    i === currentImageIndex
                      ? "w-10 bg-blue-600"
                      : "w-4 bg-white hover:bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE CAPABILITIES GRID ================= */}
      <section className="py-20 bg-white border-b-8 border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-blue-600 font-mono font-bold uppercase text-sm tracking-widest">// Technical Domains</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Core Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.code}
                className="bg-slate-50 border-4 border-slate-900 p-6 flex flex-col justify-between hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-50 transition-all shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
              >
                <div>
                  <div className="text-xs font-mono font-black text-blue-600 bg-blue-100 border border-blue-600 px-2 py-1 inline-block mb-4">
                    {service.code}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  );
}