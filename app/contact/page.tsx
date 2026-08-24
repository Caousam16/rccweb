"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Linkedin, MessageCircle } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

// Add these constants (or put in .env.local)
const EMAILJS_SERVICE_ID = "service_j5f5m9n"
const EMAILJS_TEMPLATE_ID = "template_c3pr5nl"
const EMAILJS_PUBLIC_KEY = "LVVOWRLV4DCewdZFa"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(+63) 925 873 8786"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["rcccabling.netsolutions@yahoo.com.ph"],
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Centro Plaza Condominium, 1103, 49 Sct. Torillo St, Diliman, Quezon City, 1103 Metro Manila"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM"],
  },
  {
  icon: Facebook,
  title: "Facebook",
  details: ["RCC Cabling and Network Solutions Corp."],
  href: "https://www.facebook.com/RCCCABLING",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    details: ["RCC Cabling and Network Solutions Corp."],
    href: "https://www.linkedin.com/company/rcc-cabling-and-network-solutions-corp/",
  },
  {
    icon: MessageCircle, // or FaViber if using react-icons
    title: "Viber",
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
  }finally {
    setIsSubmitting(false)
  }
}

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest text-primary-foreground/60 uppercase">
              Contact Us
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              {"Let's Discuss Your Project"}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Ready to upgrade your infrastructure? Get in touch with our team for a 
              free consultation and customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary">
                        <item.icon className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-12 aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3571943900274!2d121.03752359999999!3d14.635654100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7adb644e05d%3A0x9ed7f0e584f43ae!2sCentro%20Plaza%20Condominium!5e0!3m2!1sen!2sph!4v1778229434260!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-secondary/50 border border-border rounded-lg p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-accent/10">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your message has been received. Our team will get back to you within 24 hours.
                  </p>
                  <Button 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by our team regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What areas do you serve?",
                answer: "We provide services throughout Metro Manila and major cities across the Philippines. For projects outside these areas, please contact us to discuss your requirements.",
              },
              {
                question: "Do you offer maintenance services?",
                answer: "Yes, we offer comprehensive maintenance packages for all systems we install. This includes preventive maintenance, 24/7 emergency support, and regular system health checks.",
              },
              {
                question: "How long does a typical installation take?",
                answer: "Project timelines vary based on scope and complexity. Small projects may take a few days, while larger installations can span several weeks. We provide detailed timelines during the consultation phase.",
              },
              {
                question: "Do you provide free quotations?",
                answer: "Yes, we offer free site surveys and detailed quotations for all projects. Contact us to schedule a consultation with our technical team.",
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
