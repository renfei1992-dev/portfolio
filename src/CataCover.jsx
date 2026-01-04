import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, Star, MoreHorizontal, CheckCircle, ChevronDown, ChevronUp, Loader2, RotateCcw, Briefcase, FileText, Award, Check, Share2 } from 'lucide-react';

const CataCover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [simulationStep, setSimulationStep] = useState('loading'); // 'loading', 'results', 'hovering', 'clicking', 'details', 'hovering-skills', 'selecting-1', 'selecting-2', 'selecting-3', 'comparing'
  const [replayKey, setReplayKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;

    setSimulationStep('loading');
    // Sequence: Loading -> Results -> Hover -> Click -> Details -> Hover Skills -> Close & Select -> Compare
    const timer1 = setTimeout(() => setSimulationStep('results'), 2000);
    const timer2 = setTimeout(() => setSimulationStep('hovering'), 3500);
    const timer3 = setTimeout(() => setSimulationStep('clicking'), 5500);
    const timer4 = setTimeout(() => setSimulationStep('details'), 6000);
    const timer5 = setTimeout(() => setSimulationStep('hovering-skills'), 7000);
    const timer6 = setTimeout(() => setSimulationStep('selecting-1'), 9000); // Close panel and select 1st
    const timer7 = setTimeout(() => setSimulationStep('selecting-2'), 9500); // Select 2nd
    const timer8 = setTimeout(() => setSimulationStep('selecting-3'), 10000); // Select 3rd
    const timer9 = setTimeout(() => setSimulationStep('comparing'), 11500); // Show comparison view
    const timer10 = setTimeout(() => setSimulationStep('scrolling-compare'), 13000); // Scroll down
    const timer11 = setTimeout(() => setSimulationStep('compare-terry'), 14500); // Select Terry
    const timer12 = setTimeout(() => setSimulationStep('compare-shannon'), 16000); // Select Shannon

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
        clearTimeout(timer8);
        clearTimeout(timer9);
        clearTimeout(timer10);
        clearTimeout(timer11);
        clearTimeout(timer12);
    };
  }, [replayKey, isVisible]);

  // Add scroll effect
  useEffect(() => {
    if (simulationStep === 'scrolling-compare') {
        const container = document.getElementById('comparison-container');
        if (container) {
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }
    }
  }, [simulationStep]);

  const isSelected = (index) => {
    if (simulationStep === 'selecting-1' && index === 0) return true;
    if (simulationStep === 'selecting-2' && index <= 1) return true;
    if (simulationStep === 'selecting-3' && index <= 2) return true;
    if (['comparing', 'scrolling-compare', 'compare-terry', 'compare-shannon'].includes(simulationStep) && index <= 2) return true;
    return false;
  };

  const candidates = [
    {
      id: 1,
      name: "Amanda C.",
      title: "Management Consultant in Healthcare for 10 years",
      location: "San Francisco, CA",
      level: "Mid-level",
      company: "Bain & Company",
      rate: "$150/hour",
      match: "Great Match",
      matchColor: "bg-[#4ade80]", // Green
      experience: [
        "Senior Management Consultant @ Bain & Company • 2 years, 3 months",
        "Consulting Partner @ Marsh & McLennan Companies • 4 years, 1 months"
      ]
    },
    {
      id: 2,
      name: "Terry B.",
      title: "Award-winning consultant for any healthcare solutions",
      location: "Fremont, CA",
      level: "Mid-level",
      company: "McKinsey & Company",
      rate: "$220/hour",
      match: "Good Match",
      matchColor: "bg-[#3b82f6]", // Blue
      experience: [
        "Information Security Consultant @ McKinsey & Company • 1 years, 5 months",
        "Associate Consultant @ Marsh & McLennan Companies • 3 years"
      ]
    },
    {
      id: 3,
      name: "Shannon T.",
      title: "Best consultant in the Texas area",
      location: "Dallas, TX",
      level: "Mid-level",
      company: "ACG Consulting",
      rate: "$125/hour",
      match: "Good Match",
      matchColor: "bg-[#3b82f6]",
      experience: [
        "Senior Management Consultant @ Willis Towers Watson • 1 years, 8 months",
        "Consulting Partner @ Marsh & ACG Consulting • 2 years, 5 months"
      ]
    },
    {
      id: 4,
      name: "Chloe L.",
      title: "I love learning more in the healthcare industry",
      location: "Cambridge, MA",
      level: "Mid-level",
      company: "Deloitte Consulting",
      rate: "$140/hour",
      match: null,
      experience: []
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden font-sans bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/bcoverv3.png" alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Replay Button */}
      <button 
        onClick={() => setReplayKey(prev => prev + 1)}
        className="absolute bottom-4 right-4 flex items-center p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-all duration-300 z-50 group overflow-hidden hover:pr-4"
        title="Replay Animation"
      >
        <RotateCcw size={16} />
        <span className="max-w-0 group-hover:max-w-[100px] group-hover:ml-2 overflow-hidden transition-all duration-300 whitespace-nowrap font-medium text-sm">Replay</span>
      </button>

      {/* Window Container */}
      <div className="absolute inset-0 flex items-end justify-center pb-0 px-8 pt-8">
        <div className="w-[86%] h-[92%] bg-[#f8f9fa] text-slate-800 overflow-hidden shadow-2xl border border-white/20 relative z-10">
          <div className="w-[116.28%] h-[116.28%] origin-top-left scale-[0.86] flex flex-col">
      {/* Header */}
      <header className="bg-[#0f112a] text-white h-16 flex items-center justify-between px-6 shrink-0 shadow-md relative z-20">
        <div className="flex items-center gap-12">
            <div className="relative group cursor-pointer">
                <div className="font-bold text-xl tracking-wide text-white font-serif">CATALANT</div>
                <div className="h-0.5 w-full bg-orange-500 absolute -bottom-1 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
            </div>
            <div className="flex gap-6 opacity-40">
                <div className="w-20 h-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
                <div className="w-20 h-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
                <div className="w-20 h-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <div className="relative cursor-pointer hover:text-blue-200 transition-colors">
                <Bell size={20} className="text-gray-400" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f112a]"></div>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-600 overflow-hidden border-2 border-gray-500/50 cursor-pointer hover:border-white transition-colors">
                 <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full object-cover" />
            </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 shrink-0 shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex gap-4">
            <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Search by skill, job title, or expert name" 
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button className="bg-[#1e2040] text-white px-8 py-2 rounded-lg font-medium text-sm hover:bg-[#2d3055] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">Search</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
         <div className="max-w-7xl mx-auto h-full flex p-6 gap-8">
            {/* Sidebar */}
            <div className="w-72 shrink-0 flex flex-col gap-6 overflow-y-auto pr-2 pb-6 custom-scrollbar">
                {/* Match Box */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-center mb-5">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center relative group cursor-pointer">
                             <div className="absolute inset-0 border-2 border-blue-100 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                             <User size={32} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                             <div className="absolute -right-1 -top-1 bg-white p-1.5 rounded-full shadow-md border border-slate-100">
                                <Search size={12} className="text-blue-500" />
                             </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-center text-slate-800 mb-4 text-sm leading-relaxed">Find the best matches for your projects</h3>
                    <div className="border border-slate-200 rounded-lg px-3 py-2.5 text-sm flex justify-between items-center bg-slate-50 text-slate-700 cursor-pointer hover:border-blue-300 hover:bg-white transition-all">
                        <span>Healthcare Consulting</span>
                        <ChevronDown size={14} className="text-slate-400" />
                    </div>
                </div>

                {/* Estimated Daily Rate */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-sm text-slate-800">Estimated Daily Rate</h4>
                        <ChevronUp size={14} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                    </div>
                    <div className="flex gap-2 mb-4">
                        <div className="border border-slate-200 rounded px-3 py-1.5 text-sm w-1/2 bg-white text-slate-600 shadow-sm">$0</div>
                        <div className="flex items-center text-slate-300">-</div>
                        <div className="border border-slate-200 rounded px-3 py-1.5 text-sm w-1/2 bg-white text-slate-600 shadow-sm">$5,000+</div>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full relative mx-1">
                        <div className="absolute left-0 w-full h-full bg-blue-500 rounded-full opacity-20"></div>
                        <div className="absolute left-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md cursor-grab hover:scale-110 transition-transform active:cursor-grabbing"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow-md cursor-grab hover:scale-110 transition-transform active:cursor-grabbing"></div>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-bold text-sm text-slate-800">Skills</h4>
                        <ChevronUp size={14} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                    </div>
                    <div className="relative mb-3 group">
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 group-focus-within:text-blue-500 transition-colors" />
                         <input type="text" placeholder="Search for a skill..." className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all" />
                    </div>
                    <div className="space-y-1">
                        {[
                            { name: 'Digital Transformation', count: 354 },
                            { name: 'Product Roadmap', count: 312 },
                            { name: 'Machine Learning', count: 273 },
                            { name: 'User Experience Design', count: 262 },
                            { name: 'TensorFlow', count: 240 }
                        ].map((skill, i) => (
                            <label key={skill.name} className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer hover:text-blue-600 group p-1.5 rounded hover:bg-blue-50/50 transition-colors">
                                <div className={`w-4 h-4 border rounded flex items-center justify-center transition-colors ${i === 0 ? 'bg-blue-500 border-blue-500' : 'bg-white border-slate-300 group-hover:border-blue-400'}`}>
                                    {i === 0 && <CheckCircle size={10} className="text-white" />}
                                </div>
                                <span className="flex-1 truncate font-medium">{skill.name}</span>
                                <span className="text-slate-400 text-xs">({skill.count})</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Other Filters */}
                {['Level of Seniority', 'Industry Experience', 'Location'].map(filter => (
                    <div key={filter} className="flex justify-between items-center py-2 cursor-pointer group border-b border-transparent hover:border-slate-100">
                        <h4 className="font-medium text-sm text-slate-500 group-hover:text-slate-800 transition-colors">{filter}</h4>
                        <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                ))}
            </div>

            {/* Results List */}
            <div className="flex-1 overflow-y-auto pb-6 custom-scrollbar px-1 relative min-h-[400px]">
                {simulationStep === 'loading' ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-20">
                        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-3" />
                        <p className="text-slate-500 font-medium animate-pulse">Finding best matches...</p>
                    </div>
                ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards">
                    {candidates.map((candidate, index) => (
                        <div 
                            key={candidate.id} 
                            className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 relative group cursor-default ${simulationStep === 'clicking' && index === 0 ? 'scale-[0.98] ring-2 ring-blue-500' : ''} ${isSelected(index) ? '!bg-blue-50 !border-blue-500' : ''}`}
                        >
                            {/* Match Badge */}
                            {candidate.match && (
                                <div className={`absolute -top-px -left-px px-4 py-1 rounded-tl-xl rounded-br-lg text-[11px] font-bold tracking-wide text-white z-10 shadow-sm ${candidate.match === 'Great Match' ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-blue-400 to-blue-500'}`}>
                                    {candidate.match.toUpperCase()}
                                </div>
                            )}

                            <div className="p-6 pt-9 flex gap-6">
                                {/* Checkbox & Avatar */}
                                <div className="flex flex-col items-center gap-4 pt-1">
                                    <div className={`w-5 h-5 border-2 rounded cursor-pointer transition-colors flex items-center justify-center ${isSelected(index) ? 'bg-blue-500 border-blue-500' : 'border-slate-300 hover:border-blue-500 hover:bg-blue-50'}`}>
                                        {isSelected(index) && <Check size={12} className="text-white" strokeWidth={3} />}
                                    </div>
                                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white shadow-md group-hover:ring-blue-50 transition-all">
                                        <img src={`https://i.pravatar.cc/150?u=${candidate.id + 5}`} alt={candidate.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1.5">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{candidate.name}</h3>
                                            <div className="relative group/stars">
                                                <div className="flex text-amber-400 gap-0.5 cursor-help">
                                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="stroke-none" />)}
                                                </div>
                                                
                                                {/* Hover Tooltip Simulation */}
                                                {simulationStep === 'hovering' && index === 0 && (
                                                    <div className="absolute top-full left-0 mt-3 w-[340px] bg-white rounded-lg shadow-xl border border-slate-200 z-50 animate-in fade-in zoom-in-95 duration-500 overflow-hidden text-left">
                                                        {/* Header */}
                                                        <div className="bg-slate-50 px-4 py-3 flex items-center gap-2 border-b border-slate-100">
                                                            <span className="font-bold text-slate-800 text-sm">Overall Rating:</span>
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex text-amber-400 gap-0.5">
                                                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="stroke-none" />)}
                                                                </div>
                                                                <span className="font-bold text-slate-800 text-sm">4.8</span>
                                                            </div>
                                                        </div>

                                                        {/* Reviews */}
                                                        <div className="p-4 space-y-4">
                                                            {/* Review 1 */}
                                                            <div>
                                                                <h4 className="font-bold text-slate-700 text-xs mb-1.5">Trademark/Brand Valuation</h4>
                                                                <div className="flex text-amber-400 gap-0.5 mb-2">
                                                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="stroke-none" />)}
                                                                </div>
                                                                <p className="text-xs text-slate-500 italic leading-relaxed">
                                                                    Alex was very knowledgeable and could respond to any of our questions or requests with a clear answer and completed our job in a way which has left the client very happy.
                                                                </p>
                                                            </div>

                                                            {/* Review 2 */}
                                                            <div className="border-t border-slate-100 pt-4">
                                                                <h4 className="font-bold text-slate-700 text-xs mb-1.5">Cost Reduction Assessment Strategy</h4>
                                                                <div className="flex text-amber-400 gap-0.5 mb-2">
                                                                    {[...Array(4)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="stroke-none" />)}
                                                                    <Star size={12} className="text-slate-200 stroke-none" fill="currentColor" />
                                                                </div>
                                                                <p className="text-xs text-slate-500 italic leading-relaxed">
                                                                    Completed the project on time. Was quick to respond to minor requests. Would be nice to communicate more frequently on the project.
                                                                </p>
                                                            </div>

                                                            {/* Review 3 */}
                                                            <div className="border-t border-slate-100 pt-4">
                                                                <h4 className="font-bold text-slate-700 text-xs mb-1.5">Talent Acquisition Strategy and Support</h4>
                                                                <div className="flex text-amber-400 gap-0.5">
                                                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="stroke-none" />)}
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Footer Link */}
                                                            <div className="border-t border-slate-100 pt-3 text-center">
                                                                <a href="#" className="text-xs font-semibold text-blue-500 hover:text-blue-600 hover:underline">View all 8 client reviews</a>
                                                            </div>
                                                        </div>

                                                        {/* Arrow */}
                                                        <div className="absolute -top-1.5 left-4 w-3 h-3 bg-slate-50 border-t border-l border-slate-200 transform rotate-45"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">Invite to Project</button>
                                            <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all shadow-sm"><MoreHorizontal size={16} /></button>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-500 text-sm mb-4 font-medium">{candidate.title}</p>

                                    {/* Attributes Row */}
                                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-600 mb-5">
                                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                            <CheckCircle size={12} className="text-emerald-500" fill="currentColor" stroke="white" />
                                            <span>{candidate.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                            <CheckCircle size={12} className="text-emerald-500" fill="currentColor" stroke="white" />
                                            <span>{candidate.level}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                            <CheckCircle size={12} className="text-emerald-500" fill="currentColor" stroke="white" />
                                            <span>{candidate.company}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-blue-50/50 px-2 py-1 rounded border border-blue-100/50">
                                            <CheckCircle size={12} className="text-blue-500" fill="currentColor" stroke="white" />
                                            <span className="font-bold text-blue-700">{candidate.rate}</span>
                                        </div>
                                    </div>

                                    {/* Experience */}
                                    <div className="space-y-2 border-t border-slate-100 pt-4">
                                        {candidate.experience.map((exp, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <div className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                                                <p className="text-xs text-slate-500 leading-relaxed">{exp}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>

            {/* Details Panel Overlay */}
            {(simulationStep === 'details' || simulationStep === 'hovering-skills') && (
                <div className="absolute inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div className="w-1/3 bg-slate-900/20 backdrop-blur-[2px] animate-in fade-in duration-700"></div>
                    
                    {/* Panel */}
                    <div className="w-2/3 bg-[#f8f9fa] h-full shadow-[-20px_0_50px_rgba(0,0,0,0.1)] border-l border-slate-200 animate-in slide-in-from-right duration-500 flex flex-col">
                        {/* Panel Header */}
                        <div className="h-16 border-b border-slate-200 bg-white px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
                            <h2 className="font-bold text-slate-800 text-lg">Expert Profile</h2>
                            <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <div className="p-8">
                                {/* Profile Header */}
                                <div className="mb-8">
                                    <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm mb-4 shadow-sm">
                                        Great Match
                                    </div>
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex gap-5">
                                            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                                                <img src="https://i.pravatar.cc/150?u=6" alt="Amanda C." className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h1 className="text-xl font-bold text-slate-900">Amanda C.</h1>
                                                    <div className="flex text-blue-400 gap-0.5">
                                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="stroke-none" />)}
                                                    </div>
                                                </div>
                                                <p className="text-slate-500 text-sm font-medium">Management Consultant in Healthcare for 10 years</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 bg-white border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 shadow-sm transition-all">Invite to Project</button>
                                            <button className="p-2 bg-white border border-slate-200 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"><MoreHorizontal size={16} /></button>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="flex gap-8 border-b border-slate-200 mb-8">
                                    {['Match', 'Profile', 'Services'].map((tab, i) => (
                                        <div key={tab} className={`pb-3 text-sm font-bold cursor-pointer relative transition-colors ${i === 0 ? 'text-orange-500' : 'text-slate-400 hover:text-slate-600'}`}>
                                            {tab}
                                            {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 shadow-[0_-2px_6px_rgba(249,115,22,0.4)]"></div>}
                                        </div>
                                    ))}
                                </div>

                                {/* Match Card */}
                                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 mb-8 flex gap-10 hover:shadow-md transition-shadow duration-300">
                                    <div className="w-1/3 border-r border-slate-100 pr-10">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Match Rating</div>
                                        <div className="text-3xl font-bold text-emerald-500 mb-4 tracking-tight">Great Match</div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                                            <div className="h-full w-3/4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                            We think this expert is a top talent that matches your project well.
                                        </p>
                                    </div>
                                    <div className="flex-1 space-y-6 pt-1">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2 cursor-help">
                                                <div className="flex items-center gap-2 relative">
                                                    <FileText size={14} className="text-slate-400" />
                                                    <span>5 / 6 Skills</span>

                                                    {/* Skills Tooltip */}
                                                    {simulationStep === 'hovering-skills' && (
                                                        <div className="absolute left-full top-0 ml-3 w-56 bg-[#0f112a] rounded-lg shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-300">
                                                            <h4 className="text-white font-bold text-[11px] mb-2.5">How you match</h4>
                                                            <div className="space-y-2">
                                                                {[
                                                                    { name: 'Contract Preparation', matched: true },
                                                                    { name: 'Brand Awareness Generation', matched: true },
                                                                    { name: 'Building Relationships', matched: true },
                                                                    { name: 'Portfolio Management', matched: true },
                                                                    { name: 'Customer Relationship Management (CRM)', matched: true },
                                                                    { name: 'Civil Engineering', matched: false }
                                                                ].map((skill, i) => (
                                                                    <div key={i} className="flex items-start gap-2">
                                                                        <div className={`mt-0.5 w-3 h-3 rounded-full flex items-center justify-center shrink-0 ${skill.matched ? 'bg-emerald-500' : 'border border-slate-600'}`}>
                                                                            {skill.matched && <CheckCircle size={8} className="text-white" strokeWidth={3} />}
                                                                        </div>
                                                                        <span className={`text-[10px] leading-tight ${skill.matched ? 'text-slate-200' : 'text-slate-500'}`}>{skill.name}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            {/* Arrow */}
                                                            <div className="absolute top-2 -left-1 w-2 h-2 bg-[#0f112a] transform rotate-45"></div>
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="text-slate-400 font-normal">Skills matched with project</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-5/6 bg-emerald-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-slate-400" />
                                                    <span>2 / 4 Industries</span>
                                                </div>
                                                <span className="text-slate-400 font-normal">Industries matched with project</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-2/4 bg-blue-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Award size={14} className="text-slate-400" />
                                                    <span>3 / 4 Companies</span>
                                                </div>
                                                <span className="text-slate-400 font-normal">Companies matched with project</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Skeleton Sections */}
                                <div className="space-y-10">
                                    {/* About */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                                            <User size={16} />
                                            <h3 className="font-bold text-sm text-slate-700">About</h3>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-2.5 bg-slate-200/70 rounded w-full animate-pulse"></div>
                                            <div className="h-2.5 bg-slate-200/70 rounded w-5/6 animate-pulse delay-75"></div>
                                            <div className="h-2.5 bg-slate-200/70 rounded w-4/6 animate-pulse delay-150"></div>
                                        </div>
                                    </div>

                                    {/* Work Experience */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                                            <Briefcase size={16} />
                                            <h3 className="font-bold text-sm text-slate-700">Work Experience</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="h-10 bg-slate-200/70 rounded w-1/3 mb-3 animate-pulse"></div>
                                            <div className="space-y-3">
                                                <div className="h-2.5 bg-slate-200/70 rounded w-full animate-pulse delay-100"></div>
                                                <div className="h-2.5 bg-slate-200/70 rounded w-full animate-pulse delay-200"></div>
                                            </div>
                                            <div className="h-2.5 bg-slate-200/70 rounded w-full animate-pulse delay-300"></div>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                                            <Award size={16} />
                                            <h3 className="font-bold text-sm text-slate-700">Skills</h3>
                                        </div>
                                        <div className="h-10 bg-slate-200/70 rounded w-1/4 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
         </div>
      </div>
            {/* Comparison View Overlay */}
            {['comparing', 'scrolling-compare', 'compare-terry', 'compare-shannon'].includes(simulationStep) && (
                <div className="absolute inset-0 z-[60] flex">
                    {/* Backdrop */}
                    <div className="w-[10%] bg-slate-900/20 backdrop-blur-[2px] animate-in fade-in duration-700"></div>
                    
                    {/* Panel */}
                    <div className="w-[90%] bg-[#f8f9fa] h-full shadow-[-20px_0_50px_rgba(0,0,0,0.1)] border-l border-slate-200 animate-in slide-in-from-right duration-500 flex flex-col">
                        {/* Header */}
                        <div className="bg-white px-8 py-4 border-b border-slate-200 flex justify-between items-center shrink-0">
                            <h2 className="text-xl font-bold text-slate-800">Compare Experts</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 text-sm font-medium transition-colors">
                                <Share2 size={16} />
                                Share the comparison
                            </button>
                        </div>

                        <div id="comparison-container" className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            {/* Experts Grid */}
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                {candidates.slice(0, 3).map((expert, i) => (
                                    <div key={expert.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                                        {/* Card Header */}
                                        <div className="h-24 bg-[#0f112a] relative flex justify-center items-end pb-0">
                                            <div className="absolute inset-0 opacity-20 overflow-hidden">
                                                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <path d="M0 50 Q 25 80 50 50 T 100 50 V 100 H 0 Z" fill="white" fillOpacity="0.1"/>
                                                    <path d="M0 70 Q 25 40 50 70 T 100 70 V 100 H 0 Z" fill="white" fillOpacity="0.1"/>
                                                 </svg>
                                            </div>
                                            <div className="w-20 h-20 rounded-full border-4 border-white bg-slate-200 translate-y-10 overflow-hidden z-10 shadow-md">
                                                <img src={`https://i.pravatar.cc/150?u=${expert.id + 5}`} alt={expert.name} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        
                                        {/* Card Body */}
                                        <div className="pt-12 pb-6 px-6 text-center flex-1 flex flex-col">
                                            <h3 className="font-bold text-lg text-slate-900 mb-1">{expert.name}</h3>
                                            <p className="text-xs text-slate-500 mb-6 line-clamp-2 h-8 leading-relaxed">{expert.title}</p>
                                            
                                            <div className="flex justify-center gap-2 mb-6">
                                                <button className="px-4 py-1.5 border border-slate-200 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">Invite to Project</button>
                                                <button className="px-2 py-1.5 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 transition-colors"><MoreHorizontal size={16} /></button>
                                            </div>

                                            <div className="border-t border-slate-100 pt-6 mt-auto">
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Match Summary</div>
                                                
                                                <div className="text-left space-y-4">
                                                    <div>
                                                        <div className="font-bold text-sm text-slate-800 mb-1.5">{expert.match}</div>
                                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                            <div className={`h-full rounded-full ${expert.match === 'Great Match' ? 'bg-emerald-500 w-[90%]' : 'bg-blue-500 w-[75%]'}`}></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <div className="text-xs text-slate-600 mb-1.5 font-medium">{expert.match === 'Great Match' ? '5/6' : '4/6'} skills matched</div>
                                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                            <div className={`h-full rounded-full ${expert.match === 'Great Match' ? 'bg-emerald-500 w-[83%]' : 'bg-blue-500 w-[66%]'}`}></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="text-xs text-slate-600 mb-1.5 font-medium">{expert.match === 'Great Match' ? '3/4' : '2/4'} industries matched</div>
                                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                            <div className={`h-full rounded-full ${expert.match === 'Great Match' ? 'bg-emerald-500 w-[75%]' : 'bg-blue-500 w-[50%]'}`}></div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-2">
                                                        <span className="text-xs text-slate-500 italic">Level of Seniority: <span className="text-slate-700 not-italic font-medium">Senior</span></span>
                                                        <CheckCircle size={14} className="text-emerald-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Skill Level Comparison */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                                <h3 className="font-bold text-lg text-slate-800 mb-8">Skill Level Comparison</h3>
                                
                                <div className="flex gap-12">
                                    {/* Controls */}
                                    <div className="w-1/3 space-y-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-2">Select the first chart to compare</label>
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-blue-500 rounded-sm absolute left-3 top-1/2 -translate-y-1/2"></div>
                                                <select 
                                                    className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white appearance-none focus:outline-none focus:border-blue-500 shadow-sm transition-all duration-300"
                                                    value={['compare-terry', 'compare-shannon'].includes(simulationStep) ? "Terry B." : "Project Need"}
                                                    readOnly
                                                >
                                                    <option>Project Need</option>
                                                    <option>Terry B.</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-2">Select the second chart to compare</label>
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-orange-500 rounded-sm absolute left-3 top-1/2 -translate-y-1/2"></div>
                                                <select 
                                                    className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white appearance-none focus:outline-none focus:border-blue-500 shadow-sm transition-all duration-300"
                                                    value={simulationStep === 'compare-shannon' ? "Shannon T." : "Amanda C."}
                                                    readOnly
                                                >
                                                    <option>Amanda C.</option>
                                                    <option>Shannon T.</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-2">Select the type of skill proficiency to show</label>
                                            <div className="flex bg-slate-100 p-1 rounded-lg">
                                                <button className="flex-1 py-1.5 text-xs font-bold text-slate-800 bg-white rounded shadow-sm">Self Indicated</button>
                                                <button className="flex-1 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700">Project Endorsed</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Radar Chart */}
                                    <div className="flex-1 flex justify-center items-center relative h-[300px]">
                                         {/* Legend */}
                                         <div className="absolute top-0 right-0 flex gap-6 text-xs font-bold">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                                                <span className="text-slate-600 transition-all duration-300">
                                                    {['compare-terry', 'compare-shannon'].includes(simulationStep) ? "Terry B." : "Project Need"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                                                <span className="text-slate-600 transition-all duration-300">
                                                    {simulationStep === 'compare-shannon' ? "Shannon T." : "Amanda C."}
                                                </span>
                                            </div>
                                         </div>

                                         {/* SVG Chart */}
                                         <svg width="400" height="300" viewBox="0 0 400 300" className="overflow-visible">
                                            {/* Grid Circles */}
                                            <circle cx="200" cy="150" r="30" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                            <circle cx="200" cy="150" r="60" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                            <circle cx="200" cy="150" r="90" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                            <circle cx="200" cy="150" r="120" fill="none" stroke="#e2e8f0" strokeWidth="1" />

                                            {/* Axes & Labels */}
                                            {[
                                                'Python Coding', 'R', 'Linear\nModeling', 'Data\nWarehousing', 
                                                'Visualization', 'Quantitative\nResearch', 'Clustering', 'Data Cleaning', 
                                                'Hadoop Platform', 'Data\nManipulation', 'TensorFlow', 'Pandas'
                                            ].map((label, i) => {
                                                const angle = (i * 30 - 90) * (Math.PI / 180);
                                                const x = 200 + 120 * Math.cos(angle);
                                                const y = 150 + 120 * Math.sin(angle);
                                                const labelX = 200 + 145 * Math.cos(angle);
                                                const labelY = 150 + 145 * Math.sin(angle);
                                                return (
                                                    <g key={i}>
                                                        <line x1="200" y1="150" x2={x} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                                                        <text x={labelX} y={labelY} textAnchor="middle" dominantBaseline="middle" className="text-[10px] fill-slate-400 font-medium" style={{ whiteSpace: 'pre' }}>
                                                            {label.split('\n').map((line, j) => <tspan x={labelX} dy={j ? '1.2em' : 0} key={j}>{line}</tspan>)}
                                                        </text>
                                                    </g>
                                                );
                                            })}

                                            {/* Data Polygons */}
                                            {/* Blue Polygon (Project Need -> Terry B.) */}
                                            <polygon 
                                                points={['compare-terry', 'compare-shannon'].includes(simulationStep) 
                                                    ? "200,40 250,140 210,230 150,160" 
                                                    : "200,60 260,150 200,240 140,150"} 
                                                fill="rgba(59, 130, 246, 0.1)" 
                                                stroke="#3b82f6" 
                                                strokeWidth="2" 
                                                className="transition-all duration-700 ease-in-out"
                                            />
                                            
                                            {/* Orange Polygon (Amanda C. -> Shannon T.) */}
                                            <polygon 
                                                points={simulationStep === 'compare-shannon' 
                                                    ? "200,70 270,130 220,250 130,140" 
                                                    : "200,50 245,72 260,115 240,150 230,202 200,240 157,223 117,197 140,150 150,63 180,50 200,50"} 
                                                fill="rgba(249, 115, 22, 0.5)" 
                                                stroke="#f97316" 
                                                strokeWidth="2" 
                                                className="transition-all duration-700 ease-in-out"
                                            />
                                         </svg>
                                         
                                         {/* Scale Labels */}
                                         <div className="absolute bottom-0 right-0 text-[9px] text-slate-300 flex flex-col items-end gap-1">
                                            <span>Mastery</span>
                                            <span>Advanced</span>
                                            <span>Intermediate</span>
                                            <span>Foundational</span>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CataCover;
