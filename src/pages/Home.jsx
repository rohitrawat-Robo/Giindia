import React, { useEffect } from "react";
import { motion } from "framer-motion";
import images from "../../public/images.js"; // Adjust path as needed
import AboutUs from "../components/About.jsx"; // Adjust path as needed
import FeaturedEvents from "../components/FeaturedEvents.jsx";

const HeroSection = ({ aboutRef }) => {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle scroll to about section
  const scrollToAbout = (e) => {
    e.preventDefault();
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Key Components Data
  const keyComponents = [
    { id: 1, icon: images.a, label: "Cloud", delay: 0.9 },
    { id: 2, icon: images.b, label: "SaaS", delay: 1.0 },
    { id: 3, icon: images.c, label: "Analytics", delay: 1.1 },
    { id: 4, icon: images.d, label: "Security", delay: 1.2 },
    { id: 5, icon: images.e, label: "A I", delay: 1.3 },
    { id: 6, icon: images.f, label: "Nvidia", delay: 1.4 },
  ];

  // Domains Data
  const domains = [
    {
      id: 1,
      title: "Education",
      description:
        "Over 25 years of experience in Education segment having a Customer base of over 70 Institutions in India",
      delay: 0.7,
      icon: "🎓",
    },
    {
      id: 2,
      title: "Insurance",
      description: "Working with Insurance Majors in India",
      delay: 0.8,
      icon: "🛡️",
    },
    {
      id: 3,
      title: "Energy",
      description:
        "Platform for Energy Management System is going to be launched in US soon",
      delay: 0.9,
      icon: "⚡",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-white
             pt-24 pb-10 md:pt-28 md:pb-12"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-[-35%] right-[-8%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#76B900]/5 to-transparent pointer-events-none" />

        <div className="absolute bottom-[-25%] left-[-8%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#76B900]/5 to-transparent pointer-events-none" />

        {/* Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <span className="inline-block font-mono font-semibold text-[0.7rem] tracking-[0.12em] uppercase text-[#76B900] mb-4 bg-[#76B900]/10 px-4 py-1.5 rounded-full">
                NVIDIA Elite Partner · Education ERP
              </span>

              {/* Heading */}
              <h1 className="font-manrope font-extrabold tracking-[-0.02em] text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-slate-900 leading-tight mb-4">
                Experience the power of{" "}
                <span className="bg-gradient-to-r from-[#76B900] to-[#5A8C00] bg-clip-text text-transparent">
                  G6
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 max-w-2xl mx-auto lg:mx-0">
                A comprehensive Software Platform for automation of Education
                Eco-system
              </p>

              {/* Description */}
              <p className="text-base text-slate-600 max-w-[52ch] mx-auto lg:mx-0 leading-relaxed mb-6">
                G6 platform is a 'State of Art Amalgamation' of automated
                business processes and technology. Responsive Interfaces,
                Business &amp; Predictive Intelligence, Biometric &amp; Smart
                Card Technology, Collaborative Architecture &amp; multi-tier
                Security make it a powerful tool for Digital Transformation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* Know More */}
                <a
                  href="#features"
                  className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl
                       font-manrope font-bold text-sm sm:text-base text-white
                       bg-gradient-to-r from-[#76B900] to-[#5A8C00]
                       shadow-[0_8px_24px_-8px_rgba(118,185,0,0.4)]
                       hover:shadow-[0_14px_32px_-10px_rgba(118,185,0,0.5)]
                       hover:-translate-y-0.5 transition-all duration-300"
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

                {/* How to Buy */}
                <button
                  onClick={scrollToAbout}
                  className="inline-flex items-center gap-2 font-semibold
                       text-sm sm:text-base text-slate-900
                       hover:text-[#76B900] transition-colors duration-200"
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
                </button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img
                src="/G6.png"
                alt="G6 AI Infrastructure"
                className="w-[80%] sm:w-[70%] md:w-[75%] lg:w-full max-w-[600px] h-auto
                     drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                     animate-float"
              />
            </motion.div>
          </div>
        </div>

        {/* Animation */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .font-manrope {
            font-family: "Manrope", sans-serif;
          }

          @media (max-width: 1023px) {
            .hero-copy {
              text-align: center;
            }
          }
        `}</style>
      </section>

      {/* About Section */}
      <AboutUs />

      {/* Featured Events Section (real events, pulled from src/data/featuredEvents.js) */}
      <FeaturedEvents />

      {/* Key Components Section - UPDATED */}
      <section className="key-components-section pt-8 pb-16 md:pt-10 md:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1940b0]">
              Key Components
            </h2>
          </div>

          {/* Hexagon Grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {keyComponents.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Outer Hexagon */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: "125px",
                    height: "142px",
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    backgroundColor: "#dbe7f8",
                    boxShadow: "0 10px 25px rgba(25, 64, 176, 0.18)",
                  }}
                >
                  {/* Inner Hexagon */}
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{
                      width: "119px",
                      height: "136px",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {/* Icon */}
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-8 md:h-9 w-auto object-contain mb-1"
                    />

                    {/* Label */}
                    <span className="text-base md:text-lg font-bold text-[#1940b0]">
                      {item.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Domains Section */}
      <section className="section bg-light section-l section-about py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Head */}
          <div className="section-head text-center mb-12">
            <h2
              className="title title-lg text-3xl md:text-4xl font-bold text-slate-900 animated"
              data-animate="fadeInUp"
              data-delay=".6"
            >
              Our Domains
            </h2>
          </div>

          {/* Block */}
          <div className="nk-block nk-block-features mgb-m30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {domains.map((domain) => (
                <motion.div
                  key={domain.id}
                  className="feature p-6 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: domain.delay - 0.3 }}
                >
                  <div className="feature-icon dot mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#76B900]/10 flex items-center justify-center text-3xl">
                      {domain.icon}
                    </div>
                  </div>
                  <div className="feature-text">
                    <h5 className="title title-sm text-xl font-bold text-slate-900 mb-3">
                      {domain.title}
                    </h5>
                    <p className="text-slate-600 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section
        className="section section-l section-features bg-white py-20 md:py-24"
        id="wallet"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="section-head text-center mb-12 md:mb-16">
            <h2
              className="title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900"
              data-animate="fadeInUp"
              data-delay=".1"
            >
              Core Competencies
            </h2>

            <p
              className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed"
              data-animate="fadeInUp"
              data-delay=".2"
            >
              Our expertise enables organizations to build, deploy, and manage
              scalable digital solutions with confidence.
            </p>
          </div>

          {/* Competencies */}
          <div className="nk-block nk-block-text-grp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Cloud-based Product Development */}
              <motion.div
                className="group relative bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                {/* Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#76B900]" />

                {/* Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#76B900]/10 text-[#76B900] font-bold text-lg mb-6">
                  01
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  Cloud-based Product Development
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Over the years, we have evolved excellent capabilities for
                  developing cloud-based products. Such applications improve
                  collaboration among dispersed users as they can work from
                  anywhere in the world via smartphones and tablets. Multiple
                  users can also work together virtually, as all the data and
                  applications are available through shared storage.
                </p>
              </motion.div>

              {/* Software as a Service */}
              <motion.div
                className="group relative bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                {/* Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#1940b0]" />

                {/* Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1940b0]/10 text-[#1940b0] font-bold text-lg mb-6">
                  02
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  Software as a Service (SaaS)
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  We operate in the SaaS (Software as a Service) model, which
                  provides an aggregation of product, its periodic upgrades,
                  third-party licenses, implementation methodology, maintenance,
                  and support services to our clients.
                </p>
              </motion.div>

              {/* Turn-key Delivery */}
              <motion.div
                className="group relative bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#76B900]" />

                {/* Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#76B900]/10 text-[#76B900] font-bold text-lg mb-6">
                  03
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  Turn-key Delivery
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  Turn-key Delivery includes Infrastructure, Solution, Manpower,
                  Project Management, Collaborative Business Services, and
                  Digital Identification Technology. Our unique Turn-key
                  Delivery methodology ensures timely implementation with a 100%
                  success rate.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section
        className="section section-l section-product bg-gray-50 py-20"
        id="products"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nk-block nk-block-features-s4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
              {/* Our Products Content */}
              <div className="section-head text-left">
                <h2
                  className="title text-3xl md:text-4xl font-bold text-slate-900 mb-5"
                  data-animate="fadeInUp"
                  data-delay=".1"
                >
                  Our Products
                </h2>

                <p
                  className="text-base md:text-[17px] text-slate-600 leading-relaxed"
                  data-animate="fadeInUp"
                  data-delay=".2"
                >
                  All our products are Cloud-based hence accessible
                  Anytime-Anywhere in the world. The device independent
                  Responsive Technology allows them to be used on any device -
                  Computers, Laptops, Tablets, Smartphones – with equal ease.
                  The products are auto-upgraded to the latest software version
                  and most updated Technology.
                </p>
              </div>

              {/* AIMS Product */}
              <motion.div
                className="feature feature-s4 feature-center text-center flex flex-col items-center"
                data-animate="fadeInUp"
                data-delay=".3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="feature-img w-full mb-5">
                  <img
                    src={images.dashboard}
                    alt="AIMS Pre Admission Solution - Software for University, School, College, Institute - India"
                    className="w-full h-[220px] object-cover rounded-xl shadow-md"
                  />
                </div>

                <h5 className="title title-sm text-lg md:text-xl font-bold text-slate-900">
                  AIMS-Pre Admission Solution
                </h5>
              </motion.div>

              {/* G-6 Product */}
              <motion.div
                className="feature feature-s4 feature-center text-center flex flex-col items-center"
                data-animate="fadeInUp"
                data-delay=".4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="feature-img w-full mb-5">
                  <img
                    src={images.sim}
                    alt="G-6 - Software for University, School, College, Institute - India"
                    className="w-full h-[220px] object-cover rounded-xl shadow-md"
                  />
                </div>

                <h5 className="title title-sm text-lg md:text-xl font-bold text-slate-900">
                  G-6
                </h5>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        className="section section-l section-product bg-white py-20"
        id="solution"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="section-head text-center wide-auto-sm mb-12 md:mb-16">
            <h2
              className="title text-3xl md:text-4xl font-bold text-slate-900"
              data-animate="fadeInUp"
              data-delay=".1"
            >
              Key Features
            </h2>
          </div>

          {/* Features Grid */}
          <div className="nk-block nk-block-features-s3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Global Single Platform */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">☁️</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    Global Single Platform
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Anytime-Anywhere Access
                  </p>
                </div>
              </motion.div>

              {/* Responsive Interfaces */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">🛡️</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    Responsive Interfaces
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Universal and Interactive
                  </p>
                </div>
              </motion.div>

              {/* All-in-One Mobile App */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">📋</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    All-in-One Mobile App
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Complete mobile solution
                  </p>
                </div>
              </motion.div>

              {/* Digital Identification */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">🌐</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    Digital Identification
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Secure identity management
                  </p>
                </div>
              </motion.div>

              {/* Powerful Business Intelligence */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".7"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">📊</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    Powerful Business Intelligence
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Data-driven insights
                  </p>
                </div>
              </motion.div>

              {/* Multi-Tier Security */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">🔒</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    Multi-Tier Security
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Enterprise-grade protection
                  </p>
                </div>
              </motion.div>

              {/* High RoI */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".9"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">💰</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    High RoI
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Maximum return on investment
                  </p>
                </div>
              </motion.div>

              {/* Comprehensive Dashboards */}
              <motion.div
                className="feature feature-s3 flex flex-col items-center justify-center text-center p-6 min-h-[210px] rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                data-animate="fadeInUp"
                data-delay="1.0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#76B900]/10">
                  <span className="text-3xl">📈</span>
                </div>

                <div className="feature-text">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    Comprehensive Dashboards
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Real-time analytics
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Advantages Section */}
      <section
        className="section section-l section-problem bg-gray-50 py-20 md:py-24"
        id="problem"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="section-head text-center mb-12 md:mb-16">
            <h2
              className="title text-3xl md:text-4xl font-bold text-slate-900"
              data-animate="fadeInUp"
              data-delay=".1"
            >
              BUSINESS ADVANTAGES
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-relaxed">
              Improve operational efficiency, reduce costs, and make faster,
              data-driven decisions with an integrated digital platform.
            </p>

            {/* Advantage Highlights */}
            <div
              className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5"
              data-animate="fadeInUp"
              data-delay=".2"
            >
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#76B900] text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm md:text-base font-medium text-slate-700">
                  High Performance & Productivity
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#76B900] text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm md:text-base font-medium text-slate-700">
                  Significant Monetary Savings
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#76B900] text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm md:text-base font-medium text-slate-700">
                  Improved Efficiency
                </span>
              </div>
            </div>
          </div>

          {/* Business Advantage Cards */}
          <div className="nk-block nk-block-problems">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Automation Advantages */}
              <motion.div
                className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                {/* Blue Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1940b0]" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1940b0]/10">
                    <span className="text-xl">⚙️</span>
                  </div>

                  <div className="feature-text">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                      Automation Advantages
                    </h4>

                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="text-[#76B900] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>Digitization</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#76B900] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>Operations Control</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#76B900] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>Proper Record Keeping</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="text-[#76B900] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>Removal of Manpower Dependency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* End-to-End Process Management */}
              <motion.div
                className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4 }}
              >
                {/* Blue Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1940b0]" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1940b0]/10">
                    <span className="text-xl">🔄</span>
                  </div>

                  <div className="feature-text">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                      End-to-End Process Management
                    </h4>

                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      Allows you to replace multiple applications with a single
                      system to automate all your business processes. It gives
                      you all the needed functions to manage an educational
                      setup. Since you are using one completely integrated
                      system, all features are designed to work optimally with
                      other components, eliminating the need to re-enter data.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Real-time Information Sharing */}
              <motion.div
                className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -4 }}
              >
                {/* Blue Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1940b0]" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1940b0]/10">
                    <span className="text-xl">🔗</span>
                  </div>

                  <div className="feature-text">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                      Real-time Information Sharing
                    </h4>

                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      Data always stays in sync. Instead of combining
                      information from multiple places and struggling to access
                      the information you need, a centralized platform provides
                      consistent and readily available information.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Strategic Decision Making */}
              <motion.div
                className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                data-animate="fadeInUp"
                data-delay=".6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -4 }}
              >
                {/* Blue Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1940b0]" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1940b0]/10">
                    <span className="text-xl">📊</span>
                  </div>

                  <div className="feature-text">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                      Strategic Decision Making
                    </h4>

                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      Comprehensive reports and dashboards enable agile and
                      accurate decision making. Performance tracking and
                      analysis tools provide real-time visibility into campaign
                      performance, helping teams focus on the most effective
                      strategies. G6 also integrates with SMS and E-mail servers
                      to deliver the right communication to the right audience
                      through the right channel.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;