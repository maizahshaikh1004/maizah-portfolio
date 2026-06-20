import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaGraduationCap, FaBook } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

function Stats() {
  const iconMap = {
    "CGPA": <FaGraduationCap />,
    "Major Projects": <FaCode />,
    "Achievements": <FaTrophy />,
    "Research Paper": <FaBook />,
  };

  return (
    <section id="stats" className="relative bg-[#0b0b0b] px-6 py-20">
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white font-display md:text-4xl">
            Highlights at a Glance
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-3xl bg-[#181818] p-8 border border-white/5 shadow-xl transition-all duration-300 hover:border-spotify-green/20"
            >
              {/* Green Accent Shadow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-spotify-green/0 opacity-0 group-hover:bg-spotify-green/[0.02] group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#282828] text-2xl text-spotify-muted group-hover:bg-spotify-green group-hover:text-black transition-all duration-300">
                {iconMap[item.label] || <FaCode />}
              </div>

              {/* Value */}
              <h3 className="mb-2 text-5xl font-black tracking-tight text-white font-display">
                {item.value}
              </h3>

              {/* Label */}
              <h4 className="text-lg font-bold text-white font-display">
                {item.label}
              </h4>

              {/* Description */}
              <p className="mt-1 text-sm text-spotify-muted">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;