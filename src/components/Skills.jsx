import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../constants";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";

const slideUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const skillToIcon = {
  "React": { icon: "FaReact", color: "#61DAFB" },
  "Tailwind CSS": { icon: "SiTailwindcss", color: "#06B6D4" },
  "HTML5": { icon: "FaHtml5", color: "#E34F26" },
  "CSS3": { icon: "FaCss3Alt", color: "#1572B6" },
  "C++": { icon: "SiCplusplus", color: "#00599C" },
  "JavaScript": { icon: "FaJs", color: "#F7DF1E" },
  "GitHub": { icon: "FaGithub", color: "currentColor" },
  "Solidity": { icon: "SiSolidity", color: "#363636" },
  "Blockchain": { icon: "SiBlockchaindotcom", color: "#121D33" },
  "Canva": { icon: "SiCanva", color: "#00C4CC" },
  "C": { icon: "SiC", color: "#A8B9CC" },
  "Git": { icon: "FaGitAlt", color: "#F05032" },
  "VS Code": { icon: "VscVscode", color: "#007ACC" },
  "Figma": { icon: "FaFigma", color: "#F24E1E" },
  "Linux": { icon: "FaLinux", color: "currentColor" },
};

const Skills = () => {
  const { skills } = PORTFOLIO_DATA || { skills: [] };

  return (
    <section id="skills" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariant}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => {
            const config = skillToIcon[skill];
            const IconComponent = config ? (FaIcons[config.icon] || SiIcons[config.icon] || VscIcons[config.icon]) : null;

            return (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
                }}
                className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4 transition-all duration-300"
              >
                <div className="text-5xl">
                  {IconComponent ? (
                    <IconComponent style={{ color: config.color }} />
                  ) : (
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg animate-pulse" />
                  )}
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-tight">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
