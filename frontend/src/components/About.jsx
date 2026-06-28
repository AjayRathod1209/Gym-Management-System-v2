import { Compass, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="lg:h-full h-auto w-full bg-[#0A0A0A] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Mission/Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Redefining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Standard of Fitness
                </span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm md:text-base">
                At Vigorfit, we believe fitness is not just a routine, but a luxury lifestyle experience. 
                Our high-end spaces are carefully designed to inspire and drive progress, bringing together 
                world-class coaching, custom progress analytics, and premium gym equipment to help you craft your ultimate self.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {/* Mission */}
              <div className="glass p-6 rounded-lg relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
                <div className="p-3 bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold uppercase text-white tracking-wider mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  To provide a luxury, empowering workspace where fitness targets are shattered through bespoke coaching and cutting-edge resources.
                </p>
              </div>

              {/* Vision */}
              <div className="glass p-6 rounded-lg relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
                <div className="p-3 bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold uppercase text-white tracking-wider mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  To establish a globally recognized luxury fitness benchmark that inspires members to optimize their mental and physical well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Gym Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />

            <div className="relative group">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              
              <div className="relative overflow-hidden rounded-2xl w-[280px] sm:w-[320px] lg:w-[350px] h-[340px] sm:h-[400px] lg:h-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: "url('/trainer_about.png')" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
