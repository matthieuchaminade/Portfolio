"use client";
import React, { useEffect, useRef, useState } from "react";
import VennDiagram from "./VennDiagram";
import WhoTextBlock from "./WhoTextBlock";
import Header from "./Header";

const IntroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [blur, setBlur] = useState(0);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== 0) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        setScrollY(window.scrollY);
        const section = document.getElementById("intro-section");
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const blurStart = 0.3;
          const rawProgress = (windowHeight - rect.bottom) / windowHeight;
          const progress = Math.min(Math.max((rawProgress - blurStart) / (1 - blurStart), 0), 1);
          setBlur(progress * 10);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax factors
  const vennOffset = scrollY * 0.3; // VennDiagram moves more
  const textOffset = scrollY * 0.1; // Text block moves less

  return (
    <section
      id="intro-section"
      className="flex items-center justify-center min-h-screen bg-white relative overflow-hidden"
      style={{ position: "relative", filter: `blur(${blur}px)`, transition: "filter 0.2s" }}
    >
      <Header />
      <div
        className="w-full max-w-5xl aspect-[27/16] mx-auto flex items-center justify-center venn-diagram-responsive-padding venn-diagram-fixed-width"
        style={{ transform: `translateY(${vennOffset}px)` }}
      >
        <VennDiagram />
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center pointer-events-none"
        style={{ transform: `translate(-50%, calc(-50% + ${textOffset}px))` }}
      >
        <div className="pointer-events-auto">
          <WhoTextBlock />
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 