import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#Achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Pamindu-Rashmitha',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pamindu-rashmitha-93980127b/',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:pamidurashmitha@gmail.com',
    },
  ];

  return (
    <footer className="max-w-7xl mx-auto w-full">
      <div className="card-base">
        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 pb-8 sm:pb-12 border-b border-border">
          {/* Column 1: Brand & Bio (6 cols) */}
          <div className="sm:col-span-2 md:col-span-6 lg:col-span-5 space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary">
              Pamindu Rashmitha
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
              Undergraduate AI specialist building modern, scalable intelligent systems and web applications with a passion for elegant solutions.
            </p>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <h4 className="text-[11px] sm:text-xs font-semibold tracking-widest text-text-tertiary uppercase">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect (3 cols) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h4 className="text-[11px] sm:text-xs font-semibold tracking-widest text-text-tertiary uppercase">
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bg-alt hover:bg-white border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-gray-300 hover:shadow-xs transition-all duration-200"
                  aria-label={item.name}
                  title={item.name}
                >
                  <item.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-text-tertiary text-center sm:text-left">
          <p>© {currentYear} Pamindu Rashmitha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;