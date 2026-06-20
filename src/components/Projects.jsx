import campusone from "../assets/images/campusone.png";
import autonix from "../assets/images/autonixapp.png";
import revue from "../assets/images/revue.png";

function Projects() {
  const projects = [
    {
      title: "CampusOne",
      image: campusone,
      description:
        "Role-based campus management platform with attendance, assignments, notices, events and administrative workflows.",
      tech: ["Python", "Django", "MySQL"],
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Autonix",
      image: autonix,
      description:
        "Driver safety monitoring system featuring drowsiness detection, crash monitoring and emergency contact alerts.",
      tech: ["System Design", "UML", "Mobile App"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "ReVue",
      image: revue,
      description:
        "Movie review platform inspired by modern streaming services with reviews, ratings and favorites.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-4 text-center text-5xl font-bold text-white">
          Projects
        </h2>

        <p className="mb-16 text-center text-gray-400">
          Some of my favorite things I've built.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:-translate-y-3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain bg-[#0f172a]"
              />

              <div className="p-6">

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-sm text-white`}
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;