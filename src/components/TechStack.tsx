import type { JSX } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSwift,
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiXcode,
} from "react-icons/si";

interface TechItem {
  icon: JSX.Element;
  name: string;
  color: string;
  bgColor: string;
}

const TECH_ITEMS: TechItem[] = [
  { icon: <SiSwift />, name: "Swift", color: "text-orange-500", bgColor: "from-orange-500/20 to-orange-600/20" },
  { icon: <FaReact />, name: "React", color: "text-cyan-500", bgColor: "from-cyan-500/20 to-cyan-600/20" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500", bgColor: "from-blue-500/20 to-blue-600/20" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500", bgColor: "from-green-500/20 to-green-600/20" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600", bgColor: "from-green-600/20 to-green-700/20" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400", bgColor: "from-cyan-400/20 to-cyan-500/20" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", bgColor: "from-yellow-400/20 to-yellow-500/20" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-600", bgColor: "from-orange-600/20 to-orange-700/20" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-600", bgColor: "from-blue-600/20 to-blue-700/20" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-500", bgColor: "from-yellow-500/20 to-yellow-600/20" },
  { icon: <FaJava />, name: "Java", color: "text-red-500", bgColor: "from-red-500/20 to-red-600/20" },
  { icon: <SiFirebase />, name: "Firebase", color: "text-amber-500", bgColor: "from-amber-500/20 to-amber-600/20" },
  { icon: <FaGithub />, name: "GitHub", color: "text-slate-700 dark:text-slate-300", bgColor: "from-slate-500/20 to-slate-600/20" },
  { icon: <SiXcode />, name: "Xcode", color: "text-blue-500", bgColor: "from-blue-500/20 to-blue-600/20" },
  { icon: <SiPostman />, name: "Postman", color: "text-orange-500", bgColor: "from-orange-500/20 to-orange-600/20" },
  { icon: <FaReact />, name: "React Native", color: "text-cyan-500", bgColor: "from-cyan-500/20 to-cyan-600/20" },
];

export default function TechStack() {
  return (
    <div className="relative">
      {/* Glowing orb in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-slow" />

      {/* Tech Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {TECH_ITEMS.map((tech, idx) => (
          <div
            key={tech.name}
            className="group relative"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className={`card-glass p-4 flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300 cursor-default`}>
              {/* Icon with gradient background */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${tech.bgColor} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                <span className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </span>
              </div>

              {/* Name */}
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors text-center">
                {tech.name}
              </span>
            </div>

            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
          </div>
        ))}
      </div>

      {/* Animated border bottom */}
      <div className="mt-12 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30" />
    </div>
  );
}
