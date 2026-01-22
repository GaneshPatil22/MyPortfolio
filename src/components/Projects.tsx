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
    description:
      "All-in-one event management platform for registration, check-in, and engagement.",
    image: eveuterLogo,
    tech: ["iOS", "Swift", "Firebase"],
    appStore: "https://apps.apple.com/us/app/eventur/id1174453957",
    website: "https://www.eventur.com/",
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
  },
  {
    name: "One App",
    description:
      "Unified platform replacing multiple apps with single codebase across countries.",
    image: oneApp,
    tech: ["iOS", "Swift", "Firebase"],
    website: "https://dtdl.in/dtdl-tech",
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
  },
  {
    name: "2D Fun Resume",
    description:
      "Creative 2D interactive resume in a game-like format with navigable sections.",
    image: funResume,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://ganesh2dportfolio.netlify.app/",
  },
  {
    name: "My Portfolio",
    description:
      "React portfolio with interactive UI and smooth navigation.",
    image: myResume,
    tech: ["ReactJs", "TailwindCSS"],
    demo: "/",
  },
  {
    name: "AI Resume Analyzer",
    description:
      "AI tool comparing resumes with job descriptions for ATS-friendly improvements.",
    image: resumeBuilder,
    tech: ["ReactJs", "AI", "Groq API"],
    demo: "https://airesumeanalyserdemo.netlify.app/",
  },
  {
    name: "ThreadCart",
    description:
      "Live e-commerce platform for medical items with admin and customer workflows.",
    image: threadCart,
    tech: ["ReactJs", "Stripe", "Analytics"],
    demo: "https://threadcart.in/",
  },
  {
    name: "CoreLearnly",
    description:
      "Online DSA coaching platform with admin/student dashboards and progress tracking.",
    image: corelearnly,
    tech: ["ReactJs", "E-learning"],
    demo: "https://corelearnly.com/",
  },
];

export default function Projects() {
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech)));
  const filters = ["All", ...allTechs];

  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="section-heading">My Projects</h1>
        <p className="section-subheading">
          A collection of work I'm proud of
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {filters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTech === tech
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400 col-span-full">No projects found.</p>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={selectedTech + "-" + idx}
              className="card-bordered overflow-hidden animate-fadeInUp group flex flex-col"
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center p-6 h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 dark:bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-900 dark:hover:bg-slate-500 transition-colors"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <HiCode size={14} />
                      Demo
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm rounded-lg hover:border-primary-300 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <HiExternalLink size={14} />
                      Site
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <FaAppStoreIos size={14} />
                      App
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
