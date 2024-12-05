"use client";
import React from "react";
import Image from "next/image";

const ResumeSection = () => {
  return (
    <section className="bg-[#EFF4F9] py-2 px-2 md:py-10 md:px-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold mb-4 text-black">
          Your job-winning CV, <span className="text-blue-500">Simplified</span>
        </h2>

        {/* Layout */}
        <img src="/cvcg.png" className="p-2 md:p-24" />
      </div>
    </section>
  );
};

export default ResumeSection;
