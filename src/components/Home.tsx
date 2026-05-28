import profilePic from "/assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import Experience from "./Experience";
import GitHubStats from "./GitHubStats";
import AnimatedSection from "./AnimatedSection";
import { Link as ScrollLink } from "react-scroll";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { HiArrowDown, HiSparkles, HiCode, HiBriefcase, HiLightningBolt, HiAcademicCap, HiDownload, HiExternalLink } from "react-icons/hi";
import { useEffect, useState } from "react";

const TYPING_WORDS = [
  "iOS Developer",
  "Full-Stack Developer",
  "Founder @ CoreLearnly",
  "Problem Solver",
  "Swift Expert",
  "React Developer",
];

const STATS = [
  { value: "8.5+", label: "Years Experience", icon: HiBriefcase, color: "from-blue-500 to-cyan-500" },
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
    <div className="pt-14">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 py-10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: Text Content */}
            <div className={`lg:w-3/5 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-4 animate-pulse-slow">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Available for new opportunities
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-slate-800 dark:text-white">Hi, I'm </span>
                <span className="gradient-text-animated">Ganesh</span>
                <span className="inline-block animate-wave origin-bottom-right ml-4">👋</span>
              </h1>

              {/* Typing Effect */}
              <div className="h-12 md:h-14 mb-5">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">I'm a </span>
                  <span className="gradient-text">{typedText}</span>
                  <span className="animate-blink text-primary-500">|</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl leading-relaxed">
                With <span className="text-primary-500 font-semibold">8.5+ years</span> of experience crafting
                high-quality iOS apps and exploring full-stack development. I love solving complex problems
                and building scalable systems that make a difference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer"
                >
                  <button className="btn-primary group">
                    <span>View My Work</span>
                    <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
                  </button>
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer"
                >
                  <button className="btn-outline">
                    <HiSparkles />
                    <span>Let's Connect</span>
                  </button>
                </ScrollLink>

                <a
                  href="/assets/Ganesh_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-600 dark:text-primary-400 border-2 border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
                >
                  <HiDownload className="text-lg" />
                  Resume
                </a>

                <a
                  href="https://corelearnly.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-purple-600 dark:text-purple-400 border-2 border-purple-500/30 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <HiExternalLink className="text-lg" />
                  Blog
                </a>
              </div>

              {/* CoreLearnly subtle mention */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <span>Also building</span>
                <a
                  href="https://corelearnly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  CoreLearnly
                  <HiExternalLink size={14} />
                </a>
                <span>— DSA, System Design & AI for engineers</span>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-full animate-morph" />
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <ScrollLink to="about" smooth={true} duration={500} offset={-100} className="cursor-pointer">
              <div className="w-8 h-12 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 animate-bounce" />
              </div>
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* About + Stats — Merged compact section */}
      <AnimatedSection>
        <section id="about" className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="card-glass p-6 md:p-10 glow-box">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4 flex justify-center shrink-0">
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">🧑‍💻</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">
                    About <span className="gradient-text">Me</span>
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full mb-4" />
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    I'm a passionate iOS developer with <span className="text-primary-500 font-semibold">8.5+ years</span> of experience building apps in Swift, SwiftUI, and Objective-C. I also dive into full-stack web development — React, Node.js, MongoDB, and more.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    When I'm not coding, you'll find me exploring AI, creating games in Unity, solving puzzles, or battling bosses in Souls-like games. Always learning, always curious! 🎮
                  </p>

                  {/* Inline Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {STATS.map((stat, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300"
                      >
                        <div className={`w-9 h-9 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                          <stat.icon className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="text-lg font-bold gradient-text leading-tight">{stat.value}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tech Stack — Tighter padding */}
      <AnimatedSection>
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                My <span className="gradient-text">Tech Stack</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Technologies I love working with
              </p>
            </div>
            <TechStack />
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection>
        <section id="experience" className="py-10">
          <Experience />
        </section>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection>
        <section id="projects" className="py-10">
          <Projects />
        </section>
      </AnimatedSection>

      {/* GitHub & LeetCode Stats */}
      <AnimatedSection>
        <section id="stats-dev" className="py-10">
          <GitHubStats />
        </section>
      </AnimatedSection>

      {/* Blog + CoreLearnly — Compact inline banner */}
      <AnimatedSection>
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-glass p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="text-4xl shrink-0">📝</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                  I Write About <span className="gradient-text">Tech & Engineering</span>
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Articles on DSA, System Design, iOS development, and AI productivity on CoreLearnly.
                </p>
              </div>
              <a
                href="https://corelearnly.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white text-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary-600 to-pink-600 bg-[length:200%_auto] animate-gradient-x" />
                <span className="relative z-10 flex items-center gap-2">
                  <HiExternalLink className="group-hover:rotate-12 transition-transform" />
                  Read Blog
                </span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
        <section id="contact" className="py-12">
          <Contact />
        </section>
      </AnimatedSection>
    </div>
  );
}
