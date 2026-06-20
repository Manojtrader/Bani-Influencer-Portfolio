import { motion } from "motion/react";
import { Instagram, Youtube, Sparkles, Play, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = [
    "Content Creator",
    "Lifestyle Influencer",
    "Reel Creator",
    "Digital Personality",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold tracking-[0.2em] uppercase w-fit"
            >
              <span className="flex items-center gap-2"><Sparkles size={12} className="text-pink-400" /> Digital Personality</span>
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tight mb-4">
                Create <br/><span className="italic font-light text-pink-200">with Heart</span>
              </h1>
              <div className="h-[40px] md:h-[60px] overflow-hidden hidden">
                <motion.p
                  key={currentTextIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-white/60 font-light"
                >
                  {animatedTexts[currentTextIndex]}
                </motion.p>
              </div>
            </div>

            <blockquote className="text-lg opacity-60 max-w-md font-light leading-relaxed my-6">
              "Never Give Up. Don't let people stop your dreams." — Bani’s personal philosophy for growth.
            </blockquote>

            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:scale-105 transition-transform flex items-center justify-center">
                Work With Me
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-colors flex items-center justify-center">
                <Instagram size={18} className="mr-2 inline" /> Instagram
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/10 mt-8">
              {[
                { label: "Followers", value: "8.2K" },
                { label: "Content Posts", value: "100+" },
                { label: "Engagement", value: "4.5%" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl space-y-1">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block absolute right-[-5%] bottom-0 w-[480px] h-[650px] bg-gradient-to-b from-white/10 to-transparent rounded-t-[100px] border-t border-x border-white/10 z-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale brightness-75 contrast-125 mix-blend-overlay"></div>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
