import type { JSX } from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaPython, FaJava,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiSwift, SiMongodb, SiPostman, SiFirebase, SiXcode,
} from "react-icons/si";

interface TechItem {
  icon: JSX.Element;
  name: string;
  color: string;
}

const TECH_ITEMS: TechItem[] = [
  { icon: <SiSwift />, name: "Swift", color: "text-orange-500" },
  { icon: <FaReact />, name: "React", color: "text-cyan-500" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-600" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-600" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-500" },
  { icon: <FaJava />, name: "Java", color: "text-red-500" },
  { icon: <SiFirebase />, name: "Firebase", color: "text-amber-500" },
  { icon: <FaGithub />, name: "GitHub", color: "text-slate-700 dark:text-slate-300" },
  { icon: <SiXcode />, name: "Xcode", color: "text-blue-500" },
  { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
  { icon: <FaReact />, name: "React Native", color: "text-cyan-500" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {TECH_ITEMS.map((tech) => (
        <div
          key={tech.name}
          className="group flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors cursor-default"
        >
          <span className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform`}>
            {tech.icon}
          </span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-center">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
