import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-slate-200 dark:text-slate-800 mb-4">
          404
        </h1>

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
          Page not found
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. Let's get you back home.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
        >
          <HiHome size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
