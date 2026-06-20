import { FaCode, FaTrophy, FaGraduationCap, FaBook } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaGraduationCap />,
      value: "8.80",
      label: "CGPA",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaCode />,
      value: "3+",
      label: "Major Projects",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaTrophy />,
      value: "5+",
      label: "Achievements",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FaBook />,
      value: "1",
      label: "Research Paper",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="stats" className="bg-[#050816] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Highlights
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r ${item.color} text-2xl text-white`}
              >
                {item.icon}
              </div>

              <h3 className="mb-2 text-5xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;