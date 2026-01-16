import { motion } from 'framer-motion';
import { education } from "../data/education";

const Timeline = () => {
    return (
        <section id="education" className="max-w-6xl mx-auto py-24 px-6">
            <h2 className="text-5xl font-extrabold text-center bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-16">
                Education
            </h2>
            
            
            <div className="relative border-l-2 border-slate-800 ml-2">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-12 ml-8 relative"
                    >
                        
                        <div className="absolute -left-[4px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10" />
                        
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-mono text-slate-800 dark:text-slate-500 bg-slate-800/50 w-fit px-3 py-1 rounded-full border border-slate-700 mb-2">
                                {item.duration}
                            </span>
                            <h3 className="text-xl font-bold text-black dark:text-white leading-tight">
                                {item.degree}
                            </h3>
                            <p className="text-blue-500 dark:text-blue-400 font-semibold text-base mt-1">
                                {item.school}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed max-w-3xl">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;