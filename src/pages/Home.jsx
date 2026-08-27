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

        <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-10">
          {/* Left column */}
          <div>
            <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-300 ">
              WELCOME TO GLOBAL INFOVENTURES
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Powering  <span className="text-blue-500">ERP & AI</span>
              <br />
              Innovation
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              Global Infoventures Pvt. Ltd., founded in 2000, delivers reliable and innovative ERP & AI solutions backed by ISO-certified processes, advanced technology, and a strong commitment to quality and customer satisfaction.
            </p>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
              <img
                src={images.gi}
                alt="NVIDIA DGX B200"
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
              />
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
                Our Complete College ERP Solution is an all-in-one platform that digitally manages attendance, admissions, students, faculty, fees, finance, examinations, timetable, library, hostel, transport, HR, payroll and more. With automation, real-time analytics, reports, secure access and dedicated portals, it reduces manual work and provides a smart, centralized and cloud-based solution for complete college management.
              </p>

              <ul className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
 "Complete Institution Management",
                  "Smart Automation & Real-Time Attendance",
                  "Powerful Portals, Analytics & Reports",
                  "Secure, Scalable & Cloud-Based",
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
              {/* Button stays at bottom */}
              <div >
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
                    NVIDIA (Elite Partner)
                  </h2>

                  <p className="text-sm text-slate-400">
                    The Ultimate AI Infrastructure
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                We are proud to be an NVIDIA Elite Partner, delivering advanced AI, accelerated computing, and high-performance infrastructure solutions. Our partnership enables us to provide cutting-edge NVIDIA technologies, GPU platforms, enterprise AI solutions, and expert technical support. We help universities, enterprises, and research institutions build and scale AI environments, accelerating innovation, digital transformation, and future-ready technology adoption.</p>

              <ul className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "DGX Installation",
                  "Faclty Development Programme",
                  "DGX User Training",
                  "DGX Admin Training",
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
             

              {/* Button stays at bottom */}
              <div>
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


    </div>
  );
};

export default Home;
