// src/components/Events.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ImageOff } from 'lucide-react';
import eventsData from '../utils/event';

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Event Gallery</h1>
          <p className="text-[#374151] max-w-2xl mx-auto">
            Click on any event to view details
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.6) }}
              viewport={{ once: true }}
              className="cursor-pointer group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#16A34A]/20 transition-all duration-300 hover:-translate-y-2"
              onClick={() => navigate(`/events/${event.slug}`)}
            >
              <div className="relative overflow-hidden h-64 w-full bg-[#DCFCE7]">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : null}

                <div
                  className="items-center justify-center w-full h-full text-[#16A34A]"
                  style={{ display: event.image ? 'none' : 'flex' }}
                >
                  <ImageOff className="w-10 h-10" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="text-white">
                    <div className="text-sm font-medium">Click to view details</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white min-h-[80px] flex items-center">
                <p className="text-sm font-medium text-[#0F172A] line-clamp-2 hover:text-[#16A34A] transition-colors text-center w-full">
                  {event.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
