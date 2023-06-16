import HackVideo from "../../assets/Hack.mp4";
import "./HackLoading.css";

const HackLoading = () => {
  return (
    <div className="background">
      <div className="absolute inset-0 z-10 ">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={HackVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HackLoading;
