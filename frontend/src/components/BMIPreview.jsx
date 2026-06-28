"use client";

import { useState } from "react";
import { Info, Sparkles } from "lucide-react";

export default function BMIPreview() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiZone, setBmiZone] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const formattedBmi = bmi.toFixed(1);

    setBmiResult(formattedBmi);

    if (bmi < 18.5) {
      setBmiZone("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiZone("Normal Weight");
    } else if (bmi >= 25 && bmi < 30) {
      setBmiZone("Overweight");
    } else {
      setBmiZone("Obese");
    }
  };

  const clearForm = () => {
    setHeight("");
    setWeight("");
    setBmiResult(null);
    setBmiZone("");
  };

  return (
    <section id="bmi" className="lg:h-full h-auto w-full bg-[#111111] overflow-hidden flex items-center py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Info Panels */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
              Body Metrics
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Calculate Your BMI
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-5 text-xs md:text-sm">
              Body Mass Index (BMI) is a convenient indicator of body fatness based on height and weight. 
              While it does not measure body fat directly, it correlates well with direct measures and serves as 
              a great initial assessment to plan your nutritional and workout programs.
            </p>

            {/* Zone Scale */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                <span>BMI Range Scale</span>
                <span className="flex items-center gap-1 text-primary">
                  <Info className="w-3 h-3" /> Healthy: 18.5 - 24.9
                </span>
              </div>
              
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500 flex" />
              
              <div className="grid grid-cols-4 gap-1.5 text-center text-[9px] font-bold uppercase tracking-wider text-gray-400">
                <div className="p-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  &lt; 18.5 <br /> Under
                </div>
                <div className="p-1 rounded bg-green-500/10 border border-green-500/20 text-green-400">
                  18.5 - 24.9 <br /> Normal
                </div>
                <div className="p-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                  25 - 29.9 <br /> Over
                </div>
                <div className="p-1 rounded bg-red-500/10 border border-red-500/20 text-red-400">
                  30+ <br /> Obese
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator UI */}
          <div className="lg:col-span-6">
            <div className="glass p-5 md:p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wider">
                    BMI Calculator
                  </h3>
                  <p className="text-xs text-gray-500 font-light">Input your details below</p>
                </div>
              </div>

              <form onSubmit={calculateBMI} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Height Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Weight Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-primary text-black font-sans font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:scale-[1.02] transition-all duration-300"
                  >
                    Calculate BMI
                  </button>
                  {bmiResult && (
                    <button
                      type="button"
                      onClick={clearForm}
                      className="px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:scale-[1.02] transition-all"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </form>

              {/* Dynamic Results Display */}
              {bmiResult && (
                <div className="mt-6 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                        Your Result
                      </span>
                      <div className="text-3xl font-black text-white mt-1">
                        {bmiResult} <span className="text-xs font-light text-gray-400">kg/m²</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                        Category Status
                      </span>
                      <div
                        className={`text-base font-black uppercase tracking-wider mt-1 ${
                          bmiZone === "Normal Weight"
                            ? "text-green-500"
                            : bmiZone === "Underweight"
                            ? "text-blue-500"
                            : bmiZone === "Overweight"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {bmiZone}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
