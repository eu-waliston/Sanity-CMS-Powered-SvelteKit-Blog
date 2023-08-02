import { createClient } from "@sanity/client";

function sanityClient() {
  const config = {
    projectId: "xs49crfr",
    dataset: "production",
    apiVersion: "2021-10-21",
  };

  return createClient({ ...config });
}

export const getAllPosts = async () => {
  const client = sanityClient();
  const allPostsQuery = "*[ _type == 'post']{title, 'slug':slug.current, body}";

  const allPosts = await client.fetch(allPostsQuery);
  return allPosts;
};

export const getPostBySlug = async (
  /** @type {string} */
  slug
  ) => {
  const client = sanityClient();
  const postQuery = `*[ _type == 'post' && slug.current == '${slug}']{title, "slug": slug.current, author->{ name }, "date": publishedAt, "content": body, categories[]->{ title } }`;

  const post = await client.fetch(postQuery);
  return post;
};
