import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Ganesh<span className="text-primary-500">.</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Crafting iOS apps and web experiences with precision and care.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Available for opportunities
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Experience", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.getElementById(link.toLowerCase() === "home" ? "hero" : link.toLowerCase());
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
              <a
                href="https://corelearnly.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Connect</h4>
            <div className="flex justify-center md:justify-end">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-200 dark:bg-slate-800 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <p>&copy; {currentYear} Ganesh Patil</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
