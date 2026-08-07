import React, { useState, useEffect } from "react";
import {
  X,
  ChevronRight,
  Users,
  Briefcase,
  Award,
  Cpu,
  Zap,
  Shield,
  Rocket,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  TrendingUp,
  Layers,
  Star,
  CheckCircle,
  Play,
} from "lucide-react";

// Import social media icons from react-icons
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const GrilSections = () => {
  const [counts, setCounts] = useState({
    enrolled: 0,
    completed: 0,
    internship: 0,
  });
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  useEffect(() => {
    const targetCounts = { enrolled: 144, completed: 107, internship: 6 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      enrolled: targetCounts.enrolled / steps,
      completed: targetCounts.completed / steps,
      internship: targetCounts.internship / steps,
    };
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCounts({
        enrolled: Math.min(
          Math.round(increment.enrolled * current),
          targetCounts.enrolled,
        ),
        completed: Math.min(
          Math.round(increment.completed * current),
          targetCounts.completed,
        ),
        internship: Math.min(
          Math.round(increment.internship * current),
          targetCounts.internship,
        ),
      });
      if (current >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "PPE Violation Detection",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
      tech: ["AI", "Computer Vision", "Python"],
      description:
        "Real-time detection of PPE violations in industrial environments using deep learning.",
    },
    {
      title: "Multi Person Face Recognition",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tech: ["FaceNet", "OpenCV", "TensorFlow"],
      description:
        "Advanced face recognition system capable of identifying multiple individuals simultaneously.",
    },
    {
      title: "Individual People Count",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["YOLO", "Deep Learning", "PyTorch"],
      description:
        "Accurate people counting system using computer vision and object detection.",
    },
    {
      title: "Object Segmentation",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tech: ["Segmentation", "CNN", "Mask R-CNN"],
      description:
        "Precise object segmentation for autonomous systems and medical imaging.",
    },
  ];

  const whyData = [
    {
      title: "Why AI",
      desc: "Artificial Intelligence is transforming every industry",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      title: "Why Machine Learning",
      desc: "ML enables systems to learn and improve from experience",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    },
    {
      title: "Industry Transformation",
      desc: "AI is reshaping industries from healthcare to finance",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
      title: "Research & Innovation",
      desc: "Pushing boundaries of what's possible with AI",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    },
    {
      title: "Gaming & Entertainment",
      desc: "Creating immersive experiences with AI",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    },
    {
      title: "Medicine & Healthcare",
      desc: "AI-powered diagnostics and treatment",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
    {
      title: "Biotechnology",
      desc: "AI accelerating genetic research and drug discovery",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    },
    {
      title: "Cyber Security",
      desc: "Protecting digital assets with AI",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    },
    {
      title: "Digital Twins",
      desc: "Virtual replicas for simulation and analysis",
      img: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&h=400&fit=crop",
    },
    {
      title: "Robotics",
      desc: "Intelligent machines working alongside humans",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    },
    {
      title: "AI Content Creation",
      desc: "Generating creative content with AI",
      img: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
    },
  ];

  const nvidiaFeatures = [
    { label: "DGX Systems", icon: Cpu, color: "text-primary-green" },
    { label: "Accelerated Computing", icon: Zap, color: "text-primary-green" },
    { label: "GPUs", icon: Layers, color: "text-primary-green" },
    { label: "Machine Learning", icon: TrendingUp, color: "text-primary-green" },
  ];

  const nvidiaFeatures2 = [
    { label: "Deep Learning", icon: Layers, color: "text-primary-green" },
    { label: "AI Infrastructure", icon: Shield, color: "text-primary-green" },
    { label: "Supercomputing", icon: Rocket, color: "text-primary-green" },
  ];

  const wildcardItems = [
    {
      label: "AI Project Submission",
      icon: Cpu,
      desc: "Submit your innovative AI project",
    },
    {
      label: "Resume & Interview",
      icon: Users,
      desc: "Personal interview with experts",
    },
    {
      label: "GPU Projects & Stipend",
      icon: Award,
      desc: "Work on GPU projects with stipend",
    },
  ];

  const journeyItems = [
    { year: "2022-24", label: "GRIL Program Launch", icon: Rocket },
    { year: "2023", label: "Student Internship Program", icon: Briefcase },
    { year: "2024", label: "Project Showcase & Achievements", icon: Award },
  ];

  const evaluationItems = [
    {
      label: "Technical Reasoning",
      value: 40,
      color: "from-primary-green to-border-green",
    },
    { label: "Aptitude Test", value: 40, color: "from-primary-green to-light-green" },
    { label: "CGPA", value: 20, color: "from-primary-green to-border-green" },
  ];

  const journeySteps = [
    {
      step: "Scholarship Application",
      icon: Award,
      desc: "Apply for merit-based scholarships",
    },
    {
      step: "Merit List Publication",
      icon: Star,
      desc: "Check your position in the merit list",
    },
    {
      step: "Group Discussion",
      icon: Users,
      desc: "Participate in group discussions",
    },
    {
      step: "Final Selection",
      icon: CheckCircle,
      desc: "Congratulations on your selection!",
    },
  ];

  // Updated social icons array with react-icons
  const socialIcons = [
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaYoutube, label: "Youtube" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaWhatsapp, label: "WhatsApp" },
  ];

  const galleryCategories = [
    "All",
    "ABESIT",
    "GL Bajaj",
    "RV College",
    "KIET",
    "GTC 2024",
  ];

  return (
    <div className="min-h-screen bg-white text-primary-text overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-light-green/10 via-primary-green/10 to-light-green/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-green/20 animate-pulse"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 3 + "s",
                animationDuration: Math.random() * 3 + 2 + "s",
              }}
            ></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-light-green rounded-full border border-border-green">
                <span className="animate-pulse flex h-2 w-2 rounded-full bg-primary-green mr-2"></span>
                <span className="text-primary-green text-sm font-medium">
                  Future-Ready Program
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary-green">
                  Knowing GRIL
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-body-text">
                Be Future-Ready with{" "}
                <span className="text-primary-green font-semibold">
                  ENHANCED INDUSTRY READINESS!
                </span>
              </p>
              <div className="space-y-4 text-body-text text-lg">
                <p>✦ GRIL is a futuristic two-year AI learning program.</p>
                <p>✦ Focus on Robotics, AI, Cyber Security, Aerospace.</p>
                <p>✦ Supports Training, Placement, Research, and Startups.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-primary-green rounded-2xl font-semibold text-white hover:shadow-2xl hover:shadow-primary-green/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Registration GRIL 2026–27
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-light-green border border-border-green rounded-2xl font-semibold text-primary-green hover:bg-border-green transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Orientation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-green/20">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
                  alt="Hero"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-4 bg-white shadow-xl rounded-2xl p-4 border border-border-gray">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-green">144</div>
                  <div className="text-xs text-secondary-text">Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-green">107</div>
                  <div className="text-xs text-secondary-text">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-green">6</div>
                  <div className="text-xs text-secondary-text">Internships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GRIL */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text">
              Why GRIL?
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Discover the future of AI and technology through our comprehensive
              programs
            </p>
          </div>
          <div className="space-y-16">
            {whyData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center group`}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary-green/10">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent"></div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-light-green rounded-full text-primary-green text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></span>
                    Step {index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-primary-text group-hover:text-primary-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-text text-lg">{item.desc}</p>
                  <button className="flex items-center gap-2 text-primary-green hover:text-primary-green/80 transition-colors">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <div className="inline-block px-8 py-4 bg-light-green border border-border-green rounded-2xl">
              <p className="text-xl font-semibold text-primary-text">
                That's where <span className="text-primary-green">GRIL</span> comes
                into play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NVIDIA Platform */}
      <section className="py-20 relative bg-light-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text">
              NVIDIA Platform
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Powered by NVIDIA's cutting-edge technology for AI and deep
              learning
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {nvidiaFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-border-gray rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                    <div className="text-sm font-medium text-secondary-text">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {nvidiaFeatures2.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-border-gray rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                    <div className="text-sm font-medium text-secondary-text">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-green/20">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
                  alt="NVIDIA Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary-green rounded-full p-3 shadow-2xl">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text">
              Selection Process
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Join the future of AI through our rigorous selection process
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white border border-border-gray rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-green">
                  Eligibility
                </h3>
                <ul className="space-y-2 text-body-text">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-green" />{" "}
                    Bachelor's degree in related field
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-green" /> Minimum
                    60% in academics
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-green" />{" "}
                    Programming experience
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-border-gray rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-green">
                  Evaluation Matrix
                </h3>
                <div className="space-y-3">
                  {evaluationItems.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-body-text">{item.label}</span>
                        <span className="text-primary-text font-semibold">
                          {item.value}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-border-gray rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-border-gray rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-green mb-4">
                  Application Journey
                </h3>
                <div className="space-y-6">
                  {journeySteps.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary-text">
                          Step {idx + 1}: {item.step}
                        </div>
                        <div className="text-sm text-secondary-text">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildcard Entry */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-light-green/30 via-primary-green/10 to-light-green/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-green/10 via-light-green/20 to-primary-green/10 border border-border-green p-12 shadow-2xl">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-4">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-yellow-700 text-sm font-medium">
                    Wildcard Entry
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                  Special Entry Program
                </h2>
                <p className="text-body-text max-w-2xl mx-auto">
                  Showcase your AI project and secure your spot with a wildcard
                  entry
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {wildcardItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-border-gray rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="inline-flex p-3 rounded-full bg-primary-green mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary-text mb-2">
                      {item.label}
                    </h4>
                    <p className="text-sm text-secondary-text">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button className="group px-8 py-4 bg-yellow-500 rounded-2xl font-semibold text-white hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                  Apply for Wildcard Entry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRIL Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text">
              GRIL Journey
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Tracking the success and impact of our program
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-green/20">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                  alt="GRIL Journey"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-border-gray rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-green">
                    {counts.enrolled}+
                  </div>
                  <div className="text-sm text-secondary-text">Enrolled</div>
                </div>
                <div className="bg-white border border-border-gray rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-green">
                    {counts.completed}+
                  </div>
                  <div className="text-sm text-secondary-text">Completed</div>
                </div>
                <div className="bg-white border border-border-gray rounded-xl p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-green">
                    {counts.internship}+
                  </div>
                  <div className="text-sm text-secondary-text">
                    Internship Selected
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {journeyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white border border-border-gray rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-green font-medium">
                        {item.year}
                      </div>
                      <div className="text-primary-text font-medium">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orientation Gallery */}
      <section className="py-20 bg-light-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text">
              Orientation Gallery
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Capture the moments from our orientation programs across campuses
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveTab(category.toLowerCase().replace(" ", ""))
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category.toLowerCase().replace(" ", "") ||
                  (activeTab === "all" && category === "All")
                    ? "bg-primary-green text-white shadow-lg shadow-primary-green/25"
                    : "bg-white text-secondary-text border border-border-gray hover:bg-light-green"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 20 }).map((_, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl cursor-pointer hover:shadow-2xl hover:shadow-primary-green/20 transition-all duration-300"
                onClick={() => {
                  setLightboxImage(
                    `https://images.unsplash.com/photo-${1500000000000 + idx}?w=800&h=600&fit=crop`,
                  );
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + idx}?w=400&h=300&fit=crop`}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    View Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Gallery"
              className="w-full h-auto rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Student Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-text">
              Student Projects
            </h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Innovative projects developed by our talented students
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-border-gray rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-primary-green/20"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-primary-text mb-2 group-hover:text-primary-green transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-light-green text-primary-green rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary-green hover:text-primary-green/80 transition-colors text-sm font-medium flex items-center gap-1">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrilSections;