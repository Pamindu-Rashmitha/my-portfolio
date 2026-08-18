import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 sm:mb-3">
            Skills & Technologies
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-xl">
            The tools and technologies I work with to build modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="bg-bg-alt rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group border border-transparent hover:border-border"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center border border-border group-hover:bg-dark group-hover:text-white transition-colors shrink-0">
                  <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-text-primary text-sm sm:text-base">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-text-secondary bg-white rounded-full border border-border hover:border-gray-300 hover:text-text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;