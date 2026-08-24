import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image: string;
};

export default function NewsCard({
  title,
  excerpt,
  slug,
  date,
  image,
}: Props) {
  return (
    <article>
      <Link href={`/news/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
        />
      </Link>

      <p>{date}</p>

      <h2>
        <Link href={`/news/${slug}`}>
          {title}
        </Link>
      </h2>

      <p>{excerpt}</p>
    </article>
  );
}