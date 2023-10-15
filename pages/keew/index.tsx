import Container from "../../components/container";
import PostTitle from "../../components/post-title";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import Head from "next/head";
import Header from "../../components/header";
import { BLOG_NAME } from "../../lib/constants";
import Post from "../../interfaces/post";
import { getPageBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  post: Post;
  content: string;
};

export default function Index({ post, content }: Props) {
  return (
    <>
      <Layout>
        <Header />
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <div className="prose mx-auto xl:prose-xl mb-8">
            <PostTitle>{post.title}</PostTitle>
          </div>
          <PostBody content={content} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const post = getPageBySlug("keew", ["title", "slug", "content"]);
  const content = await markdownToHtml(post.content || "");
  return {
    props: { post, content },
  };
};
