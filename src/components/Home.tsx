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
import { HiArrowDown, HiDownload, HiExternalLink } from "react-icons/hi";
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
  { value: "8.5+", label: "Years Exp." },
  { value: "12+", label: "Projects" },
  { value: "5+", label: "Technologies" },
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
        className="min-h-[90vh] flex items-center px-6 py-16"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div className={`lg:w-3/5 text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {/* Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-200 dark:border-green-800 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-green-700 dark:text-green-400 text-xs font-medium">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-slate-900 dark:text-white">
                Hi, I'm Ganesh
              </h1>

              {/* Typing Effect */}
              <div className="h-10 md:h-12 mb-5">
                <h2 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">
                  {typedText}
                  <span className="animate-blink text-primary-500 ml-0.5">|</span>
                </h2>
              </div>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
                8.5+ years crafting high-quality iOS apps and full-stack web experiences.
                I love solving complex problems and building systems that make a difference.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="cursor-pointer"
                >
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors">
                    View My Work
                    <HiArrowDown size={14} />
                  </button>
                </ScrollLink>

                <a
                  href="/assets/Ganesh_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <HiDownload size={14} />
                  Resume
                </a>

                <a
                  href="https://corelearnly.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <HiExternalLink size={14} />
                  Blog
                </a>
              </div>

              {/* Also building */}
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                Also building{" "}
                <a
                  href="https://corelearnly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary-600 dark:text-primary-400 hover:underline"
                >
                  CoreLearnly
                </a>
                {" "}&mdash; DSA, System Design & AI for engineers
              </p>

              <SocialLinks />
            </div>

            {/* Profile Image */}
            <div className={`lg:w-2/5 flex justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-card">
                  <img
                    src={profilePic}
                    alt="Ganesh Patil"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stats below image */}
                <div className="flex justify-center gap-6 mt-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <AnimatedSection>
        <section id="about" className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a passionate iOS developer with <span className="font-semibold text-slate-900 dark:text-white">8.5+ years</span> of experience building apps in Swift, SwiftUI, and Objective-C. I also dive into full-stack web development with React, Node.js, and MongoDB.
              </p>
              <p>
                When I'm not coding, you'll find me exploring AI, creating games in Unity, solving puzzles, or battling bosses in Souls-like games. Always learning, always curious.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection>
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-heading">Tech Stack</h2>
              <p className="section-subtext">Technologies I work with</p>
            </div>
            <TechStack />
          </div>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection>
        <section id="experience" className="py-16">
          <Experience />
        </section>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection>
        <section id="projects" className="py-16">
          <Projects />
        </section>
      </AnimatedSection>

      {/* GitHub Stats */}
      <AnimatedSection>
        <section className="py-16">
          <GitHubStats />
        </section>
      </AnimatedSection>

      {/* Blog CTA */}
      <AnimatedSection>
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  I write about tech & engineering
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  DSA, System Design, iOS development, and AI productivity on CoreLearnly.
                </p>
              </div>
              <a
                href="https://corelearnly.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
              >
                <HiExternalLink size={14} />
                Read Blog
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </AnimatedSection>
    </div>
  );
}
