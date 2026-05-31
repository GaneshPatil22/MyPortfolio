import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiCode, HiUsers, HiCollection } from "react-icons/hi";

const GITHUB_USERNAME = "GaneshPatil22";
const LEETCODE_USERNAME = "Sonic22";

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  stars: number;
  forks: number;
  topLanguages: { name: string; count: number; color: string }[];
}

const LANG_COLORS: Record<string, string> = {
  Swift: "#F05138",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "C#": "#239120",
  Python: "#3776AB",
  Java: "#ED8B00",
  Kotlin: "#7F52FF",
  Dart: "#0175C2",
};

export default function GitHubStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) return;

        const user = await userRes.json();
        const repos = await reposRes.json();

        const langMap: Record<string, number> = {};
        let stars = 0;
        let forks = 0;

        for (const repo of repos) {
          stars += repo.stargazers_count || 0;
          forks += repo.forks_count || 0;
          const lang = repo.language;
          if (lang) langMap[lang] = (langMap[lang] || 0) + 1;
        }

        const topLanguages = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            count,
            color: LANG_COLORS[name] || "#6366f1",
          }));

        setGithubData({
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          stars,
          forks,
          topLanguages,
        });
      } catch {
        // silently fail
      }
    }

    fetchGitHubData();
  }, []);

  const totalLangCount = githubData?.topLanguages.reduce((sum, l) => sum + l.count, 0) || 1;

  return (
    <div ref={ref} className="px-6 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <h2 className="section-heading">Dev Stats</h2>
        <p className="section-subtext">GitHub contributions and LeetCode progress</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <FaGithub className="text-lg text-slate-700 dark:text-slate-300" />
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</h3>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 dark:text-primary-400 hover:underline ml-auto"
            >
              @{GITHUB_USERNAME}
            </a>
          </div>

          {githubData && (
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: HiCollection, label: "Repos", value: githubData.publicRepos },
                { icon: FaStar, label: "Stars", value: githubData.stars },
                { icon: HiUsers, label: "Followers", value: githubData.followers },
                { icon: FaCodeBranch, label: "Forks", value: githubData.forks },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <stat.icon className="mx-auto text-slate-400 mb-1" size={14} />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-[10px] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {githubData && (
            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 mb-3">
                <HiCode className="text-slate-400" size={14} />
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Top Languages</h4>
              </div>

              <div className="flex rounded-full overflow-hidden h-2 mb-3">
                {githubData.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full"
                    style={{
                      width: `${(lang.count / totalLangCount) * 100}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.count} repos`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {githubData.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
                    <span className="text-slate-600 dark:text-slate-400">{lang.name}</span>
                    <span className="text-slate-400 text-[10px]">
                      {((lang.count / totalLangCount) * 100).toFixed(0)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Streak */}
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden p-1">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=6366f1&fire=6366f1&currStreakLabel=6366f1&sideLabels=64748b&dates=94a3b8`}
              alt="GitHub Streak"
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Contribution */}
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
            <h4 className="text-xs font-medium text-slate-500 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Contributions
            </h4>
            <img
              src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
              alt="GitHub Contributions"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* LeetCode */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <SiLeetcode className="text-lg text-orange-500" />
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">LeetCode</h3>
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 dark:text-primary-400 hover:underline ml-auto"
            >
              @{LEETCODE_USERNAME}
            </a>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden p-1">
            <img
              src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=light&font=Nunito&ext=heatmap&border=0&radius=8`}
              alt="LeetCode Stats"
              className="w-full dark:hidden"
              loading="lazy"
            />
            <img
              src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=8`}
              alt="LeetCode Stats"
              className="w-full hidden dark:block"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
