
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import  ApproachSection  from "@/components/ApproachSection"

const benefits = [
  {
    title: "High-Quality Video Delivery",
    description:
      "Deliver crystal-clear SD, HD, and 4K channels with minimal buffering and optimized bandwidth usage.",
  },
  {
    title: "Reliable Network Performance",
    description:
      "Built with redundancy and monitoring to ensure uninterrupted television and streaming services.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Expand services easily as subscriber demand grows without major infrastructure changes.",
  },
  {
    title: "Centralized Management",
    description:
      "Manage channels, users, billing, and network devices from a single platform.",
  },
];

const industries = [
  "Hotels & Resorts",
  "Residential Communities",
  "Condominiums",
  "Hospitals",
  "Schools & Universities",
  "Government Facilities",
  "Commercial Buildings",
  "Internet Service Providers",
];



const technologies = [
  "IPTV Middleware",
  "CATV Headend Systems",
  "Digital Video Encoders",
  "EPG & Channel Management",
  "Fiber Optic Networks",
  "GPON Infrastructure",
  "Content Delivery Networks (CDN)",
  "Multicast & Unicast Streaming",
  "Linux Servers",
  "NGINX",
  "FFmpeg",
  "VLC",
  "MPEG-TS",
  "HLS",
  "RTSP",
  "RTMP",
  "UDP/IP",
  "MikroTik",
  "Cisco",
];

export default function CATVIPTVPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-slate-950 via-slate-900 to-blue-900 text-white min-h-[85vh] flex items-center relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
          <div className="max-w-3xl">
            <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400">
              CATV & IPTV Solutions
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Modern CATV & IPTV Services for Reliable Digital Entertainment
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              We design, deploy, and maintain enterprise-grade CATV and IPTV
              solutions that deliver high-quality television services across
              hotels, residential communities, campuses, hospitals, and
              commercial establishments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Benefits</h2>
            <p className="mt-4 text-gray-600">
              Improve content delivery, increase service reliability, and build
              a scalable television distribution platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Industries We Serve</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-lg border bg-white p-6 text-center font-medium shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Technologies Used</h2>
            <p className="mt-4 text-slate-300">
              We utilize modern broadcasting, networking, and streaming
              technologies to build secure, scalable, and high-performance
              television services.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm"
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