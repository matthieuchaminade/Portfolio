import React from "react";
import "./venn-diagram.css";

const DIAMETER = 640;
const OVERLAP = 200;
const WIDTH = DIAMETER + DIAMETER - OVERLAP;
const RADIUS = DIAMETER / 2 - 1;

const VennDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-5xl aspect-[27/16] mx-auto flex items-center justify-center venn-diagram-responsive-padding venn-diagram-fixed-width">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${WIDTH} ${DIAMETER}`}
        className="block"
      >
        {/* Left circle */}
        <circle
          cx={DIAMETER / 2}
          cy={DIAMETER / 2}
          r={RADIUS}
          stroke="#C1BFBD"
          strokeWidth="1"
          fill="none"
          opacity="0.42"
        />
        {/* Right circle */}
        <circle
          cx={DIAMETER + DIAMETER / 2 - OVERLAP}
          cy={DIAMETER / 2}
          r={RADIUS}
          stroke="#C1BFBD"
          strokeWidth="1"
          fill="none"
          opacity="0.42"
        />
      </svg>
    </div>
  );
};

export default VennDiagram; 