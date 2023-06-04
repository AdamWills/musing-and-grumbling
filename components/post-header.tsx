import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 items-center gap-2">
        <Avatar name="Laura Wiebe" picture="/assets/blog/authors/laura.webp" />{" "}
        - <DateFormatter dateString={date} />
      </div>
      {coverImage && (
        <div className="mb-8 md:mb-16 prose xl:prose-xl mx-auto">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar
            name="Laura Wiebe"
            picture="/assets/blog/authors/laura.webp"
          />{" "}
          - <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
