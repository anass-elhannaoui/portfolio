"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CVViewer() {
  const [isMounted, setIsMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const pdfFile = {
    url: "/docs/AnassElHannaoui-CV.pdf",
    name: "AnassElHannaoui-CV.pdf"
  };

  useEffect(() => {
    setIsMounted(true);
    
    fetch(pdfFile.url)
      .then(res => {
        if (!res.ok) throw new Error("PDF not found");
        return res.blob();
      })
      .catch(() => setPdfError(true));
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile.url;
    link.download = pdfFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadTriggered(true);
  };

  if (!isMounted) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-14 bg-background dark:bg-black flex items-center justify-center"
    >
      <p className="text-lg text-muted-foreground dark:text-gray-400">Loading viewer...</p>
    </motion.div>
  );

  if (pdfError) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-14 bg-background dark:bg-black flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 shadow-lg"
        whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
      >
        <p className="mb-6 text-lg text-muted-foreground dark:text-gray-400">PDF could not be loaded</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button 
            onClick={handleDownload} 
            className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300 inline-flex gap-2"
          >
            <Download className="h-4 w-4" /> Download CV
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );

 return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen pt-14 pb-10 bg-background dark:bg-black"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground dark:text-white">
        My Curriculum Vitae
      </h1>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button 
            variant="outline" 
            asChild 
            className="rounded-full px-6 py-2 font-semibold border border-primary/20 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-gray-800 hover:border-primary/40 dark:hover:border-gray-500 transition-all duration-300 text-foreground dark:text-gray-300"
          >
            <Link href="/about" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to About
            </Link>
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button 
            variant="default" 
            onClick={handleDownload} 
            className="rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-primary to-primary/80 dark:from-gray-600 dark:to-gray-600/80 text-white shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Download CV
          </Button>
        </motion.div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="border rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-200/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30 h-[80vh]"
        whileHover={{ boxShadow: "0 6px 15px -5px rgba(0, 0, 0, 0.2)", scale: 1.003 }}
      >
        <iframe 
          src={`${pdfFile.url}#toolbar=0`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="CV Preview"
          onError={() => setPdfError(true)}
        />
      </motion.div>

      {downloadTriggered && (
        <a href={pdfFile.url} download={pdfFile.name} className="hidden" />
      )}
    </div>
  </motion.div>
);
}