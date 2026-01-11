import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Achievements', id: 'Achievements' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="bg-blue-600/20 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex items-center shadow-2xl transition-all duration-300">
        
        
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveTab(link.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === link.name 
                  ? 'bg-white text-blue-900 shadow-lg' 
                  : 'text-white/80 dark:text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        
        <div className="lg:hidden flex items-center px-2">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        
        <div className="ml-2 pl-2 border-l border-white/20">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      
      <div className={`fixed inset-0 bg-slate-950/90 backdrop-blur-2xl lg:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveTab(link.name);
                setIsMenuOpen(false);
              }}
              className={`text-2xl font-bold transition-colors ${
                activeTab === link.name ? 'text-blue-400' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 p-4 bg-white/10 rounded-full text-white"
          >
            <X size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;