"use client";

import React, { useRef, useEffect, useState } from "react";

const WIDTH = 800;
const HEIGHT = 600;
const STROKE = "#49474D";
// Match FooterShapes (Venn diagram) stroke width
const STROKE_WIDTH = 0.75;
const OPACITY = 0.42;

// Two triangles with squiggly/wavy edges (cubic Bezier curves)
// Triangle 1: wavy edges between (120,500), (400,80), (680,500)
const TRIANGLE_1 =
  "M 120 500 C 220 480 320 280 400 80 C 480 200 580 380 680 500 C 560 520 320 520 120 500 Z";
// Triangle 2: wavy edges between (150,100), (500,520), (650,120)
const TRIANGLE_2 =
  "M 150 100 C 320 140 420 400 500 520 C 560 380 620 200 650 120 C 480 90 280 90 150 100 Z";

type SectionRect = { top: number; left: number; width: number; height: number };

const BackgroundTriangles = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clipPath, setClipPath] = useState<string>("inset(0 0 0 0)");
  const [sectionRect, setSectionRect] = useState<SectionRect | null>(null);

  useEffect(() => {
    const section = wrapperRef.current?.parentElement;
    if (!section) return;

    const updateClip = () => {
      const rect = section.getBoundingClientRect();
      setSectionRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
      const top = rect.top;
      const right = window.innerWidth - rect.right;
      const bottom = window.innerHeight - rect.bottom;
      const left = rect.left;
      setClipPath(`inset(${top}px ${right}px ${bottom}px ${left}px)`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0, rootMargin: "20% 0px" }
    );
    observer.observe(section);
    updateClip();
    window.addEventListener("scroll", updateClip, { passive: true });
    window.addEventListener("resize", updateClip);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateClip);
      window.removeEventListener("resize", updateClip);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-out",
        clipPath,
      }}
    >
      {sectionRect && (
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="xMidYMid slice"
          className="block absolute"
          style={{
            left: sectionRect.left,
            top: sectionRect.top,
            width: sectionRect.width,
            height: sectionRect.height,
          }}
        >
          <path
            d={TRIANGLE_1}
            fill="none"
            stroke={STROKE}
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={OPACITY}
          />
          <path
            d={TRIANGLE_2}
            fill="none"
            stroke={STROKE}
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={OPACITY}
          />
        </svg>
      )}
    </div>
  );
};

export default BackgroundTriangles;
