import React, { useEffect, useRef, useState } from "react";
import {
  FaMicrochip,
  FaRankingStar,
  FaShieldHalved,
  FaScrewdriverWrench,
  FaServer,
  FaLayerGroup,
  FaLaptop,
  FaWifi,
  FaBrain,
  FaHeadset,
  FaRocket,
  FaFlask,
  FaMicroscope,
  FaRobot,
  FaHandshake,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaBullseye,
  FaEye,
  FaHandHoldingHeart,
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import images from "../../public/images.js";
import SEO from "./SEO.jsx";

// --- Data ---
const data = {
  partners: [
    {
      icon: FaMicrochip,
      title: "Direct Architecture Access",
      text: "Elite Partner status gives clients direct engineering engagement with NVIDIA's architecture teams.",
    },
    {
      icon: FaRankingStar,
      title: "Priority Hardware Allocation",
      text: "When GPU supply is constrained, our allocation tier keeps your projects moving on predictable timelines.",
    },
    {
      icon: FaShieldHalved,
      title: "Certified Technical Expertise",
      text: "Every engineer completes NVIDIA certification pathways—ensuring deep support for each engagement.",
    },
    {
      icon: FaScrewdriverWrench,
      title: "Full Lifecycle Support",
      text: "From architecture workshops to production maintenance, we stay engaged across the entire lifecycle.",
    },
  ],
  journey: [
    {
      year: "2018",
      title: "Partnership Begins",
      desc: "NVIDIA partnership formalized; first DGX deployments go live.",
    },
    {
      year: "2020",
      title: "Growing Footprint",
      desc: "Expanded into enterprise AI and HPC solutions across India.",
    },
    {
      year: "2022",
      title: "Elite Partner Status",
      desc: "Achieved India's top NVIDIA partnership tier.",
    },
    {
      year: "2024",
      title: "National Scale",
      desc: "Trained 5,000+ engineers and researchers nationwide.",
    },
  ],
  capabilities: [
    {
      icon: FaServer,
      title: "DGX Systems",
      desc: "Turnkey AI supercomputing for enterprise, research, and government.",
    },
    {
      icon: FaLayerGroup,
      title: "GPU Clusters",
      desc: "Multi-node, multi-GPU infrastructure for large-scale training.",
    },
    {
      icon: FaLaptop,
      title: "AI Workstations",
      desc: "Certified workstations for data science and prototyping.",
    },
    {
      icon: FaWifi,
      title: "HPC Networking",
      desc: "InfiniBand and Ethernet optimised for AI training workloads.",
    },
    {
      icon: FaBrain,
      title: "AI Enablement",
      desc: "Hands-on training and enablement for your teams.",
    },
    {
      icon: FaHeadset,
      title: "Deployment Services",
      desc: "Full installation, integration, and validation services.",
    },
  ],
  timeline: {
    2024: [
      "RV College Of Engineering",
      "KIET Group Of Institutions",
      "Sharda University",
      "GL Bajaj Institute of Technology and Management",
    ],
    2025: [
      "Vivekananda Institute of Professional Studies",
      "ABESIT Institute of Technology",
      "KLE Institute Of Technology",
      "BMS Bengaluru",
      "Jain College of Engineering and Research",
      "KLS Gogte Institute of Technology",
      "VIPS New Delhi",
      "Sharda University Admin Training",
      "Presidency University",
    ],
    2026: ["CSJMU Kanpur", "BML Munjal University", "Galgotias University"],
  },
  stories: [
    {
      icon: FaRocket,
      title: "Accelerate AI Training",
      desc: "Reduced model training time by 2.8× across multiple institutions through optimized DGX deployments.",
    },
    {
      icon: FaFlask,
      title: "Research Productivity",
      desc: "Enabled breakthrough research in computer vision and NLP with dedicated GPU computing resources.",
    },
    {
      icon: FaMicroscope,
      title: "HPC Innovation",
      desc: "Delivered high-performance computing infrastructure for scientific simulations and analysis.",
    },
  ],
  future: [
    {
      icon: FaRobot,
      title: "AI Adoption",
      desc: "Driving AI adoption across India's academic and enterprise sectors.",
    },
    {
      icon: FaFlask,
      title: "Research Innovation",
      desc: "Supporting cutting-edge AI research and development.",
    },
    {
      icon: FaHandshake,
      title: "Academic Collaboration",
      desc: "Building strong partnerships with leading institutions.",
    },
    {
      icon: FaMicrochip,
      title: "NVIDIA Technologies",
      desc: "Deploying the latest NVIDIA AI and HPC technologies.",
    },
  ],
  logos: [
    "IIT Bombay",
    "IISc Bangalore",
    "Tata Institute",
    "DRDO",
    "NVIDIA",
    "Reliance Jio",
    "TCS",
    "Wipro",
    "IIT Delhi",
    "IIT Kanpur",
    "BITS Pilani",
    "CSIR",
  ],
};

// --- Hero Component ---
const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mesh particles
    const particles = [];
    const numParticles = 80;
    const connectionDistance = 150;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const drawMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(118, 185, 0, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(118, 185, 0, ${p.radius / 3})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawMesh);
    };

    drawMesh();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <header
      className="gi-hero"
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#081C3A",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      <canvas
        ref={canvasRef}
        id="meshCanvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="hero-grid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Glow Effect */}
      <div
        className="hero-glow"
        style={{
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(ellipse, rgba(118,185,0,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          className="row align-items-center"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div className="hero-copy">
            <div
              className="eyebrow-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(118,185,0,0.12)",
                padding: "8px 18px",
                borderRadius: "100px",
                color: "#76B900",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              <span
                className="badge-dot"
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#76B900",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              ></span>
              NVIDIA Elite Partner &middot; India
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                fontWeight: "800",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              AI Infrastructure
              <br />
              <span
                className="text-grad"
                style={{
                  background: "linear-gradient(135deg, #76B900, #00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built for India's Future
              </span>
            </h1>

            <p
              className="hero-sub"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "52ch",
                marginBottom: "32px",
              }}
            >
              Global Infoventures delivers enterprise-grade AI infrastructure,
              NVIDIA DGX systems, GPU computing, and HPC solutions across India.
              From first assessment to production deployment, we ensure your AI
              initiatives succeed at scale.
            </p>

            <div
              className="hero-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <a
                href="#contact"
                className="btn btn-gi-primary btn-ripple"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 34px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #76B900, #5A8C00)",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 14px 30px -10px rgba(118,185,0,0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                Let's Talk <FaArrowRight />
              </a>
              <a
                href="#capabilities"
                className="btn btn-gi-ghost btn-ripple"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 34px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  fontSize: "1rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <FaArrowRight style={{ transform: "rotate(180deg)" }} /> Explore
                Solutions
              </a>
            </div>

            <div
              className="hero-trust-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div
                className="trust-chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <FaMicrochip /> NVIDIA Elite Partner
              </div>
              <div
                className="trust-chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <FaServer /> 20+ Years
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-video-wrapper"
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)",
                aspectRatio: "16/9",
                background: "#000",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              >
                <source src={images.DGX} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll-cue"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.7rem",
          fontWeight: "600",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "40px",
            border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4px",
              height: "12px",
              borderRadius: "2px",
              background: "#76B900",
              animation: "cue-move 1.8s ease-in-out infinite",
            }}
          ></span>
        </span>
        Scroll
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes cue-move {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .btn-ripple {
          position: relative;
          overflow: hidden;
        }
        .btn-ripple .ripple-el {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          background: rgba(255,255,255,0.3);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        }
        @keyframes ripple {
          to { transform: scale(3); opacity: 0; }
        }
        @media (max-width: 992px) {
          .row.align-items-center {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-title {
            font-size: clamp(2rem, 8vw, 3.5rem) !important;
          }
        }
      `}</style>
    </header>
  );
};

const Partnership = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-66 mb-16">
          <div>
            <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
              Elite Partnership
            </p>
            <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-[#081C3A] leading-[1.15] mb-4">
              Why the NVIDIA Partnership Matters
            </h2>
            <p className="section-body text-lg leading-relaxed text-[#6B7F9E] max-w-[52ch]">
              As an NVIDIA Elite Partner, we offer clients direct access to
              NVIDIA's architecture teams, priority hardware allocation, and
              certified technical expertise that ensures every design delivers
              results.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="elite.jpg"
              alt="NVIDIA Elite Partner"
              className="w-80 h-auto block"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="partnerGrid">
          {data.partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="glass-card partner-card bg-white rounded-2xl p-6 shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] border border-[rgba(8,28,58,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(8,28,58,0.15)]"
              >
                <div className="card-icon w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[rgba(118,185,0,0.1)] to-[rgba(0,212,255,0.05)] text-[#76B900] text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="card-title font-display font-bold text-[#081C3A] text-lg mb-2">
                  {p.title}
                </h3>
                <p className="card-text text-[#6B7F9E] text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  return (
    <section className="py-24 bg-[#F5F7FA]" id="journey">
      <div className="container mx-auto px-4">
        <div className="max-w-[720px] mb-14">
          <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
            Our Journey
          </p>
          <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-[#081C3A] leading-[1.15] mb-4">
            Our Journey with NVIDIA
          </h2>
          <p className="section-body text-lg leading-relaxed text-[#6B7F9E] max-w-[52ch]">
            From our first partnership to becoming an NVIDIA Elite Partner,
            we've built India's most trusted AI infrastructure practice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.journey.map((j, i) => (
            <div
              key={i}
              className="journey-card bg-white rounded-2xl p-7 shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] border-l-4 border-l-[#76B900] transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(8,28,58,0.15)]"
            >
              <span className="year-badge font-body font-extrabold text-[#76B900] text-xl block mb-2">
                {j.year}
              </span>
              <h4 className="font-display font-bold text-[#081C3A] text-lg mb-1">
                {j.title}
              </h4>
              <p className="text-[#6B7F9E] text-sm mb-0">{j.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const aboutItems = [
    {
      icon: FaBullseye,
      title: "Mission",
      desc: "Making enterprise-grade AI infrastructure accessible, dependable, and genuinely well supported across India.",
    },
    {
      icon: FaEye,
      title: "Vision",
      desc: "To be India's benchmark partner for accelerated computing at national scale.",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Values",
      desc: "Technical rigor, transparent delivery, and partnerships built to last beyond the first deployment.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
              About Global Infoventures
            </p>
            <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-[#081C3A] leading-[1.15] mb-4">
              Powering India's
              <br />
              AI Revolution
            </h2>
            <p className="section-body text-lg leading-relaxed text-[#6B7F9E] max-w-[52ch] mb-8">
              Global Infoventures is a premier technology solutions provider and
              NVIDIA Elite Partner, specializing in AI infrastructure,
              high-performance computing (HPC), and enterprise-grade GPU
              solutions. With over two decades of experience, we empower
              research institutions, enterprises, and government organizations
              to harness the power of accelerated computing.
            </p>
            <div className="flex flex-col gap-4">
              {aboutItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 items-start p-4 rounded-xl bg-[#F5F7FA] border border-[rgba(8,28,58,0.08)] transition-all hover:bg-white hover:shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] hover:translate-x-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#76B900] flex items-center justify-center shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] flex-shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <strong className="block font-display text-[#081C3A]">
                        {item.title}
                      </strong>
                      <span className="text-[#6B7F9E] text-sm">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-4 before:bottom-14 before:w-0.5 before:bg-gradient-to-b before:from-[#76B900] before:to-[#00D4FF]">
            {[
              {
                year: "2003",
                text: "<strong>Founded</strong> as a high-performance computing systems integrator, building solutions for India's research community.",
              },
              {
                year: "2012",
                text: "<strong>Scientific Computing</strong> practice expands nationwide into university and research labs across India.",
              },
              {
                year: "2018",
                text: "<strong>NVIDIA Partnership</strong> formalized; first DGX deployments go live for enterprise and research customers.",
              },
              {
                year: "2022",
                text: "<strong>Elite Partner Status</strong> achieved — India's top NVIDIA partnership tier for select integrators.",
              },
              {
                year: "2025",
                text: "<strong>5,000+ engineers and researchers</strong> trained across CUDA, DGX, and generative AI infrastructure.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-8 last:pb-0 before:content-[''] before:absolute before:-left-8 before:top-1 before:w-3.5 before:h-3.5 before:rounded-full before:bg-white before:border-4 before:border-[#76B900] before:shadow-[0_0_0_4px_rgba(118,185,0,0.1)]"
              >
                <span className="journey-year font-body font-extrabold text-[#76B900] text-lg block mb-1">
                  {item.year}
                </span>
                <div
                  className="journey-text text-[#6B7F9E] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  return (
    <section className="py-24 bg-white" id="capabilities">
      <div className="container mx-auto px-4">
        <div className="max-w-[720px] mb-14">
          <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
            Capabilities
          </p>
          <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-[#081C3A] leading-[1.15] mb-4">
            NVIDIA Solutions, End to End
          </h2>
          <p className="section-body text-lg leading-relaxed text-[#6B7F9E] max-w-[52ch]">
            From a single certified workstation to a multi-rack SuperPOD, we
            design, size, deploy, and support every layer of the stack.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="capability-card bg-[#F5F7FA] rounded-2xl p-7 text-center border border-[rgba(8,28,58,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(8,28,58,0.15)] hover:border-[#76B900]"
              >
                <div className="icon-wrap w-14 h-14 rounded-xl bg-gradient-to-br from-[#76B900] to-[#5A8C00] flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  <Icon />
                </div>
                <h4 className="font-display font-bold text-[#081C3A] text-lg mb-2">
                  {c.title}
                </h4>
                <p className="text-[#6B7F9E] text-sm mb-0">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");

          if (id && entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    const items = timelineRef.current?.querySelectorAll("[data-id]");

    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const years = Object.keys(data.timeline);

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#F7F9FC] py-24 md:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[10%] h-[360px] w-[360px] rounded-full bg-[#76B900]/[0.06] blur-3xl" />

        <div className="absolute right-[-180px] bottom-[5%] h-[360px] w-[360px] rounded-full bg-[#00D4FF]/[0.05] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#081C3A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-20 max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#76B900]" />

            <p className="font-body text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#76B900]">
              Training Footprint
            </p>

            <span className="h-px w-10 bg-[#76B900]" />
          </div>

          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#081C3A] sm:text-5xl md:text-6xl">
            2024
            <span className="mx-3 text-[#76B900]">–</span>
            2026
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-base leading-relaxed text-[#6B7F9E] md:text-lg">
            Our training footprint across India's universities and research
            institutions, year by year.
          </p>
        </div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div ref={timelineRef} className="relative mx-auto max-w-[1250px]">
          {/* =================================================
              HORIZONTAL TIMELINE RAIL
          ================================================== */}

          {/* Background Rail */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[58px]
              hidden
              h-[3px]
              rounded-full
              bg-[#DCE3EA]
              md:block
            "
          />

          {/* Animated Rail */}
          <div
            className="
              absolute
              left-[16.66%]
              top-[58px]
              hidden
              h-[3px]
              overflow-hidden
              rounded-full
              md:block
            "
            style={{
              width:
                years.length > 1
                  ? `${((years.length - 1) / years.length) * 66.66}%`
                  : "0%",
            }}
          >
            <div
              className={`
                h-full
                w-full
                origin-left
                rounded-full
                bg-gradient-to-r
                from-[#76B900]
                via-[#76B900]
                to-[#00D4FF]
                transition-transform
                duration-[1800ms]
                ease-out
                ${visibleItems.size > 0 ? "scale-x-100" : "scale-x-0"}
              `}
            />
          </div>

          {/* =================================================
              YEAR COLUMNS
          ================================================== */}

          <div className="grid items-stretch gap-8 md:grid-cols-3">
            {years.map((year, yi) => {
              const yearVisible = visibleItems.has(`year-${year}`);
              const institutions = data.timeline[year];

              return (
                <div key={year} className="flex h-full flex-col">
                  {/* =================================================
                      YEAR NODE
                  ================================================== */}

                  <div
                    data-id={`year-${year}`}
                    className={`
                      relative
                      z-20
                      flex
                      justify-center
                      transition-all
                      duration-700
                      ease-out
                      ${
                        yearVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }
                    `}
                  >
                    {/* Outer Ring */}
                    <div className="relative">
                      <div
                        className="
                          absolute
                          -inset-2
                          rounded-full
                          border
                          border-[#76B900]/20
                        "
                      />

                      {/* Year Circle */}
                      <div
                        className="
                          relative
                          flex
                          h-[116px]
                          w-[116px]
                          items-center
                          justify-center
                          rounded-full
                          border-[7px]
                          border-white
                          bg-gradient-to-br
                          from-[#76B900]
                          to-[#4F8100]
                          shadow-[0_16px_40px_-12px_rgba(118,185,0,0.50)]
                        "
                      >
                        <div className="text-center">
                          <span className="block font-body text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                            Year
                          </span>

                          <span className="mt-1 block font-display text-xl font-extrabold tracking-tight text-white">
                            {year}
                          </span>
                        </div>
                      </div>

                      {/* Pulse */}
                      <div
                        className="
                          absolute
                          -right-1
                          top-1/2
                          h-3
                          w-3
                          -translate-y-1/2
                          rounded-full
                          border-2
                          border-white
                          bg-[#00D4FF]
                          shadow-[0_0_12px_rgba(0,212,255,0.7)]
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      YEAR CONTENT PANEL
                  ================================================== */}

                  <div
                    className="
                      mt-12
                      flex
                      flex-1
                      flex-col
                      rounded-[26px]
                      border
                      border-[#E1E7EF]
                      bg-white/90
                      p-5
                      shadow-[0_20px_60px_-30px_rgba(8,28,58,0.22)]
                      backdrop-blur-xl
                      md:p-6
                    "
                  >
                    {/* Panel Header */}

                    <div className="mb-5 flex items-center justify-between border-b border-[#E8EDF3] pb-4">
                      <div>
                        <span className="font-body text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#76B900]">
                          Training Footprint
                        </span>

                        <h3 className="mt-1 font-display text-lg font-extrabold text-[#081C3A]">
                          {year} Programs
                        </h3>
                      </div>

                      {/* Count */}
                      <div
                        className="
                          flex
                          h-10
                          min-w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F1F5E9]
                          px-3
                          font-body
                          text-xs
                          font-extrabold
                          text-[#5A8C00]
                        "
                      >
                        {institutions.length}
                      </div>
                    </div>

                    {/* =================================================
                        INSTITUTION LIST
                    ================================================== */}

                    <div className="flex flex-1 flex-col gap-3">
                      {institutions.map((institution, ii) => {
                        const id = `item-${year}-${ii}`;
                        const itemVisible = visibleItems.has(id);

                        return (
                          <div
                            key={id}
                            data-id={id}
                            className={`
                              group
                              relative
                              flex
                              flex-1
                              items-center
                              overflow-hidden
                              rounded-xl
                              border
                              border-[#E7ECF2]
                              bg-[#FAFBFD]
                              p-4
                              transition-all
                              duration-500
                              ease-out
                              hover:-translate-y-0.5
                              hover:border-[#76B900]/30
                              hover:bg-white
                              hover:shadow-[0_12px_30px_-18px_rgba(8,28,58,0.30)]
                              ${
                                itemVisible
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-5 opacity-0"
                              }
                            `}
                            style={{
                              transitionDelay: `${ii * 80}ms`,
                            }}
                          >
                            {/* Left Accent */}
                            <div
                              className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-[3px]
                                bg-gradient-to-b
                                from-[#76B900]
                                to-[#00D4FF]
                                opacity-0
                                transition-opacity
                                duration-300
                                group-hover:opacity-100
                              "
                            />

                            {/* Number */}
                            <div
                              className="
                                mr-3
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-[#76B900]/20
                                bg-[#F2F7E9]
                                font-body
                                text-[10px]
                                font-extrabold
                                text-[#5A8C00]
                                transition-all
                                duration-300
                                group-hover:border-[#76B900]
                                group-hover:bg-[#76B900]
                                group-hover:text-white
                              "
                            >
                              {String(ii + 1).padStart(2, "0")}
                            </div>

                            {/* Institution */}
                            <div className="min-w-0 flex-1">
                              <span className="mb-1 block font-body text-[9px] font-bold uppercase tracking-[0.1em] text-[#9AA9BC]">
                                Institution
                              </span>

                              <h4
                                className="
                                  font-display
                                  text-sm
                                  font-bold
                                  leading-snug
                                  text-[#081C3A]
                                "
                              >
                                {institution}
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Indicator */}

                    <div className="mt-5 flex items-center gap-2 border-t border-[#E8EDF3] pt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76B900]" />

                      <span className="font-body text-[9px] font-bold uppercase tracking-[0.12em] text-[#9AA9BC]">
                        {institutions.length}{" "}
                        {institutions.length === 1
                          ? "Institution"
                          : "Institutions"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stories = () => {
  return (
    <section className="py-24 bg-[#F5F7FA]" id="stories">
      <div className="container mx-auto px-4">
        <div className="max-w-[720px] mb-14">
          <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
            Customer Success
          </p>
          <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-[#081C3A] leading-[1.15] mb-4">
            Deployments That Delivered Results
          </h2>
          <p className="section-body text-lg leading-relaxed text-[#6B7F9E] max-w-[52ch]">
            A closer look at how institutions turned infrastructure decisions
            into measurable outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stories.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="story-card bg-white rounded-2xl shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] p-7 border-t-4 border-t-[#76B900] transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(8,28,58,0.15)]"
              >
                <div className="story-icon w-12 h-12 rounded-xl bg-[rgba(118,185,0,0.1)] text-[#76B900] flex items-center justify-center text-xl mb-4">
                  <Icon />
                </div>
                <h4 className="font-display font-bold text-[#081C3A] text-lg mb-1">
                  {s.title}
                </h4>
                <p className="text-[#6B7F9E] text-sm mb-0">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Future = () => {
  return (
    <section
      className="py-24 bg-[#081C3A] relative overflow-hidden"
      id="future"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[720px] mb-14">
          <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
            Looking Ahead
          </p>
          <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-white leading-[1.15] mb-4">
            The Future of AI in India
          </h2>
          <p className="section-body text-lg leading-relaxed text-white/60 max-w-[52ch]">
            Global Infoventures is committed to driving AI adoption, research,
            and innovation across India's academic and enterprise landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.future.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="future-card bg-white/5 border border-white/10 rounded-2xl p-7 text-center transition-all hover:bg-white/10 hover:-translate-y-2 hover:border-[rgba(118,185,0,0.3)]"
              >
                <div className="icon-wrap w-14 h-14 rounded-xl bg-[rgba(118,185,0,0.15)] flex items-center justify-center mx-auto mb-4 text-[#76B900] text-2xl">
                  <Icon />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-1">
                  {f.title}
                </h4>
                <p className="text-white/55 text-sm mb-0">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 bg-[#F5F7FA]" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow font-body font-bold tracking-[0.12em] uppercase text-xs text-[#76B900] mb-4">
              Get in Touch
            </p>
            <h2 className="section-title font-display font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl text-[#081C3A] leading-[1.15] mb-4">
              Let's Build Your AI Infrastructure
            </h2>
            <p className="section-body text-lg leading-relaxed text-[#6B7F9E] max-w-[52ch] mb-6">
              Tell us about your workload and we'll respond within one business
              day.
            </p>
            <div className="flex flex-col gap-5 mb-6">
              {[
                {
                  icon: FaLocationDot,
                  title: "Global Infoventures Pvt. Ltd.",
                  desc: "H-65 Sector 63, Noida, Uttar Pradesh 201301",
                },
                {
                  icon: FaPhone,
                  title: "Phone",
                  desc: (
                    <a
                      href="tel:+919873904161"
                      className="text-[#76B900] hover:text-[#5A8C00]"
                    >
                      +91 9873904161
                    </a>
                  ),
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  desc: (
                    <a
                      href="mailto:info@giindia.com"
                      className="text-[#76B900] hover:text-[#5A8C00]"
                    >
                      info@giindia.com
                    </a>
                  ),
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#76B900] flex items-center justify-center shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] flex-shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <strong className="block font-display text-[#081C3A] text-sm">
                        {item.title}
                      </strong>
                      <span className="text-[#6B7F9E] text-sm">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919873904161"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[rgba(8,28,58,0.08)] font-semibold text-sm text-[#081C3A] shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] transition-all hover:-translate-y-1 hover:text-[#76B900] hover:border-[#76B900]"
              >
                <FaPhone className="text-[#76B900]" /> Call Us
              </a>
              <a
                href="mailto:info@giindia.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[rgba(8,28,58,0.08)] font-semibold text-sm text-[#081C3A] shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] transition-all hover:-translate-y-1 hover:text-[#76B900] hover:border-[#76B900]"
              >
                <FaEnvelope className="text-[#76B900]" /> Email
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[rgba(8,28,58,0.08)] font-semibold text-sm text-[#081C3A] shadow-[0_12px_32px_-12px_rgba(8,28,58,0.12)] transition-all hover:-translate-y-1 hover:text-[#76B900] hover:border-[#76B900]"
              >
                <FaWhatsapp className="text-[#76B900]" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(8,28,58,0.15)] p-8 md:p-10">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#081C3A] block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(8,28,58,0.08)] bg-[#F5F7FA] text-sm font-body transition-all focus:outline-none focus:border-[#76B900] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#081C3A] block mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(8,28,58,0.08)] bg-[#F5F7FA] text-sm font-body transition-all focus:outline-none focus:border-[#76B900] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#081C3A] block mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company / Institution"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(8,28,58,0.08)] bg-[#F5F7FA] text-sm font-body transition-all focus:outline-none focus:border-[#76B900] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#081C3A] block mb-1.5">
                    Interested In
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[rgba(8,28,58,0.08)] bg-[#F5F7FA] text-sm font-body transition-all focus:outline-none focus:border-[#76B900] focus:bg-white">
                    <option>DGX Systems</option>
                    <option>GPU Clusters</option>
                    <option>AI Workstations</option>
                    <option>Training Programs</option>
                    <option>General Consultation</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-bold text-[#081C3A] block mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your workload, timeline, and scale…"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(8,28,58,0.08)] bg-[#F5F7FA] text-sm font-body resize-y transition-all focus:outline-none focus:border-[#76B900] focus:bg-white"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="button"
                    className="btn-ripple w-full bg-gradient-to-br from-[#76B900] to-[#5A8C00] text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_14px_30px_-10px_rgba(118,185,0,0.45)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_44px_-12px_rgba(118,185,0,0.55)]"
                  >
                    Book a Consultation <FaArrowRight className="inline ml-2" />
                  </button>
                  <div
                    className="mt-4 text-sm font-semibold text-[#76B900] min-h-[20px]"
                    id="formNote"
                  ></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---
const Partner = () => {
  // Inject keyframe styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes pulse-dot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(0.8); } }
      @keyframes cue-move { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes ripple { to { transform: scale(3); opacity: 0; } }
      .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      .animate-cue-move { animation: cue-move 1.8s ease-in-out infinite; }
      .animate-marquee { animation: marquee 30s linear infinite; }
      .btn-ripple { position: relative; overflow: hidden; }
      .btn-ripple .ripple-el { position: absolute; border-radius: 50%; transform: scale(0); background: rgba(255,255,255,0.4); animation: ripple 0.6s ease-out; pointer-events: none; }
      .transition-all { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      .duration-600 { transition-duration: 600ms; }
      .ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  // Ripple effect
  useEffect(() => {
    const handleRipple = (e) => {
      const btn = e.currentTarget;
      if (!btn.classList.contains("btn-ripple")) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 1.2;
      const ripple = document.createElement("span");
      ripple.className = "ripple-el";
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x - size / 2}px;top:${y - size / 2}px;`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };
    document.addEventListener("click", handleRipple);
    return () => document.removeEventListener("click", handleRipple);
  }, []);

  return (
    <div className="partner-container">
      <SEO
        title="NVIDIA Elite Partner"
        description="Global Infoventures is an NVIDIA Elite Partner in India, offering direct engineering engagement with NVIDIA's architecture teams and NVIDIA-certified deployment expertise."
        keywords={["NVIDIA Elite Partner", "NVIDIA certified partner India", "Global Infoventures NVIDIA", "NVIDIA reseller"]}
        path="/nvidia-elite-partner"
      />
      <Hero />
      <Partnership />
      <Journey />
      <About />
      <Capabilities />
      <Timeline />
      <Stories />
      <Future />
      <Contact />
    </div>
  );
};

export default Partner;
