import { motion } from "motion/react";
import { Camera, Coffee, Heart, Palette, Sparkles, Video } from "lucide-react";

export function About() {
  const categories = [
    { icon: <Coffee size={20} />, label: "Daily Life Moments", color: "text-amber-300" },
    { icon: <Heart size={20} />, label: "Fitness Journey", color: "text-rose-400" },
    { icon: <Palette size={20} />, label: "Fashion & Style", color: "text-purple-400" },
    { icon: <Video size={20} />, label: "Entertainment Reels", color: "text-blue-400" },
    { icon: <Sparkles size={20} />, label: "Mood-Based Content", color: "text-brand-pink" },
    { icon: <Camera size={20} />, label: "Lifestyle Content", color: "text-emerald-400" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tight mb-4"
          >
            Who is <span className="italic font-light text-pink-200">Bani?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A passionate content creator crafting aesthetic stories, inspiring daily routines, and building a community around authentic lifestyle moments.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Story Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[80px] rounded-full" />
            <h3 className="text-2xl font-serif font-semibold mb-6">The Journey</h3>
            <div className="space-y-4 text-white/70 leading-relaxed font-light">
              <p>
                My journey into content creation started with a simple desire to document life's beautiful, fleeting moments. What began as a visual diary has grown into a vibrant space where I share my passions, learnings, and lifestyle with thousands.
              </p>
              <p>
                I believe in aesthetics with substance. Whether I'm showcasing a new fashion find, taking you through my morning fitness routine, or simply sharing a mood-based cinematic reel, my goal is always to inspire and connect.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-sm text-white/50 mb-1">Established</div>
                <div className="font-serif font-medium text-lg">2021</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop" 
                alt="Bani Profile" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
              />
            </div>
          </motion.div>

          {/* Categories Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {categories.map((item, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className={`p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-white/80">{item.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
