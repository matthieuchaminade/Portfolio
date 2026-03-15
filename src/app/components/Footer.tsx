"use client";

import React, { useState } from "react";
import FooterShapes from "./FooterShapes";

const EMAIL = "matthieuchaminade@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <footer
      className="relative w-full py-16 flex items-center justify-center overflow-hidden"
      style={{ background: "#F3F1EE" }}
    >
      <FooterShapes />
      <div className="relative z-10 flex items-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy email"}
          className="flex-shrink-0 w-10 h-10 rounded-[8px] flex items-center justify-center text-[#2E2F35] bg-[#FFFFFF] hover:bg-[#F8F7F5] transition-colors"
        >
          {copied ? (
            <span className="font-bodymono text-xs">✓</span>
          ) : (
            <img src="/icons/copy.svg" alt="" width={18} height={18} style={{ display: "block" }} />
          )}
        </button>
        <span
          className="font-bodymono select-all"
          style={{
            color: "#2E2F35",
            fontSize: "1rem",
            lineHeight: "22px",
          }}
        >
          {EMAIL}
        </span>
      </div>
    </footer>
  );
}
