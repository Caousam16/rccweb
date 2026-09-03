"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Linkedin, MessageCircle, ArrowRight, ShieldAlert } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = "service_j5f5m9n"
const EMAILJS_TEMPLATE_ID = "template_c3pr5nl"
const EMAILJS_PUBLIC_KEY = "LVVOWRLV4DCewdZFa"

const contactInfo = [
  {
    icon: Phone,
    title: "PHONE",
    details: ["(+63) 925 873 8786"],
    href: "tel:+639258738786",
  },
  {
    icon: Mail,
    title: "EMAIL",
    details: ["rcccabling.netsolutions@yahoo.com.ph"],
    href: "mailto:rcccabling.netsolutions@yahoo.com.ph",
  },
  {
    icon: MapPin,
    title: "OFFICE ADDRESS",
    details: ["Centro Plaza Condominium, 1103, 49 Sct. Torillo St, Diliman, Quezon City, 1103 Metro Manila"],
    href: null,
  },
  {
    icon: Clock,
    title: "BUSINESS HOURS",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM"],
    href: null,
  },
  {
    icon: Facebook,
    title: "FACEBOOK",
    details: ["RCC Cabling and Network Solutions Corp."],
    href: "https://www.facebook.com/RCCCABLING",
  },
  {
    icon: Linkedin,
    title: "LINKEDIN",
    details: ["RCC Cabling and Network Solutions Corp."],
    href: "https://www.linkedin.com/company/rcc-cabling-and-network-solutions-corp/",
  },
  {
    icon: MessageCircle,
    title: "VIBER",
    details: ["+63 9971537230"],
    href: "viber://chat?number=%2B639971537230",
  },
]

const services = [
  "CCTV Systems",
  "CATV Systems",
  "FDAS (Fire Detection)",
  "PABX Systems",
  "Fiber Optic",
  "Structured Cabling",
  "Sound & Audio",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          service: formData.service || "Not specified",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
    } catch (error: any) {
      console.error("EmailJS error:", error?.text || error?.status || error)
      alert(`Error: ${error?.text || "Unknown error"}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-blue-600 text-white border-b-4 border-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-black text-white text-xs font-black tracking-widest px-3 py-1 uppercase mb-6 rounded-none">
              Contact Portal
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tight sm:text-7xl leading-none">
              Let's Discuss <br />
              <span className="bg-white text-blue-600 px-2 py-1 inline-block mt-2">Your Project</span>
            </h1>
            <p className="mt-8 text-xl font-bold text-blue-100 leading-relaxed max-w-2xl">
              Ready to upgrade your network infrastructure? Contact our engineering team directly for site surveys, consultations, and estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-black border-b-4 border-blue-600 pb-3">
                  Direct Channels
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((item) => {
                  const Content = (
                    <div className="p-5 border-2 border-black bg-white hover:bg-blue-50 transition-colors duration-150 flex items-start gap-4 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                      <div className="flex-shrink-0 bg-blue-600 text-white p-3 border border-black rounded-none">
                        <item.icon className="h-6 w-6 stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-wider text-blue-600">{item.title}</h3>
                        {item.details.map((detail) => (
                          <p key={detail} className="font-bold text-black text-base mt-1 leading-snug">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                      {Content}
                    </a>
                  ) : (
                    <div key={item.title}>{Content}</div>
                  )
                })}
              </div>

              {/* Map Container */}
              <div className="border-4 border-black p-2 bg-blue-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none">
                <div className="bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest flex items-center justify-between mb-2">
                  <span>Location Map</span>
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div className="aspect-video w-full border-2 border-black overflow-hidden bg-white">
                  <iframe
                    src="https://maps.google.com/maps?q=Centro%20Plaza%20Condominium%20Quezon%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="border-4 border-black p-8 bg-white shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] rounded-none">
                <h2 className="text-3xl font-black uppercase tracking-tight text-black border-b-4 border-black pb-4 mb-8">
                  Send Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-blue-50 border-4 border-black p-10 text-center rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-600 text-white border-2 border-black mb-6">
                      <Send className="h-10 w-10 stroke-[2.5]" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-black">Message Sent!</h3>
                    <p className="mt-4 font-bold text-gray-800 text-lg">
                      We have received your specifications. An engineer will reach out within 24 business hours.
                    </p>
                    <Button
                      className="mt-8 rounded-none border-2 border-black bg-black text-white hover:bg-blue-600 hover:text-white font-black uppercase tracking-wider px-8 py-6 text-base shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] transition-all"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-black uppercase text-xs tracking-wider text-black">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-none border-2 border-black focus-visible:ring-0 focus-visible:border-blue-600 h-12 font-bold text-black bg-blue-50/30"
                          placeholder="JOHN DELA CRUZ"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-black uppercase text-xs tracking-wider text-black">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-none border-2 border-black focus-visible:ring-0 focus-visible:border-blue-600 h-12 font-bold text-black bg-blue-50/30"
                          placeholder="JOHN@EXAMPLE.COM"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-black uppercase text-xs tracking-wider text-black">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-none border-2 border-black focus-visible:ring-0 focus-visible:border-blue-600 h-12 font-bold text-black bg-blue-50/30"
                          placeholder="+63 000 000 0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-black uppercase text-xs tracking-wider text-black">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="rounded-none border-2 border-black focus-visible:ring-0 focus-visible:border-blue-600 h-12 font-bold text-black bg-blue-50/30"
                          placeholder="CORP INC."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-black uppercase text-xs tracking-wider text-black">
                        Service Required
                      </Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="flex h-12 w-full rounded-none border-2 border-black bg-blue-50/30 px-3 py-2 text-sm font-bold text-black focus:outline-none focus:border-blue-600"
                      >
                        <option value="">SELECT A SERVICE CATEGORY</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-black uppercase text-xs tracking-wider text-black">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-none border-2 border-black focus-visible:ring-0 focus-visible:border-blue-600 font-bold text-black bg-blue-50/30"
                        placeholder="SPECIFY REQUIREMENTS, TIMELINE, AND LOCATION..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-none border-2 border-black bg-blue-600 text-white hover:bg-black hover:text-white font-black uppercase tracking-wider text-lg py-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                    </Button>

                    <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">
                      Information provided is utilized solely for technical consultation purposes.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-600 text-white border-t-4 border-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white bg-black inline-block px-4 py-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "WHAT AREAS DO YOU COVER?",
                answer: "We deploy teams across Metro Manila and key economic zones in the Philippines. Nationwide deployment is available for large-scale enterprise contracts.",
              },
              {
                question: "ARE MAINTENANCE CONTRACTS AVAILABLE?",
                answer: "Yes. We offer continuous preventive maintenance, SLA-backed emergency responses, and system optimization packages.",
              },
              {
                question: "WHAT IS THE STANDARD INSTALLATION TIMELINE?",
                answer: "Timelines depend on site scale and infrastructure constraints. Small network setups take 2–5 days; enterprise-wide implementations are phased over weeks.",
              },
              {
                question: "DO YOU PROVIDE FREE SITE VISITS?",
                answer: "We provide complimentary site evaluations and engineering consultations within Metro Manila.",
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-white text-black p-6 border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-lg uppercase tracking-tight text-blue-600 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 stroke-[3] text-black" />
                  {faq.question}
                </h3>
                <p className="mt-3 font-bold text-gray-800 text-sm leading-relaxed border-t-2 border-black pt-3">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}