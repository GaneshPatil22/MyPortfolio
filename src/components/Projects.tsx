import { useState, useRef } from "react";
import { HiExternalLink, HiCode, HiSparkles } from "react-icons/hi";
import { FaAppStoreIos, FaGithub } from "react-icons/fa";
import eveuterLogo from "/assets/eventur.png";
import jioMart from "/assets/jioMart.webp";
import myJio from "/assets/MyJio.webp";
import ess from "/assets/ESS.webp";
import sm from "/assets/SM.webp";
import oneApp from "/assets/DTDL.png";
import mtailor from "/assets/Mtailor.webp";
import funResume from "/assets/FunResume.png";
import myResume from "/assets/MyResume.png";
import resumeBuilder from "/assets/resumeBuilder.png";
import threadCart from "/assets/ThreadCart.png";
import corelearnly from "/assets/Corelearnly.png";

interface Project {
  name: string;
  description: string;
  image: string;
  tech: string[];
  repo?: string;
  demo?: string;
  website?: string;
  appStore?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "Eventur",
    description:
      "All-in-one event management platform for registration, check-in, and engagement.",
    image: eveuterLogo,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/us/app/eventur/id1174453957",
    website: "https://www.eventur.com/",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    name: "JioMart",
    description:
      "Grocery to fashion delivery app with super-fast 10-30 minute delivery.",
    image: jioMart,
    tech: ["iOS", "Swift", "Firebase"],
    appStore:
      "https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683",
    website: "https://www.jiomart.com/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "MyJio",
    description:
      "All-in-one app for Jio services—telecom, entertainment, finance, and more.",
    image: myJio,
    tech: ["iOS", "Swift", "Firebase"],
    appStore:
      "https://apps.apple.com/in/app/myjio-for-everything-jio/id1074964262",
    website: "https://www.jio.com/",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "ESS 45 Zebra",
    description:
      "Employee self-service app for schedules, shifts, timecards, and availability.",
    image: ess,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/cv/app/ess-45-zebra/id1531525719",
    website:
      "https://apps.apple.com/cv/developer/reflexis-systems-inc/id1094727299",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "SM 45 Zebra",
    description:
      "Mobile-first platform for store operations, schedules, and task management.",
    image: sm,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/cv/app/sm-45-zebra/id1529403078",
    website:
      "https://apps.apple.com/cv/developer/reflexis-systems-inc/id1094727299",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "One App",
    description:
      "Unified platform replacing multiple apps with single codebase across countries.",
    image: oneApp,
    tech: ["iOS", "Swift", "Firebase"],
    website: "https://dtdl.in/dtdl-tech",
    gradient: "from-rose-500 to-red-500",
  },
  {
    name: "MTailor",
    description:
      "Custom clothing app using phone measurements for perfect fit delivery.",
    image: mtailor,
    tech: ["iOS", "Swift", "Firebase"],
    appStore:
      "https://apps.apple.com/in/app/mtailor-custom-clothing/id816042916",
    website: "https://dtdl.in/dtdl-tech",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "2D Fun Resume",
    description:
      "Creative 2D interactive resume in a game-like format with navigable sections.",
    image: funResume,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://ganesh2dportfolio.netlify.app/",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "My Portfolio",
    description:
      "React portfolio with interactive UI and smooth navigation.",
    image: myResume,
    tech: ["ReactJs", "TailwindCSS"],
    demo: "/",
    gradient: "from-primary-500 to-purple-500",
  },
  {
    name: "AI Resume Analyzer",
    description:
      "AI tool comparing resumes with job descriptions for ATS-friendly improvements.",
    image: resumeBuilder,
    tech: ["ReactJs", "AI", "Groq API"],
    demo: "https://airesumeanalyserdemo.netlify.app/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "ThreadCart",
    description:
      "Live e-commerce platform for medical items with admin and customer workflows.",
    image: threadCart,
    tech: ["ReactJs", "Stripe", "Analytics"],
    demo: "https://threadcart.in/",
    gradient: "from-teal-500 to-green-500",
  },
  {
    name: "CoreLearnly",
    description:
      "Online DSA coaching platform with admin/student dashboards and progress tracking.",
    image: corelearnly,
    tech: ["ReactJs", "E-learning"],
    demo: "https://corelearnly.com/",
    gradient: "from-indigo-500 to-blue-500",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="perspective group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="relative h-full preserve-3d transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
      >
        {/* Glow effect behind card */}
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 -z-10`}
        />

        {/* Main card */}
        <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
          {/* Animated border */}
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
            <div className="absolute inset-[2px] bg-white dark:bg-slate-800 rounded-2xl" />
          </div>

          {/* Content container */}
          <div className="relative h-full flex flex-col">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`max-w-full max-h-full object-contain transition-all duration-700 ${
                    isHovered ? 'scale-110 rotate-2' : 'scale-100'
                  }`}
                />
              </div>

              {/* Floating sparkles on hover */}
              <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className={`p-2 bg-gradient-to-br ${project.gradient} rounded-lg shadow-lg`}>
                  <HiSparkles className="text-white text-lg" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative flex-grow p-6 flex flex-col">
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-300">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                      isHovered
                        ? `bg-gradient-to-r ${project.gradient} text-white shadow-md`
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-slate-600 text-white text-sm rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300`}
                  >
                    <HiCode size={14} />
                    <span>Demo</span>
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm rounded-xl hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 transition-all duration-300"
                  >
                    <HiExternalLink size={14} />
                    <span>Site</span>
                  </a>
                )}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300`}
                  >
                    <FaAppStoreIos size={14} />
                    <span>App</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech)));
  const filters = ["All", ...allTechs];

  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-full mb-6">
          <HiSparkles className="text-primary-500" />
          <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            Featured Work
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-slate-800 dark:text-white">My </span>
          <span className="gradient-text-animated">Projects</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          A showcase of applications and experiences I've crafted with passion
        </p>
      </div>

      {/* Animated Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filters.map((tech, idx) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
              selectedTech === tech
                ? "text-white shadow-lg shadow-primary-500/30 scale-105"
                : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105"
            }`}
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            {/* Active gradient background */}
            {selectedTech === tech && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 animate-gradient-x bg-[length:200%_auto]" />
            )}
            <span className="relative z-10">{tech}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
              <HiCode className="text-4xl text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects found for this filter.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <ProjectCard
              key={`${selectedTech}-${project.name}`}
              project={project}
              index={idx}
            />
          ))
        )}
      </div>

      {/* Bottom decoration */}
      <div className="mt-20 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full" />
      </div>
    </div>
  );
}
