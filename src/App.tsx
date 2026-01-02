import { projects } from './data/projects';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Education';
import SocialBar from './components/socialBar';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar/>
      <SocialBar/>
      {/* We add a container to handle the padding-top for the sticky nav */}
      <div className="pt-20 px-8">
        <Hero/>

        <h1 className="text-5xl font-extrabold text-center bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
        </h1>
        <p>
          
        </p>

        <Skills/>
        


        {/* Header Section */}
        <header className="max-w-6xl mx-auto mb-16 text-center mt-20">
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-slate-400 mt-4 text-lg">A showcase of my latest work and experiments.</p>
        </header>

        {/* Projects Grid */}
        <main className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors shadow-xl group"
              >
                <div className="relative overflow-hidden">
                   <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  

                  <a 
                    href={project.githubLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
                  >
                    View GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

         <Timeline/>

        {/* Contact Section */}
        <footer className="max-w-4xl mx-auto py-20 text-center border-t border-slate-800">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 mb-8">
            I'm currently looking for new opportunities. My inbox is always open!
          </p>
          <a 
            href="mailto:pamindu@example.com" 
            className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all rounded-lg font-bold"
          >
            Say Hello
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;