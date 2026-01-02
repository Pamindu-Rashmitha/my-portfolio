import { skills } from "../data/skills";

const Skills = () => {
    return(
        <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill) => (
                <div key={skill.name} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all">
                    <skill.icon className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                    <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                        <span key={item} className="text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-md">
                        {item}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;