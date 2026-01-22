import { Link } from "react-router-dom";
import { HiHome, HiSparkles } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="text-center relative">
        {/* Animated icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
          <div className="relative w-32 h-32 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-morph">
            <span className="text-6xl">🚀</span>
          </div>
          {/* Floating sparkles */}
          <div className="absolute -top-4 -right-4 animate-float">
            <HiSparkles className="text-3xl text-amber-400" />
          </div>
          <div className="absolute -bottom-2 -left-4 animate-float-slow">
            <HiSparkles className="text-2xl text-cyan-400" />
          </div>
        </div>

        {/* 404 text */}
        <h1 className="text-9xl md:text-[12rem] font-bold mb-4 relative">
          <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            404
          </span>
          {/* Glitch effect layers */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent opacity-0 hover:opacity-30 transition-opacity" style={{ transform: 'translate(2px, 2px)' }}>
            404
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
          The page you're looking for seems to have wandered off into the digital void.
          Let's get you back home!
        </p>

        {/* Back to home button */}
        <Link
          to="/"
          className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/30"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-[length:200%_auto] animate-gradient-x" />

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <span className="relative flex items-center gap-2">
            <HiHome className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Take Me Home</span>
          </span>
        </Link>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 animate-bounce"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
