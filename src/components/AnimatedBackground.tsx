export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        {/* Top left blob */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />

        {/* Top right blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-cyan-400 to-primary-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" style={{ animationDelay: '2s' }} />

        {/* Middle blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" style={{ animationDelay: '4s' }} />

        {/* Bottom left blob */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-3000" style={{ animationDelay: '3s' }} />

        {/* Bottom right blob */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-primary-400 to-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-5000" style={{ animationDelay: '5s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-50/80 dark:to-slate-950/80" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 dark:bg-primary-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
