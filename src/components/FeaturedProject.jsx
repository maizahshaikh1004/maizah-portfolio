import dashboardImg from "../assets/images/campusone.png";

function FeaturedProject() {
  return (
    <section id="featuredProject" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
            Featured Project
          </p>

          <h2 className="text-5xl font-bold text-white">
            CampusOne
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            A comprehensive campus management platform designed to streamline
            academic operations, attendance tracking, assignments, events,
            notices and administrative workflows through role-based access.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-purple-500/20 px-4 py-2 text-purple-300">
                Django
              </span>

              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-300">
                Python
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-300">
                MySQL
              </span>

              <span className="rounded-full bg-orange-500/20 px-4 py-2 text-orange-300">
                Bootstrap
              </span>
            </div>

            <div className="space-y-5 text-gray-300">

              <div>✅ Attendance Management</div>

              <div>✅ Assignment Submission System</div>

              <div>✅ Notice & Announcement Portal</div>

              <div>✅ Event Management Module</div>

              <div>✅ Attendance Corrections Workflow</div>

              <div>✅ Multi-Role Authentication System</div>

            </div>

            <button className="mt-10 rounded-xl bg-linear-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
              View Project Details
            </button>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-3xl"></div>

            <img
              src={dashboardImg}
              alt="CampusOne Dashboard"
              className="relative rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProject;