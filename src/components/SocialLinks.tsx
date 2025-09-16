import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface Props {
  theme?: "light" | "dark"; // optional prop, defaults to light
}

export default function SocialLinks({ theme = "light" }: Props) {
  const baseColor =
    theme === "light"
      ? "text-gray-600 hover:text-black"
      : "text-gray-400 hover:text-white";

  const size = "text-2xl transition";

  return (
    <div className="p-3 flex space-x-6">
      <a
        href="https://github.com/GaneshPatil22"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseColor} ${size}`}
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/ganesh-patil-2b3431119/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseColor} ${size} hover:text-blue-500`}
      >
        <FaLinkedin />
      </a>

      {/* <a
        href="https://www.youtube.com/@yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseColor} ${size} hover:text-red-500`}
      >
        <FaYoutube />
      </a> */}

      <a
        href="https://leetcode.com/u/Sonic22/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseColor} ${size} hover:text-orange-500`}
      >
        <SiLeetcode />
      </a>
    </div>
  );
}
