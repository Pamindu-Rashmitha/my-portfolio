const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  
  const lastUpdated = "January 2026";

  return (
        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright Section */}
            <div className="text-slate-600 dark:text-slate-500 text-sm font-medium">
            © {currentYear} <span className="text-blue-400 dark:text-blue-400/80">Pamindu Rashmitha</span>. All rights reserved.
            </div>

            {/* Last Updated Section */}
            <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-slate-600 dark:text-slate-500 text-xs font-mono tracking-wider uppercase">
                Last Updated: {lastUpdated}
            </p>
            </div>
            
        </div>
        </footer>
  );
};

export default Footer;