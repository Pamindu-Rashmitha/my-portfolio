import { motion } from 'framer-motion';
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/Certifications";

const Certifications = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <section id="certifications" className="max-w-6xl mx-auto py-24 px-6">
            
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, y: 0 }} // Changed x to y for vertical entry
                viewport={{ once: true }}
                className="text-5xl font-extrabold text-center bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-16"
            >
                Certifications
            </motion.h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {certifications.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="group flex items-center justify-between p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:bg-slate-800/50 transition-all hover:border-blue-500/50 shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            
                            <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors shrink-0">
                                <Award className="text-blue-400 w-6 h-6" />
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-400 text-sm mt-1">
                                    {cert.issuer} • <span className="font-mono text-slate-500">{cert.date}</span>
                                </p>
                            </div>
                        </div>

                        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0 ml-4" />
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
};

export default Certifications;