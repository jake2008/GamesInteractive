import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-yellow-800 font-medium text-sm mb-6 border border-brand-yellow/30">
              Welcome to Games Interactive
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8 text-balance"
          >
            Crafting worlds with <span className="text-brand-purple inline-block">purpose</span> and <span className="text-brand-mint inline-block">play</span>.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
          >
            Our Mission - To build exceptionally fun, deeply engaging games that enrich the lives of our players and create a lasting positive impact.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="/#portfolio" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              Explore Our Games
            </motion.a>
            <motion.a 
              href="/#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:border-brand-purple hover:text-brand-purple transition-all"
            >
              Book a Chat
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Playful background shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-brand-mint/20 rounded-full blur-3xl pointer-events-none" 
      />
    </section>
  );
}
