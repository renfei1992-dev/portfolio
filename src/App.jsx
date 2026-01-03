import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Send, 
  User, 
  Sparkles, 
  Menu, 
  X, 
  XCircle,
  Github, 
  Linkedin, 
  Mail, 
  Zap,
  Layout,
  MessageSquare,
  Play,
  Monitor,
  Folder,
  FileText,
  Heading,
  List,
  FileJson,
  FileCode,
  Settings,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Command,
  Wrench,
  Box,
  Boxes,
  Database,
  Table,
  FlaskConical,
  BookOpen,
  Bookmark,
  BrainCircuit,
  TestTube,
  Bot,
  MessageCircle,
  Briefcase,
  Clock,
  Edit,
  MousePointer2,
  Loader2,
  Filter,
  Sliders,
  Maximize2,
  Download,
  RotateCcw,
  Share,
  Plus,
  Shield,
  Info,
  Check,
  ArrowRight,
  Copy,
  ArrowDownToLine,
  MoreHorizontal,
  Trash2,
  BarChart3,
  CheckCircle2,
  Lock,
  BarChart2,
  PieChart,
  LineChart,
  Image as ImageIcon,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  ListOrdered,
  Video,
  Users,
  HelpCircle
} from 'lucide-react';

import GioCover from './GioCover';

const Portfolio = () => {
  const [activeFile, setActiveFile] = useState('Welcome');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isChatOpen, setChatOpen] = useState(true);
  const scrollContainerRef = useRef(null);

  // Scroll to top when activeFile changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeFile]);
  
  // Mobile check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
        setChatOpen(false);
      } else {
        setSidebarOpen(true);
        setChatOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const files = [
    { name: 'Welcome', icon: <FileText size={15} className="text-blue-400" />, type: 'markdown' },
    { name: 'Microsoft Fabric', icon: <FileJson size={15} className="text-yellow-400" />, type: 'json' },
    { name: 'GrowingIO', icon: <FileCode size={15} className="text-cyan-400" />, type: 'typescript' },
    { name: 'Catalant', icon: <FileCode size={15} className="text-green-400" />, type: 'typescript' },
    { name: 'About Me', icon: <User size={15} className="text-purple-400" />, type: 'markdown' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#09090b] text-gray-300 font-sans overflow-hidden selection:bg-cyan-500/30">
      
      {/* Main IDE Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar (Explorer) */}
        <div className={`${isSidebarOpen ? 'w-64' : 'w-8'} bg-[#0c0c0e] border-r border-white/5 flex flex-col transition-all duration-300 overflow-hidden shrink-0 relative`}>
          {/* Collapsed state indicator */}
          {!isSidebarOpen && (
            <div className="flex flex-col h-full">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-white/10 transition-colors text-gray-400 hover:text-white border-b border-white/5"
                title="Expand Explorer"
              >
                <Folder size={16} />
              </button>
              <div className="flex-1 flex items-center justify-center">
                <div className="transform -rotate-90 text-xs font-bold text-gray-500 tracking-wider whitespace-nowrap">
                  EXPLORER
                </div>
              </div>
            </div>
          )}
          
          {isSidebarOpen && (
            <>
              <div className="p-3 text-xs font-bold text-gray-400 tracking-wider flex justify-between items-center">
                <span>EXPLORER</span>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 hover:bg-white/5 rounded transition-colors"
                  title="Collapse Explorer"
                >
                  <X size={12} />
                </button>
              </div>
          
              
          <div className="flex-1 overflow-y-auto">
            <div className="px-2">
              <div className="flex items-center gap-1 text-gray-400 py-1 cursor-pointer hover:text-white">
                <ChevronDown size={14} />
                <Folder size={14} className="text-purple-400" />
                <span className="text-sm font-bold">Fei's Design Portfolio</span>
              </div>
              
              <div className="pl-4 mt-1 space-y-1">
                {files.map(file => (
                  <button
                    key={file.name}
                    onClick={() => setActiveFile(file.name)}
                    draggable={file.name === 'Sales'}
                    onDragStart={(e) => {
                      if (file.name === 'Sales') {
                        e.dataTransfer.setData('tableName', 'Sales');
                        e.currentTarget.style.opacity = '0.5';
                      }
                    }}
                    onDragEnd={(e) => {
                      if (file.name === 'Sales') {
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                    className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm transition-colors ${activeFile === file.name ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-white/5 hover:text-white'} ${file.name === 'Sales' ? 'cursor-grab active:cursor-grabbing' : ''}`}
                  >
                    {file.icon}
                    <span className="font-mono text-xs">{file.name}</span>
                    {file.name === 'Sales' && <span className="ml-auto text-[10px] text-cyan-400/60">drag me</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
            </>
          )}
        </div>        {/* Center Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#09090b] relative">
           
           {/* Tab Bar */}
           <div className="h-9 bg-[#09090b] border-b border-white/5 flex items-center overflow-x-auto no-scrollbar">
             {files.map(file => (
               <button 
                 key={file.name}
                 onClick={() => setActiveFile(file.name)}
                 className={`h-full px-4 flex items-center gap-2 text-xs border-r border-white/5 min-w-fit ${activeFile === file.name ? 'bg-[#09090b] text-white border-t-2 border-t-cyan-500' : 'bg-[#0c0c0e] text-gray-500 hover:bg-[#09090b]'}`}
               >
                 {file.icon}
                 {file.name}
                 {activeFile === file.name && <X size={12} className="ml-2 hover:text-red-400" />}
               </button>
             ))}
           </div>

           {/* Breadcrumbs */}
           <div className="h-8 flex items-center px-4 gap-2 text-xs text-gray-500 border-b border-white/5">
             <span>Fei's Design Portfolio</span>
             <ChevronRight size={12} />
             <span>src</span>
             <ChevronRight size={12} />
             <span className="text-gray-300">{activeFile}</span>
           </div>

           {/* Editor Content Scroller */}
           <div ref={scrollContainerRef} className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12 relative">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
                {activeFile === 'Welcome' && <ReadmeContent setActiveFile={setActiveFile} />}
                {activeFile === 'Microsoft Fabric' && <ProjectsContent />}
                {activeFile === 'GrowingIO' && <GrowingIOContent />}
                {activeFile === 'Catalant' && <CatalantContent />}
                {activeFile === 'About Me' && <AboutContent />}
              </div>
           </div>

           {/* Mobile Menu Toggles */}
           <div className="md:hidden absolute bottom-4 left-4 right-4 flex justify-between z-50">
              <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 bg-[#1e1e1e] border border-white/10 rounded-lg text-white shadow-lg">
                <Menu size={20} />
              </button>
              <button onClick={() => setChatOpen(!isChatOpen)} className="p-2 bg-cyan-600 border border-cyan-400 rounded-lg text-white shadow-lg">
                <MessageSquare size={20} />
              </button>
           </div>
        </div>

        {/* Right Sidebar (AI Chat) */}
        <div className={`${isChatOpen ? 'w-80 md:w-96' : 'w-8'} bg-[#0c0c0e] border-l border-white/5 flex flex-col transition-all duration-300 shrink-0 absolute md:relative right-0 h-full z-40 shadow-2xl md:shadow-none relative`}>
          {/* Collapsed state indicator */}
          {!isChatOpen && (
            <div className="flex flex-col h-full">
              <button 
                onClick={() => setChatOpen(true)}
                className="p-2 hover:bg-cyan-500/10 transition-colors text-cyan-400 hover:text-cyan-300 border-b border-white/5"
                title="Expand AI Assistant"
              >
                <Sparkles size={16} />
              </button>
              <div className="flex-1 flex items-center justify-center">
                <div className="transform -rotate-90 text-xs font-bold text-cyan-500 tracking-wider whitespace-nowrap">
                  AI
                </div>
              </div>
            </div>
          )}
          
          {isChatOpen && (
            <>
              <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#0c0c0e]">
                 <span className="text-xs font-bold text-cyan-400 flex items-center gap-2">
                   <Sparkles size={14} /> AI ASSISTANT
                 </span>
                 <button 
                   onClick={() => setChatOpen(false)} 
                   className="text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded transition-colors"
                   title="Collapse AI Assistant"
                 >
                   <X size={16} />
                 </button>
              </div>
              
              <AIChatInterface />
            </>
          )}
        </div>

      </div>

      {/* Status Bar */}
      <div className="h-6 bg-cyan-950/20 border-t border-cyan-500/20 flex items-center justify-between px-3 text-[10px] text-cyan-400 font-mono select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
             <Code2 size={10} />
             <span>fei-portfolio-2025</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-1 text-white animate-pulse">
             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
             AI Connected
           </div>
        </div>
      </div>

    </div>
  );
};

// --- CONTENT COMPONENTS ---

const ReadmeContent = ({ setActiveFile }) => (
  <div className="prose prose-invert prose-p:text-gray-400 prose-headings:text-gray-200 max-w-none">
    <div className="mb-8 pb-8">
      <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
        Welcome to Fei's <span className="text-cyan-400">UX Portfolio</span>
      </h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        Fei is a principal design manager, working on the best developer experience with AI in Microsoft Fabric.
      </p>
      
      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[#131315] border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="text-purple-400" size={16} />
            <span className="text-sm font-mono text-purple-300">Experience</span>
          </div>
          <p className="text-white font-bold">Principal Design Manager</p>
          <p className="text-xs text-gray-500">Microsoft Azure Data Group</p>
        </div>
        
        <div className="p-4 rounded-lg bg-[#131315] border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-cyan-400" size={16} />
            <span className="text-sm font-mono text-cyan-300">Focus</span>
          </div>
          <p className="text-white font-bold">AI Developer Experience</p>
          <p className="text-xs text-gray-500">Microsoft Fabric Platform</p>
        </div>
      </div>
    </div>

    {/* Navigation Cards */}
    <div className="space-y-6 mb-12">
      <div 
        className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer group hover:scale-105 transform duration-200" 
        onClick={() => setActiveFile('Microsoft Fabric')}
      >
        <div className="flex-shrink-0 w-2/3 rounded-lg overflow-hidden relative bg-gray-900 cursor-default" onClick={(e) => e.stopPropagation()}>
          <div className="w-full h-[528px] overflow-hidden relative bg-[#0c0c0e]">
             <div className="transform scale-[0.6] origin-top-left w-[167%] h-[167%]">
                <FabricCover />
             </div>
          </div>
          <div className="absolute top-2 left-2 text-xs font-mono text-purple-300 bg-black/70 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
            Microsoft Fabric
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-white m-0">Fabric Developer Experience</h3>
          </div>
          <div className="text-xs text-purple-300 mb-3 font-mono">1 Year ago | Beijing, China</div>
          <p className="text-sm text-gray-400 m-0 leading-relaxed">
            Microsoft Fabric is a complete data platform suitable for the AI era. Here, I bridge the gap between complex data engineering and intuitive design, managing a global team to deliver tools that empower data professionals to achieve more.
          </p>
          <div className="mt-4 flex items-center text-xs text-purple-300 font-mono">
            <span>Microsoft Fabric</span>
            <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      <div 
        className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer group hover:scale-105 transform duration-200" 
        onClick={() => setActiveFile('GrowingIO')}
      >
        <div className="flex-shrink-0 w-2/3 rounded-lg overflow-hidden relative bg-gray-900 cursor-default" onClick={(e) => e.stopPropagation()}>
          <div className="w-full h-[528px] overflow-hidden relative bg-[#0c0c0e]">
             <div className="transform scale-[0.6] origin-top-left w-[167%] h-[167%]">
                <GioCover />
             </div>
          </div>
          <div className="absolute top-2 left-2 text-xs font-mono text-cyan-300 bg-black/70 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
            GrowingIO Analytics
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-white m-0">Build Design Culture at GrowingIO</h3>
          </div>
          <div className="text-xs text-cyan-300 mb-3 font-mono">3 Years ago | Beijing, China</div>
          <p className="text-sm text-gray-400 m-0 leading-relaxed">
            GrowingIO is a leading data analytics platform in Beijing. In October 2020, I returned to China to join the company as Product Design Manager, where I was tasked with building the design team from the ground up and reviving its design culture.
          </p>
          <div className="mt-4 flex items-center text-xs text-cyan-300 font-mono">
            <span>GrowingIO Analytics</span>
            <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>


      <div 
        className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 hover:border-green-400 transition-all cursor-pointer group hover:scale-105 transform duration-200" 
        onClick={() => setActiveFile('Catalant')}
      >
        <div className="flex-shrink-0 w-2/3 rounded-lg overflow-hidden relative bg-gray-900">
          <img 
            src="/catalant.png" 
            alt="Catalant Project"
            className="w-full h-auto object-cover"
            onError={(e) => {
              // Fallback to styled placeholder if image doesn't load
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback styled placeholder */}
          <div className="hidden w-full h-40 bg-gradient-to-br from-green-800/20 to-emerald-800/20 border border-green-500/20 items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Terminal size={40} className="text-white" />
            </div>
          </div>
          <div className="absolute top-2 left-2 text-xs font-mono text-green-300 bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
            Marketplace Platform
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-white m-0">Catalant Smart Talent Marketplace</h3>
          </div>
          <div className="text-xs text-green-300 mb-3 font-mono">5 Years ago | Boston, USA</div>
          <p className="text-sm text-gray-400 m-0 leading-relaxed">
            The Catalant Marketplace helps global businesses find consultants and industry experts. I led the research and design effort of the Catalant Marketplace, driving +33% in task conversion and +23% in user satisfaction.
          </p>
          <div className="mt-4 flex items-center text-xs text-green-300 font-mono">
            <span>Catalant</span>
            <ChevronRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/10 my-12"></div>

    {/* Articles Section */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Articles & Insights</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <a 
          href="https://uxplanet.org/omni-space-is-a-digital-twin-of-a-shopping-mall-7a71a752fc64?gi=d787791e7750" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-[#131315] border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Omni Space Is A Digital Twin of A Shopping Mall
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Omni Space is an imaginative concept for a metaverse shopping mall, where users navigate a flexible, privacy-focused virtual environment filled with digital twins of real products.
          </p>
        </a>

        <a 
          href="https://uxdesign.cc/ux-strategies-to-guide-users-through-a-complicated-journey-6b945b61eadd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-[#131315] border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            UX strategies to guide users through a complicated journey
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The article recommends simplifying complex user journeys by setting clear goals, streamlining tasks, and using small, engaging actions or incentives to guide users smoothly and build habits.
          </p>
        </a>

        <a 
          href="https://uxdesign.cc/personas-jtbd-user-needs-goals-pain-points-7eaa81976f0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-[#131315] border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Personas and Jobs to be done
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The article explains that both personas and Jobs-to-be-Done frameworks aim to uncover user needs by combining an understanding of user goals and pain points, emphasizing the importance of qualitative research for creating meaningful solutions.
          </p>
        </a>

        <a 
          href="https://uxdesign.cc/what-my-color-blindness-taught-me-about-design-d3009a93ff9c" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-[#131315] border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            What my color-blindness taught me about design
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The article argues that living with color blindness has made the author a more empathetic designer, emphasizing the critical importance of accessibility, considering diverse user experiences, and using multiple solutions—like contrast, icons, and shapes—to create inclusive designs for all users.
          </p>
        </a>

        <a 
          href="https://uxdesign.cc/user-interview-isnt-what-you-think-it-is-e051f339762a" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-[#131315] border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            There're no wrong answers in UX User Interview, but there're wrong questions
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            User interviews in UX are valuable for exploring users' motivations and pain points, but are not suitable for statistically valid conclusions, predicting user behavior, or determining which designs work best, because the quality of insights depends on asking open-ended, unbiased questions rather than expecting definitive answers or accurate recall from participants.
          </p>
        </a>

        <a 
          href="https://uxdesign.cc/service-design-in-long-term-oriented-cultures-how-to-handle-oh-snap-situations-db8f6c8b7b8c" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-[#131315] border border-white/5 hover:border-cyan-500/30 transition-colors cursor-pointer group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Service Design in Long-term Oriented Cultures: How to Handle "Oh Snap" Situations
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The article explains that in long-term oriented cultures, building personal relationships is crucial for service design and recovery from service failures, as customers value trust and loyalty but may be more deeply affected by service mishaps, requiring culturally sensitive and relationship-focused solutions.
          </p>
        </a>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/10 my-12"></div>

    {/* About Me Section */}
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <p className="text-gray-400 leading-relaxed">
            👋🏼 I'm Fei Ren, a passionate design leader with a background in enterprise products, data, and AI. Currently, I work as a Principal Design Manager at Microsoft, where I lead a global team, driving innovative data products in Microsoft Fabric.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My journey spans diverse roles and industries. Besides design, I am a blues guitar player. I love collecting effect pedals and electric guitars.
          </p>
          <div className="text-gray-400 leading-relaxed">
            <p className="font-semibold text-white mb-2">Key qualifications:</p>
            <ul className="space-y-2 pl-4">
              <li>• 8 years in product design with 5 years in team management and leadership, building high-performing global teams and delivering measurable business impact through design.</li>
              <li>• Achieved consistent career progression with promotions every year, reflecting exceptional performance and growth.</li>
            </ul>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-full md:w-80 h-96 rounded-xl overflow-hidden bg-gray-900 border border-white/10">
          <img 
            src="/fei-portrait.jpg" 
            alt="Fei Ren - Principal Design Manager"
            className="w-full h-full object-cover"
            onLoad={(e) => console.log('Image loaded successfully:', e.target.src)}
            onError={(e) => {
              console.log('Image failed to load:', e.target.src);
              // Fallback if image doesn't load
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content */}
          <div className="hidden w-full h-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20 items-center justify-center flex-col gap-4">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">Fei</p>
              <p className="text-gray-400 text-sm">Principal Design Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResearchInsights = () => {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">What's broken in coding?</h2>
      
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* User Research Column */}
        <div className="p-1 rounded-2xl border border-white/10 bg-[#111111]">
           <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                 <Search className="text-cyan-400" size={24} />
                 <h3 className="text-xl font-bold text-cyan-400">User Research</h3>
              </div>
              
              <div className="bg-[#0c0c0e] rounded-xl p-8 font-mono text-sm border border-white/5 flex-1">
                 <div className="space-y-6 mb-8">
                    <div>
                       <div className="text-purple-400 mb-2">Method:</div>
                       <div className="text-gray-300">60 minute 1-on-1 sessions of usability testing coding products.</div>
                    </div>
                    <div>
                       <div className="text-purple-400 mb-2">Participants:</div>
                       <div className="text-gray-300">4 data engineers and 4 data scientists.</div>
                    </div>
                    <div>
                       <div className="text-purple-400 mb-2">Theme:</div>
                       <div className="text-gray-300">Semi-structured interviews and allows free explorations.</div>
                    </div>
                 </div>

                 <div className="border-t border-white/10 my-8"></div>

                 <p className="text-gray-400 leading-relaxed">
                    We conducted user research that included interviews, testing, and direct observation of data scientists and engineers in their daily workflows. By listening to their experiences and watching how they interacted with coding tools, we uncovered common pain points such as slow performance, complicated setup processes, difficulties with collaboration, and concerns about data security.
                 </p>
              </div>
           </div>
        </div>

        {/* Conclusions Column */}
        <div className="p-1 rounded-2xl border border-white/10 bg-[#111111]">
           <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                 <Zap className="text-yellow-400" size={24} />
                 <h3 className="text-xl font-bold text-yellow-400">Conclusions</h3>
              </div>

              <div className="bg-[#0c0c0e] rounded-xl p-8 font-mono text-sm border border-white/5 flex-1">
                 <p className="text-gray-300 mb-8 leading-relaxed">
                    Users spent majority of their time fighting tools instead of finding insights. They faced a minefield of obstacles:
                 </p>

                 <div className="border-t border-white/10 my-8"></div>

                 <div className="space-y-6">
                    {[
                      { title: "Setup Nightmares", desc: "Spend hours install languages configuring environments." },
                      { title: "Lag & Frustration", desc: "Slow performance for handling large scale data." },
                      { title: "Collaboration Chaos", desc: "Sharing work meant endless email threads and versions." },
                      { title: "Need Help with Coding", desc: "Spend hours searching for coding solutions on GitHub and developer forums." }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1">•</span>
                          <div className="leading-relaxed">
                             <span className="text-yellow-400">{item.title}: </span>
                             <span className="text-gray-300">{item.desc}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Our Vision Column - Full Width */}
      <div className="p-1 rounded-2xl border border-white/10 bg-[#111111]">
         <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
               <Sparkles className="text-purple-400" size={24} />
               <h3 className="text-xl font-bold text-purple-400">Our Vision</h3>
            </div>

            <div className="bg-[#0c0c0e] rounded-xl p-8 font-mono text-sm border border-white/5 flex-1">
               <p className="text-gray-300 mb-8 leading-relaxed">
                  Make Fabric Notebook a go-to coding tool for every data project.
               </p>

               <div className="border-t border-white/10 my-8"></div>

               <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: "Stellar performance", desc: "Learn the core workflow in minutes, not hours. No more waiting, just coding and running with built-in features to power innovation." },
                    { title: "Real-time collaboration", desc: "Supercharge teamwork by letting multiple people code in different languages, comment, and brainstorm together instantly." },
                    { title: "AI-Assisted coding", desc: "Get help for coding and debugging from AI directly in notebook, answers within seconds" }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-3">
                        <span className="text-green-500 mt-1">•</span>
                        <div className="leading-relaxed">
                           <span className="text-purple-400 block mb-1">{item.title}</span>
                           <span className="text-gray-300">{item.desc}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const NotebookCellsContainer = () => {
  const [codeOutputShown, setCodeOutputShown] = useState(false);

  return (
    <div className="space-y-6">
      <NotebookCell onOutputShown={() => setCodeOutputShown(true)} />
      {codeOutputShown && <MarkdownCell />}
    </div>
  );
};

const CollaborativeCodeCells = () => {
  const [cellsTyping, setCellsTyping] = useState([false, false, false]);
  const [cellsVisible, setCellsVisible] = useState([false, false, false]);
  const [showCells, setShowCells] = useState(false);
  const [typedText, setTypedText] = useState(['', '', '']);
  const [cursorPositions, setCursorPositions] = useState([0, 0, 0]);
  const [typingComplete, setTypingComplete] = useState([false, false, false]);
  const [cellComments, setCellComments] = useState([
    { show: false, comments: [], currentText: '' },
    { show: false, comments: [], currentText: '' },
    { show: false, comments: [], currentText: '' }
  ]);
  const [isCell1SQL, setIsCell1SQL] = useState(false);
  const [isCell2SQL, setIsCell2SQL] = useState(false);
  const [isCell3SQL, setIsCell3SQL] = useState(true); // Cell 3 starts as SQL
  const [cell1Running, setCell1Running] = useState(false);
  const [cell1Output, setCell1Output] = useState(false);
  const [cell1ShowViz, setCell1ShowViz] = useState(false);
  const [cell1ChartType, setCell1ChartType] = useState('bar');
  const [cell1XAxis, setCell1XAxis] = useState('name');
  const [cell1YAxis, setCell1YAxis] = useState('age');
  const [cell2Running, setCell2Running] = useState(false);
  const [cell2Output, setCell2Output] = useState(false);
  const [cell2ShowViz, setCell2ShowViz] = useState(false);
  const [cell2ChartType, setCell2ChartType] = useState('bar');
  const [cell2XAxis, setCell2XAxis] = useState('name');
  const [cell2YAxis, setCell2YAxis] = useState('salary');
  const [cell3Running, setCell3Running] = useState(false);
  const [cell3Output, setCell3Output] = useState(false);

  const pythonCodeText = `df = spark.createDataFrame(
    [(1, "Alice", 25), (2, "Bob", 30)],
    ["id", "name", "age"]
)
df.show()`;

  const sqlCodeText = `%%sql
CREATE TABLE people AS
SELECT 1 AS id, 'Alice' AS name, 25 AS age
UNION ALL
SELECT 2 AS id, 'Bob'   AS name, 30 AS age;

SELECT * FROM people;`;

  const cell2PythonText = `df = spark.createDataFrame([(1,"Alice",25),(2,"Bob",30)], ["id","name","age"])
df.filter(col("age") > 25).show()`;

  const cell2SQLText = `%%sql
SELECT * FROM people
WHERE age > 25;`;

  const cell3PythonText = `# Filter and aggregate data
filtered_df = df.filter(col("age") > 30)
result = filtered_df.groupBy("department").count()
result.show()`;

  const cell3SQLText = `CREATE MATERIALIZED LAKE VIEW IF NOT EXISTS silver.people_over_30 AS
SELECT
  id,
  name,
  age
FROM bronze.people
WHERE age > 30;`;

  const codeTexts = [
    pythonCodeText,
    cell2PythonText,
    cell3SQLText
  ];

  useEffect(() => {
    if (showCells) {
      // Show cells with stagger
      setTimeout(() => setCellsVisible([true, false, false]), 200);
      setTimeout(() => setCellsVisible([true, true, false]), 400);
      setTimeout(() => setCellsVisible([true, true, true]), 600);

      // Start typing animations
      setTimeout(() => setCellsTyping([true, false, false]), 800);
      setTimeout(() => setCellsTyping([true, true, false]), 1000);
      setTimeout(() => setCellsTyping([true, true, true]), 1200);

      // Typing effect for all cells
      const intervals = [null, null, null];
      
      [0, 1, 2].forEach((cellIndex) => {
        setTimeout(() => {
          let charIndex = 0;
          intervals[cellIndex] = setInterval(() => {
            if (charIndex <= codeTexts[cellIndex].length) {
              setTypedText(prev => {
                const newTexts = [...prev];
                newTexts[cellIndex] = codeTexts[cellIndex].substring(0, charIndex);
                return newTexts;
              });
              setCursorPositions(prev => {
                const newPos = [...prev];
                newPos[cellIndex] = charIndex;
                return newPos;
              });
              charIndex++;
            } else {
              clearInterval(intervals[cellIndex]);
              setCellsTyping(prev => {
                const newTyping = [...prev];
                newTyping[cellIndex] = false;
                return newTyping;
              });
              // Mark typing as complete for this cell
              setTypingComplete(prev => {
                const newComplete = [...prev];
                newComplete[cellIndex] = true;
                return newComplete;
              });
            }
          }, 30 + Math.random() * 20); // Variable typing speed
        }, 800 + cellIndex * 200);
      });

      return () => intervals.forEach(interval => interval && clearInterval(interval));
    }
  }, [showCells]);

  const users = [
    { name: 'Alex', color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', cursorColor: 'bg-blue-400' },
    { name: 'Jordan', color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', cursorColor: 'bg-green-400' },
    { name: 'Sam', color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', cursorColor: 'bg-purple-400' }
  ];

  const highlightPythonCode = (code) => {
    if (!code) return <span></span>;
    
    const tokens = [];
    let current = '';
    let inString = false;
    
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      
      if (char === '"') {
        if (inString) {
          current += char;
          tokens.push({ type: 'string', value: current });
          current = '';
          inString = false;
        } else {
          if (current) tokens.push({ type: 'text', value: current });
          current = char;
          inString = true;
        }
      } else if (inString) {
        current += char;
      } else if (/[a-zA-Z_]/.test(char)) {
        current += char;
      } else if (/\d/.test(char)) {
        if (current && /[a-zA-Z_]/.test(current[0])) {
          current += char;
        } else {
          if (current) tokens.push({ type: 'text', value: current });
          current = char;
          while (i + 1 < code.length && /\d/.test(code[i + 1])) {
            current += code[++i];
          }
          tokens.push({ type: 'number', value: current });
          current = '';
        }
      } else {
        if (current) {
          const keywords = ['createDataFrame', 'show', 'filter', 'col'];
          const vars = ['spark', 'df'];
          if (keywords.includes(current)) {
            tokens.push({ type: 'function', value: current });
          } else if (vars.includes(current)) {
            tokens.push({ type: 'variable', value: current });
          } else {
            tokens.push({ type: 'text', value: current });
          }
          current = '';
        }
        tokens.push({ type: 'operator', value: char });
      }
    }
    
    if (current) {
      if (inString) {
        tokens.push({ type: 'string', value: current });
      } else {
        tokens.push({ type: 'text', value: current });
      }
    }
    
    return (
      <>
        {tokens.map((token, i) => {
          switch (token.type) {
            case 'string':
              return <span key={i} className="text-orange-400">{token.value}</span>;
            case 'number':
              return <span key={i} className="text-green-400">{token.value}</span>;
            case 'function':
              return <span key={i} className="text-yellow-400">{token.value}</span>;
            case 'variable':
              return <span key={i} className="text-gray-300">{token.value}</span>;
            case 'operator':
              return <span key={i} className="text-gray-500">{token.value}</span>;
            default:
              return <span key={i} className="text-gray-300">{token.value}</span>;
          }
        })}
      </>
    );
  };

  const highlightSQLCode = (code) => {
    if (!code) return <span></span>;
    
    const keywords = ['CREATE', 'MATERIALIZED', 'LAKE', 'VIEW', 'IF', 'NOT', 'EXISTS', 'AS', 'SELECT', 'FROM', 'WHERE', 'TABLE', 'UNION', 'ALL'];
    const tables = ['silver', 'bronze', 'people_over_30', 'people'];
    const columns = ['id', 'name', 'age'];
    
    const tokens = [];
    let current = '';
    
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      
      if (/[a-zA-Z_0-9]/.test(char)) {
        current += char;
      } else {
        if (current) {
          if (keywords.includes(current.toUpperCase())) {
            tokens.push({ type: 'keyword', value: current });
          } else if (tables.includes(current)) {
            tokens.push({ type: 'table', value: current });
          } else if (columns.includes(current)) {
            tokens.push({ type: 'column', value: current });
          } else if (/^\d+$/.test(current)) {
            tokens.push({ type: 'number', value: current });
          } else {
            tokens.push({ type: 'text', value: current });
          }
          current = '';
        }
        tokens.push({ type: 'operator', value: char });
      }
    }
    
    if (current) {
      if (keywords.includes(current.toUpperCase())) {
        tokens.push({ type: 'keyword', value: current });
      } else if (/^\d+$/.test(current)) {
        tokens.push({ type: 'number', value: current });
      } else {
        tokens.push({ type: 'text', value: current });
      }
    }
    
    return (
      <>
        {tokens.map((token, i) => {
          switch (token.type) {
            case 'keyword':
              return <span key={i} className="text-purple-400">{token.value}</span>;
            case 'table':
              return <span key={i} className="text-cyan-400">{token.value}</span>;
            case 'column':
              return <span key={i} className="text-gray-300">{token.value}</span>;
            case 'number':
              return <span key={i} className="text-green-400">{token.value}</span>;
            case 'operator':
              return <span key={i} className="text-gray-500">{token.value}</span>;
            default:
              return <span key={i} className="text-gray-300">{token.value}</span>;
          }
        })}
      </>
    );
  };

  const resetAndReplay = () => {
    // Reset all states
    setShowCells(false);
    setCellsTyping([false, false, false]);
    setCellsVisible([false, false, false]);
    setTypedText(['', '', '']);
    setCursorPositions([0, 0, 0]);
    setTypingComplete([false, false, false]);
    
    // Restart after a brief delay
    setTimeout(() => {
      setShowCells(true);
    }, 100);
  };

  return (
    <div className="space-y-4 mt-8">
      <button
        onClick={resetAndReplay}
        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg transition-all text-sm text-white font-medium shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {showCells ? 'Replay collaboration' : 'Watch collaboration in action'} →
      </button>

      {showCells && (
        <>
          {/* Cell 1 - Alex */}
          <div className={`bg-[#1e1e1e] border ${users[0].borderColor} rounded-lg overflow-hidden transition-all duration-500 ${cellsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsCell1SQL(!isCell1SQL);
                    setTypedText(prev => {
                      const newTexts = [...prev];
                      newTexts[0] = isCell1SQL ? pythonCodeText : sqlCodeText;
                      return newTexts;
                    });
                  }}
                  className="text-xs font-mono text-gray-400 hover:text-white hover:bg-gray-700/50 px-2 py-1 rounded transition-all cursor-pointer"
                  title={`Switch to ${isCell1SQL ? 'Python' : 'SQL'}`}
                >
                  {isCell1SQL ? 'SQL' : 'Python'}
                </button>
                {cellsTyping[0] && (
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${users[0].bgColor.replace('/10', '')} animate-pulse`}></div>
                    <span className={`text-xs ${users[0].color}`}>{users[0].name} is typing...</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {typingComplete[0] && (
                  <>
                    {!cell1Output && (
                      <span className="text-xs text-cyan-400 animate-pulse">Click me →</span>
                    )}
                    <button
                      onClick={() => {
                        setCell1Running(true);
                        setCell1Output(false);
                        setTimeout(() => {
                          setCell1Running(false);
                          setCell1Output(true);
                        }, 1500);
                      }}
                      disabled={cell1Running}
                      className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                      title="Run cell"
                    >
                      {cell1Running ? (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Play size={14} className="text-cyan-400 group-hover:text-cyan-300" />
                      )}
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    const newComments = [...cellComments];
                    newComments[0] = { ...newComments[0], show: !newComments[0]?.show };
                    setCellComments(newComments);
                  }}
                  className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                  title="Add comment"
                >
                  <MessageCircle size={14} className="text-gray-400 group-hover:text-cyan-400" />
                </button>
                <div className={`w-6 h-6 rounded-full ${users[0].bgColor} flex items-center justify-center`}>
                  <span className={`text-xs font-semibold ${users[0].color}`}>A</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              </div>
            </div>
            <div className={`flex ${cellComments[0]?.show ? 'gap-4' : ''}`}>
              {/* Code Section */}
              <div className={`p-4 ${cellComments[0]?.show ? 'flex-1' : 'w-full'}`}>
                <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
                  <code>
                    {typingComplete[0] ? (
                      isCell1SQL ? highlightSQLCode(typedText[0]) : highlightPythonCode(typedText[0])
                    ) : (
                      <span className="text-gray-300">{typedText[0]}</span>
                    )}
                    {cellsTyping[0] && (
                      <span className={`inline-block w-2 h-4 ${users[0].cursorColor} animate-pulse ml-0.5`}></span>
                    )}
                  </code>
                </pre>
              </div>

              {/* Comment Section - Right Side */}
              {cellComments[0]?.show && (
                <div className="w-80 border-l border-white/10 bg-[#0a0a0c] p-4 animate-fadeIn flex flex-col max-h-[600px]">
                  <div className="flex-1 overflow-y-auto space-y-3 mb-3">
                    {/* Display all posted comments */}
                    {cellComments[0]?.comments?.map((comment, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-[#1e1e1e] border border-white/10 rounded p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-cyan-400 text-xs font-semibold">You</span>
                              <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-300 text-sm break-words">{comment.text}</p>
                          </div>
                          <button
                            onClick={() => {
                              const newComments = [...cellComments];
                              newComments[0].comments = newComments[0].comments.filter((_, i) => i !== idx);
                              setCellComments(newComments);
                            }}
                            className="text-xs text-gray-500 hover:text-gray-300 transition-colors mt-1"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Comment input form */}
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="space-y-1">
                          <textarea
                            placeholder="Add a comment here..."
                            maxLength={100}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-sm rounded border border-white/10 focus:outline-none focus:border-cyan-500/50 p-3 min-h-[80px] resize-none"
                            onChange={(e) => {
                              const newComments = [...cellComments];
                              newComments[0] = { ...newComments[0], currentText: e.target.value };
                              setCellComments(newComments);
                            }}
                            value={cellComments[0]?.currentText || ''}
                          />
                          <div className="text-xs text-gray-500 text-right">
                            {(cellComments[0]?.currentText || '').length}/100
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              if (cellComments[0]?.currentText) {
                                const newComments = [...cellComments];
                                const timestamp = new Date().toLocaleTimeString('en-US', { 
                                  hour: 'numeric', 
                                  minute: '2-digit',
                                  hour12: true 
                                });
                                newComments[0].comments = [
                                  ...newComments[0].comments,
                                  { text: newComments[0].currentText, timestamp: timestamp }
                                ];
                                newComments[0].currentText = '';
                                setCellComments(newComments);
                              }
                            }}
                            disabled={!cellComments[0]?.currentText}
                            className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white text-xs rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Post
                          </button>
                          <button
                            onClick={() => {
                              const newComments = [...cellComments];
                              newComments[0] = { show: false, comments: newComments[0].comments, currentText: '' };
                              setCellComments(newComments);
                            }}
                            className="px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2d2d2d] text-gray-400 text-xs rounded transition-colors"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Output Section for Cell 1 */}
            {cell1Output && (
              <div className="border-t border-white/10 bg-[#0a0a0c] p-4 animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-mono">Output</span>
                  <span className="text-xs text-gray-500">• Execution time: 0.21s</span>
                </div>
                
                {/* Simple Data Table */}
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg overflow-hidden shadow-2xl border border-cyan-500/20">
                  {/* Table Header */}
                  <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-b border-cyan-500/30">
                    <div className="grid grid-cols-3 gap-4 px-4 py-3">
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        id
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        name
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        age
                      </div>
                    </div>
                  </div>
                  
                  {/* Table Body */}
                  <div className="divide-y divide-white/5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-3 gap-4 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '0ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">1</span>
                        <span className="group-hover:text-white transition-colors">1</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Alice</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">25</div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 gap-4 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '50ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">2</span>
                        <span className="group-hover:text-white transition-colors">2</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Bob</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">30</div>
                    </div>
                  </div>
                  
                  {/* Table Footer Stats */}
                  <div className="bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border-t border-cyan-500/20 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">
                        <span className="text-cyan-400 font-semibold">2</span> rows
                      </span>
                      <span className="text-xs text-gray-400">
                        <span className="text-purple-400 font-semibold">3</span> columns
                      </span>
                    </div>
                    <button
                      onClick={() => setCell1ShowViz(!cell1ShowViz)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs rounded transition-all shadow-lg"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>{cell1ShowViz ? 'Hide Chart' : 'Visualize'}</span>
                    </button>
                  </div>
                </div>

                {/* Visualization Section */}
                {cell1ShowViz && (
                  <div className="mt-4 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg overflow-hidden shadow-2xl border border-purple-500/20 animate-fadeIn">
                    {/* Control Panel */}
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                          Chart Configuration
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {/* Chart Type */}
                        <div>
                          <label className="text-xs text-gray-400 mb-2 block">Chart Type</label>
                          <select
                            value={cell1ChartType}
                            onChange={(e) => setCell1ChartType(e.target.value)}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-xs rounded border border-white/10 focus:outline-none focus:border-purple-500/50 p-2"
                          >
                            <option value="bar">Bar Chart</option>
                            <option value="line">Line Chart</option>
                            <option value="pie">Pie Chart</option>
                          </select>
                        </div>
                        
                        {/* X-Axis */}
                        <div>
                          <label className="text-xs text-gray-400 mb-2 block">X-Axis</label>
                          <select
                            value={cell1XAxis}
                            onChange={(e) => setCell1XAxis(e.target.value)}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-xs rounded border border-white/10 focus:outline-none focus:border-purple-500/50 p-2"
                          >
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                            <option value="age">Age</option>
                          </select>
                        </div>
                        
                        {/* Y-Axis */}
                        <div>
                          <label className="text-xs text-gray-400 mb-2 block">Y-Axis</label>
                          <select
                            value={cell1YAxis}
                            onChange={(e) => setCell1YAxis(e.target.value)}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-xs rounded border border-white/10 focus:outline-none focus:border-purple-500/50 p-2"
                          >
                            <option value="id">ID</option>
                            <option value="age">Age</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Chart Display */}
                    <div className="p-6">
                      {cell1ChartType === 'bar' && (
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400 mb-4 flex items-center justify-between">
                            <span>Bar Chart: {cell1XAxis} vs {cell1YAxis}</span>
                            <span className="text-xs text-purple-400">Interactive</span>
                          </div>
                          <div className="flex items-end gap-12 h-64 justify-center px-8">
                            {/* Bar 1 - Alice */}
                            <div className="flex flex-col items-center gap-3 group">
                              <div className="relative h-48 flex items-end">
                                <div 
                                  className="w-24 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-lg transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-cyan-500/50"
                                  style={{ height: cell1YAxis === 'age' ? '125px' : '96px' }}
                                >
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {cell1YAxis === 'age' ? '25' : '1'}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-300 font-mono">Alice</span>
                            </div>
                            {/* Bar 2 - Bob */}
                            <div className="flex flex-col items-center gap-3 group">
                              <div className="relative h-48 flex items-end">
                                <div 
                                  className="w-24 bg-gradient-to-t from-pink-500 to-orange-500 rounded-t-lg transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-pink-500/50"
                                  style={{ height: cell1YAxis === 'age' ? '150px' : '128px' }}
                                >
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {cell1YAxis === 'age' ? '30' : '2'}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-300 font-mono">Bob</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {cell1ChartType === 'line' && (
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400 mb-4 flex items-center justify-between">
                            <span>Line Chart: {cell1XAxis} vs {cell1YAxis}</span>
                            <span className="text-xs text-purple-400">Trend View</span>
                          </div>
                          <div className="relative h-48">
                            <svg className="w-full h-full" viewBox="0 0 300 150">
                              {/* Grid lines */}
                              <line x1="30" y1="0" x2="30" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                              <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                              
                              {/* Line */}
                              <path
                                d={cell1YAxis === 'age' ? "M 60 95 L 240 80" : "M 60 95 L 240 60"}
                                stroke="url(#lineGradient1)"
                                strokeWidth="3"
                                fill="none"
                                className="animate-fadeIn"
                              />
                              
                              {/* Points */}
                              <circle cx="60" cy={cell1YAxis === 'age' ? '95' : '95'} r="5" fill="#06b6d4" className="animate-pulse"/>
                              <circle cx="240" cy={cell1YAxis === 'age' ? '80' : '60'} r="5" fill="#ec4899" className="animate-pulse"/>
                              
                              {/* Labels */}
                              <text x="60" y="140" fill="#9ca3af" fontSize="10" textAnchor="middle">Alice</text>
                              <text x="240" y="140" fill="#9ca3af" fontSize="10" textAnchor="middle">Bob</text>
                              
                              <defs>
                                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#06b6d4" />
                                  <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      )}

                      {cell1ChartType === 'pie' && (
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400 mb-4 flex items-center justify-between">
                            <span>Pie Chart: Distribution by {cell1XAxis}</span>
                            <span className="text-xs text-purple-400">Percentage View</span>
                          </div>
                          <div className="flex items-center justify-center gap-8">
                            <div className="relative w-48 h-48">
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                {/* Alice - 50% */}
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="url(#pieGradient1)"
                                  strokeWidth="20"
                                  strokeDasharray="126 126"
                                  className="transition-all duration-500 hover:stroke-width-22 cursor-pointer"
                                />
                                {/* Bob - 50% */}
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="url(#pieGradient2)"
                                  strokeWidth="20"
                                  strokeDasharray="126 126"
                                  strokeDashoffset="-126"
                                  className="transition-all duration-500 hover:stroke-width-22 cursor-pointer"
                                />
                                <defs>
                                  <linearGradient id="pieGradient1">
                                    <stop offset="0%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#8b5cf6" />
                                  </linearGradient>
                                  <linearGradient id="pieGradient2">
                                    <stop offset="0%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#f97316" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                                <span className="text-sm text-gray-300">Alice</span>
                                <span className="text-xs text-gray-500">50%</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded bg-gradient-to-r from-pink-500 to-orange-500"></div>
                                <span className="text-sm text-gray-300">Bob</span>
                                <span className="text-xs text-gray-500">50%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cell 2 - Jordan */}
          <div className={`bg-[#1e1e1e] border ${users[1].borderColor} rounded-lg overflow-hidden transition-all duration-500 ${cellsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsCell2SQL(!isCell2SQL);
                    setTypedText(prev => {
                      const newTexts = [...prev];
                      newTexts[1] = isCell2SQL ? cell2PythonText : cell2SQLText;
                      return newTexts;
                    });
                  }}
                  className="text-xs font-mono text-gray-400 hover:text-white hover:bg-gray-700/50 px-2 py-1 rounded transition-all cursor-pointer"
                  title={`Switch to ${isCell2SQL ? 'Python' : 'SQL'}`}
                >
                  {isCell2SQL ? 'SQL' : 'Python'}
                </button>
                {cellsTyping[1] && (
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${users[1].bgColor.replace('/10', '')} animate-pulse`}></div>
                    <span className={`text-xs ${users[1].color}`}>{users[1].name} is typing...</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {typingComplete[1] && (
                  <>
                    {!cell2Output && (
                      <span className="text-xs text-cyan-400 animate-pulse">Click me →</span>
                    )}
                    <button
                      onClick={() => {
                        setCell2Running(true);
                        setCell2Output(false);
                        setTimeout(() => {
                          setCell2Running(false);
                          setCell2Output(true);
                        }, 1500);
                      }}
                      disabled={cell2Running}
                      className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                      title="Run cell"
                    >
                      {cell2Running ? (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Play size={14} className="text-cyan-400 group-hover:text-cyan-300" />
                      )}
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    const newComments = [...cellComments];
                    newComments[1] = { ...newComments[1], show: !newComments[1]?.show };
                    setCellComments(newComments);
                  }}
                  className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                  title="Add comment"
                >
                  <MessageCircle size={14} className="text-gray-400 group-hover:text-cyan-400" />
                </button>
                <div className={`w-6 h-6 rounded-full ${users[1].bgColor} flex items-center justify-center`}>
                  <span className={`text-xs font-semibold ${users[1].color}`}>J</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              </div>
            </div>
            <div className={`${cellComments[1]?.show ? 'flex' : 'block'}`}>
              <div className={`p-4 ${cellComments[1]?.show ? 'flex-1' : ''}`}>
                <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
                  <code>
                    {typingComplete[1] ? (
                      isCell2SQL ? highlightSQLCode(typedText[1]) : highlightPythonCode(typedText[1])
                    ) : (
                      <span className="text-gray-300">{typedText[1]}</span>
                    )}
                    {cellsTyping[1] && (
                      <span className={`inline-block w-2 h-4 ${users[1].cursorColor} animate-pulse ml-0.5`}></span>
                    )}
                  </code>
                </pre>
              </div>

              {/* Comment Section - Right Side */}
              {cellComments[1]?.show && (
                <div className="w-80 border-l border-white/10 bg-[#0a0a0c] p-4 animate-fadeIn flex flex-col max-h-[600px]">
                  <div className="flex-1 overflow-y-auto space-y-3 mb-3">
                    {cellComments[1]?.comments?.map((comment, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-[#1e1e1e] border border-white/10 rounded p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-cyan-400 text-xs font-semibold">You</span>
                              <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-300 text-sm break-words">{comment.text}</p>
                          </div>
                          <button
                            onClick={() => {
                              const newComments = [...cellComments];
                              newComments[1].comments = newComments[1].comments.filter((_, i) => i !== idx);
                              setCellComments(newComments);
                            }}
                            className="text-xs text-gray-500 hover:text-gray-300 transition-colors mt-1"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="space-y-1">
                          <textarea
                            placeholder="Add a comment here..."
                            maxLength={100}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-sm rounded border border-white/10 focus:outline-none focus:border-cyan-500/50 p-3 min-h-[80px] resize-none"
                            onChange={(e) => {
                              const newComments = [...cellComments];
                              newComments[1] = { ...newComments[1], currentText: e.target.value };
                              setCellComments(newComments);
                            }}
                            value={cellComments[1]?.currentText || ''}
                          />
                          <div className="text-xs text-gray-500 text-right">
                            {(cellComments[1]?.currentText || '').length}/100
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              if (cellComments[1]?.currentText) {
                                const newComments = [...cellComments];
                                const timestamp = new Date().toLocaleTimeString('en-US', { 
                                  hour: 'numeric', 
                                  minute: '2-digit',
                                  hour12: true 
                                });
                                newComments[1].comments = [
                                  ...newComments[1].comments,
                                  { text: newComments[1].currentText, timestamp: timestamp }
                                ];
                                newComments[1].currentText = '';
                                setCellComments(newComments);
                              }
                            }}
                            disabled={!cellComments[1]?.currentText}
                            className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white text-xs rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Post
                          </button>
                          <button
                            onClick={() => {
                              const newComments = [...cellComments];
                              newComments[1] = { show: false, comments: newComments[1].comments, currentText: '' };
                              setCellComments(newComments);
                            }}
                            className="px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2d2d2d] text-gray-400 text-xs rounded transition-colors"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Output Section */}
            {cell2Output && (
              <div className="border-t border-white/10 bg-[#0a0a0c] p-4 animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-mono">Output</span>
                  <span className="text-xs text-gray-500">• Execution time: 0.34s</span>
                </div>
                
                {/* Data Table */}
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg overflow-hidden shadow-2xl border border-cyan-500/20">
                  {/* Table Header */}
                  <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-b border-cyan-500/30">
                    <div className="grid grid-cols-5 gap-3 px-4 py-3">
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        id
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        name
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        age
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        department
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-4 bg-cyan-500 rounded"></div>
                        salary
                      </div>
                    </div>
                  </div>
                  
                  {/* Table Body */}
                  <div className="divide-y divide-white/5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '0ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">2</span>
                        <span className="group-hover:text-white transition-colors">2</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Bob</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">30</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Engineering</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$95,000</div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '50ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">4</span>
                        <span className="group-hover:text-white transition-colors">4</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Diana</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">28</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Marketing</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$78,000</div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '100ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">5</span>
                        <span className="group-hover:text-white transition-colors">5</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Emma</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">35</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Design</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$88,000</div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '150ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">7</span>
                        <span className="group-hover:text-white transition-colors">7</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">George</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">42</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Engineering</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$125,000</div>
                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '200ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">9</span>
                        <span className="group-hover:text-white transition-colors">9</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Ivy</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">31</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Sales</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$82,000</div>
                    </div>

                    {/* Row 6 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '250ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">11</span>
                        <span className="group-hover:text-white transition-colors">11</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Kevin</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">27</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Marketing</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$71,000</div>
                    </div>

                    {/* Row 7 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '300ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">13</span>
                        <span className="group-hover:text-white transition-colors">13</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Maria</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">38</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Design</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$92,000</div>
                    </div>

                    {/* Row 8 */}
                    <div className="grid grid-cols-5 gap-3 px-4 py-3 hover:bg-cyan-500/5 transition-all duration-300 group animate-slideInUp" style={{animationDelay: '350ms'}}>
                      <div className="text-sm font-mono text-gray-300 flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-xs text-cyan-400 group-hover:scale-110 transition-transform">15</span>
                        <span className="group-hover:text-white transition-colors">15</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors flex items-center">
                        <span className="px-2 py-1 bg-purple-500/10 rounded text-purple-300 group-hover:bg-purple-500/20 transition-colors">Oliver</span>
                      </div>
                      <div className="text-sm font-mono flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors">45</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">✓</span>
                      </div>
                      <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        <span className="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Engineering</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">$135,000</div>
                    </div>
                  </div>
                  
                  {/* Table Footer Stats */}
                  <div className="bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border-t border-cyan-500/20 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">
                        <span className="text-cyan-400 font-semibold">8</span> rows
                      </span>
                      <span className="text-xs text-gray-400">
                        <span className="text-purple-400 font-semibold">5</span> columns
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Filtered from 15 total rows</span>
                      <button
                        onClick={() => setCell2ShowViz(!cell2ShowViz)}
                        className="ml-4 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs rounded transition-all shadow-lg"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>{cell2ShowViz ? 'Hide Chart' : 'Visualize'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Visualization Section for Cell 2 */}
                {cell2ShowViz && (
                  <div className="mt-4 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg overflow-hidden shadow-2xl border border-purple-500/20 animate-fadeIn">
                    {/* Control Panel */}
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                          Chart Configuration
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {/* Chart Type */}
                        <div>
                          <label className="text-xs text-gray-400 mb-2 block">Chart Type</label>
                          <select
                            value={cell2ChartType}
                            onChange={(e) => setCell2ChartType(e.target.value)}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-xs rounded border border-white/10 focus:outline-none focus:border-purple-500/50 p-2"
                          >
                            <option value="bar">Bar Chart</option>
                            <option value="scatter">Scatter Plot</option>
                            <option value="heatmap">Heatmap</option>
                          </select>
                        </div>
                        
                        {/* X-Axis */}
                        <div>
                          <label className="text-xs text-gray-400 mb-2 block">X-Axis</label>
                          <select
                            value={cell2XAxis}
                            onChange={(e) => setCell2XAxis(e.target.value)}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-xs rounded border border-white/10 focus:outline-none focus:border-purple-500/50 p-2"
                          >
                            <option value="name">Name</option>
                            <option value="department">Department</option>
                            <option value="age">Age</option>
                          </select>
                        </div>
                        
                        {/* Y-Axis */}
                        <div>
                          <label className="text-xs text-gray-400 mb-2 block">Y-Axis</label>
                          <select
                            value={cell2YAxis}
                            onChange={(e) => setCell2YAxis(e.target.value)}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-xs rounded border border-white/10 focus:outline-none focus:border-purple-500/50 p-2"
                          >
                            <option value="salary">Salary</option>
                            <option value="age">Age</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Chart Display */}
                    <div className="p-6">
                      {cell2ChartType === 'bar' && (
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400 mb-4 flex items-center justify-between">
                            <span>Bar Chart: {cell2XAxis} vs {cell2YAxis}</span>
                            <span className="text-xs text-purple-400">8 employees analyzed</span>
                          </div>
                          <div className="flex items-end gap-3 justify-center overflow-x-auto pb-2">
                            {[
                              { name: 'Bob', salary: 95000, age: 30, dept: 'Engineering' },
                              { name: 'Diana', salary: 78000, age: 28, dept: 'Marketing' },
                              { name: 'Emma', salary: 88000, age: 35, dept: 'Design' },
                              { name: 'George', salary: 125000, age: 42, dept: 'Engineering' },
                              { name: 'Ivy', salary: 82000, age: 31, dept: 'Sales' },
                              { name: 'Kevin', salary: 71000, age: 27, dept: 'Marketing' },
                              { name: 'Maria', salary: 92000, age: 38, dept: 'Design' },
                              { name: 'Oliver', salary: 135000, age: 45, dept: 'Engineering' }
                            ].map((person, idx) => {
                              const value = cell2YAxis === 'salary' ? person.salary : person.age;
                              const maxValue = cell2YAxis === 'salary' ? 135000 : 45;
                              const heightPx = cell2YAxis === 'salary' ? (value / maxValue) * 200 : (value / maxValue) * 180;
                              const colors = ['from-cyan-500 to-blue-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-yellow-500 to-orange-500', 'from-indigo-500 to-purple-500', 'from-pink-500 to-rose-500', 'from-teal-500 to-cyan-500'];
                              
                              return (
                                <div key={idx} className="flex flex-col items-center gap-2 group">
                                  <div className="relative h-52 flex items-end">
                                    <div 
                                      className={`w-16 bg-gradient-to-t ${colors[idx]} rounded-t-lg transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg`}
                                      style={{ height: `${heightPx}px` }}
                                    >
                                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        {cell2YAxis === 'salary' ? `$${(value/1000).toFixed(0)}k` : value}
                                      </div>
                                    </div>
                                  </div>
                                  <span className="text-xs text-gray-300 font-mono w-16 text-center truncate">{person.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {cell2ChartType === 'scatter' && (
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400 mb-4 flex items-center justify-between">
                            <span>Scatter Plot: Age vs {cell2YAxis}</span>
                            <span className="text-xs text-purple-400">Correlation View</span>
                          </div>
                          <div className="relative h-64 bg-[#0a0a0c] rounded-lg p-4">
                            <svg className="w-full h-full" viewBox="0 0 400 200">
                              {/* Grid */}
                              {[0, 50, 100, 150, 200].map((y) => (
                                <line key={y} x1="40" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                              ))}
                              {[40, 120, 200, 280, 360].map((x) => (
                                <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                              ))}
                              
                              {/* Data points */}
                              {[
                                { x: 80, y: 140, color: '#06b6d4' },
                                { x: 100, y: 160, color: '#8b5cf6' },
                                { x: 140, y: 145, color: '#10b981' },
                                { x: 200, y: 90, color: '#f97316' },
                                { x: 120, y: 155, color: '#eab308' },
                                { x: 95, y: 165, color: '#6366f1' },
                                { x: 160, y: 130, color: '#ec4899' },
                                { x: 220, y: 75, color: '#14b8a6' }
                              ].map((point, idx) => (
                                <circle
                                  key={idx}
                                  cx={point.x}
                                  cy={point.y}
                                  r="6"
                                  fill={point.color}
                                  className="animate-pulse cursor-pointer hover:r-8 transition-all"
                                  style={{ animationDelay: `${idx * 100}ms` }}
                                />
                              ))}
                              
                              {/* Axes labels */}
                              <text x="200" y="195" fill="#9ca3af" fontSize="10" textAnchor="middle">Age →</text>
                              <text x="10" y="100" fill="#9ca3af" fontSize="10" transform="rotate(-90 10 100)">{cell2YAxis} →</text>
                            </svg>
                          </div>
                        </div>
                      )}

                      {cell2ChartType === 'heatmap' && (
                        <div className="space-y-4">
                          <div className="text-sm text-gray-400 mb-4 flex items-center justify-between">
                            <span>Heatmap: Department Distribution</span>
                            <span className="text-xs text-purple-400">Intensity View</span>
                          </div>
                          <div className="grid grid-cols-4 gap-3">
                            {[
                              { dept: 'Engineering', count: 3, intensity: 100 },
                              { dept: 'Marketing', count: 2, intensity: 67 },
                              { dept: 'Design', count: 2, intensity: 67 },
                              { dept: 'Sales', count: 1, intensity: 33 }
                            ].map((item, idx) => (
                              <div key={idx} className="relative group cursor-pointer">
                                <div 
                                  className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-105"
                                  style={{ opacity: item.intensity / 100 }}
                                >
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-white">{item.count}</div>
                                    <div className="text-xs text-white/80">employees</div>
                                  </div>
                                </div>
                                <div className="mt-2 text-xs text-center text-gray-300">{item.dept}</div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  {item.intensity}% density
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cell 3 - Sam */}
          <div className={`bg-[#1e1e1e] border ${users[2].borderColor} rounded-lg overflow-hidden transition-all duration-500 ${cellsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsCell3SQL(!isCell3SQL);
                    setTypedText(prev => {
                      const newTexts = [...prev];
                      newTexts[2] = isCell3SQL ? cell3PythonText : cell3SQLText;
                      return newTexts;
                    });
                  }}
                  className="text-xs font-mono text-gray-400 hover:text-white hover:bg-gray-700/50 px-2 py-1 rounded transition-all cursor-pointer"
                  title={`Switch to ${isCell3SQL ? 'Python' : 'SQL'}`}
                >
                  {isCell3SQL ? 'SQL' : 'Python'}
                </button>
                {cellsTyping[2] && (
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${users[2].bgColor.replace('/10', '')} animate-pulse`}></div>
                    <span className={`text-xs ${users[2].color}`}>{users[2].name} is typing...</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {typingComplete[2] && (
                  <>
                    {!cell3Output && (
                      <span className="text-xs text-cyan-400 animate-pulse">Click me →</span>
                    )}
                    <button
                      onClick={() => {
                        setCell3Running(true);
                        setCell3Output(false);
                        setTimeout(() => {
                          setCell3Running(false);
                          setCell3Output(true);
                        }, 1500);
                      }}
                      disabled={cell3Running}
                      className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                      title="Run cell"
                    >
                      {cell3Running ? (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Play size={14} className="text-cyan-400 group-hover:text-cyan-300" />
                      )}
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    const newComments = [...cellComments];
                    newComments[2] = { ...newComments[2], show: !newComments[2]?.show };
                    setCellComments(newComments);
                  }}
                  className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                  title="Add comment"
                >
                  <MessageCircle size={14} className="text-gray-400 group-hover:text-cyan-400" />
                </button>
                <div className={`w-6 h-6 rounded-full ${users[2].bgColor} flex items-center justify-center`}>
                  <span className={`text-xs font-semibold ${users[2].color}`}>S</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              </div>
            </div>
            <div className={`${cellComments[2]?.show ? 'flex' : 'block'}`}>
              <div className={`p-4 ${cellComments[2]?.show ? 'flex-1' : ''}`}>
                <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap">
                  <code>
                    {typingComplete[2] ? (
                      isCell3SQL ? highlightSQLCode(typedText[2]) : highlightPythonCode(typedText[2])
                    ) : (
                      <span className="text-gray-300">{typedText[2]}</span>
                    )}
                    {cellsTyping[2] && (
                      <span className={`inline-block w-2 h-4 ${users[2].cursorColor} animate-pulse ml-0.5`}></span>
                    )}
                  </code>
                </pre>
              </div>

              {/* Comment Section - Right Side */}
              {cellComments[2]?.show && (
                <div className="w-80 border-l border-white/10 bg-[#0a0a0c] p-4 animate-fadeIn flex flex-col max-h-[600px]">
                  <div className="flex-1 overflow-y-auto space-y-3 mb-3">
                    {cellComments[2]?.comments?.map((comment, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-[#1e1e1e] border border-white/10 rounded p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-cyan-400 text-xs font-semibold">You</span>
                              <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-300 text-sm break-words">{comment.text}</p>
                          </div>
                          <button
                            onClick={() => {
                              const newComments = [...cellComments];
                              newComments[2].comments = newComments[2].comments.filter((_, i) => i !== idx);
                              setCellComments(newComments);
                            }}
                            className="text-xs text-gray-500 hover:text-gray-300 transition-colors mt-1"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="space-y-1">
                          <textarea
                            placeholder="Add a comment here..."
                            maxLength={100}
                            className="w-full bg-[#1e1e1e] text-gray-300 text-sm rounded border border-white/10 focus:outline-none focus:border-cyan-500/50 p-3 min-h-[80px] resize-none"
                            onChange={(e) => {
                              const newComments = [...cellComments];
                              newComments[2] = { ...newComments[2], currentText: e.target.value };
                              setCellComments(newComments);
                            }}
                            value={cellComments[2]?.currentText || ''}
                          />
                          <div className="text-xs text-gray-500 text-right">
                            {(cellComments[2]?.currentText || '').length}/100
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              if (cellComments[2]?.currentText) {
                                const newComments = [...cellComments];
                                const timestamp = new Date().toLocaleTimeString('en-US', { 
                                  hour: 'numeric', 
                                  minute: '2-digit',
                                  hour12: true 
                                });
                                newComments[2].comments = [
                                  ...newComments[2].comments,
                                  { text: newComments[2].currentText, timestamp: timestamp }
                                ];
                                newComments[2].currentText = '';
                                setCellComments(newComments);
                              }
                            }}
                            disabled={!cellComments[2]?.currentText}
                            className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-white text-xs rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Post
                          </button>
                          <button
                            onClick={() => {
                              const newComments = [...cellComments];
                              newComments[2] = { show: false, comments: newComments[2].comments, currentText: '' };
                              setCellComments(newComments);
                            }}
                            className="px-3 py-1.5 bg-[#1e1e1e] hover:bg-[#2d2d2d] text-gray-400 text-xs rounded transition-colors"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Output Section for Cell 3 */}
            {cell3Output && (
              <div className="border-t border-white/10 bg-[#0a0a0c] p-6 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-mono">Output</span>
                    <span className="text-xs text-gray-500">• Execution time: 0.52s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Data Lineage View</span>
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Data Lineage Graph */}
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg overflow-hidden shadow-2xl border border-cyan-500/20 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                      </svg>
                      Lakehouse Lineage
                    </h3>
                    <div className="text-xs text-gray-400">7 views • 3 layers</div>
                  </div>

                  <div className="relative">
                    {/* SVG Lineage Visualization */}
                    <svg className="w-full h-96" viewBox="0 0 800 400">
                      <defs>
                        {/* Gradient definitions */}
                        <linearGradient id="lineageGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                        <linearGradient id="lineageGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        
                        {/* Arrow marker */}
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" opacity="0.5" />
                        </marker>
                      </defs>

                      {/* Connection Lines - Bronze to Silver */}
                      <path d="M 130 100 L 330 150" stroke="url(#lineageGradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" className="animate-fadeIn" />
                      <path d="M 130 180 L 330 150" stroke="url(#lineageGradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" className="animate-fadeIn" style={{animationDelay: '100ms'}} />
                      <path d="M 130 260 L 330 250" stroke="url(#lineageGradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" className="animate-fadeIn" style={{animationDelay: '200ms'}} />

                      {/* Connection Lines - Silver to Gold */}
                      <path d="M 470 150 L 650 180" stroke="url(#lineageGradient2)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" className="animate-fadeIn" style={{animationDelay: '300ms'}} />
                      <path d="M 470 250 L 650 180" stroke="url(#lineageGradient2)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" className="animate-fadeIn" style={{animationDelay: '400ms'}} />
                      <path d="M 470 250 L 650 280" stroke="url(#lineageGradient2)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" className="animate-fadeIn" style={{animationDelay: '500ms'}} />

                      {/* Bronze Layer (Source) */}
                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="20" y="80" width="110" height="50" rx="8" fill="url(#lineageGradient1)" opacity="0.2" stroke="#06b6d4" strokeWidth="2" className="animate-fadeIn" />
                        <text x="75" y="100" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="bold">bronze.raw_data</text>
                        <text x="75" y="115" textAnchor="middle" fill="#9ca3af" fontSize="9">Table</text>
                      </g>

                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="20" y="160" width="110" height="50" rx="8" fill="url(#lineageGradient1)" opacity="0.2" stroke="#06b6d4" strokeWidth="2" className="animate-fadeIn" style={{animationDelay: '50ms'}} />
                        <text x="75" y="180" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="bold">bronze.events</text>
                        <text x="75" y="195" textAnchor="middle" fill="#9ca3af" fontSize="9">Table</text>
                      </g>

                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="20" y="240" width="110" height="50" rx="8" fill="url(#lineageGradient1)" opacity="0.2" stroke="#06b6d4" strokeWidth="2" className="animate-fadeIn" style={{animationDelay: '100ms'}} />
                        <text x="75" y="260" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="bold">bronze.people</text>
                        <text x="75" y="275" textAnchor="middle" fill="#9ca3af" fontSize="9">Table</text>
                      </g>

                      {/* Silver Layer (Transform) */}
                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="330" y="130" width="140" height="50" rx="8" fill="url(#lineageGradient2)" opacity="0.3" stroke="#8b5cf6" strokeWidth="2.5" className="animate-fadeIn" style={{animationDelay: '200ms'}} />
                        <text x="400" y="147" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">silver.people_over_30</text>
                        <text x="400" y="162" textAnchor="middle" fill="#9ca3af" fontSize="9">Materialized View</text>
                        <circle cx="460" cy="155" r="4" fill="#10b981" className="animate-pulse" />
                      </g>

                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="330" y="230" width="140" height="50" rx="8" fill="url(#lineageGradient2)" opacity="0.2" stroke="#8b5cf6" strokeWidth="2" className="animate-fadeIn" style={{animationDelay: '250ms'}} />
                        <text x="400" y="247" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold">silver.aggregated</text>
                        <text x="400" y="262" textAnchor="middle" fill="#9ca3af" fontSize="9">Materialized View</text>
                      </g>

                      {/* Gold Layer (Serve) */}
                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="650" y="160" width="130" height="50" rx="8" fill="url(#lineageGradient2)" opacity="0.2" stroke="#ec4899" strokeWidth="2" className="animate-fadeIn" style={{animationDelay: '300ms'}} />
                        <text x="715" y="180" textAnchor="middle" fill="#ec4899" fontSize="11" fontWeight="bold">gold.analytics</text>
                        <text x="715" y="195" textAnchor="middle" fill="#9ca3af" fontSize="9">View</text>
                      </g>

                      <g className="cursor-pointer hover:opacity-100 transition-opacity" opacity="0.9">
                        <rect x="650" y="260" width="130" height="50" rx="8" fill="url(#lineageGradient2)" opacity="0.2" stroke="#ec4899" strokeWidth="2" className="animate-fadeIn" style={{animationDelay: '350ms'}} />
                        <text x="715" y="280" textAnchor="middle" fill="#ec4899" fontSize="11" fontWeight="bold">gold.reports</text>
                        <text x="715" y="295" textAnchor="middle" fill="#9ca3af" fontSize="9">View</text>
                      </g>

                      {/* Layer Labels */}
                      <text x="75" y="340" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="bold" opacity="0.7">BRONZE</text>
                      <text x="400" y="340" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold" opacity="0.7">SILVER</text>
                      <text x="715" y="340" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="bold" opacity="0.7">GOLD</text>
                    </svg>

                    {/* Legend */}
                    <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                        <span className="text-gray-400">Raw Data</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span className="text-gray-400">Transformed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-400">Active View</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">3</div>
                      <div className="text-xs text-gray-500">Bronze Tables</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">2</div>
                      <div className="text-xs text-gray-500">Silver Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-400">2</div>
                      <div className="text-xs text-gray-500">Gold Views</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const MarkdownCell = () => {
  const [showCell, setShowCell] = useState(false);
  const [cellVisible, setCellVisible] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showAICell, setShowAICell] = useState(false);
  const [aiCellVisible, setAiCellVisible] = useState(false);
  const [aiCellRunning, setAiCellRunning] = useState(false);
  const [aiCellOutput, setAiCellOutput] = useState(false);
  const [isFixingCode, setIsFixingCode] = useState(false);
  const [showDiff, setShowDiff] = useState(false);
  const [codeFixed, setCodeFixed] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [aiThinkingStage, setAiThinkingStage] = useState(0);
  const [showGeneratedCells, setShowGeneratedCells] = useState(false);
  const [generatedCellsVisible, setGeneratedCellsVisible] = useState([false, false, false, false]);
  const [generatedCellsRunning, setGeneratedCellsRunning] = useState([false, false, false, false]);
  const [generatedCellsOutput, setGeneratedCellsOutput] = useState([false, false, false, false]);
  
  // Drag and drop code cell states
  const [showDragCell, setShowDragCell] = useState(false);
  const [dragCellVisible, setDragCellVisible] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [hasDropped, setHasDropped] = useState(false);
  const [dragCellCode, setDragCellCode] = useState('');
  const [dragCellRunning, setDragCellRunning] = useState(false);
  const [dragCellOutput, setDragCellOutput] = useState(false);
  
  const [aiCode, setAiCode] = useState(`import matplotlib.pyplot as plt

sizes = [20, 35, 25, 20]
labels = ['A', 'B', 'C', 'D']

plt.pie(sizes, labels=labels)
plt.title('My Pie 
plt.show()`);
  
  const originalBuggyCode = `import matplotlib.pyplot as plt

sizes = [20, 35, 25, 20]
labels = ['A', 'B', 'C', 'D']

plt.pie(sizes, labels=labels)
plt.title('My Pie 
plt.show()`;

  const fixedCode = `import matplotlib.pyplot as plt

sizes = [20, 35, 25, 20]
labels = ['A', 'B', 'C', 'D']

plt.pie(sizes, labels=labels)
plt.title('My Pie Chart')
plt.show()`;
  const [content, setContent] = useState(`Our Vision: Make Fabric Notebook a go-to coding tool for every data project.

1. Stellar performance
Learn the core workflow in minutes, not hours. No more waiting, just coding and running with built-in features to power innovation.

2. Real-time collaboration
Supercharge teamwork by letting multiple people code in different languages, comment, and brainstorm together instantly.

3. AI-Assisted coding
Get help for coding and debugging from AI directly in notebook, answers within seconds`);

  const handleCreateCell = () => {
    setShowCell(true);
    setTimeout(() => setCellVisible(true), 100);
  };

  const handleTryAICoding = () => {
    // Reset all states to restart the interaction
    setAiCellRunning(false);
    setAiCellOutput(false);
    setIsFixingCode(false);
    setShowDiff(false);
    setCodeFixed(false);
    setAiCode(originalBuggyCode);
    
    // Reset AI dialog input states
    setAiMessage('');
    setIsAIThinking(false);
    setAiThinkingStage(0);
    setShowGeneratedCells(false);
    setGeneratedCellsVisible([false, false, false, false]);
    setGeneratedCellsRunning([false, false, false, false]);
    setGeneratedCellsOutput([false, false, false, false]);
    
    // Show the AI cell (not drag cell)
    if (!showAICell) {
      setShowAICell(true);
      setTimeout(() => setAiCellVisible(true), 100);
    } else {
      // If already visible, just reset with a brief animation
      setAiCellVisible(false);
      setTimeout(() => {
        setAiCellVisible(true);
      }, 100);
    }
  };

  const handleTryCreateCodeCell = () => {
    // Reset and show drag cell
    setHasDropped(false);
    setDragCellCode('');
    setDragCellRunning(false);
    setDragCellOutput(false);
    setShowDragCell(true);
    setTimeout(() => setDragCellVisible(true), 100);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    
    const tableName = e.dataTransfer.getData('tableName');
    if (tableName === 'Sales') {
      setHasDropped(true);
      // Generate the code with syntax highlighting
      const generatedCode = `# Read the 'Sales' table from the default lakehouse into a DataFrame
sales_df = spark.read.table("Sales")

# Display as a DataFrame in the notebook UI
display(sales_df)`;
      setDragCellCode(generatedCode);
    }
  };

  const handleRunDragCell = () => {
    setDragCellRunning(true);
    setDragCellOutput(false);
    
    // Simulate code execution
    setTimeout(() => {
      setDragCellRunning(false);
      setDragCellOutput(true);
    }, 1500);
  };

  const handleRunAICell = () => {
    setAiCellRunning(true);
    setAiCellOutput(false);
    
    // If code is fixed, hide diff and show normal view before running
    if (codeFixed) {
      setShowDiff(false);
    }
    
    // Simulate code execution
    setTimeout(() => {
      setAiCellRunning(false);
      setAiCellOutput(true);
    }, 1500);
  };

  const handleFixWithCopilot = () => {
    setIsFixingCode(true);
    setAiCellOutput(false);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsFixingCode(false);
      setShowDiff(true);
      
      // After showing diff, update the code
      setTimeout(() => {
        setAiCode(fixedCode);
        setCodeFixed(true);
      }, 500);
    }, 2000);
  };

  const handleSendAIMessage = () => {
    if (aiMessage.trim()) {
      console.log('AI Message sent:', aiMessage);
      setAiMessage('');
      setIsAIThinking(true);
      setAiThinkingStage(0);
      
      // Multi-stage AI thinking process
      // Stage 1: Understanding request
      setTimeout(() => setAiThinkingStage(1), 800);
      
      // Stage 2: Planning structure
      setTimeout(() => setAiThinkingStage(2), 2000);
      
      // Stage 3: Generating markdown
      setTimeout(() => setAiThinkingStage(3), 3500);
      
      // Stage 4: Writing code
      setTimeout(() => setAiThinkingStage(4), 5200);
      
      // Stage 5: Finalizing
      setTimeout(() => setAiThinkingStage(5), 6800);
      
      // Complete thinking and start generating cells
      setTimeout(() => {
        setIsAIThinking(false);
        setAiThinkingStage(0);
        setShowGeneratedCells(true);
        
        // Generate cells one by one with realistic delays
        setTimeout(() => setGeneratedCellsVisible([true, false, false, false]), 400);
        setTimeout(() => setGeneratedCellsVisible([true, true, false, false]), 1200);
        setTimeout(() => setGeneratedCellsVisible([true, true, true, false]), 2000);
        setTimeout(() => {
          setGeneratedCellsVisible([true, true, true, true]);
          
          // After all cells are visible, start executing them one by one
          // Execute cell 2 (imports)
          setTimeout(() => {
            setGeneratedCellsRunning([false, true, false, false]);
            setTimeout(() => {
              setGeneratedCellsRunning([false, false, false, false]);
              setGeneratedCellsOutput([false, true, false, false]);
            }, 1500);
          }, 1500);
          
          // Execute cell 3 (load data)
          setTimeout(() => {
            setGeneratedCellsRunning([false, false, true, false]);
            setTimeout(() => {
              setGeneratedCellsRunning([false, false, false, false]);
              setGeneratedCellsOutput([false, true, true, false]);
            }, 1500);
          }, 4500);
          
          // Execute cell 4 (visualization with heatmap output)
          setTimeout(() => {
            setGeneratedCellsRunning([false, false, false, true]);
            setTimeout(() => {
              setGeneratedCellsRunning([false, false, false, false]);
              setGeneratedCellsOutput([false, true, true, true]);
            }, 1800);
          }, 7500);
        }, 2800);
      }, 8000);
    }
  };

  const highlightAICode = (code) => {
    if (!code) return <span></span>;
    
    const keywords = ['import', 'as'];
    const functions = ['pie', 'title', 'show'];
    
    const lines = code.split('\n');
    const result = [];
    
    lines.forEach((line, lineIdx) => {
      const tokens = [];
      let i = 0;
      
      while (i < line.length) {
        // Check for strings
        if (line[i] === "'") {
          let str = "'";
          i++;
          while (i < line.length && line[i] !== "'") {
            str += line[i];
            i++;
          }
          if (i < line.length) str += "'"; // Add closing quote if found
          tokens.push({ type: 'string', value: str });
          if (i < line.length) i++;
          continue;
        }
        
        // Check for numbers
        if (/\d/.test(line[i])) {
          let num = '';
          while (i < line.length && /\d/.test(line[i])) {
            num += line[i];
            i++;
          }
          tokens.push({ type: 'number', value: num });
          continue;
        }
        
        // Check for words (identifiers, keywords)
        if (/[a-zA-Z_]/.test(line[i])) {
          let word = '';
          while (i < line.length && /[a-zA-Z_.]/.test(line[i])) {
            word += line[i];
            i++;
          }
          
          // Classify the word
          if (keywords.includes(word)) {
            tokens.push({ type: 'keyword', value: word });
          } else if (word === 'matplotlib.pyplot') {
            tokens.push({ type: 'module', value: word });
          } else if (word.startsWith('plt.')) {
            const parts = word.split('.');
            tokens.push({ type: 'variable', value: parts[0] });
            tokens.push({ type: 'operator', value: '.' });
            tokens.push({ type: 'function', value: parts[1] });
          } else if (word === 'sizes' || word === 'labels') {
            tokens.push({ type: 'variable', value: word });
          } else if (word === 'plt') {
            tokens.push({ type: 'variable', value: word });
          } else {
            tokens.push({ type: 'text', value: word });
          }
          continue;
        }
        
        // Operators and punctuation
        if ('=[](),'.includes(line[i])) {
          tokens.push({ type: 'operator', value: line[i] });
          i++;
          continue;
        }
        
        // Whitespace
        if (line[i] === ' ') {
          tokens.push({ type: 'space', value: ' ' });
          i++;
          continue;
        }
        
        // Everything else
        tokens.push({ type: 'text', value: line[i] });
        i++;
      }
      
      result.push(
        <div key={lineIdx}>
          {tokens.map((token, tokenIdx) => {
            const key = `${lineIdx}-${tokenIdx}`;
            switch (token.type) {
              case 'keyword':
                return <span key={key} className="text-purple-400">{token.value}</span>;
              case 'module':
                return <span key={key} className="text-cyan-400">{token.value}</span>;
              case 'variable':
                return <span key={key} className="text-blue-400">{token.value}</span>;
              case 'function':
                return <span key={key} className="text-yellow-400">{token.value}</span>;
              case 'number':
                return <span key={key} className="text-green-400">{token.value}</span>;
              case 'string':
                return <span key={key} className="text-orange-400">{token.value}</span>;
              case 'operator':
                return <span key={key} className="text-gray-500">{token.value}</span>;
              case 'space':
                return <span key={key}> </span>;
              default:
                return <span key={key} className="text-gray-300">{token.value}</span>;
            }
          })}
        </div>
      );
    });
    
    return <>{result}</>;
  };

  const parseContent = () => {
    const lines = content.split('\n');
    const title = lines[0];
    const features = [];
    let currentFeature = null;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/^\d+\./)) {
        if (currentFeature) features.push(currentFeature);
        currentFeature = { title: line, description: '' };
      } else if (line && currentFeature) {
        currentFeature.description += (currentFeature.description ? ' ' : '') + line;
      }
    }
    if (currentFeature) features.push(currentFeature);

    return { title, features };
  };

  const { title, features } = parseContent();

  return (
    <div className="w-full mt-6">
      {!showCell && (
        <button
          onClick={handleCreateCell}
          className="group flex items-center gap-3 px-6 py-3 bg-[#1e1e1e] border border-white/10 rounded-lg hover:border-purple-500/50 transition-all hover:scale-105 transform duration-200"
        >
          <span className="text-xs text-purple-400 animate-pulse">Click me →</span>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">New markdown cell</span>
          <ChevronRight size={14} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
        </button>
      )}

      {showCell && (
        <div className={`bg-[#1e1e1e] border border-purple-500/30 rounded-lg overflow-hidden transition-all duration-500 ${cellVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Cell Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
            <div className="flex items-center gap-2">
              <div className="text-xs font-mono text-gray-500">Markdown</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCode(!showCode)}
                className="p-1 hover:bg-purple-500/10 rounded transition-colors"
                title={showCode ? "Show preview" : "Show code"}
              >
                {showCode ? (
                  <Monitor size={14} className="text-purple-400" />
                ) : (
                  <FileCode size={14} className="text-purple-400" />
                )}
              </button>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            </div>
          </div>

          {/* Markdown Content */}
          {showCode ? (
            <div className="p-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-64 bg-[#0a0a0c] text-gray-300 font-mono text-sm p-4 rounded border border-white/10 focus:outline-none focus:border-purple-500/50 resize-vertical"
                placeholder="Enter markdown content..."
              />
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {/* Vision Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {title}
              </h3>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i}>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">{feature.title}</span><br />
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Try Create Code Cell Button */}
      {showCell && cellVisible && (
        <div className="mt-6">
          <button
            onClick={handleTryCreateCodeCell}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Try create a code cell</span>
          </button>
        </div>
      )}

      {/* Drag and Drop Code Cell */}
      {showDragCell && (
        <div className={`mt-6 transition-all duration-500 ${dragCellVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`bg-[#1e1e1e] border-2 border-dashed rounded-lg overflow-hidden transition-all duration-300 ${
              isDraggingOver 
                ? 'border-cyan-400 bg-cyan-500/5 shadow-lg shadow-cyan-400/20 scale-[1.02]' 
                : hasDropped 
                  ? 'border-cyan-500/30' 
                  : 'border-gray-600 hover:border-cyan-500/50'
            }`}
          >
            {/* Cell Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
              <div className="flex items-center gap-2">
                <div className="text-xs font-mono text-gray-500">In [1]:</div>
                <div className="text-xs font-mono text-cyan-400">Python</div>
              </div>
              {hasDropped && (
                <div className="flex items-center gap-2">
                  {dragCellRunning && (
                    <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <button 
                    onClick={handleRunDragCell}
                    className="p-1 hover:bg-cyan-500/10 rounded transition-colors group"
                    disabled={dragCellRunning}
                  >
                    <Play size={14} className="text-cyan-400 group-hover:text-cyan-300" />
                  </button>
                </div>
              )}
            </div>

            {/* Cell Content */}
            {!hasDropped ? (
              <div className="p-8 flex flex-col items-center justify-center min-h-[120px]">
                <div className={`transition-all duration-300 ${isDraggingOver ? 'scale-110' : 'scale-100'}`}>
                  <Database size={32} className={`mb-3 transition-colors ${isDraggingOver ? 'text-cyan-400' : 'text-gray-500'}`} />
                </div>
                <p className={`text-sm font-mono transition-colors ${isDraggingOver ? 'text-cyan-400' : 'text-gray-400'}`}>
                  {isDraggingOver ? 'Drop here to generate code' : "Drag 'Sales' table from Explorer here"}
                </p>
                {!isDraggingOver && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <span className="animate-pulse">💡</span>
                    <span>Find the Sales table in the left sidebar</span>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="p-4">
                  <div className="bg-[#0a0a0c] font-mono text-sm p-4 rounded border border-white/10 leading-relaxed animate-fadeIn">
                    {highlightAICode(dragCellCode)}
                  </div>
                </div>
                
                {/* Output */}
                {dragCellOutput && (
                  <div className="border-t border-white/10 bg-[#0a0a0c] p-4 animate-fadeIn">
                    <div className="text-xs font-mono text-gray-500 mb-3">Output:</div>
                    <div className="bg-[#1a1a1c] border border-cyan-500/30 rounded-lg p-4">
                      {/* Line Chart */}
                      <svg viewBox="0 0 600 300" className="w-full" style={{ maxHeight: '300px' }}>
                        {/* Background Grid */}
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        {[0, 1, 2, 3, 4, 5].map(i => (
                          <line key={i} x1="50" y1={50 + i * 40} x2="550" y2={50 + i * 40} stroke="#374151" strokeWidth="0.5" opacity="0.3" />
                        ))}
                        
                        {/* Y-axis labels */}
                        <text x="35" y="55" fill="#9ca3af" fontSize="10" textAnchor="end">50k</text>
                        <text x="35" y="95" fill="#9ca3af" fontSize="10" textAnchor="end">40k</text>
                        <text x="35" y="135" fill="#9ca3af" fontSize="10" textAnchor="end">30k</text>
                        <text x="35" y="175" fill="#9ca3af" fontSize="10" textAnchor="end">20k</text>
                        <text x="35" y="215" fill="#9ca3af" fontSize="10" textAnchor="end">10k</text>
                        <text x="35" y="255" fill="#9ca3af" fontSize="10" textAnchor="end">0</text>
                        
                        {/* X-axis labels */}
                        <text x="100" y="275" fill="#9ca3af" fontSize="10" textAnchor="middle">Jan</text>
                        <text x="200" y="275" fill="#9ca3af" fontSize="10" textAnchor="middle">Feb</text>
                        <text x="300" y="275" fill="#9ca3af" fontSize="10" textAnchor="middle">Mar</text>
                        <text x="400" y="275" fill="#9ca3af" fontSize="10" textAnchor="middle">Apr</text>
                        <text x="500" y="275" fill="#9ca3af" fontSize="10" textAnchor="middle">May</text>
                        
                        {/* Line chart path with gradient fill */}
                        <path
                          d="M 100 180 L 200 140 L 300 90 L 400 110 L 500 70"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Gradient area under the line */}
                        <path
                          d="M 100 180 L 200 140 L 300 90 L 400 110 L 500 70 L 500 250 L 100 250 Z"
                          fill="url(#lineGradient)"
                        />
                        
                        {/* Data points */}
                        <circle cx="100" cy="180" r="4" fill="#06b6d4" stroke="#0a0a0c" strokeWidth="2" />
                        <circle cx="200" cy="140" r="4" fill="#06b6d4" stroke="#0a0a0c" strokeWidth="2" />
                        <circle cx="300" cy="90" r="4" fill="#06b6d4" stroke="#0a0a0c" strokeWidth="2" />
                        <circle cx="400" cy="110" r="4" fill="#06b6d4" stroke="#0a0a0c" strokeWidth="2" />
                        <circle cx="500" cy="70" r="4" fill="#06b6d4" stroke="#0a0a0c" strokeWidth="2" />
                        
                        {/* Title */}
                        <text x="300" y="25" fill="#ffffff" fontSize="14" textAnchor="middle" fontWeight="bold">
                          Sales Performance Over Time
                        </text>
                      </svg>
                      
                      {/* Legend */}
                      <div className="mt-3 flex items-center justify-center gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                          <span className="text-gray-400">Total Sales ($)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Divider and Research Section */}
      {showCell && cellVisible && (
        <div className="mt-8 space-y-6 animate-fadeIn">
          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* Research Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Lightening performance and easy to use
            </h2>

            {/* Code Block Style Container */}
            <div className="bg-[#0a0a0c] border border-white/10 rounded-lg p-6 font-mono text-sm space-y-4">
              <div className="text-cyan-400 font-semibold">Research process</div>
              
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-purple-400">Method:</span> Benchmark think-aloud interviews, 90-minute 1:1 sessions.
                </p>
                <p>
                  <span className="text-purple-400">Participants:</span> 12 data engineers and 12 data scientists.
                </p>
                <p>
                  <span className="text-purple-400">Theme:</span> End to end data engineering benchmark study.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We conducted user interviews that focuses on first-time users for Fabric who had experience with other online coding tools. In the research, each participant was assigned a list of routine tasks for data engineering workflow, the tasks includes getting data, transforming data, and visualizing data. The participants were asked to performed the same tasks on Fabric and other tools with a random order. The task success were recorded in both behavioral measures (success rate and completion time) and attitudinal measures (how difficult the users feel when working on Fabric vs. other tools. High-level paint points are shared below:
              </p>
            </div>

            {/* Issue Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {/* Issue 1 */}
              <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5 hover:border-red-500/30 transition-all duration-300 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-sm">1</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Difficult Setup</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      To start coding, data engineers and scientists must set up a proper environment. It takes hours for every data projects to install all their preferred languages, libraries, and properties in the right version.
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5 hover:border-orange-500/30 transition-all duration-300 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold text-sm">2</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Slow Performance</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      To run codes, the market standards is to take around 15 minutes to start a session. It is perceived as "too slow", and one of the reason data scientists do not prefer web solutions for programming.
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5 hover:border-yellow-500/30 transition-all duration-300 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-sm">3</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">High Dependency</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      To transform or visualize data, data engineers and scientists need to rely on public libraries, which are sometimes laggy and unreliable. Advanced tooling usually adds up the costs of operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaborative Code Cells */}
            <CollaborativeCodeCells />
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-16"></div>

          {/* AI Assisted Coding Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              AI assisted Coding
            </h2>

            {/* Code Block Style Container */}
            <div className="bg-[#0a0a0c] border border-white/10 rounded-lg p-6 font-mono text-sm space-y-4">
              <div className="text-cyan-400 font-semibold">Research process</div>
              
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-purple-400">Method:</span> Survey study taking around 12 minutes
                </p>
                <p>
                  <span className="text-purple-400">Participants:</span> 183 data professionals
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Our research team sent out a survey to attendees for Fabric Conference in Las Vegas. The survey attempted to capture insights on changes in the landscape of AI tools utilization, and how data professionals are using AI in their daily work.
              </p>

              <p className="text-gray-300 leading-relaxed">
                It gives us an advantage to build the AI-assistant tool inside of notebook, because the data are not shared outside of Fabric, and notebook automatically understands the context of all content.
              </p>
            </div>

            {/* Key Insights Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {/* Insight 1 */}
              <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5 hover:border-cyan-500/30 transition-all duration-300 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">87% Low Familiarity</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Most data professionals have low to intermediate familiarity with AI tools, indicating a significant opportunity for education and adoption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight 2 */}
              <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5 hover:border-green-500/30 transition-all duration-300 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">90% Willing to Adopt</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Despite low familiarity, there's overwhelming willingness to integrate AI tools into data workflows, showing strong market demand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight 3 */}
              <div className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5 hover:border-purple-500/30 transition-all duration-300 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Security & Context</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Two main barriers: data security concerns and the inefficiency of providing context to external AI tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Try AI assisted coding button */}
            <div className="mt-6">
              <button
                onClick={handleTryAICoding}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg transition-all text-sm text-white font-medium shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Try AI assisted coding →
              </button>
            </div>
          </div>

          {/* AI Code Cell */}
          {showAICell && (
            <div className={`mt-8 transition-all duration-500 ${aiCellVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-[#1e1e1e] border border-cyan-500/30 rounded-lg overflow-hidden">
                {/* Cell Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-mono text-gray-500">In [2]:</div>
                    <div className="text-xs font-mono text-cyan-400">Python</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!aiCellOutput && (
                      <span className="text-xs text-cyan-400 animate-pulse">Run me →</span>
                    )}
                    <button 
                      onClick={handleRunAICell}
                      disabled={aiCellRunning}
                      className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
                      title="Run cell"
                    >
                      {aiCellRunning ? (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Play size={14} className="text-cyan-400 group-hover:text-cyan-300" />
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Cell Content - Syntax Highlighted or Diff View */}
                <div className="p-4">
                  {showDiff ? (
                    // Side-by-side diff view
                    <div className="grid grid-cols-2 gap-2">
                      {/* Old code */}
                      <div className="space-y-2">
                        <div className="text-xs text-red-400 font-semibold px-2">Before (with error)</div>
                        <div className="bg-[#1a0a0a] border border-red-500/30 font-mono text-sm p-4 rounded leading-relaxed">
                          {originalBuggyCode.split('\n').map((line, idx) => (
                            <div key={idx} className={idx === 6 ? 'bg-red-500/20' : ''}>
                              {idx === 6 ? (
                                <span className="text-red-300">{line}</span>
                              ) : (
                                <span className="text-gray-400">{line}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* New code */}
                      <div className="space-y-2">
                        <div className="text-xs text-green-400 font-semibold px-2 flex items-center gap-2">
                          <Sparkles size={12} />
                          Fixed by Copilot
                        </div>
                        <div className="bg-[#0a1a0a] border border-green-500/30 font-mono text-sm p-4 rounded leading-relaxed">
                          {fixedCode.split('\n').map((line, idx) => (
                            <div key={idx} className={idx === 6 ? 'bg-green-500/20' : ''}>
                              {idx === 6 ? (
                                <span className="text-green-300">{line}</span>
                              ) : (
                                <span className="text-gray-300">{line}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Normal syntax highlighted view
                    <div className="bg-[#0a0a0c] font-mono text-sm p-4 rounded border border-white/10 leading-relaxed whitespace-pre">
                      {highlightAICode(aiCode)}
                    </div>
                  )}
                </div>

                {/* AI Fixing Animation */}
                {isFixingCode && (
                  <div className="border-t border-white/10 bg-[#0a0a0c] p-6">
                    <div className="flex items-center gap-3 text-purple-400">
                      <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium animate-pulse">Copilot is analyzing and fixing your code...</span>
                    </div>
                  </div>
                )}

                {/* Cell Output */}
                {aiCellOutput && !codeFixed && (
                  <div className="border-t border-white/10 bg-[#0a0a0c]">
                    <div className="px-4 py-2 border-b border-white/10 bg-[#1a1a1c]">
                      <div className="text-xs font-mono text-gray-500">Output:</div>
                    </div>
                    <div className="p-6 space-y-4">
                      {/* Syntax Error Message */}
                      <div className="bg-[#1a1a1c] border border-red-500/30 rounded-lg p-4 font-mono text-sm">
                        <div className="text-red-400 space-y-1">
                          <div className="text-gray-400">
                            <span className="text-white">File</span> <span className="text-orange-400">"&lt;ipython-input-1&gt;"</span>, <span className="text-white">line</span> <span className="text-green-400">7</span>
                          </div>
                          <div className="text-gray-300 pl-4">
                            plt.title('My Pie Chart'
                          </div>
                          <div className="text-red-400 pl-4">
                            <span className="inline-block w-32"></span>^
                          </div>
                          <div className="text-red-400 font-semibold">
                            SyntaxError: '(' was never closed
                          </div>
                        </div>
                      </div>

                      {/* Fix with Copilot Button */}
                      <div className="flex justify-start">
                        <button 
                          onClick={handleFixWithCopilot}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all text-sm text-white font-medium shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
                        >
                          <img src="/Copilot.png" alt="Copilot" className="w-4 h-4 rounded-sm" />
                          Fix with Copilot
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Success Output - Scatter Plot after code is fixed */}
                {codeFixed && aiCellOutput && (
                  <div className="border-t border-white/10 bg-[#0a0a0c]">
                    <div className="px-4 py-2 border-b border-white/10 bg-[#1a1a1c]">
                      <div className="text-xs font-mono text-gray-500">Output:</div>
                    </div>
                    <div className="p-6">
                      {/* Beautiful Scatter Plot */}
                      <div className="bg-[#1a1a1c] border border-cyan-500/30 rounded-lg p-6">
                        <svg width="600" height="400" viewBox="0 0 600 400" className="mx-auto">
                          {/* Background grid */}
                          <defs>
                            <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
                            </pattern>
                          </defs>
                          <rect width="600" height="400" fill="url(#grid)" />
                          
                          {/* Axes */}
                          <line x1="50" y1="350" x2="550" y2="350" stroke="#9ca3af" strokeWidth="2" />
                          <line x1="50" y1="350" x2="50" y2="50" stroke="#9ca3af" strokeWidth="2" />
                          
                          {/* Axis labels */}
                          <text x="300" y="385" textAnchor="middle" fill="#9ca3af" fontSize="14">X Axis</text>
                          <text x="20" y="200" textAnchor="middle" fill="#9ca3af" fontSize="14" transform="rotate(-90 20 200)">Y Axis</text>
                          
                          {/* Title */}
                          <text x="300" y="30" textAnchor="middle" fill="#60a5fa" fontSize="18" fontWeight="bold">Data Distribution Analysis</text>
                          
                          {/* Generate many scatter points with different colors */}
                          {Array.from({ length: 80 }, (_, i) => {
                            const x = 70 + Math.random() * 450;
                            const y = 80 + Math.random() * 250;
                            const size = 3 + Math.random() * 4;
                            const colors = ['#60a5fa', '#34d399', '#f472b6', '#fbbf24', '#a78bfa'];
                            const color = colors[Math.floor(Math.random() * colors.length)];
                            const opacity = 0.6 + Math.random() * 0.4;
                            
                            return (
                              <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r={size}
                                fill={color}
                                opacity={opacity}
                              />
                            );
                          })}
                          
                          {/* Legend */}
                          <g transform="translate(470, 60)">
                            <text x="0" y="0" fill="#9ca3af" fontSize="12" fontWeight="bold">Categories</text>
                            <circle cx="5" cy="15" r="4" fill="#60a5fa" />
                            <text x="15" y="19" fill="#9ca3af" fontSize="10">Group A</text>
                            <circle cx="5" cy="30" r="4" fill="#34d399" />
                            <text x="15" y="34" fill="#9ca3af" fontSize="10">Group B</text>
                            <circle cx="5" cy="45" r="4" fill="#f472b6" />
                            <text x="15" y="49" fill="#9ca3af" fontSize="10">Group C</text>
                            <circle cx="5" cy="60" r="4" fill="#fbbf24" />
                            <text x="15" y="64" fill="#9ca3af" fontSize="10">Group D</text>
                            <circle cx="5" cy="75" r="4" fill="#a78bfa" />
                            <text x="15" y="79" fill="#9ca3af" fontSize="10">Group E</text>
                          </g>
                        </svg>
                        
                        {/* Success message */}
                        <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Code executed successfully! Generated scatter plot with 80 data points.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AI Dialog Input */}
              {showAICell && (
                <div className={`mt-4 transition-all duration-500 ${aiCellVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="relative">
                    <input
                      type="text"
                      value={aiMessage}
                      onChange={(e) => setAiMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleSendAIMessage();
                        }
                      }}
                      placeholder="Create anything with your own words"
                      className="w-full bg-[#1e1e1e] text-gray-300 text-sm px-4 py-3 pr-12 rounded-lg border border-white/10 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                    {aiMessage.trim() && (
                      <button
                        onClick={handleSendAIMessage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center"
                        title="Send message"
                      >
                        <Send size={16} className="text-white" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* AI Thinking Animation */}
              {isAIThinking && (
                <div className="mt-6 animate-fadeIn">
                  <div className="bg-[#1e1e1e] border border-purple-500/30 rounded-lg p-6 space-y-4">
                    {/* Main thinking indicator */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 animate-pulse" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="text-purple-400 font-medium">Copilot is creating your notebook...</div>
                        <div className="text-gray-500 text-sm">Using AI to understand and generate optimal code structure</div>
                      </div>
                    </div>

                    {/* Progress stages */}
                    <div className="space-y-2 pl-14">
                      {/* Stage 1: Understanding */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${aiThinkingStage >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${aiThinkingStage >= 1 ? 'border-green-500 bg-green-500' : 'border-gray-600'}`}>
                          {aiThinkingStage >= 1 && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-xs ${aiThinkingStage >= 1 ? 'text-green-400' : 'text-gray-500'}`}>Understanding request: "Sales data analysis notebook"</span>
                      </div>

                      {/* Stage 2: Planning */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${aiThinkingStage >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${aiThinkingStage >= 2 ? 'border-green-500 bg-green-500' : 'border-gray-600'}`}>
                          {aiThinkingStage >= 2 && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-xs ${aiThinkingStage >= 2 ? 'text-green-400' : 'text-gray-500'}`}>Planning structure: 1 markdown + 3 code cells</span>
                      </div>

                      {/* Stage 3: Generating markdown */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${aiThinkingStage >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${aiThinkingStage >= 3 ? 'border-green-500 bg-green-500' : 'border-gray-600'}`}>
                          {aiThinkingStage >= 3 && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-xs ${aiThinkingStage >= 3 ? 'text-green-400' : 'text-gray-500'}`}>Generating documentation and context</span>
                      </div>

                      {/* Stage 4: Writing code */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${aiThinkingStage >= 4 ? 'opacity-100' : 'opacity-30'}`}>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${aiThinkingStage >= 4 ? 'border-green-500 bg-green-500' : 'border-gray-600'}`}>
                          {aiThinkingStage >= 4 && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-xs ${aiThinkingStage >= 4 ? 'text-green-400' : 'text-gray-500'}`}>Writing Python code with pandas, matplotlib</span>
                      </div>

                      {/* Stage 5: Finalizing */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${aiThinkingStage >= 5 ? 'opacity-100' : 'opacity-30'}`}>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${aiThinkingStage >= 5 ? 'border-green-500 bg-green-500' : 'border-gray-600'}`}>
                          {aiThinkingStage >= 5 && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-xs ${aiThinkingStage >= 5 ? 'text-green-400' : 'text-gray-500'}`}>Optimizing and validating syntax</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 ease-out"
                        style={{ width: `${(aiThinkingStage / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Generated Cells */}
              {showGeneratedCells && (
                <div className="mt-6 space-y-4">
                  {/* Cell 1: Markdown */}
                  <div className={`bg-[#1e1e1e] border border-purple-500/30 rounded-lg overflow-hidden transition-all duration-500 ${generatedCellsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
                      <div className="text-xs font-mono text-gray-500">Markdown</div>
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white">Sales Data Analysis</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        This notebook analyzes sales performance to identify trends, top products, and key revenue drivers.<br />
                        It loads raw sales data, cleans it, explores patterns, and visualizes important metrics for business insight.
                      </p>
                    </div>
                  </div>

                  {/* Cell 2: Import Libraries */}
                  <div className={`bg-[#1e1e1e] border rounded-lg overflow-hidden transition-all duration-500 ${generatedCellsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${generatedCellsRunning[1] ? 'border-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse' : 'border-cyan-500/30'}`}>
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-mono text-gray-500">In [1]:</div>
                        <div className="text-xs font-mono text-cyan-400">Python</div>
                      </div>
                      {generatedCellsRunning[1] && (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="bg-[#0a0a0c] font-mono text-sm p-4 rounded border border-white/10 leading-relaxed">
                        <div className="text-purple-400">import <span className="text-cyan-400">pandas</span> <span className="text-purple-400">as</span> <span className="text-blue-400">pd</span></div>
                        <div className="text-purple-400">import <span className="text-cyan-400">numpy</span> <span className="text-purple-400">as</span> <span className="text-blue-400">np</span></div>
                        <div className="text-purple-400">import <span className="text-cyan-400">matplotlib.pyplot</span> <span className="text-purple-400">as</span> <span className="text-blue-400">plt</span></div>
                        <div className="text-purple-400">import <span className="text-cyan-400">seaborn</span> <span className="text-purple-400">as</span> <span className="text-blue-400">sns</span></div>
                        <div className="mt-3"></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">style</span><span className="text-gray-500">.</span><span className="text-yellow-400">use</span><span className="text-gray-500">(</span><span className="text-orange-400">"seaborn-v0_8-whitegrid"</span><span className="text-gray-500">)</span></div>
                        <div><span className="text-blue-400">pd</span><span className="text-gray-500">.</span><span className="text-yellow-400">set_option</span><span className="text-gray-500">(</span><span className="text-orange-400">"display.max_columns"</span><span className="text-gray-500">,</span> <span className="text-green-400">50</span><span className="text-gray-500">)</span></div>
                      </div>
                    </div>
                    {generatedCellsOutput[1] && (
                      <div className="border-t border-white/10 bg-[#0a0a0c] px-4 py-2">
                        <div className="text-xs text-green-400 flex items-center gap-2">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Libraries imported successfully
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cell 3: Load Data */}
                  <div className={`bg-[#1e1e1e] border rounded-lg overflow-hidden transition-all duration-500 ${generatedCellsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${generatedCellsRunning[2] ? 'border-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse' : 'border-cyan-500/30'}`}>
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-mono text-gray-500">In [2]:</div>
                        <div className="text-xs font-mono text-cyan-400">Python</div>
                      </div>
                      {generatedCellsRunning[2] && (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="bg-[#0a0a0c] font-mono text-sm p-4 rounded border border-white/10 leading-relaxed">
                        <div className="text-gray-400"># Replace with your actual file path</div>
                        <div><span className="text-blue-400">data_path</span> <span className="text-gray-500">=</span> <span className="text-orange-400">"sales_data.csv"</span></div>
                        <div><span className="text-blue-400">df</span> <span className="text-gray-500">=</span> <span className="text-blue-400">pd</span><span className="text-gray-500">.</span><span className="text-yellow-400">read_csv</span><span className="text-gray-500">(</span><span className="text-blue-400">data_path</span><span className="text-gray-500">)</span></div>
                        <div className="mt-3"></div>
                        <div><span className="text-blue-400">df</span><span className="text-gray-500">.</span><span className="text-yellow-400">head</span><span className="text-gray-500">()</span></div>
                      </div>
                    </div>
                    {generatedCellsOutput[2] && (
                      <div className="border-t border-white/10 bg-[#0a0a0c] p-4">
                        <div className="text-xs font-mono text-gray-500 mb-2">Output:</div>
                        <div className="bg-[#1a1a1c] border border-white/10 rounded overflow-hidden">
                          <table className="w-full text-xs font-mono">
                            <thead className="bg-[#2d2d2d]">
                              <tr className="border-b border-white/10">
                                <th className="px-3 py-2 text-left text-gray-400"></th>
                                <th className="px-3 py-2 text-left text-cyan-400">ProductName</th>
                                <th className="px-3 py-2 text-left text-cyan-400">Sales</th>
                                <th className="px-3 py-2 text-left text-cyan-400">Region</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-white/10">
                                <td className="px-3 py-2 text-gray-500">0</td>
                                <td className="px-3 py-2 text-gray-300">Product A</td>
                                <td className="px-3 py-2 text-green-400">15420</td>
                                <td className="px-3 py-2 text-gray-300">North</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="px-3 py-2 text-gray-500">1</td>
                                <td className="px-3 py-2 text-gray-300">Product B</td>
                                <td className="px-3 py-2 text-green-400">23150</td>
                                <td className="px-3 py-2 text-gray-300">South</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="px-3 py-2 text-gray-500">2</td>
                                <td className="px-3 py-2 text-gray-300">Product C</td>
                                <td className="px-3 py-2 text-green-400">18900</td>
                                <td className="px-3 py-2 text-gray-300">East</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="px-3 py-2 text-gray-500">3</td>
                                <td className="px-3 py-2 text-gray-300">Product D</td>
                                <td className="px-3 py-2 text-green-400">12680</td>
                                <td className="px-3 py-2 text-gray-300">West</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 text-gray-500">4</td>
                                <td className="px-3 py-2 text-gray-300">Product E</td>
                                <td className="px-3 py-2 text-green-400">29340</td>
                                <td className="px-3 py-2 text-gray-300">North</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cell 4: Top Products Visualization */}
                  <div className={`bg-[#1e1e1e] border rounded-lg overflow-hidden transition-all duration-500 ${generatedCellsVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${generatedCellsRunning[3] ? 'border-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse' : 'border-cyan-500/30'}`}>
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-mono text-gray-500">In [3]:</div>
                        <div className="text-xs font-mono text-cyan-400">Python</div>
                      </div>
                      {generatedCellsRunning[3] && (
                        <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="bg-[#0a0a0c] font-mono text-sm p-4 rounded border border-white/10 leading-relaxed">
                        <div><span className="text-blue-400">top_products</span> <span className="text-gray-500">=</span> <span className="text-gray-500">(</span></div>
                        <div className="pl-4"><span className="text-blue-400">df</span><span className="text-gray-500">.</span><span className="text-yellow-400">groupby</span><span className="text-gray-500">(</span><span className="text-orange-400">"ProductName"</span><span className="text-gray-500">)[</span><span className="text-orange-400">"Sales"</span><span className="text-gray-500">]</span></div>
                        <div className="pl-8"><span className="text-gray-500">.</span><span className="text-yellow-400">sum</span><span className="text-gray-500">()</span></div>
                        <div className="pl-8"><span className="text-gray-500">.</span><span className="text-yellow-400">sort_values</span><span className="text-gray-500">(</span><span className="text-blue-400">ascending</span><span className="text-gray-500">=</span><span className="text-purple-400">False</span><span className="text-gray-500">)</span></div>
                        <div className="pl-8"><span className="text-gray-500">.</span><span className="text-yellow-400">head</span><span className="text-gray-500">(</span><span className="text-green-400">10</span><span className="text-gray-500">)</span></div>
                        <div><span className="text-gray-500">)</span></div>
                        <div className="mt-3"></div>
                        <div><span className="text-blue-400">top_products</span><span className="text-gray-500">.</span><span className="text-yellow-400">plot</span><span className="text-gray-500">(</span><span className="text-blue-400">kind</span><span className="text-gray-500">=</span><span className="text-orange-400">"bar"</span><span className="text-gray-500">,</span> <span className="text-blue-400">figsize</span><span className="text-gray-500">=(</span><span className="text-green-400">10</span><span className="text-gray-500">,</span> <span className="text-green-400">4</span><span className="text-gray-500">))</span></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">title</span><span className="text-gray-500">(</span><span className="text-orange-400">"Top 10 Products by Sales"</span><span className="text-gray-500">)</span></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">xlabel</span><span className="text-gray-500">(</span><span className="text-orange-400">"Product"</span><span className="text-gray-500">)</span></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">ylabel</span><span className="text-gray-500">(</span><span className="text-orange-400">"Total Sales"</span><span className="text-gray-500">)</span></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">xticks</span><span className="text-gray-500">(</span><span className="text-blue-400">rotation</span><span className="text-gray-500">=</span><span className="text-green-400">45</span><span className="text-gray-500">,</span> <span className="text-blue-400">ha</span><span className="text-gray-500">=</span><span className="text-orange-400">"right"</span><span className="text-gray-500">)</span></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">tight_layout</span><span className="text-gray-500">()</span></div>
                        <div><span className="text-blue-400">plt</span><span className="text-gray-500">.</span><span className="text-yellow-400">show</span><span className="text-gray-500">()</span></div>
                      </div>
                    </div>
                    {generatedCellsOutput[3] && (
                      <div className="border-t border-white/10 bg-[#0a0a0c] p-4">
                        <div className="text-xs font-mono text-gray-500 mb-3">Output:</div>
                        <div className="bg-[#1a1a1c] border border-cyan-500/30 rounded-lg p-6">
                          {/* Heatmap Visualization */}
                          <div className="text-center mb-4">
                            <h4 className="text-white font-semibold text-sm">Sales Performance Heatmap by Region and Product</h4>
                          </div>
                          <svg width="600" height="350" viewBox="0 0 600 350" className="mx-auto">
                            {/* Y-axis labels (Products) */}
                            <text x="80" y="70" textAnchor="end" fill="#9ca3af" fontSize="11">Product A</text>
                            <text x="80" y="120" textAnchor="end" fill="#9ca3af" fontSize="11">Product B</text>
                            <text x="80" y="170" textAnchor="end" fill="#9ca3af" fontSize="11">Product C</text>
                            <text x="80" y="220" textAnchor="end" fill="#9ca3af" fontSize="11">Product D</text>
                            <text x="80" y="270" textAnchor="end" fill="#9ca3af" fontSize="11">Product E</text>
                            
                            {/* X-axis labels (Regions) */}
                            <text x="140" y="305" textAnchor="middle" fill="#9ca3af" fontSize="11">North</text>
                            <text x="240" y="305" textAnchor="middle" fill="#9ca3af" fontSize="11">South</text>
                            <text x="340" y="305" textAnchor="middle" fill="#9ca3af" fontSize="11">East</text>
                            <text x="440" y="305" textAnchor="middle" fill="#9ca3af" fontSize="11">West</text>
                            
                            {/* Heatmap cells - Row 1 (Product A) */}
                            <rect x="100" y="50" width="80" height="40" fill="#1e40af" />
                            <text x="140" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">15.4k</text>
                            <rect x="200" y="50" width="80" height="40" fill="#7c3aed" />
                            <text x="240" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">18.2k</text>
                            <rect x="300" y="50" width="80" height="40" fill="#ec4899" />
                            <text x="340" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">22.1k</text>
                            <rect x="400" y="50" width="80" height="40" fill="#dc2626" />
                            <text x="440" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">25.8k</text>
                            
                            {/* Row 2 (Product B) */}
                            <rect x="100" y="100" width="80" height="40" fill="#7c3aed" />
                            <text x="140" y="125" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">19.5k</text>
                            <rect x="200" y="100" width="80" height="40" fill="#ec4899" />
                            <text x="240" y="125" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">23.2k</text>
                            <rect x="300" y="100" width="80" height="40" fill="#1e40af" />
                            <text x="340" y="125" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">16.7k</text>
                            <rect x="400" y="100" width="80" height="40" fill="#059669" />
                            <text x="440" y="125" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">12.3k</text>
                            
                            {/* Row 3 (Product C) */}
                            <rect x="100" y="150" width="80" height="40" fill="#ec4899" />
                            <text x="140" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">21.9k</text>
                            <rect x="200" y="150" width="80" height="40" fill="#dc2626" />
                            <text x="240" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">27.4k</text>
                            <rect x="300" y="150" width="80" height="40" fill="#7c3aed" />
                            <text x="340" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">18.9k</text>
                            <rect x="400" y="150" width="80" height="40" fill="#1e40af" />
                            <text x="440" y="175" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">14.2k</text>
                            
                            {/* Row 4 (Product D) */}
                            <rect x="100" y="200" width="80" height="40" fill="#059669" />
                            <text x="140" y="225" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">11.8k</text>
                            <rect x="200" y="200" width="80" height="40" fill="#1e40af" />
                            <text x="240" y="225" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">15.6k</text>
                            <rect x="300" y="200" width="80" height="40" fill="#dc2626" />
                            <text x="340" y="225" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">26.3k</text>
                            <rect x="400" y="200" width="80" height="40" fill="#7c3aed" />
                            <text x="440" y="225" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">19.7k</text>
                            
                            {/* Row 5 (Product E) */}
                            <rect x="100" y="250" width="80" height="40" fill="#dc2626" />
                            <text x="140" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">29.3k</text>
                            <rect x="200" y="250" width="80" height="40" fill="#059669" />
                            <text x="240" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">13.1k</text>
                            <rect x="300" y="250" width="80" height="40" fill="#1e40af" />
                            <text x="340" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">17.2k</text>
                            <rect x="400" y="250" width="80" height="40" fill="#ec4899" />
                            <text x="440" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">24.5k</text>
                            
                            {/* Legend */}
                            <g transform="translate(510, 80)">
                              <text x="0" y="0" fill="#9ca3af" fontSize="10" fontWeight="bold">Sales</text>
                              <rect x="0" y="10" width="30" height="10" fill="#059669" />
                              <text x="35" y="19" fill="#9ca3af" fontSize="9">Low</text>
                              <rect x="0" y="25" width="30" height="10" fill="#1e40af" />
                              <text x="35" y="34" fill="#9ca3af" fontSize="9">Med</text>
                              <rect x="0" y="40" width="30" height="10" fill="#7c3aed" />
                              <text x="35" y="49" fill="#9ca3af" fontSize="9">High</text>
                              <rect x="0" y="55" width="30" height="10" fill="#ec4899" />
                              <text x="35" y="64" fill="#9ca3af" fontSize="9">V.High</text>
                              <rect x="0" y="70" width="30" height="10" fill="#dc2626" />
                              <text x="35" y="79" fill="#9ca3af" fontSize="9">Max</text>
                            </g>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-200 my-12"></div>

      {/* Reflection Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Reflection</h3>
        <div className="text-gray-300 leading-relaxed space-y-4">
          <p>
            Leading the redesign of Fabric Notebooks was a defining experience in my journey as a design leader. This project reinforced my belief that transformative user experiences are built at the intersection of empathy, creativity, and strategic vision. By immersing myself and my team in the daily realities of data professionals, we moved beyond surface-level fixes and tackled the root causes of their frustrations.
          </p>
          <p>
            Most importantly, this project taught me that great design is not just about solving existing problems-it's about unlocking potential and pushing the boundaries. By removing barriers and empowering users, we didn't just improve a product; we helped shape how organizations turn data into impact. I'm proud of what we achieved and even more excited for the innovations ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

const NotebookCell = ({ onOutputShown }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [outputVisible, setOutputVisible] = useState(false);
  const [code, setCode] = useState(`# Notebook is a core feature in Fabric developer experiences.
# It's an interactive coding environment where data scientists
# write code, experiment, and collaborate all in one place,
# making it easy to explore data and share insights.`);

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setOutputVisible(false);
    
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
      setTimeout(() => {
        setOutputVisible(true);
        if (onOutputShown) onOutputShown();
      }, 100);
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="bg-[#1e1e1e] border border-white/10 rounded-lg overflow-hidden">
        {/* Cell Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2d2d2d]">
          <div className="flex items-center gap-2">
            <div className="text-xs font-mono text-gray-500">In [1]:</div>
          </div>
          <div className="flex items-center gap-2">
            {!showOutput && (
              <span className="text-xs text-cyan-400 animate-pulse">Click me →</span>
            )}
            <button 
              onClick={handleRun}
              disabled={isRunning}
              className="p-1.5 hover:bg-cyan-500/10 rounded transition-colors group relative"
            >
              {isRunning ? (
                <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Play size={14} className="text-cyan-400 group-hover:text-cyan-300" />
              )}
            </button>
          </div>
        </div>
        
        {/* Cell Content - Editable */}
        <div className="p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-32 bg-[#0a0a0c] text-green-400 font-mono text-sm p-4 rounded border border-white/10 focus:outline-none focus:border-cyan-500/50 resize-vertical"
            placeholder="Enter Python code..."
          />
        </div>

        {/* Cell Output */}
        {showOutput && (
          <div className={`border-t border-white/10 bg-[#0a0a0c] transition-all duration-500 ${outputVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="px-4 py-2 border-b border-white/10 bg-[#1a1a1c]">
              <div className="text-xs font-mono text-gray-500">Output:</div>
            </div>
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <h4 className="text-lg font-normal text-gray-300">Our UX Challenges: Coding experience is broken</h4>
              </div>

              {/* User Research & Conclusions - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* User Research Section */}
                <div className="bg-[#1a1a1c] border border-cyan-500/20 rounded-lg p-5 space-y-4">
                  <h5 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                    <Search size={18} />
                    User Research
                  </h5>
                  
                  {/* Code Block Style */}
                  <div className="bg-[#0a0a0c] border border-white/5 rounded-lg p-4 font-mono text-xs leading-relaxed">
                    <div className="space-y-3">
                      <div>
                        <span className="text-purple-400">Method:</span>
                        <div className="text-gray-300 mt-1">60 minute 1-on-1 sessions of usability testing coding products.</div>
                      </div>
                      <div>
                        <span className="text-purple-400">Participants:</span>
                        <div className="text-gray-300 mt-1">4 data engineers and 4 data scientists.</div>
                      </div>
                      <div>
                        <span className="text-purple-400">Theme:</span>
                        <div className="text-gray-300 mt-1">Semi-structured interviews and allows free explorations.</div>
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/10">
                        <div className="text-gray-300">
                          We conducted user research that included interviews, testing, and direct observation of data scientists and engineers in their daily workflows. By listening to their experiences and watching how they interacted with coding tools, we uncovered common pain points such as slow performance, complicated setup processes, difficulties with collaboration, and concerns about data security.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusions Section */}
                <div className="bg-[#1a1a1c] border border-yellow-500/20 rounded-lg p-5 space-y-4">
                  <h5 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
                    <Zap size={18} />
                    Conclusions
                  </h5>
                  
                  {/* Code Block Style */}
                  <div className="bg-[#0a0a0c] border border-white/5 rounded-lg p-4 font-mono text-xs leading-relaxed">
                    <div className="space-y-3">
                      <div className="text-gray-300">
                        Users spent majority of their time fighting tools instead of finding insights. They faced a minefield of obstacles:
                      </div>
                      <div className="pt-2 mt-2 border-t border-white/10 space-y-3">
                        <div className="text-gray-300">
                          <span className="text-red-400">•</span> <span className="text-yellow-400">Setup Nightmares:</span> Spend hours install languages configuring environments.
                        </div>
                        <div className="text-gray-300">
                          <span className="text-red-400">•</span> <span className="text-yellow-400">Lag & Frustration:</span> Slow performance for handling large scale data.
                        </div>
                        <div className="text-gray-300">
                          <span className="text-red-400">•</span> <span className="text-yellow-400">Collaboration Chaos:</span> Sharing work meant endless email threads and versions.
                        </div>
                        <div className="text-gray-300">
                          <span className="text-red-400">•</span> <span className="text-yellow-400">Need Help with Coding:</span> Spend hours searching for coding solutions on GitHub and developer forums.
                        </div>
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
  );
};

const MiniCopilot = ({ position, onMouseDown, inputValue, messages, isTyping, onApprove, onRunApprove, onRunApproveLineage, onKeep, onUndo, onInput, onSend, zIndex = 20, showZeroState = false, onZeroPromptClick, showStartTooltip, width = "320px", height = "600px" }) => {
  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showZeroState]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [inputValue]);

  return (
    <div 
      className="absolute left-1/2 top-1/2 rounded-xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
      style={{ 
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        zIndex: zIndex,
        height: height,
        width: width
      }}
      onMouseDown={onMouseDown}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-white/5">
        <div className="flex items-center gap-2">
           <img src="/Copilot.png" alt="Copilot" className="w-6 h-6 rounded-lg" />
           <span className="font-semibold text-white text-xs">Copilot</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Plus size={14} className="hover:text-white cursor-pointer" />
          <Clock size={14} className="hover:text-white cursor-pointer" />
          <Settings size={14} className="hover:text-white cursor-pointer" />
          <X size={14} className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Content Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 custom-scrollbar bg-[#18181b]">
        {showZeroState ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-white">Hello Laura!</h2>
              <p className="text-xs text-gray-400">Build autonomously with agent mode</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
                <span className="text-pink-400">📄</span>
                <span>Let's Start Building Something</span>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <button 
                    onClick={() => onZeroPromptClick && onZeroPromptClick("Build Medallion With Materialized Lake Views.")}
                    className="w-full text-left p-3 rounded-lg bg-[#202020] border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-all text-xs text-gray-300 group"
                  >
                    Build Medallion With Materialized Lake Views.
                  </button>
                  {showStartTooltip && (
                    <div className="absolute bottom-full left-0 mb-3 w-max bg-[#252526] border border-white/10 text-white text-[10px] px-3 py-2 rounded shadow-xl animate-in fade-in slide-in-from-bottom-2 z-50">
                        <div className="font-semibold">Click me to start</div>
                        <div className="absolute top-full left-4 -translate-y-1.5 w-2.5 h-2.5 bg-[#252526] border-r border-b border-white/10 rotate-45"></div>
                    </div>
                  )}
                </div>
                <button className="w-full text-left p-3 rounded-lg bg-[#202020] border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-all text-xs text-gray-300">
                  Add Markdown to explain my functions.
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-[#202020] border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-all text-xs text-gray-300">
                  Clean raw data into a professional report.
                </button>
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-white/5">
               {['Explore & Validate Data', 'Clean & Prepare Data', 'Analyze, Optimize & Convert'].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-2 text-xs text-gray-500 hover:text-gray-300 cursor-pointer rounded hover:bg-white/5">
                    <div className="flex items-center gap-2">
                      <span>{['✨', '🍱', '📄'][i]}</span>
                      <span>{item}</span>
                    </div>
                    <ChevronDown size={12} />
                 </div>
               ))}
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
          <div key={idx} className={msg.role === 'user' ? "flex justify-end" : "space-y-3"}>
            {msg.role === 'user' ? (
              <div className="bg-[#003d29] text-white p-3 rounded-lg max-w-[90%] text-xs leading-relaxed border border-[#005f3f]">
                {msg.content}
              </div>
            ) : (
              <>
                {!msg.isCheckpoint && (
                  <div className="flex items-center gap-2 text-gray-400 text-[10px]">
                    <img src="/Copilot.png" alt="Copilot" className="w-3 h-3 rounded-sm" />
                    <span>Copilot</span>
                    <Shield size={12} />
                    <Info size={12} />
                  </div>
                )}
                
                <div className="text-xs text-gray-300 leading-relaxed space-y-3">
                  {msg.isCheckpoint ? (
                    <div className="flex items-center gap-2 my-2">
                        <Bookmark size={14} className="text-gray-500" />
                        <div className="w-2 border-t border-dashed border-gray-700"></div>
                        <button className="px-3 py-1 bg-[#18181b] border border-white/20 rounded-md text-xs text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                            Restore Checkpoint
                        </button>
                        <div className="flex-1 border-t border-dashed border-gray-700"></div>
                    </div>
                  ) : msg.content && (
                    <div className={`whitespace-pre-wrap ${msg.isThinking ? 'text-gray-500 italic animate-pulse' : ''}`}>
                      {msg.content.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                        part.startsWith('**') && part.endsWith('**') ? 
                          <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong> : 
                          part
                      )}
                    </div>
                  )}
                  
                  {msg.tasks && msg.tasks.length > 0 && (
                    <div className="space-y-2">
                      {msg.tasks.map((task, tIdx) => (
                        <div key={tIdx} className={`flex items-center gap-2 ${task.status === 'done' ? 'text-green-400' : 'text-gray-400'}`}>
                          {task.status === 'done' ? <Check size={14} /> : 
                           task.status === 'loading' ? <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" /> :
                           <div className="w-3.5 h-3.5 rounded-full border border-gray-600" />}
                          <span>{task.label}</span>
                          {task.extra && (
                            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#2d2d2d] rounded text-[10px] text-gray-300 border border-white/10">
                              <FileCode size={10} />
                              <span>{task.extra}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {msg.finalContent && <p>{msg.finalContent}</p>}

                  {msg.type === 'run_approval' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-lg p-3 mt-2 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-sm text-white mb-3 font-medium">Run notebook cells?</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => onRunApprove && onRunApprove(idx)}
                          className="bg-[#008060] text-white px-3 py-1.5 rounded text-xs hover:bg-[#006e52] transition-colors font-medium"
                        >
                          Approve
                        </button>
                        <button className="border border-white/20 text-gray-300 px-3 py-1.5 rounded text-xs hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}

                  {msg.type === 'run_approval_lineage' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-lg p-3 mt-2 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-sm text-white mb-3 font-medium">Run notebook cells?</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => onRunApproveLineage && onRunApproveLineage(idx)}
                          className="bg-[#008060] text-white px-3 py-1.5 rounded text-xs hover:bg-[#006e52] transition-colors font-medium"
                        >
                          Approve
                        </button>
                        <button className="border border-white/20 text-gray-300 px-3 py-1.5 rounded text-xs hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}

                  {msg.type === 'plan_approval' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-lg p-3 mt-2 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-sm text-white mb-3 font-medium">Proceed with this plan?</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => onApprove && onApprove(idx)}
                          className="bg-[#006e52] text-white px-4 py-1.5 rounded text-xs hover:bg-[#005c45] transition-colors font-medium"
                        >
                          Proceed
                        </button>
                        <button className="border border-white/20 text-gray-300 px-4 py-1.5 rounded text-xs hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}

                  {msg.type === 'approval' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-lg p-3 mt-2 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-sm text-white mb-3 font-medium">Run notebook cells?</p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => onApprove && onApprove(idx)}
                          className="bg-[#008060] text-white px-3 py-1.5 rounded text-xs hover:bg-[#006e52] transition-colors font-medium"
                        >
                          Approve
                        </button>
                        <button className="border border-white/20 text-gray-300 px-3 py-1.5 rounded text-xs hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#18181b] border-t border-white/5 relative">
        <div className="relative z-20">
            {messages[messages.length - 1]?.type === 'review_changes' && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-[#18181b] border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-2xl animate-in fade-in slide-in-from-bottom-2 z-30">
                    <p className="text-sm text-white font-medium">3 cells changed</p>
                    <div className="flex gap-2 items-center">
                    <button 
                        onClick={() => onKeep && onKeep(messages.length - 1)}
                        className="bg-[#008060] text-white px-3 py-1.5 rounded-md text-xs hover:bg-[#006e52] transition-colors font-medium"
                    >
                        Keep
                    </button>
                    <button 
                        onClick={() => onUndo && onUndo(messages.length - 1)}
                        className="text-gray-300 px-2 py-1.5 rounded-md text-xs hover:text-white transition-colors"
                    >
                        Undo
                    </button>
                    </div>
                </div>
            )}
            <div className="bg-[#202020] border border-white/10 rounded-xl p-3">
              <textarea 
                ref={textareaRef}
                className="w-full bg-transparent border-none outline-none text-xs text-gray-300 placeholder-gray-500 resize-none overflow-hidden"
                placeholder="Build autonomously..."
                value={inputValue}
                onChange={(e) => onInput && onInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend && (e.preventDefault(), onSend())}
                readOnly={!onInput}
                rows={1}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white cursor-pointer">
                     <span>Agent</span>
                     <ChevronDown size={12} />
                   </div>
                   <div className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white cursor-pointer">
                     <span>GPT-5</span>
                     <ChevronDown size={12} />
                   </div>
                </div>
                <button 
                  onClick={onSend}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${inputValue ? 'bg-[#008060] hover:bg-[#006e52]' : 'bg-gray-700'}`}
                >
                  <ArrowRight size={14} className="text-white" />
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};


const FabricInteractiveHero = () => {
  const [position, setPosition] = useState({ x: -100, y: -20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [copilotPosition, setCopilotPosition] = useState({ x: 330, y: 20 });
  const [isCopilotDragging, setIsCopilotDragging] = useState(false);
  const [copilotDragStart, setCopilotDragStart] = useState({ x: 0, y: 0 });
  
  // Animation State
  const [copilotInput, setCopilotInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [notebookCells, setNotebookCells] = useState([]);
  const [isGlobalRunning, setIsGlobalRunning] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [activeWindow, setActiveWindow] = useState('copilot');

  const fullCode1 = `spark.sql("DROP TABLE IF EXISTS employee")
val df = spark.range(0, 100).select($"id".as("employee_table"))
df.write.mode("overwrite").saveAsTable("employee")
val res = spark.table("employee")
display(res)`;

  const fullCode2 = `df = spark.sql("SELECT * FROM employee WHERE id > 50")
display(df)`;

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      // Initial State
      if (!isMounted) return;
      setNotebookCells([]); // Start empty (only markdown header is static)
      setChatMessages([]);
      setCopilotInput('');
      setIsInteractive(false);
      setIsGlobalRunning(false);

      await wait(1500);

      // 1. Type Prompt
      const prompt = "Describe the data in this data set and what type of questions it can help me answer";
      for (let i = 0; i <= prompt.length; i++) {
        if (!isMounted) return;
        setCopilotInput(prompt.slice(0, i));
        await wait(30); // Typing speed
      }

      await wait(800);

      // 2. Send Prompt
      if (!isMounted) return;
      setCopilotInput('');
      setChatMessages([{ role: 'user', content: prompt }]);

      await wait(1000);

      // 3. Bot Response Start
      const introText = "I'll help you prepare a reliable dataset for demand and inventory analysis covering the last 3 years. Let me start by examining your current notebook to understand the context and then create a comprehensive dataset.";
      if (!isMounted) return;
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: introText, 
        tasks: [] 
      }]);

      await wait(1500);

      // 4. Task 1: Read Notebook
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = [{ label: 'Read', status: 'done', extra: 'Data Science Notebook' }];
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      await wait(1000);

      // 5. Task 2: Create Cell 1 (Loading)
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = [...lastMsg.tasks, { label: 'Create Cell-1', status: 'loading' }];
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      // Action: Add Cell 1 (Skeleton -> Typing)
      if (!isMounted) return;
      setNotebookCells([{ id: 1, code: '', status: 'skeleton' }]);
      
      await wait(2000); // Simulate generation time

      if (!isMounted) return;
      setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, status: 'typing' } : c));
      
      for (let i = 0; i <= fullCode1.length; i += 3) {
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: fullCode1.slice(0, i) } : c));
        await wait(10);
      }
      setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: fullCode1, status: 'complete' } : c));

      await wait(500);
      
      // Task 2 Done
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = lastMsg.tasks.map(t => t.label === 'Create Cell-1' ? { ...t, status: 'done' } : t);
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      await wait(1000);

      // 6. Task 3: Create Cell 2 (Loading)
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = [...lastMsg.tasks, { label: 'Create Cell-2', status: 'loading' }];
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      // Action: Add Cell 2 (Skeleton -> Typing)
      if (!isMounted) return;
      setNotebookCells(prev => [...prev, { id: 2, code: '', status: 'skeleton' }]);

      await wait(2000); // Simulate generation time

      if (!isMounted) return;
      setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, status: 'typing' } : c));

      for (let i = 0; i <= fullCode2.length; i += 3) {
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: fullCode2.slice(0, i) } : c));
        await wait(10);
      }
      setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: fullCode2, status: 'complete' } : c));

      await wait(500);

      // Task 3 Done
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = lastMsg.tasks.map(t => t.label === 'Create Cell-2' ? { ...t, status: 'done' } : t);
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      await wait(1000);

      // 7. Approval Request
      const approvalText = "I've added the cells you needed. Would you like me to run them now?";
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.finalContent = approvalText;
        lastMsg.type = 'approval';
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [restartKey]);

  const handleApprove = async (msgIndex) => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    setIsGlobalRunning(true);

    // 1. Update Chat: Remove Approval, Show Execution Plan
    setChatMessages(prev => {
      const newMsgs = [...prev];
      // Remove approval UI from previous message
      const prevMsg = { ...newMsgs[msgIndex] };
      delete prevMsg.type; 
      newMsgs[msgIndex] = prevMsg;
      
      // Add new "Executing" message
      return [...newMsgs, { 
        role: 'assistant', 
        content: "Running notebook cells...", 
        tasks: [
          { label: 'Execute Cell 1', status: 'loading' },
          { label: 'Execute Cell 2', status: 'pending' }
        ] 
      }];
    });

    // 2. Execute Cell 1
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, isRunning: true } : c));
    await wait(1500);
    
    // Cell 1 Output (DataFrame)
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { 
      ...c, 
      isRunning: false,
      output: {
        type: 'table',
        data: [
          { id: 101, name: 'John Doe', dept: 'Sales', salary: 85000, region: 'NA' },
          { id: 102, name: 'Jane Smith', dept: 'Eng', salary: 92000, region: 'EU' },
          { id: 103, name: 'Bob Johnson', dept: 'Sales', salary: 78000, region: 'NA' },
          { id: 104, name: 'Alice Brown', dept: 'HR', salary: 65000, region: 'APAC' },
          { id: 105, name: 'Charlie Wilson', dept: 'Eng', salary: 88000, region: 'EU' },
        ]
      } 
    } : c));

    // Update Task 1 Done, Start Task 2
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Execute Cell 1', status: 'done' },
        { label: 'Execute Cell 2', status: 'loading' }
      ];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });

    await wait(1000);

    // 3. Execute Cell 2
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, isRunning: true } : c));
    await wait(1500);

    // Cell 2 Output (Chart)
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { 
      ...c, 
      isRunning: false,
      output: { type: 'chart' } 
    } : c));

    // All Done
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Execute Cell 1', status: 'done' },
        { label: 'Execute Cell 2', status: 'done' }
      ];
      lastMsg.finalContent = "Execution complete. You can now see the dataframe and visualization above.";
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });
    
    setIsGlobalRunning(false);
    setIsInteractive(true);
  };

  const handleUserSend = async () => {
    if (!copilotInput.trim()) return;
    
    const userText = copilotInput;
    setCopilotInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userText }]);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    setChatMessages(prev => [...prev, { 
      role: 'assistant', 
      content: "Sorry, this is only a demo." 
    }]);
  };

  const handleMouseDown = (e) => {
    setActiveWindow('notebook');
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleCopilotMouseDown = (e) => {
    e.stopPropagation();
    setActiveWindow('copilot');
    setIsCopilotDragging(true);
    setCopilotDragStart({
      x: e.clientX - copilotPosition.x,
      y: e.clientY - copilotPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
    if (isCopilotDragging) {
      setCopilotPosition({
        x: e.clientX - copilotDragStart.x,
        y: e.clientY - copilotDragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsCopilotDragging(false);
  };

  useEffect(() => {
    if (isDragging || isCopilotDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, isCopilotDragging, copilotDragStart]);

  // Syntax highlighting helper
  const highlightCode = (codeStr) => {
    if (!codeStr) return null;
    return codeStr.split('\n').map((line, i) => {
      // Simple heuristic highlighting for the Scala/Spark code
      const keywords = ['val', 'spark', 'sql', 'select', 'write', 'mode', 'saveAsTable', 'table', 'display', 'FROM', 'WHERE', 'SELECT'];
      
      // Very basic tokenization for display purposes
      // We'll just highlight keywords and strings simply
      const parts = line.split(/(".*?")/g);
      
      return (
        <div key={i} className="flex">
           <span className="w-6 text-gray-600 text-right mr-4 select-none font-mono text-[10px] pt-0.5">{i + 1}</span>
           <span className="font-mono text-xs text-gray-300 whitespace-pre">
             {parts.map((part, idx) => {
               if (part.startsWith('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
               
               // Check for keywords in the part
               return part.split(/(\b)/).map((subPart, subIdx) => {
                 if (keywords.includes(subPart)) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                 if (['DROP', 'TABLE', 'IF', 'EXISTS'].includes(subPart)) return <span key={subIdx} className="text-[#c586c0]">{subPart}</span>;
                 return subPart;
               });
             })}
           </span>
        </div>
      );
    });
  };

  return (
    <div className="mt-8 relative h-[750px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src="/cover-background.png" alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Restart Button */}
      <button 
        onClick={() => setRestartKey(prev => prev + 1)}
        className="absolute bottom-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-colors z-0"
        title="Restart Animation"
      >
        <RotateCcw size={16} />
      </button>

      {/* Draggable Notebook Window */}
      <div 
        className="absolute left-1/2 top-1/2 w-[900px] rounded-xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
        style={{ 
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          zIndex: activeWindow === 'notebook' ? 20 : 10,
          height: '600px'
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px]">
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-3 gap-1 opacity-70 hover:opacity-100">
               {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
            </div>
            <div className="flex gap-4 font-medium text-gray-400">
              <span className="hover:text-white transition-colors">Home</span>
              <span className="hover:text-white transition-colors">Edit</span>
              <span className="hover:text-white transition-colors">Run</span>
              <span className="hover:text-white transition-colors">AI tools</span>
              <span className="hover:text-white transition-colors">View</span>
            </div>
          </div>
          <div className="flex items-center gap-0">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <MessageSquare size={14} />
                  <span>Comments</span>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Clock size={14} />
                  <span>History</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 ml-2 bg-[#008060] text-white rounded hover:bg-[#006e52] transition-colors shadow-lg shadow-green-900/20 cursor-pointer">
                  <Share size={14} />
                  <span>Share</span>
              </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px] overflow-x-auto">
          <button className={`flex items-center gap-2 px-4 py-1.5 text-white rounded transition-colors shadow-lg ${isGlobalRunning ? 'bg-[#006e52] cursor-wait' : 'bg-[#008060] hover:bg-[#006e52] shadow-green-900/20'}`}>
              {isGlobalRunning ? (
                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Play size={12} fill="currentColor" />
              )}
              <span className="font-semibold">{isGlobalRunning ? 'Running...' : 'Run'}</span>
          </button>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Box size={14} />
              <span>PySpark (Python)</span>
              <ChevronDown size={12} />
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white">
              <span className="text-gray-500">Environment</span>
              <div className="px-2 py-0.5 bg-[#2d2d2d] border border-white/10 rounded flex items-center gap-2">
                  <span>Workspace default</span>
                  <ChevronDown size={12} />
              </div>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white">
              <img src="/Copilot.png" alt="Copilot" className="w-4 h-4 rounded-sm" />
              <span>Copilot</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#18181b] relative custom-scrollbar">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060] opacity-50"></div>
          
          <h1 className="text-lg font-medium text-white mb-2">Data Science Notebook</h1>
          <p className="text-gray-400 text-xs mb-8">This is a data science notebook on Fabric.</p>

          {/* Dynamic Cells */}
          {notebookCells.map((cell, idx) => (
            <div key={cell.id} className="mb-4 rounded-lg border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-sm hover:border-white/20 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-4 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060]"></div>
                    <div className="pl-2">
                        {cell.status === 'skeleton' ? (
                          <div className="animate-pulse space-y-2 py-1">
                            <div className="h-2 bg-white/10 rounded w-1/3"></div>
                            <div className="h-2 bg-white/10 rounded w-2/3"></div>
                            <div className="h-2 bg-white/10 rounded w-1/2"></div>
                          </div>
                        ) : (
                          highlightCode(cell.code)
                        )}
                    </div>
                </div>
                <div className="px-4 py-1.5 bg-[#252526] border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                    <span>{cell.isRunning ? 'Running...' : 'Press shift + enter to run'}</span>
                    <div className="flex items-center gap-1 hover:text-gray-300">
                        <span>PySpark (Python)</span>
                        <ChevronDown size={10} />
                    </div>
                </div>

                {/* Output Area */}
                {(cell.output || cell.isRunning) && (
                  <div className="border-t border-white/5 bg-[#18181b] p-4 animate-in fade-in slide-in-from-top-2">
                    {cell.isRunning ? (
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Executing...</span>
                      </div>
                    ) : cell.output?.type === 'table' && cell.output.data ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[10px] text-gray-300">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="py-1 px-2 font-medium text-gray-500">id</th>
                              <th className="py-1 px-2 font-medium text-gray-500">name</th>
                              <th className="py-1 px-2 font-medium text-gray-500">dept</th>
                              <th className="py-1 px-2 font-medium text-gray-500">salary</th>
                              <th className="py-1 px-2 font-medium text-gray-500">region</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cell.output.data.map((row, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                <td className="py-1 px-2">{row.id}</td>
                                <td className="py-1 px-2">{row.name}</td>
                                <td className="py-1 px-2">{row.dept}</td>
                                <td className="py-1 px-2">${row.salary.toLocaleString()}</td>
                                <td className="py-1 px-2">{row.region}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="mt-2 text-[9px] text-gray-500">Showing 5 of 100 rows</div>
                      </div>
                    ) : cell.output?.type === 'chart' ? (
                      <div className="h-48 relative border-l border-b border-white/10 m-2">
                        {/* Scatter Plot Points */}
                        {[
                          {x: 10, y: 20}, {x: 25, y: 45}, {x: 40, y: 30}, {x: 55, y: 70}, 
                          {x: 70, y: 55}, {x: 85, y: 85}, {x: 15, y: 35}, {x: 30, y: 60},
                          {x: 50, y: 40}, {x: 65, y: 75}, {x: 80, y: 65}, {x: 90, y: 90},
                          {x: 20, y: 25}, {x: 35, y: 50}, {x: 60, y: 45}, {x: 75, y: 80}
                        ].map((pt, i) => (
                          <div 
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-[#008060] hover:bg-[#006e52] hover:scale-150 transition-all duration-300 cursor-pointer shadow-lg shadow-green-500/20"
                            style={{ 
                              left: `${pt.x}%`, 
                              bottom: `${pt.y}%`,
                              opacity: 0.8
                            }}
                          ></div>
                        ))}
                        {/* Axis Labels */}
                        <div className="absolute -left-6 top-1/2 -rotate-90 text-[9px] text-gray-500">Salary</div>
                        <div className="absolute bottom-[-20px] left-1/2 text-[9px] text-gray-500">Experience (Years)</div>
                      </div>
                    ) : null}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>

      {/* Draggable Mini Copilot */}
      <MiniCopilot 
        position={copilotPosition} 
        onMouseDown={handleCopilotMouseDown}
        inputValue={copilotInput}
        messages={chatMessages}
        onApprove={handleApprove}
        onInput={isInteractive ? setCopilotInput : undefined}
        onSend={handleUserSend}
        zIndex={activeWindow === 'copilot' ? 20 : 10}
      />
    </div>
  );
};

const ColabComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Comment Window State
  const [commentPos, setCommentPos] = useState({ x: 350, y: -100 }); // Relative to center
  const [isCommentDragging, setIsCommentDragging] = useState(false);
  const [commentDragStart, setCommentDragStart] = useState({ x: 0, y: 0 });

  const [notebookCells, setNotebookCells] = useState([]);
  const [restartKey, setRestartKey] = useState(0);
  const [activeWindow, setActiveWindow] = useState('notebook');
  
  // Laura's Cursor State
  const [lauraCursor, setLauraCursor] = useState({ x: 800, y: 400, visible: false });
  const [isRunButtonHovered, setIsRunButtonHovered] = useState(false);
  const [showErrorTooltip, setShowErrorTooltip] = useState(false);
  const [isNotebookRunning, setIsNotebookRunning] = useState(false);

  // Comment & Collaboration State
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [commentThread, setCommentThread] = useState([]);
  const [hasUnread, setHasUnread] = useState(false);
  const [isCollaborationTriggered, setIsCollaborationTriggered] = useState(false);
  const [isMessageReadyToSend, setIsMessageReadyToSend] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showSuccessTooltip, setShowSuccessTooltip] = useState(false);
  const [isFinalPhase, setIsFinalPhase] = useState(false);

  // Animation Constants
  const johnColor = "#3b82f6"; // Blue
  const lauraColor = "#ec4899"; // Pink

  const cell1Code = `df = spark.read.table("lakehouse.sales_data")
display(df)`;

  const cell2Code = `import plotly.express as px
fig = px.line(df, x="date", y="sales")
fig.show()`;

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      if (!isMounted) return;
      setNotebookCells([]);
      setLauraCursor({ x: 800, y: 400, visible: false });
      setIsRunButtonHovered(false);
      setShowErrorTooltip(false);
      setShowComments(false);
      setCommentInput('');
      setCommentThread([]);
      setHasUnread(false);
      setIsCollaborationTriggered(false);
      setIsNotebookRunning(false);
      setActiveWindow('notebook');
      setIsFixed(false);
      setShowSuccessTooltip(false);
      setIsFinalPhase(false);

      await wait(1000);

      // 1. John creates Cell 1
      if (!isMounted) return;
      setNotebookCells([{ 
        id: 1, 
        code: '', 
        status: 'typing', 
        user: { name: 'John', color: johnColor } 
      }]);

      await wait(500);

      // 2. Laura creates Cell 2 (Simultaneous start)
      if (!isMounted) return;
      setNotebookCells(prev => [
        ...prev, 
        { 
          id: 2, 
          code: '', 
          status: 'typing', 
          user: { name: 'Laura', color: lauraColor } 
        }
      ]);
      
      // Don't show Laura's cursor yet

      // 3. Simulate Simultaneous Typing
      const typeCell1 = async () => {
        for (let i = 0; i <= cell1Code.length; i++) {
          if (!isMounted) return;
          setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: cell1Code.slice(0, i) } : c));
          await wait(30 + Math.random() * 20); // Random typing speed
        }
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, status: 'idle' } : c));
      };

      const typeCell2 = async () => {
        await wait(800); // Laura starts a bit later
        for (let i = 0; i <= cell2Code.length; i++) {
          if (!isMounted) return;
          setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: cell2Code.slice(0, i) } : c));
          await wait(25 + Math.random() * 20);
        }
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, status: 'idle' } : c));
      };

      await Promise.all([typeCell1(), typeCell2()]);

      await wait(500);

      // 4. Laura moves cursor to Run All button
      // Start from Cell 2 (bottom of notebook)
      // End at Run All button (top left of notebook)
      // Coordinates are relative to Notebook Window now
      const startPos = { x: 400, y: 450 }; // Approx Cell 2
      const endPos = { x: 50, y: 50 }; // Approx Run All button
      const steps = 30;
      
      setLauraCursor({ x: startPos.x, y: startPos.y, visible: true });

      for (let i = 0; i <= steps; i++) {
        if (!isMounted) return;
        const t = i / steps;
        const ease = 1 - Math.pow(1 - t, 3);
        setLauraCursor({
          x: startPos.x + (endPos.x - startPos.x) * ease,
          y: startPos.y + (endPos.y - startPos.y) * ease,
          visible: true
        });
        await wait(20);
      }

      setIsRunButtonHovered(true);
      await wait(300);

      // 5. Run the notebook
      if (!isMounted) return;
      setIsNotebookRunning(true);
      
      // Run Cell 1 first
      setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, isRunning: true } : c));
      
      await wait(200);
      setIsRunButtonHovered(false);
      setLauraCursor(prev => ({ ...prev, visible: false }));

      await wait(1500);

      // 6. Error in Cell 1
      if (!isMounted) return;
      setIsNotebookRunning(false); // Stop global running state on error
      setNotebookCells(prev => prev.map(c => {
        if (c.id === 1) {
          return {
            ...c,
            isRunning: false,
            output: {
              type: 'error',
              message: "Error: Table 'lakehouse.sales_data' not found."
            }
          };
        }
        // Cell 2 never runs because Cell 1 failed
        return c;
      }));

      await wait(500);

      // 7. Show Tooltip on Cell 1 Comment
      setShowErrorTooltip(true);

      // Animation pauses here, waiting for user interaction
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [restartKey]);

  const handleRunAll = async () => {
    if (isNotebookRunning) return;
    
    if (isFixed) {
        setIsNotebookRunning(true);
        setNotebookCells(prev => prev.map(c => ({ ...c, isRunning: true, output: null })));
        
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await wait(1500);
        
        // Cell 1 Success (Table)
        setNotebookCells(prev => prev.map(c => {
            if (c.id === 1) {
                return {
                    ...c,
                    isRunning: false,
                    output: {
                        type: 'table',
                        data: {
                            headers: ["date", "sales", "region"],
                            rows: [
                                ["2025-01-01", "1200", "US"],
                                ["2025-01-02", "1350", "US"],
                                ["2025-01-03", "1100", "US"],
                                ["2025-01-04", "1500", "US"],
                                ["2025-01-05", "1600", "US"]
                            ]
                        }
                    }
                };
            }
            return c;
        }));

        await wait(1000);

        // Cell 2 Success (Chart)
        setNotebookCells(prev => prev.map(c => {
            if (c.id === 2) {
                return {
                    ...c,
                    isRunning: false,
                    output: {
                        type: 'chart',
                        data: [1200, 1350, 1100, 1500, 1600]
                    }
                };
            }
            return c;
        }));
        
        setIsNotebookRunning(false);
        setShowSuccessTooltip(true);
    }
  };

  const handleCommentClick = async () => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    if (showSuccessTooltip) {
        setShowSuccessTooltip(false);
        setShowComments(true);
        setActiveWindow('comments');
        setIsFinalPhase(true);
        
        const msg = "Thanks John! It worked!";
        for (let i = 0; i <= msg.length; i++) {
            setCommentInput(msg.slice(0, i));
            await wait(30 + Math.random() * 30);
        }
        setIsMessageReadyToSend(true);
        return;
    }

    if (isCollaborationTriggered) return;
    setIsCollaborationTriggered(true);
    setShowErrorTooltip(false);
    setShowComments(true);
    setActiveWindow('comments');

    // 9. Laura types comment
    const msg = "Hi @John, could you check what’s wrong?";
    for (let i = 0; i <= msg.length; i++) {
      setCommentInput(msg.slice(0, i));
      await wait(30 + Math.random() * 30);
    }
    
    setIsMessageReadyToSend(true);
  };

  const handleSendMessage = async () => {
    if (!isMessageReadyToSend) return;
    
    setIsMessageReadyToSend(false);
    const msg = commentInput;
    setCommentInput('');
    setCommentThread(prev => [...prev, { user: 'Laura', text: msg, time: 'Just now' }]);

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    if (isFinalPhase) {
        await wait(2000);
        setCommentThread(prev => [...prev, { 
            user: 'John', 
            text: "You're welcome!", 
            time: 'Just now' 
        }]);

        await wait(1000);
        // Simulate Laura adding a heart reaction
        setCommentThread(prev => prev.map((msg, idx) => {
            if (idx === prev.length - 1) { // The last message (John's "You're welcome!")
                return { ...msg, reactions: ['❤️'] };
            }
            return msg;
        }));
        return;
    }

    // 10. Wait for John's Reply
    await wait(2000);
    setCommentThread(prev => [...prev, { 
      user: 'John', 
      text: "I see. I recently changed the table name in my lakehouse. Let me fix the issue for you!", 
      time: 'Just now' 
    }]);

    await wait(2000);
    // Don't close comments, just switch focus
    setActiveWindow('notebook');

    // 11. John Fixes Code
    // Show John's cursor at Cell 1
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, status: 'typing', user: { name: 'John', color: johnColor } } : c));

    await wait(500);

    const prefix = `df = spark.read.table("lakehouse.`;
    const suffix = `")\ndisplay(df)`;
    
    // Delete "sales_data"
    const oldTable = "sales_data";
    for (let i = 0; i < oldTable.length; i++) {
       const newCode = prefix + oldTable.slice(0, oldTable.length - 1 - i) + suffix;
       setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: newCode } : c));
       await wait(50);
    }

    // Type "sales_data_v2"
    const newTable = "sales_data_v2";
    for (let i = 0; i <= newTable.length; i++) {
       const newCode = prefix + newTable.slice(0, i) + suffix;
       setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: newCode } : c));
       await wait(50);
    }

    // Add comment on new line
    const comment = "# correct the lakehouse table name";
    const line1 = prefix + newTable + '")';
    const line2 = '\ndisplay(df)';
    
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: line1 + '\n' + line2 } : c));
    await wait(100);

    for (let i = 0; i <= comment.length; i++) {
       const newCode = line1 + '\n' + comment.slice(0, i) + line2;
       setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: newCode } : c));
       await wait(30);
    }

    await wait(500);
    
    // 12. Finish
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, status: 'idle' } : c));
    setHasUnread(true);
    setIsFixed(true);
    
    // Switch back to comments and show final reply
    setActiveWindow('comments');
    await wait(500);
    setCommentThread(prev => [...prev, { 
      user: 'John', 
      text: "Ok, done! Could you try it again?", 
      time: 'Just now' 
    }]);
  };

  const handleMouseDown = (e) => {
    setActiveWindow('notebook');
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
    if (isCommentDragging) {
      setCommentPos({
        x: e.clientX - commentDragStart.x,
        y: e.clientY - commentDragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsCommentDragging(false);
  };

  const handleCommentMouseDown = (e) => {
    setActiveWindow('comments');
    setIsCommentDragging(true);
    setCommentDragStart({
      x: e.clientX - commentPos.x,
      y: e.clientY - commentPos.y
    });
    e.stopPropagation(); // Prevent triggering notebook drag if overlapping
  };

  useEffect(() => {
    if (isDragging || isCommentDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, isCommentDragging, commentDragStart]);

  // Syntax highlighting helper
  const highlightCode = (codeStr) => {
    if (!codeStr) return null;
    return codeStr.split('\n').map((line, i) => {
      const keywords = ['val', 'spark', 'read', 'table', 'display', 'import', 'as', 'from'];
      const parts = line.split(/(".*?")/g);
      
      return (
        <div key={i} className="flex">
           <span className="w-6 text-gray-600 text-right mr-4 select-none font-mono text-[10px] pt-0.5">{i + 1}</span>
           <span className="font-mono text-xs text-gray-300 whitespace-pre">
             {parts.map((part, idx) => {
               if (part.startsWith('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
               
               // Check for comment in non-string part
               if (part.includes('#')) {
                  const [code, ...commentParts] = part.split('#');
                  const comment = '#' + commentParts.join('#');
                  return (
                    <span key={idx}>
                      {code.split(/(\b)/).map((subPart, subIdx) => {
                        if (keywords.includes(subPart)) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                        return subPart;
                      })}
                      <span className="text-[#6a9955]">{comment}</span>
                    </span>
                  );
               }

               return part.split(/(\b)/).map((subPart, subIdx) => {
                 if (keywords.includes(subPart)) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                 return subPart;
               });
             })}
           </span>
        </div>
      );
    });
  };

  return (
    <div className="mt-8 relative h-[750px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src="/demo-background.png" alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Restart Button */}
      <button 
        onClick={() => setRestartKey(prev => prev + 1)}
        className="absolute bottom-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-colors z-0"
        title="Restart Animation"
      >
        <RotateCcw size={16} />
      </button>

      {/* Draggable Notebook Window */}
      <div 
        className="absolute left-1/2 top-1/2 w-[900px] rounded-xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
        style={{ 
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          zIndex: activeWindow === 'notebook' ? 20 : 10,
          height: '600px'
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px]">
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-3 gap-1 opacity-70 hover:opacity-100">
               {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
            </div>
            <div className="flex gap-4 font-medium text-gray-400">
              <span className="hover:text-white transition-colors">Home</span>
              <span className="hover:text-white transition-colors">Edit</span>
              <span className="hover:text-white transition-colors">Run</span>
              <span className="hover:text-white transition-colors">AI tools</span>
              <span className="hover:text-white transition-colors">View</span>
            </div>
          </div>
          <div className="flex items-center gap-0">
              {/* Active Users Indicators */}
              <div className="flex -space-x-2 mr-4">
                 <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-[#202020] flex items-center justify-center text-[10px] font-bold text-white" title="John">J</div>
                 <div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-[#202020] flex items-center justify-center text-[10px] font-bold text-white" title="Laura">L</div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 ml-2 bg-[#008060] text-white rounded hover:bg-[#006e52] transition-colors shadow-lg shadow-green-900/20 cursor-pointer">
                  <Share size={14} />
                  <span>Share</span>
              </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px] overflow-x-auto relative">
          <button 
            onClick={handleRunAll}
            className={`flex items-center gap-2 px-4 py-1.5 text-white rounded transition-all duration-200 shadow-lg ${isRunButtonHovered || isNotebookRunning ? 'bg-[#006e52] scale-95' : 'bg-[#008060] hover:bg-[#006e52]'} shadow-green-900/20`}
          >
              {isNotebookRunning ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-semibold">Running...</span>
                </>
              ) : (
                <>
                  <Play size={12} fill="currentColor" />
                  <span className="font-semibold">Run all</span>
                </>
              )}
          </button>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Box size={14} />
              <span>PySpark (Python)</span>
              <ChevronDown size={12} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#18181b] relative custom-scrollbar">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060] opacity-50"></div>
          
          <h1 className="text-lg font-medium text-white mb-2">Real-time Collaboration Demo</h1>
          <p className="text-gray-400 text-xs mb-8">John and Laura are editing this notebook together.</p>

          {/* Dynamic Cells */}
          {notebookCells.map((cell, idx) => (
            <div key={cell.id} className={`mb-4 rounded-lg border ${cell.status === 'typing' ? `border-[${cell.user.color}]` : 'border-white/10'} bg-[#1e1e1e] overflow-hidden shadow-sm transition-all duration-300 group/cell`}>
                {/* User Badge if typing */}
                {cell.status === 'typing' && (
                  <div 
                    className="absolute -mt-3 ml-4 px-2 py-0.5 rounded-t text-[9px] font-bold text-white z-10"
                    style={{ backgroundColor: cell.user.color }}
                  >
                    {cell.user.name} is typing...
                  </div>
                )}

                {/* Cell Toolbar (Top Right) */}
                <div className={`absolute right-4 mt-2 flex items-center gap-1 bg-[#252526] rounded-md border border-white/10 p-1 transition-opacity z-20 ${showErrorTooltip && cell.id === 1 ? 'opacity-100' : (isCollaborationTriggered && cell.id === 1 ? 'opacity-100' : 'opacity-0 group-hover/cell:opacity-100')}`}>
                    <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded" title="Clone">
                        <Copy size={12} />
                    </button>
                    <div className="relative">
                        <button 
                            className={`p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded relative ${(showErrorTooltip || showSuccessTooltip) && cell.id === 1 ? 'animate-pulse text-white bg-white/10' : ''}`} 
                            title="Comment"
                            onClick={() => {
                                if (cell.id === 1) {
                                    if (showErrorTooltip || showSuccessTooltip) {
                                        handleCommentClick();
                                    } else if (isCollaborationTriggered) {
                                        setShowComments(true);
                                        setActiveWindow('comments');
                                    }
                                }
                            }}
                        >
                            <MessageSquare size={12} />
                            {hasUnread && cell.id === 1 && (
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#252526]"></span>
                            )}
                        </button>
                        {/* Tooltip for Cell 1 Error or Success */}
                        {(showErrorTooltip || showSuccessTooltip) && cell.id === 1 && (
                            <div className="absolute bottom-full right-0 mb-2 w-auto whitespace-nowrap bg-[#252526] border border-white/10 text-white text-[10px] px-3 py-2 rounded shadow-xl animate-in fade-in slide-in-from-bottom-2 z-50">
                                <div className="font-semibold">{showSuccessTooltip ? 'Say thanks to John!' : 'Ask John for fixing the issue'}</div>
                                <div className="absolute bottom-[-5px] right-3 w-2.5 h-2.5 bg-[#252526] border-b border-r border-white/10 rotate-45"></div>
                            </div>
                        )}
                    </div>
                    <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded" title="More actions">
                        <MoreHorizontal size={12} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/10 rounded" title="Delete">
                        <Trash2 size={12} />
                    </button>
                </div>

                <div className="p-4 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060]"></div>
                    <div className="pl-2">
                        {highlightCode(cell.code)}
                        {/* Cursor */}
                        {cell.status === 'typing' && (
                           <span className="inline-block w-0.5 h-4 align-middle animate-pulse ml-0.5" style={{ backgroundColor: cell.user.color }}></span>
                        )}
                    </div>
                </div>
                <div className="px-4 py-1.5 bg-[#252526] border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                    <span>{cell.isRunning ? 'Running...' : 'Press shift + enter to run'}</span>
                    <div className="flex items-center gap-1 hover:text-gray-300">
                        <span>PySpark (Python)</span>
                        <ChevronDown size={10} />
                    </div>
                </div>

                {/* Output Area */}
                {(cell.output || cell.isRunning) && (
                  <div className="border-t border-white/5 bg-[#18181b] p-4 animate-in fade-in slide-in-from-top-2">
                    {cell.isRunning ? (
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Executing...</span>
                      </div>
                    ) : cell.output?.type === 'error' ? (
                      <div className="text-red-400 font-mono text-xs whitespace-pre-wrap bg-red-500/10 p-3 rounded border border-red-500/20">
                        {cell.output.message}
                      </div>
                    ) : cell.output?.type === 'table' ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-gray-400">
                          <thead className="text-gray-200 bg-white/5">
                            <tr>
                              {cell.output.data.headers.map((h, i) => <th key={i} className="p-2">{h}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {cell.output.data.rows.map((row, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                {row.map((cell, j) => <td key={j} className="p-2">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : cell.output?.type === 'chart' ? (
                      <div className="h-40 w-full bg-[#1e1e1e] rounded p-2 flex items-end gap-1">
                         {cell.output.data.map((val, i) => (
                            <div key={i} className="flex-1 bg-blue-500/50 hover:bg-blue-500 transition-all rounded-t" style={{ height: `${(val / 2000) * 100}%` }}></div>
                         ))}
                      </div>
                    ) : null}
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Laura's Cursor Overlay (Inside Notebook) */}
        {lauraCursor.visible && (
            <div 
                className="absolute pointer-events-none transition-all duration-75 z-50"
                style={{ 
                    left: lauraCursor.x, 
                    top: lauraCursor.y 
                }}
            >
                <MousePointer2 
                    size={20} 
                    className="text-pink-500 fill-pink-500" 
                    style={{ transform: 'rotate(-15deg)' }}
                />
                <div className="ml-4 px-2 py-0.5 bg-pink-500 text-white text-[9px] font-bold rounded-full whitespace-nowrap">
                    Laura
                </div>
            </div>
        )}
      </div>

      {/* Draggable Comment Window */}
      {showComments && (
        <div 
          className="absolute left-1/2 top-1/2 w-80 bg-[#252526] border border-white/10 rounded-lg shadow-2xl flex flex-col animate-in fade-in slide-in-from-right-4 cursor-grab active:cursor-grabbing"
          style={{ 
            transform: `translate(calc(-50% + ${commentPos.x}px), calc(-50% + ${commentPos.y}px))`,
            zIndex: activeWindow === 'comments' ? 20 : 10
          }}
          onMouseDown={handleCommentMouseDown}
        >
           <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-white font-semibold text-sm">Comments</h3>
              <div className="flex items-center gap-2">
                 <button className="flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white transition-colors">
                    <MessageSquare size={10} />
                    <span>New</span>
                 </button>
                 <button onClick={() => setShowComments(false)} className="text-gray-400 hover:text-white">
                    <X size={14} />
                 </button>
              </div>
           </div>
           <div className="p-4 space-y-4 min-h-[300px] cursor-default" onMouseDown={(e) => e.stopPropagation()}>
              {commentThread.map((msg, i) => (
                 <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-bottom-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${msg.user === 'Laura' ? 'bg-pink-500' : 'bg-blue-500'}`}>
                       {msg.user[0]}
                    </div>
                    <div className="flex-1">
                       <div className="flex items-baseline justify-between mb-1">
                          <span className="text-white text-xs font-semibold">{msg.user}</span>
                          <span className="text-gray-500 text-[10px]">{msg.time}</span>
                       </div>
                       <p className="text-gray-300 text-xs leading-relaxed">{msg.text}</p>
                       {msg.reactions && (
                           <div className="flex gap-1 mt-1">
                               {msg.reactions.map((emoji, rIdx) => (
                                   <span key={rIdx} className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] animate-in zoom-in duration-300">{emoji} 1</span>
                               ))}
                           </div>
                       )}
                    </div>
                 </div>
              ))}
              {/* Typing Indicator or Input */}
              {/* Removed preview from here, moved to input area */}
           </div>
           <div className="p-3 border-t border-white/10 cursor-default flex gap-2 items-center" onMouseDown={(e) => e.stopPropagation()}>
              <div className="flex-1 bg-[#1e1e1e] border border-white/10 rounded p-2 text-xs text-gray-300 min-h-[32px] flex items-center">
                 {commentInput || <span className="text-gray-500">@mention someone or reply</span>}
                 {commentInput && <span className="animate-pulse">|</span>}
              </div>
              <button 
                onClick={handleSendMessage}
                disabled={!isMessageReadyToSend}
                className={`p-2 rounded transition-colors ${isMessageReadyToSend ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white/5 text-gray-600 cursor-not-allowed'}`}
              >
                <Send size={14} />
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

const CopComponent = () => {
  const [notebookCells, setNotebookCells] = useState([]);
  const [restartKey, setRestartKey] = useState(0);
  const [cursor, setCursor] = useState({ x: 800, y: 400, visible: false });
  const [isRunButtonHovered, setIsRunButtonHovered] = useState(false);
  const [isNotebookRunning, setIsNotebookRunning] = useState(false);
  const [clickEffect, setClickEffect] = useState({ x: 0, y: 0, visible: false });
  
  // Copilot Feature State
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDiff, setShowDiff] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Animation Constants
  const userColor = "#3b82f6"; // Blue for the user

  const markdownContent = "### Sales Distribution Analysis\nVisualize the sales distribution across different months using a pie chart.";
  
  const codeToType = `import matplotlib.pyplot as plt

data = [1200, 1350, 1100, 1500, 1600]
labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

plt.pie(data, labels=labels, autopct='%1.1f%%'
plt.title('Monthly Sales Distribution')
plt.show()`;

  const fixedCode = `import matplotlib.pyplot as plt

data = [1200, 1350, 1100, 1500, 1600]
labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

plt.pie(data, labels=labels, autopct='%1.1f%%')
plt.title('Monthly Sales Distribution')
plt.show()`;

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      if (!isMounted) return;
      // Reset State
      setNotebookCells([]);
      setCursor({ x: 800, y: 400, visible: false });
      setIsRunButtonHovered(false);
      setIsNotebookRunning(false);
      setShowTooltip(false);
      setIsAnalyzing(false);
      setShowDiff(false);
      setIsFixed(false);

      await wait(1000);

      // 1. Add Markdown Cell (Static for this demo)
      if (!isMounted) return;
      setNotebookCells([{
        id: 'md-1',
        type: 'markdown',
        content: markdownContent,
        status: 'idle'
      }]);

      await wait(500);

      // 2. Add Code Cell
      if (!isMounted) return;
      setNotebookCells(prev => [...prev, {
        id: 'code-1',
        type: 'code',
        code: '',
        status: 'typing',
        user: { name: 'You', color: userColor }
      }]);

      await wait(500);

      // 3. Simulate Typing
      for (let i = 0; i <= codeToType.length; i++) {
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { ...c, code: codeToType.slice(0, i) } : c));
        await wait(15 + Math.random() * 10); // Fast typing
      }
      
      if (!isMounted) return;
      setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { ...c, status: 'idle' } : c));

      await wait(500);

      // 4. Move Cursor to Run All
      const startPos = { x: 400, y: 500 }; // Approx code cell position
      const endPos = { x: 50, y: 50 }; // Run All button position
      const steps = 40;
      
      setCursor({ x: startPos.x, y: startPos.y, visible: true });

      for (let i = 0; i <= steps; i++) {
        if (!isMounted) return;
        const t = i / steps;
        const ease = 1 - Math.pow(1 - t, 3); // Cubic ease out
        setCursor({
          x: startPos.x + (endPos.x - startPos.x) * ease,
          y: startPos.y + (endPos.y - startPos.y) * ease,
          visible: true
        });
        await wait(15);
      }

      // 5. Hover and Click
      setIsRunButtonHovered(true);
      await wait(200);
      // Click effect (scale down handled by CSS usually, but we can just wait)
      await wait(100);
      
      // 6. Run
      if (!isMounted) return;
      setIsNotebookRunning(true);
      setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { ...c, isRunning: true } : c));
      
      // Hide cursor
      setCursor(prev => ({ ...prev, visible: false }));
      setIsRunButtonHovered(false);

      await wait(1500);

      // 7. Show Error
      if (!isMounted) return;
      setIsNotebookRunning(false);
      setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { 
        ...c, 
        isRunning: false,
        output: {
          type: 'error',
          message: "SyntaxError: '(' was never closed."
        }
      } : c));

      await wait(500);
      if (!isMounted) return;
      setShowTooltip(true);

    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [restartKey]);

  const handleFixWithCopilot = async () => {
    setShowTooltip(false);
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setShowDiff(true);
  };

  const handleAccept = () => {
    setShowDiff(false);
    setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { ...c, code: fixedCode } : c));
    setIsFixed(true);
  };

  const handleReject = () => {
    setShowDiff(false);
  };

  const handleCellRun = async () => {
    if (isFixed) {
        setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { ...c, isRunning: true, output: null } : c));
        await new Promise(resolve => setTimeout(resolve, 1500));
        setNotebookCells(prev => prev.map(c => c.id === 'code-1' ? { 
            ...c, 
            isRunning: false, 
            output: {
                type: 'chart',
                data: [1200, 1350, 1100, 1500, 1600]
            }
        } : c));
    }
  };

  // Syntax highlighting helper (simplified for this demo)
  const highlightCode = (codeStr, isDiff = false, diffType = null) => {
    if (!codeStr) return null;
    return codeStr.split('\n').map((line, i) => {
      const keywords = ['import', 'as', 'from', 'def', 'return', 'if', 'else', 'for', 'in'];
      const parts = line.split(/('.*?'|".*?")/g);
      
      // Diff styling
      let lineStyle = "flex";
      if (isDiff) {
          if (diffType === 'original' && i === 5) {
              lineStyle += " bg-red-500/20";
          } else if (diffType === 'fixed' && i === 5) {
              lineStyle += " bg-green-500/20";
          }
      }

      return (
        <div key={i} className={lineStyle}>
           <span className="w-6 text-gray-600 text-right mr-4 select-none font-mono text-[10px] pt-0.5">{i + 1}</span>
           <span className="font-mono text-xs text-gray-300 whitespace-pre">
             {parts.map((part, idx) => {
               if (part.startsWith("'") || part.startsWith('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
               
               if (part.includes('#')) {
                  const [code, ...commentParts] = part.split('#');
                  const comment = '#' + commentParts.join('#');
                  return (
                    <span key={idx}>
                      {code.split(/(\b)/).map((subPart, subIdx) => {
                        if (keywords.includes(subPart)) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                        return subPart;
                      })}
                      <span className="text-[#6a9955]">{comment}</span>
                    </span>
                  );
               }

               return part.split(/(\b)/).map((subPart, subIdx) => {
                 if (keywords.includes(subPart)) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                 return subPart;
               });
             })}
           </span>
        </div>
      );
    });
  };

  return (
    <div className="mt-8 relative h-[750px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group bg-[#18181b]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src="/cover-background-3.png" alt="Background" className="w-full h-full object-cover opacity-30" />
      </div>

      {/* Restart Button */}
      <button 
        onClick={() => setRestartKey(prev => prev + 1)}
        className="absolute bottom-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-colors z-10"
        title="Restart Animation"
      >
        <RotateCcw size={16} />
      </button>

      {/* Notebook Window */}
      <div 
        className="absolute left-1/2 top-1/2 w-[900px] rounded-xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 flex flex-col"
        style={{ 
          transform: 'translate(-50%, -50%)',
          height: '600px'
        }}
      >
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px]">
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-3 gap-1 opacity-70">
               {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
            </div>
            <div className="flex gap-4 font-medium text-gray-400">
              <span>Home</span>
              <span>Edit</span>
              <span>Run</span>
              <span>AI tools</span>
              <span>View</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">Y</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-4 px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px]">
          <button 
            onClick={handleCellRun}
            className={`flex items-center gap-2 px-4 py-1.5 text-white rounded transition-all duration-200 shadow-lg ${isRunButtonHovered || isNotebookRunning ? 'bg-[#006e52] scale-95' : 'bg-[#008060]'} shadow-green-900/20 ${isFixed ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
          >
              {isNotebookRunning ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-semibold">Running...</span>
                </>
              ) : (
                <>
                  <Play size={12} fill="currentColor" />
                  <span className="font-semibold">Run all</span>
                </>
              )}
          </button>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-2 text-gray-300">
              <Box size={14} />
              <span>Python (PySpark)</span>
              <ChevronDown size={12} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#18181b] relative custom-scrollbar">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060] opacity-50"></div>
          
          {/* Cells */}
          {notebookCells.map((cell) => (
            <div key={cell.id} className="mb-6 group/cell">
                {cell.type === 'markdown' ? (
                    <div className="pl-4 border-l-2 border-transparent hover:border-white/20 transition-colors">
                        <div className="prose prose-invert prose-sm max-w-none">
                            <h3 className="text-lg font-medium text-white mb-1">Sales Distribution Analysis</h3>
                            <p className="text-gray-400 text-xs">Visualize the sales distribution across different months using a pie chart.</p>
                        </div>
                    </div>
                ) : (
                    <div className={`rounded-lg border ${cell.status === 'typing' ? 'border-blue-500/50' : 'border-white/10'} bg-[#1e1e1e] overflow-hidden shadow-sm transition-all duration-300`}>
                        {/* Cell Header */}
                        <div className="px-4 py-1.5 bg-[#252526] border-b border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                            <button 
                                onClick={handleCellRun}
                                className={`flex items-center gap-1.5 hover:text-white transition-colors ${isFixed ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                            >
                                <Play size={10} fill="currentColor" />
                                <span className="font-medium">Run</span>
                            </button>
                            <div className="flex items-center gap-3 opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                <Copy size={12} className="hover:text-white cursor-pointer" />
                                <MessageSquare size={12} className="hover:text-white cursor-pointer" />
                                <MoreHorizontal size={12} className="hover:text-white cursor-pointer" />
                                <Trash2 size={12} className="hover:text-red-400 cursor-pointer" />
                            </div>
                        </div>

                        {/* Code Area */}
                        <div className="p-4 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060]"></div>
                            <div className="pl-2">
                                {showDiff ? (
                                    <div className="flex flex-col gap-2">
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Original Code */}
                                            <div className="bg-red-500/5 p-2 rounded border border-red-500/10 relative group/diff">
                                                <div className="text-[10px] text-red-400 mb-1 font-medium flex justify-between">
                                                    <span>Original</span>
                                                </div>
                                                <div className="opacity-50">
                                                    {highlightCode(codeToType, true, 'original')}
                                                </div>
                                            </div>
                                            {/* Fixed Code */}
                                            <div className="bg-green-500/5 p-2 rounded border border-green-500/10 relative">
                                                <div className="text-[10px] text-green-400 mb-1 font-medium flex justify-between">
                                                    <span>Copilot Fix</span>
                                                </div>
                                                <div>
                                                    {highlightCode(fixedCode, true, 'fixed')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <button 
                                                onClick={handleAccept}
                                                className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-[10px] rounded transition-colors font-medium"
                                            >
                                                Accept
                                            </button>
                                            <button 
                                                onClick={handleReject}
                                                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-[10px] rounded transition-colors font-medium"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {highlightCode(cell.code)}
                                        {cell.status === 'typing' && (
                                        <span className="inline-block w-0.5 h-4 align-middle animate-pulse ml-0.5 bg-blue-500"></span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Cell Footer (Status Bar) */}
                        <div className="px-4 py-1.5 bg-[#252526] border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                            <div className="flex items-center gap-2">
                                {cell.output?.type === 'error' ? (
                                    <div className="flex items-center gap-1.5 text-red-400">
                                        <XCircle size={10} />
                                        <span>Error</span>
                                    </div>
                                ) : (
                                    <span>{cell.isRunning ? 'Running...' : 'Press shift + enter to run'}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-1 hover:text-gray-300 cursor-pointer">
                                <span>PySpark (Python)</span>
                                <ChevronDown size={10} />
                            </div>
                        </div>

                        {/* Output Area */}
                        {(cell.output || cell.isRunning) && (
                        <div className="border-t border-white/5 bg-[#18181b] p-4 animate-in fade-in slide-in-from-top-2">
                            {cell.isRunning ? (
                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                                <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                <span>Executing...</span>
                            </div>
                            ) : cell.output?.type === 'error' ? (
                            <div className="space-y-3">
                                <div className="text-red-400 font-mono text-xs whitespace-pre-wrap bg-red-500/10 p-3 rounded border border-red-500/20">
                                    {cell.output.message}
                                </div>
                                {/* Fix with Copilot Button */}
                                <div className="relative inline-block">
                                    <button 
                                        onClick={handleFixWithCopilot}
                                        disabled={isAnalyzing}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded text-xs text-gray-300 hover:text-white transition-all group/btn disabled:opacity-50 disabled:cursor-wait"
                                    >
                                        {isAnalyzing ? (
                                            <>
                                                <div className="w-3 h-3 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                                                <span>Copilot is analyzing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <img src="/Copilot.png" alt="Copilot" className="w-3.5 h-3.5" />
                                                <span>Fix with Copilot</span>
                                            </>
                                        )}
                                    </button>
                                    
                                    {/* Tooltip */}
                                    {showTooltip && (
                                        <div className="absolute bottom-full left-0 mb-2 w-auto whitespace-nowrap bg-[#252526] border border-white/10 text-white text-[10px] px-3 py-2 rounded shadow-xl animate-in fade-in slide-in-from-bottom-2 z-50">
                                            <div className="font-semibold">Click me</div>
                                            <div className="absolute bottom-[-5px] left-4 w-2.5 h-2.5 bg-[#252526] border-b border-r border-white/10 rotate-45"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            ) : cell.output?.type === 'chart' ? (
                                <div className="flex items-center justify-center p-8 bg-white/5 rounded border border-white/5">
                                    <div className="relative">
                                        <div className="w-48 h-48 rounded-full shadow-2xl" style={{
                                            background: 'conic-gradient(#3b82f6 0% 17.7%, #10b981 17.7% 37.7%, #f59e0b 37.7% 54%, #ef4444 54% 76.2%, #8b5cf6 76.2% 100%)'
                                        }}></div>
                                        {/* Legend */}
                                        <div className="absolute top-1/2 left-full ml-8 -translate-y-1/2 flex flex-col gap-3 text-xs text-gray-300 whitespace-nowrap">
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div>Jan (17.7%)</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-sm"></div>Feb (20.0%)</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>Mar (16.3%)</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-sm"></div>Apr (22.2%)</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded-sm"></div>May (23.7%)</div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        )}
                    </div>
                )}
            </div>
          ))}
        </div>

        {/* Cursor Overlay */}
        {cursor.visible && (
            <div 
                className="absolute pointer-events-none transition-all duration-75 z-50"
                style={{ 
                    left: cursor.x, 
                    top: cursor.y 
                }}
            >
                <MousePointer2 
                    size={20} 
                    className="text-white fill-black" 
                    style={{ transform: 'rotate(-15deg)' }}
                />
            </div>
        )}

        {/* Click Ripple */}
        {clickEffect.visible && (
            <div 
                className="absolute rounded-full border-2 border-white/50 animate-ping pointer-events-none z-50"
                style={{ 
                    left: clickEffect.x - 10, 
                    top: clickEffect.y - 10,
                    width: 20,
                    height: 20,
                    animationDuration: '0.4s'
                }}
            />
        )}
      </div>
    </div>
  );
};

const AgentComponent = () => {
  const [position, setPosition] = useState({ x: -100, y: -20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [copilotPosition, setCopilotPosition] = useState({ x: 330, y: 20 });
  const [isCopilotDragging, setIsCopilotDragging] = useState(false);
  const [copilotDragStart, setCopilotDragStart] = useState({ x: 0, y: 0 });
  
  // Animation State
  const [copilotInput, setCopilotInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [notebookCells, setNotebookCells] = useState([]);
  const [isGlobalRunning, setIsGlobalRunning] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [activeWindow, setActiveWindow] = useState('notebook');
  
  // New State for Agent Flow
  const [isCopilotVisible, setIsCopilotVisible] = useState(false);
  const [showZeroState, setShowZeroState] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [isCopilotButtonHovered, setIsCopilotButtonHovered] = useState(false);
  const [clickEffect, setClickEffect] = useState({ x: 0, y: 0, visible: false });
  const [showStartTooltip, setShowStartTooltip] = useState(false);

  const bronzeCode = `// Bronze Layer: Ingest raw data
df_raw = spark.read.format("json").load("abfss://data@lakehouse/raw/sales")
df_raw.write.mode("overwrite").saveAsTable("bronze_sales")
display(df_raw.limit(5))`;

  const silverCode = `// Silver Layer: Clean and standardize
spark.sql("""
  CREATE MATERIALIZED VIEW silver_sales AS
  SELECT 
    id,
    cast(timestamp as date) as sale_date,
    upper(product_id) as product_id,
    amount
  FROM bronze_sales
  WHERE amount > 0
""")`;

  const goldCode = `// Gold Layer: Business Aggregates
spark.sql("""
  CREATE MATERIALIZED VIEW gold_sales_daily AS
  SELECT 
    sale_date,
    product_id,
    sum(amount) as total_sales,
    count(*) as transaction_count
  FROM silver_sales
  GROUP BY sale_date, product_id
""")
display(spark.table("gold_sales_daily"))`;

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      // Initial State
      if (!isMounted) return;
      setNotebookCells([]); 
      setChatMessages([]);
      setCopilotInput('');
      setIsInteractive(false);
      setIsGlobalRunning(false);
      setIsCopilotVisible(false);
      setShowZeroState(true);
      setShowStartTooltip(false);
      setCursor({ x: 800, y: 500, visible: false });
      setClickEffect({ x: 0, y: 0, visible: false });
      setActiveWindow('notebook');

      await wait(1000);

      // 1. Move Cursor to Copilot Button
      // Target: Copilot button in toolbar (approx x: 660, y: 135)
      const startPos = { x: 800, y: 500 };
      const copilotBtnPos = { x: 660, y: 135 }; 
      
      setCursor({ ...startPos, visible: true });
      
      // Animate Cursor to Copilot Button
      const steps = 40;
      for (let i = 0; i <= steps; i++) {
        if (!isMounted) return;
        const t = i / steps;
        const ease = 1 - Math.pow(1 - t, 3);
        setCursor({
          x: startPos.x + (copilotBtnPos.x - startPos.x) * ease,
          y: startPos.y + (copilotBtnPos.y - startPos.y) * ease,
          visible: true
        });
        await wait(15);
      }

      // Hover Effect
      setIsCopilotButtonHovered(true);
      await wait(500); // Pause to show hover

      // Click
      setClickEffect({ x: copilotBtnPos.x, y: copilotBtnPos.y, visible: true });
      setTimeout(() => setClickEffect(prev => ({ ...prev, visible: false })), 400);
      
      setIsCopilotVisible(true);
      setActiveWindow('copilot');
      await wait(200);
      setIsCopilotButtonHovered(false);

      // Move Cursor to "Build Medallion..." button inside MiniCopilot
      // Target: Inside MiniCopilot (approx x: 930, y: 380)
      const zeroPromptPos = { x: 930, y: 380 }; 
      
      for (let i = 0; i <= steps; i++) {
        if (!isMounted) return;
        const t = i / steps;
        const ease = 1 - Math.pow(1 - t, 3);
        setCursor({
          x: copilotBtnPos.x + (zeroPromptPos.x - copilotBtnPos.x) * ease,
          y: copilotBtnPos.y + (zeroPromptPos.y - copilotBtnPos.y) * ease,
          visible: true
        });
        await wait(15);
      }

      // Show Tooltip and Wait for User Click
      setShowStartTooltip(true);
      
      // Hide Cursor
      setCursor(prev => ({ ...prev, visible: false }));

    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [restartKey]);

  const handleZeroPromptClick = async (prompt) => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    setShowStartTooltip(false);
    setShowZeroState(false);
    setChatMessages([{ role: 'user', content: prompt }]);

    await wait(1000);

    // Thinking State
    setChatMessages(prev => [...prev, { 
      role: 'assistant', 
      content: "Thinking...", 
      isThinking: true
    }]);

    const thoughts = [
        "Analyzing user intent: Build Medallion Architecture...",
        "Checking available data sources in Lakehouse...",
        "Identified 'sales_raw' and 'products' tables...",
        "Formulating Bronze -> Silver -> Gold transformation logic...",
        "Drafting Materialized View definitions...",
        "Validating syntax for Spark SQL..."
    ];

    for (const thought of thoughts) {
        setChatMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].content = thought;
            return newMsgs;
        });
        await wait(800);
    }

    // Assistant Response with Detailed Plan (Streaming)
    const planText = `I'll help you build a Medallion architecture. Here is the plan:

1. **Initialize Documentation**: Create a markdown cell to outline the architecture.
2. **Bronze Layer**: Ingest raw sales data from the lakehouse.
3. **Silver Layer**: Clean and standardize the data using a Materialized View.
4. **Gold Layer**: Aggregate daily sales metrics for business reporting.

Shall I proceed?`;

    // Remove thinking message and start streaming
    setChatMessages(prev => {
        const newMsgs = [...prev];
        newMsgs.pop(); // Remove "Thinking..."
        return [...newMsgs, { role: 'assistant', content: '' }];
    });

    for (let i = 0; i <= planText.length; i += 2) {
        setChatMessages(prev => {
            const newMsgs = [...prev];
            const lastMsg = { ...newMsgs[newMsgs.length - 1] };
            lastMsg.content = planText.slice(0, i);
            newMsgs[newMsgs.length - 1] = lastMsg;
            return newMsgs;
        });
        await wait(10); // Streaming speed
    }

    // Finalize message with approval buttons
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.content = planText;
      lastMsg.type = 'plan_approval';
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });
    
    // STOP HERE. Wait for user to click Proceed manually.
  };

  const handlePlanProceed = async () => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Remove approval UI and start tasks
    setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        delete lastMsg.type; // Remove approval buttons
        newMsgs[newMsgs.length - 1] = lastMsg;
        
        // Add new message for execution
        return [...newMsgs, {
            role: 'assistant',
            content: "Great! I'll start building the Medallion architecture now.",
            tasks: []
        }];
    });

    await wait(1000);

    // Task 0: Documentation
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [{ label: 'Initialize Documentation', status: 'loading' }];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });

    // Add Markdown Cell
    setNotebookCells([{ id: 0, type: 'markdown', code: '', status: 'typing' }]);
    const mdContent = "### Medallion Architecture\nBuilding a lakehouse with Bronze, Silver, and Gold layers.";
    
    for (let i = 0; i <= mdContent.length; i += 1) {
      setNotebookCells(prev => prev.map(c => c.id === 0 ? { ...c, code: mdContent.slice(0, i) } : c));
      await wait(10);
    }
    setNotebookCells(prev => prev.map(c => c.id === 0 ? { ...c, code: mdContent, status: 'complete' } : c));

    await wait(500);

    // Task 0 Done, Task 1 Start
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Initialize Documentation', status: 'done' },
        { label: 'Create Bronze Layer', status: 'loading' }
      ];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });

    // Add Cell 1 (Bronze)
    setNotebookCells(prev => [...prev, { id: 1, code: '', status: 'skeleton' }]);
    await wait(1000);
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, status: 'typing' } : c));
    
    // Type Code 1 (Slower)
    for (let i = 0; i <= bronzeCode.length; i += 1) {
      setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: bronzeCode.slice(0, i) } : c));
      await wait(15); // Slower typing
    }
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: bronzeCode, status: 'complete' } : c));
    
    await wait(500);

    // Task 1 Done, Task 2 Start
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Initialize Documentation', status: 'done' },
        { label: 'Create Bronze Layer', status: 'done' },
        { label: 'Create Silver Layer', status: 'loading' }
      ];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });

    // Add Cell 2 (Silver)
    setNotebookCells(prev => [...prev, { id: 2, code: '', status: 'skeleton' }]);
    await wait(1000);
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, status: 'typing' } : c));

    // Type Code 2 (Slower)
    for (let i = 0; i <= silverCode.length; i += 1) {
      setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: silverCode.slice(0, i) } : c));
      await wait(15);
    }
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: silverCode, status: 'complete' } : c));

    await wait(500);

    // Task 2 Done, Task 3 Start
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Initialize Documentation', status: 'done' },
        { label: 'Create Bronze Layer', status: 'done' },
        { label: 'Create Silver Layer', status: 'done' },
        { label: 'Create Gold Layer', status: 'loading' }
      ];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });

    // Add Cell 3 (Gold)
    setNotebookCells(prev => [...prev, { id: 3, code: '', status: 'skeleton' }]);
    await wait(1000);
    setNotebookCells(prev => prev.map(c => c.id === 3 ? { ...c, status: 'typing' } : c));

    // Type Code 3 (Slower)
    for (let i = 0; i <= goldCode.length; i += 1) {
      setNotebookCells(prev => prev.map(c => c.id === 3 ? { ...c, code: goldCode.slice(0, i) } : c));
      await wait(15);
    }
    setNotebookCells(prev => prev.map(c => c.id === 3 ? { ...c, code: goldCode, status: 'complete' } : c));

    await wait(500);

    // All Done Generation
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Initialize Documentation', status: 'done' },
        { label: 'Create Bronze Layer', status: 'done' },
        { label: 'Create Silver Layer', status: 'done' },
        { label: 'Create Gold Layer', status: 'done' }
      ];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return [...newMsgs, { 
          role: 'assistant', 
          content: "",
          type: 'run_approval'
      }];
    });

    setIsInteractive(true);
  };

  const handleRunApprove = (msgIndex) => {
    setChatMessages(prev => {
        const newMsgs = [...prev];
        const msg = { ...newMsgs[msgIndex] };
        delete msg.type;
        msg.content = "Running notebook cells...";
        msg.tasks = [{ label: 'Execute Bronze Layer', status: 'loading' }];
        newMsgs[msgIndex] = msg;
        return newMsgs;
    });
    handleRunAll(msgIndex);
  };

  const handleKeepChanges = async (msgIndex) => {
    setChatMessages(prev => {
        const newMsgs = [...prev];
        const msg = { ...newMsgs[msgIndex] };
        delete msg.type;
        newMsgs[msgIndex] = msg;
        return [...newMsgs, {
            role: 'assistant',
            content: "Checkpoint stored.",
            isCheckpoint: true
        }];
    });

    // Wait and ask for visualization
    await new Promise(resolve => setTimeout(resolve, 1000));
    setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: "Would you like to visualize the materialized lake views dependency?"
    }]);
  };

  const handleUndoChanges = (msgIndex) => {
    setNotebookCells([]);
    setChatMessages(prev => {
        const newMsgs = [...prev];
        const msg = { ...newMsgs[msgIndex] };
        delete msg.type;
        newMsgs[msgIndex] = msg;
        return [...newMsgs, {
            role: 'assistant',
            content: "Changes undone. Notebook is now empty."
        }];
    });
  };

  const handleRunAll = async (msgIndex, isLineage = false) => {
    if (isGlobalRunning) return;
    setIsGlobalRunning(true);
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    if (isLineage) {
        // Run Lineage Cell
        setNotebookCells(prev => prev.map(c => c.id === 5 ? { ...c, isRunning: true } : c));
        await wait(1500);
        setNotebookCells(prev => prev.map(c => c.id === 5 ? { 
          ...c, 
          isRunning: false,
          output: { type: 'lineage' } 
        } : c));

        if (msgIndex !== undefined) {
            setChatMessages(prev => {
                const newMsgs = [...prev];
                const msg = { ...newMsgs[msgIndex] };
                msg.tasks = [{ label: 'Execute Lineage Visualization', status: 'done' }];
                msg.content = "Visualization generated successfully.";
                newMsgs[msgIndex] = msg;
                return newMsgs;
            });
        }
        setIsGlobalRunning(false);
        return;
    }

    // Run Cell 1 (Bronze)
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, isRunning: true } : c));
    await wait(1500);
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { 
      ...c, 
      isRunning: false,
      output: {
        type: 'table',
        data: [
          { id: 1, sale_date: '2025-01-01', product: 'A1', amount: 100 },
          { id: 2, sale_date: '2025-01-01', product: 'B2', amount: 150 },
          { id: 3, sale_date: '2025-01-02', product: 'A1', amount: 120 },
        ]
      } 
    } : c));

    // Update Task 1 Done, Task 2 Start
    if (msgIndex !== undefined) {
        setChatMessages(prev => {
            const newMsgs = [...prev];
            const msg = { ...newMsgs[msgIndex] };
            msg.tasks = [
                { label: 'Execute Bronze Layer', status: 'done' },
                { label: 'Execute Silver Layer', status: 'loading' }
            ];
            newMsgs[msgIndex] = msg;
            return newMsgs;
        });
    }

    await wait(500);

    // Run Cell 2 (Silver)
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, isRunning: true } : c));
    await wait(1500);
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { 
      ...c, 
      isRunning: false,
      output: { type: 'text', message: "Materialized view 'silver_sales' created successfully." } 
    } : c));

    // Update Task 2 Done, Task 3 Start
    if (msgIndex !== undefined) {
        setChatMessages(prev => {
            const newMsgs = [...prev];
            const msg = { ...newMsgs[msgIndex] };
            msg.tasks = [
                { label: 'Execute Bronze Layer', status: 'done' },
                { label: 'Execute Silver Layer', status: 'done' },
                { label: 'Execute Gold Layer', status: 'loading' }
            ];
            newMsgs[msgIndex] = msg;
            return newMsgs;
        });
    }

    await wait(500);

    // Run Cell 3 (Gold)
    setNotebookCells(prev => prev.map(c => c.id === 3 ? { ...c, isRunning: true } : c));
    await wait(1500);
    setNotebookCells(prev => prev.map(c => c.id === 3 ? { 
      ...c, 
      isRunning: false,
      output: {
        type: 'table',
        data: [
          { sale_date: '2025-01-01', product_id: 'A1', total_sales: 220, count: 2 },
          { sale_date: '2025-01-01', product_id: 'B2', total_sales: 150, count: 1 },
          { sale_date: '2025-01-02', product_id: 'A1', total_sales: 120, count: 1 },
        ]
      } 
    } : c));

    // All Done
    if (msgIndex !== undefined) {
        setChatMessages(prev => {
            const newMsgs = [...prev];
            const msg = { ...newMsgs[msgIndex] };
            msg.tasks = [
                { label: 'Execute Bronze Layer', status: 'done' },
                { label: 'Execute Silver Layer', status: 'done' },
                { label: 'Execute Gold Layer', status: 'done' }
            ];
            msg.content = "All cells executed successfully.";
            newMsgs[msgIndex] = msg;
            return newMsgs;
        });
    }

    setIsGlobalRunning(false);
    
    // Final success message
    setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "",
        type: 'review_changes'
    }]);
  };

  const handleApprove = async (msgIndex) => {
    // Not used in this flow, but kept for compatibility
  };

  const handleUserSend = async () => {
    if (!copilotInput.trim()) return;
    const userText = copilotInput;
    setCopilotInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userText }]);
    
    // Check for Lineage Request
    if (userText.toLowerCase() === 'yes' && chatMessages[chatMessages.length - 1].content.includes("visualize")) {
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        
        // Add Markdown Cell
        setNotebookCells(prev => [...prev, { id: 4, type: 'markdown', code: '', status: 'typing' }]);
        const mdContent = "### Dependency Visualization\nVisualizing the lineage of materialized views.";
        for (let i = 0; i <= mdContent.length; i += 1) {
            setNotebookCells(prev => prev.map(c => c.id === 4 ? { ...c, code: mdContent.slice(0, i) } : c));
            await wait(10);
        }
        setNotebookCells(prev => prev.map(c => c.id === 4 ? { ...c, code: mdContent, status: 'complete' } : c));

        // Add Code Cell
        setNotebookCells(prev => [...prev, { id: 5, code: '', status: 'skeleton' }]);
        await wait(500);
        setNotebookCells(prev => prev.map(c => c.id === 5 ? { ...c, status: 'typing' } : c));
        const code = `display(spark.catalog.listTables())`;
        for (let i = 0; i <= code.length; i += 1) {
            setNotebookCells(prev => prev.map(c => c.id === 5 ? { ...c, code: code.slice(0, i) } : c));
            await wait(15);
        }
        setNotebookCells(prev => prev.map(c => c.id === 5 ? { ...c, code: code, status: 'complete' } : c));

        // Ask for Run Approval
        setChatMessages(prev => [...prev, { 
            role: 'assistant', 
            content: "",
            type: 'run_approval_lineage'
        }]);
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 600));
    setChatMessages(prev => [...prev, { role: 'assistant', content: "Sorry, this is only a demo." }]);
  };

  const handleRunApproveLineage = (msgIndex) => {
    setChatMessages(prev => {
        const newMsgs = [...prev];
        const msg = { ...newMsgs[msgIndex] };
        delete msg.type;
        msg.content = "Generating visualization...";
        msg.tasks = [{ label: 'Execute Lineage Visualization', status: 'loading' }];
        newMsgs[msgIndex] = msg;
        return newMsgs;
    });
    handleRunAll(msgIndex, true);
  };

  const handleMouseDown = (e) => {
    setActiveWindow('notebook');
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleCopilotMouseDown = (e) => {
    e.stopPropagation();
    setActiveWindow('copilot');
    setIsCopilotDragging(true);
    setCopilotDragStart({
      x: e.clientX - copilotPosition.x,
      y: e.clientY - copilotPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
    if (isCopilotDragging) {
      setCopilotPosition({
        x: e.clientX - copilotDragStart.x,
        y: e.clientY - copilotDragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsCopilotDragging(false);
  };

  useEffect(() => {
    if (isDragging || isCopilotDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, isCopilotDragging, copilotDragStart]);

  // Syntax highlighting helper
  const highlightCode = (codeStr) => {
    if (!codeStr) return null;
    return codeStr.split('\n').map((line, i) => {
      const keywords = ['val', 'spark', 'sql', 'select', 'write', 'mode', 'saveAsTable', 'table', 'display', 'FROM', 'WHERE', 'SELECT', 'CREATE', 'MATERIALIZED', 'VIEW', 'AS', 'GROUP', 'BY', 'count', 'sum', 'cast'];
      const parts = line.split(/(".*?"|""".*?""")/g);
      
      return (
        <div key={i} className="flex">
           <span className="w-6 text-gray-600 text-right mr-4 select-none font-mono text-[10px] pt-0.5">{i + 1}</span>
           <span className="font-mono text-xs text-gray-300 whitespace-pre">
             {parts.map((part, idx) => {
               if (part.startsWith('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
               
               return part.split(/(\b)/).map((subPart, subIdx) => {
                 if (keywords.includes(subPart) || keywords.includes(subPart.toUpperCase())) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                 if (subPart.startsWith('//')) return <span key={subIdx} className="text-[#6a9955]">{subPart}</span>;
                 return subPart;
               });
             })}
           </span>
        </div>
      );
    });
  };

  return (
    <div className="mt-8 relative h-[750px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src="/cover-background-4.png" alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Restart Button */}
      <button 
        onClick={() => setRestartKey(prev => prev + 1)}
        className="absolute bottom-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-colors z-0"
        title="Restart Animation"
      >
        <RotateCcw size={16} />
      </button>

      {/* Draggable Notebook Window */}
      <div 
        className="absolute left-1/2 top-1/2 w-[900px] rounded-xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
        style={{ 
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          zIndex: activeWindow === 'notebook' ? 20 : 10,
          height: '600px'
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px]">
          <div className="flex items-center gap-4">
            <div className="grid grid-cols-3 gap-1 opacity-70 hover:opacity-100">
               {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
            </div>
            <div className="flex gap-4 font-medium text-gray-400">
              <span className="hover:text-white transition-colors">Home</span>
              <span className="hover:text-white transition-colors">Edit</span>
              <span className="hover:text-white transition-colors">Run</span>
              <span className="hover:text-white transition-colors">AI tools</span>
              <span className="hover:text-white transition-colors">View</span>
            </div>
          </div>
          <div className="flex items-center gap-0">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <MessageSquare size={14} />
                  <span>Comments</span>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Clock size={14} />
                  <span>History</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 ml-2 bg-[#008060] text-white rounded hover:bg-[#006e52] transition-colors shadow-lg shadow-green-900/20 cursor-pointer">
                  <Share size={14} />
                  <span>Share</span>
              </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-4 px-4 py-2 bg-[#202020] border-b border-white/5 text-[10px] overflow-x-auto">
          <button 
            onClick={handleRunAll}
            className={`flex items-center gap-2 px-4 py-1.5 text-white rounded transition-colors shadow-lg ${isGlobalRunning ? 'bg-[#006e52] cursor-wait' : 'bg-[#008060] hover:bg-[#006e52] shadow-green-900/20'}`}
          >
              {isGlobalRunning ? (
                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Play size={12} fill="currentColor" />
              )}
              <span className="font-semibold">{isGlobalRunning ? 'Running...' : 'Run all'}</span>
          </button>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Box size={14} />
              <span>PySpark (Python)</span>
              <ChevronDown size={12} />
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-white">
              <span className="text-gray-500">Environment</span>
              <div className="px-2 py-0.5 bg-[#2d2d2d] border border-white/10 rounded flex items-center gap-2">
                  <span>Workspace default</span>
                  <ChevronDown size={12} />
              </div>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <button 
            onClick={() => {
              setIsCopilotVisible(!isCopilotVisible);
              setActiveWindow('copilot');
            }}
            className={`flex items-center gap-2 px-2 py-1 rounded transition-colors ${isCopilotVisible || isCopilotButtonHovered ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
          >
              <img src="/Copilot.png" alt="Copilot" className="w-4 h-4 rounded-sm" />
              <span>Copilot</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#18181b] relative custom-scrollbar">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060] opacity-50"></div>
          
          {/* Empty State */}
          {notebookCells.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 opacity-50 pointer-events-none">
               <div className="w-16 h-16 mb-4 rounded-xl bg-white/5 flex items-center justify-center">
                  <Box size={32} strokeWidth={1.5} />
               </div>
               <p className="text-sm font-medium">Notebook is empty</p>
               <p className="text-xs mt-1">Start by asking Copilot to generate code</p>
            </div>
          )}

          {/* Dynamic Cells */}
          {notebookCells.map((cell, idx) => (
            <div key={cell.id} className="mb-4 rounded-lg border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-sm hover:border-white/20 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-4 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060]"></div>
                    <div className="pl-2">
                        {cell.type === 'markdown' ? (
                            <div className="prose prose-invert prose-sm max-w-none">
                                {cell.code.split('\n').map((line, i) => {
                                    if (line.startsWith('###')) {
                                        return <h3 key={i} className="text-lg font-bold text-white mb-2">{line.replace(/^###\s?/, '')}</h3>;
                                    }
                                    return <p key={i} className="text-gray-300 text-sm">{line}</p>;
                                })}
                            </div>
                        ) : cell.status === 'skeleton' ? (
                          <div className="animate-pulse space-y-2 py-1">
                            <div className="h-2 bg-white/10 rounded w-1/3"></div>
                            <div className="h-2 bg-white/10 rounded w-2/3"></div>
                            <div className="h-2 bg-white/10 rounded w-1/2"></div>
                          </div>
                        ) : (
                          highlightCode(cell.code)
                        )}
                    </div>
                </div>
                <div className="px-4 py-1.5 bg-[#252526] border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500">
                    <span>{cell.isRunning ? 'Running...' : 'Press shift + enter to run'}</span>
                    <div className="flex items-center gap-1 hover:text-gray-300">
                        <span>PySpark (Python)</span>
                        <ChevronDown size={10} />
                    </div>
                </div>

                {/* Output Area */}
                {(cell.output || cell.isRunning) && (
                  <div className="border-t border-white/5 bg-[#18181b] p-4 animate-in fade-in slide-in-from-top-2">
                    {cell.isRunning ? (
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Executing...</span>
                      </div>
                    ) : cell.output?.type === 'lineage' ? (
                        <div className="h-[350px] relative bg-[#09090b] rounded-lg overflow-hidden p-4 border border-white/10">
                            {/* Grid Background */}
                            <div className="absolute inset-0 opacity-20" 
                                 style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>

                            {/* Bronze Layer */}
                            <div className="absolute top-20 left-10 bg-[#18181b] border border-gray-700 rounded-lg p-3 shadow-lg z-10 w-40">
                                <div className="flex items-center gap-2 mb-1">
                                    <Database size={14} className="text-orange-400" />
                                    <span className="text-xs font-bold text-gray-200">bronze.Sales_Raw</span>
                                </div>
                                <div className="text-[10px] text-gray-500">Lakehouse A</div>
                            </div>

                            <div className="absolute top-52 left-10 bg-[#18181b] border border-gray-700 rounded-lg p-3 shadow-lg z-10 w-40">
                                <div className="flex items-center gap-2 mb-1">
                                    <Database size={14} className="text-orange-400" />
                                    <span className="text-xs font-bold text-gray-200">bronze.Cust_Raw</span>
                                </div>
                                <div className="text-[10px] text-gray-500">Lakehouse A</div>
                            </div>

                            {/* Silver Layer (Materialized Views) */}
                            <div className="absolute top-10 left-64 bg-[#18181b] border border-cyan-500/50 rounded-lg p-3 shadow-lg z-10 w-44 ring-1 ring-cyan-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                    <Table size={14} className="text-cyan-400" />
                                    <span className="text-xs font-bold text-cyan-100">silver.Clean_Sales</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-[10px] text-gray-500">Materialized View</div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                            </div>

                            <div className="absolute top-36 left-64 bg-[#18181b] border border-cyan-500/50 rounded-lg p-3 shadow-lg z-10 w-44 ring-1 ring-cyan-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                    <Table size={14} className="text-cyan-400" />
                                    <span className="text-xs font-bold text-cyan-100">silver.Agg_Daily</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-[10px] text-gray-500">Materialized View</div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                            </div>
                            
                            <div className="absolute top-64 left-64 bg-[#18181b] border border-cyan-500/50 rounded-lg p-3 shadow-lg z-10 w-44 ring-1 ring-cyan-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                    <Table size={14} className="text-cyan-400" />
                                    <span className="text-xs font-bold text-cyan-100">silver.Cust_360</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-[10px] text-gray-500">Materialized View</div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Gold Layer */}
                            <div className="absolute top-36 right-10 bg-[#18181b] border border-yellow-500/50 rounded-lg p-3 shadow-lg z-10 w-40">
                                <div className="flex items-center gap-2 mb-1">
                                    <Layout size={14} className="text-yellow-400" />
                                    <span className="text-xs font-bold text-gray-200">gold.Rev_Report</span>
                                </div>
                                <div className="text-[10px] text-gray-500">Power BI Dataset</div>
                            </div>

                            {/* Connections */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                {/* Bronze to Silver */}
                                <path d="M 200 110 C 228 110, 228 70, 256 70" fill="none" stroke="#52525b" strokeWidth="1" />
                                <path d="M 200 110 C 228 110, 228 174, 256 174" fill="none" stroke="#52525b" strokeWidth="1" />
                                <path d="M 200 238 C 228 238, 228 174, 256 174" fill="none" stroke="#52525b" strokeWidth="1" />
                                <path d="M 200 238 C 228 238, 228 286, 256 286" fill="none" stroke="#52525b" strokeWidth="1" />
                                
                                {/* Silver to Gold */}
                                <path d="M 432 70 C 480 70, 480 174, 530 174" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                                <path d="M 432 174 C 480 174, 480 174, 530 174" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                                <path d="M 432 286 C 480 286, 480 174, 530 174" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                            </svg>
                        </div>
                    ) : cell.output?.type === 'text' ? (
                      <div className="text-xs text-gray-300 font-mono">{cell.output.message}</div>
                    ) : cell.output?.type === 'table' && cell.output.data && cell.output.data.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[10px] text-gray-300">
                          <thead>
                            <tr className="border-b border-white/10">
                              {Object.keys(cell.output.data[0]).map(key => (
                                <th key={key} className="py-1 px-2 font-medium text-gray-500 capitalize">{key.replace('_', ' ')}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {cell.output.data.map((row, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                {Object.values(row).map((val, j) => (
                                  <td key={j} className="py-1 px-2">{val}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>

      {/* Draggable Mini Copilot */}
      {isCopilotVisible && (
        <MiniCopilot 
          position={copilotPosition} 
          onMouseDown={handleCopilotMouseDown}
          inputValue={copilotInput}
          messages={chatMessages}
          onApprove={handlePlanProceed}
          onRunApprove={handleRunApprove}
          onRunApproveLineage={handleRunApproveLineage}
          onKeep={handleKeepChanges}
          onUndo={handleUndoChanges}
          onInput={isInteractive ? setCopilotInput : undefined}
          onSend={handleUserSend}
          zIndex={activeWindow === 'copilot' ? 20 : 10}
          showZeroState={showZeroState}
          onZeroPromptClick={handleZeroPromptClick}
          showStartTooltip={showStartTooltip}
        />
      )}

      {/* Click Effect */}
      {clickEffect.visible && (
        <div 
          className="absolute w-8 h-8 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none z-50"
          style={{ 
            left: clickEffect.x - 16, 
            top: clickEffect.y - 16 
          }}
        />
      )}

      {/* Cursor Overlay */}
      {cursor.visible && (
          <div 
              className="absolute pointer-events-none transition-all duration-75 z-50"
              style={{ 
                  left: cursor.x, 
                  top: cursor.y 
              }}
          >
              <MousePointer2 
                  size={20} 
                  className="text-white fill-black" 
                  style={{ transform: 'rotate(-15deg)' }}
              />
          </div>
      )}
    </div>
  );
};

const ProjectsContent = () => {
  console.log("ProjectsContent rendering");
  const businessResults = [
    { metric: "MAU Up 180%", description: "in monthly active user growth since Jan 2025" },
    { metric: "Usage Up 167%", description: "in total usage consumption since Jan 2025" },
    { metric: "Retention 85%", description: "in percent of users who remain continuously active by the end of Sep 2025" }
  ];

  const productPortfolio = [
    "Data Engineering", "Data Science", "Notebook", "Environment", 
    "ML Model", "Data Agent", "Spark jobs", "Copilot", "VS Code Extensions", "Materialized Views"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-gray-500 mb-4 font-mono text-sm">{'// APR 2025'}</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-6">
          Microsoft Fabric: <span className="text-cyan-400">The best way to build data science workflows</span>
        </h1>
        <a 
          href="https://www.microsoft.com/en/microsoft-fabric" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 border border-cyan-500/30"
        >
          <span>Go to official site</span>
          <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
        </a>

        {/* Interactive Hero Component */}
        <FabricInteractiveHero />
      </div>

      {/* My Role and Product Portfolio - Side by Side */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* My Role Section */}
        <div className="bg-[#131315] border border-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <User className="text-cyan-400" size={20} />
            My Role
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Fei is a Principal Design Manager leading the <strong>AI Developer Experience</strong> for Microsoft Fabric. I bridge the gap between complex data engineering and intuitive design, managing a global team to deliver tools that empower data professionals to achieve more.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>Strategy:</strong> Defined the UX vision for AI-native data engineering, shifting the paradigm from 'code-first' to 'insight-first'.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>Leadership:</strong> Scaled and managed a global design team, establishing a culture of rapid prototyping and close engineering collaboration.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>Execution:</strong> Oversaw the end-to-end redesign of Fabric Notebooks, resulting in a 280% increase in usage.</span>
            </li>
          </ul>
        </div>

        {/* Product Portfolio */}
        <div className="bg-[#131315] border border-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Layout className="text-purple-400" size={20} />
            My Product Portfolio
          </h3>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              {/* Data Engineering Group */}
              <div className="space-y-3">
                <div className="aspect-[2/1] bg-[#1e1e1e] border border-white/5 rounded-lg flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 hover:bg-[#252526] transition-all group cursor-default">
                  <img src="/DE.png" alt="Data Engineering" className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-xs text-white font-medium text-center px-1 leading-tight">Data Engineering</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Environment", img: "/env.png" },
                    { label: "Spark Jobs", img: "/sjd.png" },
                    { label: "VS Code Ext", img: "/vs.png" },
                    { label: "Materialized Views", img: "/lh.png" },
                  ].map((item, idx) => (
                     <div key={idx} className="aspect-square bg-[#1e1e1e] border border-white/5 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-cyan-500/30 hover:bg-[#252526] transition-all group cursor-default">
                        <img src={item.img} alt={item.label} className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="text-[9px] text-gray-500 font-medium text-center px-1 group-hover:text-gray-200 transition-colors duration-300 leading-tight">{item.label}</span>
                     </div>
                  ))}
                </div>
              </div>

              {/* Data Science Group */}
              <div className="space-y-3">
                <div className="aspect-[2/1] bg-[#1e1e1e] border border-white/5 rounded-lg flex flex-col items-center justify-center gap-3 hover:border-purple-500/30 hover:bg-[#252526] transition-all group cursor-default">
                  <img src="/DS.png" alt="Data Science" className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-xs text-white font-medium text-center px-1 leading-tight">Data Science</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Notebook", img: "/nb.png" },
                    { label: "ML Model", img: "/mlm.png" },
                    { label: "Experiment", img: "/exp.png" },
                    { label: "Data Agent", img: "/da.png" },
                  ].map((item, idx) => (
                     <div key={idx} className="aspect-square bg-[#1e1e1e] border border-white/5 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-purple-500/30 hover:bg-[#252526] transition-all group cursor-default">
                        <img src={item.img} alt={item.label} className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="text-[9px] text-gray-500 font-medium text-center px-1 group-hover:text-gray-200 transition-colors duration-300 leading-tight">{item.label}</span>
                     </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copilot Spanning Both */}
            <div className="w-full bg-[#1e1e1e] border border-white/5 rounded-lg flex items-center justify-center gap-3 py-4 hover:border-pink-500/30 hover:bg-[#252526] transition-all group cursor-default">
               <img src="/Copilot.png" alt="Copilot" className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
               <span className="text-sm text-gray-500 font-medium group-hover:text-gray-200 transition-colors duration-300">Copilot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Business Results */}
      <div className="bg-gradient-to-br from-green-900/10 to-cyan-900/10 border border-green-500/20 rounded-xl p-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Zap className="text-green-400" size={24} />
            Delivering Strong Business Results
          </h3>
          <p className="text-gray-400 text-sm">Measurable impact across key performance indicators</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessResults.map((result, i) => (
            <div key={i} className="bg-[#0a0a0c] border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all hover:scale-105 transform duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-400 mb-3">
                  {result.metric}
                </div>
                <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-3"></div>
                <p className="text-sm text-gray-300 leading-relaxed">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider with large gap */}
      <div className="py-24">
        <div className="border-t border-white/10"></div>
      </div>

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Design of Fabric Notebook</h2>

      {/* Code Cell Features */}
      <CodeCellFeatures />

      {/* Markdown Cell Features */}
      <MarkdownCellFeatures />

      {/* Divider with large gap */}
      <div className="py-24">
        <div className="border-t border-white/10"></div>
      </div>

      {/* Research Insights Section */}
      <ResearchInsights />

      {/* Divider with large gap */}
      <div className="py-24">
        <div className="border-t border-white/10"></div>
      </div>

      {/* Building Real-Time Coding Collaboration Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Synchronous Team Intelligence</h2>
        
        {/* Research Process Card */}
        <div className="p-1 rounded-2xl border border-white/10 bg-[#111111] mb-8">
           <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                 <h3 className="text-xl font-bold text-cyan-400">Research process</h3>
              </div>
              
              <div className="bg-[#0c0c0e] rounded-xl p-8 font-mono text-sm border border-white/5 flex-1">
                 <div className="space-y-4 mb-8">
                    <div>
                       <span className="text-purple-400 font-bold">Method: </span>
                       <span className="text-gray-300">Benchmark think-aloud interviews, 90-minute 1:1 sessions.</span>
                    </div>
                    <div>
                       <span className="text-purple-400 font-bold">Participants: </span>
                       <span className="text-gray-300">12 data engineers and 12 data scientists.</span>
                    </div>
                    <div>
                       <span className="text-purple-400 font-bold">Theme: </span>
                       <span className="text-gray-300">End to end data engineering benchmark study.</span>
                    </div>
                 </div>

                 <p className="text-gray-400 leading-relaxed">
                    We conducted user interviews that focuses on first-time users for Fabric who had experience with other online coding tools. In the research, each participant was assigned a list of routine tasks for data engineering workflow, the tasks includes getting data, transforming data, and visualizing data. The participants were asked to perform the same tasks on Fabric and other tools with a random order. The task success were recorded in both behavioral measures (success rate and completion time) and attitudinal measures (how difficult the users feel when working on Fabric vs. other tools. High-level pain points are shared below:
                 </p>

                 <div className="border-t border-white/10 my-8"></div>

                 <div className="space-y-6">
                    {[
                      { title: "Slow back-and-forth", desc: "People must take turns editing and emailing or uploading new notebook versions, which delays feedback and iteration." },
                      { title: "Version chaos", desc: "Multiple slightly different copies live in Git, email, or chat, making it hard to know which notebook, environment, or output is the “real” one." },
                      { title: "Coordination overhead", desc: "Sharing enough context (data paths, environment, credentials, run order) for someone else to reproduce your state is cumbersome and often fails." },
                      { title: "Limited live pairing", desc: "True pair-programming or joint debugging is difficult, since teammates cannot see each other’s cursors, selections, or outputs as they happen." },
                      { title: "Fragmented communication", desc: "Discussion happens in separate tools (chat, tickets, docs), so comments easily drift out of sync with the notebook code and results." }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-3">
                          <span className="text-red-500 mt-1">•</span>
                          <div className="leading-relaxed">
                             <span className="text-yellow-400 font-bold">{item.title}: </span>
                             <span className="text-gray-300">{item.desc}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Colab Component */}
        <ColabComponent />

        {/* Real-time Collaboration Description */}
        <div className="mt-8">
           <p className="text-gray-400 leading-relaxed">
              Designed to bridge the gap between 'reviewing' and 'building,' this feature enables frictionless synchronous collaboration. By synchronizing not just code, but the entire notebook state—variables, outputs, and execution results—it transforms solitary data science into a shared creative process, allowing teams to solve complex problems with the immediacy of being in the same room.
           </p>
        </div>

        <div className="border-t border-white/10 my-16"></div>

        <div className="mb-12">
           <h2 className="text-3xl font-bold text-cyan-400 mb-8">AI-First Coding</h2>
           
           {/* Research Process Card */}
           <div className="p-1 rounded-2xl border border-white/10 bg-[#111111] mb-12">
              <div className="p-8">
                <h3 className="text-cyan-400 font-bold text-lg mb-6">Research process</h3>
                
                <div className="space-y-4 mb-8 text-gray-300 text-sm">
                  <div>
                    <span className="text-purple-400 font-semibold">Method: </span>
                    <span>Survey study taking around 12 minutes</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Participants: </span>
                    <span>183 data professionals</span>
                  </div>
                  
                  <p className="leading-relaxed pt-2">
                    Our research team sent out a survey to attendees for Fabric Conference in Las Vegas. The survey attempted to capture insights on changes in the landscape of AI tools utilization, and how data professionals are using AI in their daily work.
                  </p>
                  
                  <p className="leading-relaxed">
                    It gives us an advantage to build the AI-assistant tool inside of notebook, because the data are not shared outside of Fabric, and notebook automatically understands the context of all content.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                   {/* Card 1 */}
                   <div className="bg-[#1e1e1e] p-4 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                            <BarChart3 size={16} />
                         </div>
                         <h4 className="font-bold text-white text-sm">87% Low Familiarity</h4>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-relaxed">
                         Most data professionals have low to intermediate familiarity with AI tools, indicating a significant opportunity for education and adoption.
                      </p>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-[#1e1e1e] p-4 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-green-500/20 rounded-full text-green-400">
                            <CheckCircle2 size={16} />
                         </div>
                         <h4 className="font-bold text-white text-sm">90% Willing to Adopt</h4>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-relaxed">
                         Despite low familiarity, there's overwhelming willingness to integrate AI tools into data workflows, showing strong market demand.
                      </p>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-[#1e1e1e] p-4 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                            <Lock size={16} />
                         </div>
                         <h4 className="font-bold text-white text-sm">Security & Context</h4>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-relaxed">
                         Two main barriers: data security concerns and the inefficiency of providing context to external AI tools.
                      </p>
                   </div>
                </div>
              </div>
           </div>

           {/* Cop Component */}
           <CopComponent />
           <div className="mt-8 mb-24">
              <p className="text-gray-400 leading-relaxed">
                 Embedded directly within the notebook, the AI Copilot eliminates the friction of context switching by providing secure, context-aware assistance that deeply understands your specific data and code. This integration shifts the coding paradigm from a fragmented search for answers to a continuous state of flow, offering intelligent code generation and debugging exactly where it's needed.
              </p>
           </div>

           {/* Agent Component */}
           <AgentComponent />
           <div className="mt-8">
              <p className="text-gray-400 leading-relaxed">
                 The Autonomous Copilot Agent leverages ReAct (Reasoning + Acting) logic to plan and execute complex, multi-step data tasks. By elevating the user's role from manual execution to strategic oversight with human-in-the-loop approval, it handles tedious boilerplate work and empowers users to act as managers of AI who focus on high-level intent rather than low-level syntax.
              </p>
           </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* Reflection Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Reflection</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Leading the redesign of Fabric Notebooks was a defining experience in my journey as a design leader. This project reinforced my belief that transformative user experiences are built at the intersection of empathy, creativity, and strategic vision. By immersing myself and my team in the daily realities of data professionals, we moved beyond surface-level fixes and tackled the root causes of their frustrations.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Most importantly, this project taught me that great design is not just about solving existing problems—it's about unlocking potential and pushing the boundaries. By removing barriers and empowering users, we didn't just improve a product; we helped shape how organizations turn data into impact. I'm proud of what we achieved and even more excited for the innovations ahead.
        </p>
      </div>
    </div>
  );
};

const CodeCellFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  const features = [
    {
      title: "Zero-Friction Onboarding",
      desc: "Eliminated environment configuration fatigue. Users now launch a secure, pre-configured environment in seconds, reducing time-to-insight by 90%.",
      icon: Sparkles,
      color: "text-purple-400",
      demo: <AutocompleteDemo key={`auto-${resetKey}`} />
    },
    {
      title: "Democratized Data Engineering",
      desc: "Empowered non-technical users to query complex data using natural language and magic commands.",
      icon: Code2,
      color: "text-cyan-400",
      demo: <LanguageDemo />
    },
    {
      title: "Smart Visualization",
      desc: "AI automatically suggests data visualization based on the data structure.",
      icon: Layout,
      color: "text-green-400",
      demo: <VisualizationDemo />
    }
  ];

  const handleFeatureClick = (index) => {
    if (activeFeature === index) {
      setResetKey(prev => prev + 1);
    } else {
      setActiveFeature(index);
      setResetKey(0);
    }
  };

  return (
    <div className="mt-12 mb-24 p-8 bg-[#111111] border border-white/10 rounded-3xl">
       <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Feature List - Smaller width (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
             <h3 className="text-xl text-white font-bold mb-2">Basics of a code cell</h3>
             <p className="text-gray-400 mb-6">A code cell is where you write and run executable code using the notebook.</p>
             {features.map((f, i) => (
                <div 
                  key={i}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-[#1e1e1e] border-cyan-500/50 shadow-lg shadow-cyan-500/10' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                  onClick={() => handleFeatureClick(i)}
                >
                   <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-[#0c0c0e] border border-white/10 ${f.color}`}>
                         <f.icon size={20} />
                      </div>
                      <div>
                         <h3 className={`text-base font-bold mb-1 ${activeFeature === i ? 'text-white' : 'text-gray-300'}`}>{f.title}</h3>
                         <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Feature Demo Area - Larger width (8 cols) */}
          <div className="lg:col-span-8 relative min-h-[500px] bg-[#0c0c0e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
             {/* Background Image */}
             <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ 
                   backgroundImage: 'url(/demo-background.png)', 
                   backgroundSize: 'cover', 
                   backgroundPosition: 'center' 
                }}
             />
             
             <div className="relative flex-1 p-8 flex items-center justify-center overflow-hidden">
                {features[activeFeature].demo}
             </div>
          </div>
       </div>
    </div>
  );
};

// Reusable Code Cell Container
const CodeCellContainer = ({ 
  children, 
  language = "PySpark (Python)", 
  active = true, 
  lineCount = 12, 
  showGutter = true,
  status = null,
  toolbarControls = null,
  showRunButton = true,
  onRun = () => {}
}) => (
  <div className="w-full max-w-3xl bg-[#1e1e1e] rounded-lg border border-white/10 shadow-2xl font-mono text-sm relative group transition-all duration-500 ease-in-out">
    {/* Active Indicator */}
    {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 z-10 rounded-l-lg" />}
    
    {/* Toolbar */}
    <div className="flex justify-between items-center p-2 border-b border-white/5 text-gray-400 bg-[#252526] relative z-20 rounded-t-lg">
       <div className="flex items-center gap-2">
          {showRunButton && (
            <div 
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 cursor-pointer hover:text-white transition-colors"
              onClick={onRun}
            >
               <Play size={14} className="fill-current" />
               <span className="text-xs font-medium">Run</span>
            </div>
          )}
          {toolbarControls}
       </div>
       <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 cursor-pointer hover:text-white transition-colors">
             <Copy size={14} />
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 cursor-pointer hover:text-white transition-colors">
             <MessageSquare size={14} />
          </div>
          <MoreHorizontal size={14} className="hover:text-white cursor-pointer" />
          <Trash2 size={14} className="hover:text-white cursor-pointer" />
       </div>
    </div>

    <div className="flex relative">
       {/* Gutter */}
       {showGutter && (
         <div className="w-12 py-4 flex flex-col items-center gap-1 text-gray-600 bg-[#1e1e1e] border-r border-white/5 select-none font-mono text-xs leading-6 relative z-10">
            {Array.from({ length: lineCount }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
         </div>
       )}

       {/* Code Area */}
       <div className="flex-1 p-4 relative font-mono text-sm leading-6 z-30 bg-[#1e1e1e]">
          {children}
       </div>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center px-4 py-1 bg-[#252526] border-t border-white/5 text-xs text-gray-500 relative z-20 rounded-b-lg">
       <div className="flex items-center gap-4">
          {status ? status : <span>Press shift + enter to run</span>}
       </div>
       <div className="flex items-center gap-1 hover:text-gray-300 cursor-pointer">
          <span>{language}</span>
          <ChevronDown size={12} />
       </div>
    </div>
  </div>
);

const AutocompleteDemo = () => {
  const [step, setStep] = useState(0);
  
  // Calculate dynamic line count based on step
  const getLineCount = (s) => {
    if (s >= 22) return 10;
    if (s >= 21) return 9;
    if (s >= 18) return 8;
    if (s >= 14) return 7;
    if (s >= 13) return 6;
    if (s >= 10) return 5;
    if (s >= 7) return 4;
    if (s >= 3) return 3;
    if (s >= 1) return 2;
    return 1;
  };

  const currentLineCount = getLineCount(step);
  
  // Animation sequence
  useEffect(() => {
    const sequence = [
      // Line 2: AI Comment
      { t: 1000, s: 1 }, // AI Suggestion appears
      { t: 2500, s: 2 }, // Tab pressed (confirm)

      // Line 3: Filter (Intellisense)
      { t: 3500, s: 3 }, // Type 'val clean_df = raw_df.fi'
      { t: 4000, s: 4 }, // Show Intellisense
      { t: 5000, s: 5 }, // Select 'filter'
      { t: 6000, s: 6 }, // Type '($"amount" > 0)'

      // Line 4: withColumn
      { t: 7000, s: 7 }, // New line + indent
      { t: 7500, s: 8 }, // Type '.withColumn'
      { t: 8500, s: 9 }, // Type '("date", to_date($"timestamp"))'

      // Line 5: AI Code (dropDuplicates)
      { t: 9500, s: 10 }, // New line
      { t: 10500, s: 11 }, // AI Suggestion appears
      { t: 12000, s: 12 }, // Tab pressed (confirm)

      // Line 6: Comment
      { t: 13000, s: 13 }, // Type '// Aggregate metrics by region'

      // Line 7: GroupBy (Intellisense)
      { t: 14500, s: 14 }, // Type 'val result = clean_df.gro'
      { t: 15000, s: 15 }, // Show Intellisense
      { t: 16000, s: 16 }, // Select 'groupBy'
      { t: 16500, s: 17 }, // Type '("region")'

      // Line 8: AI Code (agg)
      { t: 17500, s: 18 }, // New line
      { t: 18500, s: 19 }, // AI Suggestion appears
      { t: 20000, s: 20 }, // Tab pressed (confirm)

      // Line 9: OrderBy
      { t: 21000, s: 21 }, // Type '.orderBy(desc("total"))'

      // Line 10: Display (Intellisense)
      { t: 22500, s: 22 }, // Type 'dis'
      { t: 23000, s: 23 }, // Show Intellisense
      { t: 24000, s: 24 }, // Select 'display'
      { t: 24500, s: 25 }, // Type '(result)'
      
      // End state - no reset
    ];

    let timeouts = [];
    sequence.forEach(({ t, s }) => {
      timeouts.push(setTimeout(() => setStep(s), t));
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <CodeCellContainer lineCount={currentLineCount}>
      <div className="space-y-0 text-gray-300 font-mono text-sm">
        {/* Line 1: Static setup */}
        <div className="h-6 flex items-center">
          <span className="text-purple-400">val</span>&nbsp;raw_df = spark.read.table(<span className="text-green-400">"sales_2024"</span>)
        </div>

        {/* Line 2: AI Comment */}
        {step >= 1 && (
           <div className="h-6 flex items-center relative">
              <div className="flex items-center">
                 {step === 1 && (
                    <div className="flex items-center gap-2 animate-in fade-in duration-500">
                       <span className="text-gray-500 italic">// Clean and prepare data</span>
                       <span className="text-[10px] text-gray-500 border border-gray-700 rounded px-1.5 py-0.5 bg-white/5">Tab</span>
                    </div>
                 )}
                 {step >= 2 && (
                    <span className="text-gray-500 italic">// Clean and prepare data</span>
                 )}
                 {step >= 1 && step < 3 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
              </div>
           </div>
        )}

        {/* Line 3: Filter (Intellisense) */}
        {step >= 3 && (
          <div className="h-6 flex items-center relative">
             <div className="flex items-center">
                {step >= 3 && <span><span className="text-purple-400">val</span> clean_df = raw_df.</span>}
                {step === 3 && <span>fi</span>}
                {step >= 5 && <span>filter</span>}
                {step >= 6 && <span>(<span className="text-purple-400">$</span><span className="text-green-400">"amount"</span> &gt; 0)</span>}
                {step >= 3 && step < 7 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
             </div>
             
             {/* Intellisense Dropdown */}
             {step === 4 && (
                <div className="absolute left-[180px] top-6 z-30 w-48 bg-[#252526] border border-white/10 rounded shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                   <div className="px-2 py-1.5 bg-cyan-500/20 border-l-2 border-cyan-500 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} className="text-cyan-400" /><span className="text-white text-xs">filter</span></div>
                      <span className="text-[10px] text-gray-500">func</span>
                   </div>
                   <div className="px-2 py-1.5 hover:bg-white/5 flex items-center justify-between text-gray-400 cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} /><span>first</span></div>
                      <span className="text-[10px] text-gray-600">func</span>
                   </div>
                   <div className="px-2 py-1.5 hover:bg-white/5 flex items-center justify-between text-gray-400 cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} /><span>flatMap</span></div>
                      <span className="text-[10px] text-gray-600">func</span>
                   </div>
                </div>
             )}
          </div>
        )}

        {/* Line 4: withColumn */}
        {step >= 7 && (
          <div className="h-6 flex items-center relative pl-4">
             <div className="flex items-center">
                {step >= 8 && <span>.withColumn</span>}
                {step >= 9 && <span>(<span className="text-green-400">"date"</span>, to_date(<span className="text-purple-400">$</span><span className="text-green-400">"timestamp"</span>))</span>}
                {step >= 7 && step < 10 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
             </div>
          </div>
        )}

        {/* Line 5: AI Code (dropDuplicates) */}
        {step >= 10 && (
           <div className="h-6 flex items-center relative pl-4">
              <div className="flex items-center">
                 {step === 11 && (
                    <div className="flex items-center gap-2 animate-in fade-in duration-500">
                       <span className="text-gray-500 italic">.dropDuplicates(<span className="text-gray-500/70">"id"</span>)</span>
                       <span className="text-[10px] text-gray-500 border border-gray-700 rounded px-1.5 py-0.5 bg-white/5">Tab</span>
                    </div>
                 )}
                 {step >= 12 && (
                    <span>.dropDuplicates(<span className="text-green-400">"id"</span>)</span>
                 )}
                 {step >= 10 && step < 13 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
              </div>
           </div>
        )}

        {/* Line 6: Comment */}
        {step >= 13 && (
           <div className="h-6 flex items-center relative">
              <div className="flex items-center">
                 <span className="text-gray-500 italic">// Aggregate metrics by region</span>
                 {step >= 13 && step < 14 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
              </div>
           </div>
        )}

        {/* Line 7: GroupBy (Intellisense) */}
        {step >= 14 && (
           <div className="h-6 flex items-center relative">
              <div className="flex items-center">
                 <span><span className="text-purple-400">val</span> result = clean_df.</span>
                 {step === 14 && <span>gro</span>}
                 {step >= 16 && <span>groupBy</span>}
                 {step >= 17 && <span>(<span className="text-green-400">"region"</span>)</span>}
                 {step >= 14 && step < 18 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
              </div>

              {/* Intellisense Dropdown */}
              {step === 15 && (
                <div className="absolute left-[190px] top-6 z-30 w-48 bg-[#252526] border border-white/10 rounded shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                   <div className="px-2 py-1.5 bg-cyan-500/20 border-l-2 border-cyan-500 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} className="text-cyan-400" /><span className="text-white text-xs">groupBy</span></div>
                      <span className="text-[10px] text-gray-500">func</span>
                   </div>
                   <div className="px-2 py-1.5 hover:bg-white/5 flex items-center justify-between text-gray-400 cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} /><span>groupByKey</span></div>
                      <span className="text-[10px] text-gray-600">func</span>
                   </div>
                </div>
             )}
           </div>
        )}

        {/* Line 8: AI Code (agg) */}
        {step >= 18 && (
           <div className="h-6 flex items-center relative pl-4">
              <div className="flex items-center">
                 {step === 19 && (
                    <div className="flex items-center gap-2 animate-in fade-in duration-500">
                       <span className="text-gray-500 italic">.agg(sum(<span className="text-gray-500/70">"amount"</span>).as(<span className="text-gray-500/70">"total"</span>), count(<span className="text-gray-500/70">"*"</span>).as(<span className="text-gray-500/70">"count"</span>))</span>
                       <span className="text-[10px] text-gray-500 border border-gray-700 rounded px-1.5 py-0.5 bg-white/5">Tab</span>
                    </div>
                 )}
                 {step >= 20 && (
                    <span>.agg(sum(<span className="text-green-400">"amount"</span>).as(<span className="text-green-400">"total"</span>), count(<span className="text-green-400">"*"</span>).as(<span className="text-green-400">"count"</span>))</span>
                 )}
                 {step >= 18 && step < 21 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
              </div>
           </div>
        )}

        {/* Line 9: OrderBy */}
        {step >= 21 && (
           <div className="h-6 flex items-center relative pl-4">
              <div className="flex items-center">
                 <span>.orderBy(desc(<span className="text-green-400">"total"</span>))</span>
                 {step >= 21 && step < 22 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
              </div>
           </div>
        )}

        {/* Line 10: Display (Intellisense) */}
        {step >= 22 && (
           <div className="h-6 flex items-center relative">
              <div className="flex items-center">
                 {step === 22 && <span>dis</span>}
                 {step >= 24 && <span className="text-yellow-400">display</span>}
                 {step >= 25 && <span>(result)</span>}
                 <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>
              </div>

              {/* Intellisense Dropdown */}
              {step === 23 && (
                <div className="absolute left-0 top-6 z-30 w-48 bg-[#252526] border border-white/10 rounded shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                   <div className="px-2 py-1.5 bg-cyan-500/20 border-l-2 border-cyan-500 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} className="text-cyan-400" /><span className="text-white text-xs">display</span></div>
                      <span className="text-[10px] text-gray-500">func</span>
                   </div>
                   <div className="px-2 py-1.5 hover:bg-white/5 flex items-center justify-between text-gray-400 cursor-pointer">
                      <div className="flex items-center gap-2"><Code2 size={12} /><span>distinct</span></div>
                      <span className="text-[10px] text-gray-600">func</span>
                   </div>
                </div>
             )}
           </div>
        )}
      </div>
    </CodeCellContainer>
  );
};

const LanguageDemo = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const sequence = [
      { t: 1500, s: 1 }, // Open Menu
      { t: 2500, s: 2 }, // Highlight SQL
      { t: 3000, s: 3 }, // Switch to SQL (Magic command + Translation)
      { t: 4000, s: 4 }, // Type 'WHERE'
      { t: 4500, s: 5 }, // Type 'salary > 100000'
      { t: 5500, s: 6 }, // New Line
      { t: 6000, s: 7 }, // Type 'ORDER BY'
      { t: 7000, s: 8 }, // Type 'salary DESC'
    ];

    let timeouts = [];
    sequence.forEach(({ t, s }) => {
      timeouts.push(setTimeout(() => setStep(s), t));
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const isPython = step < 3;
  const language = isPython ? "PySpark (Python)" : "Spark SQL";
  
  const getLineCount = () => {
      if (isPython) return 2;
      if (step >= 6) return 4;
      if (step >= 3) return 3;
      return 2;
  }

  return (
    <CodeCellContainer language={language} lineCount={getLineCount()}>
       <div className="space-y-0 text-gray-300 font-mono text-sm min-h-[100px]">
         {isPython ? (
           <>
             <div className="h-6 flex items-center">
               <span className="text-purple-400">val</span>&nbsp;df = spark.read.table(<span className="text-green-400">"employees"</span>)
             </div>
             <div className="h-6 flex items-center">
               <span className="text-yellow-400">display</span>(df)
             </div>
           </>
         ) : (
           <>
             {/* Line 1: Magic Command */}
             <div className="h-6 flex items-center animate-in fade-in slide-in-from-bottom-2 duration-500">
               <span className="text-orange-400 font-bold">%%sql</span>
             </div>
             
             {/* Line 2: Translated Code */}
             <div className="h-6 flex items-center animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
               <span className="text-purple-400">SELECT</span>&nbsp;*&nbsp;<span className="text-purple-400">FROM</span>&nbsp;employees
             </div>

             {/* Line 3: Typing */}
             {step >= 4 && (
               <div className="h-6 flex items-center">
                 <span className="text-purple-400">WHERE</span>&nbsp;
                 {step >= 5 && <span>salary &gt; 100000</span>}
                 {step >= 4 && step < 6 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
               </div>
             )}

             {/* Line 4: Typing */}
             {step >= 6 && (
               <div className="h-6 flex items-center">
                 {step >= 7 && <span className="text-purple-400">ORDER BY</span>}
                 {step >= 7 && <span>&nbsp;</span>}
                 {step >= 8 && <span>salary <span className="text-purple-400">DESC</span></span>}
                 {step >= 6 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
               </div>
             )}
           </>
         )}

         {/* Language Menu Overlay */}
         {step >= 1 && step < 3 && (
            <div className="absolute right-0 bottom-0 z-30 w-48 bg-[#252526] border border-white/10 rounded-t-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
               <div className="px-3 py-2 hover:bg-white/5 flex items-center justify-between text-gray-400 cursor-pointer">
                   <span>PySpark (Python)</span>
                   {step === 1 && <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>}
               </div>
               <div className={`px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${step === 2 ? 'bg-cyan-500/20 text-white' : 'hover:bg-white/5 text-gray-400'}`}>
                   <span>Spark SQL</span>
                   {step === 2 && <Sparkles size={12} className="text-cyan-400" />}
               </div>
               <div className="px-3 py-2 hover:bg-white/5 flex items-center justify-between text-gray-400 cursor-pointer">
                   <span>Spark R</span>
               </div>
            </div>
         )}
       </div>
    </CodeCellContainer>
  );
};

const VisualizationDemo = () => {
  const [step, setStep] = useState(0);
  const [activeView, setActiveView] = useState('code'); // 'code' | 'result'
  const [chartConfig, setChartConfig] = useState({
    type: 'bar',
    showLabels: true,
    showLegend: true,
    xAxis: 'region',
    yAxis: 'amount'
  });
  
  useEffect(() => {
    const sequence = [
      { t: 1000, s: 1 }, // Type 'val df = ...'
      { t: 2000, s: 2 }, // Type 'display(df)'
      { t: 3000, s: 3 }, // Hover Run
      { t: 3500, s: 4 }, // Click Run (Start Loading)
      { t: 5500, s: 5 }, // Finish Loading (Show Table)
      { t: 6500, s: 6 }, // Hover +
      { t: 7000, s: 7 }, // Click + (Show Menu)
      { t: 8000, s: 8 }, // Select 'Visualization'
      { t: 9500, s: 9 }, // Show AI Suggestions (Rec 1)
      { t: 11000, s: 10 }, // Hover Next
      { t: 11500, s: 11 }, // Click Next (Rec 2)
      { t: 13000, s: 12 }, // Hover Chart
      { t: 14000, s: 13 }, // Click Chart
      { t: 14500, s: 14 }, // Show Chart
    ];

    let timeouts = [];
    sequence.forEach(({ t, s }) => {
      timeouts.push(setTimeout(() => {
         setStep(s);
         if (s === 5) setActiveView('result'); // Auto switch to result when done
      }, t));
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const hasOutput = step >= 5;
  const isLoading = step === 4;
  
  // Determine current recommendation index based on step
  const currentRecIndex = step >= 11 ? 1 : 0;

  // Simulated Data
  const data = [
     { region: 'North', amount: 65000, color: '#06b6d4' }, // cyan-500
     { region: 'South', amount: 45000, color: '#a855f7' }, // purple-500
     { region: 'East', amount: 85000, color: '#22c55e' }, // green-500
     { region: 'West', amount: 55000, color: '#eab308' }, // yellow-500
  ];

  const recommendations = [
    {
      title: "Sales Trend",
      type: "line",
      icon: LineChart,
      desc: "Analyze sales performance over time.",
      insight: "Upward trend observed in Q4.",
      color: "text-purple-400",
      chart: (
        <div className="w-full h-32 border-b border-l border-gray-600 relative">
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path d="M0,128 L30,100 L60,110 L90,60 L120,80 L150,20" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
           </svg>
        </div>
      )
    },
    {
      title: "Region Distribution",
      type: "bar",
      icon: BarChart2,
      desc: "Compare sales across different regions.",
      insight: "East region outperforms others by 15%.",
      color: "text-cyan-400",
      chart: (
         <div className="w-full h-32 flex items-end justify-between px-4 gap-2">
            {[65, 45, 85, 55].map((h, i) => (
               <div key={i} style={{height: `${h}%`}} className={`w-full rounded-t ${['bg-cyan-500/60', 'bg-purple-500/60', 'bg-green-500/60', 'bg-yellow-500/60'][i]}`}></div>
            ))}
         </div>
      )
    },
    {
      title: "Discount Impact",
      type: "scatter",
      icon: Box,
      desc: "Correlation between discount and sales volume.",
      insight: "No significant correlation found.",
      color: "text-yellow-400",
      chart: (
         <div className="w-full h-32 grid grid-cols-5 gap-2 p-2">
            {[...Array(15)].map((_, i) => (
               <div key={i} className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" style={{marginLeft: Math.random()*20, marginTop: Math.random()*20}}></div>
            ))}
         </div>
      )
    }
  ];

  const maxVal = Math.max(...data.map(d => d.amount));

  return (
    <CodeCellContainer 
      lineCount={activeView === 'code' ? 12 : 0} 
      showGutter={activeView === 'code'}
      language={activeView === 'code' ? "PySpark (Python)" : "Result"}
      status={isLoading ? (
         <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
            <Loader2 size={12} className="animate-spin" />
            <span>Running command...</span>
         </div>
      ) : hasOutput ? (
         <div className="flex items-center gap-2 text-green-400">
            <Check size={12} />
            <span>Command executed in 2.1s</span>
         </div>
      ) : null}
      toolbarControls={hasOutput && (
         <div className="flex bg-black/20 rounded p-0.5 ml-4">
            <div 
               className={`px-3 py-0.5 rounded text-xs cursor-pointer transition-colors ${activeView === 'code' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
               onClick={() => setActiveView('code')}
            >
               Code
            </div>
            <div 
               className={`px-3 py-0.5 rounded text-xs cursor-pointer transition-colors ${activeView === 'result' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
               onClick={() => setActiveView('result')}
            >
               Result
            </div>
         </div>
      )}
    >
      <div className="flex flex-col relative h-[320px]">
         {/* Simulated Cursor */}
         <div 
            className="absolute z-50 pointer-events-none transition-all duration-500 ease-in-out text-white drop-shadow-lg"
            style={{
               opacity: step >= 3 && step < 14 ? 1 : 0,
               left: step === 3 ? '40px' : step === 6 ? '180px' : step === 7 ? '180px' : step === 8 ? '180px' : step === 10 ? '90%' : step === 11 ? '90%' : step === 12 ? '50%' : step === 13 ? '50%' : '50%',
               top: step === 3 ? '-35px' : step === 6 ? '45px' : step === 7 ? '45px' : step === 8 ? '80px' : step === 10 ? '50%' : step === 11 ? '50%' : step === 12 ? '50%' : step === 13 ? '50%' : '50%',
            }}
         >
            <MousePointer2 size={24} className="fill-black" />
         </div>

         {activeView === 'code' ? (
           // Code View
           <div className="space-y-0 text-gray-300 font-mono text-sm">
             <div className="h-6 flex items-center">
               {step >= 1 && (
                 <>
                   <span className="text-purple-400">val</span>&nbsp;df = spark.read.table(<span className="text-green-400">"sales_lakehouse"</span>)
                 </>
               )}
               {step < 1 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
             </div>
             <div className="h-6 flex items-center">
               {step >= 2 && (
                 <>
                   <span className="text-yellow-400">display</span>(df)
                 </>
               )}
               {step >= 1 && step < 3 && <span className="w-0.5 h-4 bg-cyan-400 animate-pulse ml-0.5"></span>}
             </div>
           </div>
         ) : isLoading ? (
            // Loading View
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-3 h-full">
               <Loader2 size={32} className="animate-spin text-cyan-400" />
               <div className="text-xs font-mono">Running command...</div>
               <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 animate-progress"></div>
               </div>
            </div>
         ) : (
           // Output View
           <div className="h-full flex flex-col animate-in fade-in duration-500">
              {/* Result Tabs */}
              <div className="flex border-b border-white/10 mb-4 relative">
                 <div className={`px-4 py-2 border-b-2 text-xs cursor-pointer ${step < 8 ? 'border-cyan-500 text-white' : 'border-transparent text-gray-400'}`}>Table</div>
                 {step >= 8 && (
                    <div className="px-4 py-2 border-b-2 border-cyan-500 text-white text-xs flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                       Chart 1 <X size={10} className="hover:text-white cursor-pointer" />
                    </div>
                 )}
                 <div className={`px-2 py-2 text-gray-400 flex items-center cursor-pointer hover:text-white transition-colors ${step >= 6 && step < 8 ? 'bg-white/5' : ''}`}>
                    <Plus size={14} />
                 </div>

                 {/* Dropdown Menu */}
                 {step === 7 && (
                    <div className="absolute left-20 top-8 z-30 w-40 bg-[#252526] border border-white/10 rounded shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                       <div className="px-3 py-2 hover:bg-white/5 flex items-center gap-2 text-gray-300 cursor-pointer">
                          <BarChart2 size={14} />
                          <span className="text-xs">Visualization</span>
                       </div>
                       <div className="px-3 py-2 hover:bg-white/5 flex items-center gap-2 text-gray-300 cursor-pointer">
                          <User size={14} />
                          <span className="text-xs">Profile</span>
                       </div>
                    </div>
                 )}
              </div>
              
              {/* Content */}
              <div className="flex-1 relative overflow-hidden">
                 {step < 8 ? (
                    // Table View
                    <div className="overflow-hidden rounded border border-white/5 h-full">
                       <div className="grid grid-cols-5 bg-white/5 text-xs text-gray-400 p-2 font-medium">
                          <div>region</div>
                          <div>date</div>
                          <div>amount</div>
                          <div>category</div>
                          <div>discount</div>
                       </div>
                       {[1,2,3,4,5,6,7,8].map((i) => (
                          <div key={i} className="grid grid-cols-5 text-xs text-gray-500 p-2 border-t border-white/5 hover:bg-white/5">
                             <div>{['North', 'South', 'East', 'West'][i%4]}</div>
                             <div>2024-01-0{i}</div>
                             <div>${(Math.random() * 1000).toFixed(2)}</div>
                             <div>{['Electronics', 'Furniture', 'Office'][i%3]}</div>
                             <div>{(Math.random() * 0.2).toFixed(2)}%</div>
                          </div>
                       ))}
                    </div>
                 ) : step < 14 ? (
                    // AI Suggestions Carousel
                    <div className="h-full flex flex-col">
                       <div className="flex items-center gap-2 mb-4 text-cyan-400 animate-in fade-in slide-in-from-top-2">
                          <Sparkles size={16} />
                          <span className="text-sm font-bold">AI Recommended Visualizations</span>
                       </div>
                       
                       <div className="flex-1 flex items-center gap-4 animate-in fade-in zoom-in-95 duration-300">
                          {/* Previous Button */}
                          <div className="p-2 rounded-full bg-white/5 text-gray-500 cursor-not-allowed">
                             <ChevronLeft size={20} />
                          </div>

                          {/* Active Card */}
                          <div className={`flex-1 bg-[#252526] border border-white/10 rounded-lg p-4 relative overflow-hidden group cursor-pointer transition-all ${step >= 12 ? 'border-cyan-500/50 bg-cyan-500/5' : ''}`}>
                             <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-gray-200">
                                   {React.createElement(recommendations[currentRecIndex].icon, { size: 18, className: recommendations[currentRecIndex].color })}
                                   <span className="font-medium">{recommendations[currentRecIndex].title}</span>
                                </div>
                                <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                                   Recommended
                                </span>
                             </div>
                             
                             <div className="mb-4 opacity-80">
                                {recommendations[currentRecIndex].chart}
                             </div>

                             <div className="flex items-center justify-between">
                                <div className="text-xs text-gray-400">
                                   {recommendations[currentRecIndex].insight}
                                </div>
                                <div className="text-[10px] text-gray-500 flex items-center gap-1">
                                   Click to visualize <ArrowRight size={10} />
                                </div>
                             </div>
                          </div>

                          {/* Next Button */}
                          <div className={`p-2 rounded-full transition-colors ${step >= 10 ? 'bg-white/10 text-white cursor-pointer' : 'bg-white/5 text-gray-500'}`}>
                             <ChevronRight size={20} />
                          </div>
                       </div>

                       {/* Dots Indicator */}
                       <div className="flex justify-center gap-2 mt-4">
                          {recommendations.map((_, i) => (
                             <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentRecIndex ? 'bg-cyan-500' : 'bg-white/10'}`}></div>
                          ))}
                       </div>
                    </div>
                 ) : (
                    // Final Chart + Advanced Config
                    <div className="flex gap-4 h-full animate-in fade-in duration-500">
                       <div className="flex-1 bg-[#1e1e1e] rounded-lg border border-white/10 p-4 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                             <h4 className="text-sm font-medium text-gray-300">Region Distribution</h4>
                             <div className="flex gap-2">
                                <div className="p-1.5 rounded bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"><Maximize2 size={14} className="text-gray-400" /></div>
                                <div className="p-1.5 rounded bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"><Download size={14} className="text-gray-400" /></div>
                             </div>
                          </div>
                          
                          {/* Interactive Chart */}
                          <div className="flex-1 flex items-end justify-between px-8 pb-4 gap-4 relative">
                             {/* Y-Axis Grid */}
                             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 pl-8 pr-4">
                                {[100, 75, 50, 25, 0].map((val) => (
                                   <div key={val} className="w-full border-b border-white/5 flex items-center">
                                      <span className="text-[10px] text-gray-600 -ml-8 w-6 text-right">{val}k</span>
                                   </div>
                                ))}
                             </div>

                             {data.map((d, i) => (
                                <div key={i} className="relative flex-1 h-full flex items-end group">
                                   <div 
                                      style={{ 
                                         height: `${(d.amount / 100000) * 100}%`,
                                         backgroundColor: d.color
                                      }} 
                                      className="w-full rounded-t opacity-80 hover:opacity-100 transition-all duration-300 relative"
                                   >
                                      {chartConfig.showLabels && (
                                         <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono">
                                            ${(d.amount/1000).toFixed(0)}k
                                         </div>
                                      )}
                                   </div>
                                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-medium">
                                      {d.region}
                                   </div>
                                </div>
                             ))}
                          </div>
                          
                          {/* Legend */}
                          {chartConfig.showLegend && (
                             <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/5">
                                {data.map((d, i) => (
                                   <div key={i} className="flex items-center gap-1.5">
                                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: d.color}}></div>
                                      <span className="text-[10px] text-gray-400">{d.region}</span>
                                   </div>
                                ))}
                             </div>
                          )}
                       </div>
                       
                       {/* Advanced Config Pane */}
                       <div className="w-64 border-l border-white/10 pl-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                          <div className="flex items-center justify-between pb-2 border-b border-white/5">
                             <span className="text-xs font-bold text-white">Configuration</span>
                             <Sliders size={12} className="text-gray-500" />
                          </div>

                          {/* General */}
                          <div className="space-y-3">
                             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                <Layout size={10} /> General
                             </div>
                             <div className="space-y-2">
                                <div>
                                   <label className="text-[10px] text-gray-400 block mb-1">Chart Type</label>
                                   <div className="p-2 bg-white/5 rounded text-xs text-gray-300 flex items-center justify-between border border-white/5 cursor-pointer hover:bg-white/10">
                                      <div className="flex items-center gap-2"><BarChart2 size={12} /> Bar Chart</div>
                                      <ChevronDown size={12} />
                                   </div>
                                </div>
                             </div>
                          </div>

                          {/* Data */}
                          <div className="space-y-3">
                             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                <Database size={10} /> Data
                             </div>
                             <div className="space-y-2">
                                <div>
                                   <label className="text-[10px] text-gray-400 block mb-1">X-Axis</label>
                                   <div className="p-2 bg-white/5 rounded text-xs text-gray-300 flex items-center gap-2 border border-white/5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                      <span>{chartConfig.xAxis}</span>
                                   </div>
                                </div>
                                <div>
                                   <label className="text-[10px] text-gray-400 block mb-1">Y-Axis</label>
                                   <div className="p-2 bg-white/5 rounded text-xs text-gray-300 flex items-center gap-2 border border-white/5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                      <span>{chartConfig.yAxis} (Sum)</span>
                                   </div>
                                </div>
                             </div>
                          </div>

                          {/* Display */}
                          <div className="space-y-3">
                             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                <Monitor size={10} /> Display
                             </div>
                             <div 
                                className="flex items-center justify-between cursor-pointer group"
                                onClick={() => setChartConfig(c => ({...c, showLabels: !c.showLabels}))}
                             >
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Show Labels</span>
                                <div className={`w-8 h-4 rounded-full relative transition-colors ${chartConfig.showLabels ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                                   <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${chartConfig.showLabels ? 'right-0.5' : 'left-0.5'}`}></div>
                                </div>
                             </div>
                             <div 
                                className="flex items-center justify-between cursor-pointer group"
                                onClick={() => setChartConfig(c => ({...c, showLegend: !c.showLegend}))}
                             >
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Show Legend</span>
                                <div className={`w-8 h-4 rounded-full relative transition-colors ${chartConfig.showLegend ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                                   <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${chartConfig.showLegend ? 'right-0.5' : 'left-0.5'}`}></div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 )}
              </div>
           </div>
         )}
      </div>
    </CodeCellContainer>
  );
};

const MarkdownDemo = ({ mode }) => {
  const [step, setStep] = useState(0);
  const [interactive, setInteractive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Interactive Styles State
  const [styles, setStyles] = useState({
    titleType: 'Heading 1',
    subtitleType: 'Heading 3',
    body: { bold: false, italic: false, underline: false, strikethrough: false },
    listType: 'disc'
  });

  useEffect(() => {
    setStep(0);
    setInteractive(false);
    setStyles({
        titleType: 'Heading 1',
        subtitleType: 'Heading 3',
        body: { bold: false, italic: false, underline: false, strikethrough: false },
        listType: 'disc'
    });

    let sequence = [];
    
    if (mode === 'richtext') {
      sequence = [
        { t: 500, s: 1 }, // Type Title
        { t: 1000, s: 2 }, // Type Body
        { t: 1500, s: 3 }, // Type Objectives
        { t: 2000, s: 4 }, // Type List
        { t: 3000, s: 5 }, // Select Title
        { t: 3500, s: 6 }, // Open Dropdown
        { t: 4000, s: 7 }, // Hover Heading 1
        { t: 4500, s: 8 }, // Apply Heading 1
        { t: 5500, s: 9 }, // Select Subtitle
        { t: 6000, s: 10 }, // Open Dropdown
        { t: 6500, s: 11 }, // Hover Heading 3
        { t: 7000, s: 12 }, // Apply Heading 3
        { t: 8000, s: 13 }, // Select List
        { t: 8500, s: 14 }, // Hover List Icon
        { t: 9000, s: 15 }, // Apply List
        { t: 10500, s: 16 }, // Hover Complete
        { t: 11000, s: 17 }, // Click Complete (Display Mode)
      ];
    } else if (mode === 'media') {
      sequence = [
        { t: 800, s: 1 }, // Drag Image Start
        { t: 1800, s: 2 }, // Drag Image Over Dropzone
        { t: 2500, s: 3 }, // Drop Image
        { t: 4000, s: 4 }, // Drag Video Start
        { t: 5000, s: 5 }, // Drag Video Over Content
        { t: 5700, s: 6 }, // Drop Video
        { t: 7000, s: 7 }, // Hover Done
        { t: 7500, s: 8 }, // Click Done (Display Mode)
      ];
    }

    let timeouts = [];
    sequence.forEach(({ t, s }) => {
      timeouts.push(setTimeout(() => setStep(s), t));
    });

    return () => timeouts.forEach(clearTimeout);
  }, [mode]);

  const getHeadingClass = (type) => {
      switch(type) {
          case 'Heading 1': return 'text-2xl font-bold text-white mb-2';
          case 'Heading 2': return 'text-xl font-bold text-white mb-2';
          case 'Heading 3': return 'text-lg font-bold text-white mb-2';
          case 'Heading 4': return 'text-base font-bold text-white mb-2';
          default: return 'text-base text-gray-300 mb-1';
      }
  };

  const toggleBodyStyle = (style) => {
      if (!interactive) return;
      setStyles(prev => ({
          ...prev,
          body: { ...prev.body, [style]: !prev.body[style] }
      }));
  };

  return (
    <CodeCellContainer 
      lineCount={0} 
      language="Markdown"
      showGutter={false}
      showRunButton={false}
    >
      <div className="h-[320px] flex flex-col relative">
        {/* Toolbar - Show when editing (step < 17) OR interactive mode */}
        {mode === 'richtext' && (step < 17 || interactive) && (
          <div className="flex items-center justify-between p-2 border-b border-white/10 bg-white/5 animate-in fade-in slide-in-from-top-2 duration-300 relative z-20">
             <div className="flex items-center gap-1">
                 {/* Bold */}
                 <div onClick={() => toggleBodyStyle('bold')} className={`p-1.5 rounded hover:bg-white/10 cursor-pointer transition-colors ${styles.body.bold && interactive ? 'bg-white/20 text-white' : 'text-gray-400'}`}><Bold size={14} /></div>
                 {/* Italic */}
                 <div onClick={() => toggleBodyStyle('italic')} className={`p-1.5 rounded hover:bg-white/10 cursor-pointer transition-colors ${styles.body.italic && interactive ? 'bg-white/20 text-white' : 'text-gray-400'}`}><Italic size={14} /></div>
                 {/* Underline */}
                 <div onClick={() => toggleBodyStyle('underline')} className={`p-1.5 rounded hover:bg-white/10 cursor-pointer transition-colors ${styles.body.underline && interactive ? 'bg-white/20 text-white' : 'text-gray-400'}`}><Underline size={14} /></div>
                 {/* Strikethrough */}
                 <div onClick={() => toggleBodyStyle('strikethrough')} className={`p-1.5 rounded hover:bg-white/10 cursor-pointer transition-colors ${styles.body.strikethrough && interactive ? 'bg-white/20 text-white' : 'text-gray-400'}`}><Strikethrough size={14} /></div>
                 
                 <div className="w-px h-4 bg-white/10 mx-1" />

                 {/* Code */}
                 <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Code2 size={14} /></div>
                 {/* Link */}
                 <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Link size={14} /></div>

                 <div className="w-px h-4 bg-white/10 mx-1" />

                 {/* Paragraph Dropdown */}
                 <div 
                    onClick={() => interactive && setShowDropdown(!showDropdown)}
                    className={`relative flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 cursor-pointer transition-colors ${(interactive ? showDropdown : (step === 6 || step === 7 || step === 10 || step === 11)) ? 'bg-white/20 text-white' : 'text-gray-400'}`}
                 >
                    <span className="text-xs font-medium">
                      {interactive ? styles.titleType : (step >= 8 && step < 12 ? 'Heading 1' : step >= 12 ? 'Heading 3' : 'Paragraph')}
                    </span>
                    <ChevronDown size={12} />
                    
                    {/* Dropdown Menu */}
                    {(interactive ? showDropdown : (step === 6 || step === 7 || step === 10 || step === 11)) && (
                      <div className="absolute top-full left-0 mt-1 w-32 bg-[#252526] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col py-1 animate-in fade-in zoom-in-95 duration-100">
                        {['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'].map((item) => (
                          <div 
                            key={item} 
                            onClick={(e) => {
                                e.stopPropagation();
                                if (interactive) {
                                    setStyles(s => ({...s, titleType: item}));
                                    setShowDropdown(false);
                                }
                            }}
                            className={`px-3 py-1.5 text-xs flex items-center cursor-pointer transition-colors ${
                              (interactive ? styles.titleType === item : ((step === 7 && item === 'Heading 1') || (step === 11 && item === 'Heading 3')))
                                ? 'bg-cyan-500/20 text-cyan-400' 
                                : 'text-gray-300 hover:bg-white/5'
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                 </div>

                 <div className="w-px h-4 bg-white/10 mx-1" />

                 {/* Unordered List */}
                 <div 
                    onClick={() => interactive && setStyles(s => ({...s, listType: s.listType === 'disc' ? 'none' : 'disc'}))}
                    className={`p-1.5 rounded hover:bg-white/10 cursor-pointer transition-colors ${(interactive ? styles.listType === 'disc' : (step === 14 || step >= 15)) ? 'bg-white/20 text-white' : 'text-gray-400'}`}
                 >
                    <List size={14} />
                 </div>
                 {/* Ordered List */}
                 <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><ListOrdered size={14} /></div>
                 
                 <div className="w-px h-4 bg-white/10 mx-1" />

                 {/* Image */}
                 <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><ImageIcon size={14} /></div>
             </div>

             {/* Complete Button */}
             <div 
                onClick={() => interactive && setInteractive(false)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-300 ${step >= 16 ? 'bg-green-500 text-white shadow-lg shadow-green-500/20 scale-105' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
             >
                <Check size={12} />
                <span className="text-xs font-medium">Done</span>
             </div>
          </div>
        )}
        
        {/* Media Toolbar - Only show when editing (step < 8) */}
        {mode === 'media' && step < 8 && (
           <div className="flex items-center justify-between p-2 border-b border-white/10 bg-white/5 animate-in fade-in slide-in-from-top-2 duration-300 relative z-20">
              <div className="flex items-center gap-1">
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Bold size={14} /></div>
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Italic size={14} /></div>
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Underline size={14} /></div>
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Strikethrough size={14} /></div>
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Code2 size={14} /></div>
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><Link size={14} /></div>
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  <div className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 cursor-pointer text-gray-400">
                     <span className="text-xs font-medium">Paragraph</span>
                     <ChevronDown size={12} />
                  </div>
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><List size={14} /></div>
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><ListOrdered size={14} /></div>
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  <div className="p-1.5 rounded hover:bg-white/10 cursor-pointer text-gray-400"><ImageIcon size={14} /></div>
              </div>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-300 ${step >= 7 ? 'bg-green-500 text-white shadow-lg shadow-green-500/20 scale-105' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                <Check size={12} />
                <span className="text-xs font-medium">Done</span>
             </div>
           </div>
        )}

        {/* Content */}
        <div 
            className={`flex-1 p-6 font-sans text-sm text-gray-300 relative ${mode === 'media' ? 'overflow-hidden' : 'overflow-y-auto'} ${step >= 17 && !interactive ? 'cursor-pointer hover:bg-white/5 transition-colors' : ''}`}
            onClick={() => { if(step >= 17 && !interactive) setInteractive(true); }}
        >
           {mode === 'richtext' && (
              <div className={`space-y-4 transition-all duration-500 ${step >= 17 ? 'text-gray-200' : ''}`}>
                 {/* Interactive Mode Rendering */}
                 {interactive ? (
                    <>
                       {/* Title */}
                       <div className={getHeadingClass(styles.titleType)}>
                          Online Retail Sales Analysis
                       </div>

                       {/* Description */}
                       <div className={`mb-4 text-gray-400 leading-relaxed ${styles.body.bold ? 'font-bold' : ''} ${styles.body.italic ? 'italic' : ''} ${styles.body.underline ? 'underline' : ''} ${styles.body.strikethrough ? 'line-through' : ''}`}>
                          Exploratory data analysis of 2024 online retail transactions to understand revenue drivers, seasonal patterns, and customer segments.
                       </div>

                       {/* Subtitle */}
                       <div className={getHeadingClass(styles.subtitleType)}>
                          Objectives
                       </div>

                       {/* List */}
                       {styles.listType === 'disc' ? (
                           <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
                              <li>Load and inspect raw transaction data (CSV exports from the data warehouse).</li>
                              <li>Clean missing values, duplicates, and inconsistent product/category labels.</li>
                              <li>Explore sales trends by date, product category, and customer region.</li>
                              <li>Build simple baseline models to forecast daily revenue.</li>
                              <li>Summarize key findings and define follow-up analysis questions.</li>
                           </ul>
                       ) : (
                           <div className="space-y-1 text-gray-400">
                              <div>Load and inspect raw transaction data (CSV exports from the data warehouse).</div>
                              <div>Clean missing values, duplicates, and inconsistent product/category labels.</div>
                              <div>Explore sales trends by date, product category, and customer region.</div>
                              <div>Build simple baseline models to forecast daily revenue.</div>
                              <div>Summarize key findings and define follow-up analysis questions.</div>
                           </div>
                       )}
                    </>
                 ) : (
                    /* Animation Mode Rendering */
                    <>
                       {step === 0 && <span className="animate-pulse border-r-2 border-cyan-500 h-5 inline-block align-middle"></span>}
                       
                       {step >= 1 && (
                          <>
                             {/* Title */}
                             <div className={`transition-all duration-300 ${(step >= 5 && step <= 7) ? 'bg-blue-500/30' : ''}`}>
                                <div className={`${step >= 8 ? 'text-2xl font-bold text-white mb-2' : 'mb-1'}`}>
                                   Online Retail Sales Analysis
                                   {step === 1 && <span className="animate-pulse border-r-2 border-cyan-500 h-5 inline-block align-middle ml-1"></span>}
                                </div>
                             </div>

                             {/* Description */}
                             {step >= 2 && (
                                 <div className="mb-4 text-gray-400 leading-relaxed">
                                    Exploratory data analysis of 2024 online retail transactions to understand revenue drivers, seasonal patterns, and customer segments.
                                    {step === 2 && <span className="animate-pulse border-r-2 border-cyan-500 h-4 inline-block align-middle ml-1"></span>}
                                 </div>
                             )}

                             {/* Subtitle */}
                             {step >= 3 && (
                                 <div className={`transition-all duration-300 ${(step >= 9 && step <= 11) ? 'bg-blue-500/30' : ''}`}>
                                    <div className={`${step >= 12 ? 'text-lg font-bold text-white mb-2' : 'mb-1'}`}>
                                       Objectives
                                       {step === 3 && <span className="animate-pulse border-r-2 border-cyan-500 h-5 inline-block align-middle ml-1"></span>}
                                    </div>
                                 </div>
                             )}

                             {/* List */}
                             {step >= 4 && (
                                 <div className={`transition-all duration-300 ${(step >= 13 && step <= 14) ? 'bg-blue-500/30' : ''}`}>
                                    {step >= 15 ? (
                                       <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
                                          <li>Load and inspect raw transaction data (CSV exports from the data warehouse).</li>
                                          <li>Clean missing values, duplicates, and inconsistent product/category labels.</li>
                                          <li>Explore sales trends by date, product category, and customer region.</li>
                                          <li>Build simple baseline models to forecast daily revenue.</li>
                                          <li>Summarize key findings and define follow-up analysis questions.</li>
                                       </ul>
                                    ) : (
                                       <div className="space-y-1 text-gray-400">
                                          <div>Load and inspect raw transaction data (CSV exports from the data warehouse).</div>
                                          <div>Clean missing values, duplicates, and inconsistent product/category labels.</div>
                                          <div>Explore sales trends by date, product category, and customer region.</div>
                                          <div>Build simple baseline models to forecast daily revenue.</div>
                                          <div>Summarize key findings and define follow-up analysis questions.</div>
                                          {step === 4 && <span className="animate-pulse border-r-2 border-cyan-500 h-4 inline-block align-middle ml-1"></span>}
                                       </div>
                                    )}
                                 </div>
                             )}
                          </>
                       )}
                    </>
                 )}
              </div>
           )}

           {mode === 'media' && (
              <div className={`h-full relative flex flex-col gap-4 transition-all duration-500 ${step >= 8 ? 'text-gray-200' : ''}`}>
                 {/* Content Area */}
                 <div className="space-y-4">
                    {/* Image */}
                    {step >= 3 && (
                        <div className="rounded-lg overflow-hidden border border-white/10 animate-in fade-in zoom-in duration-300 relative group">
                           <div className="h-40 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-end justify-center p-4 gap-2">
                              {[40, 70, 50, 90, 60].map((h, i) => (
                                 <div key={i} style={{height: `${h}%`}} className="w-8 bg-cyan-500/50 rounded-t"></div>
                              ))}
                           </div>
                           {/* Hover overlay simulation */}
                           <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="p-1 bg-black/50 rounded text-white"><Trash2 size={12}/></div>
                           </div>
                        </div>
                    )}

                    {/* Video */}
                    {step >= 6 && (
                        <div className="rounded-lg overflow-hidden border border-white/10 animate-in fade-in zoom-in duration-300 relative">
                           <div className="h-40 bg-black flex items-center justify-center relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
                              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 z-10">
                                 <Play size={20} className="fill-white text-white ml-1" />
                              </div>
                              <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2">
                                 <div className="text-[10px] text-white">0:00 / 1:45</div>
                                 <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-cyan-500" />
                                 </div>
                              </div>
                           </div>
                        </div>
                    )}
                 </div>

                 {/* Drop Zone / Insertion Point */}
                 {step < 3 && (
                    <div className={`border-2 border-dashed rounded-lg flex-1 min-h-[100px] flex flex-col items-center justify-center text-gray-500 transition-colors duration-300 ${step === 2 ? 'border-cyan-500 bg-cyan-500/5 text-cyan-400' : 'border-white/10'}`}>
                       <ImageIcon size={32} className={`mb-2 transition-opacity ${step === 2 ? 'opacity-100' : 'opacity-50'}`} />
                       <span>Drag & Drop image here</span>
                    </div>
                 )}
                 
                 {/* Insertion Line for Video */}
                 {step === 5 && (
                    <div className="h-1 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                 )}

                 {/* Dragged Image Item */}
                 {(step === 1 || step === 2) && (
                    <div className={`absolute z-50 bg-[#252526] p-3 rounded-lg border border-white/20 shadow-2xl flex items-center gap-3 w-48 transition-all duration-700 ease-in-out ${step === 2 ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-90' : 'top-[80%] left-[80%] rotate-3'}`}>
                       <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center text-cyan-400">
                          <ImageIcon size={16} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-medium text-white">chart.png</span>
                          <span className="text-[10px] text-gray-400">PNG Image</span>
                       </div>
                    </div>
                 )}

                 {/* Dragged Video Item */}
                 {(step === 4 || step === 5) && (
                    <div className={`absolute z-50 bg-[#252526] p-3 rounded-lg border border-white/20 shadow-2xl flex items-center gap-3 w-48 transition-all duration-700 ease-in-out ${step === 5 ? 'top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-90' : 'top-[80%] left-[80%] rotate-3'}`}>
                       <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center text-purple-400">
                          <Video size={16} />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-xs font-medium text-white">demo.mp4</span>
                          <span className="text-[10px] text-gray-400">MP4 Video</span>
                       </div>
                    </div>
                 )}
              </div>
           )}
        </div>
      </div>
    </CodeCellContainer>
  );
};

const MarkdownCellFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  const features = [
    {
      title: "Rich Text Editor",
      desc: "Write documentation with ease using rich text toolbar.",
      icon: Type,
      color: "text-blue-400",
      mode: 'richtext'
    },
    {
      title: "Drag & Drop Media",
      desc: "Drag any media into the documentation.",
      icon: ImageIcon,
      color: "text-pink-400",
      mode: 'media'
    }
  ];

  const handleFeatureClick = (index) => {
    if (activeFeature === index) {
      setResetKey(prev => prev + 1);
    } else {
      setActiveFeature(index);
      setResetKey(0);
    }
  };

  return (
    <div className="mt-12 mb-24 p-8 bg-[#111111] border border-white/10 rounded-3xl">
       <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Feature Demo Area - Left Side (8 cols) */}
          <div className="lg:col-span-8 relative min-h-[400px] bg-[#0c0c0e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col order-2 lg:order-1">
             {/* Background Image */}
             <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ 
                   backgroundImage: 'url(/cover-background-2.png)', 
                   backgroundSize: 'cover', 
                   backgroundPosition: 'center' 
                }}
             />
             
             <div className="relative flex-1 p-8 flex items-center justify-center overflow-hidden">
                <MarkdownDemo key={`${activeFeature}-${resetKey}`} mode={features[activeFeature].mode} />
             </div>
          </div>

          {/* Feature List - Right Side (4 cols) */}
          <div className="lg:col-span-4 space-y-4 order-1 lg:order-2">
             <h3 className="text-xl text-white font-bold mb-2">Basics of a markdown cell</h3>
             <p className="text-gray-400 mb-6">A Markdown cell is for human‑readable text and documentation.</p>
             {features.map((f, i) => (
                <div 
                  key={i}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-[#1e1e1e] border-cyan-500/50 shadow-lg shadow-cyan-500/10' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                  onClick={() => handleFeatureClick(i)}
                >
                   <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-[#0c0c0e] border border-white/10 ${f.color}`}>
                         <f.icon size={20} />
                      </div>
                      <div>
                         <h3 className={`text-base font-bold mb-1 ${activeFeature === i ? 'text-white' : 'text-gray-300'}`}>{f.title}</h3>
                         <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

// --- GrowingIO CONTENT COMPONENT ---
const GrowingIOContent = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-gray-500 mb-4 font-mono text-sm">{'// 2020 - 2022'}</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-6">
          GrowingIO: <span className="text-cyan-400">Building a Design Culture Foundation</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-8">
          Led product design for China's leading customer data platform, serving over 1000+ enterprise clients
          including Starbucks, BMW, and Lenovo with data-driven growth solutions.
        </p>

        {/* Cover Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
          <img 
            src="/gio-cover.png" 
            alt="GrowingIO Platform"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-12 rounded-xl items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layout size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GrowingIO Platform</h3>
              <p className="text-gray-400 text-sm">Data Analytics & Customer Journey Platform</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        <p className="text-gray-400 leading-relaxed mt-6">
          In October 2020, I returned to China and joined GrowingIO as the Product Design Manager. My mission was to build the design team from the ground up and rejuvenate the design culture at this pioneering data analytics company.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* Understanding Our Users Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Understanding Our Users</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Our small but dedicated design team committed to establishing our design values, processes, and standards. We conducted extensive user and market research to create essential personas that would steer our design efforts effectively. To gain a deep understanding of our primary users, we undertook a series of contextual inquiries and user interviews, which led us to identify three main personas: the Data Analyst, the IT/Data Manager, and the Data Consumer.
        </p>

        {/* Image Placeholder */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
          <img 
            src="/GIO-personas.png" 
            alt="GrowingIO User Personas"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-12 rounded-xl items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <User size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">User Personas</h3>
              <p className="text-gray-400 text-sm">Data Analyst • IT/Data Manager • Data Consumer</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* Principles Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Principles</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          With these personas in hand and through several rounds of collaborative discussions, we defined our GrowingIO (GIO) design values. These values serve a dual purpose: First, they highlight the most critical aspects to consider when designing products and making decisions. Second, they help us strike a balance when weighing the pros and cons of different approaches. This framework ensures we remain user-focused and maintain consistency throughout our design processes.
        </p>

        {/* Three Cards in a Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Data Story Telling */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Data Story Telling</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Listen to users' needs. Understand their problems and goals.
            </p>
          </div>

          {/* Card 2: Complexity to Simplicity */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-purple-400 mb-4">Complexity to Simplicity</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Break down complex tasks. Prioritize essential tasks over secondary ones.
            </p>
          </div>

          {/* Card 3: Experiments and Tests */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-bold text-green-400 mb-4">Experiments and Tests</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Be brave to innovate and ideate. Be careful to test solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* GIO Visualizations Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">GIO Visualizations</h2>

        {/* Cover Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group mb-6">
          <img 
            src="/gio-viz.png" 
            alt="GIO Visualizations"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-12 rounded-xl items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layout size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GIO Visualizations</h3>
              <p className="text-gray-400 text-sm">Data Visualization Library</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          Our ultimate goal is to present data in a way that enables data consumers to understand it quickly and clearly.
        </p>

        {/* Visualization Color Studies */}
        <h3 className="text-xl font-bold text-white mb-4">1. Visualization Color Studies</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
          Previously, our charts relied on various third-party libraries, leading to inconsistencies. To standardize and enhance our visualizations, I led the design effort to create our own library, GIO Charts.
        </p>
        <p className="text-gray-400 leading-relaxed mb-8">
          We selected blue (#5F87FF) as our primary visualization color. This choice aligns with our branding and its neutrality makes it accessible for people with color blindness. To adhere to top accessibility standards, we carefully curated color palettes.
        </p>

        {/* Color Studies Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group mb-8">
          <img 
            src="/gio-colors.png" 
            alt="GIO Color Studies"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12 rounded-xl items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl font-bold">#5F87FF</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Color Studies</h3>
              <p className="text-gray-400 text-sm">Primary Visualization Color Palette</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Two Cards in a Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Warm and Calm Colors */}
          <div className="bg-[#131315] border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
            <div className="relative">
              <img 
                src="/gio-dots.png" 
                alt="Warm and Calm Color Contrast"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden bg-gradient-to-br from-orange-900/20 to-blue-900/20 h-48 items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-gray-400 text-sm">Color Contrast</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                We paired warm and calm colors to enhance contrast and reduce visual fatigue. Keeping dark mode in mind, we chose colors that maintain balanced luminance across both light and dark backgrounds.
              </p>
            </div>
          </div>

          {/* Card 2: Color Blindness Accessibility */}
          <div className="bg-[#131315] border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
            <div className="relative">
              <img 
                src="/gio-strum.png" 
                alt="Color Blindness Accessibility"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden bg-gradient-to-br from-purple-900/20 to-green-900/20 h-48 items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">👁️</div>
                  <p className="text-gray-400 text-sm">Accessibility</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                To further improve accessibility, we simulated color-blindness scenarios and intentionally selected colors that remain distinguishable for color-blind users.
              </p>
            </div>
          </div>
        </div>

        {/* Presenting Data Relationships */}
        <h3 className="text-xl font-bold text-white mb-4 mt-12">2. Presenting Data Relationships</h3>
        <p className="text-gray-400 leading-relaxed mb-8">
          Visualization helps illustrate the relationships within complex data, making comparisons and storytelling much easier. Inspired by Stephen Few's "Show Me the Numbers: Designing Tables and Graphs to Enlighten," we established our data visualization principles. Based on user research, these three principles guide our chart and diagram designs:
        </p>

        {/* Three Cards - One per Row */}
        <div className="space-y-6">
          {/* Card 1: Prioritizing Accuracy */}
          <div className="bg-[#131315] border border-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Prioritizing Accuracy</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              To depict changes over time, we use line charts composed of straight lines connecting individual data points, avoiding distortion from curves. Dotted lines compare the same dimension across different time frames, while different colors represent various dimensions.
            </p>
          </div>

          {/* Card 2: Helpfulness and Scalability */}
          <div className="bg-[#131315] border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
            <h4 className="text-lg font-semibold text-purple-400 mb-3">Helpfulness and Scalability</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bar charts are preferred over column charts for long labels. Users can adjust the width of displayed labels for better readability.
            </p>
          </div>

          {/* Card 3: Screen Friendly */}
          <div className="bg-[#131315] border border-white/5 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
            <h4 className="text-lg font-semibold text-green-400 mb-3">Screen Friendly</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              We designed specialized charts optimized for analysis scenarios. For instance, our custom column charts for conversion analysis maximize clarity across various screen widths.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* GIO Design System Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">GIO Design System</h2>

        {/* Cover Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group mb-6">
          <img 
            src="/gio-system.png" 
            alt="GIO Design System"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-12 rounded-xl items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layout size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GIO Design System</h3>
              <p className="text-gray-400 text-sm">Open-sourced Design System</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          Efficiency is crucial for our small team tackling big business challenges. To boost development speed, we created an open-sourced design system that ensures a consistent design language and reusable components. I led a team of designers and front-end engineers in this effort.
        </p>

        {/* Three Cards in a Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Building the Atoms */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
            <h4 className="text-lg font-bold text-cyan-400 mb-4">Building the Atoms</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              We used an "atomic" design approach to create web app building blocks, focusing on core interactions and leveraging browser standards for efficient information exchange
            </p>
          </div>

          {/* Card 2: Meta and Variables */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <h4 className="text-lg font-bold text-purple-400 mb-4">Meta and Variables</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Using metadata to describe containers like cards, modals, slideouts, and popovers ensures elements are automatically positioned and spaced.
            </p>
          </div>

          {/* Card 3: Visual Style as Variables */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:scale-105">
            <h4 className="text-lg font-bold text-green-400 mb-4">Visual Style as Variables</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dark mode is vital for reducing luminance in our dashboard, achieved seamlessly with CSS variables so all UI components support it.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* More Solutions Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">More Solutions</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          For nearly every project, we start with a research plan. Our designers use an end-to-end design approach to ensure we solve the right customer problems effectively.
        </p>

        {/* Three Cards - One per Row with Image Left (60%) and Text Right (40%) */}
        <div className="space-y-6">
          {/* Card 1: Data Dashboard */}
          <div className="bg-[#131315] border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-[60%]">
              <img 
                src="/g-dash.gif" 
                alt="Data Dashboard"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20 h-full min-h-[250px] items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-gray-400 text-sm">Dashboard</p>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] p-6 flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Data Dashboard</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our fully customizable dashboard is a user-favorite. Unlike traditional BI tools, it allows real-time monitoring of events and metrics. Users can add, drag, and resize charts to their preference, with the dashboard automatically sorting them to maintain organization.
              </p>
            </div>
          </div>

          {/* Card 2: Dark Mode */}
          <div className="bg-[#131315] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-[60%]">
              <img 
                src="/g-dark.gif" 
                alt="Dark Mode"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 h-full min-h-[250px] items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌙</div>
                  <p className="text-gray-400 text-sm">Dark Mode</p>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] p-6 flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Dark Mode</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                With Big Screen Mode, monitoring real-time data and product KPIs on large TV screens becomes effortless. Dark mode reduces screen luminance, minimizing disruptions for data consumers during extended monitoring sessions.
              </p>
            </div>
          </div>

          {/* Card 3: Reports */}
          <div className="bg-[#131315] border border-white/5 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-[60%]">
              <img 
                src="/g-report.gif" 
                alt="Reports"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 h-full min-h-[250px] items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📈</div>
                  <p className="text-gray-400 text-sm">Reports</p>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] p-6 flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-green-400 mb-3">Reports</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Reports enable customers to gain deep insights into user behavior, helping them devise strategies to convert, engage, and retain users. Customers can explore detailed analyses and combine related reports into a comprehensive data dashboard for easy review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CATALANT CONTENT COMPONENT ---
const CatalantContent = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-gray-500 mb-4 font-mono text-sm">{'// 2018 - 2020'}</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-6">
          Catalant: <span className="text-cyan-400">Hire Freelancers Smarter</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-8">
          Designed end-to-end experiences for a premium consulting marketplace connecting Fortune 500 companies 
          with independent experts for strategic projects.
        </p>

        {/* Cover Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-green-500/30 transition-all duration-300 mb-8">
          <img 
            src="/cat-cover.png" 
            alt="Catalant Marketplace Cover"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-xl min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal size={48} className="text-white" />
              </div>
              <p className="text-gray-400 text-sm">Catalant Marketplace Cover Image</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-400 leading-relaxed">
          At Catalant, we revolutionized how businesses connect with top talent for mission-critical projects through an innovative marketplace. Our platform grants clients seamless access to a vast network of consultants and consulting firms across diverse industries worldwide.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* The User Journey Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">The User Journey</h2>
        <p className="text-xl text-gray-300 italic mb-6">"So many similar experts. Who should I hire?"</p>
        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          To address client frustrations, we conducted interviews and surveys to inform our approach. Based on our findings, we redefined the Browse experience into three distinct phases, each with a specific client goal. Ensuring clients achieve these goals is crucial for progressing to the next stage. Our UX strategy is straightforward: support the decision-making process by offering effective information and essential features tailored to each decision point.
        </p>

        {/* Journey Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-green-500/30 transition-all duration-300 mb-8">
          <img 
            src="/journey.png" 
            alt="User Journey Diagram"
            className="w-full h-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          {/* Fallback content if image fails to load */}
          <div className="hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-xl min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-sm">User Journey Diagram</p>
            </div>
          </div>
        </div>

        {/* Three Cards in a Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Brief Browsing */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Brief Browsing</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              In the initial phase, clients begin by searching for experts who meet their project needs. Their goal is to quickly scan expert profiles and identify those they are interested in exploring further.
            </p>
          </div>

          {/* Card 2: Understand the Fit */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Understand the Fit</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Next, clients aim to shortlist a manageable number of experts to contact. They evaluate profiles, asking questions such as: "Does the expert have the required skills?" and "Can this expert work onsite?"
            </p>
          </div>

          {/* Card 3: Compare and Decide */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Compare and Decide</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              When multiple experts seem equally qualified, small details can make a difference. Clients aim to determine the best fit through side-by-side comparisons.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* Solution Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Solution: The New Marketplace Search</h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          Our new search experience alleviates the mental burden on clients and enhances information visualization. It allows clients to browse and compare experts effortlessly, providing the most relevant information and clear, actionable steps at every decision point.
        </p>

        {/* Solution Cards with Images */}
        <div className="space-y-8">
          {/* Card 1: Recommend the Best Experts */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5">
                <img 
                  src="/c1.gif" 
                  alt="Recommend the Best Experts"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden bg-gradient-to-br from-green-800/20 to-emerald-800/20 min-h-[300px] items-center justify-center">
                  <p className="text-gray-400 text-sm">Recommend the Best Experts</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">Recommend the Best Experts</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Clients can quickly view summaries of an expert's work experience, reputation, and industry involvement at a glance. The information on the result cards, refined through user interviews and testing, highlights the most critical details for this browsing phase. By using "great match" and "good match" labels, we communicate recommendations in a way that resonates with clients.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Recruit Intelligently */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5">
                <img 
                  src="/c2.gif" 
                  alt="Recruit Intelligently"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden bg-gradient-to-br from-green-800/20 to-emerald-800/20 min-h-[300px] items-center justify-center">
                  <p className="text-gray-400 text-sm">Recruit Intelligently</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">Recruit Intelligently</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Following the initial browsing, clients can easily review how experts meet project requirements through a slide-out panel. Instead of confusing quantitative scores, we present qualitative match scores, allowing users to quickly grasp why these experts are recommended by Catalant.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Compare Candidates Side-by-side */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5">
                <img 
                  src="/c3.gif" 
                  alt="Compare Candidates Side-by-side"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden bg-gradient-to-br from-green-800/20 to-emerald-800/20 min-h-[300px] items-center justify-center">
                  <p className="text-gray-400 text-sm">Compare Candidates Side-by-side</p>
                </div>
              </div>
              <div className="w-full md:w-2/5 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">Compare Candidates Side-by-side</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  For clients having difficulty deciding, the side-by-side comparison feature lays out the most critical factors. This helps clients easily focus on comparing experts, streamlining their decision-making process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutContent = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  const experience = [
    {
      company: "Microsoft",
      role: "Principal Design Manager",
      period: "Mar 2022 - Present",
      location: "Beijing, China",
      highlights: [
        "Lead global team across China, Canada, US, and India for Microsoft Fabric data platform",
        "Drive product vision and design strategy for a portfolio of 10+ products for AI/ML development",
        "Driven growth of +112% MAU and +280% usage since Jan 2025",
        "Built design team culture with 100% team retention rate"
      ],
      icon: "🚀",
      color: "from-cyan-500 to-blue-500"
    },
    {
      company: "GrowingIO",
      role: "Design Manager",
      period: "Nov 2020 - Mar 2022",
      location: "Beijing, China",
      highlights: [
        "Founded and scaled product design team",
        "Established design standards and unified design system",
        "Built design team culture from ground up"
      ],
      icon: "📊",
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Catalant",
      role: "Senior Product Designer",
      period: "May 2019 - Oct 2020",
      location: "Boston, MA",
      highlights: [
        "Led core platform design for talent marketplace",
        "Delivered +33% conversion improvement and +23% user satisfaction increase"
      ],
      icon: "�",
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "Cappex",
      role: "Product Designer",
      period: "Jul 2017 - Apr 2019",
      location: "Chicago, IL",
      highlights: [
        "Owned end-to-end design process for college discovery platform",
        "Aligned user research with business strategy",
        "Awarded Employee of the Year for exceptional product growth contribution"
      ],
      icon: "🎓",
      color: "from-orange-500 to-red-500"
    },
    {
      company: "Google",
      role: "Supply Chain Specialist",
      period: "Oct 2014 - Apr 2015",
      location: "Pittsburgh, PA",
      highlights: [
        "Managed operations strategy for Google Shopping Experience",
        "Contributing to early-stage product and market expansion"
      ],
      icon: "�",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const skills = {
    "Design Leadership": {
      items: ["Team Building", "Design Strategy", "Stakeholder Management", "Design Operations"],
      level: 95,
      color: "cyan"
    },
    "UX Design": {
      items: ["User Research", "Information Architecture", "Interaction Design", "Usability Testing"],
      level: 98,
      color: "purple"
    },
    "Product Design": {
      items: ["Design Systems", "Prototyping", "Visual Design", "Design Thinking"],
      level: 96,
      color: "green"
    },
    "Technical Skills": {
      items: ["Figma", "HTML/CSS", "React", "JavaScript", "Data Analytics"],
      level: 85,
      color: "orange"
    }
  };

  const achievements = [
    { title: "280% Platform Usage Growth", desc: "Microsoft Fabric Notebooks", icon: "📈" },
    { title: "Built Design Team", desc: "From 0 to 15+ designers", icon: "👥" },
    { title: "33% Conversion Increase", desc: "Catalant Marketplace", icon: "🎯" },
    { title: "Published Author", desc: "6+ articles on UX Design", icon: "✍️" }
  ];

  const education = [
    {
      degree: "Master of Science in Human-Computer Interaction",
      school: "The University of Michigan",
      year: "Sep 2015 - Apr 2017",
      icon: "🎓"
    },
    {
      degree: "Bachelor of Science in Supply Chain Management",
      school: "Penn State University",
      year: "Sep 2010 - May 2014",
      icon: "🎨"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header with Photo */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="flex flex-col gap-3">
          <div className="relative group">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 transition-all duration-300 group-hover:border-cyan-500 group-hover:shadow-cyan-500/40">
              <img 
                src="/fei-portrait.jpg" 
                alt="Fei Ren"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 items-center justify-center">
                <User size={64} className="text-white" />
              </div>
            </div>
          </div>
          
          {/* Resume Download Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-500">Resume:</span>
            <div className="flex gap-2">
              <a
                href="/Fei Ren Resume ENG.pdf"
                download="Fei_Ren_Resume_ENG.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 rounded text-sm transition-all border border-white/10 hover:border-cyan-500/50 group"
              >
                <FileText size={14} />
                <span>EN</span>
              </a>
              <a
                href="/Fei Ren Resume CN.pdf"
                download="Fei_Ren_Resume_CN.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-purple-400 rounded text-sm transition-all border border-white/10 hover:border-purple-500/50 group"
              >
                <FileText size={14} />
                <span>中文</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-black text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Fei Ren</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Principal Design Manager @ Microsoft
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a passionate design leader with 9 years of experience building exceptional products and high-performing teams. Currently leading the AI developer experience design for Microsoft Fabric, where I help data scientists and engineers unlock the power of AI through intuitive, delightful interfaces.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">9</div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">6</div>
              <div className="text-sm text-gray-400">Years of Design Leadership</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">2</div>
              <div className="text-sm text-gray-400">Countries Worked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        {['overview', 'experience', 'education'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Work Experience Summary */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="text-cyan-400" size={24} />
                Work Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div key={idx} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                        <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{exp.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Summary */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="text-purple-400" size={24} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-purple-400 text-sm font-medium">{edu.school}</p>
                    <p className="text-gray-400 text-xs mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Outside of Work */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-green-500/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-green-400" size={24} />
                Beyond Design
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When I'm not crafting delightful user experiences, you'll find me playing blues guitar. I'm an avid collector of effect pedals and electric guitars, always chasing that perfect tone. Music and design share a common thread - both are about creating emotional connections and memorable experiences.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <span className="text-2xl">🎵</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Blues Guitar</p>
                    <p className="text-gray-400 text-xs">Playing and performing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                  <span className="text-2xl">🎛️</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Gear Collector</p>
                    <p className="text-gray-400 text-xs">Effect pedals & guitars</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <span className="text-2xl">✈️</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Global Traveler</p>
                    <p className="text-gray-400 text-xs">Exploring cultures</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-white font-semibold text-sm">UX Writer</p>
                    <p className="text-gray-400 text-xs">Published articles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-cyan-400" size={24} />
              Professional Journey
            </h3>
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-gray-300">
                      <ChevronRight className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="text-cyan-400" size={24} />
              Education & Learning
            </h3>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                  {edu.degree}
                </h4>
                <p className="text-purple-400 font-semibold mb-2">{edu.school}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Let's Connect!</h3>
        <p className="text-white/90 mb-6">
          I'm always excited to discuss design, technology, or potential collaborations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/fei-ren"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:fei@example.com"
            className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2"
          >
            <Mail size={20} />
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

const SalesTable = () => {
  const salesData = [
    { id: 1, product: 'Product A', region: 'North', sales: 24500, date: '2024-01-15' },
    { id: 2, product: 'Product B', region: 'South', sales: 18200, date: '2024-01-16' },
    { id: 3, product: 'Product C', region: 'East', sales: 31800, date: '2024-01-17' },
    { id: 4, product: 'Product D', region: 'West', sales: 27400, date: '2024-01-18' },
    { id: 5, product: 'Product E', region: 'North', sales: 29300, date: '2024-01-19' },
    { id: 6, product: 'Product A', region: 'South', sales: 21700, date: '2024-01-20' },
    { id: 7, product: 'Product B', region: 'East', sales: 19500, date: '2024-01-21' },
    { id: 8, product: 'Product C', region: 'West', sales: 33200, date: '2024-01-22' },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#0a0a0c] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
        {/* Table Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#1e1e1e]">
          <div className="flex items-center gap-2">
            <Database size={16} className="text-cyan-400" />
            <span className="text-sm font-mono text-white">Sales Table</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">{salesData.length} rows</div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <thead className="bg-[#1e1e1e] border-b border-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-cyan-400">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-cyan-400">Product</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-cyan-400">Region</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-cyan-400">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-cyan-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((row, index) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-white/5 hover:bg-cyan-500/5 transition-colors ${index % 2 === 0 ? 'bg-[#0a0a0c]' : 'bg-[#0c0c0e]'}`}
                >
                  <td className="px-6 py-3 text-gray-400">{row.id}</td>
                  <td className="px-6 py-3 text-gray-300">{row.product}</td>
                  <td className="px-6 py-3 text-gray-300">{row.region}</td>
                  <td className="px-6 py-3 text-green-400">${row.sales.toLocaleString()}</td>
                  <td className="px-6 py-3 text-gray-400">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#1e1e1e] text-xs text-gray-500 font-mono">
          <div className="flex items-center justify-between">
            <span>Lakehouse table: default.Sales</span>
            <span className="text-cyan-400 cursor-grab">📊 Drag to notebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- AI SIDEBAR COMPONENT (GEMINI ENABLED) ---

const AIChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Greetings. I can answer questions Fei and his previous work. Try to message me with a question.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are an AI assistant for Fei Ren\'s design portfolio. You can answer questions about:\n\n- Fei Ren\'s background: Principal Design Manager at Microsoft Azure Data Group, focusing on AI Developer Experience in Microsoft Fabric\n- His work at Microsoft Fabric: Notebook interface, Data Wrangler, AI Copilot integration, collaborative features, and data science workflows. Since January 2025, data engineer and data scientist user base grew 112%, usage increased 280%\n- His work at GrowingIO: Product Design Manager building the design team, leading analytics platform design in Beijing\n- His work at Catalant: Smart talent marketplace connecting businesses with consultants, driving +33% task conversion and +23% user satisfaction\n- UX design topics, data analytics platforms, design leadership, design systems, accessibility, user research, and design strategy\n- His published articles on UX Planet and UX Design.cc\n- His background: Blues guitar player, effect pedal and electric guitar collector, 8 years in product design with 5 years in team management\n\nSPECIAL INSTRUCTION: If asked why the portfolio is designed this way or about the portfolio design, respond: "The portfolio is designed similarly to an IDE/developer environment to simulate the products Fei is working on."\n\nIf asked about topics outside this scope (general questions not related to Fei\'s work, design, or the content in this portfolio), politely decline by saying: "I\'m focused on discussing Fei\'s design work and experience. Is there anything specific about his projects or design approach you\'d like to know?"\n\nKeep responses concise, professional, and friendly.'
            },
            {
              role: 'user',
              content: userMsg
            }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setMessages(prev => [...prev, { 
          role: 'system', 
          content: data.choices[0].message.content 
        }]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('OpenAI API Error:', error);
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: 'Sorry, I encountered an error. Please try again or check the API connection.' 
      }]);
    }
    
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#0c0c0e]">
       <div className="flex-1 overflow-y-auto p-4 space-y-6" ref={scrollRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`text-sm leading-relaxed ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-3 rounded-lg max-w-[90%] ${msg.role === 'user' ? 'bg-[#1e1e1e] text-gray-200 border border-white/5' : 'text-gray-400'}`}>
                {msg.role === 'system' && <div className="text-xs font-bold text-cyan-500 mb-1 flex items-center gap-2"><Sparkles size={10} /> AI</div>}
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="text-left">
               <span className="text-xs text-cyan-500 animate-pulse">AI is thinking...</span>
             </div>
          )}
       </div>

       {/* Quick Actions */}
       <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-white/5 bg-[#09090b]">
          <button onClick={() => setInput('Tell me about Fei')} className="text-[10px] px-2 py-1 bg-[#1e1e1e] border border-white/10 rounded hover:border-cyan-500 hover:text-cyan-400 transition-colors">Tell me about Fei</button>
          <button onClick={() => setInput("Why Fei's portfolio is designed this way?")} className="text-[10px] px-2 py-1 bg-[#1e1e1e] border border-white/10 rounded hover:border-cyan-500 hover:text-cyan-400 transition-colors">Portfolio Design</button>
       </div>

       {/* Input */}
       <div className="p-4 bg-[#09090b]">
         <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything or cmd+k..."
              className="w-full bg-[#1e1e1e] text-white text-sm rounded-md pl-3 pr-10 py-2.5 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 border border-white/5 placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-2 p-1 text-gray-500 hover:text-white"
            >
              <Send size={14} />
            </button>
         </div>
       </div>
    </div>
  );
};


const MiniCopilotLarge = ({ position, onMouseDown, inputValue, messages, isTyping, onApprove, onRunApprove, onRunApproveLineage, onKeep, onUndo, onInput, onSend, zIndex = 20, showZeroState = false, onZeroPromptClick, showStartTooltip, width = "320px", height = "600px" }) => {
  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showZeroState]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [inputValue]);

  return (
    <div 
      className="rounded-2xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 select-none transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
      style={{ 
        zIndex: zIndex,
        height: height,
        width: width
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#18181b] border-b border-white/5">
        <div className="flex items-center gap-2.5">
           <img src="/Copilot.png" alt="Copilot" className="w-6 h-6 rounded-lg" />
           <span className="font-semibold text-white text-base">Copilot</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <Plus size={17} className="hover:text-white cursor-pointer" />
          <Clock size={17} className="hover:text-white cursor-pointer" />
          <Settings size={17} className="hover:text-white cursor-pointer" />
          <X size={17} className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Content Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-5 custom-scrollbar bg-[#18181b]">
        {showZeroState ? (
          <div className="space-y-5 animate-in fade-in duration-500">
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold text-white">Hello Laura!</h2>
              <p className="text-base text-gray-400">Build autonomously with agent mode</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-base font-medium text-gray-300 mb-2.5">
                <span className="text-pink-400 text-lg">📄</span>
                <span>Let's Start Building Something</span>
              </div>
              
              <div className="space-y-2.5">
                <div className="relative">
                  <button 
                    onClick={() => onZeroPromptClick && onZeroPromptClick("Build Medallion With Materialized Lake Views.")}
                    className="w-full text-left p-3 rounded-xl bg-[#202020] border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-all text-base text-gray-300 group"
                  >
                    Build Medallion With Materialized Lake Views.
                  </button>
                  {showStartTooltip && (
                    <div className="absolute bottom-full left-0 mb-4 w-max bg-[#252526] border border-white/10 text-white text-sm px-3 py-2 rounded-lg shadow-xl animate-in fade-in slide-in-from-bottom-2 z-50">
                        <div className="font-semibold">Click me to start</div>
                        <div className="absolute top-full left-5 -translate-y-1.5 w-3 h-3 bg-[#252526] border-r border-b border-white/10 rotate-45"></div>
                    </div>
                  )}
                </div>
                <button className="w-full text-left p-3 rounded-xl bg-[#202020] border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-all text-base text-gray-300">
                  Add Markdown to explain my functions.
                </button>
                <button className="w-full text-left p-3 rounded-xl bg-[#202020] border border-white/5 hover:bg-[#2a2a2a] hover:border-white/10 transition-all text-base text-gray-300">
                  Clean raw data into a professional report.
                </button>
              </div>
            </div>

            <div className="space-y-1.5 pt-2.5 border-t border-white/5">
               {['Explore & Validate Data', 'Clean & Prepare Data', 'Analyze, Optimize & Convert'].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-2.5 text-base text-gray-500 hover:text-gray-300 cursor-pointer rounded-lg hover:bg-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{['✨', '🍱', '📄'][i]}</span>
                      <span>{item}</span>
                    </div>
                    <ChevronDown size={14} />
                 </div>
               ))}
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
          <div key={idx} className={msg.role === 'user' ? "flex justify-end" : "space-y-3"}>
            {msg.role === 'user' ? (
              <div className="bg-[#003d29] text-white p-3 rounded-xl max-w-[90%] text-base leading-relaxed border border-[#005f3f]">
                {msg.content}
              </div>
            ) : (
              <>
                {!msg.isCheckpoint && (
                  <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                    <img src="/Copilot.png" alt="Copilot" className="w-3.5 h-3.5 rounded-md" />
                    <span>Copilot</span>
                    <Shield size={14} />
                    <Info size={14} />
                  </div>
                )}
                
                <div className="text-base text-gray-300 leading-relaxed space-y-3">
                  {msg.isCheckpoint ? (
                    <div className="flex items-center gap-2.5 my-2.5">
                        <Bookmark size={15} className="text-gray-500" />
                        <div className="w-3 border-t border-dashed border-gray-700"></div>
                        <button className="px-3 py-1 bg-[#18181b] border border-white/20 rounded-lg text-base text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                            Restore Checkpoint
                        </button>
                        <div className="flex-1 border-t border-dashed border-gray-700"></div>
                    </div>
                  ) : msg.content && (
                    <div className={`whitespace-pre-wrap ${msg.isThinking ? 'text-gray-500 italic animate-pulse' : ''}`}>
                      {msg.content.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                        part.startsWith('**') && part.endsWith('**') ? 
                          <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong> : 
                          part
                      )}
                    </div>
                  )}
                  
                  {msg.tasks && msg.tasks.length > 0 && (
                    <div className="space-y-2.5">
                      {msg.tasks.map((task, tIdx) => (
                        <div key={tIdx} className={`flex items-center gap-2.5 ${task.status === 'done' ? 'text-green-400' : 'text-gray-400'}`}>
                          {task.status === 'done' ? <Check size={15} /> : 
                           task.status === 'loading' ? <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" /> :
                           <div className="w-3.5 h-3.5 rounded-full border border-gray-600" />}
                          <span className="text-sm">{task.label}</span>
                          {task.extra && (
                            <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-[#2d2d2d] rounded text-sm text-gray-300 border border-white/10">
                              <FileCode size={14} />
                              <span>{task.extra}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {msg.finalContent && <p>{msg.finalContent}</p>}

                  {msg.type === 'run_approval' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-xl p-3 mt-2.5 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-base text-white mb-3 font-medium">Run notebook cells?</p>
                      <div className="flex gap-2.5">
                        <button 
                          onClick={() => onRunApprove && onRunApprove(idx)}
                          className="bg-[#008060] text-white px-3 py-1.5 rounded-lg text-base hover:bg-[#006e52] transition-colors font-medium"
                        >
                          Approve
                        </button>
                        <button className="border border-white/20 text-gray-300 px-3 py-1.5 rounded-lg text-base hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}

                  {msg.type === 'run_approval_lineage' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-xl p-3 mt-2.5 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-base text-white mb-3 font-medium">Run notebook cells?</p>
                      <div className="flex gap-2.5">
                        <button 
                          onClick={() => onRunApproveLineage && onRunApproveLineage(idx)}
                          className="bg-[#008060] text-white px-3 py-1.5 rounded-lg text-base hover:bg-[#006e52] transition-colors font-medium"
                        >
                          Approve
                        </button>
                        <button className="border border-white/20 text-gray-300 px-3 py-1.5 rounded-lg text-base hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}

                  {msg.type === 'plan_approval' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-xl p-3 mt-2.5 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-base text-white mb-3 font-medium">Proceed with this plan?</p>
                      <div className="flex gap-2.5">
                        <button 
                          onClick={() => onApprove && onApprove(idx)}
                          className="bg-[#006e52] text-white px-4 py-1.5 rounded-lg text-base hover:bg-[#005c45] transition-colors font-medium"
                        >
                          Proceed
                        </button>
                        <button className="border border-white/20 text-gray-300 px-4 py-1.5 rounded-lg text-base hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}

                  {msg.type === 'approval' && (
                    <div className="bg-[#2d2d2d] border border-white/10 rounded-xl p-3 mt-2.5 animate-in fade-in slide-in-from-bottom-2">
                      <p className="text-base text-white mb-3 font-medium">Run notebook cells?</p>
                      <div className="flex gap-2.5">
                        <button 
                          onClick={() => onApprove && onApprove(idx)}
                          className="bg-[#008060] text-white px-3 py-1.5 rounded-lg text-base hover:bg-[#006e52] transition-colors font-medium"
                        >
                          Approve
                        </button>
                        <button className="border border-white/20 text-gray-300 px-3 py-1.5 rounded-lg text-base hover:bg-white/5 transition-colors">
                          Skip
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#18181b] border-t border-white/5 relative">
        <div className="relative z-20">
            {messages[messages.length - 1]?.type === 'review_changes' && (
                <div className="absolute bottom-full left-0 right-0 mb-2.5 bg-[#18181b] border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-2xl animate-in fade-in slide-in-from-bottom-2 z-30">
                    <p className="text-base text-white font-medium">3 cells changed</p>
                    <div className="flex gap-2.5 items-center">
                    <button 
                        onClick={() => onKeep && onKeep(messages.length - 1)}
                        className="bg-[#008060] text-white px-3 py-1.5 rounded-lg text-base hover:bg-[#006e52] transition-colors font-medium"
                    >
                        Keep
                    </button>
                    <button 
                        onClick={() => onUndo && onUndo(messages.length - 1)}
                        className="text-gray-300 px-2.5 py-1.5 rounded-lg text-base hover:text-white transition-colors"
                    >
                        Undo
                    </button>
                    </div>
                </div>
            )}
            <div className="bg-[#202020] border border-white/10 rounded-2xl p-3">
              <textarea 
                ref={textareaRef}
                className="w-full bg-transparent border-none outline-none text-base text-gray-300 placeholder-gray-500 resize-none overflow-hidden"
                placeholder="Build autonomously..."
                value={inputValue}
                onChange={(e) => onInput && onInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend && (e.preventDefault(), onSend())}
                readOnly={!onInput}
                rows={1}
              />
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white cursor-pointer">
                     <span>Agent</span>
                     <ChevronDown size={14} />
                   </div>
                   <div className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white cursor-pointer">
                     <span>GPT-5</span>
                     <ChevronDown size={14} />
                   </div>
                </div>
                <button 
                  onClick={onSend}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${inputValue ? 'bg-[#008060] hover:bg-[#006e52]' : 'bg-gray-700'}`}
                >
                  <ArrowRight size={15} className="text-white" />
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};


const FabricCover = () => {
  const [position, setPosition] = useState({ x: -100, y: -20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [copilotPosition, setCopilotPosition] = useState({ x: 330, y: 20 });
  const [isCopilotDragging, setIsCopilotDragging] = useState(false);
  const [copilotDragStart, setCopilotDragStart] = useState({ x: 0, y: 0 });
  
  // Animation State
  const [copilotInput, setCopilotInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [notebookCells, setNotebookCells] = useState([]);
  const [isGlobalRunning, setIsGlobalRunning] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [activeWindow, setActiveWindow] = useState('copilot');

  const fullCode1 = `spark.sql("DROP TABLE IF EXISTS employee")
val df = spark.range(0, 100).select($"id".as("employee_table"))
df.write.mode("overwrite").saveAsTable("employee")
val res = spark.table("employee")
display(res)`;

  const fullCode2 = `df = spark.sql("SELECT * FROM employee WHERE id > 50")
display(df)`;

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      
      // Initial State
      if (!isMounted) return;
      setNotebookCells([]); // Start empty (only markdown header is static)
      setChatMessages([]);
      setCopilotInput('');
      setIsInteractive(false);
      setIsGlobalRunning(false);

      await wait(1500);

      // 1. Type Prompt
      const prompt = "Describe the data in this data set and what type of questions it can help me answer";
      for (let i = 0; i <= prompt.length; i++) {
        if (!isMounted) return;
        setCopilotInput(prompt.slice(0, i));
        await wait(30); // Typing speed
      }

      await wait(800);

      // 2. Send Prompt
      if (!isMounted) return;
      setCopilotInput('');
      setChatMessages([{ role: 'user', content: prompt }]);

      await wait(1000);

      // 3. Bot Response Start
      const introText = "I'll help you prepare a reliable dataset for demand and inventory analysis covering the last 3 years. Let me start by examining your current notebook to understand the context and then create a comprehensive dataset.";
      if (!isMounted) return;
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: introText, 
        tasks: [] 
      }]);

      await wait(1500);

      // 4. Task 1: Read Notebook
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = [{ label: 'Read', status: 'done', extra: 'Data Science Notebook' }];
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      await wait(1000);

      // 5. Task 2: Create Cell 1 (Loading)
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = [...lastMsg.tasks, { label: 'Create Cell-1', status: 'loading' }];
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      // Action: Add Cell 1 (Skeleton -> Typing)
      if (!isMounted) return;
      setNotebookCells([{ id: 1, code: '', status: 'skeleton' }]);
      
      await wait(2000); // Simulate generation time

      if (!isMounted) return;
      setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, status: 'typing' } : c));
      
      for (let i = 0; i <= fullCode1.length; i += 3) {
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: fullCode1.slice(0, i) } : c));
        await wait(10);
      }
      setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, code: fullCode1, status: 'complete' } : c));

      await wait(500);
      
      // Task 2 Done
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = lastMsg.tasks.map(t => t.label === 'Create Cell-1' ? { ...t, status: 'done' } : t);
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      await wait(1000);

      // 6. Task 3: Create Cell 2 (Loading)
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = [...lastMsg.tasks, { label: 'Create Cell-2', status: 'loading' }];
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      // Action: Add Cell 2 (Skeleton -> Typing)
      if (!isMounted) return;
      setNotebookCells(prev => [...prev, { id: 2, code: '', status: 'skeleton' }]);

      await wait(2000); // Simulate generation time

      if (!isMounted) return;
      setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, status: 'typing' } : c));

      for (let i = 0; i <= fullCode2.length; i += 3) {
        if (!isMounted) return;
        setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: fullCode2.slice(0, i) } : c));
        await wait(10);
      }
      setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, code: fullCode2, status: 'complete' } : c));

      await wait(500);

      // Task 3 Done
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.tasks = lastMsg.tasks.map(t => t.label === 'Create Cell-2' ? { ...t, status: 'done' } : t);
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });

      await wait(1000);

      // 7. Approval Request
      const approvalText = "I've added the cells you needed. Would you like me to run them now?";
      if (!isMounted) return;
      setChatMessages(prev => {
        const newMsgs = [...prev];
        const lastMsg = { ...newMsgs[newMsgs.length - 1] };
        lastMsg.finalContent = approvalText;
        lastMsg.type = 'approval';
        newMsgs[newMsgs.length - 1] = lastMsg;
        return newMsgs;
      });
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [restartKey]);

  const handleApprove = async (msgIndex) => {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    setIsGlobalRunning(true);

    // 1. Update Chat: Remove Approval, Show Execution Plan
    setChatMessages(prev => {
      const newMsgs = [...prev];
      // Remove approval UI from previous message
      const prevMsg = { ...newMsgs[msgIndex] };
      delete prevMsg.type; 
      newMsgs[msgIndex] = prevMsg;
      
      // Add new "Executing" message
      return [...newMsgs, { 
        role: 'assistant', 
        content: "Running notebook cells...", 
        tasks: [
          { label: 'Execute Cell 1', status: 'loading' },
          { label: 'Execute Cell 2', status: 'pending' }
        ] 
      }];
    });

    // 2. Execute Cell 1
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { ...c, isRunning: true } : c));
    await wait(1500);
    
    // Cell 1 Output (DataFrame)
    setNotebookCells(prev => prev.map(c => c.id === 1 ? { 
      ...c, 
      isRunning: false,
      output: {
        type: 'table',
        data: [
          { id: 101, name: 'John Doe', dept: 'Sales', salary: 85000, region: 'NA' },
          { id: 102, name: 'Jane Smith', dept: 'Eng', salary: 92000, region: 'EU' },
          { id: 103, name: 'Bob Johnson', dept: 'Sales', salary: 78000, region: 'NA' },
          { id: 104, name: 'Alice Brown', dept: 'HR', salary: 65000, region: 'APAC' },
          { id: 105, name: 'Charlie Wilson', dept: 'Eng', salary: 88000, region: 'EU' },
        ]
      } 
    } : c));

    // Update Task 1 Done, Start Task 2
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Execute Cell 1', status: 'done' },
        { label: 'Execute Cell 2', status: 'loading' }
      ];
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });

    await wait(1000);

    // 3. Execute Cell 2
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { ...c, isRunning: true } : c));
    await wait(1500);

    // Cell 2 Output (Chart)
    setNotebookCells(prev => prev.map(c => c.id === 2 ? { 
      ...c, 
      isRunning: false,
      output: { type: 'chart' } 
    } : c));

    // All Done
    setChatMessages(prev => {
      const newMsgs = [...prev];
      const lastMsg = { ...newMsgs[newMsgs.length - 1] };
      lastMsg.tasks = [
        { label: 'Execute Cell 1', status: 'done' },
        { label: 'Execute Cell 2', status: 'done' }
      ];
      lastMsg.finalContent = "Execution complete. You can now see the dataframe and visualization above.";
      newMsgs[newMsgs.length - 1] = lastMsg;
      return newMsgs;
    });
    
    setIsGlobalRunning(false);
    setIsInteractive(true);
  };

  const handleUserSend = async () => {
    if (!copilotInput.trim()) return;
    
    const userText = copilotInput;
    setCopilotInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userText }]);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    setChatMessages(prev => [...prev, { 
      role: 'assistant', 
      content: "Sorry, this is only a demo." 
    }]);
  };

  const handleMouseDown = (e) => {
    setActiveWindow('notebook');
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleCopilotMouseDown = (e) => {
    e.stopPropagation();
    setActiveWindow('copilot');
    setIsCopilotDragging(true);
    setCopilotDragStart({
      x: e.clientX - copilotPosition.x,
      y: e.clientY - copilotPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
    if (isCopilotDragging) {
      setCopilotPosition({
        x: e.clientX - copilotDragStart.x,
        y: e.clientY - copilotDragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsCopilotDragging(false);
  };

  useEffect(() => {
    if (isDragging || isCopilotDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, isCopilotDragging, copilotDragStart]);

  // Syntax highlighting helper
  const highlightCode = (codeStr) => {
    if (!codeStr) return null;
    return codeStr.split('\n').map((line, i) => {
      // Simple heuristic highlighting for the Scala/Spark code
      const keywords = ['val', 'spark', 'sql', 'select', 'write', 'mode', 'saveAsTable', 'table', 'display', 'FROM', 'WHERE', 'SELECT'];
      
      // Very basic tokenization for display purposes
      // We'll just highlight keywords and strings simply
      const parts = line.split(/(".*?")/g);
      
      return (
        <div key={i} className="flex">
           <span className="w-6 text-gray-600 text-right mr-4 select-none font-mono text-sm pt-0.5">{i + 1}</span>
           <span className="font-mono text-base text-gray-300 whitespace-pre">
             {parts.map((part, idx) => {
               if (part.startsWith('"')) return <span key={idx} className="text-[#ce9178]">{part}</span>;
               
               // Check for keywords in the part
               return part.split(/(\b)/).map((subPart, subIdx) => {
                 if (keywords.includes(subPart)) return <span key={subIdx} className="text-[#569cd6]">{subPart}</span>;
                 if (['DROP', 'TABLE', 'IF', 'EXISTS'].includes(subPart)) return <span key={subIdx} className="text-[#c586c0]">{subPart}</span>;
                 return subPart;
               });
             })}
           </span>
        </div>
      );
    });
  };

  return (
    <div className="relative h-[880px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src="/bcoverv1.png" alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Restart Button */}
      <button 
        onClick={() => setRestartKey(prev => prev + 1)}
        className="absolute bottom-4 right-4 flex items-center p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/50 hover:text-white transition-all duration-300 z-20 group overflow-hidden hover:pr-4"
        title="Restart Animation"
      >
        <RotateCcw size={16} />
        <span className="max-w-0 group-hover:max-w-[100px] group-hover:ml-2 overflow-hidden transition-all duration-300 whitespace-nowrap font-medium text-sm">Replay</span>
      </button>

      <div className="absolute inset-0 flex items-center justify-center gap-4 z-10">
        {/* Notebook Window */}
        <div 
          className="w-[1005px] rounded-xl overflow-hidden bg-[#18181b] border border-white/10 shadow-2xl font-sans text-gray-300 select-none transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
          style={{ 
            height: '728px'
          }}
        >
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#202020] border-b border-white/5 text-sm">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-3 gap-1 opacity-70 hover:opacity-100">
                 {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
              </div>
              <div className="flex gap-4 font-medium text-gray-400">
                <span className="hover:text-white transition-colors">Home</span>
                <span className="hover:text-white transition-colors">Edit</span>
                <span className="hover:text-white transition-colors">Run</span>
                <span className="hover:text-white transition-colors">AI tools</span>
                <span className="hover:text-white transition-colors">View</span>
              </div>
            </div>
            <div className="flex items-center gap-0">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <MessageSquare size={14} />
                    <span>Comments</span>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Clock size={14} />
                    <span>History</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 ml-2 bg-[#008060] text-white rounded hover:bg-[#006e52] transition-colors shadow-lg shadow-green-900/20 cursor-pointer">
                    <Share size={14} />
                    <span>Share</span>
                </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-4 px-4 py-2 bg-[#202020] border-b border-white/5 text-sm overflow-x-auto">
            <button className={`flex items-center gap-2 px-4 py-1.5 text-white rounded transition-colors shadow-lg ${isGlobalRunning ? 'bg-[#006e52] cursor-wait' : 'bg-[#008060] hover:bg-[#006e52] shadow-green-900/20'}`}>
                {isGlobalRunning ? (
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Play size={12} fill="currentColor" />
                )}
                <span className="font-semibold">{isGlobalRunning ? 'Running...' : 'Run'}</span>
            </button>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Box size={14} />
                <span>PySpark (Python)</span>
                <ChevronDown size={12} />
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white">
                <span className="text-gray-500">Environment</span>
                <div className="px-2 py-0.5 bg-[#2d2d2d] border border-white/10 rounded flex items-center gap-2">
                    <span>Workspace default</span>
                    <ChevronDown size={12} />
                </div>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white">
                <img src="/Copilot.png" alt="Copilot" className="w-4 h-4 rounded-sm" />
                <span>Copilot</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#18181b] relative custom-scrollbar">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060] opacity-50"></div>
            
            <h1 className="text-2xl font-medium text-white mb-2">Data Science Notebook</h1>
            <p className="text-gray-400 text-base mb-8">This is a data science notebook on Fabric.</p>

            {/* Dynamic Cells */}
            {notebookCells.map((cell, idx) => (
              <div key={cell.id} className="mb-4 rounded-lg border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-sm hover:border-white/20 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="p-4 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#008060]"></div>
                      <div className="pl-2">
                          {cell.status === 'skeleton' ? (
                            <div className="animate-pulse space-y-2 py-1">
                              <div className="h-2 bg-white/10 rounded w-1/3"></div>
                              <div className="h-2 bg-white/10 rounded w-2/3"></div>
                              <div className="h-2 bg-white/10 rounded w-1/2"></div>
                            </div>
                          ) : (
                            highlightCode(cell.code)
                          )}
                      </div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#252526] border-t border-white/5 flex justify-between items-center text-sm text-gray-500">
                      <span>{cell.isRunning ? 'Running...' : 'Press shift + enter to run'}</span>
                      <div className="flex items-center gap-1 hover:text-gray-300">
                          <span>PySpark (Python)</span>
                          <ChevronDown size={10} />
                      </div>
                  </div>

                  {/* Output Area */}
                  {(cell.output || cell.isRunning) && (
                    <div className="border-t border-white/5 bg-[#18181b] p-4 animate-in fade-in slide-in-from-top-2">
                      {cell.isRunning ? (
                        <div className="flex items-center gap-2 text-gray-400 text-base">
                          <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                          <span>Executing...</span>
                        </div>
                      ) : cell.output?.type === 'table' && cell.output.data ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm text-gray-300">
                            <thead>
                              <tr className="border-b border-white/10">
                                <th className="py-1 px-2 font-medium text-gray-500">id</th>
                                <th className="py-1 px-2 font-medium text-gray-500">name</th>
                                <th className="py-1 px-2 font-medium text-gray-500">dept</th>
                                <th className="py-1 px-2 font-medium text-gray-500">salary</th>
                                <th className="py-1 px-2 font-medium text-gray-500">region</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cell.output.data.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                  <td className="py-1 px-2">{row.id}</td>
                                  <td className="py-1 px-2">{row.name}</td>
                                  <td className="py-1 px-2">{row.dept}</td>
                                  <td className="py-1 px-2">${row.salary.toLocaleString()}</td>
                                  <td className="py-1 px-2">{row.region}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="mt-2 text-xs text-gray-500">Showing 5 of 100 rows</div>
                        </div>
                      ) : cell.output?.type === 'chart' ? (
                        <div className="h-48 relative border-l border-b border-white/10 m-2">
                          {/* Scatter Plot Points */}
                          {[
                            {x: 10, y: 20}, {x: 25, y: 45}, {x: 40, y: 30}, {x: 55, y: 70}, 
                            {x: 70, y: 55}, {x: 85, y: 85}, {x: 15, y: 35}, {x: 30, y: 60},
                            {x: 50, y: 40}, {x: 65, y: 75}, {x: 80, y: 65}, {x: 90, y: 90},
                            {x: 20, y: 25}, {x: 35, y: 50}, {x: 60, y: 45}, {x: 75, y: 80}
                          ].map((pt, i) => (
                            <div 
                              key={i}
                              className="absolute w-2 h-2 rounded-full bg-[#008060] hover:bg-[#006e52] hover:scale-150 transition-all duration-300 cursor-pointer shadow-lg shadow-green-500/20"
                              style={{ 
                                left: `${pt.x}%`, 
                                bottom: `${pt.y}%`,
                                opacity: 0.8
                              }}
                            ></div>
                          ))}
                          {/* Axis Labels */}
                          <div className="absolute -left-6 top-1/2 -rotate-90 text-xs text-gray-500">Salary</div>
                          <div className="absolute bottom-[-20px] left-1/2 text-xs text-gray-500">Experience (Years)</div>
                        </div>
                      ) : null}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* Mini Copilot */}
        <MiniCopilotLarge 
          inputValue={copilotInput}
          messages={chatMessages}
          onApprove={handleApprove}
          onInput={isInteractive ? setCopilotInput : undefined}
          onSend={handleUserSend}
          zIndex={activeWindow === 'copilot' ? 20 : 10}
          width="306px"
          height="728px"
        />
      </div>
    </div>
  );
};

export default Portfolio;
