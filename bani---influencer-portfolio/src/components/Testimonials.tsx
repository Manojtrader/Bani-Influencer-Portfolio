import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      brand: "Lumière Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=200&auto=format&fit=crop",
      text: "Working with Bani was an absolute dream. Her aesthetic completely elevated our latest product launch. The engagement we saw from her reels exceeded our expectations.",
      role: "Marketing Director"
    },
    {
      brand: "Aura Athletics",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=200&auto=format&fit=crop",
      text: "Bani's authentic approach to fitness content made her the perfect ambassador for our new activewear line. Highly professional and always delivers on time.",
      role: "Brand Manager"
    },
    {
      brand: "Vogue Essentials",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=200&auto=format&fit=crop",
      text: "Creative, aesthetic, and impactful. Bani has a unique eye for visual storytelling that truly resonates with the Gen-Z and Millennial audience.",
      role: "Creative Lead"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif leading-[0.85] tracking-tight mb-4"
          >
            Brand <span className="italic font-light text-pink-200">Feedback</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            What partners say about our collaborations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[2rem] p-8 relative flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 text-brand-pink/20">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-white/80 font-light leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.brand} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                <div>
                  <h4 className="font-semibold text-sm">{t.brand}</h4>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
