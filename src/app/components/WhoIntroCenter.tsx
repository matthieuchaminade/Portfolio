"use client";
import React, { useContext } from "react";
import { IntroScrollContext } from "./IntroLayout";
import VennDiagram from "./VennDiagram";
import WhoTextBlock from "./WhoTextBlock";

export default function WhoIntroCenter() {
  const scrollY = useContext(IntroScrollContext);
  const vennOffset = scrollY * 0.3;
  const textOffset = scrollY * 0.1;

  return (
    <>
      <div
        className="w-full max-w-5xl aspect-[27/16] relative z-10 mx-auto flex items-center justify-center venn-diagram-responsive-padding venn-diagram-fixed-width"
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
    </>
  );
}
