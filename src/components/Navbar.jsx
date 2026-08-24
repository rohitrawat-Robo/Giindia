import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import images from "../../public/images.js";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll tracking effect (existing functionality - DO NOT REMOVE)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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

  // UPDATED: Menu items with all requested navigation links
  const menuItems = [
    { label: "Home", path: "/", scrollToTop: true },
    { label: "G6 Solution", path: "/G6Solution" },
    { label: "About Us", path: "/G6Solution", scrollTo: "about" },
    { label: "Solutions", path: "/G6Solution", scrollTo: "features" },
    { label: "GRIL", path: "/gril" },
    { label: "Events", path: "/events" },
    { label: "Award", path: "/award" },
    { label: "Nvidia Elite Partner", path: "/nvidia-elite-partner" },
    { label: "Team", path: "/team" },
    { label: "Career", path: "/career", external: true },
    { label: "Contact Us", path: "/contact" },
  ];
  // Handle smooth scroll to section
  const scrollToSection = (sectionId) => {
    console.log(`Attempting to scroll to: ${sectionId}`);
    const element = document.getElementById(sectionId);

    if (element) {
      console.log(`✅ Found element with id: ${sectionId}`);
      const navbarHeight = 80; // Fixed navbar height (h-20 = 5rem = 80px)
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      console.log(`Scrolling to position: ${offsetPosition}px`);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      return true;
    } else {
      console.log(`❌ Element with id "${sectionId}" not found on the page`);
      console.log(`Available sections on page:`);
      document.querySelectorAll("section").forEach((sec, index) => {
        console.log(`  ${index + 1}. id="${sec.id}"`);
      });
      return false;
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle navigation
  const handleNavigation = (item, e) => {
    if (item.external) {
      e.preventDefault();
      window.open(item.path, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.scrollToTop) {
      e.preventDefault();

      if (location.pathname !== "/") {
        sessionStorage.setItem("scrollToTop", "true");
        window.location.href = "/";
      } else {
        scrollToTop();
      }

      return;
    }

    if (item.scrollTo) {
      e.preventDefault();

      // If already on G6 Solution page, scroll directly
      if (location.pathname === "/G6Solution") {
        scrollToSection(item.scrollTo);
      } else {
        // Navigate to G6 Solution first, then scroll
        sessionStorage.setItem("scrollToSection", item.scrollTo);
        window.location.href = "/G6Solution";
      }

      return;
    }
  };
  // Close mobile menu when any link is clicked
  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  // Check for section to scroll to after navigation to home
  useEffect(() => {
    // Check if we need to scroll to top
    const scrollToTopFlag = sessionStorage.getItem("scrollToTop");
    if (scrollToTopFlag && location.pathname === "/") {
      sessionStorage.removeItem("scrollToTop");
      console.log(`📦 Scrolling to top after navigation`);

      setTimeout(() => {
        scrollToTop();
      }, 200);
    }

    // Check if we need to scroll to a specific section
    const scrollToId = sessionStorage.getItem("scrollToSection");
    if (scrollToId && location.pathname === "/") {
      sessionStorage.removeItem("scrollToSection");
      console.log(`📦 Found stored scroll target: ${scrollToId}`);

      // Wait for DOM to be fully rendered
      const attempts = [200, 500, 800, 1200];
      attempts.forEach((delay) => {
        setTimeout(() => {
          scrollToSection(scrollToId);
        }, delay);
      });
    }
  }, [location.pathname]);

  // Log all sections when on home page
  useEffect(() => {
    if (location.pathname === "/") {
      console.log("📍 Home page loaded. Available sections:");
      document.querySelectorAll("section").forEach((sec, index) => {
        console.log(`  ${index + 1}. id="${sec.id}"`);
      });
    }
  }, [location.pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-gray-700/30">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-label="Scroll progress"
          aria-valuenow={scrollProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#08193A]/95 backdrop-blur-[16px] shadow-[0_4px_30px_-14px_rgba(8,25,58,0.6)]"
            : "bg-[#08193A]"
        }`}
        style={{ padding: scrolled ? "8px 0" : "18px 0" }}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === "/") {
                  scrollToTop();
                } else {
                  sessionStorage.setItem("scrollToTop", "true");
                  window.location.href = "/";
                }
              }}
              className="flex items-center transition-all duration-300 hover:opacity-80 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#76B900] focus:ring-offset-2 focus:ring-offset-[#08193A] rounded-lg flex-shrink-0"
              aria-label="Go to homepage"
            >
              <img
                src={images.gi}
                alt="Global Infoventures Logo"
                className="h-11 w-auto block"
              />
            </Link>

            {/* Desktop Menu */}
            <div
              className="hidden items-center gap-8 lg:flex"
              role="navigation"
              aria-label="Desktop navigation"
            >
              {menuItems.map((item) => {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={(e) => handleNavigation(item, e)}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="relative font-medium text-[15px] tracking-wide text-gray-200 hover:text-[#76B900] transition-all duration-300 focus:outline-none rounded-lg px-1 py-1"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Login Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                to="https://hr.servergi.com:8071/givapp/login"
                className="group relative flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#76B900] to-[#5A8C00] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_-4px_rgba(118,185,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-6px_rgba(118,185,0,0.5)] focus:outline-none focus:ring-2 focus:ring-[#76B900] focus:ring-offset-2 focus:ring-offset-[#08193A] overflow-hidden"
                aria-label="Login to your account"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#8FD400] to-[#76B900] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <span className="relative flex items-center gap-2">
                  Login
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-[#76B900] focus:ring-offset-2 focus:ring-offset-[#08193A]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-[26px] h-[2px] rounded-full transition-all duration-300 ${
                  scrolled ? "bg-[#76B900]" : "bg-gray-200"
                } ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />

              <span
                className={`block w-[26px] h-[2px] rounded-full transition-all duration-300 ${
                  scrolled ? "bg-[#76B900]" : "bg-gray-200"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />

              <span
                className={`block w-[26px] h-[2px] rounded-full transition-all duration-300 ${
                  scrolled ? "bg-[#76B900]" : "bg-gray-200"
                } ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide-in Sidebar */}
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-[#08193A]/90 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
              onClick={handleMobileClose}
              aria-hidden="true"
            />

            {/* Sidebar */}
            <div
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 h-full w-80 transform bg-[#08193A] shadow-2xl lg:hidden animate-in slide-in-from-right duration-300"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex h-20 items-center justify-between border-b border-[#76B900]/20 px-6">
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileClose();

                    if (location.pathname === "/") {
                      scrollToTop();
                    } else {
                      sessionStorage.setItem("scrollToTop", "true");
                      window.location.href = "/";
                    }
                  }}
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
                  className="rounded-lg p-2 text-[#76B900] transition-all duration-200 hover:bg-[#76B900]/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#76B900]"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex h-[calc(100%-5rem)] flex-col overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {menuItems.map((item) => {
                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={(e) => {
                          handleNavigation(item, e);
                          handleMobileClose();
                        }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-300/90 transition-all duration-200 hover:bg-[#76B900]/10 hover:text-[#76B900]"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-[#76B900]/20 pt-6">
                  <Link
                    to="/login"
                    onClick={handleMobileClose}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#76B900] to-[#5A8C00] px-6 py-3 font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_-4px_rgba(118,185,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-6px_rgba(118,185,0,0.4)] focus:outline-none focus:ring-2 focus:ring-[#76B900] focus:ring-offset-2 focus:ring-offset-[#08193A] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8FD400] to-[#76B900] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    <span className="relative flex items-center gap-2">
                      Login
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
