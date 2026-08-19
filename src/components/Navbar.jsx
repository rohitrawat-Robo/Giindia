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
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Solutions", path: "/solutions" },
    { label: "GRIL", path: "/gril" },
    { label: "Events", path: "/events" },
    { label: "Award", path: "/award" },
    { label: "Nvidia Elite Partner", path: "/nvidia-elite-partner" },
    { label: "Career", path: "/career", external: true }, // Marked as external
    { label: "Contact Us", path: "/contact" },
  ];

  // Handle navigation for external links
  const handleNavigation = (item, e) => {
    if (item.external) {
      e.preventDefault();
      window.open(item.path, "_blank", "noopener,noreferrer");
    }
  };

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
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg flex-shrink-0"
            aria-label="Go to homepage"
          >
            <img
              src={images.gi}
              alt="Global Infoventures Logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Menu - Updated with smaller text and spacing */}
          <nav
            className="hidden items-center gap-1 xl:gap-2 lg:flex"
            role="navigation"
            aria-label="Desktop navigation"
          >
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavigation(item, e)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`px-2.5 py-2 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    isActive && !item.external
                      ? "text-green-600 border-b-2 border-green-600 font-bold"
                      : scrolled
                        ? "text-gray-700 hover:text-green-600 hover:bg-green-50"
                        : "text-white hover:text-green-400 hover:bg-white/10"
                  }`}
                  aria-current={isActive && !item.external ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Login Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              to="https://hr.servergi.com:8071/givapp/login"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-5 py-2 text-xs xl:text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Login to your account"
            >
              Login
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
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
                        onClick={(e) => {
                          handleNavigation(item, e);
                          handleMobileClose();
                        }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive && !item.external
                            ? "bg-green-50 text-green-600 font-bold border-l-4 border-green-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        }`}
                        aria-current={isActive && !item.external ? "page" : undefined}
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
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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