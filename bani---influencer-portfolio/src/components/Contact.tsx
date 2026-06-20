import { motion } from "motion/react";
import { Send, Instagram, Youtube, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
          
          <div className="grid lg:grid-cols-5 gap-16 relative z-10">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tight mb-4">Start a <br/><span className="italic font-light text-pink-200">Conversation</span></h2>
                <p className="text-white/60">
                  Interested in a collaboration, sponsorship, or just want to say hi? Fill out the form and my team will get back to you shortly.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Connect Direct</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors group">
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors group">
                    <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors group">
                    {/* Ghost icon for snapchat alternative or keep twitter for standard */}
                    <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 pl-2">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 pl-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink transition-colors" placeholder="john@brand.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 pl-2">Brand / Company</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink transition-colors" placeholder="Your Brand" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50 pl-2">Collaboration Type</label>
                    <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/70 appearance-none focus:outline-none focus:border-brand-pink transition-colors">
                      <option value="" disabled className="bg-black text-white">Select Type</option>
                      <option value="sponsorship" className="bg-black text-white">Dedicated Video / Reel</option>
                      <option value="integration" className="bg-black text-white">Product Integration</option>
                      <option value="ambassador" className="bg-black text-white">Brand Ambassadorship</option>
                      <option value="other" className="bg-black text-white">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 pl-2">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink transition-colors resize-none" placeholder="Tell me about your campaign..." />
                </div>

                <button className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold tracking-wide hover:bg-brand-pink hover:text-white transition-all flex items-center justify-center gap-2 group">
                  Send Proposal
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
