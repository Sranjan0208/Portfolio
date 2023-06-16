import { Link } from "react-router-dom";
import "./HelloLoading.css";

const HelloLoading = () => {
  return (
    <>
      <div className="background h-screen">
        <h1 className="flex justify-center items-center h-screen text-6xl">
          HELLO
        </h1>

        <div className=" bottom-0 right-0 m-6 cursor-pointer absolute">
          <Link
            to="/home"
            className="hover:bg-[#061d1c] text-white flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#05ce90] transition ease-in-out duration-100 hover:text-green-500 "
          >
            <button>SKIP</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HelloLoading;
