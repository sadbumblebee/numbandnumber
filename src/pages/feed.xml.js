import { getCollection } from 'astro:content';
// Assuming site title and description might be managed elsewhere in a real app
// For now, hardcoding them as they were in the original script.
// Astro.site should be configured in astro.config.mjs for siteURL.

const siteTitle = 'numb &amp; number'; // XML escaped
const siteDescription = 'A data viz blog';

export async function GET({ site }) { // Astro injects `site` if Astro.site is set
  const allPosts = await getCollection('posts');
  const sortedPosts = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  const siteURL = site ? site.toString().slice(0, -1) : 'https://example.com'; // Use Astro.site, remove trailing slash for consistency if present

  const rssItems = sortedPosts.map(post => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${siteURL}/p/${post.slug}/</link>
      <guid isPermaLink="true">${siteURL}/p/${post.slug}/</guid>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      ${post.data.description ? `<description><![CDATA[${post.data.description}]]></description>` : ''}
    </item>`).join('');

  const rssBody = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <description><![CDATA[${siteDescription}]]></description>
    <link>${siteURL}</link>
    <atom:link href="${siteURL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssBody, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate', // Typical RSS cache settings
    }
  });
}
