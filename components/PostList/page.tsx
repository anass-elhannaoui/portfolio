// components/PostsList.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Post = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
  };
};

export function PostsList({ posts }: { posts: Post[] }) {
  return (
    <>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-4xl font-bold mb-8"
      >
        Blog
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Link 
              href={`/blog/${post.slug}`} 
              className="group bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rest of your post card code remains the same */}
              {post.frontMatter.coverImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={post.frontMatter.coverImage} 
                    alt={post.frontMatter.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
                    <span className="absolute top-2 left-2 px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground">
                      {post.frontMatter.tags[0]}
                    </span>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.frontMatter.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.frontMatter.excerpt}
                </p>
                
                {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.frontMatter.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 flex items-center text-primary font-medium">
                  Read more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}