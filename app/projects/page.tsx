"use client";

import React, { useState, useEffect, useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, ArrowRight, Shield, Layers } from "lucide-react";

// ============================
// TYPES & INTERFACES
// ============================
interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  services: string[];
}

interface Category {
  id: string;
  label: string;
}

// ============================
// STATIC DATA
// ============================
const categories: Category[] = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "hospitality", label: "Hospitality" },
];

const slideshowImages = [
  {
    url: "/projects/cctvprojects.png",
    title: "Enterprise CCTV & Surveillance Networks",
    description: "High-definition perimeter monitoring, AI analytics pipelines, and secure control center layouts.",
  },
  {
    url: "/projects/fdasproject.png",
    title: "Fire Detection & Alarm Systems (FDAS)",
    description: "Intelligent automated alert systems, smart circuitry integration, and facility safety conformance.",
  },
  {
    url: "/projects/pabxproject.png",
    title: "Private Automatic Branch Exchange (PABX)",
    description: "Unified business communication infrastructure utilizing modern IP-PABX and VoIP technologies to streamline call management, reduce overhead, and scale across offices.",
  },
  {
    url: "/projects/structuredprojects.png",
    title: "Structured Cabling Systems",
    description: "Robust physical network backbones, high-density patch panels, and scalable data center cabling architectures.",
  },
  {
    url: "/projects/ispproject.png",
    title: "Fiber Optic Network Deployments",
    description: "High-speed backbone installations requiring precision fusion splicing, low-attenuation long-distance routing, and rigid OTDR performance certification standards.", 
  },
  {
    url: "/projects/paproject.png",
    title: "Public Address (PA) Systems",
    description: "Public Address and Voice Alarm (PAVA) architectures engineered for crystal-clear commercial paging, automated alerts, and background soundscapes.",
  },
  {
    url: "/projects/accessproject.png",
    title: "Access Control Systems",
    description: "Zero-trust perimeter security implementations leveraging biometrics, multi-factor smart locks, and real-time physical access audit logging.",
  },
  {
    url: "/projects/wapprojects.png",
    title: "Wireless Access Points",
    description: "High-capacity wireless infrastructure maximizing coverage and roaming handoffs via advanced predictive RF heatmapping and controller-managed architectures.",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Leonis Navigation",
    category: "commercial",
    location: "Manila City",
    description:
      "Deployment of structured network infrastructure and an integrated CCTV surveillance network.",
    services: ["Structured Cabling", "CCTV"],
  },
  {
    id: 2,
    title: "Forever Living",
    category: "industrial",
    location: "Quezon City",
    description:
      "Execution of horizontal network cabling and protective conduit pipe installations.",
    services: ["Structured Cabling"],
  },
  {
    id: 3,
    title: "BESS Tongonan Leyte",
    category: "industrial",
    location: "Leyte",
    description:
      "Installation of CCTV surveillance, backbone fiber optics, and biometric access controls for a battery storage facility.",
    services: [
      "CCTV",
      "Structured Cabling",
      "Fiber Optic",
      "Biometric Access Control",
    ],
  },
  {
    id: 4,
    title: "Medicard AIA Makati",
    category: "healthcare",
    location: "Makati City",
    description:
      "Implementation of primary network infrastructure and structured cabling systems for the corporate office workspace.",
    services: ["Structured Cabling", "Access Points"],
  },
  {
    id: 5,
    title: "PHINMA",
    category: "education",
    location: "Taguig City",
    description:
      "Deployment of a campus-wide fiber optic network link, communication systems, and auxiliary electrical works.",
    services: ["Fiber Optic", "Structured Cabling", "Electrical Works"],
  },
  {
    id: 6,
    title: "BESS Negros",
    category: "industrial",
    location: "Negros Oriental",
    description:
      "Integration of CCTV monitoring, Fire Detection and Alarm Systems (FDAS), fiber paths, and biometric security gates.",
    services: ["CCTV", "FDAS", "Fiber Optic", "Biometric Access Control"],
  },
  {
    id: 7,
    title: "Medicard AIA Gateway",
    category: "healthcare",
    location: "Makati City",
    description:
      "Provisioning of structured telecommunication systems and commercial wireless access points within the clinic facility.",
    services: ["Fiber Optic", "Access Points", "Structured Cabling"],
  },
  {
    id: 8,
    title: "Tanawon Geothermal Power Plant",
    category: "industrial",
    location: "Sorsogon City",
    description:
      "Installation of heavy-duty industrial fiber optic backbones and perimeter CCTV monitoring systems.",
    services: ["Fiber Optic", "CCTV"],
  },
  {
    id: 9,
    title: "Wilcon Dasmariñas",
    category: "commercial",
    location: "Dasmariñas",
    description:
      "Turnkey execution of retail site security systems, structured network distribution, and electronic access matrices.",
    services: ["CCTV", "Fiber Optic", "Access Control"],
  },
  {
    id: 10,
    title: "Wilcon Tuy",
    category: "commercial",
    location: "Batangas City",
    description:
      "Comprehensive installation of asset protection cameras, data transmission setups, and automated facility entrance points.",
    services: ["CCTV", "Fiber Optic", "Access Control"],
  },
  {
    id: 11,
    title: "Medicard Head Office",
    category: "healthcare",
    location: "Makati City",
    description:
      "Systematic auditing, data and voice line tracing, network remediation, and high-density wireless coverage expansion.",
    services: [
      "Structured Cabling",
      "Data and Voice Tracing",
      "Fiber Optic",
      "Access Points",
    ],
  },
  {
    id: 12,
    title: "Kidapawan Geothermal Power Plant",
    category: "industrial",
    location: "Kidapawan City",
    description:
      "Deployment of fiber optic physical plant infrastructure and high-definition perimeter surveillance frameworks.",
    services: ["Fiber Optic", "CCTV"],
  },
  {
    id: 13,
    title: "EBeach Resort",
    category: "hospitality",
    location: "Zambales",
    description:
      "Configuration of campus-wide network links, outdoor IP cameras, and a private branch exchange (PABX) telephony solution.",
    services: ["CCTV", "PABX"],
  },
  {
    id: 14,
    title: "Fairways and Bluewater",
    category: "hospitality",
    location: "Boracay",
    description:
      "Integration and baseline commissioning of standard PABX multi-line telephone communication infrastructure.",
    services: ["PABX"],
  },
  {
    id: 15,
    title: "LF Logistics",
    category: "commercial",
    location: "Pasig City",
    description:
      "Structural assembly, mounting, and pixel-mapping calibration of an enterprise monitoring video wall grid.",
    services: ["Video Wall"],
  },
  {
    id: 16,
    title: "Ever Gotesco Mall",
    category: "commercial",
    location: "Quezon City",
    description:
      "Large-scale layout execution of comprehensive telecommunication paths and structural backbone links.",
    services: ["Structured Cabling"],
  },
  {
    id: 17,
    title: "The Beacon School",
    category: "education",
    location: "Makati City",
    description:
      "Installation and video matrix signal routing for a multi-panel visual presentation wall display.",
    services: ["Video Wall"],
  },
  {
    id: 18,
    title: "Kamuning School",
    category: "education",
    location: "Quezon City",
    description:
      "General contracting works including circuit distribution, fluid piping, automated alert systems, and fire alarms.",
    services: ["Electrical Works", "FDAS"],
  },
  {
    id: 19,
    title: "The Beacon School – Electrical",
    category: "education",
    location: "Makati City",
    description:
      "Execution of scheduled facility electrical refitting, load balancing, and standard circuitry distribution updates.",
    services: ["Electrical Works"],
  },
  {
    id: 20,
    title: "NLEX (North Luzon Expressway)",
    category: "industrial",
    location: "NLEX",
    description:
      "Precision fiber optic fusion splicing alongside rigorous Optical Time-Domain Reflectometer (OTDR) signal analysis.",
    services: ["Fiber Optic"],
  },
];

// ============================
// MAIN PAGE COMPONENT
// ============================
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const prevCategory = useRef<string>("all");

  // Slideshow auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // Fade-out → update → fade-in on category change
  const handleCategoryChange = (id: string) => {
    if (id === activeCategory) return;
    setIsVisible(false);
    setTimeout(() => {
      prevCategory.current = id;
      setActiveCategory(id);
      setIsVisible(true);
    }, 180);
  };

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const countFor = (id: string) =>
    id === "all"
      ? projects.length
      : projects.filter((p) => p.category === id).length;

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Header />

      {/* ================= SECTION 1: HERO SECTION ================= */}
        <section className="relative bg-[#091d34] overflow-hidden py-20 md:py-32 flex items-center border-b border-white/5">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="projects/projectshero.png" 
              alt="IT Infrastructure Background" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-20 max-w-full mx-auto px-6 lg:px-8 w-full text-center">
            <span className="inline-block uppercase tracking-[0.25em] text-[11px] font-bold text-blue-400 bg-blue-500/15 px-4 py-1.5 rounded-full border border-blue-500/20 mb-6">
              IT Infrastructure Portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-full font-black tracking-tight leading-[1.15] text-white max-w-4xl mx-auto">
              Engineering Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200">
                Digital Infrastructure
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed font-normal mt-6">
              Delivering enterprise-grade structured cabling, fiber optic networks, 
              CCTV systems, access control, and advanced smart building auxiliary 
              solutions nationwide.
            </p>

            {/* Hero Metrics Layout */}
            <div className="mt-12 pt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">240+</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1">
                  Completed Projects
                </div>
              </div>
              <div className="border-x border-white/10 px-2">
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">150+</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1">
                  Satisfied Clients
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">15+</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* ================= SECTION 2: SLIDESHOW GALLERY ================= */}
          <section className="relative py-16 bg-white/40 border-b border-border">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        {/* Flex container to perfectly center the slideshow */}
        <div className="flex justify-center items-center w-full">

          {/* Slideshow Frame Viewport - Now spans full available width up to max-w-full */}
          <div className="relative aspect-[16/9] w-full group">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ">
              {slideshowImages.map((slide, index) => (
                <div
                  key={slide.url}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 transform ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                  style={{ backgroundImage: `url(${slide.url})` }}
                >
                </div>
              ))}
            </div>

            {/* Control Dot Nodes */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-30 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
              {slideshowImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentImageIndex ? "w-6 bg-blue-400" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ================= SECTION 3: PROJECTS GRID & FILTER SECTION ================= */}
      <section className="py-20 bg-background">
        <div className="max-w-full mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Proven Case Deployments
            </h2>
            <p className="text-muted-foreground mt-2">
              Browse through our structural, optical, and high-security
              implementations organized by service sectors.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all duration-300 transform active:scale-95 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                }`}
              >
                {category.label}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full tabular-nums ${
                    activeCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {countFor(category.id)}
                </span>
              </button>
            ))}
          </div>

          {/* Project Grid Viewport */}
          <div
            className="transition-opacity duration-150"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 border rounded-xl bg-muted/20 border-dashed max-w-md mx-auto">
                <p className="text-muted-foreground font-medium">
                  No archived projects found in this category.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="group flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4 text-xs">
                        <span className="uppercase text-primary font-bold tracking-wider bg-primary/5 px-2 py-0.5 rounded">
                          {project.category}
                        </span>
                        <span className="flex gap-1 items-center text-muted-foreground font-medium">
                          <MapPin
                            size={13}
                            className="shrink-0 text-muted-foreground/70"
                          />
                          {project.location}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors duration-150">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-muted-foreground/90 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}