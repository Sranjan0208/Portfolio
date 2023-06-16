import Typewriter from "typewriter-effect";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="background">
      <div className="flex justify-center items-center h-screen ">
        <div className="bubble shadow large bottom">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Welcome to The Hacked Chronicles! Get ready to embark on an exciting journey through the world of technology and creativity. Explore my projects that showcase the power of code and design. Let your imagination soar as you witness the fusion of artistry and innovation. Enjoy your visit and be inspired by the infinite possibilities of this digital realm."
                )
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
