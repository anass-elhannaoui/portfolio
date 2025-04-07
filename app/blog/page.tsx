// app/blog/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostsList } from '@/components/PostList/page';

type Post = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    readingTime: string;
  };
};
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 185;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}
async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug: filename.replace('.md', ''),
        frontMatter: {
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          coverImage: data.coverImage || null,
          tags: data.tags || [],
          readingTime: calculateReadingTime(content),
        },
      };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
  
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div className="min-h-screen pt-14 pb-10 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PostsList posts={posts} />
      </div>
    </div>
  );
}