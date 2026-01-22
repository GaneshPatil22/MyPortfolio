import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-slate-200/50 dark:bg-slate-800/50">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-glow-sm"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
