import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-gold-500/15">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 flex-shrink-0 w-fit">
              <span className="text-lg font-bold tracking-wide text-white">
                CAMBER
              </span>
              <span className="text-lg font-bold tracking-wide text-gold-500">
                &
              </span>
              <span className="text-lg font-bold tracking-wide text-white">
                CORE
              </span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed">
              Secure Local Intelligence
            </p>
            <p className="text-navy-200 text-xs mt-2">
              Geospatial solutions engineered for the public sector.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  LiDAR & Remote Sensing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  GIS & Spatial Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  NG9-1-1 Readiness
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">Victoria, BC</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:2502798735"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  250-279-8735
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:john@camberandcore.ca"
                  className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  john@camberandcore.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-navy-200 text-xs">
            © {currentYear} Camber & Core Systems Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-navy-200 hover:text-gold-500 transition-colors duration-200 text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
