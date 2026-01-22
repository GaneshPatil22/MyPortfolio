import profilePic from "/assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import { Link as ScrollLink } from "react-scroll";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { HiArrowDown, HiSparkles, HiCode, HiBriefcase, HiLightningBolt, HiAcademicCap } from "react-icons/hi";
import { useEffect, useState } from "react";

const TYPING_WORDS = [
  "iOS Developer",
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Swift Expert",
  "React Developer",
];

const STATS = [
  { value: "7.5+", label: "Years Experience", icon: HiBriefcase, color: "from-blue-500 to-cyan-500" },
  { value: "12+", label: "Projects Delivered", icon: HiCode, color: "from-purple-500 to-pink-500" },
  { value: "5+", label: "Technologies", icon: HiLightningBolt, color: "from-orange-500 to-red-500" },
  { value: "∞", label: "Learning Spirit", icon: HiAcademicCap, color: "from-green-500 to-emerald-500" },
];

export default function Home() {
  const typedText = useTypingEffect({ words: TYPING_WORDS, typingSpeed: 80, deletingSpeed: 40 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Text Content */}
            <div className={`lg:w-3/5 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-8 animate-pulse-slow">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Available for new opportunities
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-slate-800 dark:text-white">Hi, I'm </span>
                <span className="gradient-text-animated">Ganesh</span>
                <span className="inline-block animate-wave origin-bottom-right ml-4">👋</span>
              </h1>

              {/* Typing Effect */}
              <div className="h-12 md:h-14 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">I'm a </span>
                  <span className="gradient-text">{typedText}</span>
                  <span className="animate-blink text-primary-500">|</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
                With <span className="text-primary-500 font-semibold">7.5+ years</span> of experience crafting
                high-quality iOS apps and exploring full-stack development. I love solving complex problems
                and building scalable systems that make a difference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer w-full sm:w-auto"
                >
                  <button className="btn-primary w-full sm:w-auto group">
                    <span>View My Work</span>
                    <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
                  </button>
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer w-full sm:w-auto"
                >
                  <button className="btn-outline w-full sm:w-auto">
                    <HiSparkles />
                    <span>Let's Connect</span>
                  </button>
                </ScrollLink>
              </div>

              {/* Social Links */}
              <SocialLinks />
            </div>

            {/* Right: Profile Image */}
            <div className={`lg:w-2/5 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 md:w-96 md:h-96 border border-primary-500/20 rounded-full animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 md:w-80 md:h-80 border border-purple-500/20 rounded-full animate-spin-reverse" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-glow-md animate-float">
                  🚀
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl shadow-glow-cyan animate-float-slow">
                  💻
                </div>
                <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white shadow-glow-pink animate-float-fast">
                  ⚡
                </div>

                {/* Profile Image Container */}
                <div className="relative w-64 h-64 md:w-72 md:h-72">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-full animate-morph" />

                  {/* Image */}
                  <div className="absolute inset-2 bg-slate-50 dark:bg-slate-900 rounded-full overflow-hidden">
                    <img
                      src={profilePic}
                      alt="Ganesh Patil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <ScrollLink to="stats" smooth={true} duration={500} offset={-100} className="cursor-pointer">
              <div className="w-8 h-12 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 animate-bounce" />
              </div>
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="group card-glass p-6 text-center hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="card-glass p-8 md:p-12 glow-box">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary-500 to-purple-600 p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-3xl flex items-center justify-center">
                    <span className="text-7xl">🧑‍💻</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="section-heading">
                  About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full mb-6" />
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4">
                  I'm a passionate iOS developer with <span className="text-primary-500 font-semibold">7.5+ years</span> of experience building apps in Swift, SwiftUI, and Objective-C. I love diving into full-stack web development — React, Node.js, MongoDB, and more.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  When I'm not coding, you'll find me exploring AI, creating games in Unity, solving puzzles, or battling bosses in Souls-like games. Always learning, always curious! 🎮
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="section-subheading">
              Technologies I love working with
            </p>
          </div>
          <TechStack />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </div>
  );
}
