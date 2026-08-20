import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../../public/images.js";
import SEO from "../SEO.jsx";

const nvidiaGenAI = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState({});
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();

        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-light min-h-screen overflow-hidden">
      {/* SEO */}
      <SEO
        title="NVIDIA GEN AI 5-STAR PARTNER AWARD"
        description="Global Infoventures Pvt. Ltd. has been honoured with the NVIDIA GEN AI 5-STAR PARTNER award in Education."
        keywords={[
          "NVIDIA GEN AI 5-STAR PARTNER",
          "NVIDIA Award",
          "Global Infoventures",
          "GI Ventures",
          "NVIDIA Education Partner",
        ]}
        path="/award/nvidia-genai"
      />

      {/* Background Glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(59, 130, 246, 0.08) 0%,
            transparent 50%
          )`,
        }}
      />

      {/* Main Content */}
      <main className="nk-pages relative z-10">
        <section
          ref={sectionRef}
          className="section bg-light section-l section-about py-12 md:py-16"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Back Button */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-600 hover:text-[#76B900] transition-all duration-300 group"
              >
                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                <span>Back</span>
              </button>
            </div>

            <div className="nk-block">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-4xl">
                  <div className="nk-block-text">
                    {/* Heading */}
                    <h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center transition-all duration-700"
                      style={{
                        opacity: isVisible["heading"] ? 1 : 0,
                        transform: isVisible["heading"]
                          ? "translateY(0)"
                          : "translateY(30px)",
                      }}
                      id="heading"
                      ref={(el) => (textRefs.current[0] = el)}
                    >
                      NVIDIA GEN AI 5-STAR PARTNER AWARD, Mumbai (23 October -
                      25 October 2024) -
                    </h2>

                    <div className="w-full">
                      {/* TEXT SECTION */}
                      <div className="mb-6">
                        <p
                          className="text-sm md:text-base text-justify leading-relaxed"
                          style={{
                            opacity: isVisible["text1"] ? 1 : 0,
                            transform: isVisible["text1"]
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition: "all 0.6s ease-out 0.2s",
                          }}
                          id="text1"
                          ref={(el) => (textRefs.current[1] = el)}
                        >
                          We are thrilled to announce that Global Infoventures
                          Pvt. Ltd. has been honoured with the NVIDIA GEN AI
                          5-STAR PARTNER award in Education! This recognition is
                          a testament to the hardwork, dedication and passion of
                          our incredible team, who continuously strive to push
                          boundaries and deliver the best for our clients and
                          community. It also inspires us to keep innovating and
                          enhancing our services. A huge thank you to our
                          clients, partners and everyone who has supported us on
                          this journey. We couldn't have done it without you!
                          Here’s to more achievements, growth and making an
                          impact together!
                        </p>
                      </div>

                      {/* CENTER IMAGE */}
                      <div
                        className="mb-8 flex justify-center overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"
                        style={{
                          opacity: isBannerLoaded ? 1 : 0,
                          transition: "opacity 0.8s ease-in-out",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setIsImageOpen(true)}
                          className="relative block w-full cursor-zoom-in border-0 bg-transparent p-0"
                          aria-label="Open award image in fullscreen"
                        >
                          <img
                            src={images.FY25}
                            alt="NVIDIA GEN AI 5-STAR PARTNER AWARD"
                            title="NVIDIA GEN AI 5-STAR PARTNER AWARD"
                            className="max-w-full h-auto mx-auto block rounded-lg transition-transform duration-700 hover:scale-105"
                            onLoad={() => setIsBannerLoaded(true)}
                            style={{
                              transform: `scale(${isBannerLoaded ? 1 : 1.05})`,
                            }}
                          />

                          {/* Zoom hint */}
                          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-lg text-xs md:text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Click to view fullscreen
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsImageOpen(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-all duration-300"
            aria-label="Close fullscreen image"
          >
            ×
          </button>

          {/* Fullscreen Image */}
          <img
            src={images.FY25}
            alt="NVIDIA GEN AI 5-STAR PARTNER AWARD"
            className="max-w-full max-h-[95vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default nvidiaGenAI;
