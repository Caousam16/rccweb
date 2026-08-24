"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "CCTV Systems", href: "/services#cctv" },
    { name: "Fiber Optic", href: "/services#fiber" },
    { name: "Structured Cabling", href: "/services#cabling" },
    { name: "FDAS", href: "/services#fdas" },
  ],
};

export function Footer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const nodeCount = 35;
    const maxDistance = 110;
    const mouseRadius = 140;

    let mouse = { x: -1000, y: -1000 };

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    interface Pulse {
      from: Node;
      to: Node;
      progress: number;
      speed: number;
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.4 + 0.2,
    }));

    const pulses: Pulse[] = [];

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const n1 = nodes[Math.floor(Math.random() * nodes.length)];
      const n2 = nodes[Math.floor(Math.random() * nodes.length)];
      const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);

      if (dist < maxDistance && dist > 10) {
        pulses.push({
          from: n1,
          to: n2,
          progress: 0,
          speed: 0.015 + Math.random() * 0.015,
        });
      }
    };

    const pulseInterval = setInterval(spawnPulse, 500);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        if (distMouse < mouseRadius) {
          const angle = Math.atan2(dyMouse, dxMouse);
          const force = (mouseRadius - distMouse) / mouseRadius;
          node.x -= Math.cos(angle) * force * 1.2;
          node.y -= Math.sin(angle) * force * 1.2;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${node.baseAlpha})`; // Accent yellow/gold highlight
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(113, 113, 122, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      });

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const px = p.from.x + (p.to.x - p.from.x) * p.progress;
        const py = p.from.y + (p.to.y - p.from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(234, 179, 8, 0.85)";
        ctx.shadowColor = "rgba(234, 179, 8, 0.7)";
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(pulseInterval);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <footer className="relative bg-zinc-950 text-zinc-300 border-t border-zinc-800 overflow-hidden">
      {/* Network Mesh Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-auto"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 pointer-events-none">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              RCC<span className="text-accent">.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              RCC Cabling & Network Solutions Corp. delivers professional ICT,
              security, structured cabling, and fiber optic solutions for
              commercial, industrial, and residential projects.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/RCCCABLING"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/rcc-cabling-and-network-solutions-corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="viber://chat?number=%2B639971537230"
                className="hover:text-accent transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Our Services</h3>

            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact Us</h3>

            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <Phone className="text-accent mt-1" size={18} />
                <span>(+63) 925 873 8786</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-accent mt-1" size={18} />
                <span className="break-all">
                  rcccabling.netsolutions@yahoo.com.ph
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-accent mt-1" size={18} />
                <span>
                  Quezon City
                  <br />
                  Metro Manila
                  <br />
                  Philippines
                </span>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-accent text-black font-medium px-5 py-3 rounded-md hover:opacity-90 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-zinc-800/80 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 [&_a]:pointer-events-auto">
          <p>
            © {new Date().getFullYear()} RCC Cabling & Network Solutions Corp.
            All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-accent">
              Terms of Service
            </Link>

            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}