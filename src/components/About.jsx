import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function About() {
  const { summary } = portfolioData.personalInfo;
  const education = portfolioData.education;
  const certifications = portfolioData.certifications;

  return (
    <section id="about" className="relative bg-[#121212] px-6 py-24 scroll-mt-12">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-spotify-green/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold tracking-widest text-spotify-green uppercase font-display">
            Behind the Music
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            Biography
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          
          {/* Biography Text (Left Column, span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <div className="rounded-3xl bg-[#181818] p-8 md:p-10 border border-white/5 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-display flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-spotify-green animate-ping" />
                About Me
              </h3>
              <p className="text-lg leading-relaxed text-spotify-muted">
                {summary}
              </p>
              <p className="mt-6 text-base leading-relaxed text-spotify-muted">
                I enjoy transforming ideas into structured, high-performance systems. Whether it is designing comprehensive campus administration databases, developing real-time safety tracking applications, or deploying modular full-stack architectures, I build with clean structures and reliable code.
              </p>
            </div>
          </motion.div>

          {/* Education & Certifications (Right Column, span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Education Section */}
            <div className="rounded-3xl bg-[#181818] p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 font-display border-b border-white/5 pb-3">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#282828] text-sm text-spotify-green font-bold group-hover:bg-spotify-green group-hover:text-black transition duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-spotify-green transition duration-200">
                        {item.degree}
                      </h4>
                      <p className="text-sm text-spotify-muted">
                        {item.institution} • {item.year}
                      </p>
                      <span className="inline-block mt-1 text-xs font-bold text-spotify-green bg-spotify-green/10 rounded-full px-2.5 py-0.5">
                        {item.details}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="rounded-3xl bg-[#181818] p-8 border border-white/5 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 font-display border-b border-white/5 pb-3">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    {/* Tiny Vinyl Disc Icon */}
                    <div className="h-3 w-3 rounded-full bg-spotify-green shrink-0 group-hover:scale-150 transition duration-300" />
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-spotify-green transition duration-200">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-spotify-muted">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;