import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Building2, 
  Lightbulb, 
  Briefcase, 
  ShieldCheck, 
  HardHat, 
  CheckCircle2, 
  Network,
  Cpu,
  Radio,
  Layers
} from "lucide-react"
import Image from 'next/image'

const values = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "We enforce rigorous standards across every build—from precise cable management and detailed OTDR testing to clean rack architecture.",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  {
    icon: Users,
    title: "Transparent Integrity",
    description: "We earn client trust through upfront timelines, crystal-clear project scope, and an unwavering commitment to transparent pricing.",
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Forward-Thinking Innovation",
    description: "We deploy next-generation fiber backbones, high-performance network switches, and smart integrated controls built to scale with your business.",
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: HardHat,
    title: "Safety without Compromise",
    description: "On-site safety is absolute. Our engineering teams strictly adhere to official OSH protocols across all elevated and high-voltage field environments.",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Header />
      
      {/* 1. Who We Are Section (Hero Layout) */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background relative border-b border-border overflow-hidden">
        {/* Subtle Engineering Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            <Network className="h-3.5 w-3.5" />
            About Our Company
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Powering connections with <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  resilient network infrastructure.
                </span>
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  <strong className="text-foreground font-semibold">
                    RCC Cabling and Network Solutions Corporation
                  </strong>{" "}
                  is a premier systems integration partner delivering turnkey IT, telecommunications, and building auxiliary solutions tailored for Philippine enterprises.
                </p>
                <p>
                  Whether engineered for high-density structured cabling, enterprise-grade CCTV networks, or long-distance fiber optic backbones, we turn complex technical designs into dependable operational realities.
                </p>
                <p className="text-sm sm:text-base">
                  Official distributor and certified installer for global industry leaders:{" "}
                  <span className="text-foreground font-medium underline decoration-primary/40 underline-offset-4">
                    LS, Alantek, Fluke Networks, Hikvision, Cisco, Bosch, and Panasonic
                  </span>.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {["Fiber Optics", "Structured Cabling", "CCTV & Security", "PABX", "FDAS", "NOC Migration"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-semibold bg-secondary/80 text-secondary-foreground border border-border/60 hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Micro Stats Cards */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-border/80 mt-8">
                <div className="p-4 rounded-none bg-card/50 border border-border/60 shadow-sm">
                  <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">15+</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">Years of Expertise</p>
                </div>
                <div className="p-4 rounded-none bg-card/50 border border-border/60 shadow-sm">
                  <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">240+</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">Successful Projects</p>
                </div>
                <div className="p-4 rounded-none bg-card/50 border border-border/60 shadow-sm">
                  <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">99.7%</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">Target Reliability</p>
                </div>
              </div>
            </div>

            {/* Right Visual Asset Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-none bg-card p-6 sm:p-8 border border-border shadow-2xl backdrop-blur-xl group hover:border-primary/50 transition-all duration-500">
                
                {/* Floating Credential Badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-none shadow-lg flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                  <ShieldCheck className="h-4 w-4" />
                  SEC Registered
                </div>

                <div className="relative aspect-square w-full flex items-center justify-center p-8 bg-muted/40 rounded-none border border-border/80 group-hover:bg-muted/20 transition-colors">
                  <Image
                    src="/services/RCC-Logo.png"
                    alt="RCC Cabling Logo"
                    width={320}
                    height={320}
                    priority
                    className="object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <span className="h-2 w-2 rounded-none bg-emerald-500 animate-pulse" />
                    Field Teams Active
                  </div>
                  <span className="text-muted-foreground font-mono">PH ISO Standards Compliant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission & Vision - Sharp Bento Grid */}
      <section className="py-20 lg:py-24 bg-secondary/30 border-b border-border relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="group relative rounded-none bg-card p-8 sm:p-10 border border-border/80 shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Purpose</span>
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  To empower organizations with dependable, high-capacity system integration services—covering robust data networks, surveillance systems, telecom assets, and intelligent building controls—backed by expert execution and genuine service excellence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative rounded-none bg-card p-8 sm:p-10 border border-border/80 shadow-sm hover:border-primary/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Future Vision</span>
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  To stand as the premier and most trusted systems integrator in the Philippines, setting benchmark standards for modern enterprise infrastructure and seamless digital connectivity across the nation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="py-20 lg:py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">What Drives Us</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-1">
              Core Principles
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              The fundamental values guiding our engineers across every site installation and design phase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div 
                key={v.title} 
                className="relative group rounded-none bg-card border border-border p-6 shadow-sm hover:border-primary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 mb-6">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Organizational Structure */}
      <section className="py-20 lg:py-24 bg-secondary/20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Team Structure</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-1">
              Leadership & Field Operations
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              A streamlined, multi-tiered organization engineered for agile execution and strict quality assurance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Tier 1: Executive */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-card border-2 border-primary/40 rounded-none p-6 text-center shadow-lg hover:border-primary transition-colors relative">
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center mx-auto mb-3 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground tracking-wide">CHAIRMAN & CHIEF EXECUTIVE OFFICER</h3>
                <p className="text-xs font-semibold text-primary mt-1 uppercase tracking-wider">Strategic Vision & Governance</p>
              </div>
            </div>

            {/* Vertical Connector Line */}
            <div className="w-px h-6 bg-border mx-auto" />

            {/* Tier 2: Department Management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border/80 rounded-none p-5 text-center shadow-sm hover:border-primary/50 transition-colors">
                <Building2 className="h-7 w-7 mx-auto text-primary mb-2" />
                <h4 className="font-bold text-foreground text-sm">Sr. IT Infrastructure & Solutions Manager</h4>
                <p className="text-xs text-muted-foreground mt-1">NOC Operations, Engineering & Execution</p>
              </div>

              <div className="bg-card border border-border/80 rounded-none p-5 text-center shadow-sm hover:border-primary/50 transition-colors">
                <Users className="h-7 w-7 mx-auto text-primary mb-2" />
                <h4 className="font-bold text-foreground text-sm">Business Development & Accounts</h4>
                <p className="text-xs text-muted-foreground mt-1">Enterprise Partnerships & Client Relations</p>
              </div>

              <div className="bg-card border border-border/80 rounded-none p-5 text-center shadow-sm hover:border-primary/50 transition-colors">
                <Award className="h-7 w-7 mx-auto text-primary mb-2" />
                <h4 className="font-bold text-foreground text-sm">Finance & Administration</h4>
                <p className="text-xs text-muted-foreground mt-1">Corporate Management & Regulatory Compliance</p>
              </div>
            </div>

            {/* Vertical Connector Line */}
            <div className="w-px h-6 bg-border mx-auto" />

            {/* Tier 3: Field Implementation Units */}
            <div className="bg-card rounded-none p-6 border border-border/80 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center mb-6">
                Specialized Technical Divisions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-muted/40 rounded-none p-4 border border-border/60 text-center hover:border-primary/40 transition-colors">
                  <Cpu className="h-5 w-5 text-primary mx-auto mb-2" />
                  <h5 className="font-bold text-foreground text-sm">Network Engineering</h5>
                  <p className="text-xs text-muted-foreground mt-0.5">Core Routing, Switching & NOC Support</p>
                </div>

                <div className="bg-muted/40 rounded-none p-4 border border-border/60 text-center hover:border-primary/40 transition-colors">
                  <Layers className="h-5 w-5 text-primary mx-auto mb-2" />
                  <h5 className="font-bold text-foreground text-sm">Cabling & Fiber Teams</h5>
                  <p className="text-xs text-muted-foreground mt-0.5">Fusion Splicing & Clean Cable Layouts</p>
                </div>

                <div className="bg-muted/40 rounded-none p-4 border border-border/60 text-center hover:border-primary/40 transition-colors">
                  <Radio className="h-5 w-5 text-primary mx-auto mb-2" />
                  <h5 className="font-bold text-foreground text-sm">Auxiliary & Security</h5>
                  <p className="text-xs text-muted-foreground mt-0.5">CCTV, Access Controls & FDAS Systems</p>
                </div>

                <div className="bg-muted/40 rounded-none p-4 border border-border/60 text-center hover:border-primary/40 transition-colors">
                  <HardHat className="h-5 w-5 text-primary mx-auto mb-2" />
                  <h5 className="font-bold text-foreground text-sm">Field Support Units</h5>
                  <p className="text-xs text-muted-foreground mt-0.5">On-Call Maintenance & SLA Support</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

   
      <Footer />
    </main>
  )
}