import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    imgUrl: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repositoryUrl: z.string(),
    dependencies: z.array(z.string()),
    imgUrl: z.array(z.string()),
    createdDate: z.string().transform((str) => new Date(str)),
    isPublic: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  project: projectCollection,
};
