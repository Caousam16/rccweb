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
} from "lucide-react";

export default function WirelessAccessPointPage() {

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Ultra-Fast & Seamless Roaming",
      description:
        "Maintain uninterrupted connectivity as users move across offices, floors, or campus buildings.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Enterprise-Grade Security",
      description:
        "Protect your network with WPA3 encryption, secure authentication, guest isolation, and network segmentation.",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: "High-Density Performance",
      description:
        "Support hundreds of simultaneous wireless devices without sacrificing speed or reliability.",
    },
    {
      icon: <Radio className="w-8 h-8 text-blue-600" />,
      title: "Complete Wireless Coverage",
      description:
        "Professional RF planning eliminates dead zones while optimizing roaming and signal quality.",
    },
  ];

  const industries = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Corporate Offices",
      description:
        "Reliable wireless infrastructure for hybrid workspaces, conference rooms, and guest access.",
    },
    {
      icon: <Hospital className="w-6 h-6 text-blue-600" />,
      title: "Healthcare",
      description:
        "Secure wireless connectivity for medical devices, electronic health records, and clinical mobility.",
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      title: "Warehouses",
      description:
        "Continuous connectivity for barcode scanners, inventory systems, IoT devices, and automation.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Education",
      description:
        "High-capacity Wi-Fi designed for classrooms, campuses, dormitories, and learning spaces.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-blue-600" />,
      title: "Retail & Hospitality",
      description:
        "Fast, secure wireless networks for POS systems, guest Wi-Fi, and operational devices.",
    },
  ];

  const technologies = [
    {
      name: "Wi-Fi 6 / Wi-Fi 6E / Wi-Fi 7",
      detail:
        "Next-generation wireless technology delivering faster speeds, lower latency, and higher device capacity.",
    },
    {
      name: "Power over Ethernet (PoE)",
      detail:
        "Simplified deployments using a single Ethernet cable for both power and network connectivity.",
    },
    {
      name: "Cloud Network Management",
      detail:
        "Centralized monitoring and administration through platforms such as Cisco Meraki, Aruba Central, and UniFi.",
    },
    {
      name: "WPA3 Security",
      detail:
        "Modern encryption with enterprise authentication and secure access control.",
    },
    {
      name: "Beamforming Technology",
      detail:
        "Intelligent wireless optimization that directs signal strength toward connected devices.",
    },
    {
      name: "RF Site Surveys",
      detail:
        "Predictive planning and post-installation validation to maximize wireless coverage and performance.",
    },
  ];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-flex rounded-full border border-blue-700 bg-blue-900/40 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-blue-200">
            Enterprise Wireless Access Point Solutions
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Enterprise Wi-Fi That Delivers Speed, Security & Reliable Coverage
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            We design, install, and manage enterprise-grade Wireless Access
            Point (WAP) solutions that eliminate dead zones, improve network
            performance, and keep your business securely connected.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Schedule a Site Survey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              Why Upgrade Your Wireless Network?
            </h2>

            <p className="mt-4 text-slate-600">
              Enterprise wireless infrastructure provides consistent
              performance, enhanced security, and the scalability modern
              organizations require.
            </p>
          </div>

          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-5">{item.icon}</div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              Wireless Solutions for Every Industry
            </h2>

            <p className="mt-4 text-slate-600">
              We build wireless infrastructures tailored to the operational
              requirements of different industries.
            </p>
          </div>

          <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-xl border bg-white p-6 transition hover:border-blue-500"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  {industry.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              Technologies We Deploy
            </h2>

            <p className="mt-4 text-slate-600">
              We utilize industry-leading wireless technologies to ensure
              exceptional coverage, security, and scalability.
            </p>
          </div>

          <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">{tech.name}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tech.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ApproachSection />
      <CTA />
      <Footer />
    </div>
  );
}