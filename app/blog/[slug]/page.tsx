// app/blog/[slug]/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import Image from 'next/image';
import ShareButton from "@/components/sharePostButton/ShareButton";



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
    <div className="min-h-screen pt-14 pb-10 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
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
        
        <article className="animate-fade-in  translate-y-2">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
            
            <div className="flex flex-wrap items-center text-muted-foreground mb-4 gap-2 sm:gap-0">
              <time dateTime={post.frontMatter.date} className="text-sm">
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="text-sm">{post.frontMatter.author}</span>
            </div>
            
            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.frontMatter.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs md:text-sm rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {post.frontMatter.coverImage && (
              <div className="relative w-full h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-md transition-all hover:shadow-lg">
                <img 
                  src={post.frontMatter.coverImage} 
                  alt={post.frontMatter.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>
          
          <div 
            className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none
                       prose-headings:scroll-mt-20 prose-headings:font-bold
                       prose-headings:text-foreground prose-p:text-muted-foreground
                       prose-a:text-primary prose-a:no-underline prose-a:hover:underline
                       prose-img:rounded-lg prose-img:shadow-md
                       prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-2
                       prose-code:text-muted-foreground prose-code:bg-muted prose-code:p-1 prose-code:rounded
                       prose-pre:bg-muted prose-pre:text-muted-foreground prose-pre:shadow-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 items-start sm:items-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
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