import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('JR'),
    category: z.enum([
      'margin-peace',
      'practical-money',
      'faith-stewardship',
      'variable-income',
      'stories',
    ]),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const foundationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foundations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('JR'),
    pillar: z.enum(['clarity', 'order', 'margin', 'peace']),
    tier: z.number().min(1).max(4),
    articleNumber: z.number().min(1).max(12),
    featured: z.boolean().default(false),
    status: z.enum(['published', 'coming-soon']).default('published'),
  }),
});

export const collections = {
  blog: blogCollection,
  foundations: foundationsCollection,
};
