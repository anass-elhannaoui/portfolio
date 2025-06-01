'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';
import ShareButton from '@/components/sharePostButton/ShareButton';

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

type BlogPostProps = {
  post: {
    slug: string;
    frontMatter: {
      title: string;
      date: string;
      excerpt: string;
      coverImage: string | null;
      tags: string[];
      author: string;
      readingTime: string;
    };
    content: string;
  };
};

const CustomComponents = {
  callout: ({ type, children }: { type: string; children: React.ReactNode }) => (
    <div className={`my-4 p-4 rounded-xl border-l-4 shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 ${
      type === 'warning' ? 'border-yellow-400' : 
      type === 'danger' ? 'border-red-400' : 
      'border-blue-400'
    }`}>
      {children}
    </div>
  ),
  alert: ({ type, children }: { type: string; children: React.ReactNode }) => (
    <div className={`my-4 p-4 rounded-xl border shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 ${
      type === 'error' ? 'border-red-200 dark:border-red-800' : 
      'border-gray-200 dark:border-gray-700'
    }`}>
      {children}
    </div>
  ),
  feature: ({ type, children }: { type: string; children: React.ReactNode }) => (
    <div className="my-6 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30">
      {children}
    </div>
  ),
  codeplayground: ({ lang, children }: { lang: string; children: React.ReactNode }) => (
    <div className="my-6">
      <div className="text-xs font-mono text-gray-500 mb-1">Playground: {lang}</div>
      <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30">
        {children}
      </div>
    </div>
  )
};

export default function BlogPostContent({ post }: BlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.slug}` : '';
  const { theme } = useTheme();

  const processCodeBlocks = (currentTheme: 'light' | 'dark') => {
    const codeBlocks = contentRef.current?.querySelectorAll('pre code');

    codeBlocks?.forEach((block) => {
      const pre = block.parentElement;
      if (!pre) return;

      const languageMatch = block.className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : 'text';

      const container = document.createElement('div');
      container.className = 'relative my-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30';

      const header = document.createElement('div');
      header.className = 'flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800';

      const languageSpan = document.createElement('span');
      languageSpan.className = 'text-xs font-mono text-muted-foreground dark:text-gray-400';
      languageSpan.textContent = language;

      const copyButton = document.createElement('button');
      copyButton.className = 'p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors';

      const icon = document.createElement('span');
      icon.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>`;
      copyButton.appendChild(icon);

      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(block.textContent || '');
        icon.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
        setTimeout(() => {
          icon.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>`;
        }, 2000);
      });

      header.appendChild(languageSpan);
      header.appendChild(copyButton);

      const newPre = document.createElement('div');
      newPre.className = 'code-content';

      container.appendChild(header);
      container.appendChild(newPre);
      pre.replaceWith(container);

      import('react-dom/client').then(({ createRoot }) => {
        const root = createRoot(newPre);
        root.render(
          <SyntaxHighlighter
            language={language}
            style={currentTheme === 'dark' ? atomDark : tomorrow}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              background: 'transparent',
            }}
            PreTag="div"
            codeTagProps={{
              style: {
                color: currentTheme === 'dark' ? '#e5e7eb' : '#374151',
              },
            }}
          >
            {block.textContent || ''}
          </SyntaxHighlighter>
        );
      });
    });
  };

  useEffect(() => {
    if (contentRef.current) {
      const processComponents = () => {
        processComponentType('callout');
        processComponentType('alert');
        processComponentType('feature');
        processComponentType('codeplayground');
        processCodeBlocks(theme === 'dark' ? 'dark' : 'light');
      };

      const processComponentType = (componentType: string) => {
        const elements = contentRef.current?.querySelectorAll(
          `[data-component="${componentType}"]`
        );
        
        elements?.forEach((el) => {
          const props: Record<string, string> = {};
          Array.from(el.attributes).forEach((attr) => {
            if (attr.name.startsWith('data-')) {
              const propName = attr.name.replace('data-', '');
              props[propName] = attr.value;
            }
          });

          const content = el.innerHTML;
          const Component = CustomComponents[componentType as keyof typeof CustomComponents];
          
          if (Component) {
            const wrapper = document.createElement('div');
            wrapper.className = `custom-component-${componentType}`;
            
            const root = document.createElement('div');
            wrapper.appendChild(root);
            
            import('react-dom/client').then(({ createRoot }) => {
              const rootInstance = createRoot(root);
              rootInstance.render(
                <Component type={''} lang={''} {...props}>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </Component>
              );
            });

            el.replaceWith(wrapper);
          }
        });
      };

      processComponents();
    }
  }, [post.content, theme]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-14 pb-10 bg-background dark:bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants}>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary dark:text-gray-300 hover:text-primary/80 dark:hover:text-gray-400 transition-colors group text-sm rounded-full px-4 py-2 border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
        </motion.div>

        <motion.article variants={containerVariants} className="overflow-hidden">
          <motion.header variants={containerVariants} className="mb-8">
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white leading-tight">
              {post.frontMatter.title}
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center text-muted-foreground dark:text-gray-400 mb-4 text-xs sm:text-sm">
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

            {post.frontMatter.tags?.length > 0 && (
              <motion.div variants={containerVariants} className="flex flex-wrap gap-2 mb-4">
                {post.frontMatter.tags.map((tag, index) => (
                  <motion.div 
                    key={tag}
                    variants={itemVariants}
                    className="rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary/20 dark:bg-gray-800 to-primary/10 dark:to-gray-700 text-foreground dark:text-gray-300 border border-primary/20 dark:border-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {post.frontMatter.coverImage && (
              <motion.div 
                variants={fadeIn} 
                className="relative w-full h-48 sm:h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 shadow-lg bg-gradient-to-b from-gray-200/50 dark:from-gray-800/50 to-gray-100/30 dark:to-gray-900/30"
                whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
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

          <motion.div 
            ref={contentRef}
            variants={slideUp}
            className="prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <motion.div variants={fadeIn} className="mt-8 pt-4 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex-1 sm:flex-none">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-sm rounded-full px-4 py-2 font-semibold border border-primary/20 dark:border-gray-600 text-primary dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all posts
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex-1 sm:flex-none text-right">
                <ShareButton 
                  title={post.frontMatter.title}
                  text={`${post.frontMatter.title} - ${post.frontMatter.excerpt}`}
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