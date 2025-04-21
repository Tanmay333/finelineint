import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Ishita Verma",
    location: "Pune, India",
    challenge:
      "I wanted a vibrant kids' room that would grow with my children.",
    result:
      "The room is playful and colorful, but also smart and adaptable as they grow. Absolutely love it!",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/50/07/7f/50077f1f0ff04b0d3919cae1b4c9cb6d.jpg",
  },
  {
    name: "Sneha Deshmukh",
    location: "Nagpur, India",
    challenge:
      "I moved into a new home and needed help coming up with a living room design that felt cozy yet modern.",
    result:
      "My living room now feels complete! The design perfectly matches my style. Thank you for your hard work!",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/6f/03/05/6f0305ed77d7b762a7644a55bff4f78b.jpg",
  },
  {
    name: "Aarav Sharma",
    location: "Hyderabad, India",
    challenge:
      "I struggled with making my small apartment feel spacious and stylish at the same time.",
    result:
      "The team created an open, airy design that makes my apartment look much bigger than before!",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/d1/9f/64/d19f648e4ff59407d13b289ef13d94bd.jpg",
  },
  {
    name: "Divya Patel",
    location: "Kolkata, India",
    challenge:
      "I needed a luxurious yet functional kitchen redesign that would fit my family’s needs.",
    result:
      "Now, my kitchen is both elegant and practical. Cooking has become a joy again!",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/34/b1/e4/34b1e4808cadf3ca77587895d0bdfd06.jpg",
  },
  {
    name: "Rohan Mehta",
    location: "Delhi, India",
    challenge:
      "My workspace was uninspiring, and I found it hard to concentrate.",
    result:
      "They turned my cluttered corner into a modern home office with great lighting and comfort!",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/8b/bc/b4/8bbcb45e09456f97cc1a23bb936c6d7b.jpg",
  },
  {
    name: "Aditya Kulkarni",
    location: "Pune, India",
    challenge:
      "I was launching my first café and wanted an interior that would stand out from the crowd yet feel warm and welcoming.",
    result:
      "The space is now an Instagram-worthy blend of industrial and cozy! Customers love the vibe, and we've seen a huge increase in walk-ins since opening.",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/e6/02/bf/e602bf3396fa7857af07734e8118026e.jpg",
  },
  {
    name: "Meera Iyer",
    location: "Bengaluru, India",
    challenge:
      "I wanted to renovate my ancestral home without losing its charm.",
    result:
      "They honored the heritage while giving it a sleek, modern refresh. My family is overjoyed!",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/e2/73/c1/e273c1b4c9e1b8c1664a7d0640d74be4.jpg",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/6f/03/05/6f0305ed77d7b762a7644a55bff4f78b.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Client Stories
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 max-w-md h-[400px] sm:h-[440px] mx-auto rounded-xl overflow-hidden bg-white/10 backdrop-blur-md shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={reviews[index].image}
                src={reviews[index].image}
                alt="Customer"
                className="w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center text-white text-left w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[index].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {/* Challenge */}
                <div className="relative bg-white/10 p-5 rounded-lg shadow-lg backdrop-blur-md mb-4">
                  <h4 className="text-base sm:text-lg font-medium text-white uppercase tracking-wide mb-2">
                    Client Challenge
                  </h4>
                  <p className="text-sm text-gray-200 italic leading-relaxed">
                    "{reviews[index].challenge}"
                  </p>
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 rounded-l-lg"></div>
                </div>

                {/* Result */}
                <div className="relative bg-white/10 p-5 rounded-lg shadow-lg backdrop-blur-md mb-5">
                  <h4 className="text-base sm:text-lg font-medium text-white uppercase tracking-wide mb-2">
                    Result
                  </h4>
                  <p className="text-sm text-gray-200 italic leading-relaxed">
                    "{reviews[index].result}"
                  </p>
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 rounded-l-lg"></div>
                </div>

                {/* Name & Location */}
                <div className="flex justify-end items-center">
                  <div className="text-right">
                    <h3 className="text-md font-semibold text-gray-100">
                      {reviews[index].name}
                    </h3>
                    <p className="text-xs text-gray-300">
                      {reviews[index].location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-end items-center gap-1 mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 text-lg ${
                        i < Math.floor(reviews[index].rating)
                          ? ""
                          : "opacity-50"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Button */}
            <button
              onClick={nextReview}
              className="mt-6 px-6 py-3 bg-white text-[#8B5E3C] font-medium rounded-full shadow-lg hover:bg-[#f5f5f5] transition duration-300 self-center md:self-start"
            >
              Next Story →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
