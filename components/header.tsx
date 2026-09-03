"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface ChildItem {
  title: string
  href: string
  desc: string
}

interface NavigationItem {
  name: string
  href: string
  children: ChildItem[]
}

const navigation: NavigationItem[] = [
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { title: "Commercial", href: "/solutions#commercial", desc: "Tailored technology and networking solutions for growing businesses." },
      { title: "Industrial", href: "/solutions#industrial", desc: "Enterprise grade infrastructure and heavy-duty monitoring systems." },
      { title: "Educational", href: "/solutions#educational", desc: "Campus-wide security, public address, and high-speed networking." },
      { title: "Healthcare", href: "/solutions#healthcare", desc: "Critical patient safety monitoring and robust IT connectivity." },
    ]
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { title: "Access Control", href: "/services/access-control", desc: "Biometric, RFID, and smart entry control systems." },
      { title: "CCTV Systems", href: "/services/cctv", desc: "Smart IP surveillance and analytics solutions." },
      { title: "Fire Detection (FDAS)", href: "/services/fdas", desc: "Early warning fire detection and alarm integration." },
      { title: "Fiber Optics", href: "/services/fiber", desc: "High-speed fiber network backbone installations." },
      { title: "IPTV & CATV", href: "/services/iptv-catv", desc: "Digital broadcast TV and hospitality streaming solutions." },
      { title: "PABX Systems", href: "/services/pabx", desc: "Advanced VoIP and PBX telephony communications." },
      { title: "Public Addressing", href: "/services/public-addressing", desc: "Zone-managed PA systems and emergency announcements." },
      { title: "Structured Cabling", href: "/services/structured-cabling", desc: "Standards-compliant copper and fiber cabling infrastructure." },
      { title: "Wireless Network", href: "/services/wireless-network", desc: "High-density seamless Wi-Fi enterprise deployment." }
    ],
  }
]

function MegaMenu({ item }: { item: NavigationItem }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = pathname.startsWith(item.href)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  return (
    <div
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={closeMenu}
      className="static flex items-center h-full"
    >
      <Link 
        href={item.href}
        className={`flex items-center gap-2 text-sm font-black uppercase tracking-wider transition-all px-4 py-2 border-2 rounded-none ${
          isActive 
            ? "bg-blue-600 text-white border-blue-600 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" 
            : "bg-white text-slate-900 border-slate-900 hover:bg-blue-600 hover:text-white shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]"
        }`}
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 stroke-[3] ${open ? "rotate-180 text-white" : "text-blue-600"}`} 
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 right-0 top-full w-full bg-white border-y-4 border-blue-600 shadow-[0_10px_25px_-5px_rgba(0,102,255,0.3)] z-50 rounded-none"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-4 border-slate-900">
                <span className="text-sm font-black text-blue-600 uppercase tracking-widest">
                  // EXPLORE {item.name}
                </span>
                <Link 
                  href={item.href} 
                  onClick={() => setOpen(false)}
                  className="text-xs font-black uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 px-3 py-1.5 transition-colors flex items-center gap-2 border border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,102,255,1)]"
                >
                  VIEW ALL {item.name}
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.children.map((child, index) => (
                  <motion.div
                    key={child.title}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1, delay: index * 0.02 }}
                  >
                    <Link
                      href={child.href}
                      className="group flex flex-col justify-between p-4 bg-slate-50 border-2 border-slate-900 rounded-none transition-all duration-150 hover:bg-blue-600 hover:border-slate-900 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                      onClick={() => setOpen(false)}
                    >
                      <div>
                        <h3 className="font-black text-base uppercase text-slate-900 group-hover:text-white transition-colors flex items-center justify-between tracking-wide">
                          {child.title}
                          <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 stroke-[3]" />
                        </h3>
                        <p className="mt-2 text-xs font-semibold leading-snug text-slate-600 group-hover:text-blue-50 line-clamp-2">
                          {child.desc}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)

  const toggleMobileSection = (name: string) => {
    setExpandedMobileSection(prev => prev === name ? null : name)
  }

  const getLinkStyle = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)
    return `text-sm font-black uppercase tracking-wider transition-all px-4 py-2 border-2 rounded-none whitespace-nowrap ${
      isActive 
        ? "bg-blue-600 text-white border-blue-600 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" 
        : "bg-white text-slate-900 border-slate-900 hover:bg-blue-600 hover:text-white shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]"
    }`
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b-4 border-blue-600 shadow-[0_4px_15px_rgba(0,102,255,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 flex items-center focus:outline-none group">
            <div className="bg-slate-900 border-2 border-blue-600 group-hover:bg-blue-600 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/rcc_logo.png"
                width={120}
                height={40}
                alt="RCC Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2 p-2 bg-slate-900 border-2 border-slate-900 rounded-none shadow-[4px_4px_0px_0px_rgba(0,102,255,1)]">
            <Link href="/" className={getLinkStyle("/")}>
              Home
            </Link>

            <MegaMenu item={navigation[0]} />
            <MegaMenu item={navigation[1]} />

            <Link href="/projects" className={getLinkStyle("/projects")}>
              Projects
            </Link>

            <Link href="/news" className={getLinkStyle("/news")}>
              News
            </Link>

            <Link href="/about" className={getLinkStyle("/about")}>
              About Us
            </Link>
          </nav>

          {/* ACTIONS / MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-slate-900 text-white text-sm font-black uppercase tracking-wider px-5 py-2.5 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,102,255,1)] transition-all duration-150 rounded-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Contact Us
              <ArrowRight size={18} className="stroke-[3]" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-slate-900 text-white border-2 border-blue-600 hover:bg-blue-600 focus:outline-none rounded-none shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} className="stroke-[3]" /> : <Menu size={26} className="stroke-[3]" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            className="lg:hidden bg-white border-b-4 border-slate-900 overflow-hidden rounded-none shadow-2xl"
          >
            <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block p-3 text-base font-black uppercase tracking-wider text-slate-900 bg-slate-100 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]"
              >
                Home
              </Link>

              {navigation.map((nav) => {
                const isExpanded = expandedMobileSection === nav.name
                return (
                  <div key={nav.name} className="border-2 border-slate-900 p-2 bg-slate-50">
                    <button
                      onClick={() => toggleMobileSection(nav.name)}
                      className="flex items-center justify-between w-full p-2 text-base font-black uppercase tracking-wider text-slate-900"
                    >
                      <span>{nav.name}</span>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 stroke-[3] ${isExpanded ? "rotate-180 text-blue-600" : "text-slate-900"}`} 
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-2 space-y-2 pt-2 border-t-2 border-slate-900 mt-2 overflow-hidden"
                        >
                          {nav.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block p-2 text-xs font-black uppercase text-slate-800 hover:bg-blue-600 hover:text-white border border-slate-900 bg-white transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block p-3 text-base font-black uppercase tracking-wider text-slate-900 bg-slate-100 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]">
                Projects
              </Link>
              <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block p-3 text-base font-black uppercase tracking-wider text-slate-900 bg-slate-100 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]">
                News
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block p-3 text-base font-black uppercase tracking-wider text-slate-900 bg-slate-100 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(0,102,255,1)]">
                About Us
              </Link>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-blue-600 text-white text-base font-black uppercase tracking-wider py-3 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                >
                  Contact Us
                  <ArrowRight size={18} className="stroke-[3]" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}