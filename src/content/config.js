import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.array(z.string()),
    description: z.string().optional(), // Optional description field
  }),
});

export const collections = {
  'posts': postsCollection,
};
