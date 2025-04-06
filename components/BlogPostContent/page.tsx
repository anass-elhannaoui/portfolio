'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ShareButton from '@/components/sharePostButton/ShareButton';
import { useEffect, useRef } from 'react';
import 'prismjs/themes/prism-tomorrow.css'; // Import a Prism theme for code highlighting

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
};

export default function BlogPostContent({ post }: { post: any }) {
  const shareUrl = "";
  const contentRef = useRef<HTMLDivElement>(null);

  // Initialize Prism.js after content is rendered
  useEffect(() => {
    // Check if Prism is available globally
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll();
    }
  }, [post.content]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-8 pb-10 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog with animation */}
        <motion.div variants={itemVariants} >
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group text-sm"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
        </motion.div>

        {/* Blog Post Content */}
        <motion.article 
          variants={containerVariants}
          className="overflow-hidden"
        >
          {/* Header Section with animations */}
          <motion.header 
            variants={containerVariants}
            className="mb-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight"
            >
              {post.frontMatter.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center text-muted-foreground mb-4 text-xs sm:text-sm"
            >
              <time dateTime={post.frontMatter.date} className="mr-2">
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="mr-2">•</span>
              <span className="mr-2">{post.frontMatter.readingTime}</span>
              <span className="mr-2">•</span>
              <span className="font-medium">{post.frontMatter.author}</span>
            </motion.div>

            {/* Tags with staggered animation */}
            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap gap-2 mb-4"
              >
                {post.frontMatter.tags.map((tag: string, index: number) => (
                  <motion.span 
                    key={tag}
                    variants={itemVariants}
                    custom={index}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Cover Image with animation */}
            {post.frontMatter.coverImage && (
              <motion.div 
                variants={fadeIn}
                className="relative w-full h-48 sm:h-56 md:h-72 lg:h-80 rounded-lg overflow-hidden mb-6 shadow-md"
              >
                <Image 
                  src={post.frontMatter.coverImage} 
                  alt={post.frontMatter.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </motion.header>

          {/* Blog Content with animation - This is where the markdown content is rendered */}
          <motion.div 
            ref={contentRef}
            variants={slideUp}
            className="prose prose-sm sm:prose lg:prose-lg max-w-none
                      prose-headings:scroll-mt-16 prose-headings:font-bold prose-headings:leading-tight
                      prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-6 prose-h1:border-b prose-h1:pb-2 prose-h1:border-border
                      prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                      prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                      prose-headings:text-foreground 
                      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-4
                      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                      prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto prose-img:my-6
                      prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 
                      prose-blockquote:p-4 prose-blockquote:rounded-lg prose-blockquote:my-6
                      prose-code:text-muted-foreground prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5
                      prose-pre:bg-muted prose-pre:text-muted-foreground prose-pre:shadow-sm prose-pre:rounded-lg prose-pre:my-6
                      prose-pre:overflow-x-auto prose-pre:p-4
                      prose-ul:list-disc prose-ol:list-decimal prose-ul:my-4 prose-ol:my-4 prose-ul:pl-6 prose-ol:pl-6
                      prose-li:marker:text-primary prose-li:my-2
                      prose-table:border prose-table:border-border prose-table:my-6 prose-table:w-full prose-table:overflow-x-auto
                      prose-th:bg-muted prose-th:p-3 prose-th:border prose-th:border-border prose-th:text-left
                      prose-td:p-3 prose-td:border prose-td:border-border
                      dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Footer Section with animations */}
          <motion.div 
            variants={fadeIn}
            className="mt-8 pt-4 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Back to Blog */}
              <motion.div whileHover={{ scale: 0.95 }}>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group text-sm"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all posts
                </Link>
              </motion.div>

              {/* Share Button with animation */}
              <motion.div whileHover={{ scale: 0.95 }}>
                <ShareButton 
                  title={post.frontMatter.title} 
                  text={post.frontMatter.excerpt || "Check out this article!"} 
                  url={shareUrl} 
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </motion.div>
  );
}