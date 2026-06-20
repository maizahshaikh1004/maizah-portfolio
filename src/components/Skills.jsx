import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function Skills() {
  const { languages, frameworks, database, tools, concepts } = portfolioData.skills;

  const skillCategories = [
    {
      title: "Languages",
      skills: languages,
      color: "from-emerald-950/40 to-spotify-green/20",
    },
    {
      title: "Frameworks & Tech",
      skills: frameworks,
      color: "from-[#181818] to-[#282828]",
    },
    {
      title: "Databases & Tools",
      skills: [...database, ...tools],
      color: "from-zinc-900 to-zinc-950",
    },
    {
      title: "Backend & Systems Concepts",
      skills: concepts,
      color: "from-[#121212] to-spotify-green/5",
    },
  ];

  return (
    <section id="skills" className="relative bg-[#121212] px-6 py-24 scroll-mt-12">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-spotify-green/5 blur-[120px] pointer-events-none" />

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
            Abilities
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            Technical Skills
          </h2>
          <p className="mt-4 text-spotify-muted">
            My development stack categorized by domains.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-3xl bg-gradient-to-br ${category.color} p-8 border border-white/5 shadow-xl transition-all duration-300 hover:border-spotify-green/20`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-display border-b border-white/5 pb-3">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-full bg-[#121212]/80 border border-white/10 px-4 py-2 text-sm text-spotify-muted hover:border-spotify-green hover:text-white transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;