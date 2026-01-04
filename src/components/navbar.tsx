import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(true);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="bg-blue-600/20 dark:bg-slate-900/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex items-center shadow-2xl transition-colors duration-300">
        <div className="flex items-center gap-1">
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

        
        <div className="ml-2 pl-2 border-l border-white/20">
          <button
            onClick={toggleTheme}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;