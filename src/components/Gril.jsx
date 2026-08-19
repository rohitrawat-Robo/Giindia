import React from "react";
import {
  ChevronRight,
  Users,
  Briefcase,
  Award,
  Cpu,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  TrendingUp,
  Layers,
  Star,
  CheckCircle,
  Play,
  Search,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";

// ============================================================
// IMPORT images FROM images.js
// ============================================================
import images from "../../public/images.js";
import SEO from "./SEO.jsx";

// ============================================================
// SECTION 1 — KNOWING GRIL (Hero)
// ============================================================
const KnowingGRIL = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 border border-gray-300 text-xs font-semibold tracking-wider uppercase text-gray-700">
              Knowing GRIL
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Be Future-Ready with{" "}
              <span className="text-emerald-700">
                ENHANCED INDUSTRY READINESS!
              </span>
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              The coming era is all about Robotics, AI, Cyber Security and
              Aerospace.{" "}
              <strong>GRIL (Global Research and Innovation Lab) </strong>
              is a futuristic, two-year rigorous, hands-on learning that
              upskills you for your present and future too!
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              GRIL supports all the four pillars of AI ecosystem: Training,
              Placement, Research and Start-ups.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              So… GET STARTED WITH US!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 bg-emerald-700 text-white font-semibold rounded hover:bg-emerald-800 transition-colors">
                Registration GRIL 2026 - 27
              </button>
              <button className="px-8 py-3.5 border border-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" />
                Orientation
              </button>
            </div>
          </div>

          {/* Right: Image - FIXED */}
          <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[300px]">
            <img
              src={images.gril1}
              alt="GRIL Hero"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 2 — WHY GRIL!
// ============================================================
const WhyGRIL = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Why GRIL!
        </h2>

        <div className="space-y-4 mb-12">
          <p className="text-lg font-bold text-gray-900">
            Discover AI & ML and why NOW is the time to focus of AI and ML!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today there is no field which remains untouched by AI. Even in case
            of basic everyday tasks, AI has revolutionized the usage to bring
            about accuracy, speed, consistency and reliability to even greater
            heights, thereby decreasing the need for supervision, reducing
            manhours and allowing the human resources to be employed effectively
            on other required tasks, while the mundane is automated and the
            complex is simplified! And this is just the beginning!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Imagine how simple the most complex of tasks can become with AI! As
            the understanding of AI increases, the opportunity for AI to totally
            transform every industry is immense, increasing the demand for even
            faster and easy inference deployment than ever before!
          </p>
        </div>

        {/* Block 1 & 2: Research + Social Research */}
        <div>
          {/* Headings Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Research Heading */}
            <div>
              <p className="text-lg font-bold text-gray-900">
                Be it the field of research where complex calculations can be
                effectively and accurately be undertaken by AI, saving precious
                man-hours in calculating and crosschecking:
              </p>
            </div>

            {/* Social Research Heading */}
            <div>
              <p className="text-lg font-bold text-gray-900">
                Or the field of sociological research, where at the click of
                one's fingers or just the sway of hands, a researcher can open
                and analyze all the data around the world:
              </p>
            </div>
          </div>

          {/* Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Research Image */}
            <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={images.gril2}
                alt="AI in Research"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>

            {/* Social Research Image */}
            <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={images.gril3}
                alt="AI in Social Research"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 3 — THE PLATFORM
// ============================================================
const GRILPlatform = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          The Platform
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-4">
              "NVIDIA provides the core technology reshaping industry and
              society." – DIGINOMICA
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              GRIL leverages the advanced capabilities of{" "}
              <strong>NVIDIA</strong> servers to equip you with the skills and
              knowledge needed to excel in the industry. NVIDIA, the inventor of
              the first GPU (Geforce-256) is the pioneer in Artificial
              Intelligence, Machine Learning & Computational Science. Globally,
              NVIDIA Platforms are the backbone of Supercomputing used for large
              & complex applications in Aerospace, Cybersecurity, Engineering,
              Healthcare, Manufacturing, Robotics & Research etc.
            </p>

            <p className="text-gray-700 leading-relaxed">
              For accelerated computing, NVIDIA achieves incredible speedups
              through full-stack invention, from the chips and systems to the
              algorithms and apps they run. Using NVIDIA DGXTM platforms, NVIDIA
              runs large, demanding machine learning and deep learning workloads
              on GPUs, providing computing power between 1-5 PetaFLOPS in one
              DGX system, combining the best of NVIDIA software, infrastructure
              and expertise in a modern, unified AI development solution that
              spans from cloud to on-site data centres.
            </p>
          </div>

          {/* Right: Image */}
          <div className=" rounded overflow-hidden flex items-center justify-center min-h-[300px]">
            <img
              src={images.banner19}
              alt="NVIDIA Platform"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 4 — THE SELECTION PROCESS
// ============================================================
const SelectionProcess = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Section Title */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
              The Selection Process
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-8 lg:col-span-9">
            <div>
              {/* Main Content */}
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">
                  “NVIDIA now enjoys a robust and self-sustaining ecosystem of
                  software, universities, startups and partners.” - FORBES
                </strong>
                <br />
                <br />
                Selected 3rd year B. Tech. students will be trained as per an
                exclusive international curriculum developed in collaboration
                with leading universities, like NYU, Oxford, UMBC, University of
                Illinois, etc., costing 2.5-3 lakhs per student but currently
                highly subsidized and sponsored by their institutions.
                <br />
                <br />
                The selection for GRIL training shall be purely on merit basis.
                The first round is an online exam, evaluted as per the following
                Evaluation Matrix:
              </p>

              {/* Evaluation Matrix */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-900">
                      <th className="text-left py-4 pr-6 font-bold text-gray-900">
                        Element
                      </th>

                      <th className="text-left py-4 px-6 font-bold text-gray-900">
                        Weightage
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-5 pr-6 text-gray-700">
                        Technical Reasoning Test
                      </td>

                      <td className="py-5 px-6 font-bold text-emerald-700">
                        40%
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-5 pr-6 text-gray-700">
                        Aptitude Test Score
                      </td>

                      <td className="py-5 px-6 font-bold text-emerald-700">
                        40%
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-5 pr-6 text-gray-700">CGPA</td>

                      <td className="py-5 px-6 font-bold text-emerald-700">
                        20%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Remaining Content */}
              <p className="text-gray-700 leading-relaxed mt-8">
                A merit list of all candidates shall be prepared, who will then
                undergo a round the GD. Thereafter 76 candidates shall be
                selected. The same merit list will be used for any additional
                program launched in the future.
                <br />
                <br />
                There shall be Scholarship/ Stipend for meticulous performers.
                However, the Stipend/Scholarship shall not automatically
                continue for the entire duration of the training. It shall be
                reviewed on quarterly basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 5 — WILDCARD ENTRY!!
// ============================================================
const WildcardEntry = () => {
  return (
  <section className="py-16 md:py-20 lg:py-24 bg-gray-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          WILDCARD ENTRY!!
        </h2>

        <p className="text-gray-700 leading-relaxed text-center">
          Wildcard Entries though limited but are an excellent opportunity.
          In case you have deployed your AI/ML project other than notebooks
          like Jupyter, Google Colab, Kaggle, etc., you may be entitled for
          WILDCARD ENTRY for undertaking Training and/or Projects to be
          deployed on GPUs. STIPEND may be offered for outstanding
          performers. However, the selection shall be based on a personal
          interview, for which you'll need to submit your resume along with
          the details of the AI project undertaken by you.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

// ============================================================
// SECTION 6 — GRIL 2022-23
// ============================================================
const GRILHistory = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Image - Sticky on large screens */}
          <div className="lg:w-5/12 w-full">
            <div className="lg:sticky lg:top-24 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images.gril20}
                alt="GRIL 2022-24"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: All Content */}
          <div className="lg:w-7/12 w-full space-y-8">
            {/* Header Section */}
            <div>
             

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                GRIL 2022-24
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-800 mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-base">
              GRIL 2022-23 was conducted in ABESIT, Ghaziabad and GL Bajaj,
              Greater Noida. A total of 144 students were enrolled, of which 107
              students successfully completed the training, of which 6 students
              proved their calibre and qualified for the internship programme as
              well. The students worked successfully on distinctive projects,
              like –
            </p>

            {/* Photo Gallery Links - All in Right Side */}
            <div className="space-y-4 mt-6">
              {/* GRIL Orientation @ ABESIT */}
              <div className="group">
                <a
                  href="images/abesit-gallery.jpg"
                  data-lightbox="photos1"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    01
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL Orientation 2023-24 on Nvidia Platform @ ABESIT,
                    Ghaziabad
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                {/* Hidden images for lightbox */}
                <div className="hidden">
                  <a href="images/abesit1-gallery.jpg" data-lightbox="photos1">
                    <img src="images/abesit1-gallery.jpg" alt="ABESIT 1" />
                  </a>

                  <a href="images/abesit2-gallery.jpg" data-lightbox="photos1">
                    <img src="images/abesit2-gallery.jpg" alt="ABESIT 2" />
                  </a>

                  <a href="images/abesit3-gallery.jpg" data-lightbox="photos1">
                    <img src="images/abesit3-gallery.jpg" alt="ABESIT 3" />
                  </a>

                  <a href="images/abesit4-gallery.jpg" data-lightbox="photos1">
                    <img src="images/abesit4-gallery.jpg" alt="ABESIT 4" />
                  </a>
                </div>
              </div>

              {/* GRIL Orientation @ GLBAJAJ */}
              <div className="group">
                <a
                  href="images/glbajaj-gallery.jpg"
                  data-lightbox="photos"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    02
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL Orientation 2023-24 on Nvidia Platform @ GLBAJAJ, Gr.
                    Noida
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <div className="hidden">
                  <a href="images/glbajaj-gallery10.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery10.jpg" alt="GLBAJAJ 1" />
                  </a>

                  <a href="images/glbajaj-gallery11.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery11.jpg" alt="GLBAJAJ 2" />
                  </a>

                  <a href="images/glbajaj-gallery12.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery12.jpg" alt="GLBAJAJ 3" />
                  </a>

                  <a href="images/glbajaj-gallery7.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery7.jpg" alt="GLBAJAJ 4" />
                  </a>

                  <a href="images/glbajaj-gallery13.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery13.jpg" alt="GLBAJAJ 5" />
                  </a>

                  <a href="images/glbajaj-gallery1.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery1.jpg" alt="GLBAJAJ 6" />
                  </a>

                  <a href="images/glbajaj-gallery8.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery8.jpg" alt="GLBAJAJ 7" />
                  </a>

                  <a href="images/glbajaj-gallery9.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery9.jpg" alt="GLBAJAJ 8" />
                  </a>

                  <a href="images/glbajaj-gallery2.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery2.jpg" alt="GLBAJAJ 9" />
                  </a>

                  <a href="images/glbajaj-gallery3.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery3.jpg" alt="GLBAJAJ 10" />
                  </a>

                  <a href="images/glbajaj-gallery4.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery4.jpg" alt="GLBAJAJ 11" />
                  </a>

                  <a href="images/glbajaj-gallery5.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery5.jpg" alt="GLBAJAJ 12" />
                  </a>

                  <a href="images/glbajaj-gallery6.jpg" data-lightbox="photos">
                    <img src="images/glbajaj-gallery6.jpg" alt="GLBAJAJ 13" />
                  </a>
                </div>
              </div>

              {/* GRIL AI Lab @ RV College */}
              <div className="group">
                <a
                  href="images/rv-college-pic1.jpg"
                  data-lightbox="photos"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    03
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL AI Lab 2024 on Nvidia Platform @ RV College, Bengaluru,
                    Karnataka
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <div className="hidden">
                  <a href="images/rv-college-pic2.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic2.jpg" alt="RV 1" />
                  </a>

                  <a href="images/rv-college-pic3.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic3.jpg" alt="RV 2" />
                  </a>

                  <a href="images/rv-college-pic4.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic4.jpg" alt="RV 3" />
                  </a>

                  <a href="images/rv-college-pic5.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic5.jpg" alt="RV 4" />
                  </a>

                  <a href="images/rv-college-pic6.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic6.jpg" alt="RV 5" />
                  </a>

                  <a href="images/rv-college-pic7.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic7.jpg" alt="RV 6" />
                  </a>

                  <a href="images/rv-college-pic8.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic8.jpg" alt="RV 7" />
                  </a>

                  <a href="images/rv-college-pic9.jpg" data-lightbox="photos">
                    <img src="images/rv-college-pic9.jpg" alt="RV 8" />
                  </a>
                </div>
              </div>

              {/* GRIL AI Lab @ KIET */}
              <div className="group">
                <a
                  href="images/gallery/kiet1.webp"
                  data-lightbox="photos"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    04
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL AI Lab 2024 on Nvidia Platform @ KIET Group of
                    Institutions, Muradnagar
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <div className="hidden">
                  {[
                    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                  ].map((num) => (
                    <a
                      key={num}
                      href={`images/gallery/kiet${num}.webp`}
                      data-lightbox="photos"
                    >
                      <img
                        src={`images/gallery/kiet${num}.webp`}
                        alt={`KIET ${num}`}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* GTC - 2024 */}
              <div className="group">
                <a
                  href="images/gallery/gt1.webp"
                  data-lightbox="photos"
                  className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    05
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GTC - 2024
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <div className="hidden">
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                    <a
                      key={num}
                      href={`images/gallery/gt${num}.webp`}
                      data-lightbox="photos"
                    >
                      <img
                        src={`images/gallery/gt${num}.webp`}
                        alt={`GTC ${num}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SECTION 7 — GRIL PROJECTS (UPDATED WITH 2x2 GRID)
// ============================================================
const GRILProjects = () => {
  const projects = [
    {
      name: "PPE Violation Detection",
      image: images.gril11,
    },
    {
      name: "Multi Person Face Recognition",
      image: images.gril22,
    },
    {
      name: "Individual People Count",
      image: images.gril23,
    },
    {
      name: "Object Segmentation",
      image: images.gril24,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          GRIL Projects
        </h2>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {project.name}
              </h3>
              <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[250px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// MAIN PAGE
// ============================================================
const GRILPage = () => {
  return (
    <>
      <SEO
        title="GRIL"
        description="GRIL (Global Research & Innovation Lab) — Global Infoventures' NVIDIA-powered initiative supporting AI research and innovation at academic institutions."
        keywords={["GRIL", "Global Research Innovation Lab", "NVIDIA university program", "AI research lab India"]}
        path="/gril"
      />
      <KnowingGRIL />
      <WhyGRIL />
      <GRILPlatform />
      <SelectionProcess />
      <WildcardEntry />
      <GRILHistory />
      <GRILProjects />
    </>
  );
};

export default GRILPage;
