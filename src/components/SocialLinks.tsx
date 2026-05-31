import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SOCIAL_LINKS = [
  { href: "https://github.com/GaneshPatil22", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ganesh-patil-2b3431119/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/Sonic22/", icon: SiLeetcode, label: "LeetCode" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          aria-label={link.label}
        >
          <link.icon size={16} />
        </a>
      ))}
    </div>
  );
}
