"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

const equipmentInventory = [
  // Canopy
  {
    id: 1,
    name: "Standard White Canopy",
    type: "Canopy",
    size: "10ft x 10ft",
    capacity: "8-10 people",
    price: "RM 150/day",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Large Event Canopy",
    type: "Canopy",
    size: "20ft x 20ft",
    capacity: "30-40 people",
    price: "RM 400/day",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Premium Marquee Tent",
    type: "Canopy",
    size: "40ft x 60ft",
    capacity: "200+ people",
    price: "RM 2,500/day",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Gazebo Canopy",
    type: "Canopy",
    size: "12ft x 12ft",
    capacity: "10-15 people",
    price: "RM 200/day",
    image: "https://images.unsplash.com/photo-1530221568434-ee716d54fa78?w=800&h=600&fit=crop",
  },

  // Chairs
  {
    id: 5,
    name: "Plastic Banquet Chair",
    type: "Chair",
    size: "Standard size",
    capacity: "Per unit",
    price: "RM 5/day",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Chiavari Chair (Gold/Silver)",
    type: "Chair",
    size: "Premium style",
    capacity: "Per unit",
    price: "RM 12/day",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    name: "Folding Chair with Cushion",
    type: "Chair",
    size: "Padded comfort",
    capacity: "Per unit",
    price: "RM 8/day",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    name: "VIP Lounge Chair",
    type: "Chair",
    size: "Luxury seating",
    capacity: "Per unit",
    price: "RM 25/day",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  },

  // Tables
  {
    id: 9,
    name: "Round Banquet Table",
    type: "Table",
    size: "5ft diameter",
    capacity: "8-10 seats",
    price: "RM 35/day",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    name: "Rectangular Conference Table",
    type: "Table",
    size: "6ft x 3ft",
    capacity: "6-8 seats",
    price: "RM 30/day",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
  },
  {
    id: 11,
    name: "Cocktail High Table",
    type: "Table",
    size: "3ft diameter",
    capacity: "Standing 4-6",
    price: "RM 25/day",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop",
  },
  {
    id: 12,
    name: "Registration Counter Table",
    type: "Table",
    size: "8ft x 2.5ft",
    capacity: "Registration use",
    price: "RM 40/day",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
  },

  // Stage
  {
    id: 13,
    name: "Small Modular Stage",
    type: "Stage",
    size: "8ft x 8ft",
    capacity: "Small events",
    price: "RM 300/day",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
  },
  {
    id: 14,
    name: "Medium Stage Platform",
    type: "Stage",
    size: "16ft x 12ft",
    capacity: "Medium events",
    price: "RM 600/day",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
  },
  {
    id: 15,
    name: "Large Event Stage",
    type: "Stage",
    size: "24ft x 20ft",
    capacity: "Large events",
    price: "RM 1,200/day",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
  },
  {
    id: 16,
    name: "Complete Stage Setup with Backdrop",
    type: "Stage",
    size: "20ft x 16ft + backdrop",
    capacity: "Corporate events",
    price: "RM 1,800/day",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },

  // LED Screen
  {
    id: 17,
    name: "Indoor LED Screen",
    type: "LED Screen",
    size: "6ft x 4ft",
    capacity: "Small to medium venue",
    price: "RM 800/day",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 18,
    name: "Outdoor LED Screen",
    type: "LED Screen",
    size: "10ft x 8ft",
    capacity: "Large outdoor events",
    price: "RM 1,500/day",
    image: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=800&h=600&fit=crop",
  },
  {
    id: 19,
    name: "Premium HD LED Wall",
    type: "LED Screen",
    size: "16ft x 10ft",
    capacity: "Concert/festival",
    price: "RM 3,000/day",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
  },
  {
    id: 20,
    name: "Mobile LED Screen Truck",
    type: "LED Screen",
    size: "12ft x 8ft (mobile)",
    capacity: "Roadshow/activation",
    price: "RM 2,500/day",
    image: "https://images.unsplash.com/photo-1531190260877-c8d11eb5afaf?w=800&h=600&fit=crop",
  },

  // Sound and Light
  {
    id: 21,
    name: "Basic Sound System",
    type: "Sound and Light",
    size: "2 speakers + mixer",
    capacity: "50-100 people",
    price: "RM 350/day",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
  },
  {
    id: 22,
    name: "Professional PA System",
    type: "Sound and Light",
    size: "4 speakers + subwoofer",
    capacity: "200-500 people",
    price: "RM 800/day",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    id: 23,
    name: "Concert Sound System",
    type: "Sound and Light",
    size: "Line array + full setup",
    capacity: "1000+ people",
    price: "RM 3,500/day",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop",
  },
  {
    id: 24,
    name: "Basic Lighting Package",
    type: "Sound and Light",
    size: "LED PAR lights (8pcs)",
    capacity: "Small events",
    price: "RM 400/day",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
  },
  {
    id: 25,
    name: "Professional Stage Lighting",
    type: "Sound and Light",
    size: "Moving heads + effects",
    capacity: "Medium to large events",
    price: "RM 1,200/day",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
  },
  {
    id: 26,
    name: "Complete Sound & Light Setup",
    type: "Sound and Light",
    size: "Full production package",
    capacity: "Large scale events",
    price: "RM 5,000/day",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
  },
];

export default function EventEquipmentPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const equipmentTypes = [
    "All",
    "Canopy",
    "Chair",
    "Table",
    "Stage",
    "LED Screen",
    "Sound and Light",
  ];

  const filteredEquipment = equipmentInventory.filter((item) => {
    const typeMatch = selectedType === "All" || item.type === selectedType;
    const searchMatch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && searchMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Event Equipment Rental</h1>
              <p className="text-textGray max-w-2xl mx-auto mb-6">
                Explore our comprehensive range of event equipment available for
                rent. From canopies and furniture to stages, LED screens, and
                sound systems — everything you need for a successful event.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <Link
                href="/event-equipment/packages"
                className="btn-primary inline-block"
              >
                View Package Pricing
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filters & Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <ScrollAnimation>
            <div className="mb-8 bg-secondary p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Bar */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Search Equipment
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name or type..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2.5 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <svg
                      className="absolute left-3 top-3 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Equipment Type Dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Equipment Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    {equipmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4">
                <div className="text-sm text-textGray font-medium">
                  Showing {filteredEquipment.length} items
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map((item, index) => (
              <ScrollAnimation
                key={item.id}
                animation="scale-in"
                delay={index * 50}
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative bg-gray-200 h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Type Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2 text-accent group-hover:text-gray-900 transition-colors">
                      {item.name}
                    </h3>
                    <div className="space-y-1 mb-3">
                      <p className="text-xs text-textGray flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                        {item.size}
                      </p>
                      <p className="text-xs text-textGray flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {item.capacity}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold text-sm">
                        {item.price}
                      </span>
                      <Link
                        href="/contact"
                        className="text-xs bg-accent text-white px-3 py-1.5 rounded hover:bg-gray-800 transition-colors"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* No Results */}
          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textGray">
                No equipment found matching your search.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Equipment Packages */}
            <ScrollAnimation delay={100}>
              <div className="bg-accent text-white p-8 rounded-lg h-full">
                <h3 className="mb-3 text-white">Event Packages</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Save time and money with our bundled event packages. Perfect
                  for various event types and budgets.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
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
                    <span>Basic Event Package: Canopy + Tables + Chairs</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
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
                    <span>Premium Package: Stage + Sound + Lighting</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
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
                    <span>Complete Event Setup: All equipment included</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
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
                    <span>Custom Packages: Mix and match your needs</span>
                  </li>
                </ul>
                <Link
                  href="/event-equipment/packages"
                  className="inline-block bg-white text-accent px-6 py-2.5 text-sm rounded-md hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Package Pricing
                </Link>
              </div>
            </ScrollAnimation>

            {/* Need Help */}
            <ScrollAnimation delay={200}>
              <div className="bg-secondary p-8 rounded-lg h-full">
                <h3 className="mb-3">Need Expert Assistance?</h3>
                <p className="text-textGray mb-6 text-sm">
                  Our experienced team can help you plan and execute your event
                  perfectly. Contact us for personalized recommendations and
                  full event support.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
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
                    <span>Free consultation on equipment selection</span>
                  </li>
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
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
                    <span>Professional setup and installation</span>
                  </li>
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
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
                    <span>On-site technical support available</span>
                  </li>
                  <li className="flex items-start text-sm text-textGray">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-accent"
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
                    <span>Flexible rental terms and delivery</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary inline-block">
                  Contact Our Team
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
