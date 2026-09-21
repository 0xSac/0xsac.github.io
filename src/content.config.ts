import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const exercises = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/exercises' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    difficulty: z.enum(['intro', 'intermediate', 'advanced']),
    attackIds: z.array(z.string()).min(1),
    learningObjectives: z.array(z.string()).min(1),
    duration: z.string(),
    schemaType: z.enum(['Course', 'TechArticle']).default('Course'),
  }),
});

const briefings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/briefings' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    published: z.coerce.date(),
    focus: z.array(z.string()).min(1),
  }),
});

export const collections = { exercises, briefings };
