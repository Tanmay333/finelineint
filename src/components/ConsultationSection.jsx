import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ConsultationSection = () => {
  return (
    <>
      {/* Google Font Import */}
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <section
        className="relative w-full py-20 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/6f/03/05/6f0305ed77d7b762a7644a55bff4f78b.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

        {/* Left - Text */}
        <div className="relative z-10 w-full md:w-1/2 text-center md:text-right mt-10 md:mt-0">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light italic text-white leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Think you can't afford beautiful interior design?
          </h2>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D9B382] mt-3">
            Think again.
          </h2>

          <Link to="/consultation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-[#D9B382] text-black text-lg sm:text-xl font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-lg shadow-lg border border-[#b89668] hover:bg-[#b89668] transition"
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </div>

        {/* Right - Image */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/86/e3/82/86e382472d490bcab003ce28576d7077.jpg"
            alt="Interior Design"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default ConsultationSection;
