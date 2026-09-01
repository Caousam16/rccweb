import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import ApproachSection from "@/components/ApproachSection"
import { CheckCircle2, PhoneCall, Zap, ShieldCheck, Cpu, ArrowRight, Layers, PhoneIncoming, Building2 } from "lucide-react"

const benefits = [
  { text: "Improve internal and external communication.", icon: PhoneCall },
  { text: "Reduce call costs with VoIP and SIP trunking.", icon: Zap },
  { text: "Professional call handling with IVR and auto-attendant.", icon: PhoneIncoming },
  { text: "Scalable solution that grows with your business.", icon: Layers },
  { text: "Reliable call routing and failover options.", icon: ShieldCheck },
  { text: "Remote extension support for hybrid teams.", icon: Cpu },
];

const industries = [
  "Corporate Offices",
  "BPO & Call Centers",
  "Hotels & Hospitality",
  "Healthcare Facilities",
  "Retail & Shopping Centers",
  "Educational Institutions",
  "Manufacturing Plants",
  "Government Offices",
];

const technologies = [
  "IP-PBX Systems",
  "VoIP",
  "SIP Trunking",
  "Hybrid PBX",
  "IP Phones",
  "Softphones",
  "Call Recording",
  "IVR (Interactive Voice Response)",
  "CRM Integration",
];

export default function PABXSystemPage() {
  return (
    <div className="bg-white text-blue-950 font-sans selection:bg-blue-600 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-28 border-b-4 border-blue-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052ff10_1px,transparent_1px),linear-gradient(to_bottom,#0052ff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-none border-2 border-blue-600 bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
              <Zap className="h-4 w-4 fill-blue-600" />
              Communication Solutions
            </div>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-blue-950 uppercase sm:text-7xl leading-none">
              High-Impact <span className="text-blue-600 underline decoration-blue-500 decoration-8 underline-offset-8">PABX Systems</span> & Infrastructure
            </h1>

            <p className="mt-8 text-xl font-medium text-slate-700 max-w-2xl leading-relaxed">
              Modernize your enterprise communications with zero latency. Enterprise voice connectivity, intelligent call routing, and scalable VoIP integrations engineered for maximum reliability.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-3 bg-blue-600 px-8 py-4 text-lg font-black text-white uppercase tracking-wider rounded-none border-2 border-blue-950 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all"
              >
                Explore Systems
                <ArrowRight className="h-5 w-5 stroke-[3]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-blue-50/50 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 border-2 border-blue-950 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)] flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-blue-950 uppercase tracking-tight leading-tight mb-6">
                  Transform Communications with Intelligent PABX Architecture
                </h2>
                <p className="text-slate-700 text-lg font-medium leading-relaxed mb-8">
                  A Private Automatic Branch Exchange (PABX) serves as the high-speed engine of your organization’s voice network. Modern PABX systems go beyond basic routing—delivering unified communications, deep CRM integrations, and total mobile accessibility.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t-2 border-blue-100">
                {[
                  "Supports On-Premises, Hosted Cloud, or Hybrid architectures",
                  "Seamless CRM integration (Salesforce, HubSpot, Zendesk)",
                  "Advanced IVR and smart queue routing",
                  "End-to-end security encryption for all voice traffic"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-blue-50/80 p-3 border border-blue-200">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 stroke-[2.5]" />
                    <span className="text-sm font-bold text-blue-950">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex-1 bg-blue-600 text-white p-8 border-2 border-blue-950 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                <div className="bg-white/10 text-white font-mono text-xs font-bold px-3 py-1 inline-block mb-4 border border-white/20">
                  FEATURE 01
                </div>
                <h3 className="font-black text-2xl uppercase tracking-wider mb-3">
                  Hybrid PABX Readiness
                </h3>
                <p className="text-blue-100 font-medium leading-relaxed">
                  Bridge traditional legacy trunks directly into modern SIP and VoIP protocols without ripping and replacing your operational hardware.
                </p>
              </div>

              <div className="flex-1 bg-white text-blue-950 p-8 border-2 border-blue-950 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]">
                <div className="bg-blue-100 text-blue-600 font-mono text-xs font-bold px-3 py-1 inline-block mb-4 border border-blue-300">
                  FEATURE 02
                </div>
                <h3 className="font-black text-2xl uppercase tracking-wider mb-3">
                  Centralized Console
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Command users, extension mapping, global call logs, and IVR routing rules across enterprise locations from a single dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-b-2 border-blue-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase text-blue-950 tracking-tight sm:text-5xl">
              System Benefits
            </h2>
            <div className="h-2 w-24 bg-blue-600 mt-4 mb-6" />
            <p className="text-lg font-medium text-slate-700">
              Enterprise PABX deployments engineered to increase productivity, improve operational handling, and lower communication overhead.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white border-2 border-blue-950 p-8 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] hover:-translate-y-1 transition-all"
                >
                  <div className="mb-6 inline-block bg-blue-600 p-4 text-white border-2 border-blue-950 group-hover:bg-blue-950 transition-colors">
                    <Icon className="h-8 w-8 stroke-[2.5]" />
                  </div>
                  <p className="text-lg font-bold text-blue-950 leading-snug">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-blue-950 py-24 text-white border-b-4 border-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase">Coverage</span>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg font-medium text-blue-200">
              Scalable, high-availability telephony solutions customized for sector-specific communication requirements.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-4 bg-white/5 border-2 border-blue-500/30 p-6 hover:border-blue-400 hover:bg-blue-900/50 transition-all group"
              >
                <Building2 className="h-6 w-6 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="font-extrabold text-lg uppercase tracking-wider text-white">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white py-24 border-b-2 border-blue-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase text-blue-950 tracking-tight sm:text-5xl">
              Technologies Deployed
            </h2>
            <div className="h-2 w-24 bg-blue-600 mt-4 mb-6" />
            <p className="text-lg font-medium text-slate-700">
              Deploying proven hardware standards and modern VoIP protocols for reliable performance.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-blue-50 border-2 border-blue-950 px-6 py-3 font-extrabold text-blue-950 uppercase tracking-wide text-sm shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Sections */}
      <ApproachSection />
      <CTA />
      <Footer />
    </div>
  )
}