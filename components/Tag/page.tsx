import React from 'react';
import { motion } from 'framer-motion';

type TagProps = {
  name: string;
  size?: 'sm' | 'md' | 'lg';
};

export default function Tag({ name, size = 'md' }: TagProps) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} inline-flex items-center rounded-full bg-accent text-accent-foreground font-medium`}
    >
      {name}
    </motion.span>
  );
}