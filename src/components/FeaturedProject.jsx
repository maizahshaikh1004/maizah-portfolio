import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import campusoneImg from "../assets/images/campusone.png";
import landingImg from "../assets/images/campusonelanding.png";

function FeaturedProject() {
  const { title, tagline, tech, bullets } = portfolioData.featuredProject;

  return (
    <section id="featured-project" className="relative bg-[#121212] px-6 py-24 scroll-mt-12">
      {/* Glow Backplate */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-spotify-green/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-spotify-green/10 px-3.5 py-1 text-xs font-bold text-spotify-green uppercase tracking-wider mb-3">
            ⭐ Major Achievement
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl font-display">
            {title}
          </h2>
          <p className="mt-4 text-xl text-spotify-green font-medium font-display">
            {tagline}
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Left Details Panel (span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2.5"
            >
              {tech.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-[#181818] border border-white/5 px-4 py-1.5 text-xs font-semibold text-spotify-muted hover:border-spotify-green/30 hover:text-white transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Description list */}
            <div className="space-y-4">
              {bullets.map((bullet, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex gap-3 items-start group"
                >
                  {/* Verified Icon as checkbox */}
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-spotify-green/10 text-spotify-green group-hover:bg-spotify-green group-hover:text-black transition duration-300">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base text-spotify-muted group-hover:text-white transition duration-200 leading-relaxed">
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Roles spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl bg-[#181818] border border-white/5"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-spotify-muted mb-3">
                Role-Based Ecosystem
              </h4>
              <div className="flex gap-4 text-xs font-bold text-white">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full">Admin Portal</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full">Faculty Board</span>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-300 rounded-full">Student Panel</span>
              </div>
            </motion.div>

          </div>

          {/* Right Showcase Cards (span 7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6 relative"
          >
            {/* Visual glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-spotify-green/10 via-transparent to-transparent blur-3xl pointer-events-none" />

            {/* Main Mockup */}
            <div className="relative group rounded-3xl overflow-hidden border border-white/5 bg-[#181818] shadow-2xl p-2 transition duration-500 hover:scale-[1.01] hover:border-spotify-green/20">
              <img
                src={campusoneImg}
                alt="CampusOne Administrative Dashboard"
                className="rounded-2xl w-full object-cover transition duration-500 group-hover:brightness-110"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-white">
                Dashboard Overview
              </div>
            </div>

            {/* Second Mockup (Overlapping or structured below) */}
            <div className="relative group rounded-3xl overflow-hidden border border-white/5 bg-[#181818] shadow-2xl p-2 md:w-4/5 self-end transition duration-500 hover:scale-[1.01] hover:border-spotify-green/20">
              <img
                src={landingImg}
                alt="CampusOne Landing Page"
                className="rounded-2xl w-full object-cover transition duration-500 group-hover:brightness-110"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-white">
                Landing Page View
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProject;