import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 sm:mb-3">
            Education
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-xl">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
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
                <GraduationCap className="w-2.5 h-2.5 text-dark" />
              </div>

              <div className="bg-bg-alt rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                  <h3 className="text-base sm:text-lg font-bold text-text-primary">{edu.degree}</h3>
                  <span className="text-[11px] sm:text-xs font-medium text-text-tertiary bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-border w-fit">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-accent-hover mb-2">{edu.school}</p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;