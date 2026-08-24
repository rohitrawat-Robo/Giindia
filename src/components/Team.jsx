import React from "react";
import images from "../../public/images.js";

const Team = () => {
  const teamMembers = [
   
    {
      name: "Aashish Sharma",
      designation: "Business & Growth Leader",
      experience: "26+ Years",
      image: images.aashish,
      description:
        "Aashish brings extensive experience across technology, sales, marketing, and business development, focusing on strategic relationships, business growth, and technology-led opportunities.",
      focusAreas: [
        "Business Strategy",
        "Growth & Partnerships",
        "Technology Sales",
        "Business Development",
      ],
      linkedin: "https://www.linkedin.com/in/aashish-sharma-18130713/",
    },

     {
      name: "Sharad Srivastav",
      designation: "Solution Sales & Business Development",
      experience: "15+ Years",
      image: images.sharad,
      description:
        "With extensive experience in solution sales and business development, Sharad contributes to strategic engagements and technology-driven solutions across AI, accelerated computing, and education technology.",
      focusAreas: [
        "Solution Sales",
        "Business Development",
        "AI & Accelerated Computing",
        "Strategic Partnerships",
      ],
      linkedin: "https://www.linkedin.com/in/sharadsr/",
    },
  ];

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-14 md:py-16 lg:py-20"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-50 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-slate-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#1940b0]">
            Our Team
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the People Behind
            <span className="ml-2 text-[#1940b0]">
              Our Innovation
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Our team combines industry experience, technology expertise, and
            strategic vision to create impactful solutions.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group h-auto overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-full grid-cols-1 sm:grid-cols-[40%_60%]">

                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden bg-gray-100 sm:h-[430px] lg:h-[450px]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.designation}`}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Experience */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-md">
                    {member.experience}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">

                  {/* Top Content */}
                  <div>

                    {/* Label */}
                    <span className="mb-2 inline-block rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1940b0]">
                      Leadership
                    </span>

                    {/* Name */}
                    <h3 className="text-2xl font-bold leading-tight text-gray-900">
                      {member.name}
                    </h3>

                    {/* Designation */}
                    <p className="mt-1.5 text-sm font-semibold leading-5 text-[#1940b0]">
                      {member.designation}
                    </p>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gray-200" />

                    {/* Description */}
                    <p className="text-xs leading-6 text-gray-600 sm:text-sm">
                      {member.description}
                    </p>

                    {/* Expertise */}
                    <div className="mt-5">
                      <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-900">
                        Areas of Expertise
                      </h4>

                      <div className="flex flex-wrap gap-1.5">
                        {member.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-700 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Button */}
                  <div className="mt-5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#1940b0] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#12328c] hover:shadow-md"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.1 20.45H3.54V8.99H7.1v11.46zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                      </svg>

                      View LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-[#1940b0]" />

          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
            People. Technology. Innovation.
          </h3>

          <p className="mt-2 text-xs leading-6 text-gray-600 sm:text-sm">
            Together, we bring expertise, collaboration, and innovation
            together to build solutions that create meaningful impact.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Team;