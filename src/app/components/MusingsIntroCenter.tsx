"use client";
import React, { useContext } from "react";
import { IntroBlurContext, IntroScrollContext } from "./IntroLayout";
import BackgroundRects from "./BackgroundRects";
import MusingsIntroContent from "./MusingsIntroContent";

export default function MusingsIntroCenter() {
  const scrollY = useContext(IntroScrollContext);
  const blur = useContext(IntroBlurContext);
  const textOffset = scrollY * 0.1;

  return (
    <>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{ filter: `blur(${blur}px)`, transition: "filter 0.2s" }}
      >
        <div className="w-full px-6 flex items-center justify-center max-w-5xl">
          <BackgroundRects />
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 z-20 w-full flex justify-center pointer-events-none"
        style={{ transform: `translate(-50%, calc(-50% + ${textOffset}px))` }}
      >
        <MusingsIntroContent />
      </div>
    </>
  );
}
