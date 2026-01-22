import SocialLinks from "./SocialLinks";
import { HiHeart, HiSparkles, HiCode, HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ganesh
              </span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting beautiful iOS apps and web experiences with passion and precision.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 justify-center md:justify-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
              <HiSparkles className="text-primary-400" />
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Home", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase() === "home" ? "hero" : link.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Section */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4 flex items-center justify-center md:justify-end gap-2">
              <HiCode className="text-primary-400" />
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-end">
              <SocialLinks theme="dark" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-slate-800 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Ganesh Patil. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-500 text-sm">
            Made with
            <span className="relative">
              <HiHeart className="text-red-500 animate-pulse" />
            </span>
            using
            <span className="text-cyan-400">React</span>
            &
            <span className="text-cyan-400">Tailwind</span>
          </p>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group p-2 bg-slate-800 hover:bg-primary-500 rounded-xl transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
