import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import ApproachSection from "@/components/ApproachSection"

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
    <div className="bg-white text-blue-950 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white border-b-4 border-slate-900 overflow-hidden">
        {/* Full-bleed Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/services/catv-hero.jpg"
            alt="CATV & IPTV Background"
            className="w-full h-full object-cover contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block border-2 border-white bg-blue-950 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#ffffff]">
              CATV & IPTV Solutions
            </span>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
              Modern CATV & IPTV Services for{" "}
              <span className="bg-white text-blue-600 px-2 inline-block transform -rotate-1">
                Reliable
              </span>{" "}
              Digital Entertainment
            </h1>

            <p className="mt-8 text-xl font-bold leading-relaxed text-blue-100 max-w-2xl">
              We design, deploy, and maintain enterprise-grade CATV and IPTV
              solutions that deliver high-quality television services across
              hotels, residential communities, campuses, hospitals, and commercial
              establishments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white border-b-4 border-blue-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl border-l-8 border-blue-600 pl-6">
            <h2 className="text-5xl font-black uppercase tracking-tight text-blue-950">
              Benefits
            </h2>
            <p className="mt-2 text-xl font-bold text-blue-800 uppercase tracking-wide">
              Improve content delivery, increase service reliability, and build
              a scalable television distribution platform.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="relative bg-white border-4 border-blue-950 p-8 shadow-[8px_8px_0px_0px_#1e40af] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1e40af]"
              >
                <span className="text-4xl font-black text-blue-600">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-black uppercase text-blue-950 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 font-semibold text-blue-900 leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-blue-50 py-24 border-b-4 border-blue-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl font-black uppercase tracking-tight text-blue-950">
              Industries We Serve
            </h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white border-4 border-blue-950 p-6 text-center font-black text-lg uppercase text-blue-950 shadow-[6px_6px_0px_0px_#1e3a8a] transition-transform hover:bg-blue-600 hover:text-white"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-blue-950 py-24 text-white border-b-4 border-blue-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl border-l-8 border-white pl-6">
            <h2 className="text-5xl font-black uppercase tracking-tight text-white">
              Technologies Used
            </h2>
            <p className="mt-2 text-xl font-bold text-blue-200 uppercase tracking-wide">
              We utilize modern broadcasting, networking, and streaming
              technologies to build secure, scalable, and high-performance
              television services.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border-2 border-white bg-blue-600 px-6 py-3 text-base font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#ffffff] transition-all hover:bg-white hover:text-blue-950 hover:shadow-[4px_4px_0px_0px_#2563eb]"
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
    </div>
  );
}