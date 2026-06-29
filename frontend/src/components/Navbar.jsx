"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Instagram, Twitter, Linkedin } from "@/components/SocialIcons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Membership", href: "#membership" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navRef = useRef(null);
  const progressRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // 1. Scroll Events handling (Hide/Show navbar & Progress bar)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle Transparent/Glass background
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Scrolling down -> Hide navbar smoothly
        gsap.to(navRef.current, {
          yPercent: -100,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        // Scrolling up -> Show navbar smoothly
        gsap.to(navRef.current, {
          yPercent: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      // Update scroll progress bar
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const pct = (currentScrollY / scrollHeight) * 100;
        gsap.to(progressRef.current, {
          width: `${pct}%`,
          duration: 0.1,
          ease: "none",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    // 2. Touch Screen visibility trigger
    const handleTouch = () => {
      // Any touch interaction shows the navbar immediately
      gsap.to(navRef.current, {
        yPercent: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("mousedown", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousedown", handleTouch);
    };
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/75 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-4"
            : "bg-transparent py-6 border-b border-transparent shadow-none"
        }`}
      >
        {/* Scroll Progress Indicator Bar ("One thing when scroll") */}
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-[3px] bg-primary glow-primary w-0 transition-all z-50"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary rounded-lg text-black group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="font-sans font-black text-2xl tracking-wider text-white uppercase">
                Vigor<span className="text-primary font-light">fit</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm font-medium tracking-wide text-gray-300 hover:text-primary transition-colors duration-300 uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/login"
                className="font-sans text-sm font-semibold tracking-wide hover:text-primary transition-colors duration-300 uppercase px-4 py-2"
              >
                Login
              </a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="font-sans text-sm font-bold tracking-wide uppercase bg-primary text-black px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              >
                Join Now
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-primary transition-colors duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md lg:hidden flex flex-col justify-center items-center"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-primary transition-colors duration-300"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="mb-12 flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg text-black">
                <Dumbbell className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="font-sans font-black text-2xl tracking-wider text-white uppercase">
                Vigor<span className="text-primary font-light">fit</span>
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 mb-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-xl font-bold tracking-widest text-gray-300 hover:text-primary transition-colors duration-300 uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
              className="flex flex-col items-center gap-4 w-64"
            >
              <a
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-lg font-semibold tracking-wide text-white hover:text-primary transition-colors duration-300 uppercase py-2"
              >
                Login
              </a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-lg font-bold tracking-wide uppercase bg-primary text-black w-full text-center py-4 rounded-md hover:bg-green-600 transition-colors duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Join Now
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
