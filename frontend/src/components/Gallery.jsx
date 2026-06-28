import { Search } from "lucide-react";

const galleryItems = [
  {
    title: "Strength Studio",
    tag: "Dumbbell Training",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Calisthenics Zone",
    tag: "Pull-Ups",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Core Conditioning",
    tag: "Bodyweight Focus",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Iron Arena",
    tag: "Heavy Lifting",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Agility & Speed",
    tag: "Athletic Jumps",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Olympic Power",
    tag: "Deadlifts",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="lg:h-full h-auto w-full bg-[#111111] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            Inside the Club
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Photo Gallery
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* Mosaic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[240px] md:auto-rows-[160px]">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-card group relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 shadow-xl ${item.gridClass}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/75 transition-all duration-300" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="text-primary text-[9px] font-bold uppercase tracking-widest mb-1.5 block">
                  {item.tag}
                </span>
                <h3 className="text-base font-bold uppercase text-white tracking-wider mb-1">
                  {item.title}
                </h3>
                
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mt-1">
                  <Search className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/0 group-hover:border-white/30 transition-all duration-300" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/0 group-hover:border-white/30 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/0 group-hover:border-white/30 transition-all duration-300" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/30 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
