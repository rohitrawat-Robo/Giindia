import React from "react";
import { Link } from "react-router-dom";

const AwardCard = ({
  title,
  description,
  image,
  date,
  year,
  slug,
}) => {
  return (
    <Link
      to={`/award/${slug}`}
      className="group block h-full no-underline"
    >
      <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

        {/* Award Image */}
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden bg-white flex items-center justify-center">

          {image ? (
            <img
              src={image}
              alt={title}
              title={title}
              className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">
                Award Image
              </span>
            </div>
          )}

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

          {/* Year */}
          {year && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 bg-white/95 rounded-full text-xs font-semibold text-gray-800 shadow-md">
                {year}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 md:p-6">

          {/* Date */}
          {date && (
            <p className="text-xs font-bold uppercase tracking-wider text-[#76B900] mb-2">
              {date}
            </p>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#76B900] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
              {description}
            </p>
          )}

          {/* View Award */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-[#76B900] transition-colors duration-300">
            <span>
              View Award
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default AwardCard;