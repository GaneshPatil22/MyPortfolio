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

const row1 = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML" },
];

const row2 = [
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
];

const row3 = [
  { icon: <SiSwift />, name: "Swift" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaReact />, name: "React Native" },
  { icon: <SiTypescript />, name: "TSX" },
];

const row4 = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <IoLogoFirebase />, name: "Firebase" },
  { icon: <SiPostman />, name: "Postman" },
];

function TechRow({
  items,
  animation,
}: {
  items: { icon: JSX.Element; name: string }[];
  animation?: string;
}) {
  return (
    <div className="overflow-hidden py-2">
      <div className={`flex ${animation} whitespace-nowrap`}>
        {/* Repeat 4 times to avoid gaps */}
        {[...items, ...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 text-2xl text-gray-700 px-8"
          >
            {tech.icon}
            <span className="text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="bg-gray-100 p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>

      <TechRow items={row1} animation="animate-marquee-slow" />
      <TechRow items={row2} animation="animate-marquee-reverse-fast" />
      <TechRow items={row3} animation="animate-marquee-fast" />
      <TechRow items={row4} animation="animate-marquee-reverse-slow" />
    </div>
  );
}
