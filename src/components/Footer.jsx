import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-serif text-white">
            FineLine Furniture & Interior
          </h2>
          <p className="text-sm mt-3 leading-relaxed">
            Elevate your living space with our premium interior design
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-white transition">
                Reviews
              </a>
            </li>
            <li>
              <a href="/brochuer" className="hover:text-white transition">
                Brochuer
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm text-white font-medium">
            Director: Nilop Khode
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            📍305, Fortune Business Center, Kaspate Vasti Road, Near Chhatrapati
            Chowk, Wakad, Pune 57
          </p>
          <p className="text-sm mt-2">📧 nilopk30@gmail.com</p>
          <p className="text-sm">📞 +91-7798009809</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.instagram.com/fineline_interior_?igsh=d2NmeTRodWNvdDgy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaPinterestP size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Vastushastra Consultant */}
      <div className="text-center mt-10 text-[#D9B382] italic text-sm px-4">
        Best Vastushastra Consultant:{" "}
        <span className="font-semibold">Mrs. Mayuri Khode</span> | 📞
        +91-8600373359
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4 px-4">
        <p>
          © {new Date().getFullYear()} FineLine Furniture & Interior. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
