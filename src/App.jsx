import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import AutonixCaseStudy from "./components/AutonixCaseStudy";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-spotify-black min-h-screen text-white antialiased selection:bg-spotify-green selection:text-black">
      <Navbar />
      <div className="spotify-gradient-bg">
        <Hero />
        <About />
        <Stats />
        <FeaturedProject />
        <Projects />
        <AutonixCaseStudy />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;