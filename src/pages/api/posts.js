import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('posts');

  const formattedPosts = allPosts.map(post => ({
    meta: post.data, // post.data contains all frontmatter
    path: post.slug  // Corresponds to the old 'path'
  }));

  const sortedPosts = formattedPosts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return new Response(JSON.stringify(sortedPosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
