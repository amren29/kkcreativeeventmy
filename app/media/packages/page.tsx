"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlobalCTA from "@/components/GlobalCTA";
import PDFViewer from "@/components/PDFViewer";
import Link from "next/link";

const packages = [
  {
    name: "Starter Package",
    price: "25,000",
    duration: "1 Month Campaign",
    description: "Perfect for small businesses looking to increase local visibility",
    features: [
      "30 pcs Bunting in KK area",
      "5 pcs Street Banner at moderate traffic areas",
      "Billboard placement (1 location) for 1 month",
      "Basic design consultation included",
      "Installation & removal included",
      "Campaign performance report",
    ],
    highlighted: false,
    pdfUrl: "/packages/browse-media-starter.pdf",
  },
  {
    name: "Professional Package",
    price: "80,000",
    duration: "3 Months Campaign",
    description: "Ideal for growing businesses seeking maximum exposure",
    features: [
      "100 pcs Bunting across KK area",
      "10 pcs Street Banner at high traffic areas",
      "Billboard placement (2 locations) for 3 months",
      "LED Billboard display for 1 month",
      "Premium design & creative support",
      "Installation & maintenance included",
      "Monthly performance analytics",
      "Social media content package",
    ],
    highlighted: true,
    badge: "Most Popular",
    pdfUrl: "/packages/browse-media-professional.pdf",
  },
  {
    name: "Premium Package",
    price: "150,000",
    duration: "6 Months Campaign",
    description: "Comprehensive solution for major brand campaigns and product launches",
    features: [
      "200 pcs Bunting across Sabah & Sarawak",
      "20 pcs Street Banner at premium high traffic locations",
      "Multiple Billboard placements (5 locations) for 6 months",
      "LED Billboard display for 3 months",
      "Building facade wrap (subject to availability)",
      "Full design & creative production team",
      "Priority installation & ongoing maintenance",
      "Comprehensive campaign analytics & reporting",
      "Dedicated account manager",
      "Social media amplification campaign",
      "Free refresh/update halfway through campaign",
    ],
    highlighted: false,
    pdfUrl: "/packages/browse-media-premium.pdf",
  },
];

export default function MediaPackagesPage() {
  const [pdfViewer, setPdfViewer] = useState({
    isOpen: false,
    pdfUrl: "",
    title: "",
  });

  const openPDF = (pdfUrl: string, title: string) => {
    setPdfViewer({ isOpen: true, pdfUrl, title });
  };

  const closePDF = () => {
    setPdfViewer({ isOpen: false, pdfUrl: "", title: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Browse Media Packages</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Dominate the outdoor advertising space with our comprehensive media packages.
                Choose the perfect package to amplify your brand visibility across East Malaysia.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in"
                delay={index * 100}
              >
                <div
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${
                    pkg.highlighted
                      ? "bg-accent text-white shadow-2xl scale-105 md:scale-110"
                      : "bg-white border-2 border-gray-200 hover:border-accent hover:shadow-xl"
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-xs font-bold">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-8 flex-grow flex flex-col">
                    {/* Package Name */}
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        pkg.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span
                          className={`text-4xl font-bold ${
                            pkg.highlighted ? "text-white" : "text-accent"
                          }`}
                        >
                          RM{pkg.price}
                        </span>
                      </div>
                      <p
                        className={`text-sm mt-1 ${
                          pkg.highlighted ? "text-gray-100" : "text-gray-600"
                        }`}
                      >
                        {pkg.duration}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-6 text-sm ${
                        pkg.highlighted ? "text-gray-100" : "text-textGray"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                              pkg.highlighted ? "text-white" : "text-accent"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span
                            className={`text-sm ${
                              pkg.highlighted ? "text-gray-100" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link
                        href="/contact"
                        className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                          pkg.highlighted
                            ? "bg-white text-accent hover:bg-gray-100"
                            : "bg-accent text-white hover:bg-opacity-90"
                        }`}
                      >
                        Get Started
                      </Link>
                      <button
                        onClick={() => openPDF(pkg.pdfUrl, `${pkg.name} - Details`)}
                        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all border-2 ${
                          pkg.highlighted
                            ? "border-white text-white hover:bg-white hover:text-accent"
                            : "border-accent text-accent hover:bg-accent hover:text-white"
                        }`}
                      >
                        See More Details
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Additional Info */}
          <ScrollAnimation delay={300}>
            <div className="mt-12 text-center">
              <div className="bg-secondary p-8 rounded-lg max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-3">Need a Custom Package?</h3>
                <p className="text-textGray mb-4">
                  Every business is unique. We can create a customized outdoor advertising
                  package tailored to your specific needs, budget, and target locations.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <GlobalCTA />

      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={pdfViewer.isOpen}
        onClose={closePDF}
        pdfUrl={pdfViewer.pdfUrl}
        title={pdfViewer.title}
      />
    </>
  );
}
