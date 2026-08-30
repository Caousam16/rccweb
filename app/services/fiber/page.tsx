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
  ArrowRight,
  Zap,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const categories = [
  { id: "all", name: "ALL SERVICES" },
  { id: "planning", name: "PLANNING & ENGINEERING" },
  { id: "deployment", name: "DEPLOYMENT & CONSTRUCTION" },
  { id: "maintenance", name: "MAINTENANCE & OPERATIONS" },
  { id: "solutions", name: "ENTERPRISE SOLUTIONS" },
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
    title: "FIBER OPTIC INSTALLATION",
    image: "/services/fiber/fiber-installation.png",
    code: "FIELD-01",
  },
  {
    title: "FUSION SPLICING",
    image: "/services/fiber/fusion-splicing.png",
    code: "FIELD-02",
  },
  {
    title: "OTDR TESTING & CERTIFICATION",
    image: "/services/fiber/otdr-testing.png",
    code: "FIELD-03",
  },
  {
    title: "OUTSIDE PLANT CONSTRUCTION",
    image: "/services/fiber/osp-construction.png",
    code: "FIELD-04",
  },
  {
    title: "DATA CENTER FIBER CABLING",
    image: "/services/fiber/data-center-fiber.png",
    code: "FIELD-05",
  },
  {
    title: "FTTH DEPLOYMENT",
    image: "/services/fiber/ftth-deployment.png",
    code: "FIELD-06",
  },
];

const industries = [
  "Telecommunications Carriers",
  "Internet Service Providers (ISPs)",
  "Government Infrastructure",
  "Utility Companies",
  "Data Centers",
  "Commercial Buildings",
  "Industrial Facilities",
  "Property Developers",
];

const advantages = [
  "End-to-end turnkey project delivery",
  "Certified fiber optic technicians",
  "OTDR & Tier 1/2 certification testing",
  "OSP and ISP specialists",
  "24/7 emergency restoration services",
  "Enterprise-grade documentation and reporting",
  "Scalable network architecture",
  "Standards-compliant installations",
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

      <main className="bg-white text-blue-95 font-sans selection:bg-blue-600 selection:text-white">
        {/* Hero Section */}
        <section className="relative bg-white border-b-4 border-blue-600 overflow-hidden min-h-[85vh] flex items-center">
          {/* Stark Blue Architectural Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052ff15_1px,transparent_1px),linear-gradient(to_bottom,#0052ff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <NetworkBackground
            nodeCount={65}
            nodeColorRgb="0, 82, 255"
            pulseColorRgb="37, 99, 235"
          />

          {/* Bold Visual Accent Blocks */}
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-blue-600/10 border-4 border-blue-600 pointer-events-none hidden lg:block" />
          <div className="absolute bottom-0 left-0 w-32 h-2 bg-blue-600" />

          <div className="relative max-w-7xl mx-auto px-6 py-24 z-10 w-full">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white font-black text-xs px-4 py-1.5 uppercase tracking-widest border-2 border-blue-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-4 h-4 fill-white" /> CARRIER-GRADE TELECOMMUNICATIONS
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 uppercase tracking-tight leading-[0.95] max-w-5xl">
              END-TO-END <span className="text-blue-600 bg-blue-50 px-2 border-b-4 border-blue-600">FIBER OPTIC</span> INFRASTRUCTURE
            </h1>

            <p className="mt-8 max-w-3xl text-slate-800 text-lg md:text-xl font-bold leading-relaxed border-l-4 border-blue-600 pl-6 bg-slate-50 py-3">
              From network planning and engineering to deployment, maintenance, and managed fiber operations, we deliver high-velocity, high-capacity optical systems engineered for zero failure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-sm tracking-wider px-8 py-4 border-2 border-slate-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
              >
                EXPLORE CAPABILITIES <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-slate-100 text-slate-950 font-black uppercase text-sm tracking-wider px-8 py-4 border-2 border-slate-950 shadow-[6px_6px_0px_0px_rgba(0,82,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                REQUEST SYSTEM AUDIT
              </a>
            </div>
          </div>
        </section>

        {/* Services Filters Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <div className="border-b-4 border-slate-950 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-blue-600 font-black tracking-widest text-sm uppercase">CATALOGUE</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight">ENGINEERING SERVICES</h2>
            </div>
            <p className="text-slate-700 font-bold max-w-md text-sm uppercase">
              SELECT A CATEGORY TO FILTER OUR INFRASTRUCTURE CAPABILITIES.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 font-black text-xs uppercase tracking-wider transition-all border-2 border-slate-950 ${
                  activeTab === cat.id
                    ? "bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                    : "bg-white text-slate-950 hover:bg-blue-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    layout
                    key={service.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="group border-2 border-slate-950 bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,82,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 bg-blue-600 border-2 border-slate-950 flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-slate-950 transition-colors">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="font-black text-xl mb-3 text-slate-950 uppercase tracking-tight border-b-2 border-slate-100 pb-2">
                        {service.title}
                      </h3>

                      <p className="text-slate-700 font-medium text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t-2 border-slate-950 flex justify-between items-center text-xs font-black uppercase text-blue-600">
                      <span>SPECIFICATIONS</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Project Gallery / Image Showcase */}
        <section className="border-y-4 border-slate-950 bg-blue-50 py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-l-8 border-blue-600 pl-6 mb-16">
              <span className="text-blue-600 font-black tracking-widest text-sm uppercase">FIELD PROOF</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tight">PROVEN DEPLOYMENTS</h2>
              <p className="text-slate-800 font-bold uppercase text-sm mt-2">
                Real-world optical infrastructure installations completed by our tactical engineering teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item) => (
                <div
                  key={item.title}
                  className="group border-2 border-slate-950 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
                >
                  <div className="bg-slate-950 text-white font-black text-xs px-3 py-1 uppercase tracking-widest border-b-2 border-slate-950 flex justify-between items-center">
                    <span>{item.code}</span>
                    <span className="w-2 h-2 bg-blue-500 animate-pulse" />
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-slate-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-5 bg-white">
                    <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO / Technical Capabilities Section */}
        <section className="bg-white py-24 border-b-4 border-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="bg-blue-600 text-white font-black text-xs px-3 py-1 uppercase tracking-widest">ENTERPRISE FIBER</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tight mt-4">
                PROFESSIONAL OPTICAL SERVICES FOR MISSION-CRITICAL NETWORKS
              </h2>
            </div>

            <div className="border-2 border-slate-950 p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,82,255,1)] bg-white mb-16">
              <div className="space-y-6 text-slate-900 font-medium leading-relaxed text-base md:text-lg">
                <p className="border-l-4 border-slate-950 pl-4">
                  We provide complete fiber optic engineering, deployment, and maintenance services for telecommunications providers, internet service providers (ISPs), government agencies, utilities, data centers, commercial buildings, industrial facilities, and enterprise organizations.
                </p>
                <p>
                  Our capabilities include network design, route planning, site surveys, outside plant (OSP) construction, inside plant (ISP) installation, fusion splicing, fiber termination, OTDR testing, commissioning, preventive maintenance, emergency restoration, FTTH deployment, network upgrades, infrastructure relocation, and turnkey EPC fiber optic projects.
                </p>
                <p className="font-bold text-slate-950 uppercase text-sm bg-blue-50 p-4 border-2 border-blue-600">
                  EVERY PROJECT FOLLOWS INTERNATIONAL TELECOMMUNICATIONS STANDARDS (ITU/TIA) AND RIGOROUS QA/QC PROCEDURES TO GUARANTEE MAXIMUM UPTIME AND LOW OPTICAL LOSS.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-slate-950 p-8 bg-blue-600 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                  <Building className="w-7 h-7 stroke-[2.5]" /> INDUSTRIES WE SERVE
                </h3>
                <ul className="grid gap-3">
                  {industries.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-sm uppercase bg-blue-700/60 p-3 border border-blue-400/30">
                      <ChevronRight className="w-4 h-4 text-white stroke-[3]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-2 border-slate-950 p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,82,255,1)]">
                <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-blue-600 stroke-[2.5]" /> WHY CHOOSE OUR TEAM
                </h3>
                <ul className="grid gap-3">
                  {advantages.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-sm uppercase text-slate-950 bg-slate-50 p-3 border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 stroke-[2.5]" />
                      {item}
                    </li>
                  ))}
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