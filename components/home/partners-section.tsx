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
  { name: "LibreNMS", file: "librenms" },
  { name: "LSSimple", file: "lssimple" },
  { name: "Microsoft", file: "microsoft" },
  { name: "MikroTik", file: "mikrotik" },
  { name: "Oracle", file: "oracle" },
  { name: "Photon", file: "photon" },
  { name: "PioGoods", file: "piogoods" },
  { name: "VMware", file: "vmware" },
  { name: "VSOL", file: "vsol" },
]

function PartnerLogo({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const logoUrl = `/partners/${file}.png`

  return (
    <div className="mx-10 md:mx-14 flex items-center justify-center h-24 opacity-75 hover:opacity-100 grayscale-[30%] hover:grayscale-0 transition-all duration-300 cursor-default select-none shrink-0">
      {imgFailed ? (
        <span className="text-xl font-bold tracking-widest text-foreground uppercase whitespace-nowrap">
          {name}
        </span>
      ) : (
        <img
          src={logoUrl}
          alt={name}
          style={{
            height: 80,
            width: "auto",
            maxWidth: 260,
            objectFit: "contain",
          }}
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
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Section Heading */}
        <p className="text-center text-sm font-semibold tracking-[0.25em] text-foreground/80 uppercase mb-16">
          Products We Install
        </p>

        {/* Marquee Track Container */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", `-${100 / 3}%`] }}
            transition={{
              ease: "linear",
              duration: 40,
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

          {/* Side Fades - Reduced width to maximize visible content */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}