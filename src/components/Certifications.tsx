import { motion } from 'framer-motion';
import { certifications } from '../data/Certifications';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 sm:mb-3">
            Certifications
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-xl">
            Professional certifications and completed courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-bg-alt rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-border"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center border border-border group-hover:bg-dark group-hover:text-white transition-colors shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-text-primary group-hover:text-white transition-colors" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-tertiary group-hover:text-text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-text-primary mb-1 text-xs sm:text-sm leading-snug">
                {cert.title}
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                <span className="text-[11px] sm:text-xs font-medium text-text-secondary">{cert.issuer}</span>
                <span className="text-text-tertiary text-xs">•</span>
                <span className="text-[11px] sm:text-xs text-text-tertiary">{cert.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;