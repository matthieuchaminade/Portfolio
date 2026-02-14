"use client";
import React, { useEffect, useRef, useState } from "react";
import BackgroundRects from "./BackgroundRects";
import WhatImDoingTextBlock from "./WhatImDoingTextBlock";

const WhatImDoing = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== 0) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const windowCenter = windowHeight / 2;
        const offset = windowHeight * 0.4;
        const p = 1 - Math.min(Math.max((sectionCenter - windowCenter - offset) / (windowHeight / 2), 0), 1);
        setProgress(p);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Interpolate from top (-40%) to center (0%)
  const rectsOffset = (1 - progress) * -25; // -40% at top, 0% at center
  const textOffset = progress * 10; // Optional: slight parallax for text
  const blur = 5 * (1 - progress); // 10px blur at start, 0px when fully in view

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen py-24 overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          transform: `translateY(${rectsOffset}%)`,
          filter: `blur(${blur}px)`,
          transition: "filter 0.2s ease-out"
        }}
      >
        <div className="w-full px-6 flex items-center justify-center">
          <div
            className="w-full aspect-[1/1]"
            style={{
              maxWidth: "725px",
              maxHeight: "725px",
              minWidth: "600px",
              minHeight: "600px",
            }}
          >
            <BackgroundRects />
          </div>
        </div>
      </div>
      <div
        className="relative flex flex-col items-center justify-center min-h-[400px] z-10"
        style={{
          transform: `translateY(${textOffset}px)`,
          filter: `blur(${blur}px)`,
          transition: "filter 0.2s ease-out"
        }}
      >
        <WhatImDoingTextBlock />
      </div>
    </section>
  );
};

export default WhatImDoing; 