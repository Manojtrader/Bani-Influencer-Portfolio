import { motion } from "motion/react";

export function BrandsMarquee() {
  const brands = [
    "VOGUE", "CHANEL", "NIKE", "L'ORÉAL", "SELMER", "GYMSHARK", "FENTY", "AVAILABLE FOR COLLABORATIONS"
  ];
  
  // Duplicate array multiple times to ensure seamless infinite scroll
  const scrollContent = [...brands, ...brands];

  return (
    <div className="py-12 border-y border-white/5 bg-white-[0.02] overflow-hidden flex items-center relative mix-blend-screen">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      
      <motion.div 
        className="flex gap-24 whitespace-nowrap px-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {scrollContent.map((brand, i) => (
          <span 
            key={i} 
            className={`text-2xl md:text-3xl font-serif tracking-widest uppercase flex items-center gap-24 ${
              brand === "AVAILABLE FOR COLLABORATIONS" 
                ? "text-pink-400 font-bold drop-shadow-[0_0_10px_rgba(244,114,182,0.3)]" 
                : "text-white/20 font-light hover:text-white/40 transition-colors"
            }`}
          >
            {brand}
            {/* Add bullet point separator */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
