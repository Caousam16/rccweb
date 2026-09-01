import Image from "next/image";
import { news } from "../../lib/news";
import NewsCard from "@/components/NewsCard";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "News",
  description: "Latest news and updates",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-blue-700 text-white font-sans selection:bg-white selection:text-blue-700">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[650px] w-full border-b-8 border-white bg-blue-600">
        <Image
          src="/newsupdates.png"
          alt="News and Updates"
          fill
          priority
          className="object-cover mix-blend-overlay opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/80 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20">
          <div className="inline-block bg-white px-4 py-1 text-sm font-black tracking-widest text-blue-700 uppercase">
            Live Feed
          </div>
          <h1 className="mt-4 max-w-4xl text-6xl font-black uppercase tracking-tighter text-white sm:text-7xl lg:text-8xl">
            News &amp; Updates
          </h1>
          <p className="mt-4 max-w-xl text-xl font-bold text-blue-100 uppercase tracking-wide">
            Breaking stories, critical announcements, and fresh operational insights.
          </p>
        </div>
      </section>

      {/* Ticker Banner */}
      <div className="w-full bg-white text-blue-900 py-3 px-6 border-b-8 border-blue-900 overflow-hidden font-mono text-sm font-bold tracking-wider uppercase">
        <div className="whitespace-nowrap animate-marquee">
          /// LATEST HEADLINES /// STAY INFORMED /// FRESH UPDATES DROP DAILY /// ALL SYSTEMS GO ///
        </div>
      </div>

      {/* News Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-center justify-between border-b-4 border-white pb-4">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            Latest Articles
          </h2>
          <span className="bg-white text-blue-700 font-extrabold px-3 py-1 text-sm">
            {news.length} ITEMS
          </span>
        </div>

        {news.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <div
                key={item.slug}
                className="group border-4 border-white bg-blue-800 p-2 transition-transform duration-150 hover:-translate-y-2 hover:bg-white hover:text-blue-900"
              >
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="border-4 border-white bg-blue-800 p-16 text-center">
            <p className="text-2xl font-black uppercase tracking-wider text-white">
              No news available right now.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}