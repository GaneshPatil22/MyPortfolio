import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // add a small profile image in src/assets
import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row items-center mb-16 gap-8">
        {/* Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hello, I’m Ganesh 👋</h1>
          <h2 className="text-xl text-gray-600 mb-6">
            iOS & Web Developer | Problem Solver | Tech Enthusiast
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to my portfolio website built with React + TypeScript +
            Tailwind. Here you can explore my projects, skills, and get in touch
            with me.
          </p>
          <SocialLinks theme="light" />
          <Link to="/projects">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View My Projects
            </button>
          </Link>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profilePic}
            alt="Ganesh Profile"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 p-8 rounded-xl shadow-md mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I specialize in building high-quality mobile and web applications.
          With a strong foundation in React, Swift, and backend development, I
          love solving problems and creating smooth user experiences. I’m
          passionate about writing clean code, learning new technologies, and
          delivering projects that delight users 🚀
        </p>
      </section>
      {/* <div className="my-12" /> */}
      <TechStack />
      <section id="projects" className="mb-8">
        <Projects />
      </section>

      <section id="contact" className="mb-1">
        <Contact />
      </section>

    </div>
  );
}
