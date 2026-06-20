import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaBook, FaStar, FaCode } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

function Achievements() {
  const iconMap = {
    book: <FaBook />,
    trophy: <FaTrophy />,
    medal: <FaMedal />,
    star: <FaStar />,
    code: <FaCode />,
  };

  return (
    <section id="achievements" className="relative bg-[#0b0b0b] px-6 py-24 scroll-mt-12">
      {/* Background Neon Green Glows */}
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-spotify-green/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold tracking-widest text-spotify-green uppercase font-display">
            Hall of Fame
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            Achievements & Awards
          </h2>
          <p className="mt-4 text-spotify-muted">
            Highlights from academic milestones and competitive hackathons/events.
          </p>
        </motion.div>

        {/* Grid Layout (Spotify Podcast Card Style) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group spotify-card rounded-2xl p-6 flex flex-col items-start"
            >
              {/* Cover Art Box with Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#282828] text-2xl text-spotify-green group-hover:bg-spotify-green group-hover:text-black transition-all duration-300 shadow-lg">
                {iconMap[item.iconName] || <FaTrophy />}
              </div>

              {/* Text metadata */}
              <h3 className="text-lg font-bold text-white group-hover:text-spotify-green transition duration-200 font-display mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-spotify-muted leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;