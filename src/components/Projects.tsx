interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  { name: "Project One", description: "A cool project built with React", link: "#" },
  { name: "Project Two", description: "Another awesome project", link: "#" },
  { name: "Project Three", description: "Yet another amazing project", link: "#" },
];

export default function Projects() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
