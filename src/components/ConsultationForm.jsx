// EmailJS added

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f48g1j9", // Your service ID
        "template_e1496kc", // Your template ID
        formData,
        "LmC7lzxtIp3Ssjj-o" // Your public key
      )
      .then(
        (result) => {
          toast.success("Consultation request submitted!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            message: "",
            propertyType: "",
          });
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#f5f3ef] py-10 px-4 flex items-center justify-center min-h-screen">
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #d9b382",
            padding: "12px",
            color: "#7a6440",
            backgroundColor: "#fffaf3",
          },
        }}
      />
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white border border-[#d9b382] rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#b89668] mb-4 text-center leading-snug">
          Tell Us Your Story
          <br />
          <span className="text-sm text-[#7a6440]">
            So we can help create your dream space.
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />

          <select
            name="propertyType"
            required
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          >
            <option value="" disabled>
              Select Property Type
            </option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
            <option value="Rowhouse/Bunglow">Rowhouse / Bunglow</option>
            <option value="Office / Commercial Space">
              Office / Commercial Space
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d9b382] hover:bg-[#b89668] text-black font-medium text-sm py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
