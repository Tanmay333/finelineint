import {
  FaUserTie,
  FaCubes,
  FaDraftingCompass,
  FaHardHat,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/6f/03/05/6f0305ed77d7b762a7644a55bff4f78b.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif tracking-wide uppercase">
          How It Works
        </h2>
        <p className="text-base sm:text-lg mt-3 text-gray-300">
          Simple steps to achieve your dream interior design.
        </p>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {[
            {
              icon: <FaUserTie className="text-5xl text-gray-100 mb-4" />,
              title: "Consult with Director",
              desc: "Schedule a free consultation with director.",
            },
            {
              icon: <FaCubes className="text-5xl text-gray-100 mb-4" />,
              title: "Get a 3D Concept",
              desc: "Visualize your space with a custom 3D interior design model.",
            },
            {
              icon: (
                <FaDraftingCompass className="text-5xl text-gray-100 mb-4" />
              ),
              title: "Visualization & Planning",
              desc: "Refine your ideas and plan every detail before execution.",
            },
            {
              icon: <FaHardHat className="text-5xl text-gray-100 mb-4" />,
              title: "Construction & Execution",
              desc: "Our team brings your dream interior to life with perfection.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full max-w-xs p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg transition transform hover:-translate-y-2"
            >
              {item.icon}
              <h3 className="text-lg sm:text-xl font-semibold mt-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
