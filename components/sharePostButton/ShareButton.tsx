"use client";
import React, { useState, useEffect } from "react";

export default function ShareButton({
  title,
  text,
  url
}: {
  title: string;
  text: string;
  url: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [canShare, setCanShare] = useState(false);

  // Check if Web Share API is available on component mount
  useEffect(() => {
    // Check if navigator.share exists as a function
    setCanShare(typeof navigator !== 'undefined' && 
                typeof navigator.share === 'function');
  }, []);

  const shareContent = async () => {
    const shareData = {
      title: title,
      text: text,
      url: url
    };

    // First try Web Share API for mobile devices
    if (canShare) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        console.error("Sharing failed:", err);
        // If sharing specifically failed (not canceled), fall back to clipboard
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          fallbackToCopy();
        }
        return;
      }
    }

    // If Web Share API is not available, fall back to clipboard
    fallbackToCopy();
  };

  const fallbackToCopy = async () => {
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(`${title}\n\n${text}\n\n${url}`);
      setTooltipMessage("Link copied to clipboard!");
      setShowTooltip(true);
    } catch (err) {
      // Final fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = `${title}\n\n${text}\n\n${url}`;
        textarea.style.position = 'fixed'; // Prevent scrolling to bottom
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        
        if (successful) {
          setTooltipMessage("Link copied to clipboard!");
        } else {
          setTooltipMessage("Couldn't copy. Try manually.");
        }
        setShowTooltip(true);
      } catch (e) {
        setTooltipMessage("Sharing not supported on this device");
        setShowTooltip(true);
      }
    }
    
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={shareContent}
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
        aria-label="Share this post"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
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
        Share
      </button>
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
          <div className="bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            {tooltipMessage}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
}