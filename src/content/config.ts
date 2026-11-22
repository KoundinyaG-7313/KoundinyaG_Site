import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    relatedProjects: z.array(z.string()).optional(),
    relatedResearch: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
