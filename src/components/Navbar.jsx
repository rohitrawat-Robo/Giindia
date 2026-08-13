import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Brain,
  Cpu,
  Server,
  Cloud,
  Database,
  Network,
  HardDrive,
  Sparkles,
} from "lucide-react";
import images from "../../public/images.js";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll tracking effect (existing functionality - DO NOT REMOVE)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? (scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  // Solutions data with icons and descriptions
  const solutions = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Next-gen AI solutions for enterprise transformation",
      icon: Brain,
    },
    {
      id: "ml",
      title: "Machine Learning",
      description: "Advanced ML models and training pipelines",
      icon: Sparkles,
    },
    {
      id: "nvidia",
      title: "NVIDIA DGX",
      description: "Enterprise-grade DGX AI computing platforms",
      icon: Cpu,
    },
    {
      id: "hpc",
      title: "High Performance Computing",
      description: "Supercomputing solutions for complex workloads",
      icon: Server,
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture and deployment",
      icon: Cloud,
    },
    {
      id: "datacenter",
      title: "Data Center",
      description: "Modern data center design and optimization",
      icon: Database,
    },
    {
      id: "networking",
      title: "Networking",
      description: "High-speed enterprise networking solutions",
      icon: Network,
    },
    {
      id: "storage",
      title: "Storage Solutions",
      description: "Enterprise storage and data management",
      icon: HardDrive,
    },
  ];

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Solutions", path: "/solutions" },
    { label: "GRIL", path: "/gril" },
    { label: "Events", path: "/events" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
  ];

  // Close mobile menu when any link is clicked
  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-label="Scroll progress"
          aria-valuenow={scrollProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      {/* Navbar */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-black/30 to-transparent"
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
            aria-label="Go to homepage"
          >
            <img
              src={images.gi}
              alt="Global Infoventures Logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
            role="navigation"
            aria-label="Desktop navigation"
          >
            {menuItems.map((item) => {
              if (item.label === "Solutions") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMegaMenu(true)}
                    onMouseLeave={() => setMegaMenu(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                        location.pathname === "/solutions"
                          ? "text-green-600 font-bold border-b-2 border-green-600"
                          : scrolled
                          ? "text-gray-700 hover:text-green-600"
                          : "text-white hover:text-green-400"
                      }`}
                      aria-expanded={megaMenu}
                      aria-haspopup="true"
                      aria-label="Solutions menu"
                    >
                      Solutions
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          megaMenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {megaMenu && (
                      <div
                        className="absolute left-1/2 mt-2 w-[700px] -translate-x-1/2 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-6 animate-in fade-in slide-in-from-top-5 duration-200"
                        role="menu"
                        aria-label="Solutions submenu"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {solutions.map((solution) => {
                            const Icon = solution.icon;
                            return (
                              <Link
                                key={solution.id}
                                to="/solutions"
                                className="group flex items-start gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-green-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                role="menuitem"
                                onClick={handleMobileClose}
                              >
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-200 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110">
                                  <Icon size={24} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600">
                                    {solution.title}
                                  </h4>
                                  <p className="mt-1 text-sm text-gray-600">
                                    {solution.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    isActive
                      ? "text-green-600 border-b-2 border-green-600 font-bold"
                      : scrolled
                      ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      : "text-white hover:text-green-400 hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Login Button */}
          <div className="hidden lg:block">
            <Link
              to="https://hr.servergi.com:8071/givapp/login"
              className="group flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Login to your account"
            >
              Login
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Slide-in Sidebar */}
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
              onClick={handleMobileClose}
              aria-hidden="true"
            />

            {/* Sidebar */}
            <div
              id="mobile-menu"
              className="fixed left-0 top-0 z-50 h-full w-80 transform bg-white shadow-2xl lg:hidden animate-in slide-in-from-left duration-300"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6">
                <Link
                  to="/"
                  onClick={handleMobileClose}
                  className="flex items-center gap-3"
                >
                  <img
                    src={images.gi}
                    alt="Global Infoventures Logo"
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  onClick={handleMobileClose}
                  className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex h-[calc(100%-5rem)] flex-col overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={handleMobileClose}
                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-green-50 text-green-600 font-bold border-l-4 border-green-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-gray-100 pt-6">
                  <Link
                    to="/login"
                    onClick={handleMobileClose}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Login
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}