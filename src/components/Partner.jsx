import React, { useState } from 'react';
import images from "../../public/images.js";

const Partner = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partnersData = [
    {
      id: 1,
      name: "NVIDIA",
      title: "GEN AI 5-STAR PARTNER",
      location: "Mumbai",
      date: "23 October - 25 October 2024",
      description: [
        "Global Infoventures Pvt. Ltd. is proud to be a NVIDIA GEN AI 5-STAR PARTNER in Education.",
        "This partnership enables us to deliver cutting-edge AI solutions to educational institutions across India.",
        "With NVIDIA's advanced technology and our expertise, we are transforming the way education is delivered and experienced.",
        "Together, we are building the future of education through innovation and collaboration."
      ],
      image: images.nvidia || "/images/nvidia-partner.jpg",
      badge: "5-Star",
      category: "Technology Partner",
      website: "https://www.nvidia.com"
    },
    {
      id: 2,
      name: "Microsoft",
      title: "Gold Partner",
      location: "Global",
      date: "2023 - Present",
      description: [
        "As a Microsoft Gold Partner, we deliver world-class solutions built on Microsoft technologies.",
        "Our partnership enables us to provide innovative cloud, AI, and productivity solutions to our clients.",
        "We leverage Microsoft's ecosystem to create transformative experiences for educational institutions."
      ],
      image: "/images/microsoft-partner.jpg",
      badge: "Gold",
      category: "Technology Partner",
      website: "https://www.microsoft.com"
    },
    {
      id: 3,
      name: "Google",
      title: "Cloud Partner",
      location: "Global",
      date: "2022 - Present",
      description: [
        "We are a Google Cloud Partner, bringing the power of Google's cloud infrastructure to our clients.",
        "This partnership allows us to offer scalable, secure, and innovative solutions for educational institutions.",
        "We help organizations leverage Google's AI and machine learning capabilities."
      ],
      image: "/images/google-partner.jpg",
      badge: "Cloud",
      category: "Cloud Partner",
      website: "https://cloud.google.com"
    },
    {
      id: 4,
      name: "AWS",
      title: "Select Partner",
      location: "Global",
      date: "2021 - Present",
      description: [
        "As an AWS Select Partner, we deliver robust cloud solutions using Amazon Web Services.",
        "Our expertise in AWS helps educational institutions build scalable and cost-effective infrastructure.",
        "We provide end-to-end cloud solutions tailored to the unique needs of the education sector."
      ],
      image: "/images/aws-partner.jpg",
      badge: "Select",
      category: "Cloud Partner",
      website: "https://aws.amazon.com"
    }
  ];

  const openModal = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPartner(null);
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Partners</h1>
            <p className="text-gray-600 mt-2">Building the future together through strategic partnerships</p>
          </div>

          {/* Partners Grid - Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersData.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Partner Image - Fit without cropping */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                  {partner.badge && (
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {partner.badge}
                    </span>
                  )}
                  {partner.category && (
                    <span className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">
                      {partner.category}
                    </span>
                  )}
                </div>

                {/* Partner Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    {partner.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {partner.location} • {partner.date}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3 flex-grow">
                    {Array.isArray(partner.description) 
                      ? partner.description[0] 
                      : partner.description}
                  </p>
                  <button 
                    onClick={() => openModal(partner)}
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
      {isModalOpen && selectedPartner && (
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
              {/* Partner Image - Fit without cropping */}
              <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden mb-6" style={{ minHeight: '300px' }}>
                <img
                  src={selectedPartner.image}
                  alt={selectedPartner.name}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '500px' }}
                />
                {selectedPartner.badge && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {selectedPartner.badge}
                  </span>
                )}
              </div>

              {/* Partner Details */}
              <div className="mb-6">
                <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold">Partner</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                  {selectedPartner.name}
                </h2>
                <p className="text-lg text-blue-600 font-semibold mt-1">
                  {selectedPartner.title}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-gray-600">{selectedPartner.location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{selectedPartner.date}</span>
                  {selectedPartner.category && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {selectedPartner.category}
                      </span>
                    </>
                  )}
                  {selectedPartner.website && (
                    <>
                      <span className="text-gray-400">•</span>
                      <a 
                        href={selectedPartner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        Visit Website →
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                {Array.isArray(selectedPartner.description) 
                  ? selectedPartner.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  : <p>{selectedPartner.description}</p>
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

export default Partner;