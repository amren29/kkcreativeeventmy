"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

const mediaInventory = [
  // Sabah - Billboards
  {
    id: 1,
    name: "Kota Kinabalu City Centre Billboard",
    type: "Billboard",
    location: "Sabah",
    area: "Kota Kinabalu",
    size: "20ft x 40ft",
    traffic: "High Traffic",
    price: "RM 5,000/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 2,
    name: "Queen Elizabeth Hospital Billboard",
    type: "Billboard",
    location: "Sabah",
    area: "Kota Kinabalu",
    size: "15ft x 30ft",
    traffic: "Medium Traffic",
    price: "RM 3,500/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 3,
    name: "Penampang Highway Billboard",
    type: "Billboard",
    location: "Sabah",
    area: "Penampang",
    size: "20ft x 40ft",
    traffic: "High Traffic",
    price: "RM 4,500/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 4,
    name: "Sandakan Town Billboard",
    type: "Billboard",
    location: "Sabah",
    area: "Sandakan",
    size: "15ft x 30ft",
    traffic: "Medium Traffic",
    price: "RM 3,000/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 5,
    name: "Tawau Central Billboard",
    type: "Billboard",
    location: "Sabah",
    area: "Tawau",
    size: "20ft x 40ft",
    traffic: "High Traffic",
    price: "RM 4,000/month",
    image: "/placeholder-billboard.jpg",
  },

  // Sabah - LED Billboards
  {
    id: 6,
    name: "Imago Shopping Mall LED",
    type: "LED Billboard",
    location: "Sabah",
    area: "Kota Kinabalu",
    size: "15ft x 20ft",
    traffic: "Very High Traffic",
    price: "RM 8,000/month",
    image: "/placeholder-led.jpg",
  },
  {
    id: 7,
    name: "1Borneo LED Billboard",
    type: "LED Billboard",
    location: "Sabah",
    area: "Kota Kinabalu",
    size: "20ft x 30ft",
    traffic: "Very High Traffic",
    price: "RM 10,000/month",
    image: "/placeholder-led.jpg",
  },
  {
    id: 8,
    name: "Gaya Street LED Display",
    type: "LED Billboard",
    location: "Sabah",
    area: "Kota Kinabalu",
    size: "10ft x 15ft",
    traffic: "High Traffic",
    price: "RM 6,500/month",
    image: "/placeholder-led.jpg",
  },

  // Sabah - Street Buntings
  {
    id: 9,
    name: "KK City Centre Street Bunting",
    type: "Street Bunting",
    location: "Sabah",
    area: "Kota Kinabalu",
    size: "3ft x 8ft (per unit)",
    traffic: "High Traffic",
    price: "RM 500/month (min 10 units)",
    image: "/placeholder-bunting.jpg",
  },
  {
    id: 10,
    name: "Penampang Main Road Bunting",
    type: "Street Bunting",
    location: "Sabah",
    area: "Penampang",
    size: "3ft x 8ft (per unit)",
    traffic: "Medium Traffic",
    price: "RM 400/month (min 10 units)",
    image: "/placeholder-bunting.jpg",
  },

  // Sarawak - Billboards
  {
    id: 11,
    name: "Kuching City Billboard",
    type: "Billboard",
    location: "Sarawak",
    area: "Kuching",
    size: "20ft x 40ft",
    traffic: "High Traffic",
    price: "RM 5,500/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 12,
    name: "Miri Commercial Area Billboard",
    type: "Billboard",
    location: "Sarawak",
    area: "Miri",
    size: "15ft x 30ft",
    traffic: "Medium Traffic",
    price: "RM 3,800/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 13,
    name: "Sibu Town Centre Billboard",
    type: "Billboard",
    location: "Sarawak",
    area: "Sibu",
    size: "20ft x 40ft",
    traffic: "High Traffic",
    price: "RM 4,200/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 14,
    name: "Bintulu Highway Billboard",
    type: "Billboard",
    location: "Sarawak",
    area: "Bintulu",
    size: "15ft x 30ft",
    traffic: "Medium Traffic",
    price: "RM 3,200/month",
    image: "/placeholder-billboard.jpg",
  },

  // Sarawak - LED Billboards
  {
    id: 15,
    name: "Vivacity Megamall LED",
    type: "LED Billboard",
    location: "Sarawak",
    area: "Kuching",
    size: "15ft x 20ft",
    traffic: "Very High Traffic",
    price: "RM 9,000/month",
    image: "/placeholder-led.jpg",
  },
  {
    id: 16,
    name: "Kuching Waterfront LED",
    type: "LED Billboard",
    location: "Sarawak",
    area: "Kuching",
    size: "20ft x 30ft",
    traffic: "Very High Traffic",
    price: "RM 11,000/month",
    image: "/placeholder-led.jpg",
  },
  {
    id: 17,
    name: "Miri City Fan LED Display",
    type: "LED Billboard",
    location: "Sarawak",
    area: "Miri",
    size: "12ft x 18ft",
    traffic: "High Traffic",
    price: "RM 7,000/month",
    image: "/placeholder-led.jpg",
  },

  // Sarawak - Street Buntings
  {
    id: 18,
    name: "Kuching Main Bazaar Bunting",
    type: "Street Bunting",
    location: "Sarawak",
    area: "Kuching",
    size: "3ft x 8ft (per unit)",
    traffic: "High Traffic",
    price: "RM 550/month (min 10 units)",
    image: "/placeholder-bunting.jpg",
  },
  {
    id: 19,
    name: "Miri Downtown Bunting",
    type: "Street Bunting",
    location: "Sarawak",
    area: "Miri",
    size: "3ft x 8ft (per unit)",
    traffic: "Medium Traffic",
    price: "RM 450/month (min 10 units)",
    image: "/placeholder-bunting.jpg",
  },

  // Labuan - Billboards
  {
    id: 20,
    name: "Labuan Town Centre Billboard",
    type: "Billboard",
    location: "Labuan",
    area: "Labuan Town",
    size: "15ft x 30ft",
    traffic: "Medium Traffic",
    price: "RM 3,000/month",
    image: "/placeholder-billboard.jpg",
  },
  {
    id: 21,
    name: "Financial Park Labuan Billboard",
    type: "Billboard",
    location: "Labuan",
    area: "Financial Park",
    size: "20ft x 40ft",
    traffic: "High Traffic",
    price: "RM 4,000/month",
    image: "/placeholder-billboard.jpg",
  },

  // Labuan - LED Billboards
  {
    id: 22,
    name: "Labuan Plaza LED",
    type: "LED Billboard",
    location: "Labuan",
    area: "Labuan Town",
    size: "12ft x 18ft",
    traffic: "High Traffic",
    price: "RM 6,000/month",
    image: "/placeholder-led.jpg",
  },

  // Labuan - Street Buntings
  {
    id: 23,
    name: "Labuan Main Road Bunting",
    type: "Street Bunting",
    location: "Labuan",
    area: "Labuan Town",
    size: "3ft x 8ft (per unit)",
    traffic: "Medium Traffic",
    price: "RM 400/month (min 10 units)",
    image: "/placeholder-bunting.jpg",
  },
];

export default function MediaPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mediaTypes = ["All", "Billboard", "LED Billboard", "Street Bunting"];
  const locations = ["All", "Sabah", "Sarawak", "Labuan"];

  const filteredMedia = mediaInventory.filter((item) => {
    const typeMatch = selectedType === "All" || item.type === selectedType;
    const locationMatch =
      selectedLocation === "All" || item.location === selectedLocation;
    const searchMatch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.area.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && locationMatch && searchMatch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4">Browse Media Locations</h1>
              <p className="text-textGray max-w-2xl mx-auto mb-6">
                Explore our extensive inventory of billboards, LED displays, and
                street buntings across Sabah, Sarawak, and Labuan. Find the
                perfect location for your advertising campaign.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <Link
                href="/media/packages"
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
                <div className="md:col-span-3">
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Search Locations
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name or area..."
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

                {/* Media Type Dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Media Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    {mediaTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Results Count */}
                <div className="flex items-end">
                  <div className="text-sm text-textGray font-medium">
                    Showing {filteredMedia.length} locations
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map((item, index) => (
              <ScrollAnimation
                key={item.id}
                animation="scale-in"
                delay={index * 50}
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
                    <div className="text-gray-400 text-center p-4">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-xs">{item.type}</p>
                    </div>
                    {/* Type Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                    {/* Traffic Badge */}
                    <div className="absolute top-2 right-2">
                      <span className="bg-white text-accent text-xs px-2 py-1 rounded shadow-sm">
                        {item.traffic}
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.area}, {item.location}
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
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                        {item.size}
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
          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textGray">
                No media locations found matching your filters.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Media Packages */}
            <ScrollAnimation delay={100}>
              <div className="bg-accent text-white p-8 rounded-lg h-full">
                <h3 className="mb-3 text-white">Media Packages</h3>
                <p className="text-white/90 mb-6">
                  Get more value with our bundled media packages. Perfect for
                  comprehensive campaigns across multiple locations.
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
                    <span>City-Wide Package: Multiple locations in one city</span>
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
                    <span>Regional Package: Coverage across Sabah/Sarawak</span>
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
                    <span>East Malaysia Package: Complete regional coverage</span>
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
                    <span>Mix & Match: Combine different media types</span>
                  </li>
                </ul>
                <Link
                  href="/media/packages"
                  className="inline-block bg-white text-accent px-6 py-2.5 text-sm rounded-md hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Package Pricing
                </Link>
              </div>
            </ScrollAnimation>

            {/* Need Help */}
            <ScrollAnimation delay={200}>
              <div className="bg-secondary p-8 rounded-lg h-full">
                <h3 className="mb-3">Need Help Finding the Right Location?</h3>
                <p className="text-textGray mb-6">
                  Our team can help you select the perfect media locations for
                  your campaign goals and budget. Contact us for personalized
                  recommendations.
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
                    <span>Free consultation on location selection</span>
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
                    <span>Traffic analysis and ROI estimates</span>
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
                    <span>Custom campaign planning</span>
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
                    <span>Creative design support available</span>
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
