'use client';

import {
  Radar,
  MapPin,
  TrendingUp,
  Map,
  BarChart3,
  Code2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'LiDAR Data Acquisition & Processing',
    icon: Radar,
    description:
      'We capture high-precision LiDAR point cloud data and process it with rigorous quality assurance. Our workflow includes comprehensive noise filtering, automated ground/non-ground classification, and multi-stage QA validation to ensure accuracy standards are met for demanding government applications.',
    capabilities: [
      'Raw point cloud collection & aggregation',
      'Automated noise filtering & outlier removal',
      'Ground/non-ground classification',
      'Quality assurance & accuracy validation',
    ],
    bgColor: 'bg-white',
  },
  {
    id: 2,
    title: 'Digital Elevation Model Generation',
    icon: MapPin,
    description:
      'Transform LiDAR and photogrammetry data into precise digital elevation models (DEMs) and digital surface models (DSMs). We perform advanced terrain analysis, validate accuracy against ground-truth surveys, and deliver production-ready models for infrastructure planning and environmental assessment.',
    capabilities: [
      'DEM/DSM generation from LiDAR & photogrammetry',
      'Terrain analysis & feature extraction',
      'Accuracy validation & benchmarking',
      'Multi-resolution model generation',
    ],
    bgColor: 'bg-offwhite',
  },
  {
    id: 3,
    title: 'Slope & Aspect Analysis',
    icon: TrendingUp,
    description:
      'Compute precise gradient and orientation metrics from elevation data for hazard assessment and planning. Our slope classification system categorizes terrain by steepness, enabling risk identification for landslides, avalanches, and development constraints critical for public safety planning.',
    capabilities: [
      'Slope & aspect gradient computation',
      'Hazard risk classification',
      'Landslide susceptibility mapping',
      'Environmental impact assessment',
    ],
    bgColor: 'bg-white',
  },
  {
    id: 4,
    title: 'Advanced Map Production & Cartography',
    icon: Map,
    description:
      'Produce publication-quality maps and cartographic outputs in multiple formats. From print-ready PDFs to georeferenced GeoTIFFs and shapefiles, we ensure consistency, accuracy, and compliance with government mapping standards for distribution and long-term archival.',
    capabilities: [
      'Print & digital map design',
      'GeoTIFF & Shapefile generation',
      'PDF & format conversion',
      'Government standard compliance',
    ],
    bgColor: 'bg-offwhite',
  },
  {
    id: 5,
    title: 'ArcGIS Pro & Enterprise Services',
    icon: BarChart3,
    description:
      'Optimize and extend your ArcGIS infrastructure with expert consulting. We provide workflow optimization, enterprise deployment support, and ArcGIS Online integration to maximize the value of your geospatial platform and automate critical processes.',
    capabilities: [
      'ArcGIS Pro workflow optimization',
      'ArcGIS Enterprise deployment & support',
      'ArcGIS Online integration & licensing',
      'Automation & scripting services',
    ],
    bgColor: 'bg-white',
  },
  {
    id: 6,
    title: 'Custom GIS Software Development',
    icon: Code2,
    description:
      'Build intelligent, scalable geospatial applications tailored to your unique needs. From Python and JavaScript automation tools to REST APIs and enterprise integrations, we engineer solutions that streamline workflows and reduce manual effort across your organization.',
    capabilities: [
      'Python/JavaScript GIS automation',
      'Web application development',
      'REST API & microservices',
      'Enterprise system integration',
    ],
    bgColor: 'bg-offwhite',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-16 bg-navy-950 text-white topo-pattern"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-navy-100 max-w-3xl leading-relaxed">
            Comprehensive geospatial, LiDAR, and GIS solutions engineered for government agencies and public sector organizations across British Columbia and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div>
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              className={`py-20 ${service.bgColor}`}
            >
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className={`flex flex-col gap-12 ${
                  !isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-start lg:items-center`}>
                  {/* Icon and Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <Icon className="w-12 h-12 text-gold-500" />
                      </div>
                      <h2 className="text-3xl font-bold text-charcoal">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <div className="space-y-3">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-base text-charcoal">
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accent bar */}
                  <div className="hidden lg:block flex-shrink-0">
                    <div className="w-1 h-64 bg-gradient-to-b from-gold-500 to-gold-300 rounded-full opacity-60" />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-navy-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our geospatial expertise can solve your organization's challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
