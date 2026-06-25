import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14
    }
  }
};

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A selection of our current titles in development and released games.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Link to={`/games/${project.id}`} className="block h-full flex flex-col">
                <div className={`aspect-[4/3] rounded-3xl mb-6 overflow-hidden bg-neutral-900 relative`}>
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-purple/20 rounded-3xl transition-colors pointer-events-none" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-sm font-medium text-brand-purple mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-6 flex-grow">{project.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-brand-purple mt-auto group-hover:text-brand-purple-dark transition-colors">
                    Explore Game <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
