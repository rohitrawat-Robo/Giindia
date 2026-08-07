import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation on scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-white pt-32 pb-16 md:pt-36 md:pb-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#76B900]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#76B900]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="hero-copy reveal text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Badge */}
            <span className="inline-block font-mono font-semibold text-[0.7rem] tracking-[0.12em] uppercase text-[#76B900] mb-4 bg-[#76B900]/10 px-4 py-1.5 rounded-full">
              NVIDIA Elite Partner · Education ERP
            </span>

            {/* Heading */}
            <h1 className="font-manrope font-extrabold tracking-[-0.02em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight mb-4 whitespace-nowrap">
              Experience the power of{" "}
              <em className="not-italic bg-gradient-to-r from-[#76B900] to-[#5A8C00] bg-clip-text text-transparent">
                G6
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
              A comprehensive Software Platform for automation of Education
              Eco-system
            </p>

            {/* Description */}
            <p className="text-base text-slate-600 max-w-[48ch] mx-auto lg:mx-0 leading-relaxed mb-7">
              G6 platform is a 'State of Art Amalgamation' of automated business
              processes and technology. Responsive Interfaces, Business &amp;
              Predictive Intelligence, Biometric &amp; Smart Card Technology,
              Collaborative Architecture &amp; multi-tier Security make it a
              powerful tool for Digital Transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <a
                href="#features"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-manrope font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#76B900] to-[#5A8C00] shadow-[0_8px_24px_-8px_rgba(118,185,0,0.4)] hover:shadow-[0_14px_32px_-10px_rgba(118,185,0,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Know More</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base text-slate-900 hover:text-[#76B900] transition-colors duration-200"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#76B900]"
                >
                  <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
                </svg>
                How to Buy
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="hero-gfx flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img
              src="/G6.png"
              alt="G6 AI Infrastructure"
              className="max-w-full h-auto w-[90%] sm:w-[80%] lg:w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] animate-float"
            />
          </motion.div>
        </div>
      </div>

      {/* Custom Animations & Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .font-manrope {
          font-family: "Manrope", sans-serif;
        }

        /* Mobile Responsive Overrides */
        @media (max-width: 1023px) {
          .hero-copy {
            text-align: center;
          }
          .hero-copy p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-copy .flex {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding-top: 120px;
          }
          .hero-copy h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
