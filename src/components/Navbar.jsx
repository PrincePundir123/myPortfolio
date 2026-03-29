import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", to: "home" },
  { name: "My Story", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border-b border-slate-100 dark:border-slate-900"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-black tracking-tighter cursor-pointer text-slate-900 dark:text-white group"
            >
              Prince <span className="text-blue-600 dark:text-indigo-400 group-hover:pl-1 transition-all">Pundir</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-600 dark:text-indigo-400 font-bold"
                  offset={-100}
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white px-2 py-1 text-sm font-semibold transition-all cursor-pointer relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-indigo-400 transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 group"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 focus:outline-none"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-slate-100 dark:border-slate-900"
          >
            <div className="px-6 pt-2 pb-8 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900 transition-all cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
