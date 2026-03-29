import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../constants";
import { FaGithub, FaFolderOpen, FaExternalLinkAlt } from "react-icons/fa";
import { ScrollReveal } from "./ScrollReveal";

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 border-t border-black dark:border-white bg-white dark:bg-[#0a0a0a] bg-grid">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="flex items-center gap-4 mb-20 text-center flex-col md:flex-row">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white leading-none">Featured Projects</h2>
          <div className="h-px bg-slate-900 dark:bg-white flex-1 opacity-20 w-full md:w-auto mt-4 md:mt-0"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              delay={index * 0.15}
              className="group relative h-full"
            >
              <div className="border-[6px] border-slate-900 dark:border-white p-0 h-full flex flex-col transition-all hover:-translate-y-4 hover:shadow-[20px_20px_0px_0px_rgba(37,99,235,0.4)] bg-white dark:bg-[#0a0a0a]">
                
                {/* Image / Header Section */}
                <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 overflow-hidden border-b-[6px] border-slate-900 dark:border-white flex items-center justify-center relative group">
                   {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                      />
                   ) : (
                      <div className="p-12 opacity-40 group-hover:opacity-100 transition-opacity">
                         <FaFolderOpen size={80} />
                      </div>
                   )}
                   
                   {/* GitHub Overlays for direct access */}
                   <a 
                     href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="absolute top-4 right-4 p-3 bg-black text-white dark:bg-white dark:text-black hover:scale-110 transition-all shadow-xl z-20"
                     title="View Source"
                   >
                     <FaGithub size={24} />
                   </a>
                </div>

                <div className="p-8 md:p-12 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight">{project.title}</h3>
                  <p className="font-bold text-slate-600 dark:text-slate-400 text-sm mb-10 leading-relaxed leading-[1.6]">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] hover:text-blue-600 transition-colors"
                    >
                      Explore Project 
                      <FaExternalLinkAlt size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
