---
title: "Getting Started with Next.js and TypeScript"
date: "2025-03-15"
excerpt: "Learn how to set up a new project with Next.js and TypeScript, and discover the benefits of this powerful combination."
coverImage: "/images/blog/nextjs-typescript.png"
tags: ["Next.js", "TypeScript", "Web Development"]
author: "Anass El Hannaoui"
---

# Getting Started with Next.js and TypeScript

Next.js and TypeScript make an excellent combination for building modern web applications. In this post, we'll explore how to set up a new project using both technologies and the advantages they offer.

## Why Next.js?

Next.js has become one of the most popular React frameworks, and for good reason. It offers:

- **Server-side rendering** and static site generation
- **Automatic code splitting** for faster page loads
- **Built-in API routes** without requiring a separate backend
- **File-based routing** system that's intuitive to use
- **Hot reloading** during development

## Adding TypeScript to the Mix

TypeScript extends JavaScript by adding static types, which brings several benefits:

- **Catch errors early** during development rather than at runtime
- **Better IDE support** with improved autocomplete and refactoring tools
- **Self-documenting code** that's easier to understand
- **Type inference** that helps you write code faster

## Project Setup

Let's walk through setting up a new Next.js project with TypeScript support.

### 1. Create a new Next.js project

```bash
npx create-next-app@latest my-nextjs-app
```

### 2. Add TypeScript

```bash
cd my-nextjs-app
npm install --save-dev typescript @types/react @types/node
```

### 3. Create a `tsconfig.json` file

Next.js will automatically create a `tsconfig.json` file when you start the development server. However, you can also create one manually:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 4. Rename JavaScript files to TypeScript

Change file extensions:
- `.js` → `.ts`
- `.jsx` → `.tsx`

## A Simple Example

Here's a basic example of a TypeScript component in Next.js:

```tsx
import { GetStaticProps } from 'next';
import React from 'react';

type HomeProps = {
  greeting: string;
};

export default function Home({ greeting }: HomeProps) {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      greeting: 'Hello, Next.js + TypeScript!'
    }
  };
};
```

## Conclusion

Using Next.js with TypeScript provides a robust foundation for building modern web applications. This combination offers excellent developer experience, type safety, and powerful features that simplify building complex applications.

In future posts, we'll dive deeper into specific aspects of Next.js and TypeScript development, including data fetching, authentication, and deployment strategies.

