import React from "react";
import images from "../../public/images.js";
import SEO from "./SEO.jsx";
import AwardCard from "./AwardCard.jsx";

const Award = () => {
  const awards = [
    {
      id: 1,
      title: "NVIDIA Generative AI Award",
      description: "Global Infoventures Pvt. Ltd. was recognized as the NVIDIA Gen AI 5-Star Partner in Education at the 2024 Mumbai event for its team's dedication to innovation and client excellence.",
      image: images.FY25,
      year: "2025",
      slug: "nvidiaGenAI",
    },
    
    {
      id: 2,
      title: "ET Now Award",
      description:
        "GI Ventures has been honored with a prestigious national award at the Economic Times Conclave & Awards 2026 for its groundbreaking contributions to AI infrastructure, deployment and AI up-skilling.",
      image: images.etnow,
      year: "2026",
      slug: "etnow",
    },

    

    // {
    //   id: 3,
    //   title: "Another Award",
    //   description: "Award description...",
    //   image: images.award3,
    //   year: "2025",
    //   slug: "another-award",
    // },
  ];

  return (
    <div className="bg-light min-h-screen">

      <SEO
        title="Awards | Global Infoventures"
        description="Explore awards and recognitions received by Global Infoventures for excellence in AI, NVIDIA-powered infrastructure, innovation and technology."
        keywords={[
          "Global Infoventures Awards",
          "GI Ventures Awards",
          "AI Awards",
          "NVIDIA Awards",
          "Technology Awards",
        ]}
        path="/awards"
      />

      <main className="relative z-10">

        {/* Hero / Header */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-7xl">

            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

              <p className="text-xs md:text-sm font-bold tracking-[0.12em] uppercase text-[#76B900] mb-4">
                Recognition & Excellence
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Awards & Recognition
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Celebrating the milestones, achievements and industry
                recognition that reflect our commitment to innovation,
                technology and excellence.
              </p>

            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {awards.map((award) => (
                <AwardCard
                  key={award.id}
                  title={award.title}
                  description={award.description}
                  image={award.image}
                  year={award.year}
                  date={award.date}
                  slug={award.slug}
                />
              ))}

            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Award;