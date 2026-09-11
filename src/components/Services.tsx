import { ReactNode } from "react";
import { motion } from "motion/react";
import { Code2, Coins, Gamepad2, Glasses, Lightbulb, Rocket } from "lucide-react";
import { SERVICES } from "../data";

const iconMap: Record<string, ReactNode> = {
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
  Glasses: <Glasses className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600">
            Whether you need a full game built or specialist help on an existing project, we bring the same player-first approach to every partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/#contact"
            className="inline-flex items-center text-sm font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors group"
          >
            Discuss your project <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
