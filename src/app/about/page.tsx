"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const techSkills = [
    "Python",
    "ArcGIS",
    "LiDAR",
    "Next.js",
    "AWS",
    "Flutter",
    "Java",
    "C++",
  ];

  const competencies = [
    {
      category: "Programming & Algorithms",
      items: ["Python", "Java", "C++", "Data Structures", "OOP"],
    },
    {
      category: "Geospatial & GIS",
      items: ["ArcGIS", "LiDAR Processing", "Spatial Databases", "Real-Time Pipelines"],
    },
    {
      category: "Web & Mobile",
      items: ["Flutter", "RESTful APIs", "Responsive UI/UX"],
    },
    {
      category: "Cloud",
      items: ["AWS (Lambda, DynamoDB, EC2)", "Azure", "Firebase"],
    },
    {
      category: "DevOps",
      items: ["Git", "CI/CD", "Scrum/Kanban"],
    },
    {
      category: "Hardware",
      items: ["Arduino", "Raspberry Pi", "KiCad", "Altium"],
    },
  ];

  const experience = [
    {
      role: "Founder",
      company: "Camber & Core Systems",
      period: "Dec 2024 - Present",
      description: "Automated NG911 NENA compliance solutions",
    },
    {
      role: "GIS Co-op Student",
      company: "District of North Saanich",
      period: "Sep-Dec 2024",
      description: "Automated Service Request system, map-based apps",
    },
    {
      role: "Software Developer",
      company: "Government of BC",
      period: "Jan-Sep 2024",
      description: "Automated wildfire property database, Flutter app",
    },
    {
      role: "Materials Technician",
      company: "Allnorth Consultants",
      period: "May-Aug 2023",
      description: "",
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-[50vh] bg-navy-950 topo-pattern relative pt-24 flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            About Camber & Core
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl">
            Building geospatial solutions and software that empower government agencies to make smarter decisions.
          </p>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-8">
            Our Mission
          </h2>

          <p className="text-lg text-navy-700 leading-relaxed max-w-3xl">
            At Camber & Core Systems, our mission is to leverage GIS and LiDAR technologies to deliver precise, impactful geospatial solutions for public sector organizations. We believe that accurate spatial data and intelligent workflows drive better decision-making and safer communities. We partner with municipalities and government agencies across British Columbia to streamline operations, reduce costs, and modernize critical infrastructure.
          </p>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Founder Card */}
            <div>
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-lg p-8 text-white max-w-sm h-fit">
                {/* Initials */}
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mb-8 text-navy-950 font-bold text-4xl">
                  JS
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl font-bold mb-2">John Soliman</h3>
                <p className="text-gold-500 font-semibold mb-8">Founder & GIS / Software Specialist</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-navy-800/60 text-gold-300 text-xs font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div>
              <div className="space-y-6">
                <p className="text-lg text-navy-700 leading-relaxed">
                  John Soliman, the founder of Camber & Core Systems, is a dynamic GIS and Software Specialist who combines a robust software engineering foundation with deep expertise in geospatial technologies. His passion lies in developing innovative solutions that address real-world challenges, particularly for public sector organizations.
                </p>

                <p className="text-lg text-navy-700 leading-relaxed">
                  With a proven track record, John has successfully delivered high-value systems for emergency management and municipal governments. His work focuses on streamlining complex data collection processes, significantly reducing operational costs, and accelerating critical workflows.
                </p>

                <div className="pt-6 border-t border-lightgray">
                  <h4 className="text-sm font-bold text-gold-500 tracking-wide mb-4">EDUCATION</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-navy-950">Bachelor of Engineering (Computer Engineering)</p>
                      <p className="text-navy-700 text-sm">University of Victoria, BC (in progress)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-950">Engineering Certificate & Associate Degree in Sciences</p>
                      <p className="text-navy-700 text-sm">Coast Mountain College, BC</p>
                      <p className="text-navy-700 text-sm">Graduated June 2023 • Outstanding International Student Award 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE COMPETENCIES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              Core Competencies
            </h2>
            <p className="text-lg text-navy-700">
              A comprehensive skill set spanning geospatial systems, software engineering, and public sector solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 bg-offwhite border border-lightgray rounded-lg hover:border-gold-500 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-navy-950 mb-4">
                  {comp.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {comp.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1 bg-navy-950 text-gold-300 text-xs font-semibold rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-16">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Line */}
                {idx < experience.length - 1 && (
                  <div className="absolute left-6 top-16 w-1 h-12 bg-gold-500" />
                )}

                {/* Timeline Dot & Content */}
                <div className="flex gap-8">
                  {/* Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-950 font-bold">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow pb-8 pt-2">
                    <div className="bg-white p-6 rounded-lg border border-lightgray hover:border-gold-500 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-navy-950">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-semibold text-gold-500">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-navy-700 font-semibold mb-3">
                        {exp.company}
                      </p>

                      {exp.description && (
                        <p className="text-navy-600 text-sm">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-navy-950 topo-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's work together
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Ready to explore how Camber & Core Systems can support your geospatial initiatives?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-gold-500 text-navy-950 font-bold rounded-sm hover:bg-gold-300 transition-colors duration-200 text-lg"
          >
            Get in Touch
            <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </section>
    </>
  );
}
