import images from "../../public/images.js";
import React from 'react';
import SEO from "./SEO.jsx";

const Solutions = () => {
  return (
    <>
      <SEO
        title="Solutions"
        description="Explore Global Infoventures' NVIDIA-powered solutions — AI infrastructure, DGX systems, and enterprise deployment services for research and industry."
        path="/solutions"
      />
      <section className="section section-l section-features bg-white py-16" id="features">
      <div className="container mx-auto px-4">
        {/* Block @s */}
        <div className="nk-block nk-block-features-s2">
          <div className="flex flex-wrap items-center flex-row-reverse -mx-4">
            <div className="w-full lg:w-5/12 px-4">
              <div className="gfx py-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <img
                  src={images.gfxA || "images/gfx/gfx-a.png"}
                  alt="Software for University, School, College, Institute - India"
                  className="w-full h-auto"
                />
              </div>
            </div>{/* .col */}
            <div className="w-full lg:w-7/12 px-4">
              {/* Section Head @s */}
              <div className="section-head">
                <h2 className="title text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  UNIFIED PRODUCT DEVELOPMENT
                </h2>
                <p className="text-gray-600 mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  Our product development methodology is based on unifying layers of multiple applications over an integrated
                  database working with latest technology resting on world class infrastructure. This unification is embedded in all aspects of products.
                </p>
              </div>{/* .section-head @e */}
              <div className="features-list mr-4 mgb-m30 space-y-6">
                <div className="feature feature-s2 flex gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <div className="feature-icon dot flex-shrink-0">
                    <em className="icon ikon ikon-shiled-alt w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                      🛡️
                    </em>
                  </div>
                  <div className="feature-text">
                    <h5 className="title title-sm text-lg font-semibold mb-1">DESIGN</h5>
                    <p className="text-gray-600">Versatile & Intelligent; Scalable Design; End-user oriented design; Intuitive User-friendly interface</p>
                  </div>
                </div>
                <div className="feature feature-s2 flex gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  <div className="feature-icon dot flex-shrink-0">
                    <em className="icon ikon ikon-user w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                      👤
                    </em>
                  </div>
                  <div className="feature-text">
                    <h5 className="title title-sm text-lg font-semibold mb-1">DEVELOPMENT</h5>
                    <p className="text-gray-600">Highly secured, world-class R&D Centre; Robust software development methodology</p>
                  </div>
                </div>
                <div className="feature feature-s2 flex gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <div className="feature-icon dot flex-shrink-0">
                    <em className="icon ikon ikon-data-server w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                      💾
                    </em>
                  </div>
                  <div className="feature-text">
                    <h5 className="title title-sm text-lg font-semibold mb-1">DEPLOYMENT</h5>
                    <p className="text-gray-600">Deployment on Highly secured environment at GI Cloud; Timely deployment with 100% success rate.</p>
                  </div>
                </div>
              </div>
            </div>{/* .col */}
          </div>{/* .row */}
        </div>{/* .block @e */}
      </div>
    </section>
    </>
  );
};

export default Solutions;