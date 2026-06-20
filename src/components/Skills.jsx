function Skills() {
    const skills = [
      "Python",
      "Django",
      "React",
      "Java",
      "JavaScript",
      "MySQL",
      "Git",
      "GitHub",
      "Tailwind",
      "Canva",
    ];
  
    return (
      <section id="skills" className="bg-[#050816] px-6 py-24">
        <div className="mx-auto max-w-6xl">
  
          <h2 className="mb-12 text-center text-5xl font-bold text-white">
            Skills
          </h2>
  
          <div className="flex flex-wrap justify-center gap-4">
  
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg text-white transition hover:scale-110"
              >
                {skill}
              </span>
            ))}
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;