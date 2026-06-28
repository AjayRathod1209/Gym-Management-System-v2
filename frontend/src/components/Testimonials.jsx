import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Tech Lead",
    transformation: "Lost 18kg & Gained Muscle",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Vigorfit has completely turned my physical health around. The facilities are always pristine, the trainers understand scientific programming, and the environment is very inspiring.",
    rating: 5,
  },
  {
    name: "Clara Dubois",
    role: "Designer",
    transformation: "Core strength & flexibility",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "The luxury amenities and the high-intensity group classes are incredible. It feels like a high-end wellness club rather than just a regular gym. Worth every single cent.",
    rating: 5,
  },
  {
    name: "David Kross",
    role: "Entrepreneur",
    transformation: "Increased Energy & Stamina",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "Between running multiple companies, finding time to workout was hard. Having 24/7 VIP access to Vigorfit means I can train on my own terms. The premium coaching is stellar.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="lg:h-full h-auto w-full bg-[#0A0A0A] relative overflow-hidden flex items-center py-12 lg:py-0">
      {/* Glow highlight */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            What Members Say
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="testimonial-card glass p-6 md:p-8 rounded-2xl flex flex-col justify-between relative group hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote icon decoration */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-primary/10 transition-colors">
                <Quote className="w-8 h-8 md:w-10 md:h-10 fill-current rotate-180" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex gap-1 text-primary mb-4 md:mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 font-light italic leading-relaxed text-xs md:text-sm mb-6 md:mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* User profile section */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cover bg-center border border-white/10"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div>
                  <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                    {item.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                    <span className="text-[9px] md:text-[10px] text-gray-500 font-medium">{item.role}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600 hidden md:inline" />
                    <span className="text-[9px] md:text-[10px] text-primary font-semibold uppercase">
                      {item.transformation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
