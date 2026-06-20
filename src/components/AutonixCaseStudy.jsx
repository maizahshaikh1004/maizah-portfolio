import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import uml from "../assets/images/autonixuml.png";
import er from "../assets/images/autonixerd.png";
import app from "../assets/images/autonixapp.png";

function AutonixCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  const panels = [
    {
      title: "System ERD",
      image: er,
      desc: "Entity-relationship modeling designing safety databases, driver profiles, and trip telemetry.",
    },
    {
      title: "UML Architecture",
      image: uml,
      desc: "Behavioral sequence and class structures representing drowsiness detection workflows.",
    },
    {
      title: "Mobile Interface",
      image: app,
      desc: "Responsive screen mockups tracking live trips, emergency buttons, and drowsiness logs.",
    },
  ];

  return (
    <section id="autonix-case-study" className="relative bg-[#121212] px-6 py-24 scroll-mt-12">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-spotify-green/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-spotify-green/10 px-3.5 py-1 text-xs font-bold text-spotify-green uppercase tracking-wider mb-3">
            📚 Case Study
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            Autonix Case Study
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-spotify-muted">
            A rider assistance and drowsiness monitoring system. We engineered the product using object-oriented analysis, UML sequence diagrams, and relational database designs.
          </p>
        </motion.div>

        {/* Panel Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {panels.map((panel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group spotify-card rounded-2xl p-5 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div
                onClick={() => setSelectedImage(panel)}
                className="relative h-60 w-full overflow-hidden rounded-xl bg-[#0b0b0b] border border-white/5 cursor-pointer mb-6 flex items-center justify-center p-2"
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="h-full object-contain transition duration-500 group-hover:scale-105"
                />
                
                {/* Click to inspect overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 text-spotify-green fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span className="text-sm font-semibold text-white">Click to Inspect</span>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-spotify-green transition font-display mb-2">
                  {panel.title}
                </h3>
                <p className="text-sm text-spotify-muted leading-relaxed">
                  {panel.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Diagrams */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full rounded-2xl bg-[#181818] p-6 border border-white/10 flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-white hover:bg-spotify-green hover:text-black transition"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {selectedImage.title}
              </h3>
              
              <div className="w-full flex-1 overflow-hidden flex items-center justify-center p-2 rounded-xl bg-[#0b0b0b]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[60vh] object-contain"
                />
              </div>

              <p className="mt-4 text-center text-spotify-muted max-w-xl text-sm">
                {selectedImage.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AutonixCaseStudy;