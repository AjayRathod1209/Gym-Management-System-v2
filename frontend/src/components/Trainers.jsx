import { Trophy } from "lucide-react";
import { Instagram, Twitter, Linkedin } from "@/components/SocialIcons";

const trainers = [
  {
    name: "Marcus Vance",
    role: "Elite Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    bio: "Former powerlifting champion with 8+ years coaching athletes and bodybuilding contenders.",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Sarah Jenkins",
    role: "Athletic Conditioning",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    bio: "Specializes in high-intensity functional training, agility conditioning, and cardiorespiratory optimization.",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Viktor Petrov",
    role: "Body Recomposition",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    bio: "Focuses on scientific fat loss, hypertrophy training, and custom macro-nutrient program designs.",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Elena Rostova",
    role: "Flexibility & Mobility",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
    bio: "Certified yoga therapist and mobility coach dedicated to improving active joint ranges and post-workout recovery.",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="lg:h-full h-auto w-full bg-[#0A0A0A] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            Expert Staff
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Meet Our Trainers
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="trainer-card group relative rounded-xl overflow-hidden bg-[#111111] border border-white/5 shadow-xl h-[310px] md:h-[330px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${trainer.image}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/75" />

              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end h-full z-10">
                <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Trophy className="w-3.5 h-3.5" />
                  {trainer.role}
                </div>

                <h3 className="text-lg font-black uppercase text-white tracking-wider mb-2">
                  {trainer.name}
                </h3>

                <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                    {trainer.bio}
                  </p>
                </div>

                <div className="flex gap-4 items-center mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <a
                    href={trainer.instagram}
                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.twitter}
                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.linkedin}
                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
