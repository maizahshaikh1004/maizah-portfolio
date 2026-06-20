import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/80 backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="#hero-section" className="group flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white font-display">
            Maizah<span className="text-spotify-green transition-transform duration-300 group-hover:scale-125 inline-block">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold text-spotify-muted hover:text-white transition-colors duration-200"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-spotify-green transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
          {/* Action button */}
          <a
            href="#contact"
            className="rounded-full bg-spotify-green px-5 py-2 text-sm font-bold text-black hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            Connect
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[#181818] border border-white/5 text-white hover:scale-105 active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full border-b border-white/5 bg-[#121212] py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-spotify-muted hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center rounded-full bg-spotify-green py-3 font-bold text-black hover:scale-[1.02] transition-transform"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;