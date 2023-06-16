import { useState } from "react";
import HackerImg from "../../assets/hacker.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hacker = () => {
  const [time, setTime] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Greetings, wanderers!",
      "The Hackened Chronicles has fallen victim to a malevolent presence.",
      "The website you see before you has been hacked, shrouding it in mystery and danger.",
      "But worry not, for your skills are needed to reclaim this realm.",
      "Crack the riddle and unveil the password to reclaim control from the unknown hacker.",
      "Let the battle for control begin!",
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 20,
  });

  setTimeout(() => {
    setTime(true);
  }, 33000);

  return (
    <div className="background">
      <div className="flex flex-col justify-center items-center h-screen ">
        <img
          src={HackerImg}
          alt="Hacker"
          className="w-60 h-60 rounded-full m-10"
        />
        <div className="mb-10">
          <span className="text-[green] z-10 ">{text}</span>
          <Cursor />
        </div>
        {time ? (
          <Link to="/riddles">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
              Click Here!
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Hacker;
