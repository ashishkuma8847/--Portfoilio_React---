import React, { useState } from "react";
import { motion } from "framer-motion";

// CVDownloadButton.jsx
export default function CvButton({fileUrl = "/cv.pdf", fileName = "CV",className = "",}) 
{
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  // Download with progress using Fetch + ReadableStream
  const handleDownload = async () => {
    setError(null);
    try {
      setDownloading(true);
      setProgress(0);

      const res = await fetch(fileUrl);
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

      const contentLength = res.headers.get("content-length");
      if (!res.body) throw new Error("ReadableStream not supported in this browser.");

      const total = contentLength ? parseInt(contentLength, 10) : null;
      const reader = res.body.getReader();
      const chunks = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total) setProgress(Math.round((received / total) * 100));
        else setProgress((p) => Math.min(99, p + 10));
      }

      const blob = new Blob(chunks, { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => window.URL.revokeObjectURL(url), 1000);

      setProgress(100);
    } catch (err) {
      console.error(err);
      setError(err.message || "Download failed");
    } finally {
      setTimeout(() => {
        setDownloading(false);
        setProgress(0);
      }, 700);
    }
  };

  const simpleDownloadHref = `${fileUrl}`;

  return (
    <div className={`inline-block font-poppins ${className}`}>
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        // 👇 Button color updated to teal gradient with #12BBB6
        className={` inline-flex items-center gap-3 md:px-5 px-3 py-1 md:py-3 rounded-2xl shadow-lg 
        select-none focus:outline-none focus:ring-4 focus:ring-[#12BBB6]/40 
        bg-gradient-to-r from-[#12BBB6] to-[#0fa9a4] 
        text-white font-semibold`}
      >
        {/* Animated download icon + label */}
        <motion.span
          transition={{ repeat: downloading ? Infinity : 0, duration: downloading ? 1.2 : 0 }}
          className="w-6 h-6 flex items-center justify-center"
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </motion.span>

        <div className={`${downloading ? "hidden" : "block"} flex flex-col text-left`}>
          <span className="text-lg ">{fileName}</span>
        </div>

        {/* Progress bar */}
          {downloading && (
        <div className="ml-3">
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-white/90 rounded-full"
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="text-lg w-8 text-right">{progress}<span className="text-xs">%</span></div>
            </div>
        </div>
          )}
      </motion.button>

      {/* Error message */}
      {error && <div className="mt-2 text-sm text-red-500">Error: {error}</div>}

      {/* Fallback link */}
      <a href={simpleDownloadHref} download={fileName} className="sr-only" aria-hidden>
        Direct download link
      </a>

      <div className="sr-only " role="status" aria-live="polite">
        {downloading ? `Downloading ${fileName}: ${progress}%` : "Ready to download CV"}
      </div>
    </div>
  );
}
