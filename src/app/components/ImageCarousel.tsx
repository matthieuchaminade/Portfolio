import React, { useState } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg"
];

const ImageCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full flex flex-col items-center mt-12">
      <div className="relative flex items-center justify-center w-full max-w-3xl h-96">
        {/* Slides */}
        {images.map((src, idx) => {
          // Calculate position relative to active slide
          const offset = idx - activeIndex;
          let className =
            "absolute transition-all duration-500 ease-in-out rounded-3xl overflow-hidden";
          if (offset === 0) {
            className += " z-20 scale-100 blur-0 shadow-xl";
          } else if (Math.abs(offset) === 1) {
            className += " z-10 scale-90 blur-sm opacity-80";
            className += offset < 0 ? " -translate-x-24" : " translate-x-24";
          } else {
            className += " z-0 scale-75 blur-md opacity-0 pointer-events-none";
          }
          return (
            <img
              key={src}
              src={src}
              alt={`Slide ${idx + 1}`}
              className={className + " w-3/4 h-80 object-cover"}
              style={{ left: "50%", transform: `translateX(-50%) ${offset < 0 ? `translateX(-6rem)` : offset > 0 ? `translateX(6rem)` : ""}` }}
            />
          );
        })}
        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-30"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-30"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === activeIndex ? "bg-gray-800" : "bg-gray-400"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;