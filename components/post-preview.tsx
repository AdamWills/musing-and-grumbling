import DateFormatter from "./date-formatter";
import Link from "next/link";
type Props = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
};

const PostPreview = ({ title, date, slug, excerpt }: Props) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-4xl font-bold tracking-tight text-zinc-800">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6"></div>
        <Link href={`/posts/${slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>
      <time
        className="relative z-10 mb-3 flex items-center  text-zinc-700 "
        dateTime={date}
      >
        <DateFormatter dateString={date} />
      </time>
      <p className="relative z-10 mt-2 text-zinc-80 leading-relaxed">
        {excerpt}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center font-medium text-musing-green"
      >
        Read article
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="ml-1 h-4 w-4 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default PostPreview;
