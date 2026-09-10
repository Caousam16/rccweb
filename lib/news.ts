export const news = [
  {
    slug: "LEONIS",
    title: "Completed Project: LEONIS",
    excerpt: "Your Network and Security Partner!",
    content:
      "We’re proud to have successfully completed with LEONIS! At RCC Cabling and Network Solutions Corp.",
    date: "2025-11-19",
    image: "/news/leonis.jpg",
  },
  {
    slug: "bessnegros",
    title: "Completed Project: BESS Negros Gateway",
    excerpt: "Latest announcements from our team.",
    content:
      "Completed project at BESS Negros Gateway involving the successful implementation of a Wireless CCTV System and Door Access System. The project focused on enhancing site security, surveillance, and access control by providing reliable real-time monitoring and secure entry management. The implemented systems were designed to deliver efficient, scalable, and dependable security infrastructure to support safe and secure daily business operations.",
    date: "2025-10-24",
    image: "/news/bessnegros.jpg",
  },
  {
    slug: "medicardaia",
    title: "Completed Project: Medicardaia",
    excerpt: "Latest announcements from our team.",
    content:
      "Another successful project milestone for RCC Cabling and Network Solutions Corp. at Medicard AIA Gateway, delivering quality network infrastructure work from fiber optic splicing and UTP cable pulling to proper cable tagging and comprehensive network testing, ensuring reliable connectivity and dependable network performance.",
    date: "2025-10-22",
    image: "/news/medicardaia.jpg",
  },
  {
    slug: "aiacubao",
    title: "AIA CUBAO GATEWAY",
    excerpt: "Latest announcements from our team.",
    content:
      "Successfully completed project at AIA Cubao Gateway involving the successful implementation of a Structured Cabling System and WiFi Network System. The project focused on delivering a reliable, scalable, and efficient network infrastructure to support seamless connectivity and daily business operations.",
    date: "2025-01-21",
    image: "/news/aiacubao.jpg",
  },
 





];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}