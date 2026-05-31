import { useState } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
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
}

const projects: Project[] = [
  {
    name: "Eventur",
    description: "All-in-one event management platform for registration, check-in, and engagement.",
    image: eveuterLogo,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/us/app/eventur/id1174453957",
    website: "https://www.eventur.com/",
  },
  {
    name: "JioMart",
    description: "Grocery to fashion delivery app with super-fast 10-30 minute delivery.",
    image: jioMart,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683",
    website: "https://www.jiomart.com/",
  },
  {
    name: "MyJio",
    description: "All-in-one app for Jio services—telecom, entertainment, finance, and more.",
    image: myJio,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/in/app/myjio-for-everything-jio/id1074964262",
    website: "https://www.jio.com/",
  },
  {
    name: "ESS 45 Zebra",
    description: "Employee self-service app for schedules, shifts, timecards, and availability.",
    image: ess,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/cv/app/ess-45-zebra/id1531525719",
    website: "https://apps.apple.com/cv/developer/reflexis-systems-inc/id1094727299",
  },
  {
    name: "SM 45 Zebra",
    description: "Mobile-first platform for store operations, schedules, and task management.",
    image: sm,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/cv/app/sm-45-zebra/id1529403078",
    website: "https://apps.apple.com/cv/developer/reflexis-systems-inc/id1094727299",
  },
  {
    name: "One App",
    description: "Unified platform replacing multiple apps with single codebase across countries.",
    image: oneApp,
    tech: ["iOS", "Swift", "Firebase"],
    website: "https://dtdl.in/dtdl-tech",
  },
  {
    name: "MTailor",
    description: "Custom clothing app using phone measurements for perfect fit delivery.",
    image: mtailor,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/in/app/mtailor-custom-clothing/id816042916",
    website: "https://dtdl.in/dtdl-tech",
  },
  {
    name: "2D Fun Resume",
    description: "Creative 2D interactive resume in a game-like format with navigable sections.",
    image: funResume,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://ganesh2dportfolio.netlify.app/",
  },
  {
    name: "My Portfolio",
    description: "React portfolio with interactive UI and smooth navigation.",
    image: myResume,
    tech: ["ReactJs", "TailwindCSS"],
    demo: "/",
  },
  {
    name: "AI Resume Analyzer",
    description: "AI tool comparing resumes with job descriptions for ATS-friendly improvements.",
    image: resumeBuilder,
    tech: ["ReactJs", "AI", "Groq API"],
    demo: "https://airesumeanalyserdemo.netlify.app/",
  },
  {
    name: "ThreadCart",
    description: "Live e-commerce platform for medical items with admin and customer workflows.",
    image: threadCart,
    tech: ["ReactJs", "Stripe", "Analytics"],
    demo: "https://threadcart.in/",
  },
  {
    name: "CoreLearnly",
    description: "Online DSA coaching platform with admin/student dashboards and progress tracking.",
    image: corelearnly,
    tech: ["ReactJs", "E-learning"],
    demo: "https://corelearnly.com/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardLink = project.website || project.demo || project.appStore;

  return (
    <div
      className="group cursor-pointer rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-card-hover transition-all duration-300"
      onClick={() => {
        if (cardLink) window.open(cardLink, "_blank", "noopener,noreferrer");
      }}
    >
      {/* Image */}
      <div className="h-36 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-4">
        <img
          src={project.image}
          alt={project.name}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 truncate">
          {project.name}
        </h3>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors">
              <FaGithub size={11} /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors">
              <HiCode size={11} /> Demo
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-500 hover:text-primary-600 transition-colors">
              <HiExternalLink size={11} /> Site
            </a>
          )}
          {project.appStore && (
            <a href={project.appStore} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <FaAppStoreIos size={11} /> App
            </a>
          )}
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
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subtext">A showcase of apps and experiences I've built</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {filters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              selectedTech === tech
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <HiCode className="mx-auto text-3xl text-slate-300 dark:text-slate-600 mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">No projects found for this filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={`${selectedTech}-${project.name}`} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
