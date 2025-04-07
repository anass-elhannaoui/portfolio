import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import BlogPostContent from '@/components/BlogPostContent/page';

interface FrontMatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string | null;
  tags: string[];
  author: string;
  readingTime: string;
}

interface BlogPost {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({ slug: filename.replace('.md', '') }));
}

async function getPostBySlug(slug: string): Promise<BlogPost> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML with proper heading support
  const htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, {
      allowDangerousHtml: true,
      // Remove the custom heading handler that's causing the TypeScript error
    })
    .use(rehypeRaw)
    .use(rehypeSlug) // rehypeSlug already handles adding IDs to headings
    .use(rehypePrism, {
      ignoreMissing: true,
      plugins: ['line-numbers', 'command-line'],
    })
    .use(rehypeStringify)
    .process(content);

  // Process custom components
  const processedHtml = processCustomComponents(htmlContent.toString());

  const frontMatter: FrontMatter = {
    title: data.title || 'Untitled Post',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || null,
    tags: data.tags || [],
    author: data.author || 'Anonymous',
    readingTime: data.readingTime || calculateReadingTime(content),
  };

  return {
    slug,
    frontMatter,
    content: processedHtml,
  };
}

function processCustomComponents(html: string): string {
  // Only process custom components, leave headings as-is
  return html
    .replace(/<p>%%%(\w+)([\s\S]*?)%%%<\/p>/g, (match, type, content) => {
      return `<div data-component="callout" data-type="${type.trim()}">${content.trim()}</div>`;
    })
    .replace(/<p>\$\$\$(\w+)([\s\S]*?)\$\$\$<\/p>/g, (match, type, content) => {
      return `<div data-component="alert" data-type="${type.trim()}">${content.trim()}</div>`;
    })
    .replace(/<p>@@@(\w+)([\s\S]*?)@@@<\/p>/g, (match, type, content) => {
      return `<div data-component="feature" data-type="${type.trim()}">${content.trim()}</div>`;
    })
    .replace(/<p>~~~(\w*)([\s\S]*?)~~~<\/p>/g, (match, lang, content) => {
      return `<div data-component="codeplayground" data-lang="${lang.trim()}">${content.trim()}</div>`;
    });
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return <BlogPostContent post={post} />;
}