// src/components/Carousel.jsx
//
// Small, dependency-free horizontal carousel built on native CSS scroll-snap.
// Reusable for any list of items -- pass `items` + a `renderItem` function.
//
// Why scroll-snap instead of manual transform math:
// - Touch/trackpad swipe works for free (it's just native scrolling).
// - No index/width bookkeeping that gets out of sync on resize.
// - Prev/Next buttons just scroll by one viewport-width "page".
//
// Responsive items-per-view (3 desktop / 2 tablet / 1 mobile) is controlled
// by the `itemClassName` widths below -- change them if you want a different
// breakpoint split.

import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Carousel({
  items,
  renderItem,
  itemClassName = "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  gapClassName = "gap-6",
  className = "",
  ariaLabel = "Carousel",
}) {
  const trackRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateScrollState, items.length]);

  const scrollByPage = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * direction, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByPage(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByPage(-1);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Prev button */}
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        disabled={!canScrollPrev}
        aria-label="Previous events"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10
                   flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full
                   bg-white border border-slate-200 shadow-md text-slate-700
                   disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700
                   hover:border-[#76B900] hover:text-[#76B900] transition-colors duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        disabled={!canScrollNext}
        aria-label="Next events"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10
                   flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full
                   bg-white border border-slate-200 shadow-md text-slate-700
                   disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700
                   hover:border-[#76B900] hover:text-[#76B900] transition-colors duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={`flex ${gapClassName} overflow-x-auto scroll-smooth snap-x snap-mandatory
                    no-scrollbar rounded-2xl focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#76B900]/40`}
      >
        {items.map((item, i) => (
          <div key={item.id ?? item.slug ?? i} className={`snap-start shrink-0 ${itemClassName}`}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}