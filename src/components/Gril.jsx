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

        {/* Application Sections — CONTENT LOCKED */}
        <div className="space-y-16">
          {/* Block 1: Research — TEXT + IMAGE - FIXED */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <p className="text-lg font-bold text-gray-900">
                Be it the field of research where complex calculations can be
                effectively and accurately be undertaken by AI, saving precious
                man-hours in calculating and crosschecking:
              </p>
            </div>
            <div className="lg:w-1/2 bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={images.gril2}
                alt="AI in Research"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Block 2: Social Research — IMAGE + TEXT - FIXED */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="lg:w-1/2">
              <p className="text-lg font-bold text-gray-900">
                Or the field of sociological research, where at the click of
                one's fingers or just the sway of hands, a researcher can open
                and analyze all the data around the world:
              </p>
            </div>
            <div className="lg:w-1/2 bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={images.gril3}
                alt="AI in Social Research"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Block 3: Gaming — TEXT + IMAGE (with 2 images) - FIXED */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-6">
              Or even the field of gaming, where AI can enhance the gaming
              experience to be a real time experience:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
                <img
                  src={images.gril4}
                  alt="AI in Gaming 1"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
                <img
                  src={images.gril5}
                  alt="AI in Gaming 2"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Block 4: Medicine — IMAGE + TEXT (with 3 images) - FIXED */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-6">
              Or in the field of medicine, where AI would detect conditions as
              well as predict outcomes with ease and accuracy, and much faster:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
                <img
                  src={images.gril6}
                  alt="AI in Medicine 1"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
                <img
                  src={images.gril7}
                  alt="AI in Medicine 2"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
                <img
                  src={images.gril8}
                  alt="AI in Medicine 3"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Block 5: Biotech — TEXT + IMAGE - FIXED */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <p className="text-lg font-bold text-gray-900">
                As also, medical and biotechnological research:
              </p>
            </div>
            <div className="lg:w-1/2 bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={images.gril9}
                alt="Biotech Research 1"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Block 5b: Biotech — TEXT + IMAGE (second image) - FIXED */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="lg:w-1/2">
              <p className="text-lg font-bold text-gray-900">
                As also, medical and biotechnological research:
              </p>
            </div>
            <div className="lg:w-1/2 bg-gray-100 rounded overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={images.gril10}
                alt="Biotech Research 2"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Block 6–7: GRIL Image Gallery - UPDATED 2x2 Grid with Titles INSIDE Images */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 1 - gril11 */}
              <div className="relative">
                <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={images.gril11}
                    alt="PPE Violation Detection"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Title overlay at the top */}
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent rounded-t">
                  <p className="text-white text-lg font-bold text-center">
                    PPE Violation Detection
                  </p>
                </div>
              </div>

              {/* Row 1 - gril12 */}
              <div className="relative">
                <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={images.gril12}
                    alt="Multi Person Face Recognition"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Title overlay at the top */}
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent rounded-t">
                  <p className="text-white text-lg font-bold text-center">
                    Multi Person Face Recognition
                  </p>
                </div>
              </div>

              {/* Row 2 - gril13 */}
              <div className="relative">
                <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={images.gril13}
                    alt="Individual People Count"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Title overlay at the top */}
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent rounded-t">
                  <p className="text-white text-lg font-bold text-center">
                    Individual People Count
                  </p>
                </div>
              </div>

              {/* Row 2 - gril14 */}
              <div className="relative">
                <div className="bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={images.gril14}
                    alt="Object Segmentation"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Title overlay at the top */}
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent rounded-t">
                  <p className="text-white text-lg font-bold text-center">
                    Object Segmentation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-xl md:text-2xl font-bold text-emerald-700">
              That's where GRIL comes into play – training you to be the
              facilitator to create the seamless transition of AI into the
              existing environment to make a better tomorrow!
            </p>
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          The Selection Process
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-4">
              "NVIDIA now enjoys a robust and self-sustaining ecosystem of
              software, universities, startups and partners." - FORBES
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selected 3rd year B. Tech. students will be trained as per an
              exclusive international curriculum developed in collaboration with
              leading universities, like NYU, Oxford, UMBC, University of
              Illinois, etc., costing 2.5-3 lakhs per student but currently
              highly subsidized and sponsored by their institutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The selection for GRIL training shall be purely on merit basis.
              The first round is an online exam, evaluted as per the following
              Evaluation Matrix:
            </p>
          </div>

          {/* Right Column — Evaluation Matrix */}
          <div>
            <div className="bg-gray-50 border border-gray-200 rounded p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Evaluation Matrix
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">
                      Technical Reasoning Test
                    </span>
                    <span className="text-2xl font-bold text-emerald-700">
                      40%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-full bg-emerald-700 rounded"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">
                      Aptitude Test Score
                    </span>
                    <span className="text-2xl font-bold text-emerald-700">
                      40%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-full bg-emerald-700 rounded"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">CGPA</span>
                    <span className="text-2xl font-bold text-emerald-700">
                      20%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-full bg-emerald-700 rounded"
                      style={{ width: "20%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                A merit list of all candidates shall be prepared, who will then
                undergo a round the GD. Thereafter 76 candidates shall be
                selected. The same merit list will be used for any additional
                program launched in the future.
              </p>
              <p className="text-gray-700 leading-relaxed">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WILDCARD ENTRY!!
            </h2>
            <p className="text-gray-700 leading-relaxed">
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
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full rounded overflow-hidden flex items-center justify-center">
            <img
              src={images.gril20}
              alt="GRIL 2022-24"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 w-full">
            <h5 className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-2">
              GRIL 2022-23
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GRIL 2022-24
            </h2>

            <p className="text-gray-700 leading-relaxed">
              GRIL 2022-23 was conducted in ABESIT, Ghaziabad and GL Bajaj,
              Greater Noida. A total of 144 students were enrolled, of which 107
              students successfully completed the training, of which 6 students
              proved their calibre and qualified for the internship programme as
              well. The students worked successfully on distinctive projects,
              like –
            </p>
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
