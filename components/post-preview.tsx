import Avatar from "./avatar";
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
      <h2 className="text-xl font-semibold tracking-tight text-zinc-800">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={`/posts/${slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center  text-zinc-400 pl-3.5"
        dateTime={date}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
        </span>
        <DateFormatter dateString={date} />
      </time>
      <p className="relative z-10 mt-2 text-zinc-80 leading-relaxed">
        {excerpt}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
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
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default PostPreview;
