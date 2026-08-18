import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Github, Plus, Minus } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 sm:mb-3">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-xl">
            A selection of software engineering platforms, AI agents, and full-stack systems I've built.
          </p>
        </motion.div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                className="bg-white rounded-[20px] sm:rounded-[25px] overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col group"
              >
                {/* Showcase Image Frame */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden bg-[#18181b] flex items-center justify-center p-3 sm:p-6">
                  <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover sm:object-contain rounded-lg sm:rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Details Content */}
                <div className="p-4 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-2 sm:mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#f4f4f5] text-text-secondary text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded-full border border-gray-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links Bar */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center gap-4 sm:gap-6 mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group/link"
                    >
                      <Github size={15} className="text-text-tertiary group-hover/link:text-text-primary transition-colors" />
                      <span>Source Code</span>
                    </a>

                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-primary hover:text-accent-hover transition-colors group/link"
                      >
                        <ExternalLink size={14} className="text-text-tertiary group-hover/link:text-accent-hover transition-colors" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-tertiary opacity-40 cursor-not-allowed"
                        title="Live demo not available"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SEE MORE / SHOW LESS Button */}
        {projects.length > 2 && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-text-primary text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xs hover:shadow-md hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{showAll ? 'Show Less' : 'See More'}</span>
              {showAll ? <Minus size={13} /> : <Plus size={13} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
