import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, GraduationCap, Code } from 'lucide-react';
import { aboutData } from '../data/about';

const icons = [BrainCircuit, Code, Cpu, BrainCircuit];

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
              Building the future with{' '}
              <span className="text-text-primary">Artificial Intelligence</span>
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
              {aboutData.description}
            </p>
            <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-bg-alt px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-border">
              <GraduationCap className="text-text-primary w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm text-text-primary">
                SLIIT • Year 3, Semester 1
              </span>
            </div>
          </motion.div>

          {/* Right Side: Specialty Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {aboutData.highlights.map((item, index) => {
              const Icon = icons[index] || icons[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-5 bg-bg-alt rounded-xl sm:rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group border border-transparent hover:border-border"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center border border-border group-hover:bg-dark group-hover:text-white transition-colors mb-3 sm:mb-4 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-medium text-xs sm:text-sm text-text-primary leading-relaxed">{item}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;