import { motion } from "motion/react";
import { Play, Heart, MessageCircle } from "lucide-react";

export function ReelsGallery() {
  const reels = [
    { id: 1, type: "Lifestyle", img: "https://images.unsplash.com/photo-1515347619152-cb6b0a701fae?q=80&w=600&auto=format&fit=crop", likes: "1.2k", comments: "128" },
    { id: 2, type: "Fashion", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop", likes: "2.4k", comments: "340" },
    { id: 3, type: "Fitness", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop", likes: "890", comments: "56" },
    { id: 4, type: "Daily Vlog", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop", likes: "3.1k", comments: "450" },
    { id: 5, type: "Travel", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", likes: "4.5k", comments: "620" },
    { id: 6, type: "Mood", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop", likes: "1.8k", comments: "190" },
  ];

  return (
    <section id="reels" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tight mb-4"
            >
              Featured <span className="italic font-light text-pink-200">Reels</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 max-w-md"
            >
              A curated collection of my most engaging content.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 rounded-full glass border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            View All on Instagram
          </motion.a>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reels.map((reel) => (
              <div key={reel.id} className="relative group rounded-3xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500 break-inside-avoid">
                <img 
                  src={reel.img} 
                  alt={reel.type} 
                  className="w-full block object-cover rounded-3xl transform group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                      <Play fill="white" size={24} className="ml-1" />
                    </div>
                  </div>
                  
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 rounded-full glass text-xs font-medium mb-3">
                      {reel.type}
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-1.5 text-sm font-medium">
                        <Heart size={16} className="text-brand-pink" fill="currentColor" /> {reel.likes}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-medium">
                        <MessageCircle size={16} /> {reel.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
