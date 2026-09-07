"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTA } from "@/components/CTA";

// Static Data Schema
interface SlideItem {
  readonly url: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
}

interface OperationItem {
  readonly url: string;
  readonly items: readonly string[];
  readonly location: string;
}

interface StatItem {
  readonly value: string;
  readonly label: string;
}

const SLIDESHOW_IMAGES: readonly SlideItem[] = [
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
] as const;

const COMPLETED_OPERATIONS: readonly OperationItem[] = [
  {
    url: "/projects/burgos-wind.jfif",
    items: [
      "FIBER SCADA TELECOMMUNICATIONS SYSTEM",
      "PABX SYSTEM",
    ],
    location: "Burgos WIND Farm",
  },
  {
    url: "/projects/tanawon-palayan.jfif",
    items: [
      "FIBER SCADA TELECOMMUNICATIONS SYSTEM",
      "IP CCTV SYSTEM",
    ],
    location: "TANAWON GEOTHERMAL POWER PLANT",
  },
  {
    url: "/projects/burgos-solar.jfif",
    items: [
      "FIBER SCADA TELECOMMUNICATIONS SYSTEM",
      "CCTV SYSTEM",
      "FIRE ALARM SYSTEM",
    ],
    location: "BURGOS SOLAR FARM",
  },
  {
    url: "/projects/fpip-fiber.jfif",
    items: [
      "FIBER OPTIC TRUNKING SYSTEM",
      "MEET ME ROOM SETUP",
      "FIRE ALARM SYSTEM",
    ],
    location: "First Philippine Industrial Park",
  },
] as const;

const STATS: readonly StatItem[] = [
  { value: "500+", label: "Deployments Finished" },
  { value: "9.7", label: "Clients Satisfied (Avg. Rating)" },
  { value: "15+", label: "Years Field Expertise" },
] as const;

export default function ProjectsPage() {
  // Verified Field Archive Slideshow State
  const [opsIndex, setOpsIndex] = useState<number>(0);
  const [isOpsPaused, setIsOpsPaused] = useState<boolean>(false);

  // Active Deployments Slideshow State
  const [slideshowIndex, setSlideshowIndex] = useState<number>(0);
  const [isSlideshowPaused, setIsSlideshowPaused] = useState<boolean>(false);

  // Field Archive Navigation Handlers
  const handleOpsNext = useCallback(() => {
    setOpsIndex((prev) => (prev + 1) % COMPLETED_OPERATIONS.length);
  }, []);

  const handleOpsPrev = useCallback(() => {
    setOpsIndex((prev) => (prev - 1 + COMPLETED_OPERATIONS.length) % COMPLETED_OPERATIONS.length);
  }, []);

  const handleOpsKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") handleOpsPrev();
      if (e.key === "ArrowRight") handleOpsNext();
    },
    [handleOpsNext, handleOpsPrev]
  );

  useEffect(() => {
    if (isOpsPaused) return;
    const interval = setInterval(handleOpsNext, 5000);
    return () => clearInterval(interval);
  }, [isOpsPaused, handleOpsNext]);

  // Active Deployments Navigation Handlers
  const handleSlideNext = useCallback(() => {
    setSlideshowIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  }, []);

  const handleSlidePrev = useCallback(() => {
    setSlideshowIndex((prev) => (prev - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length);
  }, []);

  const handleSlideKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") handleSlidePrev();
      if (e.key === "ArrowRight") handleSlideNext();
    },
    [handleSlideNext, handleSlidePrev]
  );

  useEffect(() => {
    if (isSlideshowPaused) return;
    const interval = setInterval(handleSlideNext, 5000);
    return () => clearInterval(interval);
  }, [isSlideshowPaused, handleSlideNext]);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-8 border-slate-900 bg-blue-600 pb-20 pt-12 text-white md:pb-28 md:pt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        >
          <source src="/projects/projects-hero-vid.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 mix-blend-multiply bg-slate-900/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mb-8 text-5xl font-black uppercase leading-none tracking-tighter sm:text-7xl md:text-8xl">
            Engineered <br />
            <span className="mt-2 inline-block bg-white px-3 py-1 text-blue-600 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              Dominance.
            </span>
          </h1>

          <p className="mb-12 max-w-2xl border-l-4 border-white pl-4 text-lg font-bold leading-snug text-blue-100 md:text-xl">
            Enterprise CCTV, mission-critical fiber optic backbones, structured cabling, and smart auxiliary security architectures deployed nationwide.
          </p>

          <div className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-4 border-slate-900 bg-white p-6 text-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1"
              >
                <div className="text-5xl font-black tracking-tight text-blue-600">{stat.value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Field Archive Slideshow Section */}
      <section className="border-b-8 border-slate-900 bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                // Verified Field Archive
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
                MAJOR COMPLETED OPERATIONS
              </h2>
            </div>
            <div className="border-2 border-slate-900 bg-blue-600 px-4 py-2 font-bold text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              RECORD {opsIndex + 1} / {COMPLETED_OPERATIONS.length}
            </div>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Completed operations slideshow"
            onKeyDown={handleOpsKeyDown}
            onMouseEnter={() => setIsOpsPaused(true)}
            onMouseLeave={() => setIsOpsPaused(false)}
            onFocus={() => setIsOpsPaused(true)}
            onBlur={() => setIsOpsPaused(false)}
            className="border-4 border-slate-900 bg-white p-4 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:ring-4 focus:ring-blue-600"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-slate-900 bg-slate-100">
              {COMPLETED_OPERATIONS.map((op, index) => {
                const isActive = index === opsIndex;
                return (
                  <div
                    key={`${op.location}-${index}`}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      isActive ? "z-10 opacity-100 pointer-events-auto" : "z-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={op.url}
                      alt={`Field operation: ${op.items.join(", ")}`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute right-4 top-4 border-2 border-slate-900 bg-blue-600 px-3 py-1 text-xs font-black uppercase text-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] z-20">
                      {op.location}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 border-t-2 border-slate-900 bg-slate-900/90 p-6 text-white backdrop-blur-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Scope of Operation
                      </span>
                      <ul className="mt-2 list-inside list-disc text-lg font-black uppercase leading-tight text-white md:text-xl">
                        {op.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t-2 border-slate-900 pt-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleOpsPrev}
                  aria-label="Previous operation"
                  className="border-2 border-slate-900 bg-white px-4 py-2 text-xs font-black uppercase transition-all hover:bg-slate-200 active:translate-x-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={handleOpsNext}
                  aria-label="Next operation"
                  className="border-2 border-slate-900 bg-white px-4 py-2 text-xs font-black uppercase transition-all hover:bg-slate-200 active:translate-x-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Next
                </button>
              </div>

              {/* Indicators */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Operation indicators">
                {COMPLETED_OPERATIONS.map((op, i) => {
                  const isActive = i === opsIndex;
                  return (
                    <button
                      key={`${op.location}-${i}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to operation ${i + 1}: ${op.location}`}
                      onClick={() => setOpsIndex(i)}
                      className={`h-4 border-2 border-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        isActive ? "w-10 bg-blue-600" : "w-4 bg-white hover:bg-slate-200"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Deployments Interactive Slideshow Section */}
      <section className="border-b-8 border-slate-900 bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                // System Showcase
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
                Active Deployments
              </h2>
            </div>
            <div className="border-2 border-slate-900 bg-blue-600 px-4 py-2 font-bold text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              SLIDE {slideshowIndex + 1} / {SLIDESHOW_IMAGES.length}
            </div>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Active deployments image gallery"
            onKeyDown={handleSlideKeyDown}
            onMouseEnter={() => setIsSlideshowPaused(true)}
            onMouseLeave={() => setIsSlideshowPaused(false)}
            onFocus={() => setIsSlideshowPaused(true)}
            onBlur={() => setIsSlideshowPaused(false)}
            className="border-4 border-slate-900 bg-white p-4 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:ring-4 focus:ring-blue-600"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-slate-900 bg-slate-200">
              {SLIDESHOW_IMAGES.map((slide, index) => {
                const isActive = index === slideshowIndex;
                return (
                  <div
                    key={slide.url}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      isActive ? "z-10 opacity-100 pointer-events-auto" : "z-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.url}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority={index === 0}
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 border-t-2 border-slate-900 bg-slate-900/90 p-4 text-white backdrop-blur-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {slide.category}
                      </span>
                      <h3 className="text-lg font-black uppercase text-white">{slide.title}</h3>
                      <p className="text-xs text-slate-300">{slide.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t-2 border-slate-900 pt-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSlidePrev}
                  aria-label="Previous slide"
                  className="border-2 border-slate-900 bg-white px-4 py-2 text-xs font-black uppercase transition-all hover:bg-slate-200 active:translate-x-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={handleSlideNext}
                  aria-label="Next slide"
                  className="border-2 border-slate-900 bg-white px-4 py-2 text-xs font-black uppercase transition-all hover:bg-slate-200 active:translate-x-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Next
                </button>
              </div>

              {/* Indicators */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
                {SLIDESHOW_IMAGES.map((slide, i) => {
                  const isActive = i === slideshowIndex;
                  return (
                    <button
                      key={slide.url}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                      onClick={() => setSlideshowIndex(i)}
                      className={`h-4 border-2 border-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        isActive ? "w-10 bg-blue-600" : "w-4 bg-white hover:bg-slate-200"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}