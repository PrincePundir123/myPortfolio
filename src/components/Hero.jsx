import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, FileText } from "lucide-react";

const Hero = ({ isDarkMode }) => {
  const stack = ["Next.js", "React", "Node.js", "Tailwind CSS", "C++", "PostgreSQL"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-white dark:bg-[#0a0a0a] bg-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center justify-items-center">
          
          {/* Left Content - Now centered in its column */}
          <div className="w-full max-w-2xl space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
            >
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-green-600 dark:text-green-400">Available for opportunities</span>
            </motion.div>

            <div className="space-y-6 w-full">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] uppercase"
              >
                Hi, I'm <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Prince Pundir
                </span>
                <span className="ml-4 inline-block animate-bounce">👋</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-tight font-medium max-w-xl mx-auto lg:mx-0"
              >
                From curiosity to <span className="text-slate-900 dark:text-white font-black border-b-4 border-blue-500">front-end development</span> — <br />
                building the web, one experience at a time.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="group cursor-pointer flex items-center justify-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all w-full sm:w-auto shadow-2xl shadow-blue-500/20"
              >
                <span>Read My Story</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/myResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-black uppercase tracking-widest border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all w-full sm:w-auto backdrop-blur-md"
              >
                Resume <FileText size={20} className="opacity-60" />
              </a>
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {stack.map((item) => (
                <span key={item} className="px-4 py-2 bg-slate-100 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-black uppercase tracking-[0.1em]">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Section: Large Image & Concentric Rings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center w-full max-w-xl aspect-square"
          >
            {/* Extended Animated Orbits */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[80%] h-[80%] border-2 border-slate-200 dark:border-slate-800 rounded-full opacity-50" />
               <div className="absolute w-[100%] h-[100%] border-2 border-slate-200/30 dark:border-slate-800/20 rounded-full animate-slow-spin">
                  <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,1)]" />
               </div>
               <div className="absolute w-[115%] h-[115%] border-2 border-slate-100 dark:border-slate-900/50 rounded-full animate-reverse-slow-spin">
                  <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]" />
               </div>
            </div>

            {/* UPGRADED Profile Image Container */}
            <div className="relative w-72 h-72 sm:w-[500px] sm:h-[500px] p-4 rounded-full border-4 border-blue-500/20 bg-white/5 dark:bg-black/5 backdrop-blur-sm z-10 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
               <div className="w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl shadow-blue-500/10 transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    src="/profile.jpg" 
                    alt="Prince Pundir" 
                    className="w-full h-full object-cover object-top scale-110" // Canted/Zoomed slightly to ensure face visibility
                  />
               </div>
               
               {/* Metadata Tags */}
               <div className="absolute -right-8 top-1/3 p-3 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-2xl text-xs font-black uppercase tracking-tighter -rotate-12 z-20">
                  &lt;frontend_dev /&gt;
               </div>
               <div className="absolute -left-10 bottom-1/4 p-3 bg-black dark:bg-white text-white dark:text-black rounded-2xl border-2 border-white dark:border-black shadow-2xl text-xs font-black uppercase tracking-tighter rotate-12 z-20">
                  NIT_Hamirpur
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 group cursor-default">
         <span className="text-[10px] tracking-[0.3em] font-black uppercase">SCROLL_DOWN</span>
         <div className="w-6 h-10 border-2 border-slate-900 dark:border-white rounded-full flex justify-center p-1.5 pt-2">
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="w-1 h-2 bg-blue-600 rounded-full"
            />
         </div>
      </div>
    </section>
  );
};

export default Hero;
