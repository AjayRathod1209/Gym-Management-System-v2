"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="lg:h-full h-auto w-full bg-[#0A0A0A] relative overflow-hidden flex items-center py-12 lg:py-0">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Connect With Us
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="glass p-5 md:p-6 rounded-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Membership Inquiry"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="3"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-green-400 text-black font-sans font-bold uppercase text-[9px] tracking-widest py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {submitting ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              </div>

              {submitted && (
                <div className="mt-3 p-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center text-xs font-semibold uppercase tracking-wider">
                  ✓ Message sent successfully! We will contact you soon.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass p-5 md:p-6 rounded-xl flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  Headquarters
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Location</h4>
                      <p className="text-gray-400 text-[10px] mt-0.5 leading-relaxed font-light">
                        845 Luxury Boulevard, Suite 100<br />Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Call Us</h4>
                      <p className="text-gray-400 text-[10px] mt-0.5 leading-relaxed font-light">
                        +1 (310) 555-0199
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Email Us</h4>
                      <p className="text-gray-400 text-[10px] mt-0.5 leading-relaxed font-light">
                        support@vigorfit.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Front Desk Hours</h4>
                      <p className="text-gray-400 text-[10px] mt-0.5 leading-relaxed font-light">
                        Mon - Sun: 8:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="glass rounded-xl overflow-hidden relative h-[130px] md:h-[140px] flex items-center justify-center border border-white/5 group">
              <div className="absolute inset-0 bg-[#0A0A0A] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
              
              <div className="relative z-10 text-center space-y-2">
                <div className="inline-flex relative">
                  <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping" />
                  <div className="p-2 bg-primary text-black rounded-full shadow-[0_0_15px_#22C55E]">
                    <MapPin className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-widest">
                    Interactive Map Preview
                  </h4>
                  <p className="text-gray-500 text-[8px] uppercase font-bold tracking-widest mt-0.5">
                    Beverly Hills HQ
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
