import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Projects from './components/Projects';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

const App = () => {
  return (
    <div className="bg-[#f5f5f5] text-[#1a1a1a] min-h-screen font-sans selection:bg-[#facc15] selection:text-[#1a1a1a] overflow-x-hidden w-full">
      <Navbar />

      <main className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
};

export default App;