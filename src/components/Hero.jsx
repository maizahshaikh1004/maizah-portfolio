function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-green-400 mb-4">
          ASSALAMUALAIKUM 👋
        </p>

        <h1 className="text-7xl font-bold">
          Maizah Shaikh
        </h1>

        <p className="text-2xl mt-4 text-gray-300">
          Python Developer • Django Developer • Full Stack Developer
        </p>

        <button className="mt-8 px-6 py-3 rounded-xl bg-green-500 text-black font-semibold">
          View Projects
        </button>
      </div>
    </section>
  );
}

export default Hero;