import { Link } from "react-router-dom";
import { HiHome, HiEmojiSad } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 text-primary-600 rounded-full mb-8">
          <HiEmojiSad size={48} />
        </div>

        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Page Not Found
        </h2>

        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <Link to="/" className="btn-primary">
          <HiHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
