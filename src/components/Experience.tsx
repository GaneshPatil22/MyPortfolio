import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiChevronDown } from "react-icons/hi";

interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  description: string;
  skills: string[];
  linkedProject?: string;
  projectLink?: string;
}

const EXPERIENCES: ExperienceItem[] = [
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
    linkedProject: "Eventur",
    projectLink: "https://www.eventur.com/",
  },
];

function TimelineItem({ exp, index, isOpen, onToggle }: {
  exp: ExperienceItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="relative pl-6">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-950 z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <button
          onClick={onToggle}
          className="w-full text-left p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors bg-white dark:bg-slate-900/50"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                {exp.company} · {exp.type} · {exp.mode}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{exp.period} · {exp.location}</p>
            </div>
            <HiChevronDown
              className={`text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              size={18}
            />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline ml-auto"
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
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 15 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <h2 className="section-heading">Work Experience</h2>
        <p className="section-subtext">
          8.5+ years building impactful products across startups and enterprises
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[4px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-3">
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
