import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiBriefcase, HiExternalLink, HiLocationMarker, HiClock } from "react-icons/hi";

interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  description?: string;
  highlights?: string[];
  skills: string[];
  gradient: string;
  linkedProject?: string;
  projectLink?: string;
}

const EXPERIENCES: Experience[] = [
  {
    title: "Founder & Technical Mentor",
    company: "CoreLearnly",
    type: "Part-time",
    period: "Dec 2025 - Present",
    duration: "6 mos",
    location: "Pune, Maharashtra, India",
    mode: "Remote",
    description:
      "Founded a learning-focused initiative teaching software engineers to upskill in DSA, System Design, and AI productivity for real-world engineering tasks.",
    highlights: [
      "Launched free 8-hour webinar with 4 hrs/day sessions",
      "Running 6-month cohort with alternate-day classes & weekend AI deep-dives",
      "Early offer: First 20 students get 2 months free (Beginner Module)",
    ],
    skills: ["AI for Career Development", "Generative AI", "System Design", "DSA", "Mentoring", "EdTech"],
    gradient: "from-indigo-500 to-blue-500",
    linkedProject: "CoreLearnly",
    projectLink: "https://corelearnly.com/",
  },
  {
    title: "Sr. iOS Developer",
    company: "MTailor",
    type: "Full-time",
    period: "Oct 2023 - Present",
    duration: "2 yrs 8 mos",
    location: "India",
    mode: "Remote",
    description:
      "Building a custom clothing app that uses phone-based body measurements to deliver perfectly fitted apparel.",
    skills: ["Swift", "Generative AI", "Algorithms", "iOS", "AR"],
    gradient: "from-violet-500 to-purple-500",
    linkedProject: "MTailor",
    projectLink: "https://apps.apple.com/in/app/mtailor-custom-clothing/id816042916",
  },
  {
    title: "Sr. iOS Developer",
    company: "Deutsche Telekom Digital Labs",
    type: "Full-time",
    period: "Feb 2023 - Oct 2023",
    duration: "9 mos",
    location: "Gurugram, Haryana, India",
    mode: "Remote",
    description:
      "Developed a unified multi-country app replacing multiple codebases with a single architecture.",
    skills: ["Swift", "iOS", "Multi-tenant Architecture", "CI/CD"],
    gradient: "from-rose-500 to-red-500",
    linkedProject: "One App",
    projectLink: "https://dtdl.in/dtdl-tech",
  },
  {
    title: "Sr. iOS Developer",
    company: "Zebra Technologies",
    type: "Full-time",
    period: "Dec 2021 - Feb 2023",
    duration: "1 yr 3 mos",
    location: "India",
    mode: "On-site",
    description:
      "Built employee self-service and store management iOS apps for enterprise workforce operations.",
    skills: ["Swift", "iOS", "Enterprise Apps", "Workforce Management"],
    gradient: "from-green-500 to-emerald-500",
    linkedProject: "ESS 45 Zebra",
    projectLink: "https://apps.apple.com/cv/app/ess-45-zebra/id1531525719",
  },
  {
    title: "Deputy Manager",
    company: "Jio",
    type: "Full-time",
    period: "May 2021 - Dec 2021",
    duration: "8 mos",
    location: "Mumbai, Maharashtra, India",
    mode: "On-site",
    description:
      "Contributed to JioMart and MyJio — India's leading grocery delivery and telecom super-apps.",
    skills: ["Swift", "iOS", "Large-scale Apps", "Agile"],
    gradient: "from-blue-500 to-cyan-500",
    linkedProject: "JioMart",
    projectLink: "https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683",
  },
  {
    title: "Software Developer",
    company: "Tudip Technologies",
    type: "Full-time",
    period: "Nov 2017 - Apr 2021",
    duration: "3 yrs 6 mos",
    location: "Pune, Maharashtra, India",
    mode: "On-site",
    description:
      "Started iOS career building event management platforms and learning the fundamentals of mobile development.",
    skills: ["Swift", "Objective-C", "iOS", "Firebase", "REST APIs"],
    gradient: "from-orange-500 to-pink-500",
    linkedProject: "Eventur",
    projectLink: "https://www.eventur.com/",
  },
];

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-8 md:gap-16">
      {/* Timeline center line dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${experience.gradient} shadow-lg ring-4 ring-white dark:ring-slate-900`}
        />
      </div>

      {/* Mobile timeline dot */}
      <div className="md:hidden absolute left-0 top-0 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${experience.gradient} shadow-lg ring-4 ring-white dark:ring-slate-900`}
        />
      </div>

      {/* Content - alternating sides on desktop */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`md:col-span-1 ${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2"} ml-8 md:ml-0`}
      >
        <div className="group card-glass p-6 glow-box hover:scale-[1.02] transition-all duration-300">
          {/* Period badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            isLeft ? "md:ml-auto" : ""
          } bg-gradient-to-r ${experience.gradient} text-white`}>
            <HiClock size={12} />
            {experience.period}
          </div>

          {/* Title & Company */}
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-primary-500 font-semibold mb-1">
            {experience.company} · {experience.type}
          </p>

          {/* Location & Duration */}
          <div className={`flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3 flex-wrap ${isLeft ? "md:justify-end" : ""}`}>
            <span className="flex items-center gap-1">
              <HiLocationMarker size={14} />
              {experience.location} · {experience.mode}
            </span>
            <span>{experience.duration}</span>
          </div>

          {/* Description */}
          {experience.description && (
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">
              {experience.description}
            </p>
          )}

          {/* Highlights */}
          {experience.highlights && (
            <ul className={`space-y-1 mb-3 ${isLeft ? "md:text-right" : ""}`}>
              {experience.highlights.map((h, i) => (
                <li key={i} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 shrink-0">+</span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Skills */}
          <div className={`flex flex-wrap gap-2 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Linked Project */}
          {experience.linkedProject && experience.projectLink && (
            <a
              href={experience.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${isLeft ? "md:ml-auto" : ""}`}
            >
              <HiExternalLink size={14} />
              View {experience.linkedProject}
            </a>
          )}
        </div>
      </motion.div>

      {/* Empty space for alternating layout */}
      <div className={`hidden md:block ${isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`} />
    </div>
  );
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-full mb-6">
          <HiBriefcase className="text-primary-500" />
          <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            Career Journey
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-slate-800 dark:text-white">Work </span>
          <span className="gradient-text-animated">Experience</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          8.5+ years of building impactful products across startups and enterprises
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line - desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 opacity-30" />

        {/* Left line - mobile */}
        <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 opacity-30" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={exp.company} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
