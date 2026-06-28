import { Dumbbell, ArrowRight } from "lucide-react";
import { Instagram, Twitter, Youtube, Facebook } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:h-full h-auto w-full bg-[#0A0A0A] border-t border-white/5 flex items-center py-12 lg:py-0 relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="p-2 bg-primary rounded-lg text-black group-hover:scale-110 transition-transform">
                <Dumbbell className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="font-sans font-black text-xl tracking-wider text-white uppercase">
                Vigor<span className="text-primary font-light">fit</span>
              </span>
            </a>
            <p className="text-gray-400 font-light leading-relaxed text-xs md:text-sm max-w-sm">
              Crafting premium fitness experiences. Empowering athletes and wellness seekers with elite spaces, custom analytics, and world-class coaching.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Group 1 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-1.5 text-xs md:text-sm font-light text-gray-400">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-primary transition-colors">Our Perks</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-primary transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-primary transition-colors">Elite Staff</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Group 2 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-1.5 text-xs md:text-sm font-light text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Press Room</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Fitness Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Location Desk</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Subscribe to receive weekly training updates, nutrition guides, and priority pass invites.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-4 pr-12 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 bg-primary text-black hover:bg-green-400 rounded-md transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-gray-500 font-light">
          <div>
            &copy; {currentYear} Vigorfit Club. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
