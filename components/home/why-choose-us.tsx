"use client"

import { Shield, Clock, Award, Users } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project meets rigorous quality standards with premium materials and expert craftsmanship.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand deadlines. Our projects are completed on schedule without compromising quality.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Our team holds certifications from leading manufacturers and industry organizations.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Post-installation support and maintenance services to keep your systems running optimally.",
  },
]

export function WhyChooseUs() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Node Configuration
    const nodeCount = 28
    const maxDistance = 90
    const mouseRadius = 120

    let mouse = { x: -1000, y: -1000 }

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      baseAlpha: number
    }

    interface Pulse {
      from: Node
      to: Node
      progress: number
      speed: number
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5,
      baseAlpha: Math.random() * 0.5 + 0.3,
    }))

    const pulses: Pulse[] = []

    const spawnPulse = () => {
      if (nodes.length < 2) return
      const n1 = nodes[Math.floor(Math.random() * nodes.length)]
      const n2 = nodes[Math.floor(Math.random() * nodes.length)]
      const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y)

      if (dist < maxDistance && dist > 10) {
        pulses.push({
          from: n1,
          to: n2,
          progress: 0,
          speed: 0.02 + Math.random() * 0.02,
        })
      }
    }

    const pulseInterval = setInterval(spawnPulse, 400)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off walls
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        // Mouse interaction
        const dxMouse = mouse.x - node.x
        const dyMouse = mouse.y - node.y
        const distMouse = Math.hypot(dxMouse, dyMouse)

        if (distMouse < mouseRadius) {
          const angle = Math.atan2(dyMouse, dxMouse)
          const force = (mouseRadius - distMouse) / mouseRadius
          node.x -= Math.cos(angle) * force * 1.5
          node.y -= Math.sin(angle) * force * 1.5
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${node.baseAlpha})` // Primary highlight tint
        ctx.fill()

        // Connect nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j]
          const dist = Math.hypot(node.x - other.x, node.y - other.y)

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      })

      // Draw signal pulses across connections
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.progress += p.speed

        if (p.progress >= 1) {
          pulses.splice(i, 1)
          continue
        }

        const px = p.from.x + (p.to.x - p.from.x) * p.progress
        const py = p.from.y + (p.to.y - p.from.y) * p.progress

        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59, 130, 246, 0.9)"
        ctx.shadowColor = "rgba(59, 130, 246, 0.8)"
        ctx.shadowBlur = 6
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearInterval(pulseInterval)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Trusted Partner for Your Infrastructure Needs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience, RCC Cabling has established itself as a leader 
              in system integration. We combine technical expertise with exceptional service 
              to deliver solutions that exceed expectations.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Mesh Container */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="relative w-full max-w-md h-96 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 shadow-xl overflow-hidden flex items-center justify-center">
              
              {/* Dynamic Interactive Network Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full cursor-crosshair"
              />

              {/* Decorative Tech Corners */}
              <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-primary/40" />
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/20" />
              <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-primary/20" />
              <span className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-primary/40" />

              {/* Central Glassmorphism Badge */}
              <div className="relative z-10 text-center px-8 py-6 rounded-xl bg-background/70 backdrop-blur-md border border-border/60 shadow-lg">
                <div className="flex items-baseline justify-center gap-0.5 leading-none">
                  <span className="text-6xl font-extrabold tracking-tighter text-foreground">
                    15
                  </span>
                  <span className="text-3xl font-bold text-primary mb-1">+</span>
                </div>
                <div className="w-12 h-0.5 bg-primary/50 mx-auto my-3 rounded-full" />
                <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-1">
                  Years of Excellence
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px] mx-auto">
                  Delivering reliable infrastructure solutions since 2011
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}