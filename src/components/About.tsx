import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, GraduationCap, Code } from 'lucide-react';
import { aboutData } from '../data/about';

const icons = [BrainCircuit, Code, Cpu, BrainCircuit];

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto">
      <div className="card-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
              Building the future with{' '}
              <span className="text-text-primary">Artificial Intelligence</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              {aboutData.description}
            </p>
            <div className="inline-flex items-center gap-3 bg-bg-alt px-5 py-3.5 rounded-2xl border border-border">
              <GraduationCap className="text-text-primary w-5 h-5" />
              <span className="font-medium text-sm text-text-primary">
                SLIIT • Year 3, Semester 1
              </span>
            </div>
          </motion.div>

          {/* Right Side: Specialty Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, index) => {
              const Icon = icons[index] || icons[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 bg-bg-alt rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group border border-transparent hover:border-border"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-border group-hover:bg-dark group-hover:text-white transition-colors mb-4 shrink-0">
                    <Icon className="w-5 h-5 text-text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-medium text-sm text-text-primary leading-relaxed">{item}</p>
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