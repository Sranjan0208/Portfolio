import React from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";

const Skills = () => {
  return (
    <section className="h-screen" id="blogs">
      <div className="h-[10%] flex flex-col justify-center items-center pt-20 mt-10">
        <h2 className="text-gray-600 text-base sm:text-lg  left-[-15%] relative">
          {"<h3>"}
        </h2>
        <h1 className="text-4xl sm:text-8xl text-white font-bold">Blogs</h1>
        <h2 className="text-gray-600 text-lg left-[15%] relative">{"</h3>"}</h2>
      </div>
      <div className="flex flex-col items-center justify-center sm:flex-row  h-full">
        <div className="w-60 sm:w-80 h-[40%] sm:m-auto mt-20">
          <a href="https://hellodevs.hashnode.dev/intro-to-computer-networking">
            <img
              src={blog1}
              className="m-auto hover:border-2 hover:border-[#05ce90] hover:bg-[#1b141c] hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
              alt="Blog 1"
            />
          </a>
        </div>
        <div className="w-60 sm:w-80 h-[40%] m-auto ">
          <a href="https://hellodevs.hashnode.dev/how-computers-communicates">
            <img
              src={blog2}
              className="m-auto hover:border-2 hover:border-[#05ce90] hover:bg-[#1b141c] hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
              alt="Blog 2"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
