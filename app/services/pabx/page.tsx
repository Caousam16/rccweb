import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import  ApproachSection  from "@/components/ApproachSection"
import {CheckCircle2} from "lucide-react"


const benefits = [
  "Improve internal and external communication.",
  "Reduce call costs with VoIP and SIP trunking.",
  "Professional call handling with IVR and auto-attendant.",
  "Scalable solution that grows with your business.",
  "Reliable call routing and failover options.",
  "Remote extension support for hybrid teams.",
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
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="rounded-full bg-blue-600/20 px-4 py-1 text-sm font-medium text-blue-300">
              Communication Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Professional PABX System Installation & Support
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Modernize your business communications with reliable PABX systems
              that provide seamless voice connectivity, intelligent call
              routing, VoIP integration, and scalable solutions for businesses
              of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
        <section id="overview" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Transform Internal & External Communications with Intelligent PABX
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  A Private Automatic Branch Exchange (PABX) serves as the brain of your organization’s voice network. Modern PABX systems go beyond basic routing—offering unified communications, CRM integration, and mobile accessibility.
                </p>
                <div className="space-y-3">
                  {[
                    "Supports On-Premises, Hosted Cloud, or Hybrid architectures",
                    "Seamless CRM integration (Salesforce, HubSpot, Zendesk)",
                    "Advanced Interactive Voice Response (IVR) and smart queues",
                    "End-to-end security encryption for voice traffic"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 shadow-inner">
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Hybrid PABX Readiness</h3>
                    <p className="text-slate-600 text-sm">Bridge traditional legacy trunks with modern SIP & VoIP protocols without throwing away existing hardware.</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Centralized Management Console</h3>
                    <p className="text-slate-600 text-sm">Manage users, extension mapping, call logs, and IVR routing across multiple global locations from one interface.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Benefits</h2>
            <p className="mt-4 text-gray-600">
              A professionally installed PABX system improves productivity,
              customer service, and communication efficiency throughout your
              organization.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="mb-4 text-2xl">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Industries We Serve</h2>
            <p className="mt-4 text-gray-600">
              Our PABX solutions are designed to support organizations across
              various industries with reliable and scalable communication
              systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Technologies We Use</h2>
            <p className="mt-4 text-slate-300">
              We deploy industry-leading communication technologies to deliver
              secure, scalable, and high-performance business telephony
              solutions.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

    
      <ApproachSection />

      <CTA />

      <Footer />
    </>
  );
}