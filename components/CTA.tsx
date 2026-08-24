"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"
import { MouseEvent, useEffect, useRef } from "react"

export function CTA() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Canvas-based Particle Wave for 60fps performance
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const rows = 50
    const cols = 80

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const colSpacing = canvas.width / cols
      const rowSpacing = (canvas.height * 0.6) / rows

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * colSpacing + 10

          // Wave equation
          const y =
            canvas.height * 0.85 -
            row * rowSpacing +
            Math.sin(col * 0.12 + time) * 18 +
            Math.cos(row * 0.15 + time * 0.8) * 12

          const size = Math.max(0.6, 3.2 - row * 0.04)
          const opacity = Math.max(0.04, 0.65 - row * 0.011)

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          // Professional Electric Blue color scheme
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          onMouseMove={handleMouseMove}
          className="group relative isolate overflow-hidden rounded-3xl bg-[#0B0F17] px-6 py-16 shadow-2xl sm:px-16 lg:px-24 lg:py-20 border border-blue-900/20"
        >
          {/* ========================= */}
          {/* Background Elements       */}
          {/* ========================= */}

          {/* Deep Navy/Black Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0B0F17] to-[#030712]" />

          {/* Top-Right Professional Blue Glow */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

          {/* Bottom Ambient Cyan/Blue Glow */}
          <div className="absolute -left-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-sky-500/15 blur-[140px]" />

          {/* Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

          {/* High-Performance Canvas Particle Wave */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full pointer-events-none z-10"
          />

          {/* Interactive Mouse Spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  rgba(59, 130, 246, 0.12),
                  transparent 75%
                )
              `,
            }}
          />

          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #60A5FA 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* ========================= */}
          {/* Content                   */}
          {/* ========================= */}

          <div className="relative z-30 mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Upgrade Your Infrastructure?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Let's discuss your project requirements. Our team is ready to
              provide a customized solution that fits your needs and budget.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25 border border-blue-400/20"
                asChild
              >
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}