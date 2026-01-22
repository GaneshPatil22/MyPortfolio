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
    hoverColor: "hover:text-slate-900 dark:hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/ganesh-patil-2b3431119/",
    icon: FaLinkedin,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    href: "https://leetcode.com/u/Sonic22/",
    icon: SiLeetcode,
    label: "LeetCode",
    hoverColor: "hover:text-orange-500 dark:hover:text-orange-400",
  },
];

export default function SocialLinks({ theme: propTheme }: Props) {
  const { theme: contextTheme } = useTheme();

  // Use prop theme for explicit styling (like footer which is always dark)
  // Otherwise adapt to the current system theme
  const effectiveTheme = propTheme || (contextTheme === "dark" ? "dark" : "light");

  const baseColor = effectiveTheme === "dark"
    ? "text-slate-400"
    : "text-slate-500 dark:text-slate-400";

  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseColor} ${link.hoverColor} text-2xl transition-all duration-300 hover:scale-110`}
          aria-label={link.label}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
