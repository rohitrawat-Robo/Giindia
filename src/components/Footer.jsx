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
    <footer
      className="gi-footer relative overflow-hidden"
      style={{ background: "#081c3a", fontFamily: "'Fraunces', serif" }}
    >
      {/* animated background layer */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300..900;1,300..900&display=swap');

        .gi-footer::before{
          content:"";
          position:absolute;
          inset:-2px;
          background-image:
            linear-gradient(rgba(0,166,62,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,166,62,0.06) 1px, transparent 1px);
          background-size:42px 42px;
          animation:gi-grid-drift 34s linear infinite;
          pointer-events:none;
        }

        @keyframes gi-grid-drift{
          0%{background-position:0 0, 0 0;}
          100%{background-position:42px 84px, 84px 42px;}
        }

        .gi-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(90px);
          pointer-events:none;
          opacity:0.28;
        }
        .gi-glow-a{
          width:420px;height:420px;
          background:#00a63e;
          top:-180px;
          left:8%;
          animation:gi-drift-a 22s ease-in-out infinite alternate;
        }
        .gi-glow-b{
          width:360px;height:360px;
          background:#00d97e;
          bottom:-160px;
          right:6%;
          animation:gi-drift-b 26s ease-in-out infinite alternate;
        }

        @keyframes gi-drift-a{
          0%{transform:translate(0,0) scale(1);}
          100%{transform:translate(60px,40px) scale(1.15);}
        }
        @keyframes gi-drift-b{
          0%{transform:translate(0,0) scale(1);}
          100%{transform:translate(-50px,-30px) scale(1.1);}
        }

        @media (prefers-reduced-motion: reduce){
          .gi-footer::before, .gi-glow-a, .gi-glow-b{animation:none;}
        }
      `}</style>

      <div className="gi-glow gi-glow-a" />
      <div className="gi-glow gi-glow-b" />

      <div className="container mx-auto px-4 relative z-10">
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
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00a63e] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@globalinfoventurepvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00a63e] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/global_infoventures?igsh=MW5hZHEwdWF3bnJyaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00a63e] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/GlobalInfoventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00a63e] hover:text-white transition-all"
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
              <li><Link to="/" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Home</Link></li>
              <li><Link to="/about" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">About Us</Link></li>
              <li><Link to="/solutions" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Solutions</Link></li>
              <li><Link to="/gril" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">GRIL</Link></li>
            </ul>
          </div>

          {/* More Links Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">More</h6>
            <ul className="space-y-2.5">
              <li><Link to="/events" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Events</Link></li>
              <li><Link to="/etnow" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Award</Link></li>
              <li><Link to="/nvidia-elite-partner" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Nvidia Elite Partner</Link></li>
              <li><Link to="/career" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Career</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h6 className="text-white font-bold text-sm mb-4">Contact</h6>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">Contact Us</Link></li>
              <li><a href="mailto:info@globalinfoventures.com" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">info@globalinfoventures.com</a></li>
              <li><a href="tel:+911234567890" className="text-white/45 text-sm hover:text-[#00a63e] transition-all">+91 1234567890</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-white/30">
          <span>&copy; 2026 Global Infoventures Pvt. Ltd. All rights reserved.</span>
          <span className="footer-legal flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#00a63e] transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-[#00a63e] transition-all">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
