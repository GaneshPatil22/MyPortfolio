import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      // First go to Home
      navigate("/");

      // Delay scroll until Home is rendered
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 500,
          smooth: true,
          offset: -70, // adjust for navbar height
        });
      }, 100);
    } else {
      // Already on Home → just scroll
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleScroll("hero")} className="text-2xl font-bold text-blue-600">
          Ganesh
        </button>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <button onClick={() => handleScroll("hero")} className="text-gray-700 hover:text-blue-600">
            Home
          </button>
          <button onClick={() => handleScroll("projects")} className="text-gray-700 hover:text-blue-600">
            Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="text-gray-700 hover:text-blue-600">
            Contact
          </button>
          <Link to="/blogs" className="text-gray-700 hover:text-blue-600">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}
