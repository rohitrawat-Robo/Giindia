import {
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import images from "../../public/images.js";

export default function Footer() {
  return (
    <footer className="gi-footer" style={{ background: '#081c3a' }}>
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 py-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="footer-brand mb-4">
              <img 
                src={images.gi} 
                alt="Global Infoventures Logo" 
                className="footer-logo h-12"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-[34ch]">
              NVIDIA Elite Partner delivering enterprise AI infrastructure, HPC systems, and hands-on training across India.
            </p>
            <div className="footer-social flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#76B900] hover:text-white transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#76B900] hover:text-white transition-all"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Solutions</h6>
            <ul className="space-y-2.5">
              <li><a href="#capabilities" className="text-white/45 text-sm hover:text-[#76B900] transition-all">DGX Systems</a></li>
              <li><a href="#capabilities" className="text-white/45 text-sm hover:text-[#76B900] transition-all">GPU Clusters</a></li>
              <li><a href="#capabilities" className="text-white/45 text-sm hover:text-[#76B900] transition-all">AI Workstations</a></li>
              <li><a href="#capabilities" className="text-white/45 text-sm hover:text-[#76B900] transition-all">HPC Solutions</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Company</h6>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-white/45 text-sm hover:text-[#76B900] transition-all">About</a></li>
              <li><a href="#stories" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Success Stories</a></li>
              <li><a href="#timeline" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Timeline</a></li>
              <li><a href="#contact" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Resources</h6>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Whitepapers</a></li>
              <li><a href="#" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Webinars</a></li>
              <li><a href="#" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Documentation</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Newsletter</h6>
            <div className="footer-newsletter flex border border-white/8 rounded overflow-hidden">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-3 py-2 text-sm outline-none bg-white/5 text-white placeholder:text-white/30"
              />
              <button 
                aria-label="Subscribe" 
                className="bg-[#76B900] text-white px-4 py-2 hover:bg-[#5c9400] transition-all flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-white/30">
          <span>&copy; 2026 Global Infoventures Pvt. Ltd. All rights reserved.</span>
          <span className="footer-legal flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#76B900] transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-[#76B900] transition-all">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}