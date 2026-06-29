"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Dumbbell, 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  DollarSign, 
  LogOut, 
  Bell, 
  Plus, 
  Trash2, 
  ShieldCheck, 
  Search, 
  TrendingUp,
  Sliders,
  Mail,
  User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // State lists for Members & Trainers to support live creation and removal!
  const [members, setMembers] = useState([]);
  const [trainers, setTrainers] = useState([]);

  // Calculate dynamic monthly revenue based on active member plans
  const totalRevenue = members.reduce(
    (sum, m) => sum + (m.status === "Active" ? (m.plan === "VIP Elite" ? 99 : m.plan === "Standard Fit" ? 59 : 29) : 0),
    0
  );

  // Dynamic occupancy count based on active members
  const occupancyCount = Math.min(members.filter(m => m.status === "Active").length, 5);

  // Modal control states
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);

  // New member form states
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberPlan, setNewMemberPlan] = useState("VIP Elite");

  // New trainer form states
  const [newTrainerName, setNewTrainerName] = useState("");
  const [newTrainerSpecialty, setNewTrainerSpecialty] = useState("Elite Strength & Hypertrophy");

  // Filter/Search states
  const [memberSearch, setMemberSearch] = useState("");

  const handleLogout = () => {
    router.push("/");
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMemberName || !newMemberEmail) return;

    const newM = {
      id: Date.now(),
      name: newMemberName,
      email: newMemberEmail,
      plan: newMemberPlan,
      joinDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "Active"
    };

    setMembers([newM, ...members]);
    setIsMemberModalOpen(false);
    setNewMemberName("");
    setNewMemberEmail("");
  };

  const handleAddTrainer = (e) => {
    e.preventDefault();
    if (!newTrainerName) return;

    const newT = {
      id: Date.now(),
      name: newTrainerName,
      specialty: newTrainerSpecialty,
      clients: 0,
      status: "Active"
    };

    setTrainers([newT, ...trainers]);
    setIsTrainerModalOpen(false);
    setNewTrainerName("");
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleDeleteTrainer = (id) => {
    setTrainers(trainers.filter(t => t.id !== id));
  };

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
    m.email.toLowerCase().includes(memberSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex font-sans overflow-hidden">
      
      {/* Sidebar navigation */}
      <aside className="w-64 bg-black/60 border-r border-white/10 hidden md:flex flex-col p-6 justify-between h-screen fixed z-20">
        <div className="space-y-8">
          {/* Admin Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="font-sans font-black text-lg tracking-wider text-white uppercase">
              Vigor<span className="text-red-500 font-light">Admin</span>
            </span>
          </a>

          {/* Nav List */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "overview" ? "bg-red-500 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("members")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "members" ? "bg-red-500 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Members
            </button>
            <button
              onClick={() => setActiveTab("trainers")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "trainers" ? "bg-red-500 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <UserCheck className="h-4 w-4" />
              Trainers
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

      {/* Main panel content area */}
      <main className="flex-1 md:ml-64 min-h-screen bg-[#0A0A0A] p-6 md:p-8 overflow-y-auto">
        {/* Upper Header Banner */}
        <header className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
          <div>
            <h1 className="text-xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-2">
              Console Dashboard <span className="text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded">Owner Control</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-400 font-light mt-1">
              Analyze gym metrics, member accounts, and trainer slots in real-time.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-red-500/40 transition-colors relative">
              <Bell className="h-5 w-5 text-gray-300" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="h-10 w-10 rounded-full border border-red-500/30 bg-cover bg-center" style={{ backgroundImage: "url('/trainer_about.png')" }} />
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
              {/* Owner Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl" />
                  <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Monthly Revenue</p>
                    <h3 className="text-lg font-black text-white mt-1 text-primary">
                      ${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Live calculations</p>
                  </div>
                </div>

                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl" />
                  <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Total Members</p>
                    <h3 className="text-lg font-black text-white mt-1">{members.length} Active</h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Registered accounts</p>
                  </div>
                </div>

                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl" />
                  <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Active Trainers</p>
                    <h3 className="text-lg font-black text-white mt-1">{trainers.length} Rostered</h3>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">Fully operational</p>
                  </div>
                </div>

                <div className="glass border border-white/10 p-6 rounded-xl flex items-center gap-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl" />
                  <div className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg">
                    <Dumbbell className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Gym Occupancy</p>
                    <h3 className="text-lg font-black text-white mt-1">{occupancyCount} In Gym</h3>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Active scanner telemetry</p>
                  </div>
                </div>
              </div>

              {/* Analytics & Logs Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Revenue Graph Card */}
                <div className="lg:col-span-8">
                  <div className="glass border border-white/10 p-6 rounded-xl relative overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-base font-black uppercase tracking-wider text-white">Revenue Progress</h3>
                      <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Annual Forecast
                      </span>
                    </div>
                    {/* SVG Analytics Graph */}
                    <div className="h-64 w-full flex items-end justify-between px-2 pt-4 relative">
                      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="90" x2="100" y2="90" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                        <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                        
                        {/* Line chart path connecting performance dots */}
                        <path d="M 5,80 L 20,70 L 35,65 L 50,45 L 65,30 L 80,18 L 95,12" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      
                      {[
                        { month: "Jan", val: "$8k", l: "80%" },
                        { month: "Feb", val: "$9.5k", l: "70%" },
                        { month: "Mar", val: "$11k", l: "65%" },
                        { month: "Apr", val: "$12.8k", l: "45%" },
                        { month: "May", val: "$14k", l: "30%" },
                        { month: "Jun", val: "$15.4k", l: "18%" },
                        { month: "Jul", val: "$17k", l: "12%" }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center w-1/12 justify-end z-10 group">
                          <span className="text-[10px] font-black text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                            {item.val}
                          </span>
                          <div className="w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-[0_0_10px_#ef4444] transform translate-y-1 mb-2 hover:scale-125 transition-transform" />
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Mini Controls / System status */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="glass border border-white/10 p-6 rounded-xl">
                    <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Console Diagnostics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 font-light">Server Status</span>
                        <span className="text-primary font-bold uppercase tracking-wider">Online</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 font-light">Active Database Connections</span>
                        <span className="text-white font-bold font-mono">148</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 font-light">Backup Recovery State</span>
                        <span className="text-primary font-bold uppercase tracking-wider">Synced (1h ago)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 font-light">SMTP Notification Server</span>
                        <span className="text-primary font-bold uppercase tracking-wider">Connected</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === "members" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-white">Gym Member Accounts</h2>
                  <p className="text-xs text-gray-400 font-light mt-1">Add, suspend, or delete member profiles</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <Search className="h-4 w-4" />
                    </span>
                    <input 
                      type="text" 
                      placeholder="Search accounts..." 
                      value={memberSearch}
                      onChange={(e) => setMemberSearch(e.target.value)}
                      className="bg-black/60 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 w-48 sm:w-64"
                    />
                  </div>
                  
                  <button
                    onClick={() => setIsMemberModalOpen(true)}
                    className="flex items-center gap-2 bg-red-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  >
                    <Plus className="h-4 w-4" />
                    Add Member
                  </button>
                </div>
              </div>

              {/* Members Table */}
              <div className="glass border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest text-gray-400">
                        <th className="p-4 pl-6">Member Name</th>
                        <th className="p-4">Membership Plan</th>
                        <th className="p-4">Join Date</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs">
                      {filteredMembers.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="p-8 text-center text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                            No active members found. Click "Add Member" to register.
                          </td>
                        </tr>
                      ) : (
                        filteredMembers.map((member) => (
                          <tr key={member.id} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 pl-6">
                              <div className="font-bold text-white">{member.name}</div>
                              <div className="text-gray-500 text-[10px] font-mono mt-0.5">{member.email}</div>
                            </td>
                            <td className="p-4">
                              <span className="font-semibold text-white uppercase tracking-wider">{member.plan}</span>
                            </td>
                            <td className="p-4 text-gray-400">{member.joinDate}</td>
                            <td className="p-4">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                member.status === "Active" ? "bg-primary/10 text-primary" : "bg-yellow-500/10 text-yellow-500"
                              }`}>
                                {member.status}
                              </span>
                            </td>
                            <td className="p-4 pr-6 text-right">
                              <button
                                onClick={() => handleDeleteMember(member.id)}
                                className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded hover:bg-white/5"
                                title="Delete Account"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "trainers" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-white">Rostered Fitness Coaches</h2>
                  <p className="text-xs text-gray-400 font-light mt-1">Manage specialties and client loads</p>
                </div>
                <button
                  onClick={() => setIsTrainerModalOpen(true)}
                  className="flex items-center gap-2 bg-red-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  <Plus className="h-4 w-4" />
                  Add Trainer
                </button>
              </div>

              {/* Trainers Table */}
              <div className="glass border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-widest text-gray-400">
                        <th className="p-4 pl-6">Trainer Name</th>
                        <th className="p-4">Core Specialty</th>
                        <th className="p-4">Active Clients</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs">
                      {trainers.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="p-8 text-center text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                            No rostered coaches found. Click "Add Trainer" to roster.
                          </td>
                        </tr>
                      ) : (
                        trainers.map((trainer) => (
                          <tr key={trainer.id} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 pl-6">
                              <div className="font-bold text-white">{trainer.name}</div>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300 font-light">{trainer.specialty}</span>
                            </td>
                            <td className="p-4 text-white font-mono">{trainer.clients} Members</td>
                            <td className="p-4">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                trainer.status === "Active" ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-400"
                              }`}>
                                {trainer.status}
                              </span>
                            </td>
                            <td className="p-4 pr-6 text-right">
                              <button
                                onClick={() => handleDeleteTrainer(trainer.id)}
                                className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded hover:bg-white/5"
                                title="Delete Trainer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Add Member Modal */}
      <AnimatePresence>
        {isMemberModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMemberModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm glass border border-white/10 p-6 rounded-2xl relative z-10"
            >
              <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Add New Member</h3>
              
              <form onSubmit={handleAddMember} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={newMemberName}
                      onChange={(e) => setNewMemberName(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-red-500/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={newMemberEmail}
                      onChange={(e) => setNewMemberEmail(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-red-500/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Membership Tier</label>
                  <select
                    value={newMemberPlan}
                    onChange={(e) => setNewMemberPlan(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-red-500/50"
                  >
                    <option value="VIP Elite">VIP Elite ($99/mo)</option>
                    <option value="Standard Fit">Standard Fit ($59/mo)</option>
                    <option value="Basic Fit">Basic Fit ($29/mo)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-red-500 text-white font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  Create Member Profile
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Trainer Modal */}
      <AnimatePresence>
        {isTrainerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTrainerModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm glass border border-white/10 p-6 rounded-2xl relative z-10"
            >
              <h3 className="text-base font-black uppercase tracking-wider text-white mb-6">Add New Trainer</h3>
              
              <form onSubmit={handleAddTrainer} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="Coach Carter"
                      value={newTrainerName}
                      onChange={(e) => setNewTrainerName(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-red-500/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Core Specialty</label>
                  <select
                    value={newTrainerSpecialty}
                    onChange={(e) => setNewTrainerSpecialty(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-red-500/50"
                  >
                    <option value="Elite Strength & Hypertrophy">Elite Strength & Hypertrophy</option>
                    <option value="HIIT & Cardio Endurance">HIIT & Cardio Endurance</option>
                    <option value="Power Yoga & Flexibility">Power Yoga & Flexibility</option>
                    <option value="Pilates & Core Conditioning">Pilates & Core Conditioning</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-red-500 text-white font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  Roster Trainer
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
