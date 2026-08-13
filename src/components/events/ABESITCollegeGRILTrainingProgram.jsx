// src/components/events/ABESITCollegeGRILTrainingProgram.jsx

import React, { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import eventsData from '../../utils/event';

const ABESITCollegeGRILTrainingProgram = () => {
  const navigate = useNavigate();

  const event = eventsData.find(
    (item) =>
      item.slug ===
      'abesit-college-gril-training-program-orientation-2nd-september-2025'
  );

  const [selectedImage, setSelectedImage] = useState(null);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-4">
            Event not found
          </h1>

          <button
            onClick={() => navigate('/events')}
            className="px-5 py-3 rounded-xl bg-[#DCFCE7] text-[#0F172A]"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const currentImageIndex =
    selectedImage !== null
      ? event.gallery.indexOf(selectedImage)
      : -1;

  const showPrevious = () => {
    if (currentImageIndex <= 0) {
      setSelectedImage(event.gallery[event.gallery.length - 1]);
    } else {
      setSelectedImage(event.gallery[currentImageIndex - 1]);
    }
  };

  const showNext = () => {
    if (currentImageIndex === event.gallery.length - 1) {
      setSelectedImage(event.gallery[0]);
    } else {
      setSelectedImage(event.gallery[currentImageIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate('/events')}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#DCFCE7] hover:bg-[#16A34A]/20 rounded-xl transition-colors duration-300 text-[#0F172A] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Events
        </button>

        {/* Event Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">
          ABESIT College (2nd September 2025)
        </h1>

        {/* Event Information */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

          <div className="p-4 rounded-xl border border-[#E5E7EB]">
            <p className="text-xs font-medium text-[#4B5563]">
              Category
            </p>
            <p className="text-[#0F172A] font-medium mt-1">
              {event.category}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#E5E7EB]">
            <p className="text-xs font-medium text-[#4B5563]">
              Date
            </p>
            <p className="text-[#0F172A] font-medium mt-1">
              2nd September 2025
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#E5E7EB]">
            <p className="text-xs font-medium text-[#4B5563]">
              Location
            </p>
            <p className="text-[#0F172A] font-medium mt-1">
              ABESIT College
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#E5E7EB]">
            <p className="text-xs font-medium text-[#4B5563]">
              Photos
            </p>
            <p className="text-[#0F172A] font-medium mt-1">
              {event.photos}
            </p>
          </div>

        </div>

        {/* ===================================================== */}
        {/* ABESIT CUSTOM EVENT CONTENT */}
        {/* ===================================================== */}

        <section className="mb-12">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">

            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-5">
              GRIL Training Program Orientation 2025!
            </h2>

            <p className="text-[#374151] leading-8 text-base md:text-lg mb-6">
              On 2nd September 2025, ABESIT College hosted the GRIL Training
              Program Orientation for third-year students, officially
              launching the 4th consecutive edition of the program.
            </p>

            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
              The session highlighted:
            </h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-[#374151]">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#16A34A] flex-shrink-0" />
                <span>The rapid growth of the AI industry</span>
              </li>

              <li className="flex items-start gap-3 text-[#374151]">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#16A34A] flex-shrink-0" />
                <span>Industry-standard AI/ML workflows</span>
              </li>

              <li className="flex items-start gap-3 text-[#374151]">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#16A34A] flex-shrink-0" />
                <span>
                  The importance of industry-ready skills for future careers
                </span>
              </li>
            </ul>

            <p className="text-[#374151] leading-8 text-base md:text-lg mb-6">
              Students were introduced to the GRIL Training Program, designed
              to bridge the industry–academia gap through hands-on learning.
              With the state-of-the-art NVIDIA DGX A100 infrastructure
              installed at the college, students will gain exposure to
              advanced AI workflows and real-world project training.
            </p>

            <p className="text-[#0F172A] font-semibold leading-8 text-base md:text-lg">
              A step forward in empowering students to become future-ready AI
              professionals!
            </p>

          </div>
        </section>

        {/* ===================================================== */}
        {/* EVENT PHOTOS */}
        {/* ===================================================== */}

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
            Event Photos
          </h2>

          {event.gallery.length === 0 ? (
            <div className="py-20 text-center border border-[#E5E7EB] rounded-2xl">
              <p className="text-[#374151]">
                No photos have been uploaded for this event yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedImage(src)}
                  className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] h-72 group"
                >
                  <img
                    src={src}
                    alt={`ABESIT College event photo ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          )}
        </section>

      </div>

      {/* ===================================================== */}
      {/* IMAGE LIGHTBOX */}
      {/* ===================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0F172A]/95 flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 md:left-8 text-white"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={selectedImage}
            alt="ABESIT College event"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 md:right-8 text-white"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ABESITCollegeGRILTrainingProgram;