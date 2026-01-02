import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, GraduationCap, Code } from 'lucide-react';
import { aboutData } from '../data/about';

const About = () => {
    return (
        <section id="about" className="max-w-6xl mx-auto py-24 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Text Content */}
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    >
                    
                    <h3 className="text-4xl font-bold text-white mb-6">
                        Building the future with <span className="text-blue-500">Artificial Intelligence</span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        {aboutData.description}
                    </p>
                    <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-4 rounded-xl border border-slate-700 w-fit">
                        <GraduationCap className="text-blue-400 w-6 h-6" />
                        <span className="font-medium text-sm">SLIIT • Year 2, Semester 2</span>
                    </div>
                    </motion.div>

                    {/* Right Side: AI Specialization Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {aboutData.highlights.map((item, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:bg-slate-800/60 transition-colors"
                        >
                        {index === 0 && <BrainCircuit className="text-emerald-400 w-6 h-6 mb-3" />}
                        {index === 1 && <Code className="text-blue-400 w-6 h-6 mb-3" />}
                        {index === 2 && <Cpu className="text-purple-400 w-6 h-6 mb-3" />}
                        {index === 3 && <BrainCircuit className="text-orange-400 w-6 h-6 mb-3" />}
                        <p className="text-sm text-slate-300 leading-snug">{item}</p>
                        </motion.div>
                    ))}
                    </div>
                </div>
        </section>
    );
};

export default About;