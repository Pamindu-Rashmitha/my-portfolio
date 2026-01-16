import { motion } from 'framer-motion';
import { skills } from "../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="max-w-6xl mx-auto py-24 px-6">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold text-center bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-16"
            >
                Technical Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={skill.name} 
                        
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1, 
                            ease: "easeOut" 
                        }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="p-6 bg-slate-800/30 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-colors shadow-lg group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-blue-500/50 dark:bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                <skill.icon className="w-6 h-6 text-blue-800 dark:text-blue-400" />
                            </div>
                            <h3 className="font-medium text-sm text-slate-900 dark:text-white">{skill.name}</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map(item => (
                                <span 
                                    key={item} 
                                    className="font-medium text-xs text-slate-900 dark:text-white bg-slate-900/50 border border-slate-700/50 px-3 py-1 rounded-md"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;