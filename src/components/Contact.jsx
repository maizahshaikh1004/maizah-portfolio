import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileAlt,
  } from "react-icons/fa";
  
  function Contact() {
    const contacts = [
      {
        icon: <FaEnvelope />,
        title: "Email",
        value: "maizahshaikh.it@gmail.com",
        link: "mailto:maizahshaikh.it@gmail.com",
        color: "from-red-500 to-pink-500",
      },
      {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        value: "Connect With Me",
        link: "https://linkedin.com/in/maizah-shaikh",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: <FaGithub />,
        title: "GitHub",
        value: "View My Projects",
        link: "https://github.com/maizahshaikh1004",
        color: "from-purple-500 to-violet-500",
      },
      {
        icon: <FaFileAlt />,
        title: "Resume",
        value: "Download Resume",
        link: "/resume.pdf",
        color: "from-green-500 to-emerald-500",
      },
    ];
  
    return (
      <section
        id="contact"
        className="bg-[#050816] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
  
          <h2 className="mb-4 text-center text-5xl font-bold text-white">
            Let's Connect
          </h2>
  
          <p className="mb-16 text-center text-gray-400">
            Open to internships, collaborations and exciting opportunities.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r ${item.color} text-2xl text-white`}
                >
                  {item.icon}
                </div>
  
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
  
                <p className="text-gray-400 group-hover:text-white transition">
                  {item.value}
                </p>
              </a>
            ))}
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;