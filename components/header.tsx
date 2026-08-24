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
      { title: "Structured Cabling", href: "/services/structured-cabling", desc: "Standards-compliant copper and fiber cabling infrastructure." },
      { title: "Wireless Network", href: "/services/wireless-network", desc: "High-density seamless Wi-Fi enterprise deployment." },
      { title: "Public Addressing", href: "/services/public-addressing", desc: "Zone-managed PA systems and emergency announcements." }
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
      className="flex items-center h-full"
    >
      {/* Trigger Link */}
      <Link 
        href={item.href}
        className={`flex items-center gap-1.5 text-sm font-medium transition-all px-3.5 py-2 rounded-md ${
          isActive 
            ? "bg-neutral-900 text-white font-semibold shadow-sm" 
            : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
        }`}
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${open ? "rotate-180 text-blue-600" : "text-neutral-500"}`} 
        />
      </Link>

      {/* Animated Full-Width Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full w-full bg-white border-b border-neutral-200/80 shadow-2xl z-50 pt-2"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Explore {item.name}
                </span>
                <Link 
                  href={item.href} 
                  onClick={() => setOpen(false)}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  View All {item.name}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {item.children.map((child, index) => (
                  <motion.div
                    key={child.title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.12, delay: index * 0.015 }}
                  >
                    <Link
                      href={child.href}
                      className="group flex flex-col justify-between rounded-lg p-3 transition-all duration-200 hover:bg-neutral-100/80 border border-transparent hover:border-neutral-200/60"
                      onClick={() => setOpen(false)}
                    >
                      <div>
                        <h3 className="font-semibold text-sm text-neutral-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                          {child.title}
                          <ArrowRight className="w-3.5 h-3.5 text-blue-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-neutral-500 group-hover:text-neutral-700 line-clamp-2">
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
    return `text-sm font-medium transition-all px-3.5 py-2 rounded-md whitespace-nowrap ${
      isActive 
        ? "bg-neutral-900 text-white font-semibold shadow-sm" 
        : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
    }`
  }

  return (
    <header className="relative w-full h-24 bg-white border-b border-neutral-200/60">
      <nav className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex-shrink-0 flex items-center focus:outline-none">
          <Image
            src="/rcc_logo.png"
            width={120}
            height={40}
            alt="RCC Logo"
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* MAIN NAVIGATION BAR */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-neutral-100/70 rounded-lg border border-neutral-200/60">
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
        </div>

        {/* PRIMARY CALL TO ACTION & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
          >
            Contact
            <ArrowRight size={15} />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block py-2 text-base font-medium text-neutral-900 border-b border-neutral-100"
              >
                Home
              </Link>

              {/* Mobile Collapsible Sections */}
              {navigation.map((nav) => {
                const isExpanded = expandedMobileSection === nav.name
                return (
                  <div key={nav.name} className="border-b border-neutral-100 pb-2">
                    <button
                      onClick={() => toggleMobileSection(nav.name)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-neutral-900"
                    >
                      <span>{nav.name}</span>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-200 text-neutral-500 ${isExpanded ? "rotate-180 text-blue-600" : ""}`} 
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 space-y-1.5 pt-1"
                        >
                          {nav.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm text-neutral-600 hover:text-blue-600 transition-colors"
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

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-neutral-900 border-b border-neutral-100">
                Projects
              </Link>
              <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-neutral-900 border-b border-neutral-100">
                News
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-neutral-900 border-b border-neutral-100">
                About Us
              </Link>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-md"
                >
                  Contact Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}