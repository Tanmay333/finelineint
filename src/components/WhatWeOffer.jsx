import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  const popularItems = [
    "Kitchen",
    "Luxurious Spaces",
    "Children's Room",
    "Custom Wardrobes",
    "Living Room",
    "Lighting Solutions",
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/6f/03/05/6f0305ed77d7b762a7644a55bff4f78b.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto px-2">
          {[
            "Kitchen",
            "Home Interiors",
            "Modular Designs",
            "Luxurious Spaces",
            "Children's Room",
            "Living Room",
            "Wooden Furniture",
            "Lighting Solutions",
            "Custom Wardrobes",
            "Ceiling Designs",
            "Wall Decor",
            "Outdoor Spaces",
          ].map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative backdrop-blur-lg bg-white/10 border border-white/30 text-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
            >
              {popularItems.includes(offer) && (
                <div className="absolute top-3 right-3 bg-[#D9B382] text-black text-xs px-3 py-1 rounded-full shadow-md font-semibold">
                  ⭐ Popular
                </div>
              )}

              <Link
                to={`/offers/${offer.toLowerCase().replace(/ /g, "-")}`}
                className="text-lg font-semibold mt-6 hover:text-[#D9B382] transition text-center"
              >
                {offer}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
