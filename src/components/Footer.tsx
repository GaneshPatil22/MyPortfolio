import SocialLinks from "./SocialLinks";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Ganesh</h3>
            <p className="text-slate-400 text-sm">
              iOS & Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks theme="dark" />
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Ganesh Patil. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <HiHeart className="text-red-500" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
