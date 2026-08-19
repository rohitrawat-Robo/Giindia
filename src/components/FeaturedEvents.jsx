// src/components/FeaturedEvents.jsx
//
// "Featured Events" section for the Home page. Drop <FeaturedEvents /> in
// wherever it should appear on Home.jsx.

import React from "react";
import Carousel from "./Carousel.jsx";
import EventCard from "./EventCard.jsx";
import featuredEvents from "../data/featuredEvents";

export default function FeaturedEvents() {
  if (!featuredEvents.length) return null;

  return (
    <section className="section bg-white py-16 md:py-20" id="featured-events">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Featured Events
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our latest events, training programs, workshops, and
            technology initiatives.
          </p>
        </div>

        <Carousel
          items={featuredEvents}
          renderItem={(event) => <EventCard event={event} />}
          ariaLabel="Featured events carousel"
        />
      </div>
    </section>
  );
}