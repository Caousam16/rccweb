"use client"

import { useEffect, useRef } from "react"

interface NetworkBackgroundProps {
  /** Total floating nodes */
  nodeCount?: number
  /** Max distance in px to connect two nodes with a line */
  maxDistance?: number
  /** Mouse hover detection radius in px */
  mouseRadius?: number
  /** CSS class names for styling or positioning */
  className?: string
  /** RGB triplet for node colors (e.g. "147, 197, 253") */
  nodeColorRgb?: string
  /** RGB triplet for pulse/signal glow (e.g. "96, 165, 250") */
  pulseColorRgb?: string
}

export function NetworkBackground({
  nodeCount = 45,
  maxDistance = 120,
  mouseRadius = 150,
  className = "",
  nodeColorRgb = "147, 197, 253",
  pulseColorRgb = "96, 165, 250",
}: NetworkBackgroundProps) {
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

    const handleResize = () => {
      if (!canvas) return
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", handleResize)

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
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
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
          speed: 0.015 + Math.random() * 0.02,
        })
      }
    }

    const pulseInterval = setInterval(spawnPulse, 350)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

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
        ctx.fillStyle = `rgba(${nodeColorRgb}, ${node.baseAlpha})`
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

      // Draw signal pulses
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
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${pulseColorRgb}, 1)`
        ctx.shadowColor = `rgba(${nodeColorRgb}, 0.9)`
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearInterval(pulseInterval)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [nodeCount, maxDistance, mouseRadius, nodeColorRgb, pulseColorRgb])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  )
}