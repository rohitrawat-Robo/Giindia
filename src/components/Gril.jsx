import { useState, React, useEffect } from "react";
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
  X,
  ChevronLeft,
} from "lucide-react";

// ============================================================
// IMPORT images FROM images.js
// ============================================================
import images from "../../public/images.js";
import SEO from "./SEO.jsx";

// ============================================================
// GALLERY LIGHTBOX COMPONENT
// ============================================================
const GalleryLightbox = ({
  isOpen,
  onClose,
  images: galleryImages,
  initialIndex = 0,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index when gallery opens with new initialIndex
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  if (!isOpen || !galleryImages || galleryImages.length === 0) return null;

  const currentImage = galleryImages[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={(e) => {
        // Close only if clicking the backdrop (not the image or controls)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Close gallery"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Title (if provided) */}
      {title && (
        <div className="absolute top-4 left-4 z-10 text-white text-sm font-medium opacity-80 max-w-[70%]">
          {title}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
        {currentIndex + 1} / {galleryImages.length}
      </div>

      {/* Main image */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <img
          src={currentImage}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg"
        />

        {/* Navigation buttons - only show if more than 1 image */}
        {galleryImages.length > 1 && (
          <>
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 bg-black/30"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10 bg-black/30"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================
// SECTION 1 — KNOWING GRIL (Hero)
// ============================================================
const KnowingGRIL = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
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
      <div className="container mx-auto px-4">
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
      <div className="container mx-auto px-4">
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
      <div className="container mx-auto px-4">
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
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
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
// SECTION 6 — GRIL 2022-23 (UPDATED WITH LIGHTBOX)
// ============================================================
const GRILHistory = () => {
  // ----- GALLERY 1: ABESIT (5 images) -----
  const abesitGalleryImages = [images.abesit];

  // ----- GALLERY 2: GLBAJAJ (13 images) -----
  const glbajajGalleryImages = [images.glbajaj];

  // ----- GALLERY 3: RV College (9 images) -----
  const rvGalleryImages = [images.rv];

  // ----- GALLERY 4: KIET (29 images) -----
  const kietGalleryImages = [images.kiet1];

  // ----- GALLERY 5: GTC (13 images) -----
  const gtcGalleryImages = [images.gt1];

  // ----- Lightbox state -----
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: "",
  });

  const openGallery = (images, initialIndex = 0, title = "") => {
    setLightboxState({
      isOpen: true,
      images,
      initialIndex,
      title,
    });
  };

  const closeGallery = () => {
    setLightboxState({
      isOpen: false,
      images: [],
      initialIndex: 0,
      title: "",
    });
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
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
                <button
                  onClick={() =>
                    openGallery(
                      abesitGalleryImages,
                      0,
                      "GRIL Orientation 2023-24 @ ABESIT, Ghaziabad",
                    )
                  }
                  className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 text-left"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    01
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL Orientation 2023-24 on Nvidia Platform @ ABESIT,
                    Ghaziabad
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors flex-shrink-0"
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
                </button>
              </div>

              {/* GRIL Orientation @ GLBAJAJ */}
              <div className="group">
                <button
                  onClick={() =>
                    openGallery(
                      glbajajGalleryImages,
                      0,
                      "GRIL Orientation 2023-24 @ GLBAJAJ, Gr. Noida",
                    )
                  }
                  className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 text-left"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    02
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL Orientation 2023-24 on Nvidia Platform @ GLBAJAJ, Gr.
                    Noida
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors flex-shrink-0"
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
                </button>
              </div>

              {/* GRIL AI Lab @ RV College */}
              <div className="group">
                <button
                  onClick={() =>
                    openGallery(
                      rvGalleryImages,
                      0,
                      "GRIL AI Lab 2024 @ RV College, Bengaluru",
                    )
                  }
                  className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 text-left"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    03
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL AI Lab 2024 on Nvidia Platform @ RV College, Bengaluru,
                    Karnataka
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors flex-shrink-0"
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
                </button>
              </div>

              {/* GRIL AI Lab @ KIET */}
              <div className="group">
                <button
                  onClick={() =>
                    openGallery(
                      kietGalleryImages,
                      0,
                      "GRIL AI Lab 2024 @ KIET Group of Institutions",
                    )
                  }
                  className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 text-left"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    04
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GRIL AI Lab 2024 on Nvidia Platform @ KIET Group of
                    Institutions, Muradnagar
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors flex-shrink-0"
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
                </button>
              </div>

              {/* GTC - 2024 */}
              <div className="group">
                <button
                  onClick={() => openGallery(gtcGalleryImages, 0, "GTC - 2024")}
                  className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 rounded-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 text-left"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    05
                  </span>

                  <span className="flex-1 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900">
                    GTC - 2024
                  </span>

                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors flex-shrink-0"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <GalleryLightbox
        isOpen={lightboxState.isOpen}
        onClose={closeGallery}
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
        title={lightboxState.title}
      />
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
      <div className="container mx-auto px-4">
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
        keywords={[
          "GRIL",
          "Global Research Innovation Lab",
          "NVIDIA university program",
          "AI research lab India",
        ]}
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
