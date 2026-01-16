import { motion } from 'framer-motion';
import { contactInfo } from '../data/contact';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-24 px-6 border-t border-slate-800">
      <div className="text-center mb-16">
        <h3 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
        Get In Touch
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target={item.link.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-8 bg-slate-800/30 border border-slate-700 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group text-center"
          >
            <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono text-slate-600 dark:text-slate-500 uppercase tracking-widest mb-2">
              {item.label}
            </span>
            <span className="text-slate-700 dark:text-slate-200 font-medium break-all">
              {item.value}
            </span>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a
          href="mailto:pamidurashmitha@gmail.com"
          className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1"
        >
          <Send size={20} />
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;