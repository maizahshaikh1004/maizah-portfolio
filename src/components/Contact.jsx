import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  const { email, github, linkedin, resumeUrl } = portfolioData.personalInfo;
  const [showToast, setShowToast] = useState(false);

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: email,
      link: `mailto:${email}`,
      color: "hover:border-red-500/20 group-hover:text-red-400",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      link: linkedin,
      color: "hover:border-blue-500/20 group-hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "Browse my repos",
      link: github,
      color: "hover:border-purple-500/20 group-hover:text-purple-400",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume",
      value: "Download offline copy",
      link: resumeUrl,
      color: "hover:border-spotify-green/20 group-hover:text-spotify-green",
    },
  ];

  const handleCardClick = (item) => {
    if (item.title === "Email") {
      // Copy to clipboard
      navigator.clipboard.writeText(email)
        .then(() => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        })
        .catch((err) => {
          console.error("Could not copy email to clipboard: ", err);
        });
    }
  };

  return (
    <section id="contact" className="relative bg-[#121212] px-6 py-24 scroll-mt-12">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-spotify-green/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold tracking-widest text-spotify-green uppercase font-display">
            Get in Touch
          </p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl font-display">
            Connect With Me
          </h2>
          <p className="mt-4 text-spotify-muted">
            Reach out via any of the channels below to collaborate or inquire.
          </p>
        </motion.div>

        {/* Social Grid (Spotify Playlist style) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.title === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              onClick={() => handleCardClick(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group spotify-card rounded-2xl p-6 flex flex-col items-start text-left border border-white/5 hover:border-spotify-green/20 transition-all duration-300 cursor-pointer"
            >
              {/* Cover Art style Icon Frame */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#282828] text-2xl text-spotify-green group-hover:bg-spotify-green group-hover:text-black transition-all duration-300 shadow-md">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-spotify-green transition duration-200 font-display mb-1">
                {item.title}
              </h3>

              {/* Detail */}
              <p className="text-sm text-spotify-muted truncate w-full group-hover:text-white transition duration-200">
                {item.value}
              </p>

              {/* Play-Style Link indicator at bottom */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-spotify-green uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300">
                <span>{item.title === "Email" ? "Copy & Send" : "Connect"}</span>
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

            </motion.a>
          ))}
        </div>

      </div>

      {/* Copy notification Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] rounded-full bg-spotify-green text-black font-bold px-6 py-3 shadow-2xl flex items-center gap-2 text-sm"
          >
            {/* Green Check Icon */}
            <svg className="h-4 w-4 fill-current shrink-0 text-black" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Contact;