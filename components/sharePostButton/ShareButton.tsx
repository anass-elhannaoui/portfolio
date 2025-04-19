"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ShareOption = {
  name: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function ShareButton({
  title,
  text,
  url
}: {
  title: string;
  text: string;
  url: string;
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Wait for client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setShowDialog(false);
      }
    };

    if (showDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDialog]);

  // Ensure URL is absolute
  const getAbsoluteUrl = () => {
    const absoluteUrl = url.startsWith('http') ? url : 
      (typeof window !== 'undefined' ? `${window.location.origin}${url.startsWith('/') ? url : `/${url}`}` : url);
    return absoluteUrl;
  };

  // Format share text - Fixed to prevent duplicate title
  const getFormattedText = () => {
    return `${title}\n\n${text}\n\n${getAbsoluteUrl()}`;
  };

  // Copy to clipboard function
  const copyToClipboard = async () => {
    try {
      const content = getFormattedText();
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(content);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setShowCopyTooltip(true);
      setTimeout(() => setShowCopyTooltip(false), 2000);
      setTimeout(() => setShowDialog(false), 500); // Close dialog after copying
    } catch (err) {
      console.error("Clipboard error:", err);
    }
  };

  // Create share options with improved icons
  const shareOptions: ShareOption[] = [
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" className="text-green-500">
          <path fill="currentColor" d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.896-9.884 2.645 0 5.13 1.03 7.011 2.906a9.865 9.865 0 012.909 7.021c-.002 5.449-4.437 9.881-9.885 9.881M20.892 3.13C18.596.834 15.525-.083 12.25.011 5.57.214.214 5.65.011 12.321c-.07 2.25.474 4.443 1.565 6.375l-1.65 6.024 6.171-1.619c1.855.99 3.944 1.514 6.059 1.514h.006c6.749 0 12.257-5.496 12.459-12.242.111-3.275-.786-6.355-3.079-8.623" />
        </svg>
      ),
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(getFormattedText())}`, '_blank');
      }
    },
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" className="text-blue-600">
          <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getAbsoluteUrl())}`, '_blank');
      }
    },
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" className="text-black">
          <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(getFormattedText())}`, '_blank');
      }
    },
    {
      name: "Email",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" className="text-gray-500">
          <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 11.9-1.44L12 11l6.7-4.19a.85.85 0 11.9 1.44z" />
        </svg>
      ),
      action: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(getFormattedText())}`;
      }
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" className="text-blue-700">
          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getAbsoluteUrl())}`, '_blank');
      }
    }
  ];

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  // Share dialog modal component with improved UI
  const ShareDialog = () => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={() => setShowDialog(false)}
    >
      <div 
        ref={dialogRef} 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Share this content</h3>
          <button 
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none transition-colors" 
            onClick={() => setShowDialog(false)}
            aria-label="Close dialog"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-6 py-5">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className="flex flex-col items-center space-y-2 group"
                aria-label={`Share on ${option.name}`}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
                  {option.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{option.name}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-6">
            <label htmlFor="share-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Copy link
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                id="share-url"
                type="text"
                readOnly
                value={getAbsoluteUrl()}
                className="block w-full pr-24 border border-gray-200 dark:border-gray-600 rounded-lg py-2.5 px-4 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center px-4 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          
          {showCopyTooltip && (
            <div className="text-center mt-3 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 py-1.5 rounded-md">
              Content copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={toggleDialog}
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        aria-label="Share this post"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share
      </button>
      
      {/* Render dialog portal */}
      {mounted && showDialog && createPortal(
        <ShareDialog />,
        document.body
      )}
    </>
  );
}