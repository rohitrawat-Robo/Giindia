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
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === imageList.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section id="about" ref={ref} className="bg-white py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* New About Section with Mission, Vision, Values */}
        <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Side - About Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              About Global Infoventures
            </span>

            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Powering India's<br />
              <span className="text-green-600">AI Revolution</span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Global Infoventures is a premier technology solutions provider and NVIDIA Elite Partner, specializing in
              AI infrastructure, high-performance computing (HPC), and enterprise-grade GPU solutions. With over two
              decades of experience, we empower research institutions, enterprises, and government organizations to
              harness the power of accelerated computing.
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
                    Making enterprise-grade AI infrastructure accessible, dependable, and genuinely well supported across India.
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
                    To be India's benchmark partner for accelerated computing at national scale.
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
                    Technical rigor, transparent delivery, and partnerships built to last beyond the first deployment.
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
                    {index === 0 ? <Calendar size={16} /> : index === journeyItems.length - 1 ? <Award size={16} /> : null}
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

        {/* NVIDIA Elite Partnership Panel */}
        <div className="mt-16 grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              NVIDIA Elite Partnership
            </span>

            <h3 className="text-3xl font-bold text-slate-900 lg:text-4xl">
              Proud <span className="text-green-600">Elite Partner</span> of NVIDIA
            </h3>

            <p className="text-lg leading-relaxed text-gray-700">
              <strong className="text-slate-900">Global Infoventures Pvt. Ltd.</strong> is also a proud
              <strong className="text-slate-900"> Elite partner of NVIDIA</strong> since the past 4 years.
              We have successfully completed more than
              <strong className="text-slate-900"> 30+ installations of NVIDIA DGX solutions</strong> till date
              and are actively delivering high-performance server solutions across
              the country.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              We specialize in providing advanced systems, including the powerful
              <strong className="text-slate-900"> DGX B200 to support AI and accelerated computing needs nationwide</strong>.
              In addition, we also provide professional training on
              <strong className="text-slate-900"> NVIDIA servers</strong>, helping organizations and teams effectively
              deploy, manage and optimize their
              <strong className="text-slate-900"> AI infrastructure.</strong>
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <span className="font-bold">STATUS</span> Elite Partner
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <span className="font-bold">DEPLOYED</span> 30+ DGX Installations
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <span className="font-bold">SYSTEM</span> DGX B200
              </span>
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <span className="font-bold">SERVICE</span> NVIDIA Server Training
              </span>
            </div>
          </div>

          {/* Right Side - Visual with NVIDIA Badge */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-100/30 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-100/20 blur-3xl"></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center justify-center space-y-6">
                <div className="rounded-2xl border-2 border-green-200 bg-white p-6 shadow-md">
                  <img
                    src={images.elite || "https://via.placeholder.com/150x80"}
                    alt="NVIDIA Elite Partner badge — Global Infoventures"
                    className="h-16 w-auto md:h-20"
                  />
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-green-500"></div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                      Elite Partner Since 2020
                    </span>
                    <div className="h-1 w-12 rounded-full bg-green-500"></div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    Trusted NVIDIA partner delivering cutting-edge AI infrastructure
                  </p>
                </div>

                {/* Stats mini cards */}
                <div className="grid w-full grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-green-100">
                    <div className="text-2xl font-bold text-green-600">30+</div>
                    <div className="text-xs text-gray-600">DGX Installations</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-green-100">
                    <div className="text-2xl font-bold text-green-600">4+</div>
                    <div className="text-xs text-gray-600">Years Partnership</div>
                  </div>
                </div>
              </div>
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
              Technology Solutions <span className="text-green-600">We Deliver</span>
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
                    <Icon className="text-green-600 transition duration-300 group-hover:text-white" size={28} />
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
  );
});

About.displayName = 'About';

export default About;