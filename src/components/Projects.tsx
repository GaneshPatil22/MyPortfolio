import { useState } from "react";

interface Project {
  name: string;
  description: string;
  image: string;
  tech: string[];
  repo?: string; // optional
  demo?: string; // optional
}

const projects: Project[] = [
  {
    name: "Project One",
    description: "A cool project built with React and Tailwind.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-p4Vie9oDM3GoLB9ACY9K2phdqxksmZUOw&s",
    tech: ["React", "Tailwind", "TypeScript"],
    repo: "https://github.com/yourusername/project-one",
    demo: "https://yourprojectdemo.com",
  },
  {
    name: "Project Two",
    description: "A backend API built with Node.js and MongoDB.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjlWKsNSA2ARasWdT_6tTMDkNXh8kY6ODQg&s",
    tech: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/yourusername/project-two",
  },
  {
    name: "Project Three",
    description:
      "A mobile app developed in Swift for iOS.A mobile app developed in Swift for iOS.A mobile app developed in Swift for iOS.A mobile app developed in Swift for iOS.A mobile app developed in Swift for iOS.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9CfazuCmv2W8HARKd0r40_DweUnv7pO5hg&s",
    tech: ["Swift", "iOS", "Xcode"],
    demo: "https://yourprojectdemo.com",
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
      <div className="space-y-12">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 animate-fadeInUp"
            >
              {/* Left: Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}