import myImg from "../assets/images/maizah.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute top-40 right-20 h-72 w-72 rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-green-500/20 blur-[120px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">

        {/* Left Content */}
        <div className="flex-1">

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="text-sm text-green-400">
              ● Open to Opportunities
            </span>
          </div>

          <p className="mb-4 text-lg text-gray-400">
            ASSALAMUALAIKUM 👋
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
            Maizah <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Shaikh
            </span>
          </h1>

          <h2 className="mb-6 text-xl text-gray-300 md:text-2xl">
            Python Developer • Django Developer • Full Stack Developer
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
            Building academic workflow platforms, backend systems,
            and scalable web applications that solve real-world
            problems through clean architecture and thoughtful design.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold transition hover:scale-105">
              View Projects
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10">
              Download Resume
            </button>
          </div>

        </div>

        {/* Right Content */}
        <div className="hidden flex-1 items-center justify-center lg:flex">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 blur-3xl opacity-40" />

            <img
              src={myImg}
              alt="Maizah Shaikh"
              className="relative z-10 h-[500px] w-[500px] rounded-full object-cover border border-white/10"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;