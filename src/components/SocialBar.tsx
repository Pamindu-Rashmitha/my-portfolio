import { Mail, Github, Linkedin} from 'lucide-react';

const SocialBar = () => {
    {/* Right Sidebar Socials */}
    return(
        <>
            <div className="fixed right-0.5 top-3/4 -translate-y-1/2 flex flex-col items-center gap-6 z-40">
                <div className="h-20 w-\[1px\] bg-slate-700 mb-2"></div>
                <p className="text-[10px] tracking-[0.2em] text-slate-500 uppercase rotate-90 mb-8 whitespace-nowrap">
                    Get in touch
                </p>
                <a href="mailto:pamidurashmitha@gmail.com" className="transition-transform hover:-translate-y-1">
                    <Mail className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
                </a>
                <a href="https://github.com/Pamindu-Rashmitha" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
                    <Github className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/pamindu-rashmitha-93980127b/" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
                </a>
            </div>
        </>
    );
};

export default SocialBar;