import Navbar from "../Navbar/Navbar";
import "./About.css";
import Coder from "../../assets/coder.png";
import Arrow from "../../assets/arrow.png";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        className="about-wrapper flex flex-col items-center justify-center h-screen"
        id="home"
      >
        <div
          className="flex  justify-center items-center  bg-[#1b141c] mx-20 "
          id="about"
        >
          <div className="w-[54%] ml-10" id="intro">
            <p className="mb-10">
              <span className="text-gray-600 text-lg" id="text">
                {"<p> "}
              </span>
              <span
                className="text-[#01df98] font-extrabold sm:text-xl text-base"
                id="text-1"
              >
                This is
              </span>
              <span className="text-gray-600 text-lg" id="text">
                {" </p>"}
              </span>
            </p>
            <p
              className="flex flex-col sm:mb-10 sm:ml-20 mb-5"
              id="name-section"
            >
              <span className="text-gray-600 text-lg" id="text">
                {"<h1>"}
              </span>
              <h1 className="text-white sm:text-6xl text-4xl" id="name">
                Sujal Ranjan
              </h1>
              <span className="text-gray-600 text-lg" id="text">
                {"</h1>"}
              </span>
            </p>
            <p className="description">
              <span className="text-gray-600 text-lg" id="text">
                {"<p> "}
              </span>
              <span
                className="text-[#01df98] font-extrabold sm:text-xl text-base"
                id="text-1"
              >
                Full Stack Developer
              </span>
              <span className="text-gray-600 text-lg" id="text">
                {" </p>"}
              </span>
            </p>
          </div>
          <div className="w-[50%] " id="coder-img">
            <img
              src={Coder}
              alt="coder"
              className="w-[60%] h-[60%] object-cover mx-20 "
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 mt-14 py-12 ">
            <img src={Arrow} alt="arrow" className="w-22 h-23 object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
