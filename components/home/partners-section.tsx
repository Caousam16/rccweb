"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

const partners = [
  { name: "APC", file: "apc" },
  { name: "Belden", file: "belden" },
  { name: "Blue Fiber", file: "bluefiber" },
  { name: "Bosch", file: "bosch" },
  { name: "Cisco", file: "cisco" },
  { name: "Dahua", file: "dahua" },
  { name: "Hikvision", file: "hikvision" },
  { name: "Juniper", file: "juniper" },
  { name: "LibreNMS", file: "librenms" },
  { name: "LSSimple", file: "lssimple" },
  { name: "Microsoft", file: "microsoft" },
  { name: "MikroTik", file: "mikrotik" },
  { name: "Oracle", file: "oracle" },
  { name: "Photon", file: "photon" },
  { name: "PioGoods", file: "piogoods" },
  { name: "Ubiquity", file: "ubiquity" },
  { name: "VMware", file: "vmware" },
  { name: "VSOL", file: "vsol" },

  
]

function PartnerLogo({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const logoUrl = `/partners/${file}.png`

  return (
    <div className="group relative mx-5 flex h-40 w-[304px] shrink-0 items-center justify-center p-4 rounded-2xl border-4 border-white bg-blue-600 shadow-[0_12px_0_0_#1e3a8a] transition-all duration-200 hover:-translate-y-2 hover:bg-white hover:shadow-[0_18px_0_0_#1e3a8a] select-none cursor-pointer">
      {imgFailed ? (
        <span className="text-3xl font-black italic tracking-tighter text-white group-hover:text-blue-600 uppercase drop-shadow-md text-center">
          {name}
        </span>
      ) : (
        <img
          src={logoUrl}
          alt={name}
          className="h-full w-full max-h-28 max-w-[240px] object-contain brightness-0 invert transition-all duration-200 group-hover:brightness-100 group-hover:invert-0"
          onError={() => setImgFailed(true)}
          draggable={false}
        />
      )}
    </div>
  )
}

export function PartnersSection() {
  const track = [...partners, ...partners, ...partners]

  return (
    <section className="relative overflow-hidden bg-blue-700 py-24 border-y-8 border-white shadow-2xl">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-[1800px] px-4">
        {/* Loud Section Heading */}
        <div className="mb-16 text-center">
          <span className="inline-block -rotate-2 rounded-lg bg-white px-8 py-3 text-3xl font-black uppercase tracking-widest text-blue-700 shadow-[8px_8px_0_0_#1e3a8a] md:text-5xl">
            Products We Install
          </span>
        </div>

        {/* Marquee Track Container */}
        <div className="relative flex overflow-x-hidden py-6">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", `-${100 / 3}%`] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {track.map((partner, index) => (
              <PartnerLogo
                key={`${partner.file}-${index}`}
                name={partner.name}
                file={partner.file}
              />
            ))}
          </motion.div>

          {/* Side Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-blue-700 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-blue-700 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}