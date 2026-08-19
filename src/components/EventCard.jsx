// src/components/EventCard.jsx
//
// A single event card. The whole card is a react-router <Link> to the
// event's existing route -- no new pages, no window.location.

import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const { title, date, location, category, image, route } = event;

  return (
    <Link
      to={route}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200
                 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                 hover:border-[#76B900]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#76B900]/40"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-300">
            No image
          </div>
        )}

        {category && (
          <span
            className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[0.7rem]
                       font-semibold uppercase tracking-wide text-[#1940b0] shadow-sm"
          >
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
          {title}
        </h3>

        <div className="mt-3 space-y-1.5 text-sm text-slate-600">
          {date && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0 text-[#76B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{date}</span>
            </div>
          )}

          {location && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 flex-shrink-0 text-[#76B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{location}</span>
            </div>
          )}
        </div>

        <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-semibold text-[#76B900]">
          View Event
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}