import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="relative bg-[#0b0b0b] px-6 py-24 scroll-mt-12">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-spotify-green/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold tracking-widest text-spotify-green uppercase font-display">
            Career Timeline
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            Journey & Internships
          </h2>
          <p className="mt-4 text-spotify-muted">
            Hover over a track to view bulleted responsibilities.
          </p>
        </motion.div>

        {/* Spotify Tracklist Layout */}
        <div className="rounded-3xl bg-[#181818] border border-white/5 p-6 shadow-2xl">
          
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-white/10 pb-4 mb-4 text-xs font-bold uppercase tracking-wider text-spotify-muted px-4">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Role & Company</div>
            <div className="col-span-3">Timeline</div>
            <div className="col-span-4">Key Achievements</div>
          </div>

          {/* Experience Tracks */}
          <div className="space-y-3">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-start p-4 rounded-xl hover:bg-[#282828] transition-colors duration-200 border border-transparent hover:border-white/5"
              >
                
                {/* Index / Play Indicator */}
                <div className="hidden md:flex col-span-1 items-center justify-center h-full text-base font-bold text-spotify-muted group-hover:text-spotify-green">
                  {/* Show play icon on hover, index otherwise */}
                  <span className="group-hover:hidden">0{index + 1}</span>
                  <span className="hidden group-hover:inline">
                    <svg className="h-4 w-4 fill-current text-spotify-green" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>

                {/* Role & Company */}
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-spotify-green transition duration-200 font-display">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-spotify-green uppercase tracking-wider mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Timeline */}
                <div className="col-span-1 md:col-span-3 flex items-center md:h-full">
                  <span className="inline-block rounded-full bg-[#282828] group-hover:bg-[#181818] border border-white/5 px-3.5 py-1 text-xs font-semibold text-spotify-muted transition">
                    {exp.year}
                  </span>
                </div>

                {/* Bullet Points / Achievements */}
                <div className="col-span-1 md:col-span-4 space-y-2 mt-2 md:mt-0">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex gap-2 items-start text-xs md:text-sm text-spotify-muted group-hover:text-white transition duration-200">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-spotify-green" />
                      <p className="leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;