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
      description:
        "Deliver clear announcements across multiple locations in real time.",
      icon: Volume2,
    },
    {
      title: "Emergency Preparedness",
      description:
        "Broadcast emergency alerts and evacuation instructions immediately.",
      icon: ShieldCheck,
    },
    {
      title: "Centralized Management",
      description:
        "Control multiple zones and facilities from a single interface.",
      icon: Radio,
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Expand your audio network as your organization grows.",
      icon: Building2,
    },
  ]

  const industries = [
    {
      title: "Commercial Buildings",
      icon: Building2,
      description:
        "Reliable paging, background music, and emergency notifications for offices and mixed-use developments.",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      description:
        "Clear plant-wide communication for production updates and safety announcements.",
    },
    {
      title: "Healthcare",
      icon: Hospital,
      description:
        "Support patient announcements, staff coordination, and emergency alerts.",
    },
    {
      title: "Education",
      icon: School,
      description:
        "Campus-wide communication for daily announcements and emergency response.",
    },
    {
      title: "Retail & Malls",
      icon: ShoppingBag,
      description:
        "Promotions, customer notifications, and operational announcements across multiple zones.",
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
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Enterprise Public Address Solutions
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                Intelligent Public Address Systems for Modern Businesses
              </h1>

              <p className="mt-6 text-lg text-slate-300">
                Deliver reliable voice communication, emergency notifications,
                and facility-wide announcements through scalable public
                addressing solutions designed for enterprise environments.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Overview</h2>

              <p className="mt-6 text-muted-foreground leading-8">
                A Public Address (PA) System enables organizations to communicate
                quickly and effectively across offices, campuses, factories,
                commercial buildings, and public spaces. Modern public address solutions integrate seamlessly with existing
                infrastructure, allowing centralized control, multi-zone paging,
                scheduled announcements, and emergency broadcasting.
              </p>

              <p className="mt-4 text-muted-foreground leading-8">
                Our solutions are engineered for reliability, scalability, and
                exceptional audio clarity, ensuring every message reaches the
                intended audience when it matters most.
              </p>
            </div>

            <div className="rounded-2xl border bg-muted/30 p-8">
              <h3 className="text-xl font-semibold">
                Core Capabilities
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Multi-zone paging",
                  "Emergency voice broadcasting",
                  "Scheduled announcements",
                  "Background music",
                  "SIP & VoIP integration",
                  "Remote monitoring & management",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/40 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">
                Benefits
              </h2>

              <p className="mt-4 text-muted-foreground">
                Improve operational efficiency, workplace safety, and
                communication across your organization.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <div
                    key={benefit.title}
                    className="rounded-xl border bg-background p-6"
                  >
                    <Icon className="h-10 w-10 text-primary" />

                    <h3 className="mt-6 text-xl font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Industries We Serve
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon

                return (
                  <div
                    key={industry.title}
                    className="rounded-xl border p-6 transition hover:border-primary"
                  >
                    <Icon className="h-10 w-10 text-primary" />

                    <h3 className="mt-5 text-xl font-semibold">
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-muted-foreground leading-7">
                      {industry.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">
                  Technologies Used
                </h2>

                <p className="mt-5 text-muted-foreground leading-8">
                  We deploy industry-leading technologies that provide reliable,
                  high-quality audio communication while integrating with modern
                  enterprise IT infrastructure.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex items-center gap-3 rounded-lg border p-4"
                  >
                    <Cog className="h-5 w-5 text-primary" />
                    <span>{technology}</span>
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