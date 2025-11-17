"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlobalCTA from "@/components/GlobalCTA";
import PDFViewer from "@/components/PDFViewer";
import Link from "next/link";

const packages = [
  {
    name: "Basic Package",
    price: "3,500",
    duration: "Per Day",
    description: "Perfect for small gatherings, birthday parties, and intimate corporate events",
    features: [
      "Basic sound system (up to 100 people)",
      "2 wireless microphones",
      "Small stage setup (8ft x 8ft)",
      "Registration table & chairs",
      "Setup & breakdown included",
    ],
    highlighted: false,
    guestCount: "Up to 100 guests",
    pdfUrl: "/packages/event-equipment-basic.pdf",
  },
  {
    name: "Standard Package",
    price: "12,000",
    duration: "Per Day",
    description: "Ideal for medium-sized corporate events, weddings, and community functions",
    features: [
      "Professional sound system (up to 300 people)",
      "4 wireless + 2 lapel microphones",
      "Stage lighting & setup (16ft x 12ft)",
      "LED screen display",
      "Tables & chairs (up to 200 pax)",
      "2 technicians + on-site support",
    ],
    highlighted: true,
    badge: "Most Popular",
    guestCount: "100-300 guests",
    pdfUrl: "/packages/event-equipment-standard.pdf",
  },
  {
    name: "Premium Package",
    price: "28,000",
    duration: "Per Day",
    description: "Complete solution for large-scale events, concerts, festivals, and major corporate functions",
    features: [
      "High-end sound system (1000+ people)",
      "8 microphones + concert-grade lighting",
      "Large stage (24ft x 20ft) + LED screen",
      "Complete furniture (up to 1000 pax)",
      "4 technicians + coordinator",
      "Generator, rehearsal & insurance included",
    ],
    highlighted: false,
    guestCount: "300-1000+ guests",
    pdfUrl: "/packages/event-equipment-premium.pdf",
  },
];

const equipmentCategories = [
  {
    category: "Audio Equipment",
    items: [
      "Professional PA Systems",
      "Wireless Microphones",
      "Lapel/Collar Microphones",
      "Podium Microphones",
      "Mixing Consoles",
      "Speakers & Subwoofers",
    ],
  },
  {
    category: "Lighting Equipment",
    items: [
      "LED Stage Lights",
      "Moving Head Lights",
      "Spotlights & Wash Lights",
      "Uplighting",
      "Effect Lighting",
      "Light Controllers",
    ],
  },
  {
    category: "Stage & Structure",
    items: [
      "Modular Stage Platforms",
      "Stage Skirting & Backdrops",
      "Truss Systems",
      "Podiums & Lecterns",
      "Dance Floors",
      "Red Carpet & Stanchions",
    ],
  },
  {
    category: "Tents & Canopies",
    items: [
      "Canopy Tents (10x10ft)",
      "Large Event Tents",
      "Marquee Tents",
      "Tent Sidewalls",
      "Tent Flooring",
      "Tent Lighting",
    ],
  },
  {
    category: "Furniture & Decor",
    items: [
      "Banquet Tables & Chairs",
      "Cocktail Tables",
      "VIP Lounge Furniture",
      "Registration Counters",
      "Display Tables",
      "Table Linens & Chair Covers",
    ],
  },
  {
    category: "Visual Equipment",
    items: [
      "LED Display Screens",
      "Projectors & Screens",
      "TV Monitors",
      "Video Switchers",
      "Camera Systems",
      "Live Streaming Setup",
    ],
  },
];

export default function EventEquipmentPackagesPage() {
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
              <h1 className="mb-4">Event Equipment Packages</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Professional event equipment rental packages for events of all sizes.
                From intimate gatherings to large-scale productions, we have everything you need.
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
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 flex flex-col ${
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

                  <div className="p-6 flex flex-col">
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
                      <p
                        className={`text-xs mt-1 font-semibold ${
                          pkg.highlighted ? "text-gray-200" : "text-accent"
                        }`}
                      >
                        {pkg.guestCount}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-4 text-sm ${
                        pkg.highlighted ? "text-gray-100" : "text-textGray"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
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
                        Book Now
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
                  Every event is unique. We can create a customized equipment package
                  tailored to your specific event requirements, venue, and budget.
                  Mix and match equipment from different categories.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Available Equipment */}
          <ScrollAnimation delay={400}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Available Equipment Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipmentCategories.map((category, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-lg">
                    <h4 className="font-bold text-accent mb-4 text-lg">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="text-sm text-textGray">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Add-ons */}
          <ScrollAnimation delay={500}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">Popular Add-Ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Generator Rental</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM800/day</p>
                  <p className="text-sm text-textGray">
                    Backup power supply for outdoor events or venues with limited power.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Additional Technicians</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM400/person</p>
                  <p className="text-sm text-textGray">
                    Extra technical staff for large events requiring more hands-on support.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Rehearsal Setup</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM1,500</p>
                  <p className="text-sm text-textGray">
                    Full equipment setup day before event for rehearsals and testing.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Custom Branding</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM2,000</p>
                  <p className="text-sm text-textGray">
                    Branded backdrops, stage skirting, and custom signage with your logo.
                  </p>
                </div>
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
