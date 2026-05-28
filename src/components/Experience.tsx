import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiBriefcase, HiExternalLink, HiChevronDown } from "react-icons/hi";

interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  description: string;
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
    location: "Pune, India",
    mode: "Remote",
    description:
      "Founded a learning initiative teaching engineers DSA, System Design, and AI productivity. Running 6-month cohorts with alternate-day classes & weekend AI deep-dives.",
    skills: ["AI", "Generative AI", "System Design", "DSA", "EdTech"],
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
      "Building a custom clothing app using phone-based body measurements for perfectly fitted apparel.",
    skills: ["Swift", "Generative AI", "Algorithms", "AR"],
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
    location: "Gurugram, India",
    mode: "Remote",
    description:
      "Developed a unified multi-country app replacing multiple codebases with a single architecture.",
    skills: ["Swift", "Multi-tenant Architecture", "CI/CD"],
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
    skills: ["Swift", "Enterprise Apps", "Workforce Mgmt"],
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
    location: "Mumbai, India",
    mode: "On-site",
    description:
      "Contributed to JioMart and MyJio — India's leading grocery delivery and telecom super-apps.",
    skills: ["Swift", "Large-scale Apps", "Agile"],
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
    location: "Pune, India",
    mode: "On-site",
    description:
      "Started iOS career building event management platforms and learning the fundamentals of mobile development.",
    skills: ["Swift", "Objective-C", "Firebase", "REST APIs"],
    gradient: "from-orange-500 to-pink-500",
    linkedProject: "Eventur",
    projectLink: "https://www.eventur.com/",
  },
];

function TimelineItem({ exp, index, isOpen, onToggle }: {
  exp: Experience;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="relative pl-8">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={`absolute left-0 top-5 w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} shadow-md ring-4 ring-white dark:ring-slate-900 z-10`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <button
          onClick={onToggle}
          className="w-full text-left card-glass p-5 hover:scale-[1.01] transition-all duration-300 group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  {exp.title}
                </h3>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${exp.gradient} text-white`}>
                  {exp.duration}
                </span>
              </div>
              <p className="text-primary-500 font-medium text-sm">
                {exp.company} · {exp.type} · {exp.mode}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{exp.period} · {exp.location}</p>
            </div>
            <HiChevronDown
              className={`text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              size={20}
            />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 mt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}

                    {exp.linkedProject && exp.projectLink && (
                      <a
                        href={exp.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary-500 hover:text-primary-600 ml-auto"
                      >
                        <HiExternalLink size={12} />
                        {exp.linkedProject}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1]));

  const toggle = (idx: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-full mb-4">
          <HiBriefcase className="text-primary-500" />
          <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            Career Journey
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          <span className="text-slate-800 dark:text-white">Work </span>
          <span className="gradient-text-animated">Experience</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
          8.5+ years building impactful products across startups and enterprises
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 opacity-30" />

        <div className="space-y-4">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem
              key={exp.company}
              exp={exp}
              index={idx}
              isOpen={openItems.has(idx)}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
