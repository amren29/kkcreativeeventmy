"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

const gameInventory = [
  // Arcade Games
  {
    id: 1,
    name: "Claw Machine",
    type: "Arcade Games",
    size: "Standard size",
    capacity: "1 player",
    price: "RM 400/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 2,
    name: "Air Hockey Table",
    type: "Arcade Games",
    size: "6ft x 3ft",
    capacity: "2 players",
    price: "RM 350/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 3,
    name: "Basketball Arcade",
    type: "Arcade Games",
    size: "Standard arcade size",
    capacity: "1-2 players",
    price: "RM 450/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 4,
    name: "Racing Simulator",
    type: "Arcade Games",
    size: "Racing seat + screen",
    capacity: "1 player",
    price: "RM 600/day",
    image: "/placeholder-game.jpg",
  },

  // Carnival Games
  {
    id: 5,
    name: "Ring Toss Game",
    type: "Carnival Games",
    size: "Portable booth",
    capacity: "Multiple players",
    price: "RM 200/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 6,
    name: "Bean Bag Toss",
    type: "Carnival Games",
    size: "Foldable boards",
    capacity: "2-4 players",
    price: "RM 150/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 7,
    name: "Giant Jenga",
    type: "Carnival Games",
    size: "4ft tall blocks",
    capacity: "2+ players",
    price: "RM 180/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 8,
    name: "Balloon Dart Board",
    type: "Carnival Games",
    size: "Wall-mounted board",
    capacity: "Multiple players",
    price: "RM 250/day",
    image: "/placeholder-game.jpg",
  },

  // Sports Games
  {
    id: 9,
    name: "Foosball Table",
    type: "Sports Games",
    size: "5ft x 3ft",
    capacity: "2-4 players",
    price: "RM 300/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 10,
    name: "Pool Table",
    type: "Sports Games",
    size: "7ft standard",
    capacity: "2 players",
    price: "RM 500/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 11,
    name: "Table Tennis Set",
    type: "Sports Games",
    size: "Full size table",
    capacity: "2-4 players",
    price: "RM 350/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 12,
    name: "Mini Golf Set",
    type: "Sports Games",
    size: "9-hole course",
    capacity: "Multiple players",
    price: "RM 800/day",
    image: "/placeholder-game.jpg",
  },

  // Interactive Games
  {
    id: 13,
    name: "VR Gaming Station",
    type: "Interactive Games",
    size: "VR headset + controllers",
    capacity: "1 player",
    price: "RM 700/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 14,
    name: "Gaming Console Setup (PS5/Xbox)",
    type: "Interactive Games",
    size: "Console + TV + controllers",
    capacity: "1-4 players",
    price: "RM 400/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 15,
    name: "Dance Machine",
    type: "Interactive Games",
    size: "Dance pad + screen",
    capacity: "1-2 players",
    price: "RM 550/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 16,
    name: "Photo Booth with Props",
    type: "Interactive Games",
    size: "Booth + camera + printer",
    capacity: "Multiple users",
    price: "RM 600/day",
    image: "/placeholder-game.jpg",
  },

  // Bouncy & Inflatable
  {
    id: 17,
    name: "Inflatable Bouncy Castle",
    type: "Bouncy & Inflatable",
    size: "15ft x 15ft",
    capacity: "5-8 kids",
    price: "RM 500/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 18,
    name: "Obstacle Course Inflatable",
    type: "Bouncy & Inflatable",
    size: "30ft x 12ft",
    capacity: "Multiple participants",
    price: "RM 1,200/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 19,
    name: "Inflatable Slide",
    type: "Bouncy & Inflatable",
    size: "20ft height",
    capacity: "1 at a time",
    price: "RM 800/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 20,
    name: "Bubble Soccer Set",
    type: "Bouncy & Inflatable",
    size: "6-10 bubble suits",
    capacity: "6-10 players",
    price: "RM 900/day",
    image: "/placeholder-game.jpg",
  },

  // Board & Party Games
  {
    id: 21,
    name: "Giant Chess Set",
    type: "Board & Party Games",
    size: "3ft pieces",
    capacity: "2 players",
    price: "RM 250/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 22,
    name: "Giant Connect Four",
    type: "Board & Party Games",
    size: "4ft tall",
    capacity: "2 players",
    price: "RM 200/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 23,
    name: "Karaoke System",
    type: "Board & Party Games",
    size: "Screen + microphones",
    capacity: "Multiple singers",
    price: "RM 450/day",
    image: "/placeholder-game.jpg",
  },
  {
    id: 24,
    name: "Board Games Package",
    type: "Board & Party Games",
    size: "10+ popular games",
    capacity: "Various",
    price: "RM 150/day",
    image: "/placeholder-game.jpg",
  },
];

export default function GameRentalPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const gameTypes = [
    "All",
    "Arcade Games",
    "Carnival Games",
    "Sports Games",
    "Interactive Games",
    "Bouncy & Inflatable",
    "Board & Party Games",
  ];

  const filteredGames = gameInventory.filter((item) => {
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
              <h1 className="mb-4">Game Rental</h1>
              <p className="text-textGray max-w-2xl mx-auto mb-6">
                Make your event unforgettable with our exciting game rental
                collection. From arcade classics to interactive experiences,
                we have everything to keep your guests entertained.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <Link
                href="/game-rental/packages"
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
                    Search Games
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

                {/* Game Type Dropdown */}
                <div>
                  <label className="block text-sm font-bold mb-2 text-accent">
                    Game Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    {gameTypes.map((type) => (
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
                  Showing {filteredGames.length} items
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((item, index) => (
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
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <p className="text-textGray">
                No games found matching your search.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Game Packages */}
            <ScrollAnimation delay={100}>
              <div className="bg-accent text-white p-8 rounded-lg h-full">
                <h3 className="mb-3 text-white">Game Packages</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Bundle multiple games for better value. Perfect for parties,
                  corporate events, and family days.
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
                    <span>Kids Party Package: Bouncy castle + carnival games</span>
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
                    <span>Corporate Package: VR + arcade + sports games</span>
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
                    <span>Festival Package: Multiple stations and games</span>
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
                    <span>Custom Packages: Mix and match your favorites</span>
                  </li>
                </ul>
                <Link
                  href="/game-rental/packages"
                  className="inline-block bg-white text-accent px-6 py-2.5 text-sm rounded-md hover:bg-gray-100 transition-all duration-300 font-medium"
                >
                  View Package Pricing
                </Link>
              </div>
            </ScrollAnimation>

            {/* Need Help */}
            <ScrollAnimation delay={200}>
              <div className="bg-secondary p-8 rounded-lg h-full">
                <h3 className="mb-3">Need Event Planning Help?</h3>
                <p className="text-textGray mb-6 text-sm">
                  Our team can help you select the perfect games for your event
                  type and audience. We provide full setup and support.
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
                    <span>Free consultation on game selection</span>
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
                    <span>Delivery, setup, and breakdown included</span>
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
                    <span>Staff assistance available upon request</span>
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
                    <span>Safe, clean, and well-maintained equipment</span>
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
