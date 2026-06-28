"use client";

import { useRef } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Membership from "@/components/Membership";
import BMIPreview from "@/components/BMIPreview";
import Trainers from "@/components/Trainers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Pinned Main Container Ref
  const mainRef = useRef(null);

  // Scene Panel Wrapper Refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const memberRef = useRef(null);
  const bmiRef = useRef(null);
  const trainersRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // Register and trigger modular GSAP scroll animation hook
  useScrollAnimations({
    mainRef,
    heroRef,
    aboutRef,
    whyRef,
    memberRef,
    bmiRef,
    trainersRef,
    galleryRef,
    testimonialsRef,
    faqRef,
    contactRef,
    footerRef,
  });

  return (
    <div className="bg-[#0A0A0A] font-sans antialiased text-white selection:bg-primary selection:text-black">
      {/* Premium Dynamic Navbar */}
      <Navbar />

      {/* Main scrolling wrapper (pinned on desktop) */}
      <main ref={mainRef} className="relative w-full overflow-hidden bg-[#0A0A0A] lg:h-screen">
        
        {/* Sections stacked absolutely on desktop inside the pinned viewport container */}
        <div ref={heroRef} id="home-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-10 overflow-hidden bg-black flex items-center justify-center">
          <div className="w-full">
            <Hero />
          </div>
        </div>
        
        <div ref={aboutRef} id="about-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-20 overflow-hidden bg-[#0A0A0A] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <About />
          </div>
        </div>
        
        <div ref={whyRef} id="why-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-30 overflow-hidden bg-[#111111] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <WhyChooseUs />
          </div>
        </div>
        
        <div ref={memberRef} id="membership-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-40 overflow-hidden bg-[#0A0A0A] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <Membership />
          </div>
        </div>
        
        <div ref={bmiRef} id="bmi-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-50 overflow-hidden bg-[#111111] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <BMIPreview />
          </div>
        </div>
        
        <div ref={trainersRef} id="trainers-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-60 overflow-hidden bg-[#0A0A0A] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <Trainers />
          </div>
        </div>
        
        <div ref={galleryRef} id="gallery-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-70 overflow-hidden bg-[#111111] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <Gallery />
          </div>
        </div>
        
        <div ref={testimonialsRef} id="testimonials-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-80 overflow-hidden bg-[#0A0A0A] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <Testimonials />
          </div>
        </div>
        
        <div ref={faqRef} id="faq-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-90 overflow-hidden bg-[#111111] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <FAQ />
          </div>
        </div>
        
        <div ref={contactRef} id="contact-scene" className="w-full min-h-screen lg:h-screen lg:absolute lg:top-0 lg:left-0 z-100 overflow-hidden bg-[#0A0A0A] py-16 lg:py-0 flex items-center justify-center">
          <div className="w-full">
            <Contact />
          </div>
        </div>
        
        {/* Footer slides up from the bottom of the screen to stack cleanly under the Contact scene */}
        <div ref={footerRef} id="footer-scene" className="w-full relative lg:absolute lg:bottom-0 lg:left-0 z-110 bg-[#0A0A0A]">
          <Footer />
        </div>

      </main>
    </div>
  );
}
