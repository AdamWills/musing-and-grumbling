type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  hideAuthor: boolean | null;
  content: string;
};

export default PostType;
