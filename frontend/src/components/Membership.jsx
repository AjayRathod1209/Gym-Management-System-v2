import { Check, Flame } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "29",
    billing: "per month",
    description: "Perfect for casual gym goers starting their physical journey.",
    features: [
      "Access to gym floor & weights",
      "Locker room & shower access",
      "Standard fitness orientation",
      "Free High-speed Wi-Fi",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "59",
    billing: "per month",
    description: "Our most popular package designed for dedicated fitness enthusiasts.",
    features: [
      "24/7 Unlimited Gym access",
      "All standard locker room access",
      "5 Personal Training sessions/mo",
      "Access to all Group Classes",
      "Complimentary Spa & Sauna",
    ],
    popular: true,
    cta: "Join Premium",
  },
  {
    name: "Elite",
    price: "99",
    billing: "per month",
    description: "The complete luxury fitness package with absolute access to everything.",
    features: [
      "24/7 Gym & VIP Lounge access",
      "Private Locker & Laundry Service",
      "Unlimited Personal Coaching",
      "Custom Diet & Meal Planning",
      "1 Guest Pass per visit",
      "All spa, sauna & massage therapies",
    ],
    popular: false,
    cta: "Go Elite",
  },
];

export default function Membership() {
  return (
    <section id="membership" className="lg:h-full h-auto w-full bg-[#0A0A0A] relative overflow-hidden flex items-center py-12 lg:py-0">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
            Flexible Plans
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Choose Membership
          </h2>
          <p className="text-gray-400 text-xs mt-1 leading-relaxed max-w-lg mx-auto">
            Select a tier that matches your frequency and lifestyle goals. Elevate your training with no hidden sign-up charges.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`price-card rounded-xl flex flex-col justify-between p-5 relative transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-[#111111] border-2 border-primary shadow-[0_0_30px_-5px_rgba(34,197,94,0.2)]"
                  : "glass hover:border-white/20 hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-black font-sans font-bold text-[9px] tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Flame className="w-3 h-3 fill-black" />
                  Most Popular
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-4">
                  <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider block mb-1">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline text-white">
                    <span className="text-xl font-light">$</span>
                    <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                    <span className="text-gray-400 text-[10px] font-light ml-1.5">/mo</span>
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1.5 leading-relaxed font-light">
                    {plan.description}
                  </p>
                </div>

                <hr className="border-white/10 mb-4" />

                {/* Features List */}
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <div className={`p-0.5 rounded-full mt-0.5 ${plan.popular ? "bg-primary/20 text-primary" : "bg-white/10 text-white"}`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-gray-300 text-xs font-light leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3 rounded-lg font-sans font-bold uppercase text-[9px] tracking-widest transition-all duration-300 hover:scale-102 ${
                  plan.popular
                    ? "bg-primary text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]"
                    : "bg-white/5 border border-white/15 hover:border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
