import { getNews, news } from "@/lib/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = getNews(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-blue-600 text-white min-h-screen font-sans selection:bg-white selection:text-blue-600">
      <Header />

      <main className="border-y-8 border-white">
        {/* Top Ticker/Notice Banner */}
        <div className="bg-white text-blue-600 font-black tracking-widest uppercase py-2 px-4 text-xs md:text-sm border-b-4 border-blue-900 flex justify-between items-center">
          <span>// OFFICIAL BULLETIN</span>
          <span>SYSTEM_ID: {slug}</span>
        </div>

        {/* Hero Section */}
        <section className="bg-blue-600 px-6 py-12 md:py-20 border-b-8 border-white">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Badge */}
            <div className="inline-block bg-white text-blue-600 font-black text-sm uppercase px-4 py-1 border-2 border-blue-950 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] mb-6">
              <Link href="/news" className="hover:underline">
                NEWS
              </Link>
              <span className="mx-2 text-blue-950">/</span>
              <span className="truncate max-w-[200px] inline-block align-bottom">
                {slug}
              </span>
            </div>

            {/* Giant Loud Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white drop-shadow-[6px_6px_0px_rgba(15,23,42,1)] mb-6">
              {article.title}
            </h1>

            {/* Meta Bar */}
            <div className="inline-flex items-center bg-blue-950 text-white font-bold text-sm md:text-base px-6 py-2 uppercase border-2 border-white">
              <span>PUBLISHED // {article.date}</span>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="bg-white text-blue-950 py-12 px-6">
          <article className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Image Container - Adapts to Intrinsic Image Aspect Ratio & Size */}
            <div className="inline-block max-w-full border-8 border-blue-950 bg-blue-600 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] mb-12">
              <div className="relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                  className="w-full h-auto max-h-[75vh] object-contain block border-b-4 border-blue-950"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="w-full border-4 border-blue-600 p-8 md:p-12 bg-blue-50 shadow-[8px_8px_0px_0px_rgba(29,78,216,1)]">
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-blue-950 whitespace-pre-line">
                {article.content}
              </p>
            </div>

            {/* Back Button */}
            <div className="w-full mt-12 text-left">
              <Link
                href="/news"
                className="inline-block bg-blue-600 text-white font-black text-lg uppercase px-8 py-4 border-4 border-blue-950 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                &larr; BACK TO ALL NEWS
              </Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}