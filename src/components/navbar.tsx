import { useState } from 'react';
import { Sun } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');


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
      <div className="bg-blue-600/20 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex items-center shadow-2xl">
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveTab(link.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === link.name 
                  ? 'bg-white text-blue-900 shadow-lg' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle (Sun Icon) */}
        <div className="ml-2 pl-2 border-l border-white/20">
          <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
            <Sun size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;