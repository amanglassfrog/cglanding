import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="bg-[#EFF4F9]  flex flex-col  ">
        <header className="bg-white w-full py-4 px-2 md:px-8 flex justify-between items-center">
          <div className="text-lg font-bold text-gray-800">
            <a href="https://www.geniescareerhub.com/">
              <Image
                src="/cglogo.png"
                alt="Genies Logo"
                width={80}
                height={20}
              />
            </a>
          </div>
          <div className="space-x-4">
            <a href="https://www.geniescareerhub.com/contact-us">
              {" "}
              <button className="text-gray-800 font-medium hover:text-blue-600">
                Contact Us
              </button>
            </a>
            <button className="px-6 py-2 border border-black text-black font-medium rounded-md hover:bg-[#2d3d72] hover:text-white transition">
              Sign In
            </button>
          </div>
        </header>

        <div className="w-full ">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="w-full pt-4 md:pt-0 lg:w-1/2 mb-8 lg:mb-0 pl-4 md:pl-16">
              <h1 className="text-[45px] sm:text-[70px] md:text-[80px] leading-tight text-gray-800">
                ATS Friendly <span className="text-blue-600 font-bold">CV</span>{" "}
                <br />
                <span className="font-bold">in Minutes 👋</span>
              </h1>
              <p className="mt-4 font-medium text-gray-600 text-[12px] sm:text-[18px]">
                CV making just got Quicker, Easier, and more Precise with Genies
                <br />
                Career Hub. Increase your chances to land your dream job role.
                <br />
                Lets get started!
              </p>
              <p className="mt-6 font-semibold italic text-[24px] md:text-[34px] text-black">
                Sign Up Now for a{" "}
                <span className="font-bold text-blue-600">
                  14-day Free Trial!
                </span>
              </p>
              <a href="https://www.geniescareerhub.com/resume-builder">
                {" "}
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition">
                  Create CV Now
                </button>
              </a>
            </div>

            {/* Right Section */}
            <div
              className="w-full lg:w-1/2 p-6 relative overflow-hidden"
              style={{
                backgroundImage: `url('/cgbg.png')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Resume Preview */}
              <div className="p-12">
                <img
                  src="/Resume.jpg"
                  alt="Resume"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
