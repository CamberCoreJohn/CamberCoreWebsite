'use client';

import {
  Shield,
  Zap,
  CheckSquare,
  BarChart3,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    id: 1,
    title: 'Schema Guard',
    description: 'Continuous layer comparison with auto-correction capabilities',
    icon: Shield,
  },
  {
    id: 2,
    title: 'AI Field Deriver',
    description: 'LLM-powered missing attribute generation and inference',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Versioned Fix-Proposals',
    description: 'Submit edits to ArcGIS Enterprise or PostGIS for human approval',
    icon: CheckSquare,
  },
  {
    id: 4,
    title: 'Dashboards & Audit Logs',
    description: 'PDF and Power BI reports for full compliance documentation',
    icon: BarChart3,
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-navy-950 text-white topo-pattern">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Software Products
          </h1>
          <p className="text-xl text-navy-100 max-w-3xl leading-relaxed">
            Innovative tools designed to automate, validate, and streamline critical geospatial workflows for government and enterprise organizations.
          </p>
        </div>
      </section>

      {/* NG911 AutoConform Product Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Product Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                Flagship Product
              </span>
            </div>
            <h2 className="text-4xl font-bold text-navy-950 mb-6">
              NG911 AutoConform
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl leading-relaxed">
              Automate NG911 data compliance and transform raw GDB files into production-ready NENA standard datasets. NG911 AutoConform eliminates manual validation overhead, reduces errors, and ensures your addressing data meets the strictest compliance standards.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="p-8 rounded-lg border-2 border-navy-100 hover:border-gold-500 transition-colors group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Terminal Mockup */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-navy-950 mb-6">
              In Action
            </h3>
            <div className="bg-charcoal rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-auto text-sm text-gray-400 font-mono">
                  ng911-conform.py
                </span>
              </div>
              <div className="p-8 font-mono text-sm overflow-x-auto">
                <div className="text-gray-400 mb-2">
                  $ python ng911_autoconform.py --input raw_addressing.gdb
                </div>
                <div className="text-gold-300 mb-1">
                  Loading raw GDB dataset...
                </div>
                <div className="text-gold-300 mb-1">
                  Running schema validation...
                </div>
                <div className="text-gold-300 mb-1">
                  Checking address completeness...
                </div>
                <div className="text-green-400 mb-4">
                  ✓ 98.7% schema compliance
                </div>
                <div className="text-gold-300 mb-1">
                  Deriving missing NENA attributes...
                </div>
                <div className="text-gold-300 mb-1">
                  Generating confidence scores...
                </div>
                <div className="text-green-400 mb-4">
                  ✓ 47 missing attributes inferred
                </div>
                <div className="text-gold-300 mb-1">
                  Creating fix proposals...
                </div>
                <div className="text-green-400 mb-1">
                  ✓ Proposals ready for review
                </div>
                <div className="text-green-400 mb-1">
                  ✓ Audit log generated
                </div>
                <div className="mt-4 text-gray-500">
                  Compliance report: ng911_autoconform_report_2026-03-29.pdf
                </div>
              </div>
            </div>
          </div>

          {/* CTA for Demo */}
          <div className="text-center mb-20">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-offwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-950 mb-6">
              More Products Coming Soon
            </h2>
            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto mb-10">
              We're building additional tools to address geospatial automation, data validation, and enterprise GIS workflows. Stay tuned for announcements.
            </p>
            <div className="inline-flex items-center gap-2 text-gold-700 font-semibold">
              <Sparkles className="w-5 h-5" />
              Innovations in progress
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to transform your data workflows?
          </h2>
          <p className="text-xl text-navy-100 mb-10 max-w-2xl mx-auto">
            Let's explore how NG911 AutoConform or our custom solutions can unlock efficiency and compliance across your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
