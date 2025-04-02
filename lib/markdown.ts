// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
};

export type Post = {
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
};

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontMatter: {
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || undefined,
      tags: data.tags || [],
      author: data.author || 'Anonymous',
    },
    content,
  };
}

export function getSortedPosts(): Post[] {
  // Get all post slugs
  const slugs = getAllPostSlugs();
  
  // Get all posts data
  const posts = slugs.map((slug) => getPostBySlug(slug));
  
  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}