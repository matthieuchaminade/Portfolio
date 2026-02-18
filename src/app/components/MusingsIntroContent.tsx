"use client";
import React from "react";

export default function MusingsIntroContent() {
  return (
    <div className="pointer-events-auto w-full flex justify-center">
      <div className="max-w-[450px] flex flex-col items-start justify-center px-6 sm:px-0 text-left">
<h1
        className="font-title tracking-tight uppercase"
        style={{
          color: "#B4B3B5",
          fontSize: "clamp(4rem, 6vw, 5.5rem)",
          lineHeight: "1.1",
          marginBottom: "8px",
        }}
        >
        Musings
      </h1>
        <p
          className="w-full font-bodymono"
          style={{
            color: "#B4B3B5",
            fontSize: "clamp(1rem, 2vw, 1rem)",
            lineHeight: "22px",
          }}
        >
          A collection of things that are top of mind for me. A place to put some thoughts down to both reflect on the present and to look back upon to see how things played out. I write the way I talk and this is by no means meant to be good writing. Most of this stuff is anecdotal and really just my experience and observations of the world. More to come.
        </p>
      </div>
    </div>
  );
}
