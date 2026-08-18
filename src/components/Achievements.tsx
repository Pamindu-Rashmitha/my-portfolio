import { motion } from 'framer-motion';
import { achievements } from '../data/Achievements';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="Achievements" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 sm:mb-3">
            Achievements
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-xl">
            Academic recognitions and milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-alt rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-border group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-border rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-dark group-hover:text-white transition-colors">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text-primary text-base sm:text-lg mb-1">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white border border-border text-text-secondary text-[10px] sm:text-xs font-semibold rounded-full">
                    {achievement.certificateNo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;