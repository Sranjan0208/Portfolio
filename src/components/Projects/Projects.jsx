import { FaGithub, FaHome } from "react-icons/fa";
import { Link } from "react-scroll";
import Arrow from "../../assets/arrow.png";
import w20 from "../../assets/w20.png";

const Projects = () => {
  return (
    <section className="bg-[#1b141c] h-screen" id="projects">
      <div className="h-[10%] flex flex-col justify-center items-center pt-10 sm:pt-20">
        <h2 className="text-gray-600 text-base sm:text-lg left-[-15%] relative">
          {"<h2>"}
        </h2>
        <h1 className="text-4xl sm:text-8xl text-white font-bold">Projects</h1>
        <h2 className="text-gray-600 text-base sm:text-lg left-[15%] relative">
          {"</h2>"}
        </h2>
      </div>
      <div className="h-[50%] w-[80%] flex flex-col sm:flex-row border-2 border-[#01df98] justify-center items-center relative mt-10 sm:mt-[10%] mx-auto">
        <div className="w-full sm:w-[50%] h-[60%] mx-5 sm:mx-20 relative">
          <img
            src={w20}
            alt="w20"
            className="w-full h-full object-cover p-4 sm:p-8"
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#061d1c] opacity-70 py-2 px-4 rounded-lg">
              <a
                href="https://github.com/Sranjan0208/W20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="flex flex-col w-full sm:w-1/2 mx-5 sm:mx-10 ">
          <span className="text-gray-600 text-sm sm:text-lg mb-3 ">
            {"<p> "}
          </span>
          <span className="text-[#01df98] font-extrabold text-lg sm:text-3xl mb-3 mx-auto">
            W-Connect
          </span>
          <span className="text-sm sm:text-lg text-white mb-5">
            An AI-based web application that helps women mentee to connect with
            a women mentor and vice-versa to learn the skills such as Financial
            Literacy, Entrepreneurship, and Digital Literacy.
          </span>
          <span className="text-gray-600 text-sm  sm:text-lg relative right-[-85%] overflow-hidden w-[20%]">
            {"</p>"}
          </span>
        </p>
      </div>

      <div className="fixed bottom-0 left-0 m-3 sm:m-6 cursor-pointer">
        <Link
          to="home"
          smooth={true}
          spy={true}
          className="hover:bg-[#061d1c] text-white flex items-center justify-center w-12 sm:w-20 h-12 sm:h-20 rounded-full border-2 border-[#05ce90] transition ease-in-out duration-100 hover:text-green-500"
        >
          <button>
            <FaHome className="text-base sm:text-2xl" />
          </button>
        </Link>
      </div>

      <div className="fixed bottom-0 right-0 m-3 sm:m-6 cursor-pointer">
        <a
          href="https://github.com/Sranjan0208"
          className="hover:bg-[#061d1c] text-white flex items-center justify-center w-12 sm:w-20 h-12 sm:h-20 rounded-full border-2 border-[#05ce90] transition ease-in-out duration-100 hover:text-green-500"
        >
          <button>
            <FaGithub className="text-base sm:text-2xl" />
          </button>
        </a>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-10 h-10 mt-3 sm:mt-14 py-12 absolute">
          <img src={Arrow} alt="arrow" className="w-22 h-23 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
