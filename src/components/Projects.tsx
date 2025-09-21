import { useState } from "react";
import eveuterLogo from "/assets/eventur.png";
import jioMart from "/assets/jioMart.webp";
import myJio from "/assets/MyJio.webp";
import ess from "/assets/ESS.webp";
import sm from "/assets/SM.webp";
import oneApp from "/assets/DTDL.png";
import mtailor from "/assets/Mtailor.webp";
import funResume from "/assets/FunResume.png";
import myResume from "/assets/MyResume.png";

interface Project {
  name: string;
  description: string;
  image: string;
  tech: string[];
  repo?: string; // optional
  demo?: string; // optional
  website?: string; // optional
  appStore?: string; // optional
}

const projects: Project[] = [
  {
    name: "Eventur",
    description:
      "Eventur is an all-in-one event management platform that simplifies registration, check-in, audience engagement, and certification for in-person, virtual, and hybrid events.",
    image: eveuterLogo,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Git", "Firebase"],
    appStore: "https://apps.apple.com/us/app/eventur/id1174453957",
    website: "https://www.eventur.com/",
  },
  {
    name: "JioMart Online Shopping App",
    description:
      "JioMart delivers everything from groceries to fashion and electronics with free home delivery, no minimum order, and super-fast grocery delivery in just 10–30 minutes.",
    image: jioMart,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Charles", "Git", "Firebase"],
    appStore:
      "https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683",
    website: "https://www.jiomart.com/",
  },
  {
    name: "MyJio: For Everything Jio",
    description:
      "MyJio is your all-in-one app to manage Jio services—telecom, entertainment, finance, shopping, health, and more—seamlessly in one place.",
    image: myJio,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Charles", "Git", "Firebase"],
    appStore:
      "https://apps.apple.com/in/app/myjio-for-everything-jio/id1074964262",
    website: "https://www.jio.com/",
  },
  {
    name: "ESS 45 Zebra",
    description:
      "The New ESS app empowers team members with an intuitive design, refreshed dashboard, and smart tools to manage schedules, shifts, timecards, and availability—all in one place.",
    image: ess,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Git", "Firebase"],
    appStore: "https://apps.apple.com/cv/app/ess-45-zebra/id1531525719",
    website:
      "https://apps.apple.com/cv/developer/reflexis-systems-inc/id1094727299",
  },
  {
    name: "SM 45 Zebra",
    description:
      "Zebra’s mobile-first platform empowers store associates and leaders to manage schedules, tasks, and real-time store operations directly from their phones or tablets.",
    image: sm,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Git", "Firebase"],
    appStore: "https://apps.apple.com/cv/app/sm-45-zebra/id1529403078",
    website:
      "https://apps.apple.com/cv/developer/reflexis-systems-inc/id1094727299",
  },
  {
    name: "One App",
    description:
      "OneApp is a unified platform designed to replace multiple apps with a single product built on next-gen technology. It runs on one codebase, connects to each country’s backend via APIs, and is supported by centrally developed services.",
    image: oneApp,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Git", "Firebase", "Charles"],
    website: "https://dtdl.in/dtdl-tech",
  },
  {
    name: "MTailor - Custom Clothing",
    description:
      "MTailor uses your phone to measure you 20% more accurately than a professional tailor—delivering perfectly fitting, fully customizable clothes with free shipping and returns.",
    image: mtailor,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Git", "Firebase"],
    appStore:
      "https://apps.apple.com/in/app/mtailor-custom-clothing/id816042916",
    website: "https://dtdl.in/dtdl-tech",
  },
  {
    name: "2D Fun Resume",
    description:
      "This project is a creative 2D top-down interactive resume, designed as a fun and engaging way to showcase professional experience, skills, and achievements. Instead of a traditional CV, the resume is presented in a game-like format, where users navigate through different sections—such as education, work experience, projects, and skills—represented as interactive zones or levels. The goal is to make the resume not only informative but also memorable, demonstrating both technical creativity and storytelling ability",
    image: funResume,
    tech: ["HTML", "CSS", "JavaScript", "Game"],
    demo: "https://ganesh2dportfolio.netlify.app/",
  },
  {
    name: "My Portfolio",
    description:
      "Developed a React-based portfolio website featuring interactive UI, smooth navigation, and a professional presentation of my work and expertise.",
    image: myResume,
    tech: ["ReactJs", "TailwindCSS"],
    demo: "https://ganesh2dportfolio.netlify.app/",
  },
];

export default function Projects() {
  // Collect unique techs
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech)));
  const filters = ["All", ...allTechs];

  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filters.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedTech === tech
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects */}
      {/* //grid md:grid-cols-2 gap-8 */}
      <div className="space-y-12">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={selectedTech + "-" + idx}
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 animate-fadeInUp"
            >
              {/* Left: Image */}
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-full max-h-64 object-contain transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Right: Content */}
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
                <p className="text-gray-700 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      Website
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      App Store
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
