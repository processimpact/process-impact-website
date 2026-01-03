import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export type ContentType = "blog" | "case-studies";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category?: string;
  tags?: string[];
  author?: string;
}

export function getContentByType(type: ContentType): Post[] {
  const directory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(directory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        content,
        category: data.category,
        tags: data.tags,
        author: data.author,
      };
    });

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(type: ContentType, slug: string): Post | null {
  const posts = getContentByType(type);
  return posts.find((post) => post.slug === slug) || null;
}
