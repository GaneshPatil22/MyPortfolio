import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const SCROLL_THRESHOLD = 300;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 p-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg shadow-lg transition-all duration-300 z-50 hover:bg-primary-600 dark:hover:bg-primary-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <HiArrowUp size={18} />
    </button>
  );
}
