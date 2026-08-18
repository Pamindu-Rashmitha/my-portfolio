import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import prLogo from '../assets/pr-logo.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Achievements', id: 'Achievements' },
  ];

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 lg:px-8">
      <div
        className={`w-full max-w-7xl bg-white rounded-[25px] px-4 lg:px-8 flex items-center justify-between transition-all duration-500 ${isScrolled
          ? 'shadow-lg shadow-black/5 py-2'
          : 'shadow-md shadow-black/3 py-3'
          }`}
      >
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src={prLogo}
            alt="Pamindu Rashmitha"
            className="w-10 h-10 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveTab(link.name)}
              className={`px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-200 ${activeTab === link.name
                ? 'text-text-primary border-b-2 border-dark'
                : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-dark hover:bg-dark-hover text-white text-sm font-medium rounded-[25px] transition-all duration-200"
          >
            Talk to me
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-text-primary hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[100] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2.5">
              <img
                src={prLogo}
                alt="Pamindu Rashmitha"
                className="w-8 h-8 object-contain"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-text-primary hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col flex-1 justify-center px-8 gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-2xl font-semibold py-3 transition-all duration-300 ${activeTab === link.name ? 'text-text-primary' : 'text-text-tertiary hover:text-text-primary'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="px-8 pb-8">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full px-6 py-4 bg-dark text-white text-lg font-semibold rounded-[20px] transition-colors hover:bg-dark-hover"
            >
              Talk to me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;