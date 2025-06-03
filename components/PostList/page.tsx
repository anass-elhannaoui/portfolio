"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

interface PostsListProps {
  posts: Post[];
}

export function PostsList({ posts }: PostsListProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12"
    >
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            variants={itemVariants}
            whileHover={{
              y: -3,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: { duration: 0.1 },
            }}
            className="flex gap-4 p-4 rounded-2xl bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-transparent dark:border-none cursor-pointer transform-gpu hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
          >
            {post.frontMatter.coverImage && (
              <Image
                src={post.frontMatter.coverImage}
                alt={post.frontMatter.title}
                width={80}
                height={80}
                className="flex-shrink-0 rounded-lg object-cover"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-foreground dark:text-white">{post.frontMatter.title}</span>
                <span className="text-xs text-muted-foreground dark:text-gray-400">
                  {post.frontMatter.readingTime}
                </span>
              </div>
              <p className="text-xs text-muted-foreground dark:text-gray-400 mb-2 line-clamp-3">
                {post.frontMatter.excerpt}
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400 mb-2">
                {new Date(post.frontMatter.date).toLocaleDateString()}
              </p>
              {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.frontMatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-800/50 px-2 py-1 rounded-full text-foreground dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-700 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-600 text-foreground dark:text-gray-300 transition-all duration-200"
                >
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}