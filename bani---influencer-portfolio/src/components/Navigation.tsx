import { motion } from "motion/react";
import { Instagram, Youtube, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Stats", href: "#stats" },
    { name: "Reels", href: "#reels" },
    { name: "Collab", href: "#collab" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`glass px-12 py-4 flex flex-col md:flex-row items-center justify-between transition-all duration-300 w-full ${
            isScrolled ? "bg-black/40 border-b border-white/10" : "bg-white/5 border-b border-white/10"
          }`}>
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full"></span>
              BANI
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase opacity-80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-pink-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-brand-pink hover:scale-110 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-red-400 hover:scale-110 transition-all">
                <Youtube size={18} />
              </a>
              <a href="#contact" className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold tracking-widest hover:bg-white/10 transition-all uppercase flex items-center justify-center">
                Work With Me
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl uppercase tracking-widest hover:text-brand-pink transition-colors text-white font-serif"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-medium uppercase tracking-widest mt-8 flex items-center gap-2">
            <Mail size={16} /> Work With Me
          </a>
        </motion.div>
      )}
    </>
  );
}
