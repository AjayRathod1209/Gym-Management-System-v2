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

    // 1. DESKTOP ONLY: Cinematic Pinned Timeline Transitions
    mm.add("(min-width: 1024px)", () => {
      // Set initial layouts, z-indices, and initial invisible offsets directly on the scene wrappers.
      // Since they are absolute layers, setting opacity: 0 initially prevents background overlap coverage.
      gsap.set(aboutRef.current, { xPercent: -100, opacity: 0, zIndex: 11 });
      gsap.set(whyRef.current, { xPercent: 100, opacity: 0, zIndex: 12 });
      gsap.set(memberRef.current, { scale: 0.5, opacity: 0, zIndex: 13 });
      gsap.set(bmiRef.current, { scale: 0.7, opacity: 0, zIndex: 14 });
      gsap.set(trainersRef.current, { yPercent: 100, opacity: 0, zIndex: 15 });
      gsap.set(galleryRef.current, { scale: 1.3, opacity: 0, zIndex: 16 });
      gsap.set(testimonialsRef.current, { yPercent: 40, opacity: 0, zIndex: 17 });
      gsap.set(faqRef.current, { yPercent: -100, opacity: 0, zIndex: 18 });
      gsap.set(contactRef.current, { xPercent: 100, opacity: 0, zIndex: 19 });
      gsap.set(footerRef.current, { yPercent: 100, zIndex: 20 });

      // Create a single master pinned timeline trigger on the main container wrapper
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "+=9000", // Play all slideshow transitions over 9000px scroll range
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // SCENE 1: Hero Exit & About Entrance
      tl.to(heroRef.current, { scale: 0.8, opacity: 0, ease: "none" }, "scene1")
        .to(aboutRef.current, { xPercent: 0, opacity: 1, ease: "none" }, "scene1")

      // SCENE 2: About Exit & Why Choose Us Entrance
        .to(aboutRef.current, { scale: 0.9, opacity: 0, ease: "none" }, "scene2")
        .to(whyRef.current, { xPercent: 0, opacity: 1, ease: "none" }, "scene2")

      // SCENE 3: Why Choose Us Exit & Membership Entrance
        .to(whyRef.current, { scale: 0.9, opacity: 0, ease: "none" }, "scene3")
        .to(memberRef.current, { scale: 1, opacity: 1, ease: "none" }, "scene3")

      // SCENE 4: Membership Exit & BMI Entrance
        .to(memberRef.current, { yPercent: -20, opacity: 0, ease: "none" }, "scene4")
        .to(bmiRef.current, { scale: 1, opacity: 1, ease: "none" }, "scene4")

      // SCENE 5: BMI Exit & Trainers Entrance
        .to(bmiRef.current, { scale: 0.9, opacity: 0, ease: "none" }, "scene5")
        .to(trainersRef.current, { yPercent: 0, opacity: 1, ease: "none" }, "scene5")

      // SCENE 6: Trainers Exit & Gallery Entrance
        .to(trainersRef.current, { opacity: 0, ease: "none" }, "scene6")
        .to(galleryRef.current, { scale: 1, opacity: 1, ease: "none" }, "scene6")

      // SCENE 7: Gallery Exit & Testimonials Entrance
        .to(galleryRef.current, { scale: 0.9, opacity: 0, ease: "none" }, "scene7")
        .to(testimonialsRef.current, { yPercent: 0, opacity: 1, ease: "none" }, "scene7")

      // SCENE 8: Testimonials Exit & FAQ Entrance
        .to(testimonialsRef.current, { yPercent: -100, opacity: 0, ease: "none" }, "scene8")
        .to(faqRef.current, { yPercent: 0, opacity: 1, ease: "none" }, "scene8")

      // SCENE 9: FAQ Exit & Contact Entrance
        .to(faqRef.current, { xPercent: -50, opacity: 0, ease: "none" }, "scene9")
        .to(contactRef.current, { xPercent: 0, opacity: 1, ease: "none" }, "scene9")

      // SCENE 10: Contact Exit & Footer Entrance
        .to(contactRef.current, { yPercent: -100, opacity: 0, ease: "none" }, "scene10")
        .to(footerRef.current, { yPercent: 0, ease: "none" }, "scene10");
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

    return () => {
      mm.revert();
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
