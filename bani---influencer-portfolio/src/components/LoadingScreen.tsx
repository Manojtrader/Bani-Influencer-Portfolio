import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
      onAnimationComplete={() => setIsVisible(false)}
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
      <div className="text-4xl md:text-5xl font-bold tracking-tighter flex items-center gap-4 mb-8">
        <motion.span 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full"
        />
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          BANI
        </motion.span>
      </div>
      <div className="w-64 h-[2px] bg-white/10 overflow-hidden relative">
        <motion.div
           initial={{ width: "0%" }}
           animate={{ width: "100%" }}
           transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
           className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_10px_#f472b6]"
        />
      </div>
    </motion.div>
  );
}
