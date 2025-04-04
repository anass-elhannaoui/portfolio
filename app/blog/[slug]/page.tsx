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
import Link from 'next/link';
import Image from 'next/image';
import ShareButton from '@/components/sharePostButton/ShareButton';

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
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeStringify)
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

// =========================
// 🔹 Blog Post Page
// =========================
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="min-h-screen pt-16 pb-12 bg-background">
      <div className="w-full px-4 sm:px-8">

        
        {/* 🔹 Back to Blog */}
        <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>

        {/* 🔹 Blog Post Content */}
        <article className="animate-fade-in translate-y-2">
          
          {/* 📌 Header Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground leading-tight">
              {post.frontMatter.title}
            </h1>

            {/* 📅 Meta Information */}
            <div className="flex flex-wrap items-center text-muted-foreground mb-6 gap-2 sm:gap-0">
              <time dateTime={post.frontMatter.date} className="text-lg">
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="hidden sm:inline mx-3 text-xl">•</span>
              <span className="text-lg font-medium">{post.frontMatter.author}</span>
            </div>

            {/* 🔖 Tags */}
            {post.frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {post.frontMatter.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-4 py-1 text-md font-medium rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* 🖼 Cover Image */}
            {post.frontMatter.coverImage && (
              <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg transition-all hover:shadow-xl">
                <Image 
                  src={post.frontMatter.coverImage} 
                  alt={post.frontMatter.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            )}
          </header>

          {/* 📖 Blog Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
                       prose-headings:scroll-mt-20 prose-headings:font-bold
                       prose-headings:text-foreground prose-p:text-muted-foreground
                       prose-a:text-primary prose-a:no-underline prose-a:hover:underline
                       prose-img:rounded-lg prose-img:shadow-md
                       prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4
                       prose-code:text-muted-foreground prose-code:bg-muted prose-code:p-2 prose-code:rounded
                       prose-pre:bg-muted prose-pre:text-muted-foreground prose-pre:shadow-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 🔄 Footer Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 items-start sm:items-center">
              
              {/* 🔙 Back to Blog */}
              <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all posts
              </Link>

              {/* 📤 Share Button */}
              <div className="flex items-center space-x-4">
                <ShareButton 
                  title={post.frontMatter.title} 
                  text={post.frontMatter.excerpt || "Check out this amazing article!"} 
                  url={typeof window !== "undefined" ? window.location.href : ""} 
                />
              </div>

            </div>
          </div>

        </article>

      </div>
    </div>
  );
}
