import { motion } from "motion/react";
import { Instagram, Youtube, Heart, MessageCircle, Eye } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out function
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function SocialStats() {
  return (
    <section id="stats" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tight mb-4"
          >
            Digital <span className="italic font-light text-pink-200">Footprint</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Instagram Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-8 border-t-4 border-t-brand-pink relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center shadow-lg">
                <Instagram size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">@bani.lifestyle</h3>
                <p className="text-white/50 text-sm">Main Hub</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="glass rounded-3xl p-6 space-y-1">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter end={8500} />+
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Followers</div>
              </div>
              <div className="glass rounded-3xl p-6 space-y-1">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter end={120} />+
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Posts</div>
              </div>
              <div className="col-span-2 glass rounded-3xl p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xl font-bold text-white">High</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Engagement Rate</div>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 text-brand-pink"><Heart size={16} fill="currentColor" /> <span className="text-xs">Avg 1.2k</span></div>
                  <div className="flex items-center gap-1 text-white/70"><MessageCircle size={16} /> <span className="text-xs">Active</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* YouTube Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-[2rem] p-8 border-t-4 border-t-red-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center shadow-lg">
                <Youtube size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bani Vlogs</h3>
                <p className="text-white/50 text-sm">Long Form & Shorts</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="glass rounded-3xl p-6 space-y-1">
                <div className="text-3xl font-bold text-white">
                  Growing
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Community</div>
              </div>
              <div className="glass rounded-3xl p-6 space-y-1">
                <div className="text-3xl font-bold text-white">
                  Weekly
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Uploads</div>
              </div>
              <div className="col-span-2 glass rounded-3xl p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xl font-bold text-white">Shorts</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40">Viral Reach</div>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Eye size={18} /> <span className="text-sm font-medium">50k+ Monthly</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
