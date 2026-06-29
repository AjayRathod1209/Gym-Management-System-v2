"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Dumbbell, 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  User, 
  LogOut, 
  Bell, 
  Flame, 
  Activity, 
  CheckCircle,
  Clock,
  Plus,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [workouts, setWorkouts] = useState([
    { id: 1, type: "Strength Training", duration: "45 mins", date: "Today, 9:00 AM", calories: 420 },
    { id: 2, type: "HIIT Cardio", duration: "30 mins", date: "Yesterday, 6:00 PM", calories: 350 },
    { id: 3, type: "Power Yoga", duration: "60 mins", date: "2 days ago", calories: 280 }
  ]);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [newWorkoutType, setNewWorkoutType] = useState("Strength Training");
  const [newWorkoutDuration, setNewWorkoutDuration] = useState("45");
  const [newWorkoutCalories, setNewWorkoutCalories] = useState("400");

  const handleLogout = () => {
    router.push("/");
  };

  const handleAddWorkout = (e) => {
    e.preventDefault();
    const newLog = {
      id: Date.now(),
      type: newWorkoutType,
      duration: `${newWorkoutDuration} mins`,
      date: "Just now",
      calories: parseInt(newWorkoutCalories) || 300
    };
    setWorkouts([newLog, ...workouts]);
    setIsLogModalOpen(false);
    // Reset fields
    setNewWorkoutDuration("45");
    setNewWorkoutCalories("400");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-black/60 border-r border-white/10 hidden md:flex flex-col p-6 justify-between h-screen fixed z-20">
        <div className="space-y-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary rounded-lg text-black">
              <Dumbbell className="h-6 w-6 stroke-[2.5]" />
            </div>
            <span className="font-sans font-black text-xl tracking-wider text-white uppercase">
              Vigor<span className="text-primary font-light">fit</span>
            </span>
          </a>

          {/* Nav List */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "overview" ? "bg-primary text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("workouts")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "workouts" ? "bg-primary text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Dumbbell className="h-4 w-4" />
              Workout Log
            </button>
            <button
              onClick={() => setActiveTab("membership")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "membership" ? "bg-primary text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              Membership Plan
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "profile" ? "bg-primary text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <User className="h-4 w-4" />
              Profile Settings
            </button>
          </nav>
        </div>

        {/* Logout Footer */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </aside>

      {/* Main Panel Content Area */}
      <main className="flex-1 md:ml-64 min-h-screen bg-[#0A0A0A] p-6 md:p-8 overflow-y-auto">
        {/* Upper Header Banner */}
        <header className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
          <div>
            <h1 className="text-xl md:text-3xl font-black uppercase tracking-tight">
              Welcome back, <span className="text-primary">Ajay</span>!
            </h1>
            <p className="text-xs md:text-sm text-gray-400 font-light mt-1">
              "Action is the foundational key to all success." — Your daily fitness checkpoint.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-primary/40 transition-colors relative">
              <Bell className="h-5 w-5 text-gray-300" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#22c55e]" />
            </button>
            <div className="h-10 w-10 rounded-full border border-white/20 bg-cover bg-center" style={{ backgroundImage: "url('/trainer_about.png')" }} />
          </div>
        </header>

        {/* Tab content router */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Metric Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Active Plan</p>
                    <h3 className="text-lg font-black uppercase text-white mt-1">VIP Elite</h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">180 days left</p>
                  </div>
                </div>

                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Dumbbell className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Total Workouts</p>
                    <h3 className="text-lg font-black uppercase text-white mt-1">{workouts.length} Sessions</h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">+1 logged today</p>
                  </div>
                </div>

                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Flame className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Calories Burned</p>
                    <h3 className="text-lg font-black uppercase text-white mt-1">
                      {workouts.reduce((acc, curr) => acc + curr.calories, 0)} kcal
                    </h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Target: 2,000 / week</p>
                  </div>
                </div>

                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Attendance Rate</p>
                    <h3 className="text-lg font-black uppercase text-white mt-1">94%</h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Elite status consistency</p>
                  </div>
                </div>
              </div>

              {/* Lower Section Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Weekly Chart & Upcoming Classes */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Progress Chart Card */}
                  <div className="glass border border-white/10 p-6 rounded-xl relative overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-base font-black uppercase tracking-wider text-white">Weekly Performance</h3>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/15 px-3 py-1 rounded-full">Calories Burned (kcal)</span>
                    </div>
                    {/* SVG Performance Chart */}
                    <div className="h-64 w-full flex items-end justify-between px-2 pt-4 relative">
                      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="90" x2="100" y2="90" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                        <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                      </svg>
                      
                      {[
                        { day: "Mon", kcal: 350, h: "50%" },
                        { day: "Tue", kcal: 450, h: "65%" },
                        { day: "Wed", kcal: 280, h: "40%" },
                        { day: "Thu", kcal: 620, h: "85%" },
                        { day: "Fri", kcal: 400, h: "58%" },
                        { day: "Sat", kcal: 500, h: "72%" },
                        { day: "Sun", kcal: 120, h: "20%" },
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 w-1/12 h-full justify-end group z-10">
                          <span className="text-[10px] font-black text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                            {item.kcal}
                          </span>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: item.h }}
                            transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                            className="w-full bg-gradient-to-t from-primary/30 to-primary rounded-t shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover:brightness-110 transition-all duration-300"
                          />
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Classes */}
                  <div className="glass border border-white/10 p-6 rounded-xl">
                    <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Upcoming Booked Classes</h3>
                    <div className="space-y-4">
                      {[
                        { title: "Power Yoga Flow", time: "Today, 5:30 PM", trainer: "Sarah Connor", duration: "60 mins" },
                        { title: "HIIT Circuit Blast", time: "Tomorrow, 8:00 AM", trainer: "Marcus Vance", duration: "45 mins" },
                        { title: "Elite Strength Training", time: "Friday, 10:00 AM", trainer: "Marcus Vance", duration: "60 mins" },
                      ].map((cls, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white/5 border border-white/5 rounded-lg hover:border-white/10 transition-colors gap-4">
                          <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold uppercase text-white tracking-wide">{cls.title}</h4>
                              <p className="text-xs text-gray-400 font-light mt-0.5">Trainer: {cls.trainer} • Duration: {cls.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest">
                              <Clock className="h-3.5 w-3.5" />
                              {cls.time}
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors ml-auto sm:ml-0 bg-red-500/10 px-3 py-1.5 rounded">
                              Cancel
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Coach Profile & Goal Ring Rings */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Personal Coach */}
                  <div className="glass border border-white/10 p-6 rounded-xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Assigned Elite Trainer</h3>
                    
                    <div className="w-24 h-24 rounded-full border-2 border-primary/30 mx-auto bg-cover bg-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.1)]" style={{ backgroundImage: "url('/trainer_about.png')" }} />
                    <h4 className="text-base font-black uppercase tracking-wide text-white">Marcus Vance</h4>
                    <p className="text-xs text-primary font-medium mt-1 uppercase tracking-widest">Elite Strength Specialist</p>
                    
                    <p className="text-xs text-gray-400 font-light mt-4 px-2 leading-relaxed">
                      "Make consistency your priority and results will take care of themselves. Book a slot below."
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 transition-all rounded text-xs font-bold uppercase tracking-wider">
                        <MessageSquare className="h-3.5 w-3.5 text-primary" />
                        Chat
                      </button>
                      <button className="flex items-center justify-center gap-2 py-2.5 bg-primary text-black hover:bg-green-600 transition-all rounded text-xs font-bold uppercase tracking-wider">
                        Book Session
                      </button>
                    </div>
                  </div>

                  {/* Goal Rings */}
                  <div className="glass border border-white/10 p-6 rounded-xl">
                    <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Goal Achievements</h3>
                    <div className="space-y-6">
                      {/* Goal 1 */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold uppercase text-white tracking-widest">Muscle Building</h4>
                          <p className="text-[10px] text-gray-500 font-light mt-0.5">Target: +4kg Lean Mass</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-primary font-mono">75%</span>
                          <div className="w-12 h-12 relative flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                              <path className="text-white/5" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-primary" strokeDasharray="75, 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Goal 2 */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold uppercase text-white tracking-widest">Fat Reduction</h4>
                          <p className="text-[10px] text-gray-500 font-light mt-0.5">Target: 10% Body Fat</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-primary font-mono">40%</span>
                          <div className="w-12 h-12 relative flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                              <path className="text-white/5" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                              <path className="text-primary" strokeDasharray="40, 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === "workouts" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-white">Your Workout Logs</h2>
                  <p className="text-xs text-gray-400 font-light mt-1">Keep track of your training consistency</p>
                </div>
                <button
                  onClick={() => setIsLogModalOpen(true)}
                  className="flex items-center gap-2 bg-primary text-black font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  <Plus className="h-4 w-4" />
                  Log Workout
                </button>
              </div>

              {/* Workout List */}
              <div className="grid grid-cols-1 gap-4">
                {workouts.map((workout) => (
                  <div key={workout.id} className="glass border border-white/10 p-5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        <Dumbbell className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase text-white tracking-wide">{workout.type}</h4>
                        <p className="text-xs text-gray-400 font-light mt-0.5">Duration: {workout.duration} • Burned: {workout.calories} kcal</p>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {workout.date}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "membership" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="glass border border-white/10 p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div>
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full">Active Plan</span>
                    <h2 className="text-2xl font-black uppercase text-white mt-4 tracking-wide">VIP Elite Membership</h2>
                    <p className="text-xs text-gray-400 font-light mt-1">Billed Annually • Auto-renews on Dec 25, 2026</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Total Price</p>
                    <h3 className="text-3xl font-black text-white mt-1">$99<span className="text-sm font-light text-gray-400">/mo</span></h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Payment Status</p>
                    <p className="text-sm font-bold text-primary uppercase tracking-wide mt-1.5">Paid (Active)</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Next Billing Date</p>
                    <p className="text-sm font-bold text-white mt-1.5">December 25, 2026</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Payment Method</p>
                    <p className="text-sm font-bold text-white mt-1.5">Visa Ending in •••• 4242</p>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-8">
                  <button className="px-5 py-3 border border-white/10 hover:border-white/20 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors">
                    View Invoices
                  </button>
                  <button className="px-5 py-3 bg-primary text-black hover:bg-green-600 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                    Change Plan
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="glass border border-white/10 p-6 rounded-xl">
                <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Profile Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                    <input type="text" defaultValue="Ajay Rathod" className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                    <input type="email" defaultValue="rathodajay@example.com" className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Target Weight</label>
                    <input type="text" defaultValue="75 kg" className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Current Body Fat</label>
                    <input type="text" defaultValue="14%" className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary" />
                  </div>
                </div>
                <button className="mt-6 px-5 py-3 bg-primary text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Log Workout Modal */}
      <AnimatePresence>
        {isLogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLogModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm glass border border-white/10 p-6 rounded-2xl relative z-10"
            >
              <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Log New Workout</h3>
              
              <form onSubmit={handleAddWorkout} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Workout Type</label>
                  <select
                    value={newWorkoutType}
                    onChange={(e) => setNewWorkoutType(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-primary"
                  >
                    <option value="Strength Training">Strength Training</option>
                    <option value="HIIT Cardio">HIIT Cardio</option>
                    <option value="Power Yoga">Power Yoga</option>
                    <option value="Pilates Workout">Pilates Workout</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Duration (mins)</label>
                  <input
                    type="number"
                    value={newWorkoutDuration}
                    onChange={(e) => setNewWorkoutDuration(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Calories Burned (kcal)</label>
                  <input
                    type="number"
                    value={newWorkoutCalories}
                    onChange={(e) => setNewWorkoutCalories(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-primary text-black font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  Save Workout Log
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
