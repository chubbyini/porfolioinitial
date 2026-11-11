import { articlesData } from "@/data/articles";
import { profileData } from "@/data/profile";

export async function GET() {
  const siteUrl = "https://inioluwa.dev";

  const rssItems = articlesData
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${article.canonicalUrl}</link>
      <guid>${article.canonicalUrl}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description><![CDATA[${article.description}]]></description>
    </item>`
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${profileData.name} — Engineering Articles</title>
    <link>${siteUrl}</link>
    <description>${profileData.headline}</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
