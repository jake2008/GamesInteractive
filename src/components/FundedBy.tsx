import { motion } from "motion/react";

const INVESTORS = [
  { name: "Big Brain Holdings", logo: "/assets/logos/bigbrainholdings.png" },
  { name: "Divi", logo: "/assets/logos/divi.png" },
  { name: "Lightningworks", logo: "/assets/logos/lightningworks.webp" },
  { name: "Plena Finance", logo: "/assets/logos/plena_finance.png" },
  { name: "Alien Worlds", logo: "/assets/logos/alien_worlds.webp" }
];

export function FundedBy() {
  const items = [...INVESTORS, ...INVESTORS];

  return (
    <section className="py-12 bg-neutral-950 border-y border-neutral-800 overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold text-neutral-300 tracking-wider uppercase mb-8">Our Projects have been funded by:</p>

      <div className="w-full relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
          className="flex w-max"
        >
          {items.map((investor, i) => (
            <div key={`${investor.name}-${i}`} className="flex-none w-56 md:w-72 px-3">
              <div className="h-20 w-full flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 px-4">
                <img
                  src={investor.logo}
                  alt={investor.name}
                  className="h-12 w-40 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
