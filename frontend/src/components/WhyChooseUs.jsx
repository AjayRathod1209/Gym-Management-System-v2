import { ShieldCheck, Dumbbell, Calendar, HeartPulse } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Gear",
    description: "Train with premium, biomechanically engineered machines and smart analytics equipment designed to maximize results.",
  },
  {
    icon: ShieldCheck,
    title: "Elite Coaching",
    description: "Get guided by certified personal trainers with years of professional experience in bodybuilding and sports medicine.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Access our premium club at your convenience, with classes scheduled throughout the day to fit your busy life.",
  },
  {
    icon: HeartPulse,
    title: "Nutrition & Health",
    description: "Receive customized meal prep programs and biometric tracking to support your workouts from the inside out.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="lg:h-full h-auto w-full bg-[#111111] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Why Choose Us
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="why-card glass p-6 md:p-8 rounded-xl flex flex-col justify-between group hover:-translate-y-2 hover:border-primary/45 transition-all duration-300 relative shadow-2xl"
              >
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/20 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Icon container with hover scale and primary glow */}
                  <div className="p-4 bg-white/5 text-primary group-hover:text-black group-hover:bg-primary group-hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.05)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500 mt-6 rounded-full" />
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
