// src/components/events/EventPageLayout.jsx
//
// NOT a dynamic route component. There is no useParams()/slug-from-URL
// lookup here, and it is not wired into the router directly. Each of the
// 25 individual event components (SRMUniversityAP.jsx, etc.) is its own
// real file with its own explicit route, and simply renders this layout
// with a hardcoded `slug` prop. This exists only so the ~150 lines of
// gallery/lightbox JSX aren't duplicated 25 times — edit this file to
// change the shared look, or edit one specific event's file directly if
// you want that one event to look different from the rest.

import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  ImageOff,
} from "lucide-react";
import eventsData from "../../utils/event";
import SEO from "../SEO.jsx";

const InfoCard = ({ icon, label, value }) => (
  <div className="p-4 rounded-xl border border-[#E5E7EB] bg-white flex items-start gap-3">
    {icon}
    <div>
      <div className="text-xs font-medium text-[#4B5563]">{label}</div>
      <div className="text-[#0F172A] font-medium">{value}</div>
    </div>
  </div>
);

const EventPageLayout = ({ slug, content, seo }) => {
  const navigate = useNavigate();
  const event = eventsData.find((item) => item.slug === slug);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    if (!event) return;
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + event.gallery.length) % event.gallery.length,
    );
  }, [event]);

  const showNext = useCallback(() => {
    if (!event) return;
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % event.gallery.length,
    );
  }, [event]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <SEO title="Event not found" noindex />
        <h1 className="text-2xl font-bold text-[#0F172A] mb-4">
          Event not found
        </h1>
        <p className="text-[#4B5563] mb-4 text-sm">
          No event in eventsData matched slug: <code>{slug}</code>
        </p>
        <Link
          to="/events"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#DCFCE7] hover:bg-[#16A34A]/20 rounded-xl transition-colors duration-300 text-[#0F172A] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Events
        </Link>
      </div>
    );
  }

  // Front-load the important keywords: Google typically shows only the
  // first ~155 characters of a description in search results, so lead
  // with category + brand + location there. The full sentence continues
  // after for relevance signals even if it gets truncated on-screen.
  const seoDescription =
    `${event.category} by NVIDIA Elite Partner Global Infoventures at ${event.location}` +
    `${event.year ? ` (${event.year})` : ""}. ${event.description}. ` +
    `${event.photos} photo${event.photos === 1 ? "" : "s"} from the event.`;

  const seoKeywords = seo?.keywords || [
    event.category,
    event.location,
    event.year,
    "Global Infoventures",
    "GIIndia",
    "NVIDIA Elite Partner",
    "NVIDIA",
  ];
  return (
    <div className="min-h-screen bg-white py-12">
      <SEO
        title={seo?.title || event.title}
        description={seo?.description || seoDescription}
        keywords={seoKeywords}
        path={`/events/${event.slug}`}
        image={event.image || undefined}
        type="event"
        jsonLd={{
          "@type": "Event",
          name: event.title,
          description: event.description,
          startDate: event.date,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventCompleted",
          location: {
            "@type": "Place",
            name: event.location,
            address: event.location,
          },
          image: event.gallery,
          organizer: {
            "@type": "Organization",
            name: "Global Infoventures",
            url: "https://www.globalinfoventures.com",
          },
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate("/events")}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#DCFCE7] hover:bg-[#16A34A]/20 rounded-xl transition-colors duration-300 text-[#0F172A] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Events
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
          {event.title}
        </h1>
        {content && (
          <div className="mb-10 rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8 shadow-sm">
            <div className="prose prose-lg max-w-none text-[#374151]">
              {content}
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <InfoCard
            icon={<Tag className="w-5 h-5 text-[#16A34A]" />}
            label="Category"
            value={event.category}
          />
          <InfoCard
            icon={<Calendar className="w-5 h-5 text-[#16A34A]" />}
            label="Date"
            value={event.date || event.year || "—"}
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-[#16A34A]" />}
            label="Location"
            value={event.location}
          />
          <InfoCard
            icon={<Images className="w-5 h-5 text-[#16A34A]" />}
            label="Photos"
            value={String(event.photos)}
          />
        </div>

        {event.gallery.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#DCFCE7]/30 rounded-2xl border border-[#E5E7EB]">
            <ImageOff className="w-10 h-10 text-[#16A34A] mb-3" />
            <p className="text-[#374151]">
              No photos have been uploaded for this event yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.gallery.map((src, i) => (
              <motion.button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
                className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] h-72 group"
              >
                <img
                  src={src}
                  alt={`${event.title} photo ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23DCFCE7"/></svg>',
                      );
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F172A]/95 flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              src={event.gallery[lightboxIndex]}
              alt={`${event.title} photo ${lightboxIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
              {lightboxIndex + 1} / {event.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventPageLayout;
