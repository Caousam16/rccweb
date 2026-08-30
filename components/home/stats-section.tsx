"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 15, suffix: "", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Completed Projects" },
  { value: 9.7, suffix: "", label: "Client Rating" },
  { value: 320, suffix: "+", label: "Clients Served" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Number.isInteger(value) ? Math.floor(current) : Number(current.toFixed(1)))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? count : count.toFixed(1)}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-full px-4 lg:px-12">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 border-4 border-white bg-white">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center justify-center rounded-none border-2 border-white bg-blue-600 p-8 text-center transition-all duration-150 hover:bg-white hover:text-blue-600"
            >
              <p className="text-6xl font-black tracking-tighter lg:text-7xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-base font-black uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}