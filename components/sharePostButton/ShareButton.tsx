"use client";

import React, { useState } from "react";

export default function ShareButton({ title, text, url }: { title: string; text: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const sharePost = async () => {
    // Check if Web Share API is available (mobile devices)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } 
    // Fallback for desktop
    else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
          setTimeout(() => setCopied(false), 300); // Small delay for smooth transition
        }, 2000);
      } catch (error) {
        // Final fallback for browsers without clipboard API
        console.error("Clipboard copy failed:", error);
        
        // Create a temporary input element to copy
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        
        setCopied(true);
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
          setTimeout(() => setCopied(false), 300);
        }, 2000);
      }
    }
  };

  return (
    <div className="relative">
      <button
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Share this post"
        onClick={sharePost}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        {copied ? "Copied!" : "Share"}
      </button>
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
          <div className="bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            Link copied to clipboard!
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
}