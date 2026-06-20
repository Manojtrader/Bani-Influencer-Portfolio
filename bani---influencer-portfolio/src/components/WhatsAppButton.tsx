import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform hover:bg-green-400 cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chat with my team
      </span>
    </motion.a>
  );
}
