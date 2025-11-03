"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import GlobalCTA from "@/components/GlobalCTA";
import PDFViewer from "@/components/PDFViewer";
import Link from "next/link";

const packages = [
  {
    name: "Starter Package",
    price: "2,500",
    duration: "Half Day (4 hours)",
    description: "Perfect for small gatherings, birthday parties, and intimate events",
    features: [
      "5 carnival games of your choice",
      "1 staff to manage games",
      "Basic setup & breakdown",
      "Suitable for 50-100 guests",
      "Game prizes included (basic tier)",
      "Delivery within KK area",
      "4 hours rental period",
    ],
    highlighted: false,
    guestCount: "50-100 guests",
    pdfUrl: "/packages/game-rental-starter.pdf",
  },
  {
    name: "Standard Package",
    price: "6,800",
    duration: "Full Day (8 hours)",
    description: "Ideal for corporate events, school functions, and community gatherings",
    features: [
      "10 carnival games of your choice",
      "3 interactive game stations",
      "2 staff members to manage games",
      "Professional setup & breakdown",
      "Suitable for 100-300 guests",
      "Premium game prizes included",
      "Delivery across Sabah",
      "8 hours rental period",
      "Game scoreboard system",
      "Photo booth add-on available",
    ],
    highlighted: true,
    badge: "Most Popular",
    guestCount: "100-300 guests",
    pdfUrl: "/packages/game-rental-standard.pdf",
  },
  {
    name: "Deluxe Package",
    price: "15,000",
    duration: "Full Day + (10 hours)",
    description: "Complete entertainment solution for large festivals, exhibitions, and major events",
    features: [
      "20 carnival games & attractions",
      "5 premium interactive game stations",
      "Giant inflatable games (2 units)",
      "Virtual reality gaming zone",
      "4 staff members + 1 coordinator",
      "Professional setup with custom branding",
      "Suitable for 300-1000 guests",
      "Deluxe prize packages",
      "Delivery & setup across Sabah & Sarawak",
      "10 hours rental period",
      "Digital leaderboard system",
      "Professional photo booth included",
      "Social media content creation support",
      "Insurance coverage included",
    ],
    highlighted: false,
    guestCount: "300-1000 guests",
    pdfUrl: "/packages/game-rental-deluxe.pdf",
  },
];

const gameCategories = [
  {
    category: "Carnival Games",
    games: [
      "Ring Toss",
      "Balloon Darts",
      "Basketball Shoot",
      "Can Knockdown",
      "Bean Bag Toss",
      "Duck Pond",
    ],
  },
  {
    category: "Interactive Games",
    games: [
      "Giant Jenga",
      "Giant Connect Four",
      "Foosball Table",
      "Air Hockey",
      "Table Tennis",
      "Arcade Machines",
    ],
  },
  {
    category: "Inflatable Games",
    games: [
      "Bouncy Castle",
      "Obstacle Course",
      "Inflatable Slide",
      "Gladiator Arena",
      "Bungee Run",
      "Mechanical Bull",
    ],
  },
  {
    category: "Tech Games",
    games: [
      "VR Gaming Stations",
      "Racing Simulators",
      "PlayStation/Xbox Setup",
      "Nintendo Switch Stations",
      "Motion Sensor Games",
      "Interactive Projection Games",
    ],
  },
];

export default function GameRentalPackagesPage() {
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
              <h1 className="mb-4">Game Rental Packages</h1>
              <p className="text-textGray max-w-2xl mx-auto">
                Make your event unforgettable with our comprehensive game rental packages.
                From classic carnival games to cutting-edge interactive entertainment.
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
                  Mix and match games from different categories, extend rental hours,
                  or add special equipment. We'll create the perfect package for your event!
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Request Custom Package
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Available Games */}
          <ScrollAnimation delay={400}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Available Games & Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gameCategories.map((category, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-lg">
                    <h4 className="font-bold text-accent mb-4 text-lg">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.games.map((game, idx) => (
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
                          <span className="text-sm text-textGray">{game}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Extended Hours</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM500/hour</p>
                  <p className="text-sm text-textGray">
                    Need more time? Extend your rental period at a discounted hourly rate.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Additional Staff</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM300/staff</p>
                  <p className="text-sm text-textGray">
                    Extra staff members to ensure smooth game operations and guest assistance.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-accent transition-all">
                  <h4 className="font-bold mb-2">Custom Branding</h4>
                  <p className="text-2xl font-bold text-accent mb-2">RM1,200</p>
                  <p className="text-sm text-textGray">
                    Brand game stations with your logo and colors for a cohesive event experience.
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
