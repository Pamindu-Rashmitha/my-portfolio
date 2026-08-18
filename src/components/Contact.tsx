import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const email = 'pamidurashmitha@gmail.com';

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      link: `mailto:${email}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/pamindu-rashmitha-93980127b/',
    },
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/Pamindu-Rashmitha',
    }
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto w-full">
      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[25px] bg-[#121214] text-white py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 text-center border border-white/5 shadow-2xl">
        {/* Subtle radial glow background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center w-full"
        >
          {/* Top Tag */}
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-400 uppercase mb-4 sm:mb-8 block">
            OPEN TO OPPORTUNITIES
          </span>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-4 sm:mb-6">
            Looking for an <br />
            AI Engineer Intern.
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12 md:mb-14 px-2">
            I'm actively seeking an AI Engineer internship where I can contribute to real-world intelligent systems. If you're building something with AI, I'd love to be part of it.
          </p>

          {/* Big Email Link with Hover Effect */}
          <div className="relative mb-8 sm:mb-14 inline-flex flex-col items-center max-w-full px-2">
            <a
              href={`mailto:${email}`}
              className="text-base sm:text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1.5 sm:gap-2 group break-all text-center"
            >
              <span>{email}</span>
              <ArrowUpRight
                size={20}
                className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
              />
            </a>
          </div>

          {/* Bottom Row of Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1c1c20] hover:bg-[#26262b] text-gray-300 hover:text-white border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 group hover:scale-105 shadow-sm"
              >
                <item.icon size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;