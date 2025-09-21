import { useState } from "react";
import eveuterLogo from "../assets/eventur.png";
import jioMart from "../assets/jioMart.webp";
import myJio from "../assets/MyJio.webp";

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
    tech: ["iOS", "Swift", "Postman", "Xcode"],
    appStore: "https://apps.apple.com/us/app/eventur/id1174453957",
    website: "https://www.eventur.com/",
  },
  {
    name: "JioMart Online Shopping App",
    description:
      "JioMart delivers everything from groceries to fashion and electronics with free home delivery, no minimum order, and super-fast grocery delivery in just 10–30 minutes.",
    image: jioMart,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Charles"],
    appStore:
      "https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683",
    website: "https://www.jiomart.com/",
  },
  {
    name: "MyJio: For Everything Jio",
    description:
      "MyJio is your all-in-one app to manage Jio services—telecom, entertainment, finance, shopping, health, and more—seamlessly in one place.",
    image:
      myJio,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Charles"],
    appStore: "https://apps.apple.com/in/app/myjio-for-everything-jio/id1074964262",
    website: "https://www.jio.com/",
  },
  {
    name: "MyJio: For Everything Jio",
    description:
      "MyJio is your all-in-one app to manage Jio services—telecom, entertainment, finance, shopping, health, and more—seamlessly in one place.",
    image:
      myJio,
    tech: ["iOS", "Swift", "Postman", "Xcode", "Charles"],
    appStore: "https://apps.apple.com/in/app/myjio-for-everything-jio/id1074964262",
    website: "https://www.jio.com/",
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
