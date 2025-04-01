"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CVViewer() {
  const [isMounted, setIsMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [isDownloadClicked, setIsDownloadClicked] = useState(false);

  const pdfFile = {
    url: "/docs/AnassElHannaoui-CV.pdf",
    name: "Anass_El_Hannaoui_CV.pdf"
  };

  useEffect(() => {
    setIsMounted(true);
    
    // Verify PDF exists
    fetch(pdfFile.url)
      .then(res => {
        if (!res.ok) throw new Error("PDF not found");
        return res.blob();
      })
      .catch(() => setPdfError(true));
  }, []);

  const handleDownloadClick = () => {
    setIsDownloadClicked(true);
  };

  if (!isMounted) return (
    <div className="min-h-screen pt-14 bg-background flex items-center justify-center">
      Loading viewer...
    </div>
  );

  if (pdfError) return (
    <div className="min-h-screen pt-14 bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="mb-4">PDF could not be loaded</p>
        <Button asChild>
          <a href={pdfFile.url} download className="inline-flex gap-2">
            <Download className="h-4 w-4" /> Download CV
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <Button asChild variant="outline">
            <Link href="/about" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to About
            </Link>
          </Button>
          
          <Button asChild variant="default" onClick={handleDownloadClick}>
            <a className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>

        {/* PDF Viewer */}
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white h-[80vh]">
          <iframe 
            src={`${pdfFile.url}#toolbar=0`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="CV Preview"
            onError={() => setPdfError(true)}
          />
        </div>

        {/* Trigger the download when clicked */}
        {isDownloadClicked && (
          <a href={pdfFile.url} download={pdfFile.name} className="hidden" />
        )}
      </div>
    </div>
  );
}
