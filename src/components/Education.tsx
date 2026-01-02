
import { education } from "../data/education";

const Timeline = () => {
    return(
        <section id="education" className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="relative border-l border-slate-700 ml-4 md:ml-0">
                {education.map((item,index) => (
                    <div key={index} className="mb-10 ml-8 relative">
                    {/* The Dot on the Line */}
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                    
                    <span className="text-sm font-mono text-blue-400">{item.duration}</span>
                    <h3 className="text-xl font-bold mt-1">{item.degree}</h3>
                    <p className="text-slate-300 font-medium">{item.school}</p>
                    <p className="text-slate-400 mt-2 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;