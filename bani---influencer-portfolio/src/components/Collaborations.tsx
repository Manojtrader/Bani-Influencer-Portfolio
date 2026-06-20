import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Zap, Users, Camera, Clock, Download } from "lucide-react";

export function Collaborations() {
  const benefits = [
    { icon: <Users size={24} />, title: "Engaged Audience", desc: "A loyal community that actively interacts with content." },
    { icon: <Camera size={24} />, title: "Authentic Content", desc: "High-quality, aesthetic, and believable brand integration." },
    { icon: <TrendingUp size={24} />, title: "High Reach", desc: "Consistent performance targeting the right demographic." },
    { icon: <Zap size={24} />, title: "Creative Storytelling", desc: "Unique concepts that highlight product value naturally." },
    { icon: <Clock size={24} />, title: "Fast Delivery", desc: "Professional turnaround times for review and posting." },
    { icon: <CheckCircle2 size={24} />, title: "Professionalism", desc: "Clear communication and adherence to brand guidelines." },
  ];

  return (
    <section id="collab" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold tracking-[0.2em] uppercase w-fit mb-6">
                Partnerships
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tight mb-6">
                Let's Work <br/><span className="italic font-light text-pink-200">Together.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Elevate your brand with premium, aesthetic content that resonates. I partner with brands that align with my values to create authentic stories. Available for collaborations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Fashion Brands', 'Beauty Brands', 'Lifestyle Products', 'Fitness Brands', 'Local Businesses', 'Social Campaigns'].map((category, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-pink-400" />
                  <span className="font-medium">{category}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] transition-all flex items-center justify-center">
                Send Inquiry
              </a>
              <a href="/media-kit.pdf" target="_blank" className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Download Media Kit
              </a>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 relative"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-900/40 blur-[100px] rounded-full z-0" />
            
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl p-6 relative z-10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-pink-400">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/50">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
