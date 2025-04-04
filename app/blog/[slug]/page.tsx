import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug'; // Adds IDs to headings for linking
import BlogPostContent from '@/components/BlogPostContent/page'; // Your client component

// =========================
// 🔹 Generate Static Paths
// =========================
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({ slug: filename.replace('.md', '') }));
}

// =========================
// 🔹 Get Blog Post by Slug
// =========================
async function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse front matter metadata
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML
  const processedContent = await unified()
    .use(remarkParse) // Parse markdown into a syntax tree
    .use(remarkRehype, { allowDangerousHtml: true }) // Transform to HTML AST and allow HTML in markdown
    .use(rehypeRaw) // Handle raw HTML in markdown
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypePrism, { ignoreMissing: true }) // Syntax highlighting for code blocks
    .use(rehypeStringify) // Serialize HTML
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    frontMatter: {
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || null,
      tags: data.tags || [],
      author: data.author || 'Anonymous',
      readingTime: calculateReadingTime(content) || '5 min read',
    },
    content: contentHtml,
  };
}

// Helper function to calculate reading time
function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

// =========================
// 🔹 Blog Post Page
// =========================
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return <BlogPostContent post={post} />;
}