"use client";
import Image from "next/image";
import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function PortfolioGallery({ images = [], backgroundImages = [] }: { images?: string[]; backgroundImages?: string[] }) {
  const [index, setIndex] = useState(0);
  // Limit the number of slides to a maximum of 5
  const slides = (images ?? []).slice(0, 5);
  const hasImages = slides.length > 0;
  const normalize = (p?: string) => (p && !(p.startsWith("http") || p.startsWith("/"))) ? `/${p}` : (p || "");
  const bgImg = normalize(backgroundImages?.[0]);
  function prev() {
    if (!hasImages) return;
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    if (!hasImages) return;
    setIndex((i) => (i + 1) % slides.length);
  }
  return (
    <div className="relative w-full h-full bg-white text-black overflow-hidden rounded-md">
      {/* Half background image overlay */}
      {bgImg && (
        <Image
          src={bgImg}
          alt=""
          fill
          className="absolute left-0 top-0 w-full h-auto opacity-30 pointer-events-none select-none object-cover"
          aria-hidden
          priority
        />
      )}

      {/* Carousel viewport */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {hasImages ? (
          <div className="relative w-full h-full">
            <Image
              src={normalize(slides[index])}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Controls */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <CaretLeft size={18} weight="bold" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <CaretRight size={18} weight="bold" aria-hidden />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full ${i === index ? "bg-black" : "bg-black/30"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />)
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-neutral-500">No images</div>
        )}
      </div>
    </div>
  );
}
