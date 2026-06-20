import uml from "../assets/images/autonixuml.png";
import er from "../assets/images/autonixerd.png";
import app from "../assets/images/autonixapp.png";

function AutonixCaseStudy() {
  return (
    <section id="autonix-case-study" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
          Case Study
        </p>

        <h2 className="mb-6 text-5xl font-bold text-white">
          Autonix
        </h2>

        <p className="mb-16 max-w-3xl text-lg text-gray-400">
          A driver safety monitoring system designed to detect
          drowsiness, monitor crash events and provide emergency
          alerts through intelligent tracking and reporting.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* ER Diagram */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <img
              src={er}
              alt="ER Diagram"
              className="mb-6 h-72 w-full object-contain"
            />

            <h3 className="mb-3 text-2xl font-bold text-white">
              System Design
            </h3>

            <p className="text-gray-400">
              Entity relationship modeling used to design
              data flow and database architecture.
            </p>
          </div>

          {/* UML */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <img
              src={uml}
              alt="UML Diagram"
              className="mb-6 h-72 w-full object-contain"
            />

            <h3 className="mb-3 text-2xl font-bold text-white">
              UML Architecture
            </h3>

            <p className="text-gray-400">
              Object-oriented modeling and interaction
              design for application components.
            </p>
          </div>

          {/* App */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <img
              src={app}
              alt="Autonix App"
              className="mb-6 h-72 w-full object-contain"
            />

            <h3 className="mb-3 text-2xl font-bold text-white">
              Mobile Application
            </h3>

            <p className="text-gray-400">
              User interface for trip tracking,
              safety monitoring and emergency alerts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AutonixCaseStudy;