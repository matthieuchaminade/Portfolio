"use client";
import React, { useEffect, useRef, useState } from "react";

const WhatImDoingTextBlock = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== 0) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        if (textRef.current) {
          const rect = textRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const windowCenter = windowHeight / 2;
          const distanceFromCenter = elementCenter - windowCenter;
          const parallaxOffset = distanceFromCenter * 0.1;
          setScrollY(parallaxOffset);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      ref={textRef}
      className="relative z-10 mx-auto w-full max-w-[600px] bg-transparent flex flex-col items-start justify-center text-left p-8"
      style={{ transform: `translateY(${scrollY}px)` }}
    >
      <h2 className="font-title tracking-tight mb-2 text-left w-full" style={{ color: '#1E2738', fontSize: '3rem', fontWeight: 400, marginBottom: '0.5rem' }}>
        WHAT I&apos;M WORKING ON
      </h2>
      <div className="text-left w-full font-bodymono" style={{ color: '#2E2F35', fontSize: '1rem', lineHeight: '1.6' }}>
        <div className="mb-4">
          <span className="font-bold" style={{ color: '#1E2738', display: 'block', marginBottom: '0.25rem' }}>Primary role</span>
          <p>
            Senior Product Designer at Microsoft on the Windows design team. I work mostly on what we call the inbox apps. I re-did the visual design for Paint, Snipping tool and Sound recorder for Windows 11. Since then I&apos;ve shipped various features for each of those products (some AI, some not) and am currently owning design for Notepad.
          </p>
        </div>
        <div>
          <span className="font-bold" style={{ color: '#1E2738', display: 'block', marginBottom: '0.25rem' }}>But also</span>
          <p>
            Driving new product ideas, from ideation to product narratives and pitches. Right now this includes mostly ideas around AI. I am passionate about this type of work. I love exploring new ideas around human computer interaction and love writing product narratives focused on getting to the root of why a product matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatImDoingTextBlock; 