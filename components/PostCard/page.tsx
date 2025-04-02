// app/components/PostCard/page.tsx
import React from 'react';
import Link from 'next/link';

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
};

export default function PostCard({ 
  slug, 
  title, 
  date, 
  excerpt, 
  coverImage, 
  tags 
}: PostCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`} 
      className="group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {coverImage && (
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {excerpt}
          </p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
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
  );
}

