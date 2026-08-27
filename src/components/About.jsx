import { useState, forwardRef } from "react";
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Database,
  X,
  ChevronLeft,
  ChevronRight,
  Target,
  Eye,
  Heart,
  Calendar,
  Award,
  Users,
} from "lucide-react";
import images from "../../public/images.js";
import SEO from "./SEO.jsx";

const features = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description:
      "Design and deploy AI-powered solutions that automate processes and improve business decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern enterprises.",
  },
  {
    icon: Database,
    title: "High Performance Computing",
    description:
      "Accelerate research, analytics, and AI workloads with enterprise-grade HPC platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protect critical infrastructure with reliable cybersecurity and data protection solutions.",
  },
];

const journeyItems = [
  {
    year: "2003",
    text: "Founded as a high-performance computing systems integrator, building solutions for India's research community.",
  },
  {
    year: "2012",
    text: "Scientific Computing practice expands nationwide into university and research labs across India.",
  },
  {
    year: "2018",
    text: "NVIDIA Partnership formalized; first DGX deployments go live for enterprise and research customers.",
  },
  {
    year: "2022",
    text: "Elite Partner Status achieved — India's top NVIDIA partnership tier for select integrators.",
  },
  {
    year: "2025",
    text: "5,000+ engineers and researchers trained across CUDA, DGX, and generative AI infrastructure.",
  },
];

const About = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    { id: 1, src: images.kle, title: "KLE" },
    { id: 2, src: images.university, title: "University" },
    { id: 3, src: images.kasp, title: "KASP" },
    { id: 4, src: images.mora, title: "MORA" },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1,
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <>
      {!props.embedded && (
        <SEO
          title="About Us"
          description="Learn about Global Infoventures' journey as an NVIDIA Elite Partner — our mission, milestones, and enterprise AI deployments across India."
          keywords={[
            "Global Infoventures",
            "GIIndia",
            "NVIDIA Elite Partner",
            "about us",
            "AI company India",
          ]}
          path="/about"
        />
      )}
      <section
        id="about"
        ref={ref}
        className="relative flex items-center overflow-hidden bg-white
             pt-24 pb-10 md:pt-28 md:pb-12 scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* New About Section with Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - About Content */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                About Global Infoventures
              </span>

              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                Powering India's
                <br />
                <span className="text-green-600">AI Revolution</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-700">
                Global Infoventures is a premier technology solutions provider
                and NVIDIA Elite Partner, specializing in AI infrastructure,
                high-performance computing (HPC), and enterprise-grade GPU
                solutions. With over two decades of experience, we empower
                research institutions, enterprises, and government organizations
                to harness the power of accelerated computing.
              </p>

              {/* Values Section */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 rounded-xl bg-green-50 p-4 transition hover:bg-green-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                    <Target size={20} />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Mission</strong>
                    <span className="text-sm text-gray-600">
                      Making enterprise-grade AI infrastructure accessible,
                      dependable, and genuinely well supported across India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-green-50 p-4 transition hover:bg-green-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                    <Eye size={20} />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Vision</strong>
                    <span className="text-sm text-gray-600">
                      To be India's benchmark partner for accelerated computing
                      at national scale.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-green-50 p-4 transition hover:bg-green-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                    <Heart size={20} />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Values</strong>
                    <span className="text-sm text-gray-600">
                      Technical rigor, transparent delivery, and partnerships
                      built to last beyond the first deployment.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Journey Timeline */}
            <div className="space-y-6">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200"></div>

                {journeyItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative flex items-start gap-6 pl-12 transition hover:translate-x-2"
                  >
                    {/* Year Badge */}
                    <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white shadow-md group-hover:scale-110 transition">
                      {index === 0 ? (
                        <Calendar size={16} />
                      ) : index === journeyItems.length - 1 ? (
                        <Award size={16} />
                      ) : null}
                      {index > 0 && index < journeyItems.length - 1 && (
                        <span className="text-xs">{item.year.slice(-2)}</span>
                      )}
                    </div>

                    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition group-hover:shadow-md group-hover:border-green-200">
                      <div className="mb-1 text-sm font-bold text-green-600">
                        {item.year}
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700">
                        <strong className="text-slate-900">
                          {item.text.split(" ").slice(0, 1).join(" ")}
                        </strong>{" "}
                        {item.text.split(" ").slice(1).join(" ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

       

          {/* Features Grid */}
          <div className="mt-20">
            <div className="mb-12 text-center">
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Our Expertise
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Technology Solutions{" "}
                <span className="text-green-600">We Deliver</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 transition duration-300 group-hover:bg-green-600">
                      <Icon
                        className="text-green-600 transition duration-300 group-hover:text-white"
                        size={28}
                      />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

About.displayName = "About";

export default About;
