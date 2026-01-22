import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface Props {
  theme?: "light" | "dark";
}

const SOCIAL_LINKS = [
  {
    href: "https://github.com/GaneshPatil22",
    icon: FaGithub,
    label: "GitHub",
    hoverColor: "hover:text-slate-900",
  },
  {
    href: "https://www.linkedin.com/in/ganesh-patil-2b3431119/",
    icon: FaLinkedin,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600",
  },
  {
    href: "https://leetcode.com/u/Sonic22/",
    icon: SiLeetcode,
    label: "LeetCode",
    hoverColor: "hover:text-orange-500",
  },
];

export default function SocialLinks({ theme = "light" }: Props) {
  const baseColor = theme === "light" ? "text-slate-500" : "text-slate-400";
  const darkHover = theme === "dark" ? "hover:text-white" : "";

  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseColor} ${darkHover || link.hoverColor} text-2xl transition-all duration-300 hover:scale-110`}
          aria-label={link.label}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
