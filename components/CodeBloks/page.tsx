// components/code-block.tsx
"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula, vs } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type CodeBlockProps = {
  language: string;
  children: string;
};

export function CodeBlock({ language, children }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <pre className="my-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <code>{children.trim()}</code>
      </pre>
    );
  }

  const style = resolvedTheme === "dark" ? darcula : vs;

  return (
    <div className="my-4 rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          borderRadius: "0.5rem",
          backgroundColor: resolvedTheme === "dark" ? "#1e1e1e" : "#ffffff",
        }}
        wrapLongLines={true}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}