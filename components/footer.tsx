"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  MessageCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "CCTV Systems", href: "/services#cctv" },
    { name: "Fiber Optic", href: "/services#fiber" },
    { name: "Structured Cabling", href: "/services#cabling" },
    { name: "FDAS", href: "/services#fdas" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white text-blue-950 border-t-8 border-blue-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-600 text-white px-3 py-1 font-black text-xs uppercase tracking-widest">
              ICT & Network Infrastructure
            </div>
            
            <h2 className="text-5xl font-black text-blue-950 tracking-tighter">
              RCC<span className="text-blue-600">.</span>
            </h2>

            <p className="text-sm font-bold text-blue-900 leading-relaxed">
              RCC Cabling & Network Solutions Corp. delivers professional ICT,
              security, structured cabling, and fiber optic solutions for
              commercial, industrial, and residential projects.
            </p>

            <div className="flex gap-2 pt-2">
              <a
                href="https://www.facebook.com/RCCCABLING"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-50 border-2 border-blue-950 text-blue-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={2.5} />
              </a>

              <a
                href="https://www.linkedin.com/company/rcc-cabling-and-network-solutions-corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-50 border-2 border-blue-950 text-blue-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={2.5} />
              </a>

              <a
                href="viber://chat?number=%2B639971537230"
                className="p-3 bg-blue-50 border-2 border-blue-950 text-blue-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                aria-label="Viber Chat"
              >
                <MessageCircle size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-600 font-black text-xl uppercase tracking-wider mb-6 border-b-4 border-blue-600 pb-2 inline-block">
              Quick Links
            </h3>

            <ul className="space-y-3 font-extrabold text-blue-950 text-sm">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <ChevronRight size={16} strokeWidth={3} className="text-blue-600" />
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <ChevronRight size={16} strokeWidth={3} className="text-blue-600" />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-blue-600 font-black text-xl uppercase tracking-wider mb-6 border-b-4 border-blue-600 pb-2 inline-block">
              Our Services
            </h3>

            <ul className="space-y-3 font-extrabold text-blue-950 text-sm">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <ChevronRight size={16} strokeWidth={3} className="text-blue-600" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & CTA */}
          <div className="space-y-6">
            <h3 className="text-blue-600 font-black text-xl uppercase tracking-wider mb-6 border-b-4 border-blue-600 pb-2 inline-block">
              Contact Us
            </h3>

            <div className="space-y-3 text-xs font-black text-blue-950">
              <div className="flex gap-3 items-center bg-blue-50 border-2 border-blue-950 p-3">
                <Phone className="text-blue-600 shrink-0" size={18} strokeWidth={2.5} />
                <span>(+63) 925 873 8786</span>
              </div>

              <div className="flex gap-3 items-center bg-blue-50 border-2 border-blue-950 p-3">
                <Mail className="text-blue-600 shrink-0" size={18} strokeWidth={2.5} />
                <span className="break-all">rcccabling.netsolutions@yahoo.com.ph</span>
              </div>

              <div className="flex gap-3 items-start bg-blue-50 border-2 border-blue-950 p-3">
                <MapPin className="text-blue-600 shrink-0" size={18} strokeWidth={2.5} />
                <span>Quezon City, Metro Manila, Philippines</span>
              </div>

              <Link
                href="/contact"
                className="mt-2 flex items-center justify-between w-full bg-blue-600 hover:bg-blue-950 text-white font-black px-5 py-4 border-2 border-blue-950 transition-colors uppercase tracking-wider text-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t-4 border-blue-950 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-black text-blue-900">
          <p className="uppercase tracking-wider">
            © {new Date().getFullYear()} RCC Cabling & Network Solutions Corp.
          </p>

          <div className="flex gap-6 uppercase tracking-wider">
            
            <Link href="/contact" className="hover:text-blue-600 underline decoration-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}