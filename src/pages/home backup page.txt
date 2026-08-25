import React, { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const ecosystemRef = useRef(null);
  const ctaRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    setIsLoaded(true);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const sections = [
      { ref: heroRef, id: "hero" },
      { ref: solutionsRef, id: "solutions" },
      { ref: ecosystemRef, id: "ecosystem" },
      { ref: ctaRef, id: "cta" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [isLoaded]);

  // Generate network data
  const networkData = useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return { nodes: [], lines: [], particles: [] };
    }

    const w = dimensions.width;
    const h = dimensions.height;

    let densityFactor = 0.8;
    if (dimensions.width < 640) densityFactor = 0.3;
    else if (dimensions.width < 1024) densityFactor = 0.6;

    const nodeCount = Math.floor(12 * densityFactor);
    const nodes = [];
    const lines = [];
    const particles = [];

    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 43758.5453;
      return x - Math.floor(x);
    };

    const anchors = [
      { x: w * 0.1, y: h * 0.1, color: "blue" },
      { x: w * 0.9, y: h * 0.1, color: "blue" },
      { x: w * 0.1, y: h * 0.9, color: "green" },
      { x: w * 0.9, y: h * 0.9, color: "green" },
      { x: w * 0.5, y: h * 0.35, color: "blue" },
      { x: w * 0.5, y: h * 0.65, color: "green" },
      { x: w * 0.3, y: h * 0.5, color: "blue" },
      { x: w * 0.7, y: h * 0.5, color: "green" },
      { x: w * 0.4, y: h * 0.3, color: "blue" },
      { x: w * 0.6, y: h * 0.7, color: "green" },
      { x: w * 0.2, y: h * 0.4, color: "blue" },
      { x: w * 0.8, y: h * 0.6, color: "green" },
    ];

    const allNodes = [...anchors];

    for (let i = 0; i < Math.max(0, nodeCount - anchors.length); i++) {
      const seed = i * 100 + anchors.length;
      allNodes.push({
        x: w * (0.1 + 0.8 * seededRandom(seed)),
        y: h * (0.1 + 0.8 * seededRandom(seed + 50)),
        color: seededRandom(seed + 100) > 0.5 ? "blue" : "green",
      });
    }

    allNodes.forEach((n, idx) => (n.id = idx));

    const lineDistance = Math.min(w, h) * 0.35;
    for (let i = 0; i < allNodes.length; i++) {
      for (let j = i + 1; j < allNodes.length; j++) {
        const dx = allNodes[i].x - allNodes[j].x;
        const dy = allNodes[i].y - allNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < lineDistance && seededRandom(i * 7 + j * 13) > 0.3) {
          const color =
            allNodes[i].color === allNodes[j].color
              ? allNodes[i].color
              : "blue";
          lines.push({
            from: i,
            to: j,
            color: color,
            dash: seededRandom(i * 3 + j * 7) > 0.7,
          });
        }
      }
    }

    const particleCount = Math.min(6, Math.floor(lines.length * 0.2));
    const shuffledLines = [...lines].sort(() => seededRandom(42) - 0.5);
    for (let i = 0; i < particleCount && i < shuffledLines.length; i++) {
      const line = shuffledLines[i];
      particles.push({
        path: [line.from, line.to],
        color: line.color,
      });
    }

    return { nodes: allNodes, lines, particles };
  }, [dimensions]);

  const getDuration = (base) => {
    if (isReducedMotion) return 0;
    return base * (1 + 0.3 * Math.random());
  };

  // Interactive floating particles
  const FloatingParticles = () => {
    const particles = useMemo(() => {
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        speed: 0.5 + Math.random() * 1.5,
        delay: Math.random() * 5,
        color: Math.random() > 0.5 ? "#1940B0" : "#76B900",
      }));
    }, []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0.15,
              animation: `float ${p.speed}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}
        <style>{`
          @keyframes float {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.5); }
          }
        `}</style>
      </div>
    );
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#08193A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#1940B0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Interactive Background Layer - Only on dark sections */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="xMidYMid meet"
          opacity="0.25"
        >
          <defs>
            <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter
              id="glow-green"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Interactive glow following mouse */}
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r="200"
            fill="url(#mouseGlow)"
            opacity="0.06"
          >
            <animate
              attributeName="r"
              values="150;250;150"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <radialGradient id="mouseGlow">
            <stop offset="0%" stopColor="#1940B0" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Nodes */}
          {networkData.nodes.map((node) => {
            const isBlue = node.color === "blue";
            const r = isBlue ? 2.5 : 2;
            const fill = isBlue ? "#1940B0" : "#76B900";
            const filter = isBlue ? "url(#glow-blue)" : "url(#glow-green)";
            return (
              <circle
                key={`node-${node.id}`}
                cx={node.x}
                cy={node.y}
                r={r}
                fill={fill}
                opacity="0.25"
                filter={filter}
                className={isReducedMotion ? "" : "node-pulse"}
                style={{
                  animationDuration: getDuration(4 + 2 * (node.id % 5)) + "s",
                  animationDelay: (node.id % 3) + "s",
                }}
              />
            );
          })}

          {/* Lines */}
          {networkData.lines.map((line, idx) => {
            const from = networkData.nodes[line.from];
            const to = networkData.nodes[line.to];
            if (!from || !to) return null;
            const isBlue = line.color === "blue";
            const stroke = isBlue ? "#1940B0" : "#76B900";
            const opacity = 0.08 + (0.06 * (idx % 4)) / 4;
            const dasharray = line.dash ? "4 6" : "none";

            return (
              <line
                key={`line-${idx}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={stroke}
                strokeOpacity={opacity}
                strokeWidth="0.8"
                strokeDasharray={dasharray}
              />
            );
          })}
        </svg>

        <FloatingParticles />

        <style>{`
          @keyframes nodePulse {
            0%, 100% { opacity: 0.2; r: 2.5; }
            50% { opacity: 0.5; r: 4; }
          }
          .node-pulse {
            animation: nodePulse ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .node-pulse {
              animation: none !important;
            }
          }
        `}</style>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navigation Dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 space-y-3">
          {["hero", "solutions", "ecosystem", "cta"].map((section) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-[#1940B0] scale-125 shadow-lg shadow-[#1940B0]/50"
                  : "bg-[#1940B0]/30 hover:bg-[#1940B0]/60"
              }`}
              aria-label={`Scroll to ${section}`}
            />
          ))}
        </div>

        {/* Hero Section - Dark Background */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden bg-[#08193A]"
        >
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Animated badge */}
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#1940B0]/30 bg-[#1940B0]/10 backdrop-blur-sm">
                <span className="text-[#1940B0] text-sm font-medium tracking-wider">
                  🚀 NEXT-GEN AI TECHNOLOGY
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to Your{" "}
                <span className="text-[#1940B0] relative">
                  AI Technology
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="4"
                    viewBox="0 0 200 4"
                  >
                    <path
                      d="M0 2 L200 2"
                      stroke="#1940B0"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                    />
                  </svg>
                </span>{" "}
                Company
              </h1>

              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Building the future of artificial intelligence and data
                processing with cutting-edge GPU technology
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#1940B0] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#153a9a] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#1940B0]/30"
                >
                  Get Started
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("solutions");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#08193A] transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section - WHITE BACKGROUND */}
        <section ref={solutionsRef} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#76B900] text-sm font-semibold tracking-wider uppercase">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08193A] mt-2 mb-4">
                Our Solutions
              </h2>
              <div className="w-20 h-1 bg-[#1940B0] mx-auto rounded-full"></div>
              <p className="text-[#08193A]/70 mt-4 max-w-2xl mx-auto">
                Enterprise-grade AI and GPU solutions for modern businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* G6 Solutions Column */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1940B0] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#1940B0]/30">
                      G6
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#08193A]">
                        G6 Solutions
                      </h3>
                      <p className="text-[#08193A]/60 text-sm">
                        Intelligent network solutions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Network Optimization",
                      desc: "AI-driven optimization for maximum performance and reliability.",
                      icon: "📡",
                      color: "blue",
                    },
                    {
                      title: "Smart Analytics",
                      desc: "Real-time analytics with predictive insights for better decisions.",
                      icon: "📊",
                      color: "blue",
                    },
                    {
                      title: "Security Framework",
                      desc: "Advanced security with AI-powered threat detection and prevention.",
                      icon: "🛡️",
                      color: "blue",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`group relative bg-[#F5F7FA] rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                        hoveredCard === `g6-${i}`
                          ? "border-[#1940B0] shadow-lg shadow-[#1940B0]/10 transform -translate-y-1"
                          : "border-[#E0E4EB] hover:border-[#1940B0]/50"
                      }`}
                      onMouseEnter={() => setHoveredCard(`g6-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1940B0]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#08193A] mb-1 group-hover:text-[#1940B0] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[#08193A]/60 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-5 h-5 text-[#1940B0]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NVIDIA Partner Column */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#76B900] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#76B900]/30">
                      NV
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#08193A]">
                        NVIDIA Partner
                      </h3>
                      <p className="text-[#08193A]/60 text-sm">
                        Powered by GPU technology
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "GPU Acceleration",
                      desc: "High-performance computing with NVIDIA GPU acceleration.",
                      icon: "⚡",
                      color: "green",
                    },
                    {
                      title: "CUDA Technology",
                      desc: "Optimized parallel computing using NVIDIA CUDA architecture.",
                      icon: "💻",
                      color: "green",
                    },
                    {
                      title: "Enterprise Support",
                      desc: "24/7 enterprise-grade support and dedicated assistance.",
                      icon: "🎯",
                      color: "green",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`group relative bg-[#F5F7FA] rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                        hoveredCard === `nv-${i}`
                          ? "border-[#76B900] shadow-lg shadow-[#76B900]/10 transform -translate-y-1"
                          : "border-[#E0E4EB] hover:border-[#76B900]/50"
                      }`}
                      onMouseEnter={() => setHoveredCard(`nv-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#76B900]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#08193A] mb-1 group-hover:text-[#76B900] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[#08193A]/60 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-5 h-5 text-[#76B900]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section - Dark Background */}
        <section ref={ecosystemRef} className="py-24 bg-[#08193A]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="text-[#1940B0] text-sm font-semibold tracking-wider uppercase">
                Connected Infrastructure
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                AI Ecosystem
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Connected infrastructure for the future of AI
              </p>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { label: "Data Processing", icon: "📊", color: "blue" },
                  { label: "Machine Learning", icon: "🤖", color: "green" },
                  { label: "Neural Networks", icon: "🧠", color: "blue" },
                  { label: "GPU Computing", icon: "⚡", color: "green" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-center ${
                      item.color === "blue"
                        ? "border-[#1940B0]/20 hover:border-[#1940B0] hover:bg-[#1940B0]/10"
                        : "border-[#76B900]/20 hover:border-[#76B900] hover:bg-[#76B900]/10"
                    }`}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        item.color === "blue"
                          ? "text-[#1940B0]"
                          : "text-[#76B900]"
                      }`}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - WHITE BACKGROUND */}
        <section
          ref={ctaRef}
          className="py-24 bg-white relative overflow-hidden"
        >
          {/* Subtle background effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#1940B0] rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#76B900] rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-3xl mx-auto">
              <span className="text-[#1940B0] text-sm font-semibold tracking-wider uppercase">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08193A] mt-2 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-[#08193A]/70 mb-10 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your
                goals
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#1940B0] text-white px-12 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#153a9a] transform hover:scale-105 hover:shadow-2xl hover:shadow-[#1940B0]/30"
                >
                  Contact Us Today
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("hero");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-[#1940B0] text-[#1940B0] px-12 py-4 rounded-full font-semibold hover:bg-[#1940B0] hover:text-white transition-all duration-300"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
