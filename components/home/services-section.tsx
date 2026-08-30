import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Access Control",
    image: "/services/home/access-control.png",
    href: "/services/access-control",
  },
  {
    title: "CATV/IPTV Systems",
    image: "/services/home/iptv-catv.png",
    href: "/services/catv",
  },
  {
    title: "CCTV Systems",
    image: "/services/home/cctv.png",
    href: "/services/cctv",
  },
  {
    title: "FDAS",
    image: "/services/home/fdas.png",
    href: "/services/fdas",
  },
  {
    title: "Fiber Optics",
    image: "/services/home/fiber-optics.png",
    href: "/services/fiber",
  },
  {
    title: "PABX Systems",
    image: "/services/home/pabx.png",
    href: "/services/pabx",
  },
  {
    title: "Sound & Audio",
    image: "/services/PA.jpg",
    href: "/services/sound-audio",
  },
  {
    title: "Structured Cabling",
    image: "/services/structured_cabling.jpg",
    href: "/services/structured-cabling",
  },
  {
    title: "Wireless Access Points",
    image: "/services/home/wap.png",
    href: "/services/wireless-network",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-white py-24 border-y-8 border-blue-600 relative rounded-none">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 border-l-8 border-blue-600 pl-6 sm:pl-8">
          <span className="inline-block bg-blue-600 text-white font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-none mb-4 shadow-md">
            Enterprise Infrastructure
          </span>

          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-950 uppercase">
            IT Infrastructure <span className="text-blue-600 underline decoration-blue-600 decoration-4 underline-offset-8">Solutions</span>
          </h2>

          <p className="mt-6 max-w-3xl text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">
            Our clients trust us to deliver end-to-end IT infrastructure solutions, covering everything from planning and architecture to deployment and lifecycle support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col justify-between rounded-none bg-white border-4 border-blue-600 p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
            >
              {/* Image Container - 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none border-2 border-slate-900 bg-slate-950">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
                {/* Action Tag */}
                <span className="absolute top-0 right-0 bg-blue-600 text-white font-black text-xs uppercase px-3 py-1 rounded-none border-b-2 border-l-2 border-slate-900 group-hover:bg-slate-950">
                  Explore &rarr;
                </span>
              </div>

              {/* Title Section */}
              <div className="mt-5 mb-2 px-1 flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight transition-colors duration-200 group-hover:text-white">
                  {service.title}
                </h3>
                <div className="h-3 w-3 rounded-none bg-blue-600 transition-colors duration-200 group-hover:bg-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}