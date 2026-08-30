import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/CTA"
import ApproachSection from "@/components/ApproachSection";
import {
  Building2,
  CheckCircle2,
  Factory,
  Hospital,
  School,
  ShoppingBag,
  Cog,
  Radio,
  ShieldCheck,
  Volume2,
} from "lucide-react"

export default function PublicAddressingPage() {
  const benefits = [
    {
      title: "Instant Communication",
      description: "Deliver clear announcements across multiple locations in real time.",
      icon: Volume2,
    },
    {
      title: "Emergency Preparedness",
      description: "Broadcast emergency alerts and evacuation instructions immediately.",
      icon: ShieldCheck,
    },
    {
      title: "Centralized Management",
      description: "Control multiple zones and facilities from a single interface.",
      icon: Radio,
    },
    {
      title: "Scalable Infrastructure",
      description: "Expand your audio network as your organization grows.",
      icon: Building2,
    },
  ]

  const industries = [
    {
      title: "Commercial Buildings",
      icon: Building2,
      description: "Reliable paging, background music, and emergency notifications for offices and mixed-use developments.",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      description: "Clear plant-wide communication for production updates and safety announcements.",
    },
    {
      title: "Healthcare",
      icon: Hospital,
      description: "Support patient announcements, staff coordination, and emergency alerts.",
    },
    {
      title: "Education",
      icon: School,
      description: "Campus-wide communication for daily announcements and emergency response.",
    },
    {
      title: "Retail & Malls",
      icon: ShoppingBag,
      description: "Promotions, customer notifications, and operational announcements across multiple zones.",
    },
  ]

  const technologies = [
    "Network Audio Systems",
    "Digital Signal Processing (DSP)",
    "PoE Speakers & Amplifiers",
    "Zoned Audio Distribution",
    "SIP Integration",
    "Emergency Voice Evacuation",
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <div className="container relative mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl">

              <h1 className="mt-8 text-4xl font-extrabold tracking-tight md:text-6xl lg:leading-[1.1]">
                Public Address Systems
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
                Deliver reliable voice communication, emergency notifications,
                and facility-wide announcements through scalable public
                addressing solutions designed for enterprise environments.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">System Overview</h2>
              
              <div className="mt-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Public Address (PA) System enables organizations to communicate
                  quickly and effectively across offices, campuses, factories,
                  commercial buildings, and public spaces. 
                </p>
                <p>
                  Modern public address solutions integrate seamlessly with existing
                  infrastructure, allowing centralized control, multi-zone paging,
                  scheduled announcements, and emergency broadcasting. Our solutions are engineered for reliability, scalability, and exceptional audio clarity.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border bg-muted/20 p-8 shadow-sm md:p-10">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl"></div>
              <h3 className="text-2xl font-semibold relative z-10">
                Core Capabilities
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 relative z-10">
                {[
                  "Multi-zone paging",
                  "Emergency voice broadcasting",
                  "Scheduled announcements",
                  "Background music",
                  "SIP & VoIP integration",
                  "Remote monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg bg-background/50 p-3 shadow-sm border border-border/50">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-slate-50/50 dark:bg-muted/10 py-24 border-y">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Strategic Benefits
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Improve operational efficiency, workplace safety, and
                communication across your entire organization.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/5"
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                      <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-bold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored audio communication solutions designed for the unique demands of your sector.
            </p>

            <div className="mt-16 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <div
                    key={industry.title}
                    className="group rounded-2xl border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-muted p-3 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        {industry.title}
                      </h3>
                    </div>

                    <p className="mt-5 leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Enterprise-Grade Technologies
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  We deploy industry-leading technologies that provide reliable,
                  high-quality audio communication while integrating seamlessly with modern
                  enterprise IT infrastructure.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition-colors hover:bg-slate-800"
                  >
                    <div className="rounded-full bg-primary/20 p-2 text-primary">
                      <Cog className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{technology}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ApproachSection />
        <CTA />
      </main>

      <Footer />
    </>
  )
}