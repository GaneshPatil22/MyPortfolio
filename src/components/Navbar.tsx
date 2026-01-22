import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 100);
    } else {
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          Ganesh
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-4 py-2 text-slate-600 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/assets/Ganesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 btn-primary text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-primary-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-soft transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-4 py-3 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/assets/Ganesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center btn-primary mt-4"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
