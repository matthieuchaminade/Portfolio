import React from "react";

const WIDTH = 700;
const HEIGHT = 700;
const VERT_RECT_WIDTH = 300;
const VERT_RECT_HEIGHT = 700;
const HORZ_RECT_WIDTH = 700;
const HORZ_RECT_HEIGHT = 300;
const RADIUS = 40;

const BackgroundRects = () => (
  <div
    className="w-full max-w-[850px] max-h-[850px] aspect-[1/1] mx-auto flex items-center justify-center z-0 pointer-events-none"
    style={{ animation: "slow-rotate 500s linear infinite" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="block"
    >
      {/* Vertical rectangle */}
      <rect
        x={(WIDTH - VERT_RECT_WIDTH) / 2}
        y={(HEIGHT - VERT_RECT_HEIGHT) / 2}
        width={VERT_RECT_WIDTH}
        height={VERT_RECT_HEIGHT}
        rx={RADIUS}
        fill="none"
        stroke="#323135"
        strokeWidth="1"
        opacity="0.42"
      />
      {/* Horizontal rectangle */}
      <rect
        x={(WIDTH - HORZ_RECT_WIDTH) / 2}
        y={(HEIGHT - HORZ_RECT_HEIGHT) / 2}
        width={HORZ_RECT_WIDTH}
        height={HORZ_RECT_HEIGHT}
        rx={RADIUS}
        fill="none"
        stroke="#323135"
        strokeWidth="1"
        opacity="0.42"
      />
    </svg>
  </div>
);

export default BackgroundRects; 