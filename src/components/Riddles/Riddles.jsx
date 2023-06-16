import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Riddles = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(
      "A language of ones and zeros, a code that hackers transpose. Shimmering with mystery and might, unravel me to reveal their insight. What am I?"
    );
  }, []);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password.toLowerCase() === "binary") {
      navigate("/congrats");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      handleFormSubmit(event);
    }
  };

  const windowWidth = window.innerWidth < 786;

  return (
    <div className="background">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center items-center m-10">
          <p className="sm:text-base text-sm">
            Enter Password: [
            <form onSubmit={handleFormSubmit} className="inline">
              <input
                className="bg-transparent focus:outline-none w-[40%]"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onKeyDown={handleKeyDown}
              />
              <button type="submit" style={{ display: "none" }}>
                Submit
              </button>
            </form>
            ]
          </p>
        </div>
        <div>
          <p className="sm:text-base text-sm m-auto">
            {windowWidth
              ? "Hint:A language of ones and zeros, a code that hackers transpose. Shimmering with mystery and might, unravel me to reveal their insight. What am I?"
              : "Hint: For a clue that hides in plain sight, venture into the console's light"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Riddles;
