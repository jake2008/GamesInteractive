import { ReactNode } from "react";
import { motion } from "motion/react";
import { Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { ETHOS_POINTS } from "../data";

const iconMap: Record<string, ReactNode> = {
  Clock: <Clock className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />
};

export function Ethos() {
  return (
    <section id="ethos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Our Design Philosophy
          </h2>
          <p className="text-lg text-gray-600">
            We believe games should enrich lives. Our core principles ensure every title we ship respects the player.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ETHOS_POINTS.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#FAFAF9] border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 \${point.color} group-hover:scale-110 transition-transform`}>
                {iconMap[point.iconName]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
