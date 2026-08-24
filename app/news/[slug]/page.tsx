import { getNews } from "@/lib/news";
import { news } from "@/lib/news";
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
    <>
      <Header />

      <main>
        {/* Top Dark Blue Section */}
        <section className="py-11 bg-blue-950"></section>

        {/* Hero Section */}
        <section className="py-16 bg-white text-black text-center">
          <p className="text-sm uppercase">
            <Link href="/news" className="hover:underline">
                News
            </Link>
            {" / "}
            {slug}
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            {article.title}
          </h1>

          <p className="mt-2">
            Published on {article.date}
          </p>
        </section>

        {/* Article Section */}
        <article className="max-w-4xl mx-auto py-10 px-4 flex flex-col items-center">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            priority
            className="rounded-lg"
          />

          <p className="mt-8 text-center leading-relaxed">
            {article.content}
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}