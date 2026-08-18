import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 sm:mb-3">
            Work Experience
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-xl">
            Professional experience and industry exposure.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-8 border-l-2 border-border"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-11px] top-1 w-5 h-5 bg-white border-2 border-dark rounded-full flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-dark" />
              </div>

              <div className="bg-bg-alt rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                  <h3 className="text-base sm:text-lg font-bold text-text-primary">{exp.company}</h3>
                  <span className="text-[11px] sm:text-xs font-medium text-text-tertiary bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-border w-fit">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-text-secondary mb-3">{exp.role}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-xs sm:text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-text-primary bg-white rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;