import React, { useState } from 'react';
import images from "../../public/images.js";

const Award = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const awardsData = [
    {
      id: 1,
      title: "NVIDIA GEN AI 5-STAR PARTNER AWARD",
      location: "Mumbai",
      date: "23 October - 25 October 2024",
      description: [
        "We are thrilled to announce that Global Infoventures Pvt. Ltd. has been honoured with the NVIDIA GEN AI 5-STAR PARTNER award in Education!",
        "This recognition is a testament to the hardwork, dedication and passion of our incredible team, who continuously strive to push boundaries and deliver the best for our clients and community. It also inspires us to keep innovating and enhancing our services.",
        "A huge thank you to our clients, partners and everyone who has supported us on this journey. We couldn't have done it without you!",
        "Here's to more achievements, growth and making an impact together!"
      ],
      image: images.award || "/images/award-l.jpg",
      badge: "2024",
      category: "Education Technology"
    },
   
  ];

  const openModal = (award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAward(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-light min-h-screen font-sans py-12 md:py-16">
      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Awards & Recognition</h1>
            <p className="text-gray-600 mt-2">Celebrating excellence and innovation</p>
          </div>

          {/* Awards Grid - Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award) => (
              <div 
                key={award.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Award Image - Fit without cropping */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain"
                  />
                  {award.badge && (
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {award.badge}
                    </span>
                  )}
                  
                </div>

                {/* Award Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {award.location} • {award.date}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3 flex-grow">
                    {Array.isArray(award.description) 
                      ? award.description[0] 
                      : award.description}
                  </p>
                  <button 
                    onClick={() => openModal(award)}
                    className="mt-4 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors self-start"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedAward && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {/* Award Image - Fit without cropping */}
              <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden mb-6" style={{ minHeight: '300px' }}>
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '500px' }}
                />
                {selectedAward.badge && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {selectedAward.badge}
                  </span>
                )}
              </div>

              {/* Award Details */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Award</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                  {selectedAward.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-gray-600">{selectedAward.location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{selectedAward.date}</span>
                  {selectedAward.category && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {selectedAward.category}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                {Array.isArray(selectedAward.description) 
                  ? selectedAward.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  : <p>{selectedAward.description}</p>
                }
              </div>

              {/* Close Button at Bottom */}
              <div className="mt-8 text-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Award;