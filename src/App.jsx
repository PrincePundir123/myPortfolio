import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingChatbot from "./components/FloatingChatbot";
import { motion, useScroll } from "framer-motion";
import { SOCIAL_LINKS } from "./constants";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

const getFooterIcon = (id) => {
  switch (id) {
    case 'email': return <FaEnvelope size={22} />;
    case 'github': return <FaGithub size={22} />;
    case 'linkedin': return <FaLinkedin size={22} />;
    case 'instagram': return <FaInstagram size={22} />;
    case 'facebook': return <FaFacebook size={22} />;
    default: return null;
  }
};

const getFooterHoverStyle = (id) => {
  switch (id) {
    case 'email': return "hover:text-blue-500";
    case 'github': return "hover:text-slate-900 dark:hover:text-white";
    case 'linkedin': return "hover:text-[#0077b5]";
    case 'instagram': return "hover:text-[#E1306C]";
    case 'facebook': return "hover:text-[#1877F2]";
    default: return "";
  }
};

function App() {
  const { scrollYProgress } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-600/30 selection:text-blue-900 dark:selection:bg-blue-500/30 dark:selection:text-white overflow-x-hidden bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white transition-colors duration-500">
      <Toaster position="bottom-right" />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="relative z-10 overflow-x-hidden">
        <Hero isDarkMode={isDarkMode} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-24 flex flex-col items-center justify-center text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-900 relative z-10 w-full bg-slate-50 dark:bg-[#0a0a0a] transition-all">
        <div className="flex gap-8 mb-10">
          {SOCIAL_LINKS.map(link => (
            <motion.a
              key={link.id}
              whileHover={{ scale: 1.25, rotate: 5, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 dark:text-slate-600 transition-all duration-300 ${getFooterHoverStyle(link.id)}`}
              aria-label={link.name}
            >
              {getFooterIcon(link.id)}
            </motion.a>
          ))}
        </div>
        <p className="font-bold tracking-tight">&copy; {new Date().getFullYear()} Prince Pundir.</p>
      </footer>
      <FloatingChatbot />
    </div>
  );
}

export default App;
