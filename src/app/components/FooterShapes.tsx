import React from "react";
import "./footer-shapes.css";

const WIDTH = 520;
const HEIGHT = 350;
const RADIUS = 60;
const RECT_WIDTH = 28000;
const RECT_HEIGHT = 300;
const OVERLAP = -300;
const VERT_OFFSET = 150;

/**
 * Footershapes: two large rounded rects, overlapping with vertical offset.
 * Animates like the intro Venn diagram (horizontal drift, 45s ease-in-out).
 */
const FooterShapes = () => (
  <div
    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden"
    aria-hidden
  >
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="block min-w-full min-h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="footershapes-left">
        <rect
          x={0}
          y={(HEIGHT - RECT_HEIGHT) / 2 - VERT_OFFSET / 2}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          rx={RADIUS}
          fill="none"
          stroke="#49474D"
          strokeWidth="0.75"
          vectorEffect="non-scaling-stroke"
          opacity="0.42"
        />
      </g>
      <g className="footershapes-right">
        <rect
          x={WIDTH - RECT_WIDTH - OVERLAP}
          y={(HEIGHT - RECT_HEIGHT) / 2 + VERT_OFFSET / 2}
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          rx={RADIUS}
          fill="none"
          stroke="#49474D"
          strokeWidth="0.75"
          vectorEffect="non-scaling-stroke"
          opacity="0.42"
        />
      </g>
    </svg>
  </div>
);

export default FooterShapes;
