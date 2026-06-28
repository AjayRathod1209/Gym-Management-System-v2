"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const bgRef = useRef(null);
  const badgeRef = useRef(null);
  const titleLinesRef = useRef([]);
  const descrRef = useRef(null);
  const buttonsRef = useRef(null);
  const mouseRef = useRef(null);

  useEffect(() => {
    // GSAP Onload Animation Timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // 1. Initial State Setup
    gsap.set(bgRef.current, { scale: 1.15, opacity: 0 });
    gsap.set(badgeRef.current, { y: 20, opacity: 0 });
    gsap.set(titleLinesRef.current, { y: 60, opacity: 0 });
    gsap.set(descrRef.current, { y: 30, opacity: 0 });
    gsap.set(buttonsRef.current, { y: 30, opacity: 0 });
    gsap.set(mouseRef.current, { opacity: 0 });

    // 2. Animate Timeline
    tl.to(bgRef.current, { scale: 1, opacity: 0.45, duration: 1.8, ease: "power2.out" })
      .to(badgeRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=1.0")
      .to(titleLinesRef.current, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, "-=0.6")
      .to(descrRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .to(buttonsRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .to(mouseRef.current, { opacity: 1, duration: 0.5 }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Scale Animation */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      />

      {/* Dark & Neon Green Radial Glow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_60%)]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          {/* Small Badge */}
          <div
            ref={badgeRef}
            className="mb-6 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            The Ultimate Fitness Experience
          </div>

          {/* Large Title with Line Stagger */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase mb-6 leading-none overflow-hidden">
            <span
              ref={(el) => (titleLinesRef.current[0] = el)}
              className="block"
            >
              Build Your
            </span>
            <span
              ref={(el) => (titleLinesRef.current[1] = el)}
              className="text-primary glow-text block"
            >
              Dream Body
            </span>
          </h1>

          {/* Short Description */}
          <p
            ref={descrRef}
            className="text-gray-400 text-base md:text-lg max-w-xl mb-10 font-light leading-relaxed"
          >
            Unlock your full potential with our premium coaches, advanced tech-integrated equipment, and a luxury training environment built around your goals.
          </p>

          {/* Two Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            {/* Custom Interactive Scale/Glow Hover Actions */}
            <a
              href="#membership"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-primary text-black font-sans font-bold uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] hover:scale-105 transition-all duration-300 block text-center"
            >
              Join Today
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-md border border-white/20 hover:border-primary text-white font-sans font-bold uppercase text-sm tracking-widest bg-white/5 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300 block text-center"
            >
              View Membership
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={mouseRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex p-1.5 justify-center">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
        <span className="text-[10px] tracking-widest text-gray-500 uppercase font-medium">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
