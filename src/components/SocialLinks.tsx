import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

interface Props {
  theme?: "light" | "dark";
}

const SOCIAL_LINKS = [
  {
    href: "https://github.com/GaneshPatil22",
    icon: FaGithub,
    label: "GitHub",
    gradient: "from-slate-600 to-slate-800",
    hoverBg: "group-hover:bg-slate-800 dark:group-hover:bg-slate-600",
  },
  {
    href: "https://www.linkedin.com/in/ganesh-patil-2b3431119/",
    icon: FaLinkedin,
    label: "LinkedIn",
    gradient: "from-blue-500 to-blue-700",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    href: "https://leetcode.com/u/Sonic22/",
    icon: SiLeetcode,
    label: "LeetCode",
    gradient: "from-orange-400 to-orange-600",
    hoverBg: "group-hover:bg-orange-500",
  },
];

export default function SocialLinks({ theme: propTheme }: Props) {
  const { theme: contextTheme } = useTheme();
  const effectiveTheme = propTheme || (contextTheme === "dark" ? "dark" : "light");
  const isDark = effectiveTheme === "dark";

  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((link, idx) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={link.label}
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {/* Glow effect */}
          <div className={`absolute -inset-2 bg-gradient-to-r ${link.gradient} rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300 -z-10`} />

          {/* Button */}
          <div className={`relative p-3 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
            isDark
              ? "bg-slate-800/50 border-slate-700 group-hover:border-transparent"
              : "bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 group-hover:border-transparent"
          } ${link.hoverBg}`}>
            <link.icon className={`text-xl transition-all duration-300 ${
              isDark
                ? "text-slate-400 group-hover:text-white"
                : "text-slate-600 dark:text-slate-400 group-hover:text-white"
            }`} />
          </div>
        </a>
      ))}
    </div>
  );
}
