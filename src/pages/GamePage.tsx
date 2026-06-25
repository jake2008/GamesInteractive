import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Trophy, BarChart3 } from "lucide-react";
import { PROJECTS } from "../data";
import { useEffect } from "react";

export function GamePage() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Game not found</h1>
        <Link to="/" className="text-brand-purple hover:underline">Return to home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      <Link to="/#portfolio" className="inline-flex items-center text-brand-purple hover:text-brand-purple-dark mb-8 font-medium hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Games
      </Link>

      {project.youtubeId ? (
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-brand-purple/10 bg-gray-900">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
            title={`${project.title} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 bg-neutral-900 relative shadow-xl shadow-brand-purple/5">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8 md:p-12">
            <div>
              <div className="text-brand-yellow font-medium mb-2 tracking-wide uppercase text-sm">
                {project.category}
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {project.youtubeId && (
        <div className="mb-12">
          <div className="text-brand-purple font-semibold mb-2 tracking-wide uppercase text-sm">
            {project.category}
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-gray-900">
            {project.title}
          </h1>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">About the Game</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            {project.fullDescription || project.description}
          </p>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-brand-purple/5">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in {project.title}?</h3>
            <p className="text-gray-600 mb-6">
              Get in touch with us to discuss partnerships, publishing, or early access opportunities.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple text-white rounded-full font-semibold hover:bg-brand-purple-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {project.stats && project.stats.length > 0 && (
            <div className="bg-[#FAFAF9] rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-mint/20 text-brand-mint flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">Key Stats</h3>
              </div>
              <div className="space-y-6">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-display font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.awards && project.awards.length > 0 && (
            <div className="bg-[#FAFAF9] rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-yellow-600 flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">Recognition</h3>
              </div>
              <ul className="space-y-4">
                {project.awards.map((award, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
