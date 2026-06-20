import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import myImg from "../assets/images/maizah.png";

function Hero() {
  const { name, titles, summary, openToOpportunities } = portfolioData.personalInfo;

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#121212] via-[#0b0b0b] to-[#121212] pt-24 pb-12 px-6 lg:px-12"
    >
      {/* Background Neon Green Glows */}
      <div className="absolute top-1/4 left-1/10 h-96 w-96 rounded-full bg-spotify-green/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-spotify-green/5 blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        
        {/* Left Content (Artist/Developer Details) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge: Open to Opportunities (Styled as Spotify Verified Artist Badge) */}
          {openToOpportunities && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-spotify-green/20 bg-spotify-green/10 px-4 py-1.5 backdrop-blur-md"
            >
              {/* Verified Green Icon */}
              <svg className="h-4 w-4 text-spotify-green fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-xs font-bold tracking-wider text-spotify-green uppercase">
                Verified Python Developer
              </span>
            </motion.div>
          )}

          <p className="mb-2 text-sm font-semibold tracking-wider text-spotify-muted uppercase font-display">
            Artist Spotlight
          </p>

          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl font-display leading-none">
            {name}
          </h1>

          {/* Titles / Genres */}
          <div className="mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-sm text-spotify-muted">
            <span className="text-white font-medium">{titles.join("  •  ")}</span>
          </div>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-spotify-muted">
            {summary}
          </p>

          {/* Controls (Play/Follow buttons) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-spotify-green px-8 py-4 text-base font-bold text-black hover:scale-105 active:scale-95 transition duration-300 shadow-lg shadow-spotify-green/25"
            >
              {/* Play Icon */}
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              View Projects
            </a>

            <a
              href="/Maizah_Resume.pdf"
              download="Maizah_Shaikh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white hover:border-white hover:scale-105 active:scale-95 transition duration-300 bg-transparent"
            >
              {/* Download Icon */}
              <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Get Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content (Album/Artist Image cover) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Card shadow backplate */}
          <div className="absolute h-80 w-80 rounded-3xl bg-gradient-to-tr from-spotify-green to-transparent opacity-20 blur-2xl" />

          {/* Spotify style vinyl/cover artwork frame */}
          <div className="relative group p-3 bg-[#181818] rounded-3xl border border-white/5 shadow-2xl transition duration-500 hover:rotate-2 hover:scale-[1.02]">
            <img
              src={myImg}
              alt={name}
              className="h-80 w-80 md:h-[400px] md:w-[400px] rounded-2xl object-cover grayscale transition duration-500 group-hover:grayscale-0 shadow-lg"
            />
            {/* Visual audio overlay on hover */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="flex gap-1.5 items-end h-8">
                <div className="w-1.5 bg-spotify-green rounded-full animate-bounce h-full" style={{ animationDelay: '0.1s', animationDuration: '0.6s' }} />
                <div className="w-1.5 bg-spotify-green rounded-full animate-bounce h-2/3" style={{ animationDelay: '0.3s', animationDuration: '0.4s' }} />
                <div className="w-1.5 bg-spotify-green rounded-full animate-bounce h-4/5" style={{ animationDelay: '0.5s', animationDuration: '0.5s' }} />
                <div className="w-1.5 bg-spotify-green rounded-full animate-bounce h-1/2" style={{ animationDelay: '0.2s', animationDuration: '0.7s' }} />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;