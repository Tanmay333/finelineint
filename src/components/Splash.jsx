// Splash.js
import { useEffect, useState } from "react";

const Splash = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#D9B382] to-[#8B5E3C] transition-opacity duration-500">
      <img
        src="/assets/fineline.png"
        alt="Fineline Logo"
        className="h-58 w-58 object-contain animate-scaleUp"
      />
    </div>
  );
};

export default Splash;
