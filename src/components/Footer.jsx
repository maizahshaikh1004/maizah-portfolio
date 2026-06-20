function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        <p className="text-sm text-spotify-muted">
          © {currentYear} Maizah Shaikh. All rights reserved.
        </p>

        <p className="mt-3 text-xs text-spotify-muted/60">
          Built with React, Tailwind CSS, Framer Motion & Spotify vibes 🟢
        </p>

      </div>
    </footer>
  );
}

export default Footer;