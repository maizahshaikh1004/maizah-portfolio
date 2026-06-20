import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Projects",
    "Experience",
    "Skills",
    "Achievements",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-[#050816]/70 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-xl font-bold text-white">
          Maizah<span className="text-purple-400">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050816]">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 text-gray-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;