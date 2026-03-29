"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "LiDAR & Remote Sensing",
    "GIS & Spatial Analysis",
    "NG9-1-1 Readiness",
    "Custom Software",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-[50vh] bg-navy-950 topo-pattern relative pt-24 flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Get in touch with our team to discuss your geospatial project and discover how we can help.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Form (60% width) */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy-950 mb-8">
                Send us a message
              </h2>

              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-green-800 font-semibold text-lg">
                    Thank you for reaching out!
                  </p>
                  <p className="text-green-700 mt-2">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-navy-950 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-lightgray rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-navy-950 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-lightgray rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200"
                      placeholder="Your Municipality"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-950 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-lightgray rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-950 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-lightgray rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200"
                      placeholder="(250) 555-0123"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-semibold text-navy-950 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-lightgray rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-950 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-lightgray rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-950 font-bold rounded-sm hover:bg-gold-300 transition-colors duration-200 text-lg"
                  >
                    Send Message
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Details (40% width) */}
            <div>
              <div className="bg-navy-900 rounded-lg p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-8">Other Ways to Connect</h3>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <Mail size={24} className="text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/70 font-semibold mb-1">EMAIL</p>
                      <a
                        href="mailto:john@camberandcore.ca"
                        className="text-white font-semibold hover:text-gold-500 transition-colors"
                      >
                        john@camberandcore.ca
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <Phone size={24} className="text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/70 font-semibold mb-1">PHONE</p>
                      <a
                        href="tel:+12502798735"
                        className="text-white font-semibold hover:text-gold-500 transition-colors"
                      >
                        250-279-8735
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <MapPin size={24} className="text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/70 font-semibold mb-1">ADDRESS</p>
                      <p className="text-white">
                        4010 Century Rd<br />
                        Victoria, BC V8X 2E4<br />
                        Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-12 pt-8 border-t border-navy-700">
                  <p className="text-sm text-white/70">
                    We typically respond to inquiries within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
            Have questions?
          </h2>

          <p className="text-lg text-navy-700 mb-8">
            Feel free to reach out directly via phone or email. We're here to help with any inquiries about our services.
          </p>
        </div>
      </section>
    </>
  );
}
