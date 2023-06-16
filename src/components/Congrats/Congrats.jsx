import { Link } from "react-router-dom";

const Congrats = () => {
  return (
    <div className="background">
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="w-full sm:w-2/3 m-2 sm:m-5">
          Congratulations! You have cracked the riddle and successfully
          uncovered the secrets of The Hackened Chronicles.
        </p>
        <p className="w-full sm:w-2/3 mb-2 sm:mb-5">
          You have proven your skills and resourcefulness as a digital
          detective. Well done! Now, you can proceed further and explore the
          depths of our website to uncover even more exciting challenges and
          adventures. Stay vigilant, for there is always more to discover in
          this ever-evolving digital realm.
        </p>
        <p className="w-full sm:w-2/3 mb-2 sm:mb-5">
          Remember, curiosity and persistence are the keys to unraveling the
          mysteries that lie ahead. Enjoy your journey and embrace the thrill of
          the unknown!
        </p>
        <Link to="/home">
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            Happy Hacking!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Congrats;
