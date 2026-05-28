import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiTrendingUp, HiCode, HiUsers, HiCollection } from "react-icons/hi";

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
        // Silently fail — cards just won't show data
      }
    }

    fetchGitHubData();
  }, []);

  const totalLangCount = githubData?.topLanguages.reduce((sum, l) => sum + l.count, 0) || 1;

  return (
    <div ref={ref} className="px-6 py-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-full mb-4">
          <HiTrendingUp className="text-primary-500" />
          <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            Coding Activity
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          <span className="text-slate-800 dark:text-white">Dev </span>
          <span className="gradient-text-animated">Stats</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
          My GitHub contributions and LeetCode progress
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
              <FaGithub className="text-white text-base" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">GitHub</h3>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-500 hover:text-primary-600 ml-auto"
            >
              @{GITHUB_USERNAME}
            </a>
          </div>

          {/* GitHub Stats Grid */}
          {githubData && (
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: HiCollection, label: "Repos", value: githubData.publicRepos, gradient: "from-blue-500 to-cyan-500" },
                { icon: FaStar, label: "Stars", value: githubData.stars, gradient: "from-amber-400 to-orange-500" },
                { icon: HiUsers, label: "Followers", value: githubData.followers, gradient: "from-purple-500 to-pink-500" },
                { icon: FaCodeBranch, label: "Forks", value: githubData.forks, gradient: "from-green-500 to-emerald-500" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="group card-glass p-3 text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${stat.gradient} rounded-lg mb-2 shadow-sm group-hover:scale-110 transition-all duration-300`}>
                    <stat.icon className="text-white text-sm" />
                  </div>
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Top Languages */}
          {githubData && (
            <div className="card-glass p-4">
              <div className="flex items-center gap-2 mb-3">
                <HiCode className="text-primary-500 text-sm" />
                <h4 className="font-semibold text-sm text-slate-800 dark:text-white">Top Languages</h4>
              </div>

              {/* Language bar */}
              <div className="flex rounded-full overflow-hidden h-2.5 mb-3">
                {githubData.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full transition-all duration-500 first:rounded-l-full last:rounded-r-full"
                    style={{
                      width: `${(lang.count / totalLangCount) * 100}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.count} repos`}
                  />
                ))}
              </div>

              {/* Language labels */}
              <div className="flex flex-wrap gap-2">
                {githubData.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1 text-xs">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{lang.name}</span>
                    <span className="text-slate-400 text-xs">
                      {((lang.count / totalLangCount) * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Streak */}
          <div className="card-glass p-1.5 overflow-hidden rounded-xl">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=00000000&ring=6366f1&fire=a855f7&currStreakLabel=818cf8&sideLabels=94a3b8&dates=64748b`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>

          {/* GitHub Contribution Graph */}
          <div className="card-glass p-3 overflow-hidden rounded-xl">
            <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Contribution Graph
            </h4>
            <img
              src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
              alt="GitHub Contribution Chart"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <SiLeetcode className="text-white text-base" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">LeetCode</h3>
            <a
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-500 hover:text-primary-600 ml-auto"
            >
              @{LEETCODE_USERNAME}
            </a>
          </div>

          {/* LeetCode Stats Card */}
          <div className="card-glass p-1.5 overflow-hidden rounded-xl">
            <img
              src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=12`}
              alt="LeetCode Stats"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
