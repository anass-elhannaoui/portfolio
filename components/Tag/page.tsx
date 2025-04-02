// app/components/Tag/page.tsx
import React from 'react';

type TagProps = {
  name: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function Tag({ name, size = 'md' }: TagProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <span 
      className={`${sizeClasses[size]} rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200`}
    >
      {name}
    </span>
  );
}