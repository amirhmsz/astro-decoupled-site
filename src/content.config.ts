import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

const terminals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/terminals' }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string(),
    status: z.string(),
    location: z.string(), 
    tags: z.array(z.string()),
    hours: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    videoUrl: z.string().optional(),
  }),
});

export const collections = { services, terminals, posts };