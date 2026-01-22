import profilePic from "/assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import { Link as ScrollLink } from "react-scroll";
import heroTexts from "../constants/constants";
import { HiArrowDown, HiCode, HiBriefcase, HiLightningBolt } from "react-icons/hi";

const STATS = [
  { value: "7.5+", label: "Years Experience", icon: HiBriefcase },
  { value: "12+", label: "Projects Delivered", icon: HiCode },
  { value: "5+", label: "Technologies", icon: HiLightningBolt },
];

export default function Home() {
  const randomIndex = Math.floor(Math.random() * heroTexts.length);
  const randomDataToShow = heroTexts[randomIndex];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[90vh] flex items-center px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Text Content */}
          <div className="md:w-3/5 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Available for new opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800">
              Hello, I'm{" "}
              <span className="gradient-text">Ganesh</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              {randomDataToShow.headline}
            </h2>

            <p className="text-slate-500 mb-8 text-lg leading-relaxed max-w-xl">
              {randomDataToShow.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <button className="btn-primary">
                  View My Projects
                  <HiArrowDown className="animate-bounce" />
                </button>
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <button className="btn-outline">
                  Get In Touch
                </button>
              </ScrollLink>
            </div>

            <SocialLinks theme="light" />
          </div>

          {/* Profile Image */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full blur-3xl opacity-20 scale-110"></div>
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Ganesh Profile"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="card-bordered p-6 text-center hover:border-primary-200 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="card p-8 md:p-12 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-100">
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mb-6"></div>

          <p className="text-slate-600 leading-relaxed text-lg">
            I'm an iOS developer with 7.5+ years of experience, building apps in
            Swift, SwiftUI, and Objective-C. I dabble in full-stack web
            development too — React, Node.js, MongoDB, SQL, HTML, CSS, Tailwind —
            basically anything that keeps me coding and curious.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg mt-4">
            When I'm not debugging or writing clean code, you'll probably find me
            exploring AI, tinkering with Unity for game development, solving
            tricky puzzles, or losing to a boss in Souls-like games. Always
            learning, always curious, and occasionally procrastinating with a game
            controller in hand.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <TechStack />
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gradient-to-b from-transparent to-slate-100/50">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  );
}
