import {
  FaLinkedinIn,
  
  FaYoutube,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import images from "../../public/images.js";

export default function Footer() {
  return (
    <footer className="gi-footer bg-white">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 py-12 border-b border-gray-200">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="footer-brand mb-4">
              <img 
                src={images.gi} 
                alt="Global Infoventures Logo" 
                className="footer-logo h-12"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              NVIDIA Elite Partner delivering enterprise AI infrastructure, HPC systems, and hands-on training across India.
            </p>
            <div className="footer-social flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <FaLinkedinIn />
              </a>
             
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1">
            <h6 className="text-sm font-semibold text-gray-800 mb-4">Solutions</h6>
            <ul className="space-y-2">
              <li><a href="#capabilities" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">DGX Systems</a></li>
              <li><a href="#capabilities" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">GPU Clusters</a></li>
              <li><a href="#capabilities" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">AI Workstations</a></li>
              <li><a href="#capabilities" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">HPC Solutions</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h6 className="text-sm font-semibold text-gray-800 mb-4">Company</h6>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#stories" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">Success Stories</a></li>
              <li><a href="#timeline" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">Timeline</a></li>
              <li><a href="#contact" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h6 className="text-sm font-semibold text-gray-800 mb-4">Resources</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1">
            <h6 className="text-sm font-semibold text-gray-800 mb-4">Newsletter</h6>
            <div className="footer-newsletter flex border border-gray-300 rounded-md overflow-hidden">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button 
                aria-label="Subscribe" 
                className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-500">
          <span>&copy; 2026 Global Infoventures Pvt. Ltd. All rights reserved.</span>
          <span className="footer-legal flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}