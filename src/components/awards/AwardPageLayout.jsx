import React from "react";
import { Link } from "react-router-dom";

const AwardPageLayout = ({
  title,
  subtitle,
  banner,
  bannerAlt,
  children,
}) => {
  return (
    <div className="bg-light min-h-screen overflow-hidden">
      <main className="relative z-10">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* Back Button */}
            <div className="mb-8">
              <Link
                to="/award"
                className="inline-flex items-center gap-2 text-sm md:text-base text-gray-600 hover:text-[#76B900] transition-colors duration-300 no-underline"
              >
                <span className="text-lg">←</span>
                <span>Back to Awards</span>
              </Link>
            </div>

            {/* Title */}
            <div className="text-center mb-8 md:mb-10">
              {subtitle && (
                <p className="text-xs md:text-sm font-bold tracking-[0.12em] uppercase text-[#76B900] mb-3">
                  {subtitle}
                </p>
              )}

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {title}
              </h1>
            </div>

            {/* Banner */}
            {banner && (
              <div className="mb-8 overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src={banner}
                  alt={bannerAlt || title}
                  title={bannerAlt || title}
                  className="w-full block rounded-lg transition-transform duration-700 hover:scale-105"
                />
              </div>
            )}

            {/* Page Content */}
            <div className="w-full">
              {children}
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default AwardPageLayout;