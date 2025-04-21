import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      name: "Aarav Sharma",
      rating: 5,
      location: "Hyderabad, India",
      message:
        "Absolutely loved the work! Professional and creative. Highly recommended.",
    },
    {
      name: "Sana Khan",
      rating: 4,
      location: "Guwahati, India",
      message:
        "Great attention to detail and timely delivery. Would work again!",
    },
    {
      name: "Rohit Mehra",
      rating: 5,
      location: "Pune, India",
      message:
        "Incredible experience. From communication to execution, flawless.",
    },
    {
      name: "Divya Patel",
      rating: 4,
      location: "Kolkata, India",
      message: "Smooth collaboration and beautiful UI results!",
    },
    {
      name: "Neha Kapoor",
      rating: 5,
      location: "Bangalore, India",
      message:
        "The living room makeover was beyond my expectations. The color palette and furniture choice were spot on!",
    },
    {
      name: "Imran Shaikh",
      rating: 4,
      location: "Pune, India",
      message:
        "Loved the modern kitchen design. Space optimization was handled brilliantly!",
    },
    {
      name: "Ritika Joshi",
      rating: 5,
      location: "Nashik, India",
      message:
        "Very professional. They transformed our empty apartment into a cozy, stylish home.",
    },
    {
      name: "Karan Malhotra",
      rating: 4,
      location: "Chandigarh, India",
      message:
        "They understood our vision and gave it life with elegant and functional interiors.",
    },
    {
      name: "Sneha Deshmukh",
      rating: 5,
      location: "Nagpur, India",
      message:
        "Furniture quality and overall aesthetics were perfect. Highly recommend for custom interior projects!",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f3] px-4 sm:px-6 py-10 sm:py-12 md:py-14">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D9B382] mb-1 sm:mb-2">
          Client Reviews
        </h2>
        <p className="text-gray-600 text-base sm:text-lg px-2">
          Here's what some of my awesome clients say about working with me.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {reviews.map((rev, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 pt-10 sm:pt-12 shadow-md sm:shadow-lg md:shadow-xl border-l-2 sm:border-l-4 border-[#D9B382] hover:shadow-xl sm:hover:shadow-2xl transition duration-300"
          >
            {/* Location Badge - Responsive sizing */}
            <div className="absolute top-0 right-0 bg-[#D9B382] text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-tr-lg sm:rounded-tr-xl rounded-bl-lg sm:rounded-bl-xl flex items-center gap-0.5 sm:gap-1 shadow-md">
              <FaMapMarkerAlt className="text-xs sm:text-sm" />
              <span className="text-xs truncate max-w-24 sm:max-w-full">
                {rev.location}
              </span>
            </div>

            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mr-2">
                {rev.name}
              </h3>
              <div className="flex flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm sm:text-base ${
                      i < rev.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600">{rev.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
