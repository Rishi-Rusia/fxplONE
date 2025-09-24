import React from "react";
import { motion } from "framer-motion";

const tours = [
  {
    title: "Bali Paradise Escape",
    description: "Experience serene beaches, lush rice terraces, and vibrant culture in Bali.",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    price: "$899",
    duration: "7 Days",
  },
  {
    title: "European Highlights",
    description: "Discover the magic of Paris, Rome, and Barcelona in one unforgettable trip.",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    price: "$1299",
    duration: "10 Days",
  },
  {
    title: "Safari Adventure Kenya",
    description: "Witness the Big Five up close on a guided safari through Kenya’s national parks.",
    image: "https://images.pexels.com/photos/2345091/pexels-photo-2345091.jpeg",
    price: "$1599",
    duration: "8 Days",
  },
];

export default function BestTours() {
  return (
    <section className="py-20 bg-white" id="tours">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Best Tours
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Carefully curated experiences designed to inspire your next journey.
          Discover breathtaking destinations, unique adventures, and timeless
          memories.
        </motion.p>

        {/* Tours Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-56 object-cover transform hover:scale-105 transition duration-700 ease-out"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  {tour.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-800 font-medium mb-5">
                  <span>{tour.price}</span>
                  <span>{tour.duration}</span>
                </div>
                <button className="w-full border border-black text-black font-medium py-2 rounded-lg hover:bg-black hover:text-white transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
