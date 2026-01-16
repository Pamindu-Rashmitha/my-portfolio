import {motion} from 'framer-motion';
import { Award } from "lucide-react";
import { achievements } from '../data/Achievements';

const Achievments = () => {
    return (
        <section id="Achievements" className="max-w-6xl mx-auto py-24 px-6">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold text-center bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-16"
            >
                Academic Achievements
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achieve, index) => (
                    <motion.a
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        whileHover={{ scale: 1.02 }}
                        className="group flex items-center justify-between p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:bg-slate-800/50 transition-all hover:border-blue-500/50 shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-500/50  dark:bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors shrink-0">
                                <Award className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-700 dark:text-white group-hover:text-blue-400 transition-colors">
                                    {achieve.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                                    {achieve.description}
                                </p>
                                <h4>
                                    • <span className="font-mono text-slate-500">Certificate No:{achieve.certificateNo}</span>
                                </h4>
                            </div>
                        </div>
                        
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Achievments;