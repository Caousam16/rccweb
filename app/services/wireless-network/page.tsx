// app/wireless-access-point/page.tsx

import Link from "next/link";
import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ApproachSection from "@/components/ApproachSection";
import { CTA } from "@/components/CTA";

import {
  ShieldCheck,
  Zap,
  Building2,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Factory,
  Radio,
  Layers,
  CheckCircle2,
  ArrowRight,
  Wifi,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function WirelessAccessPointPage() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Ultra-Fast & Seamless Roaming",
      description:
        "Maintain uninterrupted connectivity as users move across offices, floors, or campus buildings with zero handoff latency.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Enterprise-Grade Security",
      description:
        "Protect your network with WPA3 encryption, strict secure authentication, guest isolation, and micro-segmentation.",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "High-Density Performance",
      description:
        "Support hundreds of simultaneous high-bandwidth devices per access point without throughput degradation.",
    },
    {
      icon: <Radio className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Complete Wireless Coverage",
      description:
        "Professional RF predictive mapping completely eliminates dead zones while optimizing channel assignment and signal quality.",
    },
  ];

  const industries = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Corporate Offices",
      description:
        "Reliable wireless infrastructure for hybrid workspaces, high-density conference rooms, and isolated guest access.",
    },
    {
      icon: <Hospital className="w-6 h-6 text-blue-600" />,
      title: "Healthcare",
      description:
        "Mission-critical wireless connectivity for life-saving medical devices, mobile EHR access, and patient Wi-Fi.",
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      title: "Warehouses & Logistics",
      description:
        "Rugged, continuous connectivity for handheld barcode scanners, automated AGVs, and industrial IoT sensors.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Education",
      description:
        "Ultra-high capacity Wi-Fi engineered for dense lecture halls, digital learning labs, and sprawling campus dorms.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-blue-600" />,
      title: "Retail & Hospitality",
      description:
        "Always-on wireless networks powering fast POS terminals, inventory control, and engagement-driven guest Wi-Fi.",
    },
  ];

  const technologies = [
    {
      name: "Wi-Fi 6 / 6E / Wi-Fi 7",
      detail:
        "Next-generation tri-band spectrum architecture delivering multi-gigabit throughput and ultra-low latency.",
    },
    {
      name: "Power over Ethernet (PoE+ / PoE++)",
      detail:
        "Streamlined single-cable deployments delivering multi-gigabit data speeds alongside heavy power delivery.",
    },
    {
      name: "Cloud Network Management",
      detail:
        "Centralized Single-Pane-of-Glass monitoring via Cisco Meraki, Aruba Central, and Ubiquiti UniFi.",
    },
    {
      name: "WPA3 & Zero Trust Security",
      detail:
        "Modern cryptographic security paired with RADIUS, 802.1X enterprise authentication, and dynamic access policies.",
    },
    {
      name: "Beamforming & Smart Antennas",
      detail:
        "Intelligent signal routing that dynamically focuses RF energy directly toward targeted active devices.",
    },
    {
      name: "Predictive RF Site Surveys",
      detail:
        "Comprehensive heatmapping, interference auditing, and post-installation validation for zero-compromise coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-20 lg:pt-32 lg:pb-28 border-b-2 border-slate-900">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 filter contrast-125 saturate-50 scale-105"
          >
            <source src="/services/wap-hero.mp4" type="video/mp4" />
          </video>
          
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            

            {/* Sharp Bold Headline */}
            <h1 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl uppercase leading-none drop-shadow-sm">
              Enterprise <span className="text-blue-500 underline decoration-blue-500 decoration-8 underline-offset-8">Wi-Fi</span> Engineered For Speed.
            </h1>

            <p className="mt-8 max-w-3xl text-lg sm:text-xl font-medium leading-relaxed text-slate-300">
              We design, deploy, and optimize high-density, enterprise-grade Wireless Access Point (WAP) networks. Zero dead zones. Ironclad security. Maximum throughput.
            </p>

            {/* Sharp Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg px-9 py-5 border-2 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase tracking-wider"
              >
                <span>Schedule Site Survey</span>
                <ArrowRight className="h-6 w-6 stroke-[3]" />
              </Link>
              <a
                href="#technologies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-5 border-2 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all uppercase tracking-wider"
              >
                Explore Tech
              </a>
            </div>

            {/* Quick Specs Highlight Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl border-2 border-slate-900 bg-slate-900/90 p-4 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] backdrop-blur-md">
              {[
                { label: "STANDARD", val: "Wi-Fi 6E / 7 Ready" },
                { label: "UPTIME", val: "99.98% Target" },
                { label: "SECURITY", val: "WPA3 Enterprise" },
                { label: "DEPLOYMENT", val: "Zero-Touch Cloud" },
              ].map((spec, idx) => (
                <div key={idx} className="text-center p-3 border border-slate-800 bg-slate-950/80">
                  <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider">{spec.label}</div>
                  <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">{spec.val}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 relative border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 border border-blue-300">
              High Impact Performance
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
              Why Upgrade Your Wireless Infrastructure?
            </h2>
            <p className="mt-4 text-slate-700 font-medium max-w-2xl">
              Consumer Wi-Fi fails under load. Our enterprise wireless architectures deliver absolute stability, aggressive security controls, and high-density throughput.
            </p>
          </div>

          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 inline-block p-4 bg-blue-50 border-2 border-blue-600 shadow-[3px_3px_0px_0px_rgba(37,99,235,1)]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                  <span>Enterprise Grade</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 border border-blue-200">
                Tailored Environments
              </span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
                Architected For Every Sector
              </h2>
            </div>
            <p className="text-slate-600 font-medium max-w-md">
              Custom-engineered RF strategies designed to handle the exact structural and operational challenges of your industry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-white border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:bg-blue-600 hover:text-white group transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-slate-900 bg-blue-50 group-hover:bg-white transition-colors shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-white">{industry.title}</h3>
                </div>

                <p className="mt-5 text-sm font-medium leading-relaxed text-slate-600 group-hover:text-blue-50">
                  {industry.description}
                </p>
              </div>
            ))}

            {/* Sharp CTA Box inside Grid */}
            <div className="bg-slate-900 border-2 border-slate-900 p-8 text-white flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]">
              <div>
                <Wifi className="w-10 h-10 text-blue-400 mb-4 animate-pulse" />
                <h3 className="text-2xl font-black uppercase tracking-tight">Custom Facility?</h3>
                <p className="mt-2 text-sm text-slate-300 font-medium">
                  Need high-density outdoor coverage, harsh environment APs, or complex multi-building mesh bridge links?
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm px-5 py-3 border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wider"
              >
                <span>Talk To Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24 bg-slate-50 border-b-2 border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-white bg-blue-600 px-3 py-1 border border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              Next-Gen Tech
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
              Hardware & Standards We Deploy
            </h2>
            <p className="mt-4 text-slate-600 font-medium">
              We leverage cutting-edge hardware platforms and protocol standards to secure and accelerate your wireless communications.
            </p>
          </div>

          <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white border-2 border-slate-900 p-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] hover:border-blue-600 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-blue-600 text-white border border-slate-900 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg uppercase tracking-tight">{tech.name}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                      {tech.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Component Sections */}
      <div className="bg-white border-b-2 border-slate-900">
        <ApproachSection />
      </div>

      <CTA />

      <Footer />
    </div>
  );
}