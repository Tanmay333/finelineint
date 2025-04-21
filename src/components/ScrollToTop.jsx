import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTo = () => {
      if (
        pathname.toLowerCase() === "/portfolio" ||
        pathname.toLowerCase() === "/reviews" ||
        pathname.toLowerCase() === "/consultation"
      ) {
        window.scrollTo({ top: 700, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    // Delay to allow DOM to render if needed
    const timeout = setTimeout(scrollTo, 150);

    return () => clearTimeout(timeout); // cleanup
  }, [pathname]);

  return null;
};

export default ScrollToTop;
