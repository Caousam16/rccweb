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
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative h-[720px] w-full overflow-hidden">
        <Image
          src="/newsupdates.png"
          alt="News and Updates"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

      </section>


      {/* News Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {news.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard
                key={item.slug}
                {...item}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <p className="text-gray-500">
              No news available right now.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}