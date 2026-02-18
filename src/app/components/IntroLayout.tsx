"use client";
import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

const INTRO_SLOTS = [
  { col: "1 / 4", row: "1 / 5" },    // top left
  { col: "1 / 4", row: "5 / 9" },    // bottom left
  { col: "8 / 11", row: "5 / 9" },   // bottom right
];

const INTRO_IMAGE_SRCS = [
  "/images/Introsection/doodle_phone.jpg",
  "/images/Introsection/doodle_lamp.jpg",
  "/images/Introsection/doodle_fan.jpg",
  "/images/Introsection/surface_mouse.jpg",
];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export const IntroScrollContext = createContext(0);
export const IntroBlurContext = createContext(0);

interface IntroLayoutProps {
  id?: string;
  showImageGrid?: boolean;
  background?: string;
  children: React.ReactNode;
}

const IntroLayout = ({ id = "intro-section", showImageGrid = true, background = "#F3F1EE", children }: IntroLayoutProps) => {
  const [imageOrder, setImageOrder] = useState(() => INTRO_IMAGE_SRCS.slice(0, 3));
  const [scrollY, setScrollY] = useState(0);
  const [blur, setBlur] = useState(0);
  const rafIdRef = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showImageGrid) setImageOrder(shuffle([...INTRO_IMAGE_SRCS]).slice(0, 3));
  }, [showImageGrid]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== 0) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        setScrollY(window.scrollY);
        const section = sectionRef.current;
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
    handleScroll();
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="flex items-center justify-center min-h-screen relative overflow-hidden"
      style={{
        position: "relative",
        background,
        ...(showImageGrid && { filter: `blur(${blur}px)`, transition: "filter 0.2s" }),
      }}
    >
      {showImageGrid && (
        <div
          className="absolute inset-0 z-0 grid grid-cols-10 gap-2 p-4 pointer-events-none"
          style={{ gridTemplateRows: "repeat(8, minmax(0, 1fr))" }}
        >
          {INTRO_SLOTS.map((slot, i) => (
            <div
              key={i}
              className="rounded-[50px] overflow-hidden flex items-center justify-center min-h-0 min-w-0"
              style={{ gridColumn: slot.col, gridRow: slot.row }}
            >
              <img
                src={imageOrder[i]}
                alt=""
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-[50px] opacity-75"
              />
            </div>
          ))}
        </div>
      )}
      <IntroScrollContext.Provider value={scrollY}>
        <IntroBlurContext.Provider value={blur}>
          {children}
        </IntroBlurContext.Provider>
      </IntroScrollContext.Provider>
    </section>
  );
};

export default IntroLayout;
