import myPhoto from '../assets/me.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Side: Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center md:text-left"
            >
                <h2 className="text-blue-400 font-mono mb-4 text-lg">Hi, my name is</h2>
                
                {/* Name with a slight gradient and glow */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">Pamindu Rashmitha</span>
                </h1>
                
                <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
                    I build digital experiences.
                </h3>
                
                <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10">
                    I’m a software engineer specializing in building exceptional digital experiences. 
                    Currently, I’m focused on building accessible, human-centered products with 
                    <span className="text-blue-400"> React & TypeScript</span>.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20">
                       <a href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
                        >
                        View Projects
                        </a>
                    </button>
                    
                    {/* Pulsing Resume Button */}
                    <motion.button 
                        animate={{ 
                            boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 20px rgba(59, 130, 246, 0.4)", "0px 0px 0px rgba(59, 130, 246, 0)"] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-8 py-3 border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-lg transition-all"
                    >
                        Download CV
                    </motion.button>
                </div>
            </motion.div>

            {/* Right Side: Image Wrapper */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative group"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                    {/* Decorative Background Frame */}
                    <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    
                    {/* Main Image Container */}
                    <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src={myPhoto}
                            alt="Profile"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;