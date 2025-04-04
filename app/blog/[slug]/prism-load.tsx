// app/blog/[slug]/prism-load.tsx or wherever appropriate
'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

// Import languages you need to support
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-yaml';
// Add more languages as needed

// Import a theme
import 'prismjs/themes/prism-tomorrow.css';

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return null;
}