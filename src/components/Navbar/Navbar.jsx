import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuClass = isMenuOpen ? "translate-x-0" : "-translate-x-full";
  const buttonClass =
    "py-2 px-4 text-lg text-white hover:bg-[#061d1c] hover:text-green-500 hover:border-[#05ce90] hover:border-solid transition duration-200 ease-in-out border-2 border-transparent";
  const menuButtonClass =
    "flex items-center justify-center p-2 text-white hover:bg-[#061d1c] hover:text-green-500 transition duration-200 ease-in-out";

  return (
    <div>
      <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center">
        <Link to="home" spy={true} smooth={true}>
          <button
            className={buttonClass}
            style={{ marginTop: "2rem", marginLeft: "2rem" }}
          >
            {"//01. <About/>"}
          </button>
        </Link>
        <Link to="projects" spy={true} smooth={true}>
          <button
            className={buttonClass}
            style={{ marginTop: "2rem", marginLeft: "2rem" }}
          >
            {"//02. <Projects/>"}
          </button>
        </Link>
        <Link
          to="blogs"
          spy={true}
          smooth={true}
          style={{
            marginTop: "2rem",
            marginRight: "2rem",
            marginLeft: "auto",
          }}
        >
          <button className={buttonClass}>{"//03. <Blogs/>"}</button>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <button
            className={buttonClass}
            style={{ marginTop: "2rem", marginRight: "2rem" }}
          >
            {"//04. <Contact/>"}
          </button>
        </Link>
      </div>

      <div className="absolute top-0 right-0 mt-4 mr-4 sm:hidden">
        <button className={menuButtonClass} onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div
            className={`absolute top-0 right-0 mt-16 py-2 px-4 bg-gray-800 rounded shadow-lg transition-all duration-300 ease-in-out transform ${menuClass}`}
          >
            <Link to="home" smooth={true} spy={true}>
              <button className={buttonClass} style={{ marginBottom: "1rem" }}>
                {"//01. <About/>"}
              </button>
            </Link>
            <Link to="projects" smooth={true} spy={true}>
              <button className={buttonClass} style={{ marginBottom: "1rem" }}>
                {"//02. <Projects/>"}
              </button>
            </Link>
            <Link to="blogs" smooth={true} spy={true}>
              <button className={buttonClass} style={{ marginBottom: "1rem" }}>
                {"//03. <Blogs/>"}
              </button>
            </Link>
            <Link to="contact" smooth={true} spy={true}>
              <button className={buttonClass} style={{ marginBottom: "1rem" }}>
                {"//04. <Contact/>"}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
