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
    title: "Video Wall",
    image: "/services/video_wall.png",
    href: "/services/video-wall",
  },
  {
    title: "Wireless Access Points",
    image: "/services/home/wap.png",
    href: "/services/wireless-access-points",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14">

          <h2 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
            IT Infrastructure Solutions
          </h2>

          <p className="mt-5 max-w-3xl text-xl">
            Our clients trust us to deliver end-to-end IT infrastructure solutions, covering everything from planning and architecture to deployment and lifecycle support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}