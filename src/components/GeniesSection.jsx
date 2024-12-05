// components/GeniesSection.js
import Image from "next/image";
import Accordion from "./Accordion";

const GeniesSection = () => {
  return (
    <section className="bg-gray-50 py-2 px-2 md:py-10 md:px-12">
      <div className="container w-full mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Resume Images */}
        <div className="relative flex-shrink-0 w-full  md:w-1/2">
          <div className="relative z-10">
            <img
              src="/studio.png" // Add your foreground image path
              alt="Resume Front"
            />
          </div>
        </div>

        {/* Right: Text and Accordion */}
        <div className="flex-1 w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Why Genies <span className="text-blue-500">CV Studio?</span>
          </h2>
          <p className="text-gray-600 mb-8">
            3 tools to create an impressive CV that matches the modern
            recruitment standards.
          </p>

          {/* Accordion */}
          <Accordion
            title="CV Creator"
            content="Create your ATS-friendly CV, quickly and easily, with AI-backed CV builder and professional templates that Resume writing professionals approve of."
          />
          <Accordion
            title="CV Optimiser"
            content="Created your CV? Now scan it through a carefully engineered CV scanner to test its ATS compatibility and optimise it to perfection in minutes!"
          />
          <Accordion
            title="CV Match"
            content="Match your CV with top job postings worldwide, ensuring the right fit for your career growth."
          />
        </div>
      </div>
    </section>
  );
};

export default GeniesSection;
