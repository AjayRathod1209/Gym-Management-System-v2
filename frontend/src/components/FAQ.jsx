"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can I freeze or pause my membership?",
    answer: "Yes. You can freeze your membership for up to 3 months per calendar year. Freezes can be requested online or at the front desk and are processed immediately with no extra fees.",
  },
  {
    question: "Are personal training sessions included in my plan?",
    answer: "Basic members receive a single complimentary assessment. Premium members get 5 sessions per month, while Elite members enjoy unlimited access to personal training and custom nutrition programs.",
  },
  {
    question: "What are the club operating hours?",
    answer: "Vigorfit is open 24/7 for Premium and Elite members. Basic members have full access to our facilities between 5:00 AM and 11:00 PM every day.",
  },
  {
    question: "Is private locker space available?",
    answer: "General day lockers are free for all members. Dedicated private lockers, along with clean workout gear laundry services, are provided exclusively to our Elite tier members.",
  },
  {
    question: "Can I bring a guest to workout with me?",
    answer: "Yes, Elite members receive one guest pass per day. Members on other plans can purchase day passes for guests at a discounted member rate at the front reception desk.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="lg:h-full h-auto w-full bg-[#111111] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            Common Inquiries
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Frequently Asked
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="glass rounded-lg border border-white/5 overflow-hidden transition-colors duration-300"
              >
                {/* Header/Question bar */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-sans focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 transition-colors ${isOpen ? "text-primary" : "text-gray-500"}`} />
                    <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`p-1 rounded-full ${isOpen ? "bg-primary text-black" : "bg-white/5 text-white"}`}
                  >
                    <ChevronDown className="w-3 h-3 stroke-[2.5]" />
                  </motion.div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-4 pt-1 border-t border-white/5 text-gray-400 text-xs font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
