import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-bold tracking-wider">B<span className="text-brand-pink">.</span></span>
          </div>

          <div className="flex space-x-8 text-sm text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#reels" className="hover:text-white transition-colors">Reels</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Bani Official. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
