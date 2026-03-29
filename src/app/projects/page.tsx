'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: number;
  client: string;
  title: string;
  description: string;
  outcome: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    client: 'District of North Saanich',
    title: 'LiDAR Data Processing & DEM Generation',
    description:
      'The District of North Saanich required comprehensive processing of raw LiDAR data for terrain analysis and infrastructure planning. We executed a complete data pipeline including advanced noise filtering, automated ground/non-ground classification, and rigorous quality assurance. The resulting high-resolution digital elevation model was validated for accuracy and delivered with full documentation for immediate use in planning workflows.\n\nThis project demonstrated the importance of methodical data processing—each step was documented, validated, and verified against ground-truth measurements to ensure government-grade accuracy.',
    outcome: [
      'Highly accurate DEM for terrain analysis',
      'Validated against ground-truth surveys',
      'Infrastructure planning datasets',
      'Environmental management capabilities',
    ],
    tags: ['LiDAR', 'DEM/DSM', 'Data Processing', 'QA/QC'],
  },
  {
    id: 2,
    client: 'District of North Saanich',
    title: 'Steep Slope Map Production',
    description:
      'Following DEM generation, the District required detailed slope analysis and risk classification mapping for land-use planning and hazard assessment. We computed slope gradients from the DEM, classified terrain into categorical risk bands, and produced professional cartographic outputs in multiple formats. The resulting maps integrate seamlessly into existing planning documents and support informed decision-making for development constraints.\n\nThe project showcased how geospatial analysis translates raw elevation data into actionable intelligence for municipal planning.',
    outcome: [
      'Slope classification for risk assessment',
      'PDF, GeoTIFF, and Shapefile outputs',
      'Land-use planning integration',
      'Development constraint documentation',
    ],
    tags: ['Slope Analysis', 'Cartography', 'Risk Classification', 'GIS'],
  },
  {
    id: 3,
    client: 'Columbia Shuswap Regional District',
    title: 'NG9-1-1 Addressing Data Aggregation',
    description:
      'The Columbia Shuswap Regional District needed to consolidate addressing data across multiple jurisdictions for NG9-1-1 emergency response readiness. We designed and implemented an automated aggregation system that pulls from disparate sources, applies SSAP-aligned standardization, and enforces rigorous QA/QC rules. The solution tracks changes across versions and provides controlled staging for validation before delivery.\n\nThis project reduced manual coordination overhead by 70% and created a repeatable process for future data updates, ensuring compliance with NENA standards while maintaining data quality.',
    outcome: [
      'Centralized SSAP-aligned dataset',
      'Automated QA/QC validation',
      'Controlled staging & versioning',
      'Validated, production-ready deliverables',
    ],
    tags: ['NG9-1-1', 'Data Aggregation', 'SSAP', 'Automation', 'NENA'],
  },
  {
    id: 4,
    client: 'District of North Saanich',
    title: 'NG9-1-1 Readiness & Addressing Modernization',
    description:
      'The District engaged Camber & Core to achieve full NG9-1-1 readiness with modernized addressing workflows. We built a purpose-designed web application that guides staff through addressing validation, automated conformance checking, and NENA-aligned standardization. The system continuously validates data integrity and generates audit logs for compliance documentation.\n\nThe result is a standardized, repeatable process that reduces errors, accelerates updates, and ensures the District maintains readiness for seamless emergency response system integration.',
    outcome: [
      'NENA standards compliance',
      'Automated conformance validation',
      'Web-based workflow application',
      'Standardized, repeatable update process',
    ],
    tags: ['NG9-1-1', 'NENA', 'Web Application', 'Validation', 'Compliance'],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-navy-950 text-white topo-pattern">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-navy-100 max-w-3xl leading-relaxed">
            Real-world geospatial solutions delivered to government agencies across British Columbia. Each project demonstrates our commitment to accuracy, compliance, and measurable impact.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-offwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-2 bg-gradient-to-r from-gold-500 to-gold-300" />

                <div className="p-8 lg:p-12">
                  {/* Client Badge */}
                  <div className="inline-block mb-4">
                    <span className="text-sm font-semibold text-gold-700 bg-gold-100 px-4 py-2 rounded-full">
                      {project.client}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h2 className="text-4xl font-bold text-navy-950 mb-6">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <div className="prose prose-lg max-w-none mb-10 text-charcoal/80">
                    {project.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-navy-950 mb-4">
                      Outcomes & Impact
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.outcome.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                          <span className="text-base text-charcoal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium text-navy-700 bg-navy-100 px-3 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's discuss your project
          </h2>
          <p className="text-xl text-navy-100 mb-10 max-w-2xl mx-auto">
            Whether you need LiDAR processing, NG9-1-1 readiness, or custom GIS solutions, we're ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
