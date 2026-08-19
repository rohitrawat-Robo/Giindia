import React, { useState, useEffect, useRef } from 'react';
import images from '../../public/images.js';

const Awards = () => {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for immersive glow effect
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-light min-h-screen overflow-hidden">
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Main Content */}
      <main className="nk-pages relative z-10">
        <section 
          ref={sectionRef}
          className="section bg-light section-l section-about py-12 md:py-16"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="nk-block">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-4xl">
                  <div className="nk-block-text">
                    {/* Animated Heading */}
                    <h2 
                      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-center transition-all duration-700"
                      style={{
                        opacity: isVisible['heading'] ? 1 : 0,
                        transform: isVisible['heading'] ? 'translateY(0)' : 'translateY(30px)',
                      }}
                      id="heading"
                      ref={el => textRefs.current[0] = el}
                    >
                      Economic Times Conclave & Awards (2026) -
                    </h2>

                    <div className="w-full">
                      {/* BANNER */}
                      <div 
                        className="mb-8 overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"
                        style={{
                          opacity: isBannerLoaded ? 1 : 0,
                          transition: 'opacity 0.8s ease-in-out',
                        }}
                      >
                        <img
                          src={images.bannerImg}
                          alt="ET AI Conclave & Awards 2026"
                          title="ET AI Conclave & Awards 2026"
                          className="w-full block border-0 rounded-lg transition-transform duration-700 hover:scale-105"
                          onLoad={() => setIsBannerLoaded(true)}
                          style={{
                            transform: `scale(${isBannerLoaded ? 1 : 1.05})`,
                          }}
                        />
                      </div>

                      {/* TEXT SECTION */}
                      <div className="mb-6">
                        <p 
                          className="text-sm md:text-base text-justify leading-relaxed"
                          style={{
                            opacity: isVisible['text1'] ? 1 : 0,
                            transform: isVisible['text1'] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s ease-out 0.2s',
                          }}
                          id="text1"
                          ref={el => textRefs.current[1] = el}
                        >
                          <img
                            src={images.etnow}
                            alt="ET AI Conclave & Awards 2026"
                            title="ET AI Conclave & Awards 2026"
                            className="float-left mr-4 block border-0 w-16 md:w-20 hover:scale-110 transition-transform duration-300"
                          />
                          We are proud to share that GI Ventures has been honored with
                          a prestigious national award at the
                          Economic Times Conclave & Awards 2026 for its groundbreaking
                          contributions to AI infrastructure,
                          deployment and AI up-skilling.
                        </p>

                        <p 
                          className="text-sm md:text-base text-justify mt-4 leading-relaxed"
                          style={{
                            opacity: isVisible['text2'] ? 1 : 0,
                            transform: isVisible['text2'] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s ease-out 0.4s',
                          }}
                          id="text2"
                          ref={el => textRefs.current[2] = el}
                        >
                          This recognition celebrates our excellence
                          in the deployment of real-world, scalable AI infrastructure
                          and strategic AI up-skilling,
                          reaffirming our commitment to transforming cutting-edge
                          innovation into practical, high-impact
                          solutions. By building robust, scalable systems and enabling
                          seamless integration across industries,
                          GI Ventures continues to set new benchmarks for
                          operationalizing AI at scale in India.
                        </p>
                      </div>

                      {/* VIDEO */}
                      <div 
                        className="mb-8 text-center"
                        onMouseEnter={() => setIsVideoHovered(true)}
                        onMouseLeave={() => setIsVideoHovered(false)}
                        style={{
                          opacity: isVisible['video'] ? 1 : 0,
                          transform: isVisible['video'] ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'all 0.6s ease-out 0.6s',
                        }}
                        id="video"
                        ref={el => textRefs.current[3] = el}
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 max-w-3xl mx-auto">
                          <a
                            href="https://youtu.be/hKO03ueCnWA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline block relative"
                          >
                            <img
                              src={images.video}
                              alt="Watch Video"
                              className="w-full block border-0 transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-500 ${isVideoHovered ? 'opacity-100 bg-black/40' : 'opacity-0'}`}>
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-white">
                                <div className="w-0 h-0 border-t-[12px] md:border-t-[15px] border-t-transparent border-l-[20px] md:border-l-[25px] border-l-blue-600 border-b-[12px] md:border-b-[15px] border-b-transparent ml-1 md:ml-2"></div>
                              </div>
                            </div>
                            {/* Pulsing ring animation */}
                            <div className={`absolute inset-0 border-2 border-white/30 rounded-lg transition-all duration-1000 ${isVideoHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>
                          </a>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          <a
                            href="https://youtu.be/hKO03ueCnWA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:underline inline-flex items-center gap-1 hover:gap-2"
                          >
                            <span className="inline-block animate-pulse">▶</span> Click to watch the video
                          </a>
                        </p>
                      </div>

                      {/* FOOTER TEXT */}
                      <div className="mb-4">
                        <p 
                          className="text-sm md:text-base text-justify leading-relaxed"
                          style={{
                            opacity: isVisible['footer1'] ? 1 : 0,
                            transform: isVisible['footer1'] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s ease-out 0.8s',
                          }}
                          id="footer1"
                          ref={el => textRefs.current[4] = el}
                        >
                          Beyond technology, this award highlights our focus on
                          institutionalized innovation—where AI adoption
                          is complemented by continuous workforce development. Through
                          our strategic up-skilling initiatives,
                          we empower professionals to effectively harness AI
                          capabilities, enabling sustainable, future-ready
                          growth.
                        </p>

                        <p 
                          className="text-sm md:text-base text-justify mt-4 leading-relaxed"
                          style={{
                            opacity: isVisible['footer2'] ? 1 : 0,
                            transform: isVisible['footer2'] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s ease-out 1.0s',
                          }}
                          id="footer2"
                          ref={el => textRefs.current[5] = el}
                        >
                          As we continue to drive India's digital
                          transformation journey, this recognition strengthens our
                          resolve to create long-term value and
                          enhance the nation's global competitiveness in AI.
                        </p>

                        <p 
                          className="text-sm md:text-base text-justify mt-4 leading-relaxed"
                          style={{
                            opacity: isVisible['footer3'] ? 1 : 0,
                            transform: isVisible['footer3'] ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s ease-out 1.2s',
                          }}
                          id="footer3"
                          ref={el => textRefs.current[6] = el}
                        >
                          We thank you for being a part of our
                          journey and look forward to many more milestones together.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Awards;