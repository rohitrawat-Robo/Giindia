import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import images from "../../public/images.js";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div className="lg:col-span-2">
            <img
              src={images.gi}
              alt="Company Logo"
              className="h-12 mb-6"
            />

            <p className="text-gray-400 leading-7 mb-6 max-w-md">
              Delivering next-generation AI, HPC, Cloud, Data Center,
              and Enterprise IT solutions that empower organizations
              to innovate faster.
            </p>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-green-500" size={18} />
                <span>
                  H-65, Third Floor, Sector 63 Rd, H Block,
                  <br />
                  Sector 63, Noida, Uttar Pradesh 201309
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-green-500" size={18} />
                <a href="tel:9873904161" className="hover:text-green-400 transition">
                  098739 04161
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-green-500" size={18} />
                <a href="mailto:info@company.com" className="hover:text-green-400 transition">
                  info@company.com
                </a>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Solutions",
                "Industries",
                "Products",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition hover:text-green-400"
                  >
                    <ArrowRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Cloud Computing",
                "High Performance Computing",
                "Cyber Security",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition hover:text-green-400"
                  >
                    <ArrowRight size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-5 text-gray-400">
              Subscribe to receive our latest updates and technology news.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-green-500"
              />

              <button
                className="w-full rounded-lg bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">

              {[
                FaFacebookF,
                FaLinkedinIn,
                FaXTwitter,
                FaInstagram,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition duration-300 hover:bg-green-500 hover:text-black"
                >
                  <Icon size={18} />
                </a>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Global Infoventures Pvt. Ltd. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="transition hover:text-green-400">
            Privacy Policy
          </a>

          <a href="#" className="transition hover:text-green-400">
            Terms & Conditions
          </a>

          <a href="#" className="transition hover:text-green-400">
            Cookie Policy
          </a>
        </div>

      </div>
    </footer>
  );
}