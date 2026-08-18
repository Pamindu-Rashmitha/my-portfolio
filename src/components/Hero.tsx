import myPhoto from '../assets/me.jpeg';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto w-full">
      {/* Hero Card */}
      <div className="relative rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-bg-alt p-6 sm:p-10 md:p-14 lg:p-16">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-gradient-to-bl from-accent/15 via-gray-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 sm:w-[350px] h-60 sm:h-[350px] bg-gradient-to-tr from-gray-300/30 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Main 2-Column Responsive Layout */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] text-text-primary mb-2 sm:mb-3 tracking-tight">
              Hi, I’m <span className="text-text-primary">Pamindu</span>
            </h1>

            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-text-secondary mb-4 sm:mb-6 leading-snug">
              AI & Software Engineering Undergraduate
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-md lg:max-w-lg">
              I build intelligent software systems, machine learning solutions, and full-stack web applications. Feel free to explore my work or get in touch.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-accent hover:bg-accent-hover text-text-primary text-sm font-semibold rounded-xl sm:rounded-[15px] transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>
              <a
                href="/Pamindu_Rashmitha_Resume_AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Pamindu_Rashmitha_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-white hover:bg-gray-50 text-text-primary text-sm font-semibold rounded-xl sm:rounded-[15px] border border-border transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column: Creative Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex justify-center w-full lg:w-auto"
          >
            <div className="relative group">
              {/* Offset Accent Layer */}
              <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] md:rounded-[42px] bg-accent/25 translate-x-2.5 sm:translate-x-3.5 translate-y-2.5 sm:translate-y-3.5 -rotate-2 sm:-rotate-3 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

              {/* Offset Glass Backdrop */}
              <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] md:rounded-[42px] bg-white/70 backdrop-blur-md border border-gray-300/60 translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 rotate-1 sm:rotate-2 transition-transform duration-500" />

              {/* Main Photo Frame */}
              <div className="relative w-[190px] h-[240px] sm:w-[240px] sm:h-[300px] md:w-[270px] md:h-[340px] xl:w-[300px] xl:h-[370px] rounded-[26px] sm:rounded-[34px] md:rounded-[40px] p-1.5 sm:p-2 bg-gradient-to-tr from-accent via-white to-gray-200 shadow-xl sm:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-[22px] sm:rounded-[30px] md:rounded-[34px] overflow-hidden bg-gray-900 relative">
                  <img
                    src={myPhoto}
                    alt="Pamindu Rashmitha"
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="card-base mt-4 sm:mt-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          <div className="pb-4 sm:pb-0 sm:px-6 sm:first:pl-0 sm:last:pr-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">9+</div>
            <div className="text-xs sm:text-sm text-text-secondary mt-1">Projects built & deployed</div>
          </div>
          <div className="py-4 sm:py-0 sm:px-6 sm:first:pl-0 sm:last:pr-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">3.85</div>
            <div className="text-xs sm:text-sm text-text-secondary mt-1">Current GPA at SLIIT</div>
          </div>
          <div className="pt-4 sm:pt-0 sm:px-6 sm:first:pl-0 sm:last:pr-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">AI</div>
            <div className="text-xs sm:text-sm text-text-secondary mt-1">Specialization in Artificial Intelligence</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;