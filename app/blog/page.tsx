// app/blog/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Define the Post type
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

// Get all posts
async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: filename.replace('.md', ''),
        frontMatter: {
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          coverImage: data.coverImage || null,
          tags: data.tags || [],
        },
      };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
  
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.slug}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {post.frontMatter.coverImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={post.frontMatter.coverImage} 
                    alt={post.frontMatter.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.frontMatter.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.frontMatter.excerpt}
                </p>
                
                {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.frontMatter.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}