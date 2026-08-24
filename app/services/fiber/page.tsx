"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/CTA";
import { NetworkBackground } from "@/components/NetworkBackground";
import ApproachSection from "@/components/ApproachSection";

import {
  Network,
  Eye,
  Hammer,
  HardHat,
  Cable,
  Activity,
  Wrench,
  ShieldAlert,
  FileText,
  Briefcase,
  Database,
  Building,
} from "lucide-react";

const categories = [
  { id: "all", name: "All Services" },
  { id: "planning", name: "Planning & Engineering" },
  { id: "deployment", name: "Deployment & Construction" },
  { id: "maintenance", name: "Maintenance & Operations" },
  { id: "solutions", name: "Enterprise Solutions" },
];

const servicesData = [
  {
    title: "Network Design",
    cat: "planning",
    icon: Network,
    desc: "High-level and low-level architectural mapping for resilient fiber topography.",
  },
  {
    title: "Site Survey",
    cat: "planning",
    icon: Eye,
    desc: "On-site physical and geographical assessments to optimize routing and safety.",
  },
  {
    title: "Fiber Optic Installation",
    cat: "deployment",
    icon: Cable,
    desc: "Aerial and underground cable pulling, blowing, and placement.",
  },
  {
    title: "Fiber Optic Splicing",
    cat: "deployment",
    icon: Cable,
    desc: "Precision fusion splicing for single-mode and multi-mode networks.",
  },
  {
    title: "Fiber Optic Termination",
    cat: "deployment",
    icon: Cable,
    desc: "Patch panel setups, pigtail terminations, and connector installations.",
  },
  {
    title: "Fiber Testing & Certification",
    cat: "deployment",
    icon: Activity,
    desc: "Rigorous OTDR and Tier 1/2 insertion loss testing with compliance reports.",
  },
  {
    title: "Network Commissioning",
    cat: "deployment",
    icon: HardHat,
    desc: "Final verification and system boot-up to ensure optimal operational readiness.",
  },
  {
    title: "Network Integration",
    cat: "solutions",
    icon: Network,
    desc: "Seamlessly connecting new fiber infrastructure into existing legacy active networks.",
  },
  {
    title: "Preventive Maintenance",
    cat: "maintenance",
    icon: Wrench,
    desc: "Scheduled inspections, cleaning, and degradation tracking to prevent outages.",
  },
  {
    title: "Corrective Maintenance",
    cat: "maintenance",
    icon: Wrench,
    desc: "Rapid faulty hardware replacement and reactive system tuning.",
  },
  {
    title: "Network Troubleshooting",
    cat: "maintenance",
    icon: Activity,
    desc: "Advanced fault localization using specialized OTDR and telemetry equipment.",
  },
  {
    title: "Fiber Repair & Restoration",
    cat: "maintenance",
    icon: Cable,
    desc: "Emergency section replacements and cable re-splicing post-damage.",
  },
  {
    title: "Network Upgrades",
    cat: "solutions",
    icon: Network,
    desc: "Transitioning legacy lines to high-bandwidth capabilities (DWDM, 100G+).",
  },
  {
    title: "Network Expansion",
    cat: "solutions",
    icon: Building,
    desc: "Scalable footprint extensions to bring new nodes and facilities online.",
  },
  {
    title: "Infrastructure Relocation",
    cat: "deployment",
    icon: Hammer,
    desc: "Safe rerouting of existing networks due to municipal or commercial construction.",
  },
  {
    title: "Emergency Response",
    cat: "maintenance",
    icon: ShieldAlert,
    desc: "24/7 SLA-backed rapid deployment teams for critical fiber cut restorations.",
  },
  {
    title: "Project Management",
    cat: "planning",
    icon: Briefcase,
    desc: "End-to-end oversight ensuring on-time, in-scope, and under-budget delivery.",
  },
  {
    title: "Documentation & As-Built Drawings",
    cat: "planning",
    icon: FileText,
    desc: "Comprehensive GIS mapping, CAD files, and actual-build schematics.",
  },
  {
    title: "Quality Assurance & Testing",
    cat: "planning",
    icon: Activity,
    desc: "Strict adherence to international telecommunication standards (ITU/TIA).",
  },
  {
    title: "Asset Management",
    cat: "solutions",
    icon: Database,
    desc: "Lifecycle logging, auditing, and optimization of physical dark & lit fiber assets.",
  },
  {
    title: "Technical Consulting",
    cat: "planning",
    icon: Briefcase,
    desc: "Strategic advice on network topology, technology selection, and ROI analysis.",
  },
  {
    title: "Managed Fiber Services",
    cat: "solutions",
    icon: Network,
    desc: "Fully outsourced dark fiber leasing, monitoring, and operations management.",
  },
  {
    title: "Data Center Fiber Solutions",
    cat: "solutions",
    icon: Database,
    desc: "Ultra-low latency, high-density structured cabling inside the data center.",
  },
  {
    title: "Enterprise Network Solutions",
    cat: "solutions",
    icon: Building,
    desc: "Dedicated internet access (DIA) and private networks for large enterprises.",
  },
  {
    title: "FTTH Deployment",
    cat: "solutions",
    icon: Building,
    desc: "Mass-scale Fiber-to-the-Home rollouts for developers and ISPs.",
  },
  {
    title: "OSP (Outside Plant) Services",
    cat: "deployment",
    icon: HardHat,
    desc: "Robust external engineering from central office to customer premises.",
  },
  {
    title: "ISP (Inside Plant) Services",
    cat: "deployment",
    icon: Building,
    desc: "Internal backbone, riser cabling, and telecom room terminations.",
  },
  {
    title: "Turnkey Fiber Optic Solutions",
    cat: "solutions",
    icon: Briefcase,
    desc: "Complete EPC (Engineering, Procurement, Construction) packages.",
  },
];

const gallery = [
  {
    title: "Fiber Optic Installation",
    image: "/services/fiber/fiber-installation.png",
  },
  {
    title: "Fusion Splicing",
    image: "/services/fiber/fusion-splicing.png",
  },
  {
    title: "OTDR Testing & Certification",
    image: "/services/fiber/otdr-testing.png",
  },
  {
    title: "Outside Plant Construction",
    image: "/services/fiber/osp-construction.png",
  },
  {
    title: "Data Center Fiber Cabling",
    image: "/services/fiber/data-center-fiber.png",
  },
  {
    title: "FTTH Deployment",
    image: "/services/fiber/ftth-deployment.png",
  },
];

export default function FiberServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.cat === activeTab);

  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 text-slate-900 min-h-[80vh] flex items-center relative overflow-hidden border-b border-slate-200">
          <NetworkBackground
                    nodeCount={50}
                    nodeColorRgb="37, 99, 235"
                    pulseColorRgb="29, 78, 216"
                  />

          <div className="max-w-7xl mx-auto px-6 py-28 text-center">
            <span className="uppercase tracking-widest text-indigo-600 font-semibold text-sm">
              Carrier-Grade Telecommunications
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
              End-to-End Fiber Optic Infrastructure
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
              From network planning and engineering to deployment, maintenance, and managed fiber operations, we deliver enterprise-grade optical infrastructure for carriers, government agencies, utilities, and businesses.
            </p>

            
          </div>
  
        </section>

        {/* Categories / Services Filters */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-5 py-2 transition font-medium text-sm shadow-sm ${
                  activeTab === cat.id
                    ? "bg-indigo-600 text-white shadow-indigo-100"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    layout
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -6 }}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>

                      <h3 className="font-bold text-xl mb-3 text-slate-900">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>
        
        {/* Project Gallery / Image Showcase */}
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proven Field Deployments</h2>
            <p className="text-slate-600 mt-2">Real-world optical infrastructure installations completed by our teams.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.title}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 cursor-pointer shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
              Professional Fiber Optic Services for Enterprise Networks
            </h2>

            <div className="mt-8 space-y-6 text-slate-600 leading-8">
              <p>
                We provide complete fiber optic engineering, deployment, and maintenance services for telecommunications providers, internet service providers (ISPs), government agencies, utilities, data centers, commercial buildings, industrial facilities, and enterprise organizations. Our engineers design, build, test, certify, and maintain high-performance optical networks that deliver reliable connectivity and long-term scalability.
              </p>

              <p>
                Our capabilities include network design, route planning, site surveys, outside plant (OSP) construction, inside plant (ISP) installation, fusion splicing, fiber termination, OTDR testing, commissioning, preventive maintenance, emergency restoration, FTTH deployment, network upgrades, infrastructure relocation, and turnkey EPC fiber optic projects.
              </p>

              <p>
                Every project follows international telecommunications standards, industry best practices, and rigorous quality assurance procedures to ensure maximum uptime, low optical loss, and future-ready infrastructure. Whether you're expanding an existing backbone or deploying a completely new fiber network, our experienced engineering team delivers dependable solutions from planning through long-term operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-14">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                  Industries We Serve
                </h3>
                <ul className="space-y-2 text-slate-600 list-disc list-inside">
                  <li>Telecommunications Carriers</li>
                  <li>Internet Service Providers (ISPs)</li>
                  <li>Government Infrastructure</li>
                  <li>Utility Companies</li>
                  <li>Data Centers</li>
                  <li>Commercial Buildings</li>
                  <li>Industrial Facilities</li>
                  <li>Property Developers</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                  Why Choose Our Fiber Engineering Team
                </h3>
                <ul className="space-y-2 text-slate-600 list-disc list-inside">
                  <li>End-to-end turnkey project delivery</li>
                  <li>Certified fiber optic technicians</li>
                  <li>OTDR & Tier 1/2 certification testing</li>
                  <li>OSP and ISP specialists</li>
                  <li>24/7 emergency restoration services</li>
                  <li>Enterprise-grade documentation and reporting</li>
                  <li>Scalable network architecture</li>
                  <li>Standards-compliant installations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <ApproachSection />

        <CTA />
      </main>

      <Footer />
    </>
  );
}