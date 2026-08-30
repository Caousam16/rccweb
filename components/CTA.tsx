"use client"

import Link from "next/link"
import { ArrowUpRight, Terminal, Zap } from "lucide-react"

export function CTA() {
  return (
    <section className="relative w-full bg-[#0055FF] py-20 px-4 md:px-8 border-y-8 border-black font-sans overflow-hidden select-none">
      {/* Structural Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Outer Brutalist Card */}
        <div className="bg-white border-4 border-black p-8 md:p-14 shadow-[12px_12px_0px_0px_#000] relative">
        
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-8">
      
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.95] mb-6">
                READY TO UPGRADE <br />
                <span className="bg-[#0055FF] text-white px-2 inline-block transform -rotate-1 border-2 border-black">
                  YOUR NETWORK?
                </span>
              </h2>

              <p className="text-base sm:text-xl font-bold text-black max-w-2xl leading-relaxed">
                Let's discuss your project requirements. Our engineering team is ready to deliver a zero-bottleneck, high-throughput solution built for your exact specs and budget.
              </p>
            </div>

            {/* Action Area */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0055FF] hover:bg-black text-white font-black text-lg uppercase px-8 py-5 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
              >
                <span>CONTACT US TODAY</span>
                <ArrowUpRight className="h-6 w-6 stroke-[3] group-hover:rotate-45 transition-transform" />
              </Link>
              
              <span className="font-mono text-xs font-bold text-gray-500 uppercase mt-4">
                * 24/7 NETWORK OPERATIONS RESPONSE
              </span>
            </div>

          </div>

        

        </div>
      </div>
    </section>
  )
}