import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Portfolio Author'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readTime: z.string().default('5 min read'),
    category: z.string().default('Tech')
  })
});

const guidesFieldCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    environment: z.string().default('Production Systems'),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Intermediate'),
    keyTakeaways: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const guidesLabCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    hypothesis: z.string().default(''),
    findings: z.string().default(''),
    reproducibility: z.string().default('High'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    metric: z.string().optional(),
    order: z.number().default(0)
  })
});

export const collections = {
  'blog': blogCollection,
  'guides-field': guidesFieldCollection,
  'guides-lab': guidesLabCollection,
  'projects': projectsCollection
};
