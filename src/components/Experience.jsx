function Experience() {
    const experiences = [
      {
        year: "2025",
        title: "ERP Development Team Leader",
        company: "Import Export ERP System",
        description:
          "Leading development efforts and coordinating implementation of ERP modules for business workflow automation.",
      },
      {
        year: "2025",
        title: "Frontend Developer",
        company: "ExternsClub",
        description:
          "Worked on frontend interfaces, responsive design and improving user experience.",
      },
      {
        year: "2025",
        title: "Research Publication",
        company: "IoT in Maternal Health",
        description:
          "Published research exploring IoT applications in healthcare and maternal monitoring systems.",
      },
    ];
  
    return (
      <section id="experience" className="bg-[#050816] px-6 py-24">
        <div className="mx-auto max-w-5xl">
  
          <h2 className="mb-16 text-center text-5xl font-bold text-white">
            Journey
          </h2>
  
          <div className="relative">
  
            <div className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-purple-500 via-blue-500 to-green-500" />
  
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 pl-16"
              >
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
  
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
                  <p className="mb-2 text-sm text-green-400">
                    {exp.year}
                  </p>
  
                  <h3 className="text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
  
                  <p className="mb-4 text-blue-300">
                    {exp.company}
                  </p>
  
                  <p className="text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;