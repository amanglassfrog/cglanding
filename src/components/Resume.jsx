import Image from "next/image";
import React from "react";

const resumeTemplates = [
  { id: 1, src: "/Resume1.png", alt: "Resume 1" },
  { id: 2, src: "/Resume2.png", alt: "Resume 2" },
  { id: 3, src: "/Resume3.png", alt: "Resume 3" },
  { id: 4, src: "/Resume4.png", alt: "Resume 4" },
  { id: 5, src: "/Resume5.png", alt: "Resume 5" },
  { id: 6, src: "/Resume6.png", alt: "Resume 6" },
  { id: 7, src: "/Resume7.png", alt: "Resume 7" },
  { id: 8, src: "/Resume8.png", alt: "Resume 8" },
];

export default function ResumeTemplates() {
  return (
    <section className="bg-[#FFFFFF] py-2 px-2 md:py-12 md:px-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Templates that are{" "}
          <span className="text-blue-600">Designed to Impress</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Through Application Tracking Software (ATS) to the Recruiters desk,
          our professional and designer CV template<br></br> designs will help
          you make a lasting impression.Our selection of CV template designs
          will leave the best first<br></br> impression on your recruiter and
          also help you get through multiple ATS scans.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {resumeTemplates.map((template) => (
          <div
            key={template.id}
            className="relative group overflow-hidden rounded-md shadow-lg"
          >
            {/* Resume Image */}
            <Image
              src={template.src}
              alt={template.alt}
              width={300}
              height={400}
              className="w-full h-auto"
            />
            {/* Choose Now Button */}
            <div className="absolute inset-0 flex justify-center items-end pb-8  bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="https://www.geniescareerhub.com/resume-builder">
                <button className="px-4 py-2 bg-[#172554] text-white font-semibold rounded-md shadow-md hover:bg-[#172554">
                  Choose Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
