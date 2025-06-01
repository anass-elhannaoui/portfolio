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
            className="flex flex-col p-6 rounded-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 border border-border"
          >
            {post.frontMatter.coverImage && (
              <div className="mb-4">
                <Image
                  src={post.frontMatter.coverImage}
                  alt={post.frontMatter.title}
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            )}
            <h2 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
              {post.frontMatter.title}
            </h2>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
              {new Date(post.frontMatter.date).toLocaleDateString()} • {post.frontMatter.readingTime}
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4 flex-grow">
              {post.frontMatter.excerpt}
            </p>
            {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.frontMatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-primary dark:text-gray-300 bg-primary/10 dark:bg-gray-700/50 px-2 py-1 rounded-full"
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
                className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 text-foreground dark:text-gray-300"
              >
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}