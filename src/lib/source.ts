import { docs, blogs as blogPosts } from "@/source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const blogs = loader(createMDXSource(blogPosts), {
  baseUrl: "/blogs",
});
