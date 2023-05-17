import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkEmbedder, { TransformerInfo } from "@remark-embedder/core";
import oembedTransformer from "@remark-embedder/transformer-oembed";

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (
    transformer.name === "@remark-embedder/transformer-oembed" ||
    url.includes("youtube.com")
  ) {
    return `<div class="embed-youtube aspect-video">${html}</div>`;
  }
  return html;
}

const BandCampTransformer = {
  name: "bandcamp",
  shouldTransform(url: string) {
    const { host } = new URL(url);
    return host.endsWith(".bandcamp.com");
  },
  getHTML(url: string) {
    return `<iframe title="BandCamp embed" style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3745820516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="${url}">${url}</a></iframe>`;
  },
};

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkEmbedder, {
      transformers: [oembedTransformer, BandCampTransformer],
      handleHTML,
    })
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
