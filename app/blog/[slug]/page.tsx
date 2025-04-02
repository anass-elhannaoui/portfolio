// app/blog/[slug]/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace('.md', ''),
    }));
}

// Get post data by slug
async function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
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
    },
    content: contentHtml,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all posts
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <time dateTime={post.frontMatter.date}>
              {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{post.frontMatter.author}</span>
          </div>
          
          {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.frontMatter.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {post.frontMatter.coverImage && (
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
              <img 
                src={post.frontMatter.coverImage} 
                alt={post.frontMatter.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}