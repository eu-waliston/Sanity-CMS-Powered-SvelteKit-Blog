import * as z from "zod";

export const allPostsSchema = z.array(
  z.object({
    title: z.string(),
    slug: z.string(),
  })
);

export type AllPosts = z.infer<typeof allPostsSchema>;

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  author: z.object({
    name: z.string(),
  }),
  content: z.string(),
});

export type Post = z.infer<typeof postSchema>;
