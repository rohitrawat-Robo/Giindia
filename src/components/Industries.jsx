import {
  GraduationCap,
  Landmark,
  Factory,
  HeartPulse,
  Building2,
  Cpu,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Empowering universities, colleges, and research institutions with AI labs, DGX systems, and high-performance computing.",
  },
  {
    title: "Government",
    icon: Landmark,
    description:
      "Secure, scalable infrastructure for e-governance, smart cities, defense, and public sector innovation.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description:
      "Optimize production using AI-driven automation, predictive maintenance, and digital twins.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Accelerate diagnostics, medical imaging, genomics, and AI-assisted healthcare solutions.",
  },
  {
    title: "Enterprise",
    icon: Building2,
    description:
      "Modernize enterprise infrastructure with cloud, virtualization, storage, networking, and cybersecurity.",
  },
  {
    title: "Research & AI",
    icon: Cpu,
    description:
      "Support AI model training, simulation, data science, and scientific computing with HPC platforms.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Delivering Technology Across
            <span className="text-green-500">
              {" "}
              Every Industry
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We help organizations accelerate innovation through Artificial
            Intelligence, High Performance Computing, Cloud Infrastructure,
            Enterprise Solutions, and Digital Transformation.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 transition group-hover:bg-green-500 group-hover:text-black">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {industry.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-green-400 transition hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}

        </div>

        {/* Bottom Statistics */}

        <div className="mt-24 grid gap-8 rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold text-green-500">
              20+
            </h3>

            <p className="mt-2 text-slate-400">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">
              500+
            </h3>

            <p className="mt-2 text-slate-400">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">
              100+
            </h3>

            <p className="mt-2 text-slate-400">
              Enterprise Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-500">
              24×7
            </h3>

            <p className="mt-2 text-slate-400">
              Technical Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}