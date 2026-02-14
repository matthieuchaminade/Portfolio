import React from "react";

const WhoTextBlock: React.FC = () => {
  return (
    <div className="mx-auto w-full flex flex-col items-start justify-center px-6 sm:px-0">
      <h1 className="font-title tracking-tight" style={{ color: '#1E2738', fontSize: 'clamp(4rem, 6vw, 5.5rem)', lineHeight: '1.1', marginBottom: '8px' }}>WHO</h1>
      <p className="w-full max-w-[450px] font-bodymono" style={{ color: '#2E2F35', fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '22px' }}>
      Welcome to my corner of the web, I am a product designer working on everyday tools and AI. I thrive in problem spaces with lots of ambiguity and love the process of working through it. Currently working at Microsoft on the Windows Design Team.
      </p>
    </div>
  );
};

export default WhoTextBlock; 