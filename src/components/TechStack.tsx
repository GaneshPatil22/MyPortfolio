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
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

interface TechItem {
  icon: JSX.Element;
  name: string;
  color: string;
}

const row1: TechItem[] = [
  { icon: <FaReact />, name: "React", color: "text-cyan-500" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-500" },
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
];

const row2: TechItem[] = [
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
];

const row3: TechItem[] = [
  { icon: <SiSwift />, name: "Swift", color: "text-orange-500" },
  { icon: <FaGithub />, name: "GitHub", color: "text-slate-800" },
  { icon: <FaReact />, name: "React Native", color: "text-cyan-500" },
  { icon: <SiTypescript />, name: "TSX", color: "text-blue-600" },
];

const row4: TechItem[] = [
  { icon: <FaPython />, name: "Python", color: "text-yellow-600" },
  { icon: <FaJava />, name: "Java", color: "text-red-500" },
  { icon: <IoLogoFirebase />, name: "Firebase", color: "text-amber-500" },
  { icon: <SiPostman />, name: "Postman", color: "text-orange-600" },
];

function TechRow({
  items,
  animation,
}: {
  items: TechItem[];
  animation?: string;
}) {
  return (
    <div className="overflow-hidden py-3">
      <div className={`flex ${animation} whitespace-nowrap`}>
        {[...items, ...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 px-6 py-2 mx-2 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary-200 transition-all duration-300"
          >
            <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
            <span className="text-slate-700 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="card p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-100 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="section-heading">Tech Stack</h2>
        <p className="section-subheading">Technologies I work with</p>
      </div>

      <div className="space-y-2">
        <TechRow items={row1} animation="animate-marquee-slow" />
        <TechRow items={row2} animation="animate-marquee-reverse-fast" />
        <TechRow items={row3} animation="animate-marquee-fast" />
        <TechRow items={row4} animation="animate-marquee-reverse-slow" />
      </div>
    </div>
  );
}
