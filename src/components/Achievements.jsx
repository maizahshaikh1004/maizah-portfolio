import {
    FaTrophy,
    FaMedal,
    FaBook,
    FaStar,
  } from "react-icons/fa";
  
  function Achievements() {
    const achievements = [
      {
        icon: <FaStar />,
        title: "9.9 CGPA",
      },
      {
        icon: <FaTrophy />,
        title: "Student Teacher Competition Winner",
      },
      {
        icon: <FaBook />,
        title: "Research Publication",
      },
      {
        icon: <FaMedal />,
        title: "Presentomania Prize",
      },
    ];
  
    return (
      <section id="achievements" className="bg-[#050816] px-6 py-24">
        <div className="mx-auto max-w-6xl">
  
          <h2 className="mb-12 text-center text-5xl font-bold text-white">
            Achievements
          </h2>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  
            {achievements.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <div className="mb-4 text-4xl text-yellow-400">
                  {item.icon}
                </div>
  
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Achievements;