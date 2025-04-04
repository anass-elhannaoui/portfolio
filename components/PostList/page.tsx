// components/PostsList.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tag from '@/components/Tag/page';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-2xl">
          Articles, tutorials, and guides on modern web development with Next.js and TypeScript.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </>
  );
}

const PostCard = ({ post, index }: { post: Post, index: number }) => {
  const readingTime = Math.ceil(post.frontMatter.excerpt.split(/\s+/).length / 200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
    >
      <Link 
        href={`/blog/${post.slug}`} 
        className="group flex flex-col h-full bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-border"
      >
        {post.frontMatter.coverImage && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={post.frontMatter.coverImage}
              alt={post.frontMatter.title}
              width={400}
              height={225}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center gap-2 mb-3">
            <time className="text-xs text-muted-foreground">
              {new Date(post.frontMatter.date).toLocaleDateString()}
            </time>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {readingTime} min read
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {post.frontMatter.title}
          </h2>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {post.frontMatter.excerpt}
          </p>
          
          {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {post.frontMatter.tags.slice(0, 2).map((tag) => (
                <Tag key={tag} name={tag} size="sm" />
              ))}
              {post.frontMatter.tags.length > 2 && (
                <span className="text-xs text-muted-foreground self-center">
                  +{post.frontMatter.tags.length - 2} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};