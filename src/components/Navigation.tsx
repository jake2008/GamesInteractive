import { motion } from "motion/react";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAFAF9]/80 border-b border-purple-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-brand-purple/20">
            <Gamepad2 className="w-6 h-6 text-white -rotate-3" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-brand-purple-dark">
            Games Interactive
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="/#ethos" className="hover:text-brand-purple transition-colors">Ethos</a>
          <a href="/#portfolio" className="hover:text-brand-purple transition-colors">Games</a>
          <a href="/#founder" className="hover:text-brand-purple transition-colors">Founder</a>
          <a 
            href="/#contact" 
            className="px-5 py-2.5 bg-brand-purple text-white rounded-full hover:bg-brand-purple-dark transition-colors shadow-sm shadow-brand-purple/20 font-semibold"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
