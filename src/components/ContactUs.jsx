import React from 'react';
import SEO from './SEO.jsx';

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Global Infoventures — NVIDIA Elite Partner based in Noida. Reach out for AI infrastructure, DGX systems, and enterprise solutions."
        keywords={["contact Global Infoventures", "GIIndia contact", "NVIDIA partner Noida", "AI infrastructure inquiry"]}
        path="/contact"
      />
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122272] mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
          <div className="w-24 h-1 bg-[#122272] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Map and Info */}
          <div className="space-y-6">
            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 pb-0">
                <h5 className="text-xl font-semibold text-[#122272] flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#122272] rounded-full"></span>
                  Find Us Here
                </h5>
              </div>
              <div className="p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5889.748938033138!2d77.37425806485545!3d28.627793807376708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce542aa429ff5%3A0xe9ff04abfd54f721!2sGlobal%20Infoventures%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1777276932772!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Infoventures Location"
                  className="w-full rounded-xl"
                ></iframe>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h5 className="text-lg font-semibold text-[#122272] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#122272] rounded-full"></span>
                Quick Contact
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-[#122272] hover:text-white transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-[#122272]/10 group-hover:bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#122272] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 group-hover:text-white/80">Email</p>
                    <a href="mailto:info@giindia.com" className="text-sm font-medium group-hover:text-white">info@giindia.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-[#122272] hover:text-white transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-[#122272]/10 group-hover:bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#122272] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 group-hover:text-white/80">Phone</p>
                    <a href="tel:9873904161" className="text-sm font-medium group-hover:text-white">9873904161</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div className="bg-gradient-to-br from-[#122272] to-[#1a3a8a] rounded-2xl shadow-xl p-8 text-white">
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-blue-200 text-sm">Reach out to us through any of these channels</p>
              </div>

              <ul className="space-y-5 flex-1">
                {/* Address */}
                <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-wider">Address</p>
                    <p className="font-medium">Global Infoventures Pvt. Ltd.</p>
                    <p className="text-sm text-blue-200">H-65, Sector 63, Noida</p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-wider">Email</p>
                    <a href="mailto:info@giindia.com" className="font-medium hover:text-blue-200 transition-colors">
                      info@giindia.com
                    </a>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-wider">Phone</p>
                    <a href="tel:9873904161" className="font-medium hover:text-blue-200 transition-colors">
                      9873904161
                    </a>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-4">Connect With Us</p>
                <div className="flex gap-3 flex-wrap">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/GlobalInfoventures"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/@globalinfoventurepvtltd"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/global_infoventures/"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://wa.me/+919873904161"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;