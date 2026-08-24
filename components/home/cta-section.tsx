import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-primary px-6 py-16 shadow-2xl sm:px-12 lg:px-20 lg:py-20">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-white blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-primary-foreground ring-1 ring-inset ring-primary-foreground/20">
              Enterprise-Grade Scaling
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
              Future-Proof Your IT Infrastructure
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              From seamless cloud migrations to Zero Trust architecture, we
              design and deploy resilient infrastructure built to support your
              business for the next decade.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Infrastructure Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/solutions">
                  Explore Core Architecture
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-primary-foreground/15 pt-10 text-left sm:grid-cols-4">
              <div>
                <p className="text-sm font-semibold text-primary-foreground">
                  99.99% Uptime
                </p>
                <p className="mt-1 text-xs text-primary-foreground/70">
                  SLA-backed reliability
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary-foreground">
                  Multi-Cloud
                </p>
                <p className="mt-1 text-xs text-primary-foreground/70">
                  AWS, Azure & Hybrid
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary-foreground">
                  Zero Trust
                </p>
                <p className="mt-1 text-xs text-primary-foreground/70">
                  Next-generation security
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary-foreground">
                  24/7/365 NOC
                </p>
                <p className="mt-1 text-xs text-primary-foreground/70">
                  Proactive monitoring
                </p>
              </div>
            </div>
          </div>

          {/* Radial background */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#gradient)"
              fillOpacity="0.15"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}