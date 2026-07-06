import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    categoria: z.string().optional(),
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
