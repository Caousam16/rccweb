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
    slug: "aiacubao",
    title: "AIA CUBAO GATEWAY",
    excerpt: "Latest announcements from our team.",
    content:
      "Completed project at AIA Cubao Gateway involving the successful implementation of a Structured Cabling System and WiFi Network System. The project focused on delivering a reliable, scalable, and efficient network infrastructure to support seamless connectivity and daily business operations.",
    date: "2025-01-21",
    image: "/news/aiacubao.jpg",
  },




];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}