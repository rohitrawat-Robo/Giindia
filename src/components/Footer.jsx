import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import images from "../../public/images.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="gi-footer" style={{ background: '#081c3a' }}>
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 py-12 border-b border-white/5">
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
                href="https://www.linkedin.com/company/global-infoventure/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#76B900] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.youtube.com/@globalinfoventurepvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#76B900] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://www.instagram.com/global_infoventures?igsh=MW5hZHEwdWF3bnJyaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#76B900] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/GlobalInfoventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#76B900] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links Column - Navbar links */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Quick Links</h6>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Home</Link></li>
              <li><Link to="/about" className="text-white/45 text-sm hover:text-[#76B900] transition-all">About Us</Link></li>
              <li><Link to="/solutions" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Solutions</Link></li>
              <li><Link to="/gril" className="text-white/45 text-sm hover:text-[#76B900] transition-all">GRIL</Link></li>
            </ul>
          </div>

          {/* More Links Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">More</h6>
            <ul className="space-y-2.5">
              <li><Link to="/events" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Events</Link></li>
              <li><Link to="/award" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Award</Link></li>
              <li><Link to="/nvidia-elite-partner" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Nvidia Elite Partner</Link></li>
              <li><Link to="/career" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Career</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Contact</h6>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-white/45 text-sm hover:text-[#76B900] transition-all">Contact Us</Link></li>
              <li><a href="mailto:info@globalinfoventures.com" className="text-white/45 text-sm hover:text-[#76B900] transition-all">info@globalinfoventures.com</a></li>
              <li><a href="tel:+911234567890" className="text-white/45 text-sm hover:text-[#76B900] transition-all">+91 1234567890</a></li>
            </ul>
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