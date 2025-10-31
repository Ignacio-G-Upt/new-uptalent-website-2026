import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    h1: z.string(),
    h2: z.array(z.string()).optional(),
    description: z.string().optional(),
    ogImageRef: z.string().optional(),
    navLabel: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  pages,
};

