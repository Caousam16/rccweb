"use client"

import { Shield, Clock, Award, Users, ArrowUpRight } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Premium materials and expert craftsmanship engineered to last.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects completed on schedule without compromising standard quality.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Certified by top-tier global manufacturers and regulatory bodies.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 reliable post-installation support and active maintenance.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900 border-y-4 border-slate-900">
      {/* Sharp Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border-2 border-slate-900 bg-blue-600 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <span className="h-2 w-2 bg-yellow-400" />
              Why Choose Us
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl uppercase leading-none">
              A <span className="bg-blue-600 text-white px-3 py-1 inline-block shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">Trusted</span> Partner
              <br /> For Infrastructure
            </h2>

            <p className="mt-6 text-xl font-bold leading-relaxed text-slate-800 max-w-2xl border-l-4 border-blue-600 pl-4">
              With over <span className="text-blue-600">15 years of experience</span>, RCC Cabling delivers bulletproof system integration solutions with technical authority.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div 
                  key={title} 
                  className="group relative border-2 border-slate-900 bg-white p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] hover:border-blue-600"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-slate-900 bg-blue-600 text-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] group-hover:bg-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-black uppercase tracking-wide text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-snug text-slate-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Outer Container */}
              <div className="relative border-4 border-slate-900 bg-blue-600 p-8 text-white shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
                
                {/* Sharp Decorative Badge */}
                <div className="absolute -top-5 -right-5 flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-yellow-400 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] font-black">
                  <ArrowUpRight className="h-8 w-8 stroke-[3]" />
                </div>

                <div className="text-center py-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-8xl font-black tracking-tighter text-white drop-shadow-[4px_4px_0px_rgba(15,23,42,1)]">
                      15
                    </span>
                    <span className="text-5xl font-black text-yellow-400 drop-shadow-[2px_2px_0px_rgba(15,23,42,1)]">+</span>
                  </div>

                  <div className="mx-auto my-4 h-2 w-20 bg-slate-900" />

                  <p className="text-lg font-black uppercase tracking-wider text-white">
                    Years of Excellence
                  </p>

                  <p className="mt-3 text-sm font-bold leading-relaxed text-slate-900 bg-white p-3 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                    Delivering reliable infrastructure solutions since 2011
                  </p>
                </div>

                {/* Bottom Highlight Bar */}
                <div className="mt-4 flex items-center justify-between border-t-2 border-blue-900 pt-4 text-xs font-black uppercase tracking-widest text-blue-100">
                  <span>Battle Tested</span>
                  <span className="h-2 w-2 bg-yellow-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}