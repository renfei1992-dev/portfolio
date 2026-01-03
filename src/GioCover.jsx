import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, ChevronDown, X, BarChart2, Filter, ChevronLeft } from 'lucide-react';

const GioCover = () => {
  const [restartKey, setRestartKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState('dashboard');
  const [simulationStep, setSimulationStep] = useState('idle'); // 'idle', 'hovering', 'clicking'
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredDataPoint, setHoveredDataPoint] = useState(null);
  const containerRef = useRef(null);

  const lineChartData = [
    { date: '06/25', bj: 65, sh: 30, ny: 30 },
    { date: '06/27', bj: 70, sh: 35, ny: 35 },
    { date: '06/29', bj: 60, sh: 25, ny: 25 },
    { date: '07/01', bj: 75, sh: 40, ny: 40 },
    { date: '07/03', bj: 65, sh: 35, ny: 35 },
    { date: '07/05', bj: 70, sh: 45, ny: 45 },
  ];

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
    if (isVisible && view === 'dashboard' && isAutoPlay) {
        // Animation duration is roughly 2.5s. Wait 1s more = 3.5s.
        const timer1 = setTimeout(() => {
            setSimulationStep('hovering');
        }, 3500);

        const timer2 = setTimeout(() => {
            setSimulationStep('clicking');
        }, 4500); // Hover for 1s

        const timer3 = setTimeout(() => {
            setView('detail');
            setSimulationStep('idle');
        }, 4800); // Click effect duration

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }
  }, [isVisible, view, restartKey, isAutoPlay]);

  const theme = {
    bgRoot: isDarkMode ? '#1e1e1e' : '#ffffff',
    bgDashboard: isDarkMode ? '#18181b' : '#f4f4f5',
    bgCard: isDarkMode ? '#202022' : '#ffffff',
    bgHeader: isDarkMode ? '#18181b' : '#ffffff',
    borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    textPrimary: isDarkMode ? 'white' : '#18181b',
    textSecondary: isDarkMode ? '#9ca3af' : '#71717a',
    textMuted: isDarkMode ? '#6b7280' : '#a1a1aa',
    barBg: isDarkMode ? '#2d2d30' : '#e4e4e7',
    hoverBg: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    shadow: isDarkMode ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div ref={containerRef} className="relative h-[880px] rounded-xl overflow-hidden border shadow-2xl group font-sans transition-colors duration-300" style={{ backgroundColor: theme.bgRoot, borderColor: theme.borderColor }}>
      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes revealUp {
          from { clip-path: inset(100% 0 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes revealRight {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes growWidth {
          from { width: 0; }
        }
        @keyframes growHeight {
          from { height: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInBottom {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src="/bcoverv2.png" alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Restart Button */}
      <button 
        onClick={() => {
            setRestartKey(prev => prev + 1);
            setView('dashboard');
            setSimulationStep('idle');
            setIsAutoPlay(true);
        }}
        className="absolute bottom-4 right-4 flex items-center p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-all duration-300 z-20 group overflow-hidden hover:pr-4"
        title="Restart Animation"
      >
        <RotateCcw size={16} />
        <span className="max-w-0 group-hover:max-w-[100px] group-hover:ml-2 overflow-hidden transition-all duration-300 whitespace-nowrap font-medium text-sm">Replay</span>
      </button>

      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        {/* Dashboard Container */}
        <div key={restartKey} className="w-full h-full rounded-xl border shadow-2xl overflow-hidden flex flex-col transform scale-90 origin-center transition-colors duration-300" style={{ backgroundColor: theme.bgDashboard, borderColor: theme.borderColor }}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b transition-colors duration-300" style={{ backgroundColor: theme.bgHeader, borderColor: theme.borderColor }}>
                {view === 'dashboard' ? (
                    <>
                        <h1 className="text-xl font-medium transition-colors duration-300" style={{ color: theme.textPrimary }}>Multi-Channel KPI Monitoring</h1>
                        <div className="flex items-center gap-4 text-sm" style={{ color: theme.textSecondary }}>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
                                <div className={`w-9 h-5 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-[#5a6bff]' : 'bg-gray-300'}`}>
                                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${isDarkMode ? 'right-0.5' : 'left-0.5'}`}></div>
                                </div>
                                <span>Dark Mode</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 border rounded hover:bg-white/5 cursor-pointer transition-colors duration-300" style={{ borderColor: theme.borderColor, backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', color: theme.textSecondary }}>
                                <X size={14} />
                                <span>Exit full screen</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center gap-4">
                            <div 
                                className="p-2 rounded cursor-pointer transition-colors duration-300 hover:bg-white/10" 
                                onClick={() => {
                                    setView('dashboard');
                                    setIsAutoPlay(false);
                                }}
                                title="Back to Dashboard"
                            >
                                <ChevronLeft size={20} style={{ color: theme.textSecondary }} />
                            </div>
                            <div className="p-2 hover:bg-white/5 rounded cursor-pointer"><Filter size={16} style={{ color: theme.textSecondary }} /></div>
                            <div className="flex items-center gap-2 px-3 py-1.5 border rounded text-sm cursor-pointer hover:bg-white/5 transition-colors duration-300" style={{ borderColor: theme.borderColor, backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', color: theme.textSecondary }}>
                                <span>Last 14 days</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm" style={{ color: theme.textSecondary }}>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
                                <div className={`w-9 h-5 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-[#5a6bff]' : 'bg-gray-300'}`}>
                                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${isDarkMode ? 'right-0.5' : 'left-0.5'}`}></div>
                                </div>
                                <span>Dark Mode</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 border rounded text-sm cursor-pointer hover:bg-white/5 transition-colors duration-300" style={{ borderColor: theme.borderColor, backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', color: theme.textSecondary }}>
                                <span>Funnel Steps</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Dashboard Content */}
            <div className="h-full overflow-hidden relative transition-colors duration-300" style={{ backgroundColor: theme.bgDashboard }}>
                {view === 'dashboard' && (
                    <div className="p-6 grid grid-cols-12 gap-6 overflow-y-auto h-full animate-in fade-in duration-500">
                {/* Top Row */}
                {/* Active Users */}
                <div className="col-span-3 rounded-lg p-5 border flex flex-col h-[312px] overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:!border-[#4f8bff] group" style={{ backgroundColor: theme.bgCard, borderColor: theme.borderColor }}>
                    <div>
                        <h3 className="font-medium mb-2 transition-colors duration-300" style={{ color: theme.textPrimary }}>Active Users</h3>
                        <div className="flex items-center gap-2 text-[10px] mb-4 transition-colors duration-300" style={{ color: theme.textMuted }}>
                            <span className="px-1 border rounded text-[9px]" style={{ borderColor: theme.textMuted }}>N</span>
                            <span>KPI Analysis</span>
                            <span>•</span>
                            <span>Last 30 days</span>
                        </div>
                        <div className="text-4xl font-medium mb-4 transition-colors duration-300" style={{ color: theme.textPrimary }}>325,582</div>
                        <div className="flex items-center gap-4 text-xs mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-red-500 font-medium">▼ -3.7%</span>
                                <span className="text-gray-500">Last month</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 font-medium">▲ +6.3%</span>
                                <span className="text-gray-500">Last year</span>
                            </div>
                        </div>
                    </div>
                    {/* Sparkline */}
                    <div className="flex-1 w-full min-h-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative group/spark">
                        <div className="absolute inset-0 z-10 opacity-0 group-hover/spark:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                            <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                Peak: 342k
                            </div>
                        </div>
                        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,35 L15,38 L30,25 L45,30 L60,15 L75,25 L100,10 L100,40 L0,40 Z" fill="rgba(79, 139, 255, 0.1)" stroke="none" style={{ animation: isVisible ? 'fadeIn 1.5s ease-out forwards' : 'none', opacity: isVisible ? undefined : 0 }} />
                            <path d="M0,35 L15,38 L30,25 L45,30 L60,15 L75,25 L100,10" fill="none" stroke="#4f8bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" strokeDashoffset="300" style={{ animation: isVisible ? 'draw 2.5s ease-out forwards' : 'none' }} />
                        </svg>
                    </div>
                </div>

                {/* Total Visits */}
                <div className="col-span-3 rounded-lg p-5 border flex flex-col h-[312px] overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:!border-[#4f8bff] group" style={{ backgroundColor: theme.bgCard, borderColor: theme.borderColor }}>
                     <div>
                        <h3 className="font-medium mb-2 transition-colors duration-300" style={{ color: theme.textPrimary }}>Total Visits</h3>
                        <div className="flex items-center gap-2 text-[10px] mb-4 transition-colors duration-300" style={{ color: theme.textMuted }}>
                            <span className="px-1 border rounded text-[9px]" style={{ borderColor: theme.textMuted }}>N</span>
                            <span>KPI Analysis</span>
                            <span>•</span>
                            <span>Last 30 days</span>
                        </div>
                        <div className="text-4xl font-medium mb-4 transition-colors duration-300" style={{ color: theme.textPrimary }}>2.45 million</div>
                        <div className="flex items-center gap-4 text-xs mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 font-medium">▲ +7.7%</span>
                                <span className="text-gray-500">Last month</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 font-medium">▲ +4.3%</span>
                                <span className="text-gray-500">Last year</span>
                            </div>
                        </div>
                     </div>
                    {/* Sparkline */}
                    <div className="flex-1 w-full min-h-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative group/spark">
                        <div className="absolute inset-0 z-10 opacity-0 group-hover/spark:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                            <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                Peak: 2.8m
                            </div>
                        </div>
                        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,35 L15,30 L30,32 L45,15 L60,25 L75,25 L100,10 L100,40 L0,40 Z" fill="rgba(79, 139, 255, 0.1)" stroke="none" style={{ animation: isVisible ? 'fadeIn 1.5s ease-out forwards' : 'none', opacity: isVisible ? undefined : 0 }} />
                            <path d="M0,35 L15,30 L30,32 L45,15 L60,25 L75,25 L100,10" fill="none" stroke="#4f8bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" strokeDashoffset="300" style={{ animation: isVisible ? 'draw 2.5s ease-out forwards' : 'none' }} />
                        </svg>
                    </div>
                </div>

                {/* New User Onboarding Trend */}
                <div className="col-span-6 rounded-lg p-5 border h-[312px] flex flex-col transition-all duration-300 hover:shadow-lg hover:!border-[#4f8bff] group" style={{ backgroundColor: theme.bgCard, borderColor: theme.borderColor }}>
                    <h3 className="font-medium mb-1 transition-colors duration-300" style={{ color: theme.textPrimary }}>New User Onboarding Trend</h3>
                    <div className="flex items-center gap-4 text-[10px] mb-2 transition-colors duration-300" style={{ color: theme.textMuted }}>
                        <div className="flex items-center gap-1">
                            <BarChart2 size={12} />
                            <span>Event Analysis</span>
                        </div>
                        <span>•</span>
                        <span>Last 30 days</span>
                    </div>
                    {/* Legend */}
                    <div className="flex justify-end gap-4 text-[10px] mb-2 transition-colors duration-300" style={{ color: theme.textSecondary }}>
                        <div className="flex items-center gap-1"><div className="w-2 h-0.5 bg-[#4f8bff]"></div> Beijing</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-0.5 bg-[#5a6bff]"></div> Shanghai</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-0.5 bg-[#4ade80]"></div> New York City</div>
                    </div>
                    {/* Line Chart */}
                    <div 
                        className="flex-1 relative border-l border-b ml-8 mr-4 mb-6 min-h-0 transition-colors duration-300 cursor-crosshair" 
                        style={{ borderColor: theme.borderColor }}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const width = rect.width;
                            const index = Math.min(Math.max(Math.floor((x / width) * 6), 0), 5);
                            setHoveredDataPoint(index);
                        }}
                        onMouseLeave={() => setHoveredDataPoint(null)}
                    >
                        {/* Y Axis Labels */}
                        <div className="absolute -left-8 top-0 text-[9px] -translate-y-1/2 transition-colors duration-300" style={{ color: theme.textMuted }}>100%</div>
                        <div className="absolute -left-8 top-1/4 text-[9px] -translate-y-1/2 transition-colors duration-300" style={{ color: theme.textMuted }}>75%</div>
                        <div className="absolute -left-8 top-2/4 text-[9px] -translate-y-1/2 transition-colors duration-300" style={{ color: theme.textMuted }}>50%</div>
                        <div className="absolute -left-8 top-3/4 text-[9px] -translate-y-1/2 transition-colors duration-300" style={{ color: theme.textMuted }}>25%</div>
                        <div className="absolute -left-8 bottom-0 text-[9px] translate-y-1/2 transition-colors duration-300" style={{ color: theme.textMuted }}>0%</div>

                        {/* Grid Lines */}
                        <div className="absolute w-full h-px top-0 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                        <div className="absolute w-full h-px top-1/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                        <div className="absolute w-full h-px top-2/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                        <div className="absolute w-full h-px top-3/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>

                        {/* Hover Indicator Line */}
                        {hoveredDataPoint !== null && (
                            <div 
                                className="absolute top-0 bottom-0 w-px border-l border-dashed pointer-events-none z-10 transition-all duration-75"
                                style={{ 
                                    left: `${(hoveredDataPoint * 20) + 10}%`, // Center in segment
                                    borderColor: theme.textSecondary 
                                }}
                            ></div>
                        )}

                        {/* Tooltip */}
                        {hoveredDataPoint !== null && (
                            <div 
                                className="absolute z-20 p-3 rounded-lg shadow-xl border backdrop-blur-sm pointer-events-none transition-all duration-75"
                                style={{ 
                                    left: hoveredDataPoint < 3 ? `${(hoveredDataPoint * 20) + 15}%` : 'auto',
                                    right: hoveredDataPoint >= 3 ? `${100 - ((hoveredDataPoint * 20) - 5)}%` : 'auto',
                                    top: '10%',
                                    backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                                    borderColor: theme.borderColor
                                }}
                            >
                                <div className="text-[10px] font-medium mb-2" style={{ color: theme.textSecondary }}>{lineChartData[hoveredDataPoint].date}</div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-[10px]">
                                        <div className="w-2 h-2 rounded-full bg-[#4f8bff]"></div>
                                        <span style={{ color: theme.textPrimary }}>Beijing: {lineChartData[hoveredDataPoint].bj}%</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px]">
                                        <div className="w-2 h-2 rounded-full bg-[#5a6bff]"></div>
                                        <span style={{ color: theme.textPrimary }}>Shanghai: {lineChartData[hoveredDataPoint].sh}%</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px]">
                                        <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                                        <span style={{ color: theme.textPrimary }}>NYC: {lineChartData[hoveredDataPoint].ny}%</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Lines */}
                        <svg viewBox="0 0 100 100" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" preserveAspectRatio="none">
                            {/* NYC (Green) - Bottom Layer */}
                            <path d="M0,100 L0,70 L20,65 L40,75 L60,60 L80,65 L100,55 L100,100 Z" fill="#4ade80" fillOpacity="0.8" stroke="none" style={{ animation: isVisible ? 'revealRight 1.5s ease-out both' : 'none', opacity: isVisible ? undefined : 0 }} />
                            
                            {/* Shanghai (Dark Blue) - Middle Layer */}
                            <path d="M0,70 L20,65 L40,75 L60,60 L80,65 L100,55 L100,30 L80,35 L60,25 L40,40 L20,30 L0,35 Z" fill="#5a6bff" fillOpacity="0.8" stroke="none" style={{ animation: isVisible ? 'revealRight 1.5s ease-out 0.2s both' : 'none', opacity: isVisible ? undefined : 0 }} />
                            
                            {/* Beijing (Blue) - Top Layer */}
                            <path d="M0,35 L20,30 L40,40 L60,25 L80,35 L100,30 L100,0 L0,0 Z" fill="#4f8bff" fillOpacity="0.8" stroke="none" style={{ animation: isVisible ? 'revealRight 1.5s ease-out 0.4s both' : 'none', opacity: isVisible ? undefined : 0 }} />
                        </svg>

                        {/* X Axis Labels */}
                        <div className="absolute w-full flex justify-between text-[9px] top-full mt-2 transition-colors duration-300" style={{ color: theme.textMuted }}>
                            <span>06/25 Fri</span>
                            <span>06/27 Sun</span>
                            <span>06/29 Tue</span>
                            <span>07/01 Thu</span>
                            <span>07/03 Sat</span>
                            <span>07/05 Mon</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                {/* Top Cities */}
                <div className="col-span-5 rounded-lg p-5 border h-[320px] transition-all duration-300 hover:shadow-lg hover:!border-[#4f8bff] group" style={{ backgroundColor: theme.bgCard, borderColor: theme.borderColor }}>
                    <h3 className="font-medium mb-1 transition-colors duration-300" style={{ color: theme.textPrimary }}>Top Cities with New Users</h3>
                    <div className="flex items-center gap-4 text-[10px] mb-6 transition-colors duration-300" style={{ color: theme.textMuted }}>
                        <div className="flex items-center gap-1">
                            <BarChart2 size={12} />
                            <span>Event Analysis</span>
                        </div>
                        <span>•</span>
                        <span>Last 30 days</span>
                    </div>
                    
                    <div className="space-y-3">
                        {[
                            { city: 'Beijing', val: 12534, width: '100%' },
                            { city: 'Shanghai', val: 8753, width: '70%' },
                            { city: 'New York...', val: 6892, width: '55%' },
                            { city: 'Detroit', val: 5022, width: '40%' },
                            { city: 'London', val: 4375, width: '35%' },
                            { city: 'Hongkong', val: 3644, width: '30%' },
                            { city: 'Pittsburgh', val: 3102, width: '25%' },
                            { city: 'Orlando', val: 2600, width: '20%' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs group/row hover:bg-white/5 rounded px-1 -mx-1 transition-colors">
                                <div className="w-20 text-right truncate transition-colors duration-300" style={{ color: theme.textSecondary }}>{item.city}</div>
                                <div className="flex-1 h-4 rounded-sm overflow-hidden relative transition-colors duration-300" style={{ backgroundColor: theme.barBg }}>
                                    <div className="h-full bg-[#5a6bff]" style={{ width: isVisible ? item.width : 0, animation: isVisible ? `growWidth 1.5s ease-out ${i * 0.1}s both` : 'none' }}></div>
                                </div>
                                <div className="w-12 text-[10px] transition-colors duration-300" style={{ color: theme.textMuted }}>{item.val.toLocaleString()}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Conversion */}
                <div 
                    className={`col-span-7 rounded-lg p-5 border h-[320px] flex flex-col transition-all duration-300 relative cursor-pointer hover:shadow-xl hover:!border-[#4f8bff] group ${simulationStep === 'hovering' ? 'scale-[1.02]' : ''} ${simulationStep === 'clicking' ? 'scale-95' : ''}`}
                    style={{ backgroundColor: theme.bgCard, borderColor: theme.borderColor }}
                    onClick={() => {
                        setView('detail');
                        setIsAutoPlay(false);
                    }}
                >
                    <h3 className="font-medium mb-1 transition-colors duration-300" style={{ color: theme.textPrimary }}>User Conversion & Drop-offs</h3>
                    <div className="flex items-center gap-4 text-[10px] mb-6 transition-colors duration-300" style={{ color: theme.textMuted }}>
                        <div className="flex items-center gap-1">
                            <Filter size={12} />
                            <span>Funnel Analysis</span>
                        </div>
                        <span>•</span>
                        <span>Last 30 days</span>
                    </div>

                    {/* Cursor Simulation */}
                    <div className={`absolute z-50 transition-all duration-1000 ease-in-out pointer-events-none ${simulationStep === 'idle' ? 'opacity-0 translate-x-20 translate-y-20' : 'opacity-100'}`} style={{ top: '60%', left: '70%', transform: simulationStep === 'idle' ? 'translate(40px, 40px)' : 'translate(0,0)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div className="flex-1 flex items-end justify-around px-8 relative pb-8">
                        {/* Grid lines */}
                        <div className="absolute inset-0 border-b pointer-events-none mb-8 transition-colors duration-300" style={{ borderColor: theme.borderColor }}>
                            <div className="absolute w-full h-px top-0 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                            <div className="absolute w-full h-px top-1/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                            <div className="absolute w-full h-px top-2/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                            <div className="absolute w-full h-px top-3/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                        </div>
                        
                        {/* Y Axis */}
                        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[9px] py-1 transition-colors duration-300" style={{ color: theme.textMuted }}>
                            <span>100%</span>
                            <span>75%</span>
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                        </div>

                        {/* Bar 1 */}
                        <div className="w-24 h-full flex flex-col justify-end relative group/bar">
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                    Users: 147,329
                                </div>
                            </div>
                            <div className="h-full bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: isVisible ? 'growHeight 1.5s ease-out both' : 'none', height: isVisible ? '100%' : 0 }}></div>
                            <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>1. Product Details Page</div>
                        </div>

                        {/* Arrow/Dropoff */}
                        <div className="h-full flex flex-col justify-center items-center pb-8 relative z-20">
                             <div className="px-2 py-1 rounded text-[10px] mb-2 border shadow-lg transition-colors duration-300" style={{ backgroundColor: theme.barBg, color: theme.textSecondary, borderColor: theme.borderColor, animation: isVisible ? 'fadeIn 1.5s ease-out 0.5s both' : 'none', opacity: isVisible ? undefined : 0 }}>45.25%</div>
                        </div>

                        {/* Bar 2 */}
                        <div className="w-24 h-full flex flex-col justify-end relative group/bar">
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                    Users: 66,666
                                </div>
                            </div>
                            <div className="h-[45%] bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: isVisible ? 'growHeight 1.5s ease-out 0.2s both' : 'none', height: isVisible ? '45%' : 0 }}></div>
                            <div className="h-[55%] w-full absolute bottom-[45%] rounded-t-sm opacity-50 transition-colors duration-300" style={{ backgroundColor: theme.barBg, animation: isVisible ? 'growHeight 1.5s ease-out 0.2s both' : 'none', height: isVisible ? '55%' : 0 }}></div>
                            <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>2. Add to Cart</div>
                        </div>

                        {/* Arrow/Dropoff */}
                        <div className="h-full flex flex-col justify-center items-center pb-8 relative z-20">
                             <div className="px-2 py-1 rounded text-[10px] mb-2 border shadow-lg transition-colors duration-300" style={{ backgroundColor: theme.barBg, color: theme.textSecondary, borderColor: theme.borderColor, animation: isVisible ? 'fadeIn 1.5s ease-out 0.7s both' : 'none', opacity: isVisible ? undefined : 0 }}>43.62%</div>
                        </div>

                        {/* Bar 3 */}
                        <div className="w-24 h-full flex flex-col justify-end relative group/bar">
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                    Users: 29,080
                                </div>
                            </div>
                            <div className="h-[20%] bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: isVisible ? 'growHeight 1.5s ease-out 0.4s both' : 'none', height: isVisible ? '20%' : 0 }}></div>
                            <div className="h-[25%] w-full absolute bottom-[20%] rounded-t-sm opacity-50 transition-colors duration-300" style={{ backgroundColor: theme.barBg, animation: isVisible ? 'growHeight 1.5s ease-out 0.4s both' : 'none', height: isVisible ? '25%' : 0 }}></div>
                            <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>3. Payment Success</div>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {view === 'detail' && (
                <div className="p-6 h-full flex gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col min-h-0">
                        {/* Stats */}
                        <div className="flex items-center gap-12 mb-8 px-4">
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-medium transition-colors duration-300" style={{ color: theme.textPrimary }}>14.23%</span>
                                    <span className="text-sm transition-colors duration-300" style={{ color: theme.textMuted }}>Overall Conversion Rate</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-medium transition-colors duration-300" style={{ color: theme.textPrimary }}>45.34 min</span>
                                    <span className="text-sm transition-colors duration-300" style={{ color: theme.textMuted }}>Average Time to Convert</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="flex-1 relative pt-8">
                             {/* Grid lines */}
                            <div className="absolute inset-0 border-b pointer-events-none mb-8 transition-colors duration-300" style={{ borderColor: theme.borderColor }}>
                                <div className="absolute w-full h-px top-0 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                                <div className="absolute w-full h-px top-1/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                                <div className="absolute w-full h-px top-2/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                                <div className="absolute w-full h-px top-3/4 transition-colors duration-300" style={{ backgroundColor: theme.borderColor }}></div>
                            </div>
                            
                            {/* Y Axis */}
                            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[9px] py-1 transition-colors duration-300" style={{ color: theme.textMuted }}>
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>

                            {/* Bars and Connectors */}
                            <div className="flex justify-around items-end h-full pb-8 px-8 pl-12">
                                {/* Bar 1 */}
                                <div className="w-16 h-full flex flex-col justify-end relative group/bar">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                        <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                            Users: 150,000
                                        </div>
                                    </div>
                                    <div className="h-full bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: 'growHeight 1s ease-out both' }}></div>
                                    <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>1. Product Details</div>
                                </div>

                                {/* Arrow/Dropoff */}
                                <div className="h-full flex flex-col justify-center items-center pb-8 relative z-20">
                                     <div className="px-1.5 py-0.5 rounded text-[9px] mb-2 border shadow-lg transition-colors duration-300" style={{ backgroundColor: theme.barBg, color: theme.textSecondary, borderColor: theme.borderColor, animation: 'fadeIn 1s ease-out 0.5s both' }}>45%</div>
                                </div>

                                {/* Bar 2 */}
                                <div className="w-16 h-full flex flex-col justify-end relative group/bar">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                        <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                            Users: 67,500
                                        </div>
                                    </div>
                                    <div className="h-[45%] bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: 'growHeight 1s ease-out 0.2s both' }}></div>
                                    <div className="h-[55%] w-full absolute bottom-[45%] rounded-t-sm opacity-50 transition-colors duration-300" style={{ backgroundColor: theme.barBg, animation: 'growHeight 1s ease-out 0.2s both' }}></div>
                                    <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>2. Add to Cart</div>
                                </div>

                                {/* Arrow/Dropoff */}
                                <div className="h-full flex flex-col justify-center items-center pb-8 relative z-20">
                                     <div className="px-1.5 py-0.5 rounded text-[9px] mb-2 border shadow-lg transition-colors duration-300" style={{ backgroundColor: theme.barBg, color: theme.textSecondary, borderColor: theme.borderColor, animation: 'fadeIn 1s ease-out 0.7s both' }}>43%</div>
                                </div>

                                {/* Bar 3 */}
                                <div className="w-16 h-full flex flex-col justify-end relative group/bar">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                        <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                            Users: 30,000
                                        </div>
                                    </div>
                                    <div className="h-[20%] bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: 'growHeight 1s ease-out 0.4s both' }}></div>
                                    <div className="h-[25%] w-full absolute bottom-[20%] rounded-t-sm opacity-50 transition-colors duration-300" style={{ backgroundColor: theme.barBg, animation: 'growHeight 1s ease-out 0.4s both' }}></div>
                                    <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>3. Payment</div>
                                </div>

                                {/* Arrow/Dropoff */}
                                <div className="h-full flex flex-col justify-center items-center pb-8 relative z-20">
                                     <div className="px-1.5 py-0.5 rounded text-[9px] mb-2 border shadow-lg transition-colors duration-300" style={{ backgroundColor: theme.barBg, color: theme.textSecondary, borderColor: theme.borderColor, animation: 'fadeIn 1s ease-out 0.9s both' }}>60%</div>
                                </div>

                                {/* Bar 4 */}
                                <div className="w-16 h-full flex flex-col justify-end relative group/bar">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                        <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                            Users: 18,000
                                        </div>
                                    </div>
                                    <div className="h-[12%] bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: 'growHeight 1s ease-out 0.6s both' }}></div>
                                    <div className="h-[8%] w-full absolute bottom-[12%] rounded-t-sm opacity-50 transition-colors duration-300" style={{ backgroundColor: theme.barBg, animation: 'growHeight 1s ease-out 0.6s both' }}></div>
                                    <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>4. Review</div>
                                </div>

                                {/* Arrow/Dropoff */}
                                <div className="h-full flex flex-col justify-center items-center pb-8 relative z-20">
                                     <div className="px-1.5 py-0.5 rounded text-[9px] mb-2 border shadow-lg transition-colors duration-300" style={{ backgroundColor: theme.barBg, color: theme.textSecondary, borderColor: theme.borderColor, animation: 'fadeIn 1s ease-out 1.1s both' }}>95%</div>
                                </div>

                                {/* Bar 5 */}
                                <div className="w-16 h-full flex flex-col justify-end relative group/bar">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                        <div className="px-2 py-1 rounded text-[10px] shadow-lg border backdrop-blur-sm whitespace-nowrap" style={{ backgroundColor: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)', borderColor: theme.borderColor, color: theme.textPrimary }}>
                                            Users: 16,500
                                        </div>
                                    </div>
                                    <div className="h-[11%] bg-[#5a6bff] w-full rounded-t-sm relative z-10 group-hover/bar:brightness-110 transition-all" style={{ animation: 'growHeight 1s ease-out 0.8s both' }}></div>
                                    <div className="h-[1%] w-full absolute bottom-[11%] rounded-t-sm opacity-50 transition-colors duration-300" style={{ backgroundColor: theme.barBg, animation: 'growHeight 1s ease-out 0.8s both' }}></div>
                                    <div className="absolute -bottom-8 w-full text-center text-[10px] transition-colors duration-300" style={{ color: theme.textSecondary }}>5. Thank You</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-64 border-l pl-6 flex flex-col gap-6 pt-2 transition-colors duration-300" style={{ borderColor: theme.borderColor }}>
                        <div>
                            <h4 className="text-sm font-medium mb-3 transition-colors duration-300" style={{ color: theme.textSecondary }}>Funnel Steps</h4>
                            <div className="space-y-2">
                                {['Product Details', 'Add to Cart', 'Payment', 'Review', 'Thank You'].map((step, i) => (
                                    <div key={i} className="flex items-center justify-between p-2 rounded border text-xs hover:bg-white/5 cursor-pointer transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', borderColor: theme.borderColor, color: theme.textSecondary }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-[#5a6bff]/20 text-[#5a6bff] flex items-center justify-center text-[9px]">+</div>
                                            <span>{step}</span>
                                        </div>
                                        <ChevronDown size={12} style={{ color: theme.textMuted }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3 transition-colors duration-300" style={{ color: theme.textSecondary }}>Conversion Conditions</h4>
                            <div className="flex gap-2">
                                <div className="flex-1 p-2 rounded border text-xs transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', borderColor: theme.borderColor, color: theme.textSecondary }}>30</div>
                                <div className="flex-1 flex items-center justify-between p-2 rounded border text-xs transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', borderColor: theme.borderColor, color: theme.textSecondary }}>
                                    <span>Day</span>
                                    <ChevronDown size={12} style={{ color: theme.textMuted }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3 transition-colors duration-300" style={{ color: theme.textSecondary }}>User Segment</h4>
                            <div className="flex items-center justify-between p-2 rounded border text-xs transition-colors duration-300" style={{ backgroundColor: isDarkMode ? '#27272a' : '#f4f4f5', borderColor: theme.borderColor, color: theme.textSecondary }}>
                                <div className="flex items-center gap-2">
                                    <span>All Users</span>
                                </div>
                                <ChevronDown size={12} style={{ color: theme.textMuted }} />
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

export default GioCover;
