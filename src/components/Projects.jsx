import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import campusone from "../assets/images/campusone.png";
import autonix from "../assets/images/autonixapp.png";
import revue from "../assets/images/revue.png";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const imageMap = {
    "CampusOne": campusone,
    "Autonix": autonix,
    "ReVue": revue,
  };

  const categories = ["All", "Full Stack", "Frontend", "Software Engineering"];

  const filteredProjects = activeCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-[#0b0b0b] px-6 py-24 scroll-mt-12">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-spotify-green/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-bold tracking-widest text-spotify-green uppercase font-display">
            Discography
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            All Projects
          </h2>
          <p className="mt-4 text-spotify-muted">
            Click on a card to browse details of what I've engineered.
          </p>
        </motion.div>

        {/* Categories / Filters (Spotify Pills) */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition duration-300 ${
                activeCategory === cat
                  ? "bg-spotify-green text-black scale-105"
                  : "bg-[#181818] border border-white/5 text-white hover:bg-[#282828]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (Spotify Album Cover Style) */}
        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group spotify-card rounded-2xl overflow-hidden p-4 flex flex-col justify-between cursor-pointer"
              >
                {/* Album Cover Image Frame */}
                <div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0f172a] mb-4">
                    <img
                      src={imageMap[project.title]}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Spotify Play Hover Circle */}
                    <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-spotify-green text-black opacity-0 shadow-xl translate-y-2 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition duration-300 ease-out">
                      {/* Play SVG Icon */}
                      <svg className="h-5 w-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="px-1">
                    <span className="text-xs font-bold text-spotify-green uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white group-hover:text-spotify-green transition duration-200 font-display">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-spotify-muted line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-1.5 px-1">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-full bg-[#282828] px-2.5 py-1 text-xs text-spotify-muted font-medium hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-3xl bg-[#181818] p-8 border border-white/10 flex flex-col justify-between cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-white hover:bg-spotify-green hover:text-black transition"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div>
                <span className="text-xs font-bold tracking-wider text-spotify-green uppercase">
                  {selectedProject.category}
                </span>
                
                <h3 className="text-3xl font-extrabold text-white mt-1 mb-2 font-display">
                  {selectedProject.title}
                </h3>
                
                <p className="text-sm font-semibold text-spotify-green/80 font-display mb-6">
                  {selectedProject.tagline}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#282828] px-3.5 py-1 text-xs text-spotify-muted font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-sm font-bold uppercase tracking-wider text-spotify-muted mb-3 border-b border-white/5 pb-2">
                  Key Deliverables & Responsibilities
                </h4>

                <div className="space-y-3">
                  {selectedProject.details.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 items-start group" >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-spotify-green/10 text-spotify-green">
                        <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="text-sm text-spotify-muted leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-spotify-green px-6 py-2.5 text-sm font-bold text-black hover:scale-105 active:scale-95 transition"
                >
                  Close View
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;