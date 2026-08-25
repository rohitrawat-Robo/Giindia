import React from "react";
import images from "../../public/images.js";
import {
  BarChart3,
  Server,
  Users,
  ShieldCheck,
  Headset,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-[#050b18]">
        {/* Ambient light streaks */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute top-1/3 right-0 h-[2px] w-[70%] rotate-[-6deg] bg-gradient-to-l from-blue-400/70 via-blue-400/10 to-transparent" />
          <div className="absolute top-[45%] right-0 h-px w-[55%] rotate-[-6deg] bg-gradient-to-l from-sky-300/50 via-sky-300/5 to-transparent" />
          <div className="absolute top-[55%] right-0 h-px w-[40%] rotate-[-6deg] bg-gradient-to-l from-blue-300/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-300">
              WELCOME TO GLOBAL INFOVENTURES
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Accelerating
              <br />
              <span className="text-blue-500">AI Innovation</span>
              <br />
              with NVIDIA
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              Global Infoventures is a technology and innovation company helping
              organizations unlock the power of Artificial Intelligence,
              enterprise software, and high-performance computing. As an NVIDIA
              Elite Partner, we enable businesses and institutions to accelerate
              AI adoption with advanced NVIDIA solutions and future-ready
              technology.
            </p>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
              <img
                src={images.dgxB200}
                alt="NVIDIA DGX B200"
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating info badge */}
            <div className="absolute bottom-2 right-2 z-20 flex items-center gap-3 rounded-xl border border-slate-700/60 bg-[#0b1424]/90 px-4 py-3 shadow-xl backdrop-blur sm:bottom-6 sm:right-6">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0 text-green-500"
                fill="currentColor"
              >
                <path
                  d="M12 2l9 4.9v10.2L12 22l-9-4.9V6.9L12 2z"
                  opacity="0.15"
                />
                <path d="M12 4.2L5 8v8l7 3.8 7-3.8V8l-7-3.8zM8 9.5c1.5-.6 2.9-.6 4 0 1.4.7 1.6 2 1.6 3.3 0 1.6-.6 3-2.2 3.6-1.2.4-2.4.2-3.4-.4v-1.6c.8.6 1.7.9 2.6.6.8-.3 1.1-.9 1.1-1.7 0-.7-.2-1.3-1.1-1.7-1-.4-2.1-.2-3 .4L8 9.5z" />
              </svg>
              <div className="leading-tight">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                  NVIDIA
                </p>
                <p className="text-sm font-bold text-white">DGX B200</p>
                <p className="text-[11px] text-slate-400">
                  Built for the Era of AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SOLUTION CARDS ===================== */}
      <section className="bg-[#050b18] pb-24">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* G6 Solutions Card */}
          <div className="relative flex h-full overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-b from-[#0b1a3a] to-[#050b18] p-8">
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="relative flex h-full w-full flex-col">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  <BarChart3 className="h-5 w-5 text-white" />
                </span>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    G6 Solutions
                  </h2>

                  <p className="text-sm text-slate-400">
                    Smart Solutions for Smarter Business
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                Our G6 solutions help you manage and integrate all core business
                processes—finance, HR, inventory, sales, and more—in one unified
                platform.
              </p>

              <ul className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "Streamline Operations",
                  "Improve Productivity",
                  "Real-time Insights",
                  "Scalable & Secure",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Same height image container */}
              <div className="mb-8 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-slate-700/60 bg-[#0a1730]">
                <img
                  src={images.dashboard}
                  alt="ERP dashboard preview"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Button stays at bottom */}
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => navigate("/G6Solution")}
                  className="inline-flex items-center gap-2 rounded-lg border border-green-500/50 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500/10"
                >
                  Explore G6 Solutions
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* NVIDIA DGX B200 Card */}
          <div className="relative flex h-full overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-b from-[#071a10] to-[#050b18] p-8">
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-green-500/20 blur-[110px]" />

            <div className="relative flex h-full w-full flex-col">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-600">
                  <Server className="h-5 w-5 text-white" />
                </span>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    NVIDIA Elite Partner
                  </h2>

                  <p className="text-sm text-slate-400">
                    The Ultimate AI Infrastructure
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                We supply NVIDIA DGX B200 systems, designed for breakthrough AI
                performance, enabling organizations to train, fine-tune, and
                deploy large-scale AI models faster than ever.
              </p>

              <ul className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "Next-Gen AI Performance",
                  "8x NVIDIA Blackwell GPUs",
                  "High-Speed Memory & Networking",
                  "Enterprise-Grade Reliability",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Same height image container */}
              <div className="mb-8 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-slate-700/60 bg-[#06120b] p-4">
                <img
                  src={images.b200}
                  alt="NVIDIA DGX B200 system"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Button stays at bottom */}
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => navigate("/nvidia-elite-partner")}
                  className="inline-flex items-center gap-2 rounded-lg border border-green-500/50 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500/10"
                >
                  Explore Nvidia Partner
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST / FEATURE STRIP ===================== */}
      <section className="bg-[#050b18] pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
                title: "Trusted by Businesses",
                subtitle: "Across Industries",
              },
              {
                icon: ShieldCheck,
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
                title: "Innovative Solutions",
                subtitle: "Built for the Future",
              },
              {
                icon: Headset,
                iconBg: "bg-green-50",
                iconColor: "text-green-600",
                title: "Expert Support",
                subtitle: "Every Step of the Way",
              },
              {
                icon: Globe,
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
                title: "Global Reach",
                subtitle: "Local Commitment",
              },
            ].map(({ icon: Icon, iconBg, iconColor, title, subtitle }) => (
              <div key={title} className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0b1a3a]">
                    {title}
                  </p>
                  <p className="text-sm font-semibold text-[#0b1a3a]">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
