"use client";

import Link from "next/link";
import {
  Shield,
  Layers,
  Globe,
  Database,
  Code,
  BarChart3,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Layers,
      tag: "REMOTE SENSING",
      title: "LiDAR & Remote Sensing",
      description:
        "High-precision elevation data and terrain analysis for accurate decision-making.",
    },
    {
      icon: Globe,
      tag: "SPATIAL DATA",
      title: "GIS & Spatial Analysis",
      description:
        "Custom geographic information systems and advanced spatial analysis workflows.",
    },
    {
      icon: Database,
      tag: "EMERGENCY SERVICES",
      title: "NG9-1-1 Readiness",
      description:
        "NENA-compliant addressing and emergency services infrastructure solutions.",
    },
    {
      icon: Code,
      tag: "DEVELOPMENT",
      title: "Custom Software",
      description:
        "Purpose-built geospatial applications tailored to your operational needs.",
    },
    {
      icon: BarChart3,
      tag: "AUTOMATION",
      title: "Data Automation",
      description:
        "Intelligent workflows that reduce manual effort and ensure data consistency.",
    },
    {
      icon: Shield,
      tag: "QUALITY ASSURANCE",
      title: "Compliance & QA",
      description:
        "Rigorous validation and certification against government standards.",
    },
  ];

  const projects = [
    {
      title: "NG9-1-1 Readiness",
      client: "District of North Saanich",
      tags: ["NG9-1-1", "Web App", "Automation"],
      metric: "Full NENA Compliance",
    },
    {
      title: "Addressing Data Aggregation",
      client: "Columbia Shuswap Regional District",
      tags: ["NG9-1-1", "Multi-Municipal", "QA/QC"],
      metric: "5 Municipalities Unified",
    },
    {
      title: "LiDAR Processing & DEM Generation",
      client: "North Saanich",
      tags: ["LiDAR", "DEM", "Terrain Analysis"],
      metric: "Sub-meter Accuracy",
    },
    {
      title: "Steep Slope Map Production",
      client: "North Saanich",
      tags: ["Cartography", "Risk Assessment", "GIS"],
      metric: "Multi-format Delivery",
    },
  ];

  const stats = [
    { label: "Government Clients", value: "4+" },
    { label: "Hours Saved per Project", value: "75+" },
    { label: "Data Accuracy", value: "99%" },
    { label: "Active Projects", value: "6+" },
  ];

  const features = [
    "Schema Guard",
    "AI Field Deriver",
    "Versioned Fix-Proposals",
    "Dashboards & Audit Logs",
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-screen bg-navy-950 topo-pattern relative pt-24 flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-navy-700/40 border border-gold-500/30 rounded-full backdrop-blur-sm">
            <Shield size={16} className="text-gold-500" />
            <span className="text-xs font-semibold text-gold-500 tracking-wide">
              TRUSTED BY BC GOVERNMENT AGENCIES
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Secure Local</span>{" "}
            <span className="text-gold-500">Intelligence.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
            We build the geospatial systems, LiDAR solutions, and custom software
            that help local governments make smarter decisions and deliver safer
            communities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 text-navy-950 font-semibold rounded-sm hover:bg-gold-300 transition-colors duration-200"
            >
              Explore Our Work
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="px-4 py-4 bg-navy-900/60 border border-navy-700/50 backdrop-blur-sm rounded-sm"
              >
                <p className="text-2xl md:text-3xl font-bold text-gold-500 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-gold-500" />
            <span className="text-sm font-semibold text-gold-500 tracking-wide">
              WHAT WE DO
            </span>
            <div className="w-8 h-0.5 bg-gold-500" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-navy-950 mb-16">
            Geospatial Services & Solutions
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-white border border-lightgray rounded-lg hover:border-gold-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-navy-950 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                    <IconComponent size={28} className="text-gold-500 group-hover:text-navy-950 transition-colors" />
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-xs font-bold text-gold-500 tracking-widest mb-3">
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-500 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-navy-950 font-semibold text-sm hover:text-gold-500 transition-colors"
                  >
                    Learn more
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-20 bg-navy-950 relative">
        <div className="absolute inset-0 topo-pattern pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/98 to-navy-950 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Label */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-0.5 bg-gold-500" />
              <span className="text-sm font-semibold text-gold-500 tracking-wide">
                OUR WORK
              </span>
            </div>
            <Link
              href="/projects"
              className="text-gold-500 hover:text-gold-300 font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Featured Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group p-8 bg-navy-900/60 border border-navy-700/50 backdrop-blur-sm rounded-lg hover:border-gold-500 transition-all duration-300"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-navy-800/60 text-gold-300 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="text-gold-300 font-semibold mb-6">
                  {project.client}
                </p>

                {/* Metric */}
                <div className="pt-6 border-t border-navy-700/50">
                  <p className="text-navy-200 text-sm mb-1">KEY METRIC</p>
                  <p className="text-gold-500 font-bold text-lg">
                    {project.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-16 bg-white border-y border-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy-950 font-semibold text-lg mb-12">
            Trusted by Government & Industry Leaders
          </p>

          {/* Client Logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {["District of North Saanich", "Columbia Shuswap Regional District", "URBAN Systems"].map(
              (client, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 text-navy-950 font-semibold opacity-70"
                >
                  <Shield size={28} className="text-gold-500" />
                  <span className="hidden sm:inline">{client}</span>
                  <span className="sm:hidden">Client {idx + 1}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION: NG911 AutoConform ===== */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                NG911 AutoConform
              </h2>

              <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                Automated compliance validation and data standardization for next-generation 911 systems.
                Streamline your addressing infrastructure with intelligent schema guards and AI-driven field derivation.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-3 bg-navy-950 text-gold-500 font-semibold rounded-sm hover:bg-navy-900 transition-colors duration-200"
              >
                Request a Demo
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Right: Terminal Mockup */}
            <div className="bg-charcoal rounded-lg p-6 border border-navy-700 font-mono text-sm overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-navy-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-muted text-xs">ng911-conform</span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2 text-green-400">
                <div>
                  <span className="text-gold-500">$</span> ng911 validate addressing.geojson
                </div>
                <div className="text-muted">Scanning 2,847 records...</div>
                <div className="mt-4">
                  <span className="text-gold-500">✓</span> Schema validation: PASSED
                </div>
                <div>
                  <span className="text-gold-500">✓</span> Address format: COMPLIANT
                </div>
                <div>
                  <span className="text-gold-500">✓</span> Spatial integrity: VERIFIED
                </div>
                <div className="mt-4 text-gold-500">
                  <span className="text-gold-500">✓</span> NENA 2.1 CERTIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNAPSHOT ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Founder Card */}
            <div>
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-lg p-8 text-white max-w-sm">
                {/* Initials */}
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6 text-navy-950 font-bold text-2xl">
                  JS
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl font-bold mb-2">John Soliman</h3>
                <p className="text-gold-500 font-semibold mb-6">Founder & Principal</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {["GIS", "LiDAR", "Node.js", "Geospatial"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-navy-800 text-gold-300 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: About Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6">
                Engineering Precision for Public Service
              </h2>

              <p className="text-lg text-navy-700 mb-8 leading-relaxed">
                Camber & Core Systems combines world-class engineering with deep expertise
                in geospatial systems and emergency services infrastructure. We partner with
                BC municipalities to deliver reliable, scalable solutions that communities depend on.
              </p>

              {/* Info Tiles */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Location", value: "Victoria, BC" },
                  { label: "Focus", value: "Public Sector GIS" },
                  { label: "Founded", value: "2024" },
                  { label: "Education", value: "UVic Engineering" },
                ].map((info, idx) => (
                  <div key={idx} className="p-4 bg-offwhite rounded-lg">
                    <p className="text-xs font-bold text-gold-500 tracking-wide mb-1">
                      {info.label}
                    </p>
                    <p className="font-semibold text-navy-950">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA BANNER ===== */}
      <section className="py-20 bg-navy-900 topo-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to modernize your geospatial operations?
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's talk about how Camber & Core can help your municipality unlock
            the full potential of your geospatial data.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-gold-500 text-navy-950 font-bold rounded-sm hover:bg-gold-300 transition-colors duration-200 text-lg"
          >
            Start a Conversation
            <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </section>
    </>
  );
}
