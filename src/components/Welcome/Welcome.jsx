import { Link } from "react-router-dom";
import avatar from "../../assets/pixel.png";
import Particle from "./Particle";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
      <Particle className="z-neg-10" />

      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={avatar}
          className="w-32 rounded-full z-10 m-10"
          alt="Avatar"
        />
        <Link to="/intrusion">
          <button className="btn">Welcome</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
