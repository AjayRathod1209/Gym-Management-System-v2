"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollAnimations({
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
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    const totalScrollRange = 9000; // Matches timeline scroll range (end: "+=9000")

    // 1. DESKTOP ONLY: Cinematic Pinned Timeline Transitions
    mm.add("(min-width: 1024px)", () => {
      // Set initial layouts, z-indices, pointer-events, and initial invisible offsets directly on the scene wrappers.
      // Setting pointerEvents: "none" prevents invisible absolute layers from swallowing mouse hover/click/copy events.
      gsap.set(aboutRef.current, { xPercent: -100, opacity: 0, zIndex: 11, pointerEvents: "none" });
      gsap.set(whyRef.current, { xPercent: 100, opacity: 0, zIndex: 12, pointerEvents: "none" });
      gsap.set(memberRef.current, { scale: 0.5, opacity: 0, zIndex: 13, pointerEvents: "none" });
      gsap.set(bmiRef.current, { scale: 0.7, opacity: 0, zIndex: 14, pointerEvents: "none" });
      gsap.set(trainersRef.current, { yPercent: 100, opacity: 0, zIndex: 15, pointerEvents: "none" });
      gsap.set(galleryRef.current, { scale: 1.3, opacity: 0, zIndex: 16, pointerEvents: "none" });
      gsap.set(testimonialsRef.current, { yPercent: 40, opacity: 0, zIndex: 17, pointerEvents: "none" });
      gsap.set(faqRef.current, { yPercent: -100, opacity: 0, zIndex: 18, pointerEvents: "none" });
      gsap.set(contactRef.current, { xPercent: 100, opacity: 0, zIndex: 19, pointerEvents: "none" });
      gsap.set(footerRef.current, { yPercent: 100, zIndex: 20, pointerEvents: "none" });

      // Create a single master pinned timeline trigger on the main container wrapper
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${totalScrollRange}`, 
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // SCENE 1: Hero Exit & About Entrance
      tl.to(heroRef.current, { scale: 0.8, opacity: 0, pointerEvents: "none", ease: "none" }, "scene1")
        .to(aboutRef.current, { xPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene1")

      // SCENE 2: About Exit & Why Choose Us Entrance
        .to(aboutRef.current, { scale: 0.9, opacity: 0, pointerEvents: "none", ease: "none" }, "scene2")
        .to(whyRef.current, { xPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene2")

      // SCENE 3: Why Choose Us Exit & Membership Entrance
        .to(whyRef.current, { scale: 0.9, opacity: 0, pointerEvents: "none", ease: "none" }, "scene3")
        .to(memberRef.current, { scale: 1, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene3")

      // SCENE 4: Membership Exit & BMI Entrance
        .to(memberRef.current, { yPercent: -20, opacity: 0, pointerEvents: "none", ease: "none" }, "scene4")
        .to(bmiRef.current, { scale: 1, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene4")

      // SCENE 5: BMI Exit & Trainers Entrance
        .to(bmiRef.current, { scale: 0.9, opacity: 0, pointerEvents: "none", ease: "none" }, "scene5")
        .to(trainersRef.current, { yPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene5")

      // SCENE 6: Trainers Exit & Gallery Entrance
        .to(trainersRef.current, { opacity: 0, pointerEvents: "none", ease: "none" }, "scene6")
        .to(galleryRef.current, { scale: 1, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene6")

      // SCENE 7: Gallery Exit & Testimonials Entrance
        .to(galleryRef.current, { scale: 0.9, opacity: 0, pointerEvents: "none", ease: "none" }, "scene7")
        .to(testimonialsRef.current, { yPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene7")

      // SCENE 8: Testimonials Exit & FAQ Entrance
        .to(testimonialsRef.current, { yPercent: -100, opacity: 0, pointerEvents: "none", ease: "none" }, "scene8")
        .to(faqRef.current, { yPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene8")

      // SCENE 9: FAQ Exit & Contact Entrance
        .to(faqRef.current, { xPercent: -50, opacity: 0, pointerEvents: "none", ease: "none" }, "scene9")
        .to(contactRef.current, { xPercent: 0, opacity: 1, pointerEvents: "auto", ease: "none" }, "scene9")

      // SCENE 10: Contact Exit & Footer Entrance
        .to(contactRef.current, { yPercent: -100, opacity: 0, pointerEvents: "none", ease: "none" }, "scene10")
        .to(footerRef.current, { yPercent: 0, pointerEvents: "auto", ease: "none" }, "scene10");
    });

    // 2. MOBILE ONLY: Standard scroll animations to prevent layout truncations
    mm.add("(max-width: 1023px)", () => {
      // Ensure all wrapper elements are fully visible and normalized (reset desktop absolute overrides)
      gsap.set([
        aboutRef.current,
        whyRef.current,
        memberRef.current,
        bmiRef.current,
        trainersRef.current,
        galleryRef.current,
        testimonialsRef.current,
        faqRef.current,
        contactRef.current,
        footerRef.current,
      ], {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
        pointerEvents: "auto",
        clearProps: "all"
      });

      const mobileScenes = [
        { id: aboutRef.current, content: aboutRef.current },
        { id: whyRef.current, content: whyRef.current },
        { id: memberRef.current, content: memberRef.current },
        { id: bmiRef.current, content: bmiRef.current },
        { id: trainersRef.current, content: trainersRef.current },
        { id: galleryRef.current, content: galleryRef.current },
        { id: testimonialsRef.current, content: testimonialsRef.current },
        { id: faqRef.current, content: faqRef.current },
        { id: contactRef.current, content: contactRef.current },
      ];

      mobileScenes.forEach((scene) => {
        gsap.fromTo(
          scene.content,
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: scene.id,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      });
    });

    // 3. GLOBAL HASH LINK INTERCEPTOR: Safe programmatic scrolling
    const handleAnchorClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.substring(1);
      
      // Mapping links to scene indexes (0 to 10)
      const targetIndices = {
        "home": 0,
        "about": 1,
        "why-choose-us": 2,
        "membership": 3,
        "bmi": 4,
        "trainers": 5,
        "gallery": 6,
        "testimonials": 7,
        "faq": 8,
        "contact": 9,
        "footer": 10
      };

      if (targetIndices[targetId] !== undefined) {
        e.preventDefault();
        e.stopPropagation(); // Stop bubbling to prevent Next.js Router scroll override
        
        // Update URL hash bar cleanly
        window.history.pushState(null, null, href);
        
        if (window.innerWidth >= 1024) {
          // Desktop View: calculate exact pinned scroll trigger position
          const index = targetIndices[targetId];
          const offset = index * (totalScrollRange / 10);
          
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        } else {
          // Mobile View: scroll naturally to element position
          const element = document.getElementById(targetId + "-scene");
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: "smooth"
            });
          }
        }
      }
    };

    window.addEventListener("click", handleAnchorClick, true); // Use capture phase to intercept early

    return () => {
      mm.revert();
      window.removeEventListener("click", handleAnchorClick, true);
    };
  }, [
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
  ]);
}
