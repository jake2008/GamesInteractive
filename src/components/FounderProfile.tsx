import { motion } from "motion/react";
import { EXPERIENCES } from "../data";

export function FounderProfile() {
  return (
    <section id="founder" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="w-32 h-32 rounded-3xl bg-brand-purple-light mb-6 overflow-hidden">
                <img
                  src="/assets/img/jake.jpg?auto=format&fit=crop&q=80&w=400"
                  alt="Jake O'Connor"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Jake O'Connor</h2>
              <p className="text-brand-purple font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over a decade in the games industry, I founded Games Interactive to build the games I love with a focus on creating a positive impact for players.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-brand-yellow hover:text-brand-purple transition-colors">
                  Contact Jake
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-brand-purple before:rounded-full before:ring-4 before:ring-purple-50"
                >
                  <div className="absolute left-[5px] top-5 bottom-[-40px] w-0.5 bg-gray-100 last:hidden" />
                  <div className="text-sm font-medium text-gray-400 mb-1">{exp.period}</div>
                  <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                  <div className="text-brand-purple mb-3 font-medium">{exp.company}</div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
