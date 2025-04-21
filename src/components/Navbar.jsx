import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/FineLine Furniture and Interior.pdf";
    link.download = "FineLine_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolling
            ? "bg-[#F5F3EF] bg-opacity-90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-10">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/fineline.png"
              alt="FineLine Interiors"
              className="h-30 w-auto max-w-[90px] object-contain"
            />
            <span
              className={`font-classy text-lg sm:text-xl md:text-2xl font-semibold tracking-wide transition-all duration-300 ${
                scrolling ? "text-[#222]" : "text-[#F5F3EF]"
              }`}
            >
              FineLine Furniture & Interiors
            </span>
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            >
              {menuOpen ? (
                <FiX className="text-3xl text-[#D9B382]" />
              ) : (
                <FiMenu
                  className={`text-3xl ${
                    scrolling ? "text-[#222]" : "text-[#F5F3EF]"
                  }`}
                />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-8 text-base items-center">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`transition-all duration-300 font-body ${
                  scrolling
                    ? "text-[#222] hover:text-[#D9B382]"
                    : "text-[#F5F3EF] hover:text-[#D9B382]"
                }`}
              >
                {name}
              </Link>
            ))}
            <button
              onClick={handleDownload}
              className="bg-[#D9B382] text-black font-medium py-2 px-5 rounded-lg shadow-md border border-[#b89668] hover:bg-[#b89668] transition-all duration-300 text-base flex items-center gap-2"
            >
              Brochure
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6-6m-6 6l-6-6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 py-4 bg-[#F5F3EF] shadow-md transition-all duration-300">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-[#222] font-medium text-lg"
              >
                {name}
              </Link>
            ))}
            <button
              onClick={handleDownload}
              className="mt-3 w-full bg-[#D9B382] text-black font-medium py-2 px-4 rounded-lg shadow border border-[#b89668] hover:bg-[#b89668] transition-all duration-300 flex justify-center items-center gap-2"
            >
              Brochure
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6-6m-6 6l-6-6"
                />
              </svg>
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/6f/03/05/6f0305ed77d7b762a7644a55bff4f78b.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-[#F5F3EF] px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-baskervville text-white leading-snug">
            ELEVATE YOUR <br /> LIVING SPACE
          </h1>
          <br />
          <Link
            to="/consultation"
            className="bg-[#D9B382] text-black font-semibold py-3 px-6 rounded-lg shadow-lg border border-[#b89668] hover:bg-[#b89668] transition text-lg"
          >
            Get a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
