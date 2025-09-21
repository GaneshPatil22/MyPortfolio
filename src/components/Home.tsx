import profilePic from "/assets/profile.jpg"; // add a small profile image in src/assets
import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import { Link as ScrollLink } from "react-scroll";
import heroTexts from "../constants/constants";

export default function Home() {
  // Get random hero text
  const randomIndex = Math.floor(Math.random() * heroTexts.length);
  const randomDataToShow = heroTexts[randomIndex];

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center mb-16 gap-8"
      >
        {/* Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hello, I’m Ganesh 👋</h1>
          <h2 className="text-xl text-gray-600 mb-6">
            {randomDataToShow.headline}
          </h2>
          <p className="text-gray-700 mb-6">{randomDataToShow.subtext}</p>
          <SocialLinks theme="light" />

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View My Projects
            </button>
          </ScrollLink>
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
          I’m an iOS developer with 7.5+ years of experience, building apps in
          Swift, SwiftUI, and Objective-C. I dabble in full-stack web
          development too — React, Node.js, MongoDB, SQL, HTML, CSS, Tailwind —
          basically anything that keeps me coding and curious.
          <br />
          When I’m not debugging or writing clean code, you’ll probably find me
          exploring AI, tinkering with Unity for game development, solving
          tricky puzzles, or losing to a boss in Souls-like games. Always
          learning, always curious, and occasionally procrastinating with a game
          controller in hand. 🚀
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
