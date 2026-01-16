import { experiences } from "../data/experience";
import { CheckCircle2 } from 'lucide-react';

const Experience = () =>{
    return(
        <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
            
            <h2 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-center mb-16">
                Work Experience
            </h2>
            
            
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-800">
                    
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-black dark:text-white">{exp.role}</h3>
                        <p className="text-blue-900 dark:text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <span className="text-black dark:text-slate-500 font-mono text-sm bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                        {exp.duration}
                    </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                    {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-500 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-blue-500/50 shrink-0 mt-0.5" />
                        <span>{point}</span>
                        </li>
                    ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                        <span key={skill} className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;