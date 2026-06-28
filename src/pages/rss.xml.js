import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { profile } from "@data/profile";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return rss({
    title: `${profile.name} - Blog`,
    description: profile.summary,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
