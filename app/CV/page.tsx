"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
      className="min-h-screen pt-14 bg-background flex items-center justify-center"
    >
      Loading viewer...
    </motion.div>
  );

  if (pdfError) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-14 bg-background flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="text-center"
      >
        <p className="mb-4">PDF could not be loaded</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={handleDownload} className="inline-flex gap-2">
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
      className="min-h-screen pt-8 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center mb-6"
        >
          <motion.div whileHover={{ x: -2 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline">
              <Link href="/about" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to About
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="border rounded-lg overflow-hidden shadow-lg bg-white h-[80vh]"
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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