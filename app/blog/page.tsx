"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Implementing CI/CD Pipelines with GitHub Actions",
      date: "March 15, 2025",
      excerpt: "A comprehensive guide to setting up automated CI/CD pipelines using GitHub Actions for modern web applications.",
      category: "DevOps",
      readTime: "8 min read",
    },
    {
      title: "Deep Learning for Computer Vision: A Practical Guide",
      date: "March 10, 2025",
      excerpt: "Exploring the fundamentals of computer vision using deep learning techniques with PyTorch and TensorFlow.",
      category: "Machine Learning",
      readTime: "12 min read",
    },
    {
      title: "Kubernetes Best Practices for Production Environments",
      date: "March 5, 2025",
      excerpt: "Essential tips and best practices for deploying and managing Kubernetes clusters in production.",
      category: "DevOps",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Thoughts and insights on Data Science, Machine Learning, and DevOps Engineering.
          </p>
        </motion.div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="text-primary" asChild>
                        <Link href="#">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}