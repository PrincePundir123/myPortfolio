import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../constants";
import { GraduationCap, Cpu } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const { status, description } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
        </div>
        
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl dark:bg-blue-900/30 dark:text-blue-400">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Current Status</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {status}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl dark:bg-indigo-900/30 dark:text-indigo-400">
              <Cpu size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Interests</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
