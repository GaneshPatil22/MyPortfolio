import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { HiMenuAlt3, HiX, HiSun, HiMoon, HiDownload } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

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
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="group relative text-2xl font-bold"
        >
          <span className="relative z-10 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            Ganesh
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 font-medium rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl" />
              )}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500 transition-all duration-300 ${
                activeSection === item.id ? "opacity-100" : "opacity-0"
              }`} />
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group relative p-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-orange-500/0 group-hover:from-amber-400/20 group-hover:to-orange-500/20 transition-all duration-300" />
            <span className="relative z-10 block text-amber-500 dark:text-amber-400 transition-transform duration-500 group-hover:rotate-180">
              {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
            </span>
          </button>

          {/* Resume Button */}
          <a
            href="/assets/Ganesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-2 px-5 py-2.5 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-[length:200%_auto] animate-gradient-x" />
            <span className="relative z-10 flex items-center gap-2">
              <HiDownload className="group-hover:animate-bounce" />
              Resume
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 bg-slate-100 dark:bg-slate-800 text-amber-500 dark:text-amber-400 rounded-xl transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span className={`block transition-all duration-300 ${isOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
              <HiMenuAlt3 size={28} />
            </span>
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`}>
              <HiX size={28} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary-500/10 text-primary-600 dark:text-primary-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/assets/Ganesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4"
            >
              <span className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl">
                <HiDownload />
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
