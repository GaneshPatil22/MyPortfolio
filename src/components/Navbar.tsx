import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { HiMenuAlt3, HiX, HiSun, HiMoon, HiDownload, HiExternalLink } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
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
        scroller.scrollTo(id, { duration: 500, smooth: true, offset: -80 });
      }, 100);
    } else {
      scroller.scrollTo(id, { duration: 500, smooth: true, offset: -80 });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-xl font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          Ganesh<span className="text-primary-500">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://corelearnly.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              Blog
              <HiExternalLink size={12} className="opacity-50" />
            </a>
          </div>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <HiMoon size={18} /> : <HiSun size={18} />}
          </button>

          {/* Resume */}
          <a
            href="/assets/Ganesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
          >
            <HiDownload size={14} />
            Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <HiMoon size={18} /> : <HiSun size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://corelearnly.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <span className="flex items-center gap-1">
              Blog <HiExternalLink size={12} className="opacity-50" />
            </span>
          </a>
          <a
            href="/assets/Ganesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-2"
          >
            <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg">
              <HiDownload size={14} />
              Resume
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
